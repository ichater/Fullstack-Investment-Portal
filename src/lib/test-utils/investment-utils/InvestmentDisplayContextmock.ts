import {
  InvestmentDisplayContextType,
  ManagedInvestmentFormState,
  ShareFormState,
} from "@/types";
import { mockInvestmentResult } from "./dataMocks";

export const shareStateMock: ShareFormState = {
  asx: "",
  name: "",
};

export const emptyFundSateMock: ManagedInvestmentFormState = {
  category: "fund",
  name: "",
  nabOwned: "",
};

export const investmentDisplayContextMock: InvestmentDisplayContextType = {
  investmentDisplayState: {
    investmentType: "funds",
    shareState: shareStateMock,
    fundState: emptyFundSateMock,
    pageData: {
      perPage: 5,
      pageNumber: 1,
    },
  },
  setInvestmentDisplayState: () => {},
  displayedInvestments: {
    investments: [mockInvestmentResult],
    error: null,
    loading: false,
  },
  setDisplayedInvestments: () => {},
  triggerSearch: false,
  setTriggerSearch: () => {},
};
