import { AccountBuilder } from "@/lib/builders";
import { AccountDataParsed } from "@/types";
import { ADVISERFEETYPE } from "@prisma/client";

export const mockedAccounts: AccountDataParsed[] = [
  new AccountBuilder("abc123")
    .setValue(623450.0)
    .setInvestmentStrategy("ACTIVE")
    .setAdviserFee(ADVISERFEETYPE.PERCENTAGE, "1.05")
    .setName("Active Account")
    .build(),

  new AccountBuilder("abc123")
    .setValue(164098)
    .setInvestmentStrategy("AGRESSIVE")
    .setAdviserFee(ADVISERFEETYPE.MIXED, "1.15")
    .setName("Passive income account")
    .build(),
];
