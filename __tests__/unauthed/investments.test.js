import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Investments from "@/app/(unauthed)/investments/page";
import axios from "axios";
import "@testing-library/jest-dom";

import { ShareBuilder } from "../../src/lib/builders/index";

const InvestmentDisplayContext = React.createContext();
jest.mock("axios");

const mockedShares = [
  new ShareBuilder("shareOne").setasxCode("ABC").build(),
  new ShareBuilder("shareTwo").setasxCode("BJJ").build(),
  new ShareBuilder("shareThree").build(),
];

const mockContextValue = {
  formDisplay: "shares",
  investmentType: "shares",
  // ...
};

describe("investments", () => {
  it("renders a heading", () => {
    render(<Investments />);

    const heading = screen.getByText(/Search investments:/i);

    expect(heading).toBeInTheDocument();
  });

  it("renders investments on click", async () => {
    axios.get.mockResolvedValue({ data: mockedShares });
    render(
      <InvestmentDisplayContext.Provider value={mockContextValue}>
        <Investments />
      </InvestmentDisplayContext.Provider>
    );

    const shareTwo = await waitFor(() => screen.getByText("shareTwo"));
    expect(shareTwo).toBeInTheDocument();
  });
});
