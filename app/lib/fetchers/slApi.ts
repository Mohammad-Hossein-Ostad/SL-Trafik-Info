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

export async function fetchMessages(): Promise<MessageResponse> {
  const res = await fetch("https://deviations.integration.sl.se/v1/messages", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
