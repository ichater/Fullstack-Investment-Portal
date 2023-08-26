import { ShareInAccountParsed } from "@/types";
import React from "react";

export default function AccountShareTable({
  shares,
}: {
  shares: ShareInAccountParsed[];
}) {
  return (
    <div>
      <h2>Shares:</h2>
      {shares.map((share) => (
        <div key={share.id} className="share-col_wrapper">
          <p>{share.name}</p>
          <p>{share.category}</p>
          <p>{share.asxCode}</p>
          <p>
            $<span>{share.value}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
