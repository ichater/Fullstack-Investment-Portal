import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByText(/Advisor Link/i);

    expect(heading).toBeInTheDocument();
  });
  it("includes link to advisor page", () => {
    render(<Home />);
    expect(screen.getByText("Adviser list")).toBeInTheDocument();
    expect(screen.getByTestId("adviser-link")).toBeInTheDocument();
  });
});
