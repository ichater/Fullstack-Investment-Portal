"use client";
import React, { useState } from "react";
import ClientInformation from "./ClientInformation";
import ClientAccounts from "./ClientAccounts";
import { ClientDataParsed, ClientView } from "@/types";
import Link from "next/link";
import { useAdviserAuthContext } from "@/hooks/useContextHooks";
import { useQueryString } from "@/hooks/useQueryString";

interface Props extends ClientDataParsed {
  advisorSlug: string;
}

export default function ClientMainDisplay({
  id,
  advisorSlug,
  slug,
  firstName,
  lastName,
  email,
  bio,
  access,
  profileImage,
  accounts,
}: Props) {
  const { pushQueryString, searchParams } = useQueryString();

  const display = (searchParams?.get("view") as ClientView) || "profile";

  const [displayState, setDisplayState] = useState<ClientView>(display);

  const handleClick = (setPage: ClientView) => {
    setDisplayState(setPage);
    pushQueryString([{ name: "view", value: `${setPage}` }]);
  };

  return (
    <>
      {" "}
      <div className="toggle-view_tabs">
        <Link className="adviser-tab_link" href={`/adviser/${advisorSlug}`}>
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
          id={id}
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
          accounts={accounts}
          params={{ advisorSlug, slug }}
        />
      )}
    </>
  );
}
