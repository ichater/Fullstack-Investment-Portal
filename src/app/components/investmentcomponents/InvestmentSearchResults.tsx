import React, { useContext } from "react";
import FundResultDisplay from "./investment-search-display/FundResultDisplay";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";
import ShareResultDisplay from "./investment-search-display/ShareResultDisplay";
import { ManagedInvestment, Share } from "@prisma/client";

export default function InvestmentResults() {
  const { investmentType, pageNumber, displayedInvestments } = useContext(
    InvestmentDisplayContext
  );

  console.log("FULL INVESTMENTS", displayedInvestments.investments);

  const currentInvestmentDisplay: ManagedInvestment[] | Share[] | undefined =
    displayedInvestments.investments[pageNumber - 1];

  console.log("CURRENT INVESTMENTS UI", currentInvestmentDisplay, pageNumber);

  if (displayedInvestments.loading) {
    return <div>Loading...</div>;
  }

  if (!currentInvestmentDisplay) {
    return <div>No investments to show</div>;
  }

  return (
    <>
      {investmentType === "funds" && currentInvestmentDisplay.length && (
        <FundResultDisplay
          funds={currentInvestmentDisplay as ManagedInvestment[]}
        />
      )}
      {investmentType === "shares" && currentInvestmentDisplay.length && (
        <ShareResultDisplay shares={currentInvestmentDisplay as Share[]} />
      )}
    </>
  );
}
