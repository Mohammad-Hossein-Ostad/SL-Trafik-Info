import React from "react";
import TransportMessages from "../components/transport-messages/transport-messages.component";
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";

export default function Page() {
  return (
    <TransportMessages
      transportMode="TRAM"
      transportTag="Tvärbanans avvikelsemeddelanden"
    />
  );
}
