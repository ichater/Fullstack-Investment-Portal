/* istanbul ignore file */
import { ManagedInvestmentBuilder, ShareBuilder } from "@/lib/builders";

export const mockManagedInvestment = new ManagedInvestmentBuilder(
  "test-investment"
)
  .setApir("abc123")
  .setNabOwned(true)
  .setCategory("FUND")
  .build();

export const mockShare = new ShareBuilder("The-Share")
  .setasxCode("CLA")
  .setCategory("highly profitable")
  .build();
