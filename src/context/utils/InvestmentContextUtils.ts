import {
  InvestmentFormState,
  ManagedInvestmentFormState,
  PageState,
  ShareFormState,
  DisplayedInvestments,
} from "@/types";

export const emptyFundState: ManagedInvestmentFormState = {
  category: "",
  name: "",
  nabOwned: "",
};

export const emptyShareState: ShareFormState = {
  asx: "",
  name: "",
};

export const defaultPageData: { perPage: PageState; pageNumber: number } = {
  perPage: 10,
  pageNumber: 1,
};

export const emptyInvestmentFormState: InvestmentFormState = {
  investmentType: "",
  shareState: emptyShareState,
  fundState: emptyFundState,
  pageData: defaultPageData,
};

export const emptyDisplayedInvestments: DisplayedInvestments = {
  investments: [],
  error: null,
  loading: false,
};
