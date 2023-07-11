import { ManagedInvestment } from "@prisma/client";
import React from "react";
import FundRow from "./FundRow";
import { PageState } from "@/app/types";

type Props = {
  funds: ManagedInvestment[];
  investmentsPerpage: PageState;
  pageNumber: number;
};

export default function FundResultDisplay({
  funds,
  investmentsPerpage,
  pageNumber,
}: Props) {
  const filteredFunds = funds.filter(
    (_, index) =>
      index >= investmentsPerpage * pageNumber - investmentsPerpage &&
      index < investmentsPerpage * pageNumber
  );

  return (
    <table className="investment-search-result_table">
      {" "}
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
