import { render, screen } from "@testing-library/react";
import Home from "@/app/(unauthed)/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByText(/Advisor Link/i);

    expect(heading).toBeInTheDocument();
  });
});
