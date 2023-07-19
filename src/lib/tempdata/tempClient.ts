import { Account } from "@prisma/client";
import { AccountBuilder, ClientBuilder } from "../builders";

export const tempClientSallie = new ClientBuilder("Sallie")
  .setAccess("READWRITE")
  .setAviserId("tempAdviserId")
  .setBio(
    "Claire seems like a trustworthy and lovely lady, she sayd I shouldnt hire her to manage my retirement fund since she is a burse and not an advisor but I think she is under selling herself. With any luck my investment options pay off and I can pay for my nephew Brians drug habit"
  )
  .build();

export const sallieAccountsTemp: Account[] = [
  new AccountBuilder("sallie-doe")
    .setValue(123450.0)
    .setInvestmentStraqtegy("ACTIVE")
    .build(),

  new AccountBuilder("sallie-doe")
    .setValue(373450.0)
    .setInvestmentStraqtegy("MODERATE")
    .build(),
];
