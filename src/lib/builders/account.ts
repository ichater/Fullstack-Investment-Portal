import {
  ADVISERFEETYPE,
  Account,
  INVESTMENSTRATEGY,
  ManagedInvestment,
  Share,
} from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { adviserFeeParser } from "../utils/adviserFeeParser";

export class AccountBuilder {
  account: Account;

  constructor(clientId: string) {
    this.account = new AccountInstance(clientId);
  }

  setClientId(clientId: string) {
    this.account.clientId = clientId;
    return this;
  }

  setValue(totalValue: number) {
    this.account.totalValue = totalValue;
    return this;
  }

  setName(name: string) {
    this.account.name = name;
    return this;
  }

  setInvestmentStraqtegy(strategy: INVESTMENSTRATEGY) {
    this.account.investmentStrategy = strategy;
    return this;
  }

  build() {
    return this.account;
  }
}

class AccountInstance {
  clientId: string;
  id: string;
  totalValue: number;
  cashAccount: number;
  cashInShares: number;
  cashInInvestments: number;
  managedInvestments: ManagedInvestment[];
  shares: Share[];
  name: string;
  slug: string;
  adviserFee: string;
  investmentStrategy: INVESTMENSTRATEGY;
  adviserFeeType: ADVISERFEETYPE;
  constructor(
    clientId: string = "",
    id: string = uuidv4(),
    totalValue: number = 100000,
    cashAccount: number = totalValue,
    managedInvestments: ManagedInvestment[] = [],
    adviserFeeType: ADVISERFEETYPE = ADVISERFEETYPE.PERCENTAGE,
    adviserFee: string = "",
    cashInShares: number = 0,
    cashInInvestments: number = 0,
    shares: Share[] = [],
    name: string = "conservative-account",
    investmentStrategy: INVESTMENSTRATEGY = INVESTMENSTRATEGY.CONSERVATIVE,
    slug: string = `${name + investmentStrategy.toLocaleLowerCase()}`
  ) {
    this.clientId = clientId;
    this.id = id;
    this.totalValue = totalValue;
    this.cashAccount = cashAccount;
    this.cashInShares = cashInShares;
    this.cashInInvestments = cashInInvestments;
    this.managedInvestments = managedInvestments;
    this.shares = shares;
    this.adviserFee = adviserFeeParser(adviserFeeType, adviserFee);
    this.adviserFeeType = adviserFeeType;
    this.name = name;
    this.slug = slug;
    this.investmentStrategy = investmentStrategy;
  }
}
