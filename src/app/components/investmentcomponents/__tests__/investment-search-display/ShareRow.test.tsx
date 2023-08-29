import "@testing-library/jest-dom";
import React from "react";
import ShareRow from "../../investment-search-display/ShareRow";
import { render, screen } from "@testing-library/react";
import { mockShare } from "@/lib/test-utils/investment-utils/InvestmentDataMocks";

describe("ShareRow", () => {
  it("renders correct share name", () => {
    render(
      <table>
        <tbody>
          <ShareRow share={mockShare} />
        </tbody>
      </table>
    );
    const name = screen.getByText("The-Share");
    expect(name).toBeInTheDocument();
  });
  it("renders correct asx and category", () => {
    render(
      <table>
        <tbody>
          <ShareRow share={mockShare} />
        </tbody>
      </table>
    );
    const asx = screen.getByText("CLA");
    expect(asx).toBeInTheDocument();
    const category = screen.getByText("highly profitable");
    expect(category).toBeInTheDocument();
  });
});
