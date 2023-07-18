"use client";
import React, { useState } from "react";
import { SlugProp, AdviserData } from "@/types";
import { tempAdviser, tempAdvisersClients } from "@/lib/tempdata/tempAdviser";
import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import AdviserInformation from "./components/AdviserInformation";
import ClientCard from "./components/ClientCard";

const getData = (slug: string) => {
  return (
    tempAdviser.slug === slug && {
      tempAdviser,
      clientData: tempAdvisersClients,
    }
  );
};

export default function page({ params: { slug } }: SlugProp) {
  const [displayState, setDisplayState] = useState<"advisor" | "client">(
    "client"
  );

  const data = getData(slug);

  const handleClick = (setPage: "advisor" | "client") => {
    console.log(displayState);
    setDisplayState(setPage);
  };

  if (!data) {
    return <div>Nothing to see here</div>;
  }

  const { tempAdviser, clientData } = data;
  const { firstName, lastName, profileImage, email, city, phone, bio } =
    tempAdviser;
  return (
    <div className="adviser-homepage_wrapper">
      <div className="adviser-client_tabs">
        <SubmitButton
          text="Profile"
          height={3}
          width={7}
          onClick={() => handleClick("advisor")}
        />
        <SubmitButton
          text="Clients"
          height={3}
          width={7}
          onClick={() => handleClick("client")}
        />
      </div>
      {displayState === "advisor" && (
        <AdviserInformation
          firstName={firstName}
          lastName={lastName}
          profileImage={profileImage}
          email={email}
          city={city}
          phone={phone}
          bio={bio}
        />
      )}
      {displayState === "client" && (
        <div className="client-display">
          {clientData.map((client) => (
            <ClientCard
              key={client.id}
              firstName={client.firstName}
              lastName={client.lastName}
              slug={client.slug}
              email={client.email}
              profileImage={client.profileImage}
              mainSlug={slug}
              bio={client.bio}
            />
          ))}
        </div>
      )}
    </div>
  );
}
