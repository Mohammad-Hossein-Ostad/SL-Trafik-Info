import React from "react";
import { MessageResponse } from "../data/data";

type TransportTag =
  | "Tunnelbanans avvikelsemeddelanden"
  | "Pendeltågens avvikelsemeddelanden"
  | "Bussarnas avvikelsemeddelanden"
  | "Tvärbanans avvikelsemeddelanden";

// Page component handling dynamic slugs
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

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
          return null;
        })}
      </div>
    </div>
  );
}
