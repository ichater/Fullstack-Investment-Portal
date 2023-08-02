import React from "react";
import { useInvestmentContext } from "@/context/InvestmentDisplayContext";
import { useRouter } from "next/navigation";

export default function InvestmentSubmitBtn() {
  console.log("InvestmentSubmitBtn render");
  const router = useRouter();

  const {
    pageState,
    shareFormState,
    fundFormState,
    setInvestmentType,
    formDisplay,
    setPageNumber,
    setTriggerSearch,
  } = useInvestmentContext();

  const { asx } = shareFormState;

  const asxSlug: string = asx ? `&asx=${asx}` : "";
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

  function handleSubmit() {
    setInvestmentType(formDisplay);
    router.push(
      `/investments?investment-type=${formDisplay}${
        formDisplay === "shares" ? shareSlug : fundSlug
      }&per_page=${pageState}&page=1`
    );

    setPageNumber(1);
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
