import React from "react";
import fetchSlData from "@/app/data/data";

type TransportMode = "BUS" | "METRO" | "TRAIN" | "TRAM";
type TransportTag =
  | "Tunnelbanans avvikelsemeddelanden"
  | "Pendeltågens avvikelsemeddelanden"
  | "Bussarnas avvikelsemeddelanden"
  | "Tvärbanans avvikelsemeddelanden";

export default async function TransportMessages({
  transportMode,
  transportTag,
}: {
  transportMode: TransportMode;
  transportTag: TransportTag;
}) {
  const data = await fetchSlData();

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mt-20 p-4">
      <div className="text-4xl pb-4">
        <h2>{transportTag}</h2>
      </div>
      {data?.map((message) => {
        const { deviation_case_id, message_variants, scope } = message;
        const { lines } = scope;

        if (lines && lines.length > 0) {
          const { transport_mode } = lines[0];
          const { header, details } = message_variants[0];

          if (transport_mode === transportMode) {
            return (
              <div key={deviation_case_id}>
                <h3 className="text-2xl">{header}</h3>
                <p className="text-sm">{details}</p>
              </div>
            );
          }
        }
        return null;
      })}
    </div>
  );
}
