import { Share } from "@prisma/client";
import React from "react";
import ShareRow from "./ShareRow";

type Props = {
  shares: Share[];
};

export default function ShareResultDisplay({ shares }: Props) {
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
          {shares.map((share) => (
            <ShareRow key={share.id} share={share} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
