import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FeeDisplay from "../components/FeeDisplay";

describe("Fee display on client account page", () => {
  let tempProps = { totalValue: 500000, cashInInvestments: 250000 };
  it("renders the fee display after the show button is clicked", () => {
    const { container } = render(<FeeDisplay {...tempProps} />);
    const button = container.getElementsByClassName("fee-display_togglebtn")[0];
    fireEvent.click(button);

    expect(screen.getByText("Fee Structure:")).toBeInTheDocument();
  });
});
