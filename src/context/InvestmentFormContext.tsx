"use client";
import { ReactNode, createContext, useState, useMemo } from "react";
import { queryParamParserPageState } from "@/lib/utils/queryparamparser";
import {
  InvestmentType,
  ManagedInvestmentCategory,
  InvestmentFormContextType,
  InvestmentFormState,
  ShareFormState,
  ManagedInvestmentFormState,
  PageState,
} from "@/types";
import { useSearchParams } from "next/navigation";
import { emptyInvestmentFormState } from "./utils/InvestmentContextUtils";

export const InvestmentSearchContext = createContext<InvestmentFormContextType>(
  {
    investmentFormState: emptyInvestmentFormState,
    setInvestmentFormState: (): any => {},
  }
);

export default function InvestmentFormContext({
  children,
}: {
  children: ReactNode;
}) {
  const searchParams = useSearchParams();

  const numberPage = searchParams?.get("page");

  const localState: InvestmentFormState | null = !!localStorage.getItem(
    "investmentFormState"
  )
    ? (JSON.parse(
        localStorage.getItem("investmentFormState") || ""
      ) as InvestmentFormState)
    : null;

  const investmentType: InvestmentType = searchParams?.get("investment-type")
    ? (searchParams?.get("investment-type") as InvestmentType)
    : !!localState
    ? (localState.investmentType as InvestmentType)
    : "";

  const shareState: ShareFormState = {
    name: !!searchParams?.get("name")
      ? searchParams.get("name") || ""
      : !!localState
      ? localState.shareState.name
      : "",
    asx: !!searchParams?.get("asx")
      ? searchParams.get("asx") || ""
      : !!localState
      ? localState.shareState.asx
      : "",
  };

  const fundState: ManagedInvestmentFormState = {
    name: searchParams?.get("name")
      ? searchParams?.get("name") || ""
      : !!localState
      ? localState.fundState.name
      : "",
    nabOwned:
      searchParams?.get("nab") === "true"
        ? true
        : !!localState
        ? localState.fundState.nabOwned
        : "",
    category: searchParams?.get("category")
      ? (searchParams.get("category") as ManagedInvestmentCategory) || ""
      : !!localState
      ? localState.fundState.category
      : "",
  };

  const pageData: {
    perPage: PageState;
    pageNumber: number;
  } = {
    perPage:
      queryParamParserPageState(searchParams?.get("per_page")) ||
      (localState && localState.pageData.perPage) ||
      10,
    pageNumber: !!numberPage
      ? parseInt(numberPage)
      : !!localState
      ? localState.pageData.pageNumber
      : 1,
  };

  const defaultFormState: InvestmentFormState = {
    investmentType,
    shareState,
    fundState,
    pageData,
  };

  const [investmentFormState, setInvestmentFormState] =
    useState<InvestmentFormState>(defaultFormState);

  const investmentFormMemoValue = useMemo(
    () => ({
      investmentFormState,
      setInvestmentFormState,
    }),
    [investmentFormState, setInvestmentFormState]
  );

  return (
    <InvestmentSearchContext.Provider value={investmentFormMemoValue}>
      {children}
    </InvestmentSearchContext.Provider>
  );
}
