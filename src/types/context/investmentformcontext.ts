import { InvestmentFormState } from "@/types";

export interface InvestmentFormContextType {
  investmentFormState: InvestmentFormState;
  setInvestmentFormState: React.Dispatch<
    React.SetStateAction<InvestmentFormState>
  >;
}
