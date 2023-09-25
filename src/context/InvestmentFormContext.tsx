"use client";
import { ReactNode, createContext, useState, useMemo } from "react";
import { queryParamParserPageState } from "@/lib/utils/queryparamparser";
import {
  InvestmentType,
  ManagedInvestmentCategory,
  InvestmentFormContextType,
  InvestmentFormState,
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

  const defaultFormState: InvestmentFormState = {
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
