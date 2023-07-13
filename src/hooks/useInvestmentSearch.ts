import { useContext, useState } from "react";
import axios from "axios";
import { ManagedInvestmentFormState, ShareFormState } from "@/types";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";
import { ManagedInvestment, Share } from "@prisma/client";
import { investmentsPageParser } from "@/lib/utils/investmentdataparser";

export const useInvestmentSearch = () => {
  const { setDisplayedInvestments, pageState } = useContext(
    InvestmentDisplayContext
  );

  async function getShares({ asx, name }: ShareFormState) {
    setDisplayedInvestments({
      error: null,
      investments: [],
      loading: true,
    });
    try {
      const response = await axios.get(
        `http://localhost:3000/api/investments/getshares?name=${name}&asx=${asx}`
      );

      const investments = investmentsPageParser(
        response.data.data as Share[],
        pageState
      );
      return setDisplayedInvestments({
        investments,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      setDisplayedInvestments({
        investments: [],
        error,
        loading: false,
      });
      return { error };
    }
  }
  async function getManagedInvestments({
    name,
    nabOwned,
    category,
  }: ManagedInvestmentFormState) {
    setDisplayedInvestments({
      error: null,
      investments: [],
      loading: true,
    });

    try {
      const response = await axios.get(
        `http://localhost:3000/api/investments/getmanagedinvestments?name=${name}&nab=${nabOwned}&category=${category}`
      );

      const investments = investmentsPageParser(
        response.data.data as ManagedInvestment[],
        pageState
      );

      return setDisplayedInvestments({
        investments,
        loading: false,
        error: null,
      });
    } catch (error: any) {
      return setDisplayedInvestments({
        investments: [],
        loading: false,
        error,
      });
    }
  }

  return { getShares, getManagedInvestments };
};
