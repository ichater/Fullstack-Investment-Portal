import "@testing-library/jest-dom";
import React from "react";
import FundRow from "../../investment-search-display/FundRow";
import { render, screen } from "@testing-library/react";
import { mockManagedInvestment } from "@/lib/test-utils/investment-utils/dataMocks";

describe("FundRow", () => {
  it("renders correct fund title", () => {
    render(
      <table>
        <tbody>
          <FundRow fund={mockManagedInvestment} />
        </tbody>
      </table>
    );
    const name = screen.getByText("test-investment");
    expect(name).toBeInTheDocument();
  });
  it("renders correct fund apir and NabOwned is true", () => {
    render(
      <table>
        <tbody>
          <FundRow fund={mockManagedInvestment} />
        </tbody>
      </table>
    );
    const apir = screen.getByText("abc123");
    expect(apir).toBeInTheDocument();
    const nab = screen.getByText("true");
    expect(nab).toBeInTheDocument();
  });
});
