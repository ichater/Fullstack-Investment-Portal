import Navbar from "../Navbar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Navbar Component", () => {
  it("renders successfully", () => {
    const { container } = render(<Navbar />);
    const navbar = container.getElementsByClassName("navbar_wrapper")[0];
    screen.debug();
    expect(navbar).toBeInTheDocument();
  });

  it("renders unauthed if no adviser data is passed in", () => {
    const { container } = render(<Navbar />);
    const navbar = container.getElementsByClassName("navbar_wrapper")[0];
    screen.debug();
    expect(navbar).toBeInTheDocument();
  });
});
