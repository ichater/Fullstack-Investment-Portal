import { InvestmentType } from "./investmenttype";
import { ManagedInvestmentFormState } from "./managedinvestmentformstate";
import { PageState } from "./pagestate";
import { ShareFormState } from "./shareformstate";

export interface InvestmentFormState {
  investmentType: InvestmentType;
  shareState: ShareFormState;
  fundState: ManagedInvestmentFormState;
  pageData: {
    perPage: PageState;
    pageNumber: number;
  };
}
