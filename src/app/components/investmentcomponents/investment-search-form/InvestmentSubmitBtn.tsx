import React, { useContext } from "react";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";
import { useRouter } from "next/navigation";

export default function InvestmentSubmitBtn() {
  const router = useRouter();

  const { pageState, investmentType, shareFormState, fundFormState } =
    useContext(InvestmentDisplayContext);

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

  console.log(fundSlug);

  function handleSubmit() {
    router.push(
      `/investments?investment-type=${investmentType}${
        investmentType === "shares" ? shareSlug : fundSlug
      }&per_page=${pageState}&page=1`
    );
  }

  return (
    <button onClick={handleSubmit} className="investment-submit-btn">
      Search
    </button>
  );
}
