import React from "react";
import { arrayFromNumber } from "@/lib/utils/arrayFromNumber";
import { DisplayFund, DisplayShare } from "@/types";
import PageNumber from "./PageNumber";
import { useInvestmentDisplayContext } from "@/hooks";
import { useQueryString } from "@/hooks/useQueryString";

export type Props = {
  data: DisplayShare[][] | DisplayFund[][];
  setCurrentInvestmentDisplay: React.Dispatch<
    React.SetStateAction<DisplayShare[] | DisplayFund[]>
  >;
};

export default function PagesWrapper({
  data,
  setCurrentInvestmentDisplay,
}: Props) {
  const { pushQueryString } = useQueryString();

  const { setInvestmentDisplayState, investmentDisplayState } =
    useInvestmentDisplayContext();

  const onClick = (pageNumber: number) => {
    setInvestmentDisplayState((state) => ({
      ...state,
      pageData: {
        ...state.pageData,
        pageNumber,
      },
    }));
    setCurrentInvestmentDisplay(data[pageNumber - 1]);
    pushQueryString([{ name: "page", value: pageNumber.toString() }]);
  };
  return (
    <div className="page-number_wrapper">
      {arrayFromNumber(data.length).map((_, i) => (
        <PageNumber
          onClick={onClick}
          key={i}
          pageNumber={i + 1}
          activePage={investmentDisplayState.pageData.pageNumber === i + 1}
        />
      ))}
    </div>
  );
}
