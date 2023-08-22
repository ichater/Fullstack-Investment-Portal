"use client";
import { ReactNode, createContext, useState, useMemo, useContext } from "react";
import { queryParamParserPageState } from "@/lib/utils/queryparamparser";
import {
  InvestmentType,
  PageState,
  ShareFormState,
  ManagedInvestmentFormState,
  ManagedInvestmentCategory,
  InvestmentFormContextType,
} from "@/types";
import { useSearchParams } from "next/navigation";
import {
  emptyShareState,
  emptyFundState,
} from "./utils/InvestmentDisplayUtils";

export const InvestmentSearchContext = createContext<InvestmentFormContextType>(
  {
    formDisplay: "",
    setFormDisplay: (): any => {},
    setPageState: (): any => {},
    pageState: 10,
    setShareFormState: (): any => {},
    shareFormState: emptyShareState,
    setFundFormState: (): any => {},
    fundFormState: emptyFundState,
    pageNumber: 0,
    setPageNumber: (): any => {},
  }
);

export default function InvestmentFormContext({
  children,
}: {
  children: ReactNode;
}) {
  const searchParams = useSearchParams();

  const searchParamsObj = {
    investmentType: searchParams?.get("investment-type"),
    shareParams: {
      name: searchParams?.get("name"),
      asx: searchParams?.get("asx"),
    },
    managedInvestmentParams: {
      name: searchParams?.get("name"),
      nabOwned: searchParams?.get("nab"),
      category: searchParams?.get("category"),
    },
    pageData: {
      perPage: searchParams?.get("per_page"),
      pageNumber: searchParams?.get("page"),
    },
  };

  const { managedInvestmentParams } = searchParamsObj;
  const { shareParams } = searchParamsObj;

  const pageNumberParam: number = !!searchParamsObj.pageData.pageNumber
    ? parseInt(searchParamsObj.pageData.pageNumber)
    : 1;

  const investmentsPerPageParam: PageState = queryParamParserPageState(
    searchParamsObj.pageData.perPage
  );

  const shareParamState: ShareFormState = {
    name: !!shareParams.name ? shareParams.name : "",
    asx: !!shareParams.asx ? shareParams.asx : "",
  };

  const fundParamsState: ManagedInvestmentFormState = {
    name: managedInvestmentParams.name || "",
    category:
      (managedInvestmentParams.category as ManagedInvestmentCategory) || "",
    nabOwned: managedInvestmentParams.nabOwned === "true" ? true : "",
  };

  const [formDisplay, setFormDisplay] = useState<InvestmentType>(
    (searchParamsObj.investmentType as InvestmentType) || ""
  );

  const [pageState, setPageState] = useState<PageState>(
    investmentsPerPageParam as PageState
  );

  const [shareFormState, setShareFormState] =
    useState<ShareFormState>(shareParamState);

  const [fundFormState, setFundFormState] =
    useState<ManagedInvestmentFormState>(fundParamsState);

  const [pageNumber, setPageNumber] = useState<number>(pageNumberParam);

  const investmentFormMemoValue = useMemo(
    () => ({
      formDisplay,
      setFormDisplay,
      pageState,
      setPageState,
      shareFormState,
      setShareFormState,
      fundFormState,
      setFundFormState,
      pageNumber,
      setPageNumber,
    }),
    [
      formDisplay,
      setFormDisplay,
      pageState,
      setPageState,
      shareFormState,
      setShareFormState,
      fundFormState,
      setFundFormState,
      pageNumber,
      setPageNumber,
    ]
  );

  return (
    <InvestmentSearchContext.Provider value={investmentFormMemoValue}>
      {children}
    </InvestmentSearchContext.Provider>
  );
}

export const useInvestmentFormContext = () =>
  useContext(InvestmentSearchContext);
