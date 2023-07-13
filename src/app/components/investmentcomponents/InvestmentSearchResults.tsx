import React, { useContext } from "react";
import FundResultDisplay from "./investment-search-display/FundResultDisplay";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";
import ShareResultDisplay from "./investment-search-display/ShareResultDisplay";
import { ManagedInvestment, Share } from "@prisma/client";
import { arrayFromNumber } from "@/lib/utils/arrayFromNumber";
import PageNumber from "./investment-search-display/PageNumber";

export default function InvestmentResults() {
  const { investmentType, pageNumber, displayedInvestments } = useContext(
    InvestmentDisplayContext
  );

  console.log(displayedInvestments);

  const currentInvestmentDisplay: ManagedInvestment[] | Share[] | undefined =
    displayedInvestments.investments[pageNumber - 1];

  if (displayedInvestments.loading) {
    return <div>Loading...</div>;
  }

  if (!currentInvestmentDisplay || currentInvestmentDisplay.length === 0) {
    return <div>No investments to show</div>;
  }

  return (
    <>
      {!!investmentType && displayedInvestments.investments.length > 1 && (
        <div className="page-number_wrapper">
          {arrayFromNumber(displayedInvestments.investments.length).map(
            (_, i) => (
              <PageNumber key={i} pageNumber={i + 1} />
            )
          )}
        </div>
      )}
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
