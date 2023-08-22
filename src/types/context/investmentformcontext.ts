import { InvestmentFormState } from "@/types";

export interface InvestmentFormContext {
  investmentFormState: InvestmentFormState;
  setInvestmentFormState: React.Dispatch<
    React.SetStateAction<InvestmentFormState>
  >;
}
