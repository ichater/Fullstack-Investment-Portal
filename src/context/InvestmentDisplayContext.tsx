"use client";

import {
  InvestmentType,
  ManagedInvestmentFormState,
  PageState,
  ShareFormState,
} from "@/app/types";
import { ManagedInvestmentCategory } from "@/app/types/investment-ui/managedinvestmenttype";
import { queryParamParserPageState } from "@/lib/utils/queryparamparser";
import { useSearchParams } from "next/navigation";
import { ReactNode, createContext, useEffect, useState } from "react";

interface InvestmentDisplayType {
  setInvestmentType: React.Dispatch<React.SetStateAction<InvestmentType>>;
  investmentType: InvestmentType;
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
  submitClicked: boolean;
  setSubmitClicked: React.Dispatch<React.SetStateAction<boolean>>;
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

export const InvestmentDisplayContext = createContext<InvestmentDisplayType>({
  setInvestmentType: (): any => {},
  investmentType: "",
  setPageState: (): any => {},
  pageState: 10,
  setShareFormState: (): any => {},
  shareFormState: emptyShareState,
  setFundFormState: (): any => {},
  fundFormState: emptyFundState,
  pageNumber: 0,
  setPageNumber: (): any => {},
  submitClicked: false,
  setSubmitClicked: (): any => {},
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

  const pageNumberParam: number = searchParamsObj.pageData.pageNumber
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
    nabOwned: managedInvestmentParams.category === "true" ? true : "",
  };

  const [investmentType, setInvestmentType] = useState<InvestmentType>(
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

  const [submitClicked, setSubmitClicked] = useState<boolean>(false);

  // useEffect(() => {
  //   setInvestmentType("");

  //   setFundFormState(emptyFundState);

  //   setShareFormState(emptyShareState);

  //   setSubmitClicked(false);
  // }, [submitClicked]);

  return (
    <InvestmentDisplayContext.Provider
      value={{
        investmentType,
        setInvestmentType,
        pageState,
        setPageState,
        shareFormState,
        setShareFormState,
        fundFormState,
        setFundFormState,
        pageNumber,
        setPageNumber,
        submitClicked,
        setSubmitClicked,
      }}
    >
      {children}
    </InvestmentDisplayContext.Provider>
  );
}
