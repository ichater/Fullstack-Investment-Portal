import React from "react";
import {
  useInvestmentFormContext,
  useInvestmentResultContext,
} from "@/context/InvestmentDisplayContext";
import { useRouter } from "next/navigation";

export default function InvestmentSubmitBtn() {
  // console.log("InvestmentSubmitBtn render");
  const router = useRouter();

  const {
    pageState,
    shareFormState,
    fundFormState,
    formDisplay,
    setPageNumber,
    setTriggerSearch,
  } = useInvestmentFormContext();

  const {
    setInvestmentType,
    setShareRequestState,
    setFundRequestState,
    setDisplayPageNumber,
    setInvestmentsPerPage,
  } = useInvestmentResultContext();

  function handleSubmit() {
    formDisplay === "shares" && setShareRequestState(shareFormState);
    formDisplay === "funds" && setFundRequestState(fundFormState);

    const asxSlug: string = shareFormState.asx
      ? `&asx=${shareFormState.asx}`
      : "";
    const shareNameSlug: string = shareFormState.name
      ? `&name=${shareFormState.name}`
      : "";

    const shareSlug: string = asxSlug + shareNameSlug;

    const { category, nabOwned } = fundFormState;

    const fundNameSlug: string = fundFormState.name
      ? `&name=${fundFormState.name}`
      : "";
    const nabOwnedSlug: string = nabOwned ? `&nab=${nabOwned}` : "";
    const fundCategorySlug: string = category ? `&category=${category}` : "";
    const fundSlug: string = fundNameSlug + nabOwnedSlug + fundCategorySlug;

    setInvestmentType(formDisplay);
    router.push(
      `/investments?investment-type=${formDisplay}${
        formDisplay === "shares" ? shareSlug : fundSlug
      }&per_page=${pageState}&page=1`
    );

    setPageNumber(1);
    setDisplayPageNumber(1);
    setInvestmentsPerPage(pageState);
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
