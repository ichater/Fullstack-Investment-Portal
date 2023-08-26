import React from "react";
import NavigationTabs from "./components/NavigationTabs";

import AccountTables from "./components/AccountTables";
import {
  sallieAccountsTemp,
  tempAdviser,
  tempClientSallie,
  tempShares,
  tempFunds,
  tempSMAs,
} from "@/lib/tempdata";

const getData = (accountSlug: string) => {
  return {
    clientData: tempClientSallie,
    accountData: sallieAccountsTemp[0],
    adviserData: tempAdviser,
  };
};

export default function page({
  params: { slug, clientSlug, accountSlug },
}: {
  params: { slug: string; clientSlug: string; accountSlug: string };
}) {
  const { accountData } = getData(accountSlug);

  return (
    <div className="account-display_wrapper">
      <NavigationTabs slug={slug} clientSlug={clientSlug} />
      <AccountTables
        accountValues={{
          totalValue: accountData.totalValue,
          cashAccount: accountData.cashAccount,
          cashinShares: accountData.cashInShares,
          cashInInvestments: accountData.cashInInvestments,
          shares: tempShares,
          funds: tempFunds,
          sma: tempSMAs,
        }}
      />
    </div>
  );
}
