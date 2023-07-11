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
    setSubmitClicked,
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
    router.push(
      `/investments?investment-type=${investmentType}${
        investmentType === "shares" ? shareSlug : fundSlug
      }&per_page=${pageState}&page=1`
    );
    if (investmentType === "shares") getShares(shareFormState);
    if (investmentType === "funds") getManagedInvestments(fundFormState);
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
