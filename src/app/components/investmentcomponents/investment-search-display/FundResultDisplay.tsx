import { ManagedInvestment } from "@prisma/client";
import React from "react";
import FundRow from "./FundRow";

type Props = {
  funds: ManagedInvestment[];
};

export default function FundResultDisplay({ funds }: Props) {
  return (
    <table className="investment-search-result_table">
      <thead className="investment-search-result_table_head">
        <tr>
          <th>APIR</th>
          <th>Name</th>
          <th>Nab Owned</th>
          <th>Mer</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody className="investment-search-result_table_body">
        {funds.map((fund) => (
          <FundRow key={fund.id} fund={fund} />
        ))}
      </tbody>
    </table>
  );
}
