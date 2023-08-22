"use client";
import React, { useState } from "react";
import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import ClientInformation from "./ClientInformation";
import ClientAccounts from "./ClientAccounts";
import { ACCESS } from "@prisma/client";
import { ClientAccountInformation } from "@/types";

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
        <SubmitButton
          text="Profile"
          height={3}
          width={7}
          onClick={() => handleClick("profile")}
        />
        <SubmitButton
          text="Accounts"
          height={3}
          width={9}
          onClick={() => handleClick("accounts")}
        />
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
