export const dynamicParams = false;

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
    { cache: "no-store" }
  ).then((res) => res.json());

  return posts.map((post) => ({
    slug: post.scope.lines[0].transport_mode.toLowerCase(),
  }));
}

// Page component handling dynamic slugs
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  const post: MessageResponse = await fetch(
    "https://deviations.integration.sl.se/v1/messages",
    { cache: "no-store" }
  ).then((res) => res.json());

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mt-20 p-4">
      <div>
        {post.map((message) => {
          const { deviation_case_id, message_variants, scope } = message;
          const { lines } = scope;

          if (lines && lines.length > 0) {
            const { transport_mode } = lines[0];
            const { header, details } = message_variants[0];
            if (transport_mode.toLowerCase() === slug) {
              return (
                <div key={deviation_case_id}>
                  <h3 className="text-2xl">{header}</h3>
                  <p className="text-sm">{details}</p>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
}
