import {
  InvestmentType,
  PageState,
  ShareFormState,
  ManagedInvestmentFormState,
  DisplayedInvestments,
} from "@/types";

export interface InvestmentDisplayContext {
  investmentType: InvestmentType;
  setInvestmentType: React.Dispatch<React.SetStateAction<InvestmentType>>;

  displayedInvestments: DisplayedInvestments;
  setDisplayedInvestments: React.Dispatch<
    React.SetStateAction<DisplayedInvestments>
  >;
  investmentsPerPage: PageState;
  setInvestmentsPerPage: React.Dispatch<React.SetStateAction<PageState>>;
  displayPageNumber: number;
  setDisplayPageNumber: React.Dispatch<React.SetStateAction<number>>;
  shareRequestState: ShareFormState;
  setShareRequestState: React.Dispatch<React.SetStateAction<ShareFormState>>;
  fundRequestState: ManagedInvestmentFormState;
  setFundRequestState: React.Dispatch<
    React.SetStateAction<ManagedInvestmentFormState>
  >;
  triggerSearch: boolean;
  setTriggerSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
