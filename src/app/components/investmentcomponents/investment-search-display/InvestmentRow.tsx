import { investmentRowParser } from "@/lib/utils/investmentRowParser";
import React from "react";

type Base = {
  id: string;
  name: string;
  category: string;
};

type GenericInvestmentProps<T> = {
  investment: T;
};

export default function InvestmentRow<T extends Base>({
  investment,
}: GenericInvestmentProps<T>) {
  const investmentProps = [];
  for (let [key, val] of Object.entries(investment)) {
    if (key !== "id") {
      investmentProps.push(val);
    }
  }

  const arr: string[] = investmentRowParser({ investment });

  return (
    <tr className="investment-display_row">
      {arr.map((val) => (
        <td key={val}>{val.toString()}</td>
      ))}
    </tr>
  );
}
