"use client";

import React from "react";
import InvestmentSearchForm from "./InvestmentSearchForm";
import InvestmentSearchResults from "./InvestmentSearchResults";
import InvestmentDisplayProvider from "@/context/InvestmentDisplayContext";

export default function InvestmentDisplay() {
  return (
    <div>
      <div className="investment-display_container">
        <h1 className="investment-display_header">Search investments:</h1>
        <InvestmentDisplayProvider>
          <InvestmentSearchForm />
          <InvestmentSearchResults />
        </InvestmentDisplayProvider>
      </div>
    </div>
  );
}
