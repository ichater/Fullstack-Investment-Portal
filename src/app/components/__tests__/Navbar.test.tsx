import { AdviserAuthContext } from "@/context/AdviserAuthContext";
import Navbar from "../Navbar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { AdviserAuthContextBuilder, AdviserBuilder } from "@/lib/builders";

describe("Navbar Component", () => {
  it("renders successfully", () => {
    const { container } = render(<Navbar />);
    const navbar = container.getElementsByClassName("navbar_wrapper")[0];
    expect(navbar).toBeInTheDocument();
  });

  it("renders Log in and Sign up if no adviser data is passed in", () => {
    const data = new AdviserAuthContextBuilder().build();

    render(
      <AdviserAuthContext.Provider value={data}>
        <Navbar />
      </AdviserAuthContext.Provider>
    );
    const signIn = screen.getByText("Log In");
    const signUp = screen.getByText("Sign Up");
    expect(signIn).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();

    const logOut = screen.queryByText("Log Out");
    expect(logOut).toBeNull();
  });

  it("Log out is visible when adviser data is passed in", () => {
    const data = new AdviserAuthContextBuilder()
      .setAdviserData(new AdviserBuilder("Claire").build())
      .build();

    render(
      <AdviserAuthContext.Provider value={data}>
        <Navbar />
      </AdviserAuthContext.Provider>
    );
    const logOut = screen.getByText("Log Out");
    expect(logOut).toBeInTheDocument();

    const signIn = screen.queryByText("Log In");
    const signUp = screen.queryByText("Sign Up");
    expect(signIn).toBeNull();
    expect(signUp).toBeNull();
  });
});
