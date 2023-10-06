import "@testing-library/jest-dom";
import React from "react";
import InvestmentRow from "../../investment-search-display/InvestmentRow";
import { render, screen } from "@testing-library/react";
import { ManagedInvestmentBuilder, ShareBuilder } from "@/lib/builders";

describe("Investment Row renders correct information based off props", () => {
  it("renders share data", () => {
    const share = new ShareBuilder("test-share")
      .setCategory("coservative")
      .setasxCode("abc123")
      .build();

    render(
      <table>
        <tbody>
          <InvestmentRow investment={share} />
        </tbody>
      </table>
    );
    screen.debug();

    expect(screen.getByText("test-share")).toBeInTheDocument();
    expect(screen.getByText("coservative")).toBeInTheDocument();
    expect(screen.getByText("abc123")).toBeInTheDocument();
  });
  it("renders Managed fund data", () => {
    const fund = new ManagedInvestmentBuilder("test-fund")
      .setApir("ABC")
      .setNabOwned(true)
      .setCategory("FUND")
      .setMer(1.03)
      .build();
    render(
      <table>
        <tbody>
          <InvestmentRow investment={fund} />
        </tbody>
      </table>
    );
    screen.debug();

    expect(screen.getByText("test-fund")).toBeInTheDocument();
    expect(screen.getByText("ABC")).toBeInTheDocument();
    expect(screen.getByText("true")).toBeInTheDocument();
    expect(screen.getByText("1.03")).toBeInTheDocument();
    expect(screen.getByText("FUND")).toBeInTheDocument();
  });
});
