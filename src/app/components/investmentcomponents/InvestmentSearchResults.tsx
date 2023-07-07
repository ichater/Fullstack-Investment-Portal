import React from "react";
import FundResultDisplay from "./investment-search-display/FundResultDisplay";
import ShareResultDisplay from "./investment-search-display/ShareResultDisplay";
import { tempShareData } from "@/lib/tempdata/tempShares";
import { tempFundData } from "@/lib/tempdata/tempFundData";

export default function InvestmentResults() {
  return (
    <div className="investment-search-results_wrapper">
      {/* <FundResultDisplay funds={tempFundData} /> */}
      <ShareResultDisplay shares={tempShareData} />
    </div>
  );
}
