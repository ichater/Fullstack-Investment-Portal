"use client";
import React, { useState, useEffect } from "react";
import AdviserInformation from "./AdviserInformation";
import ClientDisplay from "./ClientDisplay";
import { AdviserDataParsed } from "@/types";
import { useQueryString } from "@/hooks";

type ToggleView = "advisor" | "client";

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
  const { pushQueryString, searchParams } = useQueryString();

  const display = (searchParams?.get("view") as ToggleView) || "advisor";
  const [displayState, setDisplayState] = useState<ToggleView>(display);

  const handleClick = (setPage: "advisor" | "client") => {
    setDisplayState(setPage);
    pushQueryString([{ name: "view", value: setPage }]);
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
