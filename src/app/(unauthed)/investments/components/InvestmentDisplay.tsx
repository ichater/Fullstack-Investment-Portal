"use client";

import InvestmentResults from "./InvestmentResults";
import InvestmentSearch from "./InvestmentSearch";

export default function InvestmentDisplay() {
  return (
    <div>
      <InvestmentSearch />
      <InvestmentResults />
    </div>
  );
}
