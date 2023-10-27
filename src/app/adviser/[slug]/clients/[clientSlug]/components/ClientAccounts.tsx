import { AccountDataParsed } from "@/types";
import React from "react";
import ClientAccountCard from "./ClientAccountCard";
import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import Link from "next/link";
import { useQueryString } from "@/hooks";

type Props = {
  firstName: string;
  lastName: string;
  accounts: AccountDataParsed[];
  params: { advisorSlug: string; slug: string };
};

export default function ClientAccounts({
  firstName,
  lastName,
  accounts,
  params,
}: Props) {
  const { pathname } = useQueryString();
  return (
    <div className="client-accounts_wrapper">
      <div className="client-accounts_header">
        <h1>{firstName + " " + lastName + "'s"} accounts:</h1>

        <SubmitButton text="Add Account" width={12} />
      </div>
      {accounts.map((account, i) => (
        <ClientAccountCard key={i} account={account} params={params} />
      ))}
    </div>
  );
}
