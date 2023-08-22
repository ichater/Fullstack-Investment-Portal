import React from "react";
import {
  useInvestmentFormContext,
  useInvestmentDisplayContext,
} from "@/context";
import { useRouter } from "next/navigation";

export default function InvestmentSubmitBtn() {
  const router = useRouter();

  const { investmentFormState, setInvestmentFormState } =
    useInvestmentFormContext();

  const { investmentType, shareState, fundState, pageData } =
    investmentFormState;

  const { setInvestmentDisplayState, setTriggerSearch } =
    useInvestmentDisplayContext();

  function handleSubmit() {
    investmentType === "shares" &&
      setInvestmentDisplayState((state) => ({
        ...state,
        shareState,
      }));
    investmentType === "funds" &&
      setInvestmentDisplayState((state) => ({
        ...state,
        fundState,
      }));

    const asxSlug: string = shareState.asx ? `&asx=${shareState.asx}` : "";
    const shareNameSlug: string = shareState.name
      ? `&name=${shareState.name}`
      : "";

    const shareSlug: string = asxSlug + shareNameSlug;

    const { category, nabOwned } = fundState;

    const fundNameSlug: string = fundState.name
      ? `&name=${fundState.name}`
      : "";
    const nabOwnedSlug: string = nabOwned ? `&nab=${nabOwned}` : "";
    const fundCategorySlug: string = category ? `&category=${category}` : "";
    const fundSlug: string = fundNameSlug + nabOwnedSlug + fundCategorySlug;

    setInvestmentDisplayState((state) => ({
      ...state,
      investmentType,
    }));
    router.push(
      `/investments?investment-type=${investmentType}${
        investmentType === "shares" ? shareSlug : fundSlug
      }&per_page=${pageData.perPage}&page=1`
    );

    setInvestmentFormState((state) => ({
      ...state,
      pageData: {
        ...state.pageData,
        pageNumber: 1,
      },
    }));

    setInvestmentDisplayState((state) => ({
      ...state,
      pageData: {
        pageNumber: 1,
        perPage: pageData.perPage,
      },
    }));

    setTriggerSearch(true);
  }

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="investment-submit-btn"
    >
      Search
    </button>
  );
}
