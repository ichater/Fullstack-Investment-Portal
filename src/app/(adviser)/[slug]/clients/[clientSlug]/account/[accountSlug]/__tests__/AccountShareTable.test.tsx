import "@testing-library/jest-dom";
import React from "react";
import AccountShareTable from "../components/AccountShareTable";
import { screen, render } from "@testing-library/react";
import { tempShares } from "@/lib/tempdata";

describe("Account Share Table", () => {
  it("renders all Share details", () => {
    const data = tempShares[0];
    render(<AccountShareTable shares={[data]} />);
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "id") {
        expect(screen.getByText(value)).toBeInTheDocument();
      }
    });
  });

  it("Renders the correct number of cells based on the data given", () => {
    const data = [tempShares[0], tempShares[1], tempShares[3]];
    const { container } = render(<AccountShareTable shares={data} />);
    expect(
      container.getElementsByClassName("investment-col_wrapper").length
    ).toBe(3);
  });
});
