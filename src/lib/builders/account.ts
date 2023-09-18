import { ADVISERFEETYPE, INVESTMENSTRATEGY, Share } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { adviserFeeParser } from "../utils/adviserFeeParser";
import {
  AccountDataParsed,
  ManagedInvestmentInAccountParsed,
  ShareInAccountParsed,
} from "@/types";

export class AccountBuilder {
  account: AccountDataParsed;

  constructor(clientId: string) {
    this.account = new AccountInstance(clientId);
  }

  setValue(totalValue: number) {
    this.account.totalValue = totalValue;
    return this;
  }

  setName(name: string) {
    this.account.name = name;
    return this;
  }

  setInvestmentStrategy(strategy: INVESTMENSTRATEGY) {
    this.account.investmentStrategy = strategy;
    return this;
  }

  setAdviserFee(feeType: ADVISERFEETYPE, adviserFee: string) {
    this.account.adviserFeeType = feeType;
    this.account.adviserFee = adviserFeeParser(feeType, adviserFee);
    return this;
  }

  build() {
    return this.account;
  }
}

class AccountInstance {
  id: string;
  totalValue: number;
  name: string;
  slug: string;
  cashAccount: number;
  cashInShares: number;
  cashInInvestments: number;
  managedFunds: ManagedInvestmentInAccountParsed[];
  SMAs: ManagedInvestmentInAccountParsed[];
  shares: ShareInAccountParsed[];
  adviserFee: string;
  investmentStrategy: INVESTMENSTRATEGY;
  adviserFeeType: ADVISERFEETYPE;
  constructor(
    id: string = uuidv4(),
    totalValue: number = 100000,
    cashAccount: number = totalValue,
    adviserFeeType: ADVISERFEETYPE = ADVISERFEETYPE.PERCENTAGE,
    adviserFee: string = "",
    cashInShares: number = 0,
    cashInInvestments: number = 0,
    managedFunds: ManagedInvestmentInAccountParsed[] = [],
    SMAs: ManagedInvestmentInAccountParsed[] = [],
    shares: ShareInAccountParsed[] = [],
    name: string = "sally-conservative",
    investmentStrategy: INVESTMENSTRATEGY = INVESTMENSTRATEGY.CONSERVATIVE,
    slug: string = `${name.toLocaleLowerCase()}`
  ) {
    this.id = id;
    this.totalValue = totalValue;
    this.cashAccount = cashAccount;
    this.cashInShares = cashInShares;
    this.cashInInvestments = cashInInvestments;
    this.managedFunds = managedFunds;
    this.SMAs = SMAs;
    this.shares = shares;
    this.adviserFee = adviserFeeParser(adviserFeeType, adviserFee);
    this.adviserFeeType = adviserFeeType;
    this.name = name;
    this.slug = slug;
    this.investmentStrategy = investmentStrategy;
  }
}
