import { ADVISERFEETYPE, INVESTMENSTRATEGY } from "@prisma/client";
import { ManagedInvestmentInAccountParsed } from "./ManagedInvestmentsInAccount";
import { ShareInAccountParsed } from "./ShareInAccount";

export type AccountDataParsed = {
  id: string;
  totalValue: number;
  cashAccount: number;
  adviserFee: string;
  adviserFeeType: ADVISERFEETYPE;
  cashInShares: number;
  cashInInvestments: number;
  name: string;
  slug: string;
  investmentStrategy: INVESTMENSTRATEGY;
  managedFunds: ManagedInvestmentInAccountParsed[];
  sma: ManagedInvestmentInAccountParsed[];
  shares: ShareInAccountParsed[];
};
