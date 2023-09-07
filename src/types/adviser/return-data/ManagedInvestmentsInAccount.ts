import { INVESTMENTCATEGORY } from "@prisma/client";

export interface ManagedInvestmentInAccountParsed {
  id: string;
  name: string;
  apir: string;
  nabOwned: boolean;
  mer: number;
  value: number;
  category: INVESTMENTCATEGORY;
}
