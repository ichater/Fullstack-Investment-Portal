import InvestmentDisplay from "../../InvestmentMainDisplay";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";

import InvestmentResults from "../../InvestmentSearchResults";
import { investmentDisplayContextMock } from "@/lib/test-utils/investment-utils/InvestmentDisplayContextmock";

let mockedDisplayContext = investmentDisplayContextMock;

describe("Investment Main Display", () => {
  describe("testing SMA/investment results", () => {
    const { container } = render(
      <InvestmentResultContext.Provider value={mockedDisplayContext}>
        <InvestmentResults />
      </InvestmentResultContext.Provider>
    );

    screen.debug();
    it("table renders when there is data", () => {
      const table = container.getElementsByClassName(
        "investment-search-result_table"
      )[0];
      expect(table).toBeInTheDocument();
    });

    it("renders the correct first row", () => {
      const { name } =
        mockedDisplayContext.displayedInvestments.investments[0][0];
      expect(<td>{name}</td>).toBeInTheDocument();
    });
  });
});
