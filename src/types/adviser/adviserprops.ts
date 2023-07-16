import { Account, Adviser, Client } from "@prisma/client";

export type AdviserData = {
  adviserData: Adviser;
  clientData: Client[];
  accountData: Account[];
};
