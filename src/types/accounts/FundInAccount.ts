import { INVESTMENTCATEGORY } from "@prisma/client";

export type FundInAccountParsed = {
  id: string;
  name: string;
  apir: string;
  nabOwned: boolean;
  mer: number;
  category: INVESTMENTCATEGORY;
  value: number;
};
