import {
  InvestmentFormState,
  ManagedInvestmentFormState,
  ShareFormState,
} from "@/types";
import { InvestmentFormContextType } from "@/types/context";

export const shareStateMock: ShareFormState = {
  asx: "",
  name: "",
};

export const fundStateMock: ManagedInvestmentFormState = {
  category: "fund",
  name: "mlc",
  nabOwned: true,
};

export const investmentFormStateMock: InvestmentFormState = {
  investmentType: "funds",
  shareState: shareStateMock,
  fundState: fundStateMock,
  pageData: {
    perPage: 5,
    pageNumber: 1,
  },
};

export const investmentFormContextMock: InvestmentFormContextType = {
  investmentFormState: investmentFormStateMock,
  setInvestmentFormState: () => {},
};
