import "@testing-library/jest-dom";
import React from "react";
import ClientMainDisplay from "../clients/[clientSlug]/components/ClientMainDisplay";
import { ClientBuilder } from "@/lib/builders";
import { fireEvent, render, screen } from "@testing-library/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { mockedAccounts } from "@/lib/test-utils/account-utils/mocked-accounts";
import { renderWithRouter } from "@/lib/test-utils/AppRouterMock";

jest.mock("next/navigation");

const pushMock = jest.fn();

usePathname.mockReturnValue("example.com");
useRouter.mockReturnValue({
  push: pushMock,
});

describe("Client Main Display", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const client = new ClientBuilder("Claire").setLastName("ruming").build();

  it("renders page", () => {
    render(
      <ClientMainDisplay
        slug={"bruno-diaz"}
        clientSlug={client.slug}
        firstName={client.firstName}
        lastName={client.lastName}
        email={client.email}
        bio={client.bio}
        access={"READONLY"}
        profileImage={client.profileImage}
        parsedAccountInformation={[]}
      />
    );

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });
  it("calls all relevant next/navigation functions", () => {
    render(
      <ClientMainDisplay
        slug={"bruno-diaz"}
        clientSlug={client.slug}
        firstName={client.firstName}
        lastName={client.lastName}
        email={client.email}
        bio={client.bio}
        access={"READONLY"}
        profileImage={client.profileImage}
        parsedAccountInformation={[]}
      />
    );

    expect(useSearchParams).toHaveBeenCalled();
    expect(usePathname).toHaveBeenCalled();
    expect(useRouter).toHaveBeenCalled();
  });

  it("renders the client information on initial load", () => {
    render(
      <ClientMainDisplay
        slug={"bruno-diaz"}
        clientSlug={client.slug}
        firstName={client.firstName}
        lastName={client.lastName}
        email={client.email}
        bio={client.bio}
        access={"READONLY"}
        profileImage={client.profileImage}
        parsedAccountInformation={[]}
      />
    );

    expect(
      screen.getByText(`${client.firstName} ${client.lastName}`)
    ).toBeInTheDocument();
    expect(screen.getByText(client.email)).toBeInTheDocument();
    expect(screen.getByText(client.email)).toBeInTheDocument();
    expect(screen.getByText(client.bio)).toBeInTheDocument();
  });
  it("renders Log in and Sign up if no adviser data is passed in", () => {
    const funct=jest.fn()
    const data = new ContextBuilder().setInitialState("foo").setFunct(funct).build();

    render(
      <Context.Provider value={data}>
        <Navbar />
      </Context.Provider>
    );
    expect(screen.getByText("foo")).toBeInTheDocument()
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(funct).toHaveBeenCalled()

  // it("When account button is clicked client display is no longer visible", () => {
  //   renderWithRouter(
  //     <ClientMainDisplay
  //       slug={"bruno-diaz"}
  //       clientSlug={client.slug}
  //       firstName={client.firstName}
  //       lastName={client.lastName}
  //       email={client.email}
  //       bio={client.bio}
  //       access={"READONLY"}
  //       profileImage={client.profileImage}
  //       parsedAccountInformation={[]}
  //     />
  //   );

  //   const accountBtn = screen.getByText("Accounts");

  //   fireEvent.click(accountBtn);
  //   screen.debug();

  //   expect(screen.queryByText(client.email)).toBeNull();
  //   expect(screen.queryByText(client.email)).toBeNull();
  //   expect(screen.queryByText(client.bio)).toBeNull();
  // });
});
