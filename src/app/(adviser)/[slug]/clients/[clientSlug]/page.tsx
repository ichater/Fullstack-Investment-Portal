"use client";
import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import React, { useState } from "react";
import {
  tempClientSallie,
  sallieAccountsTemp,
} from "@/lib/tempdata/tempClient";

import ClientInformation from "./components/ClientInformation";
import ClientAccounts from "./components/ClientAccounts";
import { ClientAccountInformation } from "@/types";
import Link from "next/link";

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
    "accounts"
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

  const parsedAccountInformation: ClientAccountInformation[] =
    data.accountData.map((account) => ({
      id: account.id,
      clientId: account.clientId,
      totalValue: account.totalValue,
      cashAccount: account.cashAccount,
      adviserFee: account.adviserFee,
      adviserFeeType: account.adviserFeeType,
      cashInShares: account.cashInShares,
      cashInInvestments: account.cashInInvestments,
      name: account.name,
      slug: account.slug,
      investmentStratgy: account.investmentStrategy,
    }));

  return (
    <div className="adviser-homepage_wrapper">
      <Link href={`/${slug}`}>Profile (Move to Navbar later)</Link>
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
    </div>
  );
}
