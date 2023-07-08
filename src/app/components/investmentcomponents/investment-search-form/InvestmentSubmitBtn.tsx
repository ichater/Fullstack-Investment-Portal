import React, { useContext } from "react";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";

export default function InvestmentSubmitBtn() {
  const { pageState, investmentType, shareFormState, fundFormState } =
    useContext(InvestmentDisplayContext);
  return <button className="investment-submit-btn">Search</button>;
}
