import { useContext, useState } from "react";
import axios from "axios";
import { ManagedInvestmentFormState, ShareFormState } from "@/types";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";
import { ManagedInvestment, Share } from "@prisma/client";

export const useInvestmentSearch = () => {
  const { setDisplayedInvestments } = useContext(InvestmentDisplayContext);

  async function getShares({ asx, name }: ShareFormState) {
    setDisplayedInvestments((displayedInvestments) => ({
      ...displayedInvestments,
      loading: true,
    }));
    try {
      const response = await axios.get(
        `http://localhost:3000/api/investments/getshares?name=${name}&asx=${asx}`
      );
      console.log(response.data.data);
      return setDisplayedInvestments({
        investments: response.data.data as Share[],
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
    setDisplayedInvestments((displayedInvestments) => ({
      ...displayedInvestments,
      loading: true,
    }));

    try {
      const response = await axios.get(
        `http://localhost:3000/api/investments/getmanagedinvestments?name=${name}&nab=${nabOwned}&category=${category}`
      );
      console.log(
        response.data.data,
        `http://localhost:3000/api/investments/getmanagedinvestments?name=${name}&nab=${nabOwned}&category=${category}`
      );
      return setDisplayedInvestments((displayedInvestments) => ({
        investments: response.data.data as ManagedInvestment[],
        loading: false,
        error: null,
      }));
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
