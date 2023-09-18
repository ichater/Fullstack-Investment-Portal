import { ADVISERFEETYPE, Account } from "@prisma/client";
import { AccountBuilder, ClientBuilder } from "../builders";
import { AccountDataParsed } from "@/types";

export const tempClientSallie = new ClientBuilder("Sallie")
  .setAccess("READWRITE")
  .setBio(
    "Claire seems like a trustworthy and lovely lady, she sayd I shouldnt hire her to manage my retirement fund since she is a burse and not an advisor but I think she is under selling herself. With any luck my investment options pay off and I can pay for my nephew Brians drug habit"
  )
  .build();

export const sallieAccountsTemp: AccountDataParsed[] = [
  new AccountBuilder(tempClientSallie.id)
    .setValue(623450.0)
    .setInvestmentStrategy("ACTIVE")
    .setAdviserFee(ADVISERFEETYPE.PERCENTAGE, "1.05")
    .setName("Active Account")
    .build(),

  new AccountBuilder(tempClientSallie.id)
    .setValue(373450.0)
    .setInvestmentStrategy("MODERATE")
    .setAdviserFee(ADVISERFEETYPE.FIXED, "2300")
    .setName("Moderate")
    .build(),
];
