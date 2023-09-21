import {
  DisplayedInvestments,
  InvestmentDisplayState,
  InvestmentType,
  ManagedInvestmentFormState,
  PageState,
  ShareFormState,
} from "@/types";
import { InvestmentDisplayContext } from "@/types/context";

export class InvestmentDisplayContextBuilder {
  context: InvestmentDisplayContext;
  constructor() {
    this.context = new InvestmentDisplayContextInstance();
  }

  setFundState({ name, nabOwned, category }: ManagedInvestmentFormState) {
    this.context.investmentDisplayState.investmentType = "funds";
    this.context.investmentDisplayState.shareState = {
      name: "",
      asx: "",
    };
    this.context.investmentDisplayState.fundState = {
      name,
      nabOwned,
      category,
    };
    return this;
  }

  setShareState({ name, asx }: ShareFormState) {
    this.context.investmentDisplayState.investmentType = "shares";
    this.context.investmentDisplayState.fundState = {
      name: "",
      nabOwned: "",
      category: "",
    };
    this.context.investmentDisplayState.shareState = {
      name,
      asx,
    };
    return this;
  }

  setDisplayedInvestments(
    type: InvestmentType,
    { investments, loading, error }: DisplayedInvestments
  ) {
    this.context.investmentDisplayState.investmentType = type;
    this.context.displayedInvestments = {
      investments,
      loading,
      error,
    };
    return this;
  }

  setMockSetInvestmentDisplayState(fn: () => any) {
    this.context.setInvestmentDisplayState = fn;
    return this;
  }

  setMockTriggerSearch(fn: () => any) {
    this.context.setTriggerSearch = fn;
    return this;
  }

  build(): InvestmentDisplayContext {
    return this.context;
  }
}

class InvestmentDisplayContextInstance {
  investmentDisplayState: InvestmentDisplayState;
  setInvestmentDisplayState: React.Dispatch<
    React.SetStateAction<InvestmentDisplayState>
  >;
  displayedInvestments: DisplayedInvestments;
  setDisplayedInvestments: React.Dispatch<
    React.SetStateAction<DisplayedInvestments>
  >;
  triggerSearch: boolean;
  setTriggerSearch: React.Dispatch<React.SetStateAction<boolean>>;

  constructor(
    investmentType: InvestmentType = "",
    shareState: ShareFormState = {
      name: "",
      asx: "",
    },
    fundState: ManagedInvestmentFormState = {
      name: "",
      nabOwned: "",
      category: "",
    },
    pageData: {
      perPage: PageState;
      pageNumber: number;
    } = {
      perPage: 5,
      pageNumber: 1,
    },
    displayedInvestments: DisplayedInvestments = {
      investments: [],
      loading: false,
      error: null,
    }
  ) {
    this.investmentDisplayState = {
      investmentType,
      shareState,
      fundState,
      pageData,
    };
    this.triggerSearch = false;
    this.displayedInvestments = displayedInvestments;
    this.setInvestmentDisplayState = () => {};
    this.setDisplayedInvestments = () => {};
    this.setTriggerSearch = () => {};
  }
}
