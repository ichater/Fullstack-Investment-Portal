import React from "react";
import InvestmentDisplay from "@/app/components/investmentcomponents/InvestmentMainDisplay";
import InvestmentDisplayProvider from "@/context/InvestmentDisplayContext";

export default function page() {
  return (
    <div>
      <InvestmentDisplayProvider>
        <InvestmentDisplay />
      </InvestmentDisplayProvider>
    </div>
  );
}
