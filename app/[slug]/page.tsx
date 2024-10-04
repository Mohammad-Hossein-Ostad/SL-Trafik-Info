import { notFound } from "next/navigation";

type MessageVariants = {
  header: string;
  details: string;
};

type Scope = {
  lines: { transport_mode: string; group_of_lines: string }[];
};

type MessageResponse = {
  deviation_case_id: number;
  message_variants: MessageVariants[];
  scope: Scope;
}[];

export async function generateStaticParams() {
  const posts: MessageResponse = await fetch(
    "https://deviations.integration.sl.se/v1/messages",
  ).then((res) => res.json());

  return posts.map((post) => {
    const lines = post.scope.lines;

    if (lines && lines.length > 0) {
      const { transport_mode } = lines[0];
      return { slug: transport_mode.toLowerCase() };
    }

    return { slug: "unknown" };
  });
}

// Page component handleing dynamic slugs
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post: MessageResponse = await fetch(
    "https://deviations.integration.sl.se/v1/messages",
    { cache: "no-store" },
  ).then((res) => res.json());

  const transportModelList = post.map(
    (transport) => transport.scope.lines[0].transport_mode,
  );

  const uniqueTransportModes = transportModelList.filter(
    (model, index, array) => array.indexOf(model) === index,
  );

  if (!uniqueTransportModes.includes(slug.toUpperCase())) notFound();

  return (
    <div className="mx-auto mt-20 flex max-w-screen-xl flex-wrap items-center justify-between p-3">
      <div>
        {post.map((message) => {
          const { deviation_case_id, message_variants, scope } = message;
          const { lines } = scope;

          if (lines && lines.length > 0 && message_variants.length > 0) {
            const { transport_mode } = lines[0];
            const { header, details } = message_variants[0];

            if (transport_mode.toLowerCase() === slug) {
              return (
                <div
                  className="my-5 flex flex-col font-mono dark:text-white"
                  key={deviation_case_id}
                >
                  <article>
                    <h3 className="my-3 text-2xl">{header}</h3>
                    <p className="text-sm">{details}</p>
                  </article>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
}
