import {
  ManagedInvestmentFormState,
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

export const emptyDisplayedInvestments: DisplayedInvestments = {
  investments: [],
  error: null,
  loading: false,
};
