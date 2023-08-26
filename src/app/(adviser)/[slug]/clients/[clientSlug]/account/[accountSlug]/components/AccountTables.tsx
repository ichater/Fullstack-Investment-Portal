import { AccountValues } from "@/types";
import React from "react";
import AccountShareTable from "./AccountShareTable";
import AccountFundTable from "./AccountFundTable";

export default function AccountTables({
  accountValues,
}: {
  accountValues: AccountValues;
}) {
  const { totalValue, cashAccount, shares, funds, sma } = accountValues;

  return (
    <div>
      {!!shares && shares?.length && <AccountShareTable shares={shares} />}
      {!!funds && funds?.length && (
        <AccountFundTable type="fund" investments={funds} />
      )}
      {!!sma && sma?.length && (
        <AccountFundTable type="sma" investments={sma} />
      )}

      <p>${cashAccount}</p>
    </div>
  );
}
