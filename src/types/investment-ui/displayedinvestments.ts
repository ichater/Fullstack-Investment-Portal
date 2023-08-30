import { DisplayFund } from "./displayFund";
import { DisplayShare } from "./displayShare";

export interface DisplayedInvestments {
  investments: DisplayShare[] | DisplayFund[];
  error: string | null;
  loading: boolean;
}
