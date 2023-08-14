import React, { useState } from "react";
import ClientCard from "./ClientCard";
import { AdvisorClientDisplay } from "@/types";
import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import AddClient from "./AddClient";

type Props = {
  clients: AdvisorClientDisplay[];
};

export default function ClientDisplay({ clients }: Props) {
  const [displayState, setDisplayState] = useState<
    "addclient" | "displayclients"
  >("displayclients");
  return (
    <div>
      <h2>{displayState === "displayclients" ? "Clients:" : "Add Client"}</h2>
      {displayState === "displayclients" &&
        clients.map((client) => (
          <div className="client-display">
            <ClientCard
              key={client.id}
              id={client.id}
              firstName={client.firstName}
              lastName={client.lastName}
              slug={client.slug}
              email={client.email}
              profileImage={client.profileImage}
              mainSlug={client.slug}
              bio={client.bio}
            />
          </div>
        ))}
      {displayState === "addclient" && <AddClient />}
      <div className="client-display-btn_wrapper">
        <SubmitButton
          onClick={() =>
            setDisplayState((displayState) =>
              displayState === "addclient" ? "displayclients" : "addclient"
            )
          }
          text={displayState === "addclient" ? "Display Clients" : "Add Client"}
          data-testid="Add Client"
          height={5}
          width={7}
        />
      </div>
    </div>
  );
}
