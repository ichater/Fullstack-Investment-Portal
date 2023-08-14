"use client";
import { ReactNode, createContext, useState, useMemo, useContext } from "react";
import { queryParamParserPageState } from "@/lib/utils/queryparamparser";
import {
  InvestmentType,
  PageState,
  ShareFormState,
  ManagedInvestmentFormState,
  ManagedInvestmentCategory,
  DisplayedInvestments,
  InvestmentFormContextType,
  InvestmentDisplayContextType,
} from "@/types";
import { useSearchParams } from "next/navigation";
import {
  emptyShareState,
  emptyFundState,
  emptyDisplayedInvestments,
} from "./utils/InvestmentDisplayUtils";

export const InvestmentFormContext: any =
  createContext<InvestmentFormContextType>({
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
    triggerSearch: false,
    setTriggerSearch: (): any => {},
  });

export const InvestmentResultContext =
  createContext<InvestmentDisplayContextType>({
    displayedInvestments: emptyDisplayedInvestments,
    setDisplayedInvestments: (): any => {},
    displayPageNumber: 0,
    setDisplayPageNumber: (): any => {},
    investmentsPerPage: 10,
    setInvestmentsPerPage: (): any => {},
    investmentType: "",
    setInvestmentType: (): any => {},
    shareRequestState: emptyShareState,
    setShareRequestState: (): any => {},
    fundRequestState: emptyFundState,
    setFundRequestState: (): any => {},
    triggerSearch: false,
    setTriggerSearch: (): any => {},
  });

export default function InvestmentDisplayContext({
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

  // Investment Display State
  const [displayedInvestments, setDisplayedInvestments] =
    useState<DisplayedInvestments>(emptyDisplayedInvestments);

  const [investmentType, setInvestmentType] = useState<InvestmentType>(
    (searchParamsObj.investmentType as InvestmentType) || ""
  );

  const [investmentsPerPage, setInvestmentsPerPage] = useState<PageState>(
    investmentsPerPageParam as PageState
  );

  const [displayPageNumber, setDisplayPageNumber] =
    useState<number>(pageNumberParam);

  const [shareRequestState, setShareRequestState] =
    useState<ShareFormState>(shareParamState);

  const [fundRequestState, setFundRequestState] =
    useState<ManagedInvestmentFormState>(fundParamsState);

  const [triggerSearch, setTriggerSearch] = useState(false);

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
      triggerSearch,
      setTriggerSearch,
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
      triggerSearch,
      setTriggerSearch,
    ]
  );

  const investmentDisplayMemoValue = useMemo(
    () => ({
      displayedInvestments,
      setDisplayedInvestments,
      investmentType,
      setInvestmentType,
      investmentsPerPage,
      setInvestmentsPerPage,
      displayPageNumber,
      setDisplayPageNumber,
      shareRequestState,
      setShareRequestState,
      fundRequestState,
      setFundRequestState,
      triggerSearch,
      setTriggerSearch,
    }),
    [
      displayedInvestments,
      setDisplayedInvestments,
      investmentType,
      setInvestmentType,
      investmentsPerPage,
      setInvestmentsPerPage,
      displayPageNumber,
      setDisplayPageNumber,
      shareRequestState,
      setShareRequestState,
      fundRequestState,
      setFundRequestState,
      triggerSearch,
      setTriggerSearch,
    ]
  );

  return (
    <InvestmentResultContext.Provider value={investmentDisplayMemoValue}>
      <InvestmentFormContext.Provider value={investmentFormMemoValue}>
        {children}
      </InvestmentFormContext.Provider>
    </InvestmentResultContext.Provider>
  );
}

export const useInvestmentFormContext = () => useContext(InvestmentFormContext);

export const useInvestmentResultContext = () =>
  useContext(InvestmentResultContext);
