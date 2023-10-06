import { ManagedInvestmentBuilder, ShareBuilder } from "@/lib/builders";
import { investmentRowParser } from "../investmentRowParser";

describe("parsers", () => {
  describe("investmentRowParser", () => {
    it("parses fund object into an array of strings correctly", () => {
      const fund = new ManagedInvestmentBuilder("test-fund")
        .setApir("ABC")
        .setNabOwned(true)
        .setCategory("FUND")
        .setMer(1.03)
        .build();

      const result = investmentRowParser({ investment: fund });

      expect(result).toEqual(["ABC", "test-fund", "true", "1.03", "FUND"]);
    });
    it("parses share object into an array of strings correctly", () => {
      const share = new ShareBuilder("test-share")
        .setCategory("coservative")
        .setasxCode("abc123")
        .build();

      const result = investmentRowParser({ investment: share });

      expect(result).toEqual(["abc123", "test-share", "coservative"]);
    });
  });
});
