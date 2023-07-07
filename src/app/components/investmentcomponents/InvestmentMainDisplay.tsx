"use client";

import InvestmentSearchResults from "./InvestmentSearchResults";
import InvestmentSearchForm from "./InvestmentSearchform";

export default function InvestmentDisplay() {
  return (
    <div>
      <div className="investment-display_container">
        <h1 className="investment-display_header">Search investments:</h1>
        <InvestmentSearchForm />
        <InvestmentSearchResults />
      </div>
    </div>
  );
}
