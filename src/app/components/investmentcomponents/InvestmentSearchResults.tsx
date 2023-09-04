import React, { useEffect, useState } from "react";
import FundResultDisplay from "./investment-search-display/FundResultDisplay";
import ShareResultDisplay from "./investment-search-display/ShareResultDisplay";
import { arrayFromNumber } from "@/lib/utils/arrayFromNumber";
import PageNumber from "./investment-search-display/PageNumber";
import { useInvestmentSearch } from "@/hooks/useInvestmentSearch";
import { useInvestmentDisplayContext } from "@/hooks/contextHooks";
import { DisplayFund, DisplayShare } from "@/types";
import { investmentsPageParser } from "@/lib/utils/investmentdataparser";
import PagesWrapper from "./investment-search-display/PagesWrapper";

export default function InvestmentResults() {
  const {
    displayedInvestments,
    investmentDisplayState,
    setTriggerSearch,
    triggerSearch,
  } = useInvestmentDisplayContext();
  const { investmentType, shareState, fundState, pageData } =
    investmentDisplayState;
  const data = investmentsPageParser(
    displayedInvestments.investments,
    pageData.perPage
  );

  const [currentInvestmentDisplay, setCurrentInvestmentDisplay] = useState<
    DisplayShare[] | DisplayFund[]
  >(data[pageData.pageNumber - 1]);

  useEffect(() => {
    setCurrentInvestmentDisplay(data[pageData.pageNumber - 1]);
  }, [triggerSearch, displayedInvestments]);

  const { getShares, getManagedInvestments } = useInvestmentSearch();

  useEffect(() => {
    if (investmentType === "shares") getShares(shareState);
    if (investmentType === "funds") getManagedInvestments(fundState);
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
      {!!investmentType && data.length > 1 && (
        <PagesWrapper
          data={data}
          setCurrentInvestmentDisplay={setCurrentInvestmentDisplay}
        />
      )}
      {investmentType === "funds" && currentInvestmentDisplay.length && (
        <FundResultDisplay funds={currentInvestmentDisplay as DisplayFund[]} />
      )}
      {investmentType === "shares" && currentInvestmentDisplay.length && (
        <ShareResultDisplay
          shares={currentInvestmentDisplay as DisplayShare[]}
        />
      )}
    </>
  );
}
