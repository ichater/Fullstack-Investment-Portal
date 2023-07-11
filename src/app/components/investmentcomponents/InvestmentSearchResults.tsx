import React, { useContext } from "react";
import FundResultDisplay from "./investment-search-display/FundResultDisplay";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";
import ShareResultDisplay from "./investment-search-display/ShareResultDisplay";
import { ManagedInvestment, Share } from "@prisma/client";

export default function InvestmentResults() {
  const { investmentType, pageState, pageNumber, displayedInvestments } =
    useContext(InvestmentDisplayContext);

  if (displayedInvestments.loading) {
    return <div>Loading...</div>;
  }

  if (!displayedInvestments.investments.length) {
    return <div>No investments to show</div>;
  }

  return (
    <>
      {investmentType === "funds" &&
        displayedInvestments.investments.length && (
          <FundResultDisplay
            pageState={pageState}
            pageNumber={pageNumber}
            funds={displayedInvestments.investments as ManagedInvestment[]}
          />
        )}
      {investmentType === "shares" &&
        displayedInvestments.investments.length && (
          <ShareResultDisplay
            pageState={pageState}
            pageNumber={pageNumber}
            shares={displayedInvestments.investments as Share[]}
          />
        )}
    </>
  );
}
