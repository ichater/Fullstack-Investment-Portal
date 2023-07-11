import React, { useContext, useEffect, useState } from "react";
import FundResultDisplay from "./investment-search-display/FundResultDisplay";
import { tempFundData } from "@/lib/tempdata/tempFundData";
import { useSearchParams } from "next/navigation";
import { PageState } from "@/app/types";
import { queryParamParserPageState } from "@/lib/utils/queryparamparser";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";
import ShareResultDisplay from "./investment-search-display/ShareResultDisplay";
import { tempShareData } from "@/lib/tempdata/tempShares";

export default function InvestmentResults() {
  const { investmentType, investmentsPerpage, pageNumber } = useContext(
    InvestmentDisplayContext
  );

  return (
    <div className="investment-search-results_wrapper">
      {investmentType === "funds" && (
        <FundResultDisplay
          investmentsPerpage={investmentsPerpage}
          pageNumber={pageNumber}
          funds={tempFundData}
        />
      )}
      {investmentType === "shares" && (
        <ShareResultDisplay
          investmentsPerpage={investmentsPerpage}
          pageNumber={pageNumber}
          shares={tempShareData}
        />
      )}
    </div>
  );
}
