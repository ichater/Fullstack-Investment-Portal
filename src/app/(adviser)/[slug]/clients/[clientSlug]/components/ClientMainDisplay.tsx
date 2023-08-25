"use client";
import React, { useState } from "react";
import ClientInformation from "./ClientInformation";
import ClientAccounts from "./ClientAccounts";
import { ACCESS } from "@prisma/client";
import { ClientAccountInformation } from "@/types";
import Link from "next/link";

export default function ClientMainDisplay({
  slug,
  clientSlug,
  firstName,
  lastName,
  email,
  bio,
  access,
  profileImage,
  parsedAccountInformation,
}: {
  slug: string;
  clientSlug: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  access: ACCESS;
  profileImage: string;
  parsedAccountInformation: ClientAccountInformation[];
}) {
  const [displayState, setDisplayState] = useState<"profile" | "accounts">(
    "accounts"
  );

  const handleClick = (setPage: "profile" | "accounts") => {
    setDisplayState(setPage);
  };
  return (
    <>
      {" "}
      <div className="toggle-view_tabs">
        <Link className="adviser-tab_link" href={`/${slug}`}>
          <button className="adviser-tab">Adviser Profile</button>
        </Link>
        <button className="adviser-tab" onClick={() => handleClick("profile")}>
          Profile
        </button>
        <button className="adviser-tab" onClick={() => handleClick("accounts")}>
          Clients
        </button>
      </div>
      {displayState === "profile" && (
        <ClientInformation
          firstName={firstName}
          lastName={lastName}
          email={email}
          profileImage={profileImage}
          access={access}
          bio={bio}
        />
      )}
      {displayState === "accounts" && (
        <ClientAccounts
          firstName={firstName}
          lastName={lastName}
          accounts={parsedAccountInformation}
          params={{ slug, clientSlug }}
        />
      )}
    </>
  );
}
