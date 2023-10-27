"use client";
import { ReactNode, createContext, useState, useMemo } from "react";
import { queryParamParserPageState } from "@/lib/utils/queryparamparser";
import {
  InvestmentType,
  ManagedInvestmentCategory,
  InvestmentDisplayContextType,
  InvestmentDisplayState,
  DisplayedInvestments,
  ShareFormState,
  ManagedInvestmentFormState,
  PageState,
} from "@/types";
import { useSearchParams } from "next/navigation";
import {
  emptyDisplayedInvestments,
  emptyInvestmentFormState,
} from "./utils/InvestmentContextUtils";

export const InvestmentResultContext =
  createContext<InvestmentDisplayContextType>({
    displayedInvestments: emptyDisplayedInvestments,
    setDisplayedInvestments: (): any => {},
    investmentDisplayState: emptyInvestmentFormState,
    setInvestmentDisplayState: (): any => {},
    triggerSearch: false,
    setTriggerSearch: (): any => {},
  });

export default function InvestmentDisplayContext({
  children,
}: {
  children: ReactNode;
}) {
  const searchParams = useSearchParams();

  const numberPage = searchParams?.get("page");

  const localState: InvestmentDisplayState | null = !!localStorage.getItem(
    "investmentFormState"
  )
    ? (JSON.parse(
        localStorage.getItem("investmentFormState") || ""
      ) as InvestmentDisplayState)
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

  const defaultDisplayState: InvestmentDisplayState = {
    investmentType,
    shareState,
    fundState,
    pageData,
  };

  const [investmentDisplayState, setInvestmentDisplayState] =
    useState<InvestmentDisplayState>(defaultDisplayState);

  const [displayedInvestments, setDisplayedInvestments] =
    useState<DisplayedInvestments>(emptyDisplayedInvestments);

  const [triggerSearch, setTriggerSearch] = useState(
    !!investmentDisplayState.investmentType
  );

  const investmentDisplayMemoValue = useMemo(
    () => ({
      investmentDisplayState,
      setInvestmentDisplayState,
      triggerSearch,
      setTriggerSearch,
      displayedInvestments,
      setDisplayedInvestments,
    }),
    [
      investmentDisplayState,
      setInvestmentDisplayState,
      triggerSearch,
      setTriggerSearch,
      displayedInvestments,
      setDisplayedInvestments,
    ]
  );

  return (
    <InvestmentResultContext.Provider value={investmentDisplayMemoValue}>
      {children}
    </InvestmentResultContext.Provider>
  );
}
