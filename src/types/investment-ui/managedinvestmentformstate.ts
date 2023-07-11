import { ManagedInvestmentCategory } from "./managedinvestmenttype";

export interface ManagedInvestmentFormState {
  category: ManagedInvestmentCategory;
  name: string;
  nabOwned: boolean | "";
}
