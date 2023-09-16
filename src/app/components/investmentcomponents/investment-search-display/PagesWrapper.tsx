import { arrayFromNumber } from "@/lib/utils/arrayFromNumber";
import { DisplayFund, DisplayShare } from "@/types";
import React, { useCallback } from "react";
import PageNumber from "./PageNumber";
import { useInvestmentDisplayContext } from "@/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(
        searchParams ? searchParams.toString() : ""
      );
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const { setInvestmentDisplayState } = useInvestmentDisplayContext();

  const onClick = (pageNumber: number) => {
    setInvestmentDisplayState((state) => ({
      ...state,
      pageData: {
        ...state.pageData,
        pageNumber,
      },
    }));
    setCurrentInvestmentDisplay(data[pageNumber - 1]);
    router.push(
      pathname + "?" + createQueryString("page", pageNumber.toString())
    );
  };
  return (
    <div className="page-number_wrapper">
      {arrayFromNumber(data.length).map((_, i) => (
        <PageNumber onClick={onClick} key={i} pageNumber={i + 1} />
      ))}
    </div>
  );
}
