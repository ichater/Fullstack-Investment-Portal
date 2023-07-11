import { Share } from "@prisma/client";
import React from "react";

type Props = {
  share: Share;
};

export default function ShareRow({ share }: Props) {
  return (
    <tr className="investment-display_row">
      <td>{share.asxCode}</td>
      <td>{share.name}</td>
      <td>{share.category}</td>
    </tr>
  );
}
