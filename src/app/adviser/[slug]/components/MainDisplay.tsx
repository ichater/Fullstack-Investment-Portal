"use client";
import React, { useState } from "react";
import AdviserInformation from "./AdviserInformation";
import ClientDisplay from "./ClientDisplay";

type Props = {
  firstName: string;
  lastName: string;
  profileImage: string;
  email: string;
  city: string;
  phone: string;
  bio: string;
  clients: {
    firstName: string;
    lastName: string;
    clientSlug: string;
    email: string;
    profileImage: string;
    slug: string;
    bio: string;
    id: string;
  }[];
};

export default function MainDisplay({
  firstName,
  lastName,
  profileImage,
  email,
  city,
  phone,
  bio,
  clients,
}: Props) {
  const [displayState, setDisplayState] = useState<"advisor" | "client">(
    "advisor"
  );
  const handleClick = (setPage: "advisor" | "client") => {
    setDisplayState(setPage);
  };
  return (
    <div className="adviser-homepage_wrapper">
      <div className="toggle-view_tabs">
        <button className="adviser-tab" onClick={() => handleClick("advisor")}>
          Profile
        </button>
        <button className="adviser-tab" onClick={() => handleClick("client")}>
          Clients
        </button>
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
      {displayState === "client" && <ClientDisplay clients={clients} />}
    </div>
  );
}
