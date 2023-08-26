import { INVESTMENTCATEGORY } from "@prisma/client";

export type DisplayFund = {
  id: string;
  name: string;
  apir: string;
  nabOwned: boolean;
  mer: number;
  category: INVESTMENTCATEGORY;
};
