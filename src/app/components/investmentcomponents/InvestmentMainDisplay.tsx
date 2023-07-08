"use client";

import React, { useState } from "react";
import InvestmentSearchForm from "./InvestmentSearchForm";
import InvestmentSearchResults from "./InvestmentSearchResults";
import {
  InvestmentType,
  ManagedInvestmentFormState,
  PageState,
  ShareFormState,
} from "@/app/types";

export default function InvestmentDisplay() {
  const [investmentType, setInvestmentType] = useState<InvestmentType>("");
  const [pageState, setPageState] = useState<PageState>(10);
  const [shareSearchState, setShareSearchState] = useState<ShareFormState>({
    asx: "",
    name: "",
  });
  const [fundSearchState, setFundSearchState] =
    useState<ManagedInvestmentFormState>({
      category: "",
      name: "",
      nabOwned: "",
    });

  return (
    <div>
      <div className="investment-display_container">
        <h1 className="investment-display_header">Search investments:</h1>
        <InvestmentSearchForm
          pageState={pageState}
          setPageState={setPageState}
          investmentType={investmentType}
          setInvestmentType={setInvestmentType}
        />
        <InvestmentSearchResults />
      </div>
    </div>
  );
}
