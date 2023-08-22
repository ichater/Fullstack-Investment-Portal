"use client";
import React from "react";
import {
  tempClientSallie,
  sallieAccountsTemp,
} from "@/lib/tempdata/tempClient";
import { ClientAccountInformation } from "@/types";
import Link from "next/link";
import ClientMainDisplay from "./components/ClientMainDisplay";

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
  const data = getData(clientSlug);

  if (!data) {
    return <div>No data!</div>;
  }

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
    </div>
  );
}
