import React, { useCallback } from "react";
import { useInvestmentDisplayContext } from "@/context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  pageNumber: number;
};

export default function PageNumber({ pageNumber }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as any);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const { setInvestmentDisplayState } = useInvestmentDisplayContext();
  return (
    <button
      className="page-number_select"
      onClick={() => {
        setInvestmentDisplayState((state) => ({
          ...state,
          pageData: {
            ...state.pageData,
            pageNumber,
          },
        }));
        router.push(
          pathname + "?" + createQueryString("page", pageNumber.toString())
        );
      }}
    >
      {pageNumber}
    </button>
  );
}
