import "@testing-library/jest-dom";
import React from "react";
import InvestmentSubmitBtn from "../../investment-search-form/InvestmentSubmitBtn";
import { renderWithRouter } from "@/lib/test-utils/AppRouterMock";
import { screen, fireEvent } from "@testing-library/react";
import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";
import { InvestmentDisplayContext } from "@/types/context";
import { InvestmentSearchContext } from "@/context/InvestmentFormContext";
import {
  InvestmentFormContextBuilder,
  InvestmentDisplayContextBuilder,
} from "@/lib/builders";
import * as hooks from "@/hooks/useContextHooks";

describe("InvestmentSubmitBtn", () => {
  it("trigger search is called when button is clicked", () => {
    const setSearch = jest.fn();
    const mockedContext: InvestmentDisplayContext =
      new InvestmentDisplayContextBuilder()
        .setMockTriggerSearch(setSearch)
        .build();

    renderWithRouter(
      <InvestmentResultContext.Provider value={mockedContext}>
        <InvestmentSubmitBtn />
      </InvestmentResultContext.Provider>
    );

    const button = screen.getByText("Search");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(setSearch).toHaveBeenCalled();
  });

  it("Investment form state is set when button is clicked", () => {
    const setInvestmentFormState = jest.fn();
    const mockedContext = new InvestmentFormContextBuilder()
      .setMockSetInvestmentFormState(setInvestmentFormState)
      .build();

    renderWithRouter(
      <InvestmentSearchContext.Provider value={mockedContext}>
        <InvestmentSubmitBtn />
      </InvestmentSearchContext.Provider>
    );

    const button = screen.getByText("Search");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(setInvestmentFormState).toHaveBeenCalled();
  });

  it("Investment form state is set when button is clicked hook pattern", () => {
    const setInvestmentFormState = jest.fn();
    const mockedContext = new InvestmentFormContextBuilder()
      .setMockSetInvestmentFormState(setInvestmentFormState)
      .build();
    jest
      .spyOn(hooks, "useInvestmentFormContext")
      .mockReturnValue(mockedContext);

    renderWithRouter(<InvestmentSubmitBtn />);

    const button = screen.getByText("Search");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(setInvestmentFormState).toHaveBeenCalled();
  });
});
