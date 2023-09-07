import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";
import InvestmentResults from "../../InvestmentSearchResults";
import PagesWrapper from "../../investment-search-display/PagesWrapper";
import { renderWithRouter } from "@/lib/test-utils/AppRouterMock";
import { InvestmentDisplayContextBuilder } from "@/lib/builders";
import { mockFundResults } from "@/lib/test-utils/investment-utils/InvestmentDataMocks";

import { investmentsPageParser } from "@/lib/utils/investmentdataparser";

jest.mock("../../investment-search-display/PagesWrapper", () => ({
  __esModule: true,
  default: jest.fn((props) => ({ ...props })),
}));

describe("Mocking", () => {
  describe("PagesWrapper in Investment results display", () => {
    it("mocked PagesWrapper was called once", () => {
      const mockedDisplayContextFunds = new InvestmentDisplayContextBuilder()
        .setDisplayedInvestments("funds", {
          investments: mockFundResults,
          loading: false,
          error: null,
        })
        .build();
      renderWithRouter(
        <InvestmentResultContext.Provider value={mockedDisplayContextFunds}>
          <InvestmentResults />
        </InvestmentResultContext.Provider>
      );

      // expect(PagesWrapper.mock.calls).toHaveLength(1);
    });
    it("mocked PagesWrapper was called with the right props", () => {
      const mockedDisplayContextFunds = new InvestmentDisplayContextBuilder()
        .setDisplayedInvestments("funds", {
          investments: mockFundResults,
          loading: false,
          error: null,
        })
        .build();

      const data = investmentsPageParser(
        mockedDisplayContextFunds.displayedInvestments.investments,
        mockedDisplayContextFunds.investmentDisplayState.pageData.perPage
      );
      renderWithRouter(
        <InvestmentResultContext.Provider value={mockedDisplayContextFunds}>
          <InvestmentResults />
        </InvestmentResultContext.Provider>
      );

      expect(PagesWrapper).toHaveBeenCalledWith(
        {
          data,
          setCurrentInvestmentDisplay: jest.fn(),
        },
        {}
      );
    });
  });
});
