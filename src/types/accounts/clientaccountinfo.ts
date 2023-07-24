import { ADVISERFEETYPE } from "@prisma/client";

export type ClientAccountInformation = {
  id: string;
  clientId: string;
  totalValue: number;
  cashAccount: number;
  adviserFee: string;
  adviserFeeType: ADVISERFEETYPE;
  cashInShares: number;
  cashInInvestments: number;
  name: string;
  slug: string;
  investmentStratgy: string;
};
