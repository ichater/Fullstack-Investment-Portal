import "@testing-library/jest-dom";
import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";

import InvestmentResults from "../../InvestmentSearchResults";
import {
  investmentDisplayContextMock,
  investmentDisplayContextMockFactory,
} from "@/lib/test-utils/investment-utils/InvestmentDisplayContextmock";
import {
  mockInvestmentResult,
  mockShareResults,
} from "@/lib/test-utils/investment-utils/InvestmentDataMocks";

describe("Investment Main Display", () => {
  describe("testing SMA/investment results", () => {
    const mockedDisplayContextFunds = investmentDisplayContextMockFactory(
      "funds",
      [mockInvestmentResult]
    );
    it("table renders when there is data", () => {
      const { container } = render(
        <InvestmentResultContext.Provider value={mockedDisplayContextFunds}>
          <InvestmentResults />
        </InvestmentResultContext.Provider>
      );
      const table = container.getElementsByClassName(
        "investment-search-result_table"
      )[0];
      expect(table).toBeInTheDocument();
    });
  });

  describe("testing shares results", () => {
    const mockedDisplayContextShares = investmentDisplayContextMockFactory(
      "shares",
      [mockShareResults]
    );
    it("table renders when there is data", () => {
      const { container } = render(
        <InvestmentResultContext.Provider value={mockedDisplayContextShares}>
          <InvestmentResults />
        </InvestmentResultContext.Provider>
      );
      const table = container.getElementsByClassName(
        "investment-search-result_table"
      )[0];
      screen.debug();
      expect(table).toBeInTheDocument();
    });
  });
});
