type MessageVariants = {
  header: string;
  details: string;
};

type Scope = {
  lines: { transport_mode: string; group_of_lines: string }[];
};

export type MessageResponse = {
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
    slug: post.scope.lines[0].transport_mode,
  }));
}
