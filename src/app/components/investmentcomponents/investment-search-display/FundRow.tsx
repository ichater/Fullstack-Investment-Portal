import React from "react";
import { ManagedInvestment } from "@prisma/client";

type Props = {
  fund: ManagedInvestment;
};

export default function FundRow({ fund }: Props) {
  return (
    <tr className="investment-display_row">
      <td>{fund.apir}</td>
      <td>{fund.name}</td>
      <td>{fund.nabOwned ? "true" : "false"}</td>
      <td>{fund.mer}</td>
      <td>{fund.category}</td>
    </tr>
  );
}
