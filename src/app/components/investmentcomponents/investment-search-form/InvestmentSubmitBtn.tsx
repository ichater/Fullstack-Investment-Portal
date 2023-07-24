import React, { useContext } from "react";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";
import { useRouter } from "next/navigation";
import { useInvestmentSearch } from "@/hooks/useInvestmentSearch";

export default function InvestmentSubmitBtn() {
  const router = useRouter();
  const { getShares, getManagedInvestments } = useInvestmentSearch();

  const {
    investmentType,
    pageState,
    shareFormState,
    fundFormState,
    setInvestmentType,
    formDisplay,
    setPageNumber,
  } = useContext(InvestmentDisplayContext);

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

    if (formDisplay === "shares") {
      console.log("shares called");
      getShares(shareFormState);
    }
    if (formDisplay === "funds") {
      console.log("funds called");
      getManagedInvestments(fundFormState);
    }
    setPageNumber(1);
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
