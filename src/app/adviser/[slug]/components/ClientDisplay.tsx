import React, { useState } from "react";
import ClientCard from "./ClientCard";
import { ClientDataParsed } from "@/types";
import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import AddClient from "./AddClient";

type Props = {
  clients: ClientDataParsed[];
  advisorSlug: string;
};

export default function ClientDisplay({ clients, advisorSlug }: Props) {
  const [displayState, setDisplayState] = useState<
    "addclient" | "displayclients"
  >("displayclients");
  return (
    <div>
      <h2 className="client-display_heading">
        {displayState === "displayclients" ? "Client List:" : "Add Client:"}
      </h2>
      <div className="client-display-btn_wrapper">
        <SubmitButton
          onClick={() =>
            setDisplayState((displayState) =>
              displayState === "addclient" ? "displayclients" : "addclient"
            )
          }
          text={displayState === "addclient" ? "Display Clients" : "Add Client"}
          data-testid="Add Client"
          height={3}
          width={15}
          backgroundColor="rgb(72, 92, 176)"
          onHover={{
            backgroundColor: "rgb(111, 128, 199)",
            fontSize: 1.5,
          }}
        />
      </div>
      {displayState === "displayclients" &&
        clients.map((client) => (
          <div key={client.id} className="client-display">
            <ClientCard
              id={client.id}
              firstName={client.firstName}
              lastName={client.lastName}
              advisorSlug={advisorSlug}
              email={client.email}
              profileImage={client.profileImage}
              clientSlug={client.slug}
              bio={client.bio}
            />
          </div>
        ))}
      {displayState === "addclient" && <AddClient />}
    </div>
  );
}
