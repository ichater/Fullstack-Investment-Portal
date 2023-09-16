import "@testing-library/jest-dom";
import React from "react";
import PagesWrapper from "../../investment-search-display/PagesWrapper";
import {
  AppRouterContextProviderMock,
  renderWithRouter,
} from "@/lib/test-utils/AppRouterMock";
import { InvestmentDisplayContextBuilder } from "@/lib/builders";
import { mockInvestmentResult } from "@/lib/test-utils/investment-utils";
import { investmentsPageParser } from "@/lib/utils/investmentdataparser";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Pages Wrapper", () => {
  const data = investmentsPageParser(mockInvestmentResult, 5);

  const setCurrentInvestmentDisplay = jest.fn();
  it("renders options for 3 pages", () => {
    renderWithRouter(
      <PagesWrapper
        data={data}
        setCurrentInvestmentDisplay={setCurrentInvestmentDisplay}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });
  it("renders changes investment display on click", () => {
    renderWithRouter(
      <PagesWrapper
        data={data}
        setCurrentInvestmentDisplay={setCurrentInvestmentDisplay}
      />
    );
    fireEvent.click(screen.getByText("2"));

    expect(setCurrentInvestmentDisplay).toHaveBeenCalled();
  });

  //   it("expect Router.push to have been called", () => {
  //     const push = jest.fn();
  //     render(
  //       <AppRouterContextProviderMock router={{ push }}>
  //         <PagesWrapper
  //           data={data}
  //           setCurrentInvestmentDisplay={setCurrentInvestmentDisplay}
  //         />
  //       </AppRouterContextProviderMock>
  //     );
  //     fireEvent.click(screen.getByText("2"));

  //     expect(push).toHaveBeenCalled();
  //   });
});
