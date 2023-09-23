import React from "react";
import NavigationTabs from "./components/NavigationTabs";
import AccountTables from "./components/AccountTables";
import FeeDisplay from "./components/FeeDisplay";
import { fetchAccountByClient } from "@/lib/api/fetchAdviserData";
import { cookies } from "next/headers";

const getData = async (
  jwt: string,
  clientSlug: string,
  accountSlug: string
) => {
  return await fetchAccountByClient(jwt, clientSlug, accountSlug);
};

export default async function page({
  params: { slug, clientSlug, accountSlug },
}: {
  params: { slug: string; clientSlug: string; accountSlug: string };
}) {
  const cookie = cookies();
  const jwt = cookie.get("jwt");

  if (!jwt) {
    return <div>No auth detected</div>;
  }

  const data = await getData(jwt.value, clientSlug, accountSlug);

  if (!data || !data.account) {
    return <div>Nothing to see here</div>;
  }

  const {
    totalValue,
    cashAccount,
    cashInShares,
    cashInInvestments,
    shares,
    managedFunds,
    sma,
  } = data.account;

  return (
    <div className="account-display_wrapper">
      <NavigationTabs slug={slug} clientSlug={clientSlug} />
      <div className="fee-account-table_wrapper">
        <AccountTables
          accountValues={{
            totalValue: totalValue,
            cashAccount: cashAccount,
            cashinShares: cashInShares,
            cashInInvestments: cashInInvestments,
            shares: shares,
            funds: managedFunds,
            sma: sma,
          }}
        />
        <FeeDisplay
          totalValue={totalValue}
          cashInInvestments={cashInInvestments}
        />
      </div>
    </div>
  );
}
