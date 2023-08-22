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
});

describe("clients tab is clicked", () => {
  it("Clients heading is visible", () => {
    const { getByText } = render(<Home params={{ slug: "claire-ruming" }} />);

    const button = getByText("Clients");
    fireEvent.click(button);

    const heading = screen.getByText(/Client List:/i);
    expect(heading).toBeInTheDocument();
  });
  it("Add client button is visible", () => {
    const { getByText } = render(<Home params={{ slug: "claire-ruming" }} />);

    const button = getByText("Clients");
    fireEvent.click(button);

    const btn = screen.getByText(/Add Client/i);
    expect(btn).toBeInTheDocument();
  });
  it("when the add client button is clicked new client is visible", () => {
    const { getByText } = render(<Home params={{ slug: "claire-ruming" }} />);

    const button = getByText("Clients");
    fireEvent.click(button);
    const addClientBtn = getByText("Add Client");
    fireEvent.click(addClientBtn);
    const subHeading = screen.getByText(/New Client/i);
    expect(subHeading).toBeInTheDocument();
  });
  it("when the add client button is clicked Display Clients is visible", () => {
    const { getByText } = render(<Home params={{ slug: "claire-ruming" }} />);

    const button = getByText("Clients");
    fireEvent.click(button);
    const addClientBtn = getByText("Add Client");
    fireEvent.click(addClientBtn);
    const subHeading = screen.getByText(/New Client/i);
    expect(subHeading).toBeInTheDocument();
  });
  it("Add client is clicked, display clients is visible and when display clients is clicked add client is visible again", () => {
    const { getByText } = render(<Home params={{ slug: "claire-ruming" }} />);

    const button = getByText("Clients");
    fireEvent.click(button);
    const addClientBtn = getByText("Add Client");
    fireEvent.click(addClientBtn);
    const displayClientbtn = getByText("Display Clients");
    expect(displayClientbtn).toBeInTheDocument();
    fireEvent.click(displayClientbtn);
    expect(addClientBtn).toBeInTheDocument();
  });
});
