"use client";
import React, { useState } from "react";
import ClientInformation from "./ClientInformation";
import ClientAccounts from "./ClientAccounts";
import { ACCESS } from "@prisma/client";
import { AccountReturnData, ClientView } from "@/types";
import Link from "next/link";
import { useAdviserAuthContext } from "@/hooks/useContextHooks";
import { useQueryString } from "@/hooks/useQueryString";

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
  parsedAccountInformation: AccountReturnData[];
}) {
  const { pushQueryString, searchParams } = useQueryString();

  const display = (searchParams?.get("view") as ClientView) || "profile";

  const [displayState, setDisplayState] = useState<ClientView>(display);

  const handleClick = (setPage: ClientView) => {
    setDisplayState(setPage);
    pushQueryString([{ name: "view", value: `${setPage}` }]);
  };

  const { authState } = useAdviserAuthContext();

  console.log("authstate from client:", authState);

  return (
    <>
      {" "}
      <div className="toggle-view_tabs">
        <Link className="adviser-tab_link" href={`/adviser/${slug}`}>
          <button className="adviser-tab">Adviser Profile</button>
        </Link>
        <button className="adviser-tab" onClick={() => handleClick("profile")}>
          Profile
        </button>
        <button className="adviser-tab" onClick={() => handleClick("accounts")}>
          Accounts
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
