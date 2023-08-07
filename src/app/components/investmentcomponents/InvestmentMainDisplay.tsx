"use client";

import React, { useMemo, useRef } from "react";
import InvestmentSearchForm from "./InvestmentSearchForm";
import InvestmentSearchResults from "./InvestmentSearchResults";
import InvestmentSubmitBtn from "./investment-search-form/InvestmentSubmitBtn";
import ShareSearchDisplay from "./investment-search-form/ShareSearchDisplay";
import FundSearchDisplay from "./investment-search-form/FundSearchDisplay";

export default function InvestmentDisplay() {
  // console.log("main display rendered");
  let shareName = useRef("");
  let asx = useRef("");
  const InvestmentSubmitBtnMemo = useMemo(
    () => <InvestmentSubmitBtn shareName={shareName} asx={asx} />,
    []
  );
  const ShareSearchDisplayMemo = useMemo(
    () => <ShareSearchDisplay shareName={shareName} asx={asx} />,
    []
  );
  const FundSearchDisplayMemo = useMemo(() => <FundSearchDisplay />, []);

  return (
    <div>
      <div className="investment-display_container">
        <h1 className="investment-display_header">Search investments:</h1>
        <InvestmentSearchForm
          ShareSearchDisplayMemo={ShareSearchDisplayMemo}
          FundSearchDisplayMemo={FundSearchDisplayMemo}
        >
          {InvestmentSubmitBtnMemo}
        </InvestmentSearchForm>
        <div className="investment-search-results_wrapper">
          <InvestmentSearchResults />
        </div>
      </div>
    </div>
  );
}
