import { ManagedInvestment } from "@prisma/client";
import { ManagedInvestmentBuilder } from "../builders/investments/managedinvestment";
import { arrayFromNumber } from "../utils/arrayFromNumber";

export const tempFundData: ManagedInvestment[] = arrayFromNumber(100).map((i) =>
  new ManagedInvestmentBuilder(` ${i}`).build()
);
