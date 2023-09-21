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
import FeeDisplay from "./components/FeeDisplay";

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

  const { totalValue, cashAccount, cashInShares, cashInInvestments } =
    accountData;
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
            shares: tempShares,
            funds: tempFunds,
            sma: tempSMAs,
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
