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
} from "@/types";
import { useSearchParams } from "next/navigation";

interface InvestmentDisplayType {
  setInvestmentType: React.Dispatch<React.SetStateAction<InvestmentType>>;
  investmentType: InvestmentType;
  formDisplay: InvestmentType;
  setFormDisplay: React.Dispatch<React.SetStateAction<InvestmentType>>;
  setPageState: React.Dispatch<React.SetStateAction<PageState>>;
  pageState: PageState;
  setShareFormState: React.Dispatch<React.SetStateAction<ShareFormState>>;
  shareFormState: ShareFormState;
  setFundFormState: React.Dispatch<
    React.SetStateAction<ManagedInvestmentFormState>
  >;
  fundFormState: ManagedInvestmentFormState;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  displayedInvestments: DisplayedInvestments;
  setDisplayedInvestments: React.Dispatch<
    React.SetStateAction<DisplayedInvestments>
  >;
  triggerSearch: boolean;
  setTriggerSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const emptyFundState: ManagedInvestmentFormState = {
  category: "",
  name: "",
  nabOwned: "",
};

const emptyShareState: ShareFormState = {
  asx: "",
  name: "",
};

const emptyDisplayedInvestments: DisplayedInvestments = {
  investments: [],
  error: null,
  loading: false,
};

export const InvestmentDisplayContext = createContext<InvestmentDisplayType>({
  setInvestmentType: (): any => {},
  investmentType: "",
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
  displayedInvestments: emptyDisplayedInvestments,
  setDisplayedInvestments: (): any => {},
  triggerSearch: false,
  setTriggerSearch: (): any => {},
});

export default function InvestmentDisplayProvider({
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

  const [investmentType, setInvestmentType] = useState<InvestmentType>(
    (searchParamsObj.investmentType as InvestmentType) || ""
  );

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

  const [displayedInvestments, setDisplayedInvestments] =
    useState<DisplayedInvestments>(emptyDisplayedInvestments);

  const [triggerSearch, setTriggerSearch] = useState(false);

  const memoValue = useMemo(
    () => ({
      investmentType,
      setInvestmentType,
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
      displayedInvestments,
      setDisplayedInvestments,
      triggerSearch,
      setTriggerSearch,
    }),
    [
      investmentType,
      setInvestmentType,
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
      displayedInvestments,
      setDisplayedInvestments,
      triggerSearch,
      setTriggerSearch,
    ]
  );

  return (
    <InvestmentDisplayContext.Provider value={memoValue}>
      {children}
    </InvestmentDisplayContext.Provider>
  );
}

export const useInvestmentContext = () => useContext(InvestmentDisplayContext);
