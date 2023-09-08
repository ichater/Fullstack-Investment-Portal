import { AccountReturnData, ClientAccountInformation } from "@/types";
import React from "react";
import ClientAccountCard from "./ClientAccountCard";

type Props = {
  firstName: string;
  lastName: string;
  accounts: AccountReturnData[];
  params: { slug: string; clientSlug: string };
};

export default function ClientAccounts({
  firstName,
  lastName,
  accounts,
  params,
}: Props) {
  return (
    <div className="client-accounts_wrapper">
      <div>
        <h1>{firstName + " " + lastName + "'s"} accounts:</h1>
      </div>
      {accounts.map((account, i) => (
        <ClientAccountCard key={i} account={account} params={params} />
      ))}
    </div>
  );
}
