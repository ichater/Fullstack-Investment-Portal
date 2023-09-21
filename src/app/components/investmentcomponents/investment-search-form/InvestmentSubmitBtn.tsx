import React, { useEffect, useState } from "react";

import { useInvestmentDisplayContext, useInvestmentFormContext } from "@/hooks";
import { useQueryString } from "@/hooks/useQueryString";
import { ParamKeyValue } from "@/types";

export default function InvestmentSubmitBtn() {
  const { pushQueryString, generateNameValues } = useQueryString();

  const { investmentFormState, setInvestmentFormState } =
    useInvestmentFormContext();
  const { setInvestmentDisplayState, setTriggerSearch } =
    useInvestmentDisplayContext();

  const { investmentType, shareState, fundState, pageData } =
    investmentFormState;
  const { category, nabOwned } = fundState;

  const [paramState, setParamState] = useState<ParamKeyValue[]>([]);

  useEffect(() => {
    const shareValues = generateNameValues([
      {
        name: "investment-type",
        value: investmentType,
        condition: !!investmentType,
      },
      { name: "name", value: shareState.name, condition: !!shareState.name },
      { name: "asx", value: shareState.asx, condition: !!shareState.asx },
    ]);

    const fundValues = generateNameValues([
      {
        name: "investment-type",
        value: investmentType,
        condition: !!investmentType,
      },
      { name: "name", value: fundState.name, condition: !!fundState.name },
      { name: "nab", value: nabOwned.toString(), condition: !!nabOwned },
      { name: "category", value: category, condition: !!category },
    ]);

    const investmentKeyValueArr: ParamKeyValue[] =
      investmentType === "shares"
        ? shareValues
        : investmentType === "funds"
        ? fundValues
        : [];

    const pageKeyValueArr: ParamKeyValue[] = [
      { name: "per-page", value: pageData.perPage.toString() },
      { name: "page", value: "1" },
    ];

    setParamState([...investmentKeyValueArr, ...pageKeyValueArr]);
  }, [investmentFormState, setInvestmentFormState]);

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

    setInvestmentDisplayState((state) => ({
      ...state,
      investmentType,
    }));

    pushQueryString(paramState, true);

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
