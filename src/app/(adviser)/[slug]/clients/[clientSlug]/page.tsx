"use client";
import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import React, { useState } from "react";
import {
  tempClientSallie,
  sallieAccountsTemp,
} from "@/lib/tempdata/tempClient";

import ClientInformation from "./components/ClientInformation";

const getData = (clientSlug: string) => {
  return (
    tempClientSallie.slug === clientSlug && {
      clientData: tempClientSallie,
      accountData: sallieAccountsTemp,
    }
  );
};

export default function page({
  params: { slug, clientSlug },
}: {
  params: { slug: string; clientSlug: string };
}) {
  const [displayState, setDisplayState] = useState<"profile" | "accounts">(
    "profile"
  );

  const data = getData(clientSlug);

  if (!data) {
    return <div>No data!</div>;
  }

  const handleClick = (setPage: "profile" | "accounts") => {
    setDisplayState(setPage);
  };

  const { firstName, lastName, email, bio, access, profileImage } =
    data.clientData;
  return (
    <div className="adviser-homepage_wrapper">
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
      {displayState === "accounts" && <div> Accounts </div>}
    </div>
  );
}
