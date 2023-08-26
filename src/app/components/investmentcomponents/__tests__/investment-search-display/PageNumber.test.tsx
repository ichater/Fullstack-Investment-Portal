import "@testing-library/jest-dom";
import React from "react";
import PageNumber, {
  PageNumberBtn,
} from "../../investment-search-display/PageNumber";
import { render, screen, fireEvent } from "@testing-library/react";

describe("PageNumber", () => {
  it("renders correct number", () => {
    const onClick = jest.fn();
    render(<PageNumberBtn pageNumber={4} onClick={onClick} />);

    const number = screen.getByText("4");
    expect(number).toBeInTheDocument();
  });

  it("fires onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <PageNumberBtn pageNumber={4} onClick={onClick} />
    );
    const button = getByText("4");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
