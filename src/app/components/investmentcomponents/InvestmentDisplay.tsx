"use client";

import { useState } from "react";
import InvestmentResults from "./InvestmentResults";
import InvestmentSearch from "./InvestmentSearch";

export default function InvestmentDisplay() {
  return (
    <div>
      <div className="investment-display_container">
        <h1 className="investment-display_header">Search investments:</h1>
        <InvestmentSearch />
        <InvestmentResults />
      </div>
    </div>
  );
}
