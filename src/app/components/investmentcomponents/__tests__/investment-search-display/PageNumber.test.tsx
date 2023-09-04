import "@testing-library/jest-dom";
import React from "react";
import PageNumber from "../../investment-search-display/PageNumber";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "@/lib/test-utils/AppRouterMock";
import * as hooks from "@/hooks/contextHooks";
import { InvestmentDisplayContextBuilder } from "@/lib/builders";

describe("PageNumber", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });
  it("renders correct number", () => {
    const onClick = jest.fn();
    renderWithRouter(<PageNumber pageNumber={4} onClick={onClick} />);
    const number = screen.getByText("4");
    expect(number).toBeInTheDocument();
  });

  it("fires onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = renderWithRouter(
      <PageNumber pageNumber={4} onClick={onClick} />
    );
    const button = getByText("4");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
