import { Account, ManagedInvestment, Share } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export class AccountBuilder {
  account: Account;

  constructor(clientId: string) {
    this.account = new AccountInstance(clientId);
  }

  setValue(value: number) {
    this.account.value = value;
    return this;
  }

  setName(name: string) {
    this.account.name = name;
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
  constructor(
    clientId: string = "",
    id: string = uuidv4(),
    value: number = 100000,
    managedInvestments: ManagedInvestment[] = [],
    shares: Share[] = [],
    name: string = ""
  ) {
    this.clientId = clientId;
    this.id = id;
    this.value = value;
    this.managedInvestments = managedInvestments;
    this.shares = shares;
    this.name = name;
  }
}
