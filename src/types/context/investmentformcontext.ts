import {
  InvestmentType,
  PageState,
  ShareFormState,
  ManagedInvestmentFormState,
} from "@/types";

export interface InvestmentFormContext {
  formDisplay: InvestmentType;
  setFormDisplay: React.Dispatch<React.SetStateAction<InvestmentType>>;
  setPageState: React.Dispatch<React.SetStateAction<PageState>>;
  pageState: PageState;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setShareFormState: React.Dispatch<React.SetStateAction<ShareFormState>>;
  shareFormState: ShareFormState;
  setFundFormState: React.Dispatch<
    React.SetStateAction<ManagedInvestmentFormState>
  >;
  fundFormState: ManagedInvestmentFormState;
}
