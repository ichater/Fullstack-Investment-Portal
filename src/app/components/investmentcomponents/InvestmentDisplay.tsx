"use client";

import InvestmentResults from "./InvestmentResults";
import InvestmentSearch from "./InvestmentSearch";

export default function InvestmentDisplay() {
  return (
    <div>
      <h1>Search investments:</h1>
      <InvestmentSearch />
      <InvestmentResults />
    </div>
  );
}
