import { useContext } from "react";
import axios from "axios";
import {
  DisplayFund,
  DisplayShare,
  ManagedInvestmentFormState,
  ShareFormState,
} from "@/types";
import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";

export const useInvestmentSearch = () => {
  const { setDisplayedInvestments, investmentDisplayState } = useContext(
    InvestmentResultContext
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

      return setDisplayedInvestments({
        investments: response.data.data as DisplayShare[],
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

      return setDisplayedInvestments({
        investments: response.data.data as DisplayFund[],
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
