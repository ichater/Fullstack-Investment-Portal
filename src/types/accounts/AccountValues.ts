import { ShareInAccountParsed } from "@/types";
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
