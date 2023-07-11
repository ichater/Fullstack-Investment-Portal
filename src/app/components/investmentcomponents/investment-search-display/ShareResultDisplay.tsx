import { Share } from "@prisma/client";
import React from "react";
import ShareRow from "./ShareRow";
import { PageState } from "@/app/types";

type Props = {
  shares: Share[];
  investmentsPerpage: PageState;
  pageNumber: number;
};

export default function ShareResultDisplay({
  shares,
  investmentsPerpage,
  pageNumber,
}: Props) {
  const filteredShares = shares.filter(
    (_, index) =>
      index >= investmentsPerpage * pageNumber - investmentsPerpage &&
      index < investmentsPerpage * pageNumber
  );

  return (
    <div>
      <table className="investment-search-result_table">
        <thead className="investment-search-result_table_head">
          <tr>
            <th>ASX</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody className="investment-search-result_table_body">
          {filteredShares.map((share) => (
            <ShareRow key={share.id} share={share} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
