import { notFound } from "next/navigation";
import { fetchMessages } from "../lib/fetchers/slApi";

export async function generateStaticParams() {
  const posts = await fetchMessages();

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
  const post = await fetchMessages();

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
                    <h3 className="my-3 text-2xl dark:text-white">{header}</h3>
                    <p className="text-sm dark:text-gray-400">{details}</p>
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
