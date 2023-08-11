import React from "react";
import ClientCard from "./ClientCard";
import { AdvisorClientDisplay } from "@/types";

type Props = {
  clients: AdvisorClientDisplay[];
};

export default function ClientDisplay({ clients }: Props) {
  return (
    <div className="client-display">
      {clients.map((client) => (
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
      ))}
    </div>
  );
}
