import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import ClientCard from "../components/ClientCard";
import { AdvisorClientDisplay } from "@/types";

const genericClientData: AdvisorClientDisplay = {
  id: "123454",
  firstName: "Robert",
  lastName: "Whittaker",
  email: "Reaper@ufc.com.au",
  profileImage: "/profileImage",
  advisorSlug: "Au",
  clientSlug: "robert-whittaker",
  bio: "Just another UFC fighter doing what he can to survive",
};

describe("Renders client card from advisor page with correct information", () => {
  it("renders a heading", () => {
    render(<ClientCard {...genericClientData} />);
    const heading = screen.getByText(/Robert Whittaker/i);

    expect(heading).toBeInTheDocument();
  });
  it("renders the email", () => {
    render(<ClientCard {...genericClientData} />);
    const email = screen.getByText(/Reaper@ufc.com.au/i);

    expect(email).toHaveTextContent("Reaper@ufc.com.au");
  });
  it("renders two divs with the className client-information_wrapper", () => {
    const { container } = render(<ClientCard {...genericClientData} />);

    expect(
      container.getElementsByClassName("client-information_wrapper").length
    ).toBe(2);
  });
  it("renders two divs with the className client-information_wrapper", () => {
    const { container } = render(<ClientCard {...genericClientData} />);

    const bioWrappers = container.getElementsByClassName(
      "client-information_wrapper"
    );
    expect(bioWrappers[0].children[1]).toHaveTextContent(
      genericClientData.email
    );
    expect(bioWrappers[1].textContent).toBe(genericClientData.bio);
  });
});
