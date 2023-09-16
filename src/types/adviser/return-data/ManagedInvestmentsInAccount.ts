import { INVESTMENTCATEGORY } from "@prisma/client";

export type ManagedInvestmentInAccountShallow = {
  accountId: string;
  investmentId: string;
  value: number;
};

export interface ManagedInvestmentInAccountParsed {
  id: string;
  name: string;
  apir: string;
  nabOwned: boolean;
  mer: number;
  value: number;
  category: INVESTMENTCATEGORY;
}
