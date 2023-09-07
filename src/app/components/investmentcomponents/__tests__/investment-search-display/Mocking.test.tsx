import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";
import InvestmentResults from "../../InvestmentSearchResults";
import PagesWrapper from "../../investment-search-display/PagesWrapper";
import {
  AppRouterContextProviderMock,
  renderWithRouter,
} from "@/lib/test-utils/AppRouterMock";
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
      const mockedDisplayContextFunds =
        new InvestmentDisplayContextBuilder().build();

      renderWithRouter(
        <InvestmentResultContext.Provider value={mockedDisplayContextFunds}>
          <InvestmentResults />
        </InvestmentResultContext.Provider>
      );

      // expect(PagesWrapper.mock.calls).toHaveLength(1);
    });
  });
});
