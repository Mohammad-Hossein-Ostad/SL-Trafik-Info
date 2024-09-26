type MessageVariants = {
  header: string;
  details: string;
};

type Scope = {
  lines: { transport_mode: string }[];
};

export type MessageResponse = {
  deviation_case_id: string;
  message_variants: MessageVariants[];
  scope: Scope;
};

export default async function fetchSlData(): Promise<MessageResponse[]> {
  const data = await fetch("https://deviations.integration.sl.se/v1/messages", {
    cache: "no-store",
  });

  if (!data.ok) {
    throw new Error("Failed at fetch data");
  }

  return data.json();
}
