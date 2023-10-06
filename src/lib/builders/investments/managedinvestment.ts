import { DisplayFund } from "@/types";
import { INVESTMENTCATEGORY } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export class ManagedInvestmentBuilder {
  managedInvestment: DisplayFund;
  constructor(name: string) {
    this.managedInvestment = new ManagedInvestmentInstance(name);
  }
  setApir(apir: string) {
    this.managedInvestment.apir = apir;
    return this;
  }

  setMer(mer: number) {
    this.managedInvestment.mer = mer;
    return this;
  }

  setNabOwned(isNab: boolean) {
    this.managedInvestment.nabOwned = isNab;
    return this;
  }

  setCategory(category: INVESTMENTCATEGORY) {
    this.managedInvestment.category = category;
    return this;
  }

  build() {
    return this.managedInvestment;
  }
}

class ManagedInvestmentInstance {
  name: string;
  id: string;
  apir: string;
  mer: number;
  nabOwned: boolean;
  category: INVESTMENTCATEGORY;
  constructor(
    name: string = "SomeFund",
    id: string = uuidv4(),
    apir: string = "NUN101AU",
    mer: number = 1.05,
    nabOwned: boolean = false,
    category: INVESTMENTCATEGORY = INVESTMENTCATEGORY.FUND
  ) {
    this.name = name;
    this.id = id;
    this.mer = mer;
    this.apir = apir;
    this.nabOwned = nabOwned;
    this.category = category;
  }
}
