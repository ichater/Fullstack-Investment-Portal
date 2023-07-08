"use client";

import {
  InvestmentType,
  ManagedInvestmentFormState,
  PageState,
  ShareFormState,
} from "@/app/types";
import { ReactNode, createContext, useState } from "react";

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
}

export const InvestmentDisplayContext = createContext<InvestmentDisplayType>({
  setInvestmentType: (): any => {},
  investmentType: "",
  setPageState: (): any => {},
  pageState: 10,
  setShareFormState: (): any => {},
  shareFormState: {
    asx: "",
    name: "",
  },
  setFundFormState: (): any => {},
  fundFormState: {
    category: "",
    name: "",
    nabOwned: "",
  },
});

export default function InvestmentDisplayProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [investmentType, setInvestmentType] = useState<InvestmentType>("");
  const [pageState, setPageState] = useState<PageState>(10);
  const [shareFormState, setShareFormState] = useState<ShareFormState>({
    asx: "",
    name: "",
  });
  const [fundFormState, setFundFormState] =
    useState<ManagedInvestmentFormState>({
      category: "",
      name: "",
      nabOwned: "",
    });

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
      }}
    >
      {children}
    </InvestmentDisplayContext.Provider>
  );
}
