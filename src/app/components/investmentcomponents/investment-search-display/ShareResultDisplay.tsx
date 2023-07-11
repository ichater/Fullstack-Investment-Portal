import { Share } from "@prisma/client";
import React from "react";
import ShareRow from "./ShareRow";
import { PageState } from "@/types";

type Props = {
  shares: Share[];
  pageState: PageState;
  pageNumber: number;
};

export default function ShareResultDisplay({
  shares,
  pageState,
  pageNumber,
}: Props) {
  const filteredShares = shares.filter(
    (_, index) =>
      index >= pageState * pageNumber - pageState &&
      index < pageState * pageNumber
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
