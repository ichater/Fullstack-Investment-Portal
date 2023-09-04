import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";
import InvestmentResults from "../../InvestmentSearchResults";
import {
  mockInvestmentResult,
  mockShareResults,
  investmentDisplayContextMockFactory,
} from "@/lib/test-utils/investment-utils";
import {
  AppRouterContextProviderMock,
  renderWithRouter,
} from "@/lib/test-utils/AppRouterMock";
import * as hooks from "@/hooks/contextHooks";
import { InvestmentDisplayContextBuilder } from "@/lib/builders";
import { InvestmentDisplayContext } from "@/types/context";
import { mockFundResults } from "@/lib/test-utils/investment-utils/InvestmentDataMocks";

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

    it("renders different shares when page 2 is clicked", () => {
      const push = jest.fn();
      const { getByText } = render(
        <AppRouterContextProviderMock router={{ push }}>
          <InvestmentResultContext.Provider value={mockedDisplayContextShares}>
            <InvestmentResults />
          </InvestmentResultContext.Provider>
        </AppRouterContextProviderMock>
      );

      expect(screen.queryByText("ALPHA HPA LIMITED")).toBeNull();
      const pageTwoBtn = getByText("2");
      fireEvent.click(pageTwoBtn);
      expect(pageTwoBtn).toBeInTheDocument();
    });

    it("testing the hook for context", () => {
      const { displayedInvestments, investmentDisplayState } =
        investmentDisplayContextMockFactory("shares", mockShareResults);

      jest.spyOn(hooks, "useInvestmentDisplayContext").mockReturnValue({
        displayedInvestments,
        investmentDisplayState,
        triggerSearch: false,
        setTriggerSearch: jest.fn(),
        setDisplayedInvestments: jest.fn(),
        setInvestmentDisplayState: jest.fn(),
      });

      const push = jest.fn();
      render(
        <AppRouterContextProviderMock router={{ push }}>
          <InvestmentResults />
        </AppRouterContextProviderMock>
      );
      expect(screen.getByText("LIFE360 INC.")).toBeInTheDocument();
    });

    describe("testing investmentDisplayBuilder class", () => {
      const setSearch = jest.fn();
      const mockedDisplayContext: InvestmentDisplayContext =
        new InvestmentDisplayContextBuilder()
          .setMockTriggerSearch(setSearch)
          .setFundState({ name: "mlc", nabOwned: true, category: "fund" })
          .setDisplayedInvestments("funds", {
            investments: mockFundResults,
            loading: false,
            error: null,
          })
          .build();
      it("5 investments appear in the results when the per page is set to 5", () => {
        const { container } = renderWithRouter(
          <InvestmentResultContext.Provider value={mockedDisplayContext}>
            <InvestmentResults />
          </InvestmentResultContext.Provider>
        );

        expect(
          container.getElementsByClassName("investment-display_row").length
        ).toBe(5);
      });

      it("1 investment is visible in the results when page 2 is clicked", () => {
        const { container, getByText } = renderWithRouter(
          <InvestmentResultContext.Provider value={mockedDisplayContext}>
            <InvestmentResults />
          </InvestmentResultContext.Provider>
        );

        const pageTwo = getByText("2");
        fireEvent.click(pageTwo);

        expect(pageTwo).toBeInTheDocument();
      });

      it("setInvestmentDisplayState is called when page is clicked", () => {
        const setInvestmentDisplayState = jest.fn();

        jest.spyOn(hooks, "useInvestmentDisplayContext").mockReturnValue({
          ...mockedDisplayContext,
          setInvestmentDisplayState,
        });
        const { getByText } = renderWithRouter(<InvestmentResults />);

        const pageTwo = getByText("2");
        fireEvent.click(pageTwo);

        screen.debug();
        expect(setInvestmentDisplayState).toHaveBeenCalled();
      });
    });
  });
});
