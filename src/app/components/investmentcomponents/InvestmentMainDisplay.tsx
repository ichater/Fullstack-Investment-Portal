"use client";

import React, { useContext, useEffect } from "react";
import InvestmentSearchForm from "./InvestmentSearchForm";
import InvestmentSearchResults from "./InvestmentSearchResults";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";
import { useInvestmentSearch } from "@/hooks/useInvestmentSearch";

export default function InvestmentDisplay() {
  const { investmentType, shareFormState, fundFormState } = useContext(
    InvestmentDisplayContext
  );
  const { getShares, getManagedInvestments } = useInvestmentSearch();
  useEffect(() => {
    if (investmentType === "shares") getShares(shareFormState);
    if (investmentType === "funds") getManagedInvestments(fundFormState);
  }, []);
  return (
    <div>
      <div className="investment-display_container">
        <h1 className="investment-display_header">Search investments:</h1>
        <InvestmentSearchForm />
        <div className="investment-search-results_wrapper">
          <InvestmentSearchResults />
        </div>
      </div>
    </div>
  );
}
