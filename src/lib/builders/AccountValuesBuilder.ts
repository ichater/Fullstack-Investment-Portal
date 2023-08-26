import {
  AccountValues,
  FundInAccountParsed,
  ShareInAccountParsed,
} from "@/types";

export class AccountValueBuilder {
  account: AccountValues;
  constructor(value: number) {
    this.account = new AccountValueInstance(value);
  }

  setCashAccountValue(value: number) {
    this.account.cashAccount = value;
    return this;
  }

  setCashInShares(value: number) {
    this.account.cashinShares = value;
    return this;
  }

  setCashInFunds(value: number) {
    this.account.cashInInvestments = value;
    return this;
  }

  setShares(shares: ShareInAccountParsed[]) {
    this.account.shares = shares;
    return this;
  }

  setFunds(funds: FundInAccountParsed[]) {
    this.account.funds = funds;
    return this;
  }

  setSma(sma: FundInAccountParsed[]) {
    this.account.sma = sma;
    return this;
  }

  build(): AccountValues {
    return this.account;
  }
}

class AccountValueInstance {
  totalValue: number;
  cashAccount: number;
  cashinShares: number;
  cashInInvestments: number;
  shares?: ShareInAccountParsed[] | [];
  funds?: FundInAccountParsed[] | [];
  sma?: FundInAccountParsed[] | [];

  constructor(
    totalValue: number = 10000,
    cashAccount: number = 10000,
    cashinShares: number = 0,
    cashInInvestments: number = 0,
    shares: ShareInAccountParsed[] | [] = [],
    funds: FundInAccountParsed[] | [] = [],
    sma: FundInAccountParsed[] | [] = []
  ) {
    this.totalValue = totalValue;
    this.cashAccount = cashAccount;
    this.cashinShares = cashinShares;
    this.cashInInvestments = cashInInvestments;
    this.shares = shares;
    this.funds = funds;
    this.totalValue = totalValue;
    this.sma = sma;
  }
}
