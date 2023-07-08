import {
  InvestmentType,
  ManagedInvestmentFormState,
  PageState,
  ShareFormState,
} from "@/app/types";
import React from "react";

type Props = {
  investmentType: InvestmentType;
  pageState: PageState;
  shareFormState: ShareFormState;
  fundFormState: ManagedInvestmentFormState;
};

export default function InvestmentSubmitBtn({
  investmentType,
  pageState,
  shareFormState,
  fundFormState,
}: Props) {
  return <button className="investment-submit-btn">Search</button>;
}
