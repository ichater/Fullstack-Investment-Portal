import { AccountValues } from "@/types";
import React from "react";
import AccountShareTable from "./AccountShareTable";
import AccountFundTable from "./AccountFundTable";

export default function AccountTables({
  accountValues,
}: {
  accountValues: AccountValues;
}) {
  const { cashAccount, shares, funds, sma } = accountValues;

  return (
    <table className="client-account_table">
      {!!shares && shares?.length && <AccountShareTable shares={shares} />}
      {!!funds && funds?.length && (
        <AccountFundTable type="fund" investments={funds} />
      )}
      {!!sma && sma?.length && (
        <AccountFundTable type="sma" investments={sma} />
      )}
      <tbody>
        <tr>
          <td>Cash Account:</td>
          <td>${cashAccount}</td>
        </tr>
      </tbody>
    </table>
  );
}
