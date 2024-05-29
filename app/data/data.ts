type MessageDeviation = {
  header: string,
  details: string
}

type Lines = {
  transport_mode: string,
  group_of_lines: string
}

export type DataStructure = {
  deviation_case_id: string,
  message_variants: MessageDeviation[],
  scope: {
    lines: Lines[]
  }
}

export default async function fetchSlData(): Promise<DataStructure[] | undefined> {
  const data = await fetch('https://deviations.integration.sl.se/v1/messages');

  if (!data.ok) {
    throw new Error('Failed at fetch data');
  }

  return data.json();
}
