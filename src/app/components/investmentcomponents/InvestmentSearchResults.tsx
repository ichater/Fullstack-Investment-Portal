import React, { useEffect } from "react";
import FundResultDisplay from "./investment-search-display/FundResultDisplay";
import ShareResultDisplay from "./investment-search-display/ShareResultDisplay";
import { ManagedInvestment, Share } from "@prisma/client";
import { arrayFromNumber } from "@/lib/utils/arrayFromNumber";
import PageNumber from "./investment-search-display/PageNumber";
import { useInvestmentSearch } from "@/hooks/useInvestmentSearch";
import { useInvestmentContext } from "@/context/InvestmentDisplayContext";

export default function InvestmentResults() {
  console.log("InvestmentResults render");
  const {
    investmentType,
    pageNumber,
    displayedInvestments,
    shareFormState,
    fundFormState,
    triggerSearch,
    setTriggerSearch,
  } = useInvestmentContext();

  const currentInvestmentDisplay: ManagedInvestment[] | Share[] | undefined =
    displayedInvestments.investments[pageNumber - 1];

  const { getShares, getManagedInvestments } = useInvestmentSearch();
  // sets investments on initial load if there are any relevant query parameters in the url
  useEffect(() => {
    if (investmentType === "shares") getShares(shareFormState);
    if (investmentType === "funds") getManagedInvestments(fundFormState);
    setTriggerSearch(false);
  }, [triggerSearch]);

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
