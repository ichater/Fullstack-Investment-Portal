import React from "react";
import InvestmentDisplay from "@/app/components/investmentcomponents/InvestmentMainDisplay";
import InvestmentDisplayProvider from "@/context/InvestmentDisplayContext";
import InvestmentFormProvider from "@/context/InvestmentFormContext";

export default function page() {
  return (
    <div>
      <InvestmentFormProvider>
        <InvestmentDisplayProvider>
          <InvestmentDisplay />
        </InvestmentDisplayProvider>
      </InvestmentFormProvider>
    </div>
  );
}
