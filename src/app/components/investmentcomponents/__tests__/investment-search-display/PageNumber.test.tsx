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
    renderWithRouter(<PageNumber pageNumber={4} />);
    const number = screen.getByText("4");
    expect(number).toBeInTheDocument();
  });

  it("fires onClick function when clicked", () => {
    const mockSetState = jest.fn();
    const mockedDisplayContext = new InvestmentDisplayContextBuilder()
      .setMockSetInvestmentDisplayState(mockSetState)
      .build();

    jest
      .spyOn(hooks, "useInvestmentDisplayContext")
      .mockReturnValue(mockedDisplayContext);

    const { getByText } = renderWithRouter(<PageNumber pageNumber={4} />);
    const button = getByText("4");
    fireEvent.click(button);

    expect(mockSetState).toHaveBeenCalled();
  });

  it("Changes displaystate when clicked", () => {
    jest.mock("../../../../../hooks/contextHooks", () => ({
      useInvestmentDisplayContext: jest.fn(),
    }));

    const useInvestmentDisplayContext = jest.fn();
    const mockedDisplayContext = new InvestmentDisplayContextBuilder().build();

    const setInvestmentDisplayStateMock = jest.fn();

    // Mock the context hook's return value
    (useInvestmentDisplayContext as jest.Mock).mockReturnValue({
      ...mockedDisplayContext,
      setInvestmentDisplayState: setInvestmentDisplayStateMock,
    });
    const { getByText } = renderWithRouter(<PageNumber pageNumber={4} />);

    fireEvent.click(getByText("4"));

    expect(setInvestmentDisplayStateMock).toHaveBeenCalledWith(
      expect.any(Function)
    );
  });
});
