"use client";
import React, { useState } from "react";
import AdviserInformation from "./AdviserInformation";
import ClientDisplay from "./ClientDisplay";
import { AdviserDataParsed } from "@/types";

export default function MainDisplay({
  firstName,
  lastName,
  profileImage,
  email,
  city,
  phone,
  bio,
  slug,
  clients,
}: AdviserDataParsed) {
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
      {displayState === "client" && clients.length && (
        <ClientDisplay clients={clients} advisorSlug={slug} />
      )}
    </div>
  );
}
