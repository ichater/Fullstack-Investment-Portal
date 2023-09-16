import React from "react";
import PagesWrapper from "../../investment-search-display/PagesWrapper";
import { renderWithRouter } from "@/lib/test-utils/AppRouterMock";
import { InvestmentDisplayContextBuilder } from "@/lib/builders";
import { mockInvestmentResult } from "@/lib/test-utils/investment-utils";
import { investmentsPageParser } from "@/lib/utils/investmentdataparser";

describe("Pages Wrapper", () => {
  const mockedDisplayContextFunds =
    new InvestmentDisplayContextBuilder().build();

  const data = investmentsPageParser(mockInvestmentResult, 5);

  const setCurrentInvestmentDisplay = jest.fn();
  it("renders", () => {
    renderWithRouter(
      <PagesWrapper
        data={data}
        setCurrentInvestmentDisplay={setCurrentInvestmentDisplay}
      />
    );

    screen.debug();
  });
});
