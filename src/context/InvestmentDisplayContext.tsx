"use client";
import { ReactNode, createContext, useState, useMemo, useContext } from "react";
import { queryParamParserPageState } from "@/lib/utils/queryparamparser";
import {
  InvestmentType,
  ManagedInvestmentCategory,
  InvestmentDisplayContextType,
  InvestmentDisplayState,
  DisplayedInvestments,
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

  const defaultDisplayState: InvestmentDisplayState = {
    investmentType:
      (searchParams?.get("investment-type") as InvestmentType) || "",
    shareState: {
      name: searchParams?.get("name") || "",
      asx: searchParams?.get("asx") || "",
    },
    fundState: {
      name: searchParams?.get("name") || "",
      nabOwned: searchParams?.get("nab") === "true" ? true : "",
      category:
        (searchParams?.get("category") as ManagedInvestmentCategory) || "",
    },
    pageData: {
      perPage: queryParamParserPageState(searchParams?.get("per_page")),
      pageNumber: !!numberPage ? parseInt(numberPage) : 1,
    },
  };

  const [investmentDisplayState, setInvestmentDisplayState] =
    useState<InvestmentDisplayState>(defaultDisplayState);

  const [displayedInvestments, setDisplayedInvestments] =
    useState<DisplayedInvestments>(emptyDisplayedInvestments);

  const [triggerSearch, setTriggerSearch] = useState(false);

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
