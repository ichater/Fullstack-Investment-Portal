import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import AccountFundTable from "../components/AccountFundTable";
import { tempFunds } from "@/lib/tempdata";

describe("Account Fund Table", () => {
  it("Renders all of the fund details when a fund is present", () => {
    const data = tempFunds[0];
    render(<AccountFundTable type="fund" investments={[data]} />);
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "id" && key !== "category") {
        if (typeof value === "string" || typeof value === "number") {
          expect(screen.getByText(value)).toBeInTheDocument();
        }
      }
    });
  });
  it("Renders the correct number of cells based on the data given", () => {
    const data = [tempFunds[0], tempFunds[1], tempFunds[3]];
    const { container } = render(
      <AccountFundTable type="fund" investments={data} />
    );
    expect(
      container.getElementsByClassName("investment-col_wrapper").length
    ).toBe(3);
  });
});
