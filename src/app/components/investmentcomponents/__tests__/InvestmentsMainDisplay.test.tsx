import InvestmentDisplay from "../InvestmentMainDisplay";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";

import InvestmentResults from "../InvestmentSearchResults";
import { investmentDisplayContextMock } from "@/lib/test-utils/investment-utils/InvestmentDisplayContextmock";

let mockedDisplayContext = investmentDisplayContextMock;

describe("Investment Main Display", () => {
  it("renders heading", () => {
    const { getByText } = render(<InvestmentDisplay />);
    const name = getByText("Search Investments:");
    expect(name).toBeInTheDocument();
  });
});
