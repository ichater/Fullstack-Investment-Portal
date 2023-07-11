import { ManagedInvestment } from "@prisma/client";
import React from "react";
import FundRow from "./FundRow";
import { PageState } from "@/types";

type Props = {
  funds: ManagedInvestment[];
  pageState: PageState;
  pageNumber: number;
};

export default function FundResultDisplay({
  funds,
  pageState,
  pageNumber,
}: Props) {
  const filteredFunds = funds.filter(
    (_, index) =>
      index >= pageState * pageNumber - pageState &&
      index < pageState * pageNumber
  );

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
        {filteredFunds.map((fund) => (
          <FundRow key={fund.id} fund={fund} />
        ))}
      </tbody>
    </table>
  );
}
