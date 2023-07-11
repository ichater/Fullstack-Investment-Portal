"use client";

import React from "react";
import InvestmentSearchForm from "./InvestmentSearchForm";
import InvestmentSearchResults from "./InvestmentSearchResults";

export default function InvestmentDisplay() {
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
