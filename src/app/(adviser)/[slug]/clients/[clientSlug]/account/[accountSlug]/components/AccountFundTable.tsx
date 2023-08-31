import { FundInAccountParsed } from "@/types";
import React from "react";

type Props = {
  type: "fund" | "sma";
  investments: FundInAccountParsed[];
};

export default function AccountFundTable({ type, investments }: Props) {
  return (
    <>
      <thead>
        <tr>
          <th colSpan={4} className="account-investment_header">
            {type === "fund"
              ? "Managed Funds:"
              : "Seperately Managed Accounts:"}
          </th>
        </tr>
        <tr className="account-investment_subHeadings">
          <th> Name </th>
          <th> apir</th>
          <th> mer</th>
          <th> value</th>
        </tr>
      </thead>
      <tbody className="account-investment_body">
        {investments.map((i) => (
          <tr className="investment-col_wrapper" key={i.id}>
            <td>{i.name}</td>
            <td>{i.apir}</td>
            <td>{i.mer}</td>
            <td>
              $<span>{i.value}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}
