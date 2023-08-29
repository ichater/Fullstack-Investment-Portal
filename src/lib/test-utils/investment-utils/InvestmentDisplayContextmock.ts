import {
  DisplayFund,
  DisplayShare,
  DisplayedInvestments,
  InvestmentDisplayContextType,
  InvestmentType,
  ManagedInvestmentFormState,
  ShareFormState,
} from "@/types";

export const shareStateMock: ShareFormState = {
  asx: "",
  name: "",
};

export const emptyFundStateMock: ManagedInvestmentFormState = {
  category: "fund",
  name: "",
  nabOwned: "",
};

export const investmentDisplayContextMock: InvestmentDisplayContextType = {
  investmentDisplayState: {
    investmentType: "funds",
    shareState: shareStateMock,
    fundState: emptyFundStateMock,
    pageData: {
      perPage: 5,
      pageNumber: 1,
    },
  },
  setInvestmentDisplayState: () => {},
  displayedInvestments: {
    investments: [],
    error: null,
    loading: false,
  },
  setDisplayedInvestments: () => {},
  triggerSearch: false,
  setTriggerSearch: () => {},
};

export function investmentDisplayContextMockFactory(
  investmentType: InvestmentType,
  investments: DisplayShare[][] | DisplayFund[][]
): InvestmentDisplayContextType {
  return {
    investmentDisplayState: {
      investmentType,
      shareState: shareStateMock,
      fundState: emptyFundStateMock,
      pageData: {
        perPage: 5,
        pageNumber: 1,
      },
    },
    setInvestmentDisplayState: () => {},
    displayedInvestments: {
      error: null,
      loading: false,
      investments,
    },
    setDisplayedInvestments: () => {},
    triggerSearch: false,
    setTriggerSearch: () => {},
  };
}
