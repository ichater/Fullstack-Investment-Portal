import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/app/(adviser)/[slug]/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home params={{ slug: "claire-ruming" }} />);
    const heading = screen.getByText(/Claire Ruming/i);

    expect(heading).toBeInTheDocument();
  });
  it("When the client tab is clicked the display changes to clients", () => {
    const { getByText } = render(<Home params={{ slug: "claire-ruming" }} />);

    const button = getByText("Clients");
    fireEvent.click(button);

    const heading = screen.getByText(/Client List:/i);
    expect(heading).toBeInTheDocument();
  });
});
