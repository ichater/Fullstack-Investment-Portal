import "@testing-library/jest-dom";
import React from "react";
import InvestmentSearchForm from "../../InvestmentSearchForm";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppRouterContextProviderMock } from "@/lib/test-utils/AppRouterMock";
import * as hooks from "@/hooks/useContextHooks";
import { InvestmentFormContextBuilder } from "@/lib/builders/context/InvestmentFormContextBuilder";

const fundContextMock = new InvestmentFormContextBuilder()
  .setFundState({
    name: "Profitable Funds",
    nabOwned: true,
    category: "fund",
  })
  .setPageData({
    perPage: 10,
    pageNumber: 1,
  })
  .build();

const shareContextMock = new InvestmentFormContextBuilder()
  .setShareState({ name: "Great Share!", asx: "abc123" })
  .setPageData({
    perPage: 5,
    pageNumber: 1,
  })
  .build();
describe("investmentSearchForm", () => {
  it("renders the search form with correct values when fund is selected", () => {
    jest
      .spyOn(hooks, "useInvestmentFormContext")
      .mockReturnValue(fundContextMock);

    const push = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <InvestmentSearchForm />
      </AppRouterContextProviderMock>
    );
    const nameSearch = screen.getByDisplayValue("Profitable Funds");
    const nabRadio = screen.getByDisplayValue("nab-owned-radio");
    const category = screen.getByDisplayValue("fund");
    expect(nameSearch).toBeInTheDocument();
    expect(nabRadio).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });
  it("renders generic display when an investment is selected", () => {
    jest
      .spyOn(hooks, "useInvestmentFormContext")
      .mockReturnValue(fundContextMock);

    const push = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <InvestmentSearchForm />
      </AppRouterContextProviderMock>
    );
    const pageSelect = screen.getByDisplayValue("10");
    expect(pageSelect).toBeInTheDocument();
  });

  it("renders correct values when Share state is selected", () => {
    jest
      .spyOn(hooks, "useInvestmentFormContext")
      .mockReturnValue(shareContextMock);

    const push = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <InvestmentSearchForm />
      </AppRouterContextProviderMock>
    );
    const shareName = screen.getByDisplayValue("Great Share!");
    const asx = screen.getByDisplayValue("abc123");
    expect(shareName).toBeInTheDocument();
    expect(asx).toBeInTheDocument();
  });

  it("renders appropriate page state when perPage is 5", () => {
    jest
      .spyOn(hooks, "useInvestmentFormContext")
      .mockReturnValue(shareContextMock);

    const push = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <InvestmentSearchForm />
      </AppRouterContextProviderMock>
    );
    const pageSelect = screen.getByDisplayValue("5");
    expect(pageSelect).toBeInTheDocument();
  });

  it("submit button is visible when investment state is selected", () => {
    jest
      .spyOn(hooks, "useInvestmentFormContext")
      .mockReturnValue(
        new InvestmentFormContextBuilder().setInvestmentType("funds").build()
      );

    const push = jest.fn();
    const { container } = render(
      <AppRouterContextProviderMock router={{ push }}>
        <InvestmentSearchForm />
      </AppRouterContextProviderMock>
    );

    expect(
      container.getElementsByClassName("investment-submit-btn").length
    ).toBe(1);
  });

  it("submit button is not visible when no investment state is selected", () => {
    jest
      .spyOn(hooks, "useInvestmentFormContext")
      .mockReturnValue(new InvestmentFormContextBuilder().build());

    const push = jest.fn();
    const { container } = render(
      <AppRouterContextProviderMock router={{ push }}>
        <InvestmentSearchForm />
      </AppRouterContextProviderMock>
    );

    expect(
      container.getElementsByClassName("investment-submit-btn").length
    ).toBe(0);
  });
});
