import InvestmentDisplay from "../InvestmentMainDisplay";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import * as hooks from "@/hooks";
import {
  InvestmentFormContextBuilder,
  InvestmentDisplayContextBuilder,
} from "@/lib/builders";
import { renderWithRouter } from "@/lib/test-utils/AppRouterMock";
import { InvestmentDisplayContext } from "@/types/context";
import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";
import { InvestmentSearchContext } from "@/context/InvestmentFormContext";
import { mockFundResults } from "@/lib/test-utils/investment-utils/InvestmentDataMocks";

describe("Investment Main Display", () => {
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

  const setInvestmentFormState = jest.fn();
  const mockedFormContext = new InvestmentFormContextBuilder()
    .setMockSetInvestmentFormState(setInvestmentFormState)
    .setFundState({ name: "mlc", nabOwned: true, category: "fund" })
    .build();
  it("renders heading", () => {
    const { getByText } = renderWithRouter(
      <InvestmentResultContext.Provider value={mockedDisplayContext}>
        <InvestmentSearchContext.Provider value={mockedFormContext}>
          <InvestmentDisplay />
        </InvestmentSearchContext.Provider>
      </InvestmentResultContext.Provider>
    );
    screen.debug();
  });
});
