import {
  InvestmentFormContextType,
  InvestmentFormState,
  InvestmentType,
  ManagedInvestmentFormState,
  PageState,
  ShareFormState,
} from "@/types";

export class InvestmentFormContextBuilder {
  context: InvestmentFormContextType;
  constructor() {
    this.context = new InvestmentFormContextInstance();
  }

  setMockSetInvestmentFormState(fn: () => any) {
    this.context.setInvestmentFormState = fn;
    return this;
  }

  setInvestmentType(type: InvestmentType) {
    this.context.investmentFormState.investmentType = type;
    return this;
  }

  setFundState({ name, nabOwned, category }: ManagedInvestmentFormState) {
    this.context.investmentFormState.investmentType = "funds";
    this.context.investmentFormState.shareState = {
      name: "",
      asx: "",
    };
    this.context.investmentFormState.fundState = {
      name,
      nabOwned,
      category,
    };
    return this;
  }

  setShareState({ name, asx }: ShareFormState) {
    this.context.investmentFormState.investmentType = "shares";
    this.context.investmentFormState.fundState = {
      name: "",
      nabOwned: "",
      category: "",
    };
    this.context.investmentFormState.shareState = {
      name,
      asx,
    };
    return this;
  }

  setPageData({
    perPage,
    pageNumber,
  }: {
    perPage: PageState;
    pageNumber: number;
  }) {
    this.context.investmentFormState.pageData = {
      perPage,
      pageNumber,
    };
    return this;
  }

  build(): InvestmentFormContextType {
    return this.context;
  }
}

class InvestmentFormContextInstance {
  investmentFormState: InvestmentFormState;
  setInvestmentFormState: React.Dispatch<
    React.SetStateAction<InvestmentFormState>
  >;
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
    }
  ) {
    this.investmentFormState = {
      investmentType,
      shareState,
      fundState,
      pageData,
    };
    this.setInvestmentFormState = () => {};
  }
}
