import { ShareInAccountParsed } from "./ShareInAccount";
import { FundInAccountParsed } from "./FundInAccount";

export type AccountValues = {
  totalValue: number;
  cashAccount: number;
  cashinShares: number;
  cashInInvestments: number;
  shares?: ShareInAccountParsed[] | [];
  funds?: FundInAccountParsed[] | [];
  sma?: FundInAccountParsed[] | [];
};
