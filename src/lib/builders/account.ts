import {
  Account,
  INVESTMENSTRATEGY,
  ManagedInvestment,
  Share,
} from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export class AccountBuilder {
  account: Account;

  constructor(clientId: string) {
    this.account = new AccountInstance(clientId);
  }

  setClientId(clientId: string) {
    this.account.clientId = clientId;
    return this;
  }

  setValue(value: number) {
    this.account.value = value;
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
  value: number;
  managedInvestments: ManagedInvestment[];
  shares: Share[];
  name: string;
  investmentStrategy: INVESTMENSTRATEGY;
  constructor(
    clientId: string = "",
    id: string = uuidv4(),
    value: number = 100000,
    managedInvestments: ManagedInvestment[] = [],
    shares: Share[] = [],
    name: string = "",
    investmentStrategy: INVESTMENSTRATEGY = INVESTMENSTRATEGY.CONSERVATIVE
  ) {
    this.clientId = clientId;
    this.id = id;
    this.value = value;
    this.managedInvestments = managedInvestments;
    this.shares = shares;
    this.name = name;
    this.investmentStrategy = investmentStrategy;
  }
}
