import { FundInAccountParsed } from "@/types";
import React from "react";

type Props = {
  type: "fund" | "sma";
  investments: FundInAccountParsed[];
};

export default function AccountFundTable({ type, investments }: Props) {
  return (
    <div>
      <h2>
        {type === "fund" ? "Managed Funds:" : "Seperately Managed Accounts:"}
      </h2>
      {investments.map((i) => (
        <div className="investment-col_wrapper" key={i.id}>
          <p>{i.name}</p>
          <p>{i.apir}</p>
          <p>{i.mer}</p>
          <p>
            $<span>{i.value}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
