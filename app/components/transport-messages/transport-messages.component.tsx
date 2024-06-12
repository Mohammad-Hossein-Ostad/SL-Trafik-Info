import fetchSlData from "@/app/data/data";
import React from "react";

type TransportMode = 'BUS' | 'METRO' | 'TRAIN' | 'TRAM';

export default async function TransportMessages({ transportMode }: {
  transportMode: TransportMode
}) {
  const data = await fetchSlData();

  return (
    <>
      {
        data && data.map(message => {
          const { deviation_case_id, message_variants, scope } = message
          const { lines } = scope;
          const { transport_mode } = lines[0];
          const { header, details } = message_variants[0];

          if (transport_mode === `${transportMode}`) {
            return (
              <div key={deviation_case_id}>
                <h1>{header}</h1>
                <p>{details}</p>
              </div >
            )
          }

          return null;
        })
      }
    </>
  )

}
