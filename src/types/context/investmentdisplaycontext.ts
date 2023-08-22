import { DisplayedInvestments, InvestmentDisplayState } from "@/types";

export interface InvestmentDisplayContext {
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
}
