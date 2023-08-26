import { INVESTMENTCATEGORY } from "@prisma/client";

export type FundInAccount = {
  id: string;
  name: string;
  apir: string;
  nabOwned: boolean;
  mer: number;
  category: INVESTMENTCATEGORY;
  value: number;
};
