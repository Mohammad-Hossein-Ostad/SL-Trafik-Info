import React from "react";
import fetchSlData from "@/app/data/data";

type TransportMode = "BUS" | "METRO" | "TRAIN" | "TRAM";
type TransportTag = "Tunnelbana" | "Pendeltag" | "Buss" | "Tvarbanan";

export default async function TransportMessages({
  transportMode,
  transportTag,
}: {
  transportMode: TransportMode;
  transportTag: TransportTag;
}) {
  const data = await fetchSlData();

  return (
    <>
      <h1>{transportTag}</h1>
      {data?.map((message) => {
        const { deviation_case_id, message_variants, scope } = message;
        const { lines } = scope;

        if (lines && lines.length > 0) {
          const { transport_mode } = lines[0];
          const { header, details } = message_variants[0];

          if (transport_mode === transportMode) {
            return (
              <div key={deviation_case_id}>
                <h1 className="text-4xl">{header}</h1>
                <p className="text-sm">{details}</p>
              </div>
            );
          }
        }
        return null;
      })}
    </>
  );
}
