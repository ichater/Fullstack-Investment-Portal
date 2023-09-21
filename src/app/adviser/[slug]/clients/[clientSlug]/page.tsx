"use client";
import React from "react";
import {
  tempClientSallie,
  sallieAccountsTemp,
} from "@/lib/tempdata/tempClient";
import { AccountDataParsed } from "@/types";
import ClientMainDisplay from "./components/ClientMainDisplay";
import { Metadata } from "next";
import AdviserAuthContextProvider from "@/context/AdviserAuthContext";

const getData = (clientSlug: string) => {
  return (
    tempClientSallie.slug === clientSlug && {
      clientData: tempClientSallie,
      accountData: sallieAccountsTemp,
    }
  );
};

export const metadata: Metadata = {
  title: "Client display",
};

export default function page({
  params: { slug, clientSlug },
}: {
  params: { slug: string; clientSlug: string };
}) {
  const data = getData(clientSlug);

  if (!data) {
    return <div>No data!</div>;
  }

  const { firstName, lastName, email, bio, access, profileImage } =
    data.clientData;

  const parsedAccountInformation: AccountDataParsed[] = data.accountData.map(
    (account) => ({
      ...account,
      id: account.id,
      totalValue: account.totalValue,
      cashAccount: account.cashAccount,
      adviserFee: account.adviserFee,
      adviserFeeType: account.adviserFeeType,
      cashInShares: account.cashInShares,
      cashInInvestments: account.cashInInvestments,
      name: account.name,
      slug: account.slug,
      investmentStratgy: account.investmentStrategy,
    })
  );

  return (
    <div className="adviser-homepage_wrapper">
      <AdviserAuthContextProvider>
        <ClientMainDisplay
          slug={slug}
          clientSlug={clientSlug}
          firstName={firstName}
          lastName={lastName}
          email={email}
          bio={bio}
          access={access}
          profileImage={profileImage}
          parsedAccountInformation={parsedAccountInformation}
        />
      </AdviserAuthContextProvider>
    </div>
  );
}
