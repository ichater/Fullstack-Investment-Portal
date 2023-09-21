import { ShareInAccountParsed } from "@/types";
import React from "react";

export default function AccountShareTable({
  shares,
}: {
  shares: ShareInAccountParsed[];
}) {
  return (
    <>
      <thead>
        <tr>
          <th colSpan={4} className="account-investment_header">
            {" "}
            Shares:
          </th>
        </tr>
        <tr className="account-investment_subHeadings">
          <th> Name </th>
          <th> Category</th>
          <th> ASX</th>
          <th> value</th>
        </tr>
      </thead>
      <tbody className="account-investment_body">
        {shares.map((share) => (
          <tr key={share.id} className="investment-col_wrapper">
            <td>{share.name}</td>
            <td>{share.category}</td>
            <td>{share.asxCode}</td>
            <td>
              $<span>{share.value}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}
