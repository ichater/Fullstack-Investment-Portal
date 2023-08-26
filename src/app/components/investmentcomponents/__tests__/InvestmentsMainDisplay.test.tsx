import InvestmentDisplay from "../InvestmentMainDisplay";
import "@testing-library/jest-dom";
import React, { createContext } from "react";
import { render } from "@testing-library/react";
import { investmentFormContextMock } from "@/lib/test-utils/investment-utils/InvestmentFormContextmock";
import { InvestmentFormContextType } from "@/types";
import { emptyInvestmentFormState } from "@/context/utils/InvestmentContextUtils";

const investmentFormContextEmpty = createContext<InvestmentFormContextType>({
  investmentFormState: emptyInvestmentFormState,
  setInvestmentFormState: (): any => {},
});

const InvestmentFormContextMockProvider = investmentFormContextEmpty.Provider;

describe("Investment Main Display", () => {
  it("renders heading", () => {
    const { getByText } = render(<InvestmentDisplay />);
    const name = getByText("Search Investments:");
    expect(name).toBeInTheDocument();
  });
  // it("adds context properly", () => {
  //   const { getByText } = render(
  //     <InvestmentFormContextMockProvider value={investmentFormContextMock}>
  //       <InvestmentDisplay />
  //     </InvestmentFormContextMockProvider>
  //   );
  //   const name = getByText("mlc");
  //   expect(name).toBeInTheDocument();
  // });
});
