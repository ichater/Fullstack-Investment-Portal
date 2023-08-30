import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";

import InvestmentResults from "../../InvestmentSearchResults";
import { investmentDisplayContextMockFactory } from "@/lib/test-utils/investment-utils/InvestmentDisplayContextmock";
import {
  mockInvestmentResult,
  mockShareResults,
} from "@/lib/test-utils/investment-utils/InvestmentDataMocks";
import { AppRouterContextProviderMock } from "@/lib/test-utils/AppRouterMock";

describe("Investment Main Display", () => {
  describe("testing SMA/investment results", () => {
    const mockedDisplayContextFunds = investmentDisplayContextMockFactory(
      "funds",
      mockInvestmentResult
    );
    it("table renders when there is data", () => {
      const push = jest.fn();
      const { container } = render(
        <AppRouterContextProviderMock router={{ push }}>
          <InvestmentResultContext.Provider value={mockedDisplayContextFunds}>
            <InvestmentResults />
          </InvestmentResultContext.Provider>{" "}
        </AppRouterContextProviderMock>
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
      mockShareResults
    );
    it("table renders when there is data", () => {
      const push = jest.fn();
      const { container } = render(
        <AppRouterContextProviderMock router={{ push }}>
          <InvestmentResultContext.Provider value={mockedDisplayContextShares}>
            <InvestmentResults />
          </InvestmentResultContext.Provider>
        </AppRouterContextProviderMock>
      );
      const table = container.getElementsByClassName(
        "investment-search-result_table"
      )[0];
      expect(table).toBeInTheDocument();
    });
  });
});
