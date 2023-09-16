import { ADVISERFEETYPE, INVESTMENSTRATEGY } from "@prisma/client";
import { ManagedInvestmentInAccountShallow } from "./ManagedInvestmentsInAccount";
import { ShareInAccountShallow } from "./ShareInAccount";

export type AccountReturnData = {
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
  managedFunds: ManagedInvestmentInAccountShallow[];
  SMAs: ManagedInvestmentInAccountShallow[];
  shares: ShareInAccountShallow[];
};
