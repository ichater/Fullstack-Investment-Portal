import { AdviserAuthContext } from "@/context/AdviserAuthContext";
import { InvestmentResultContext } from "@/context/InvestmentDisplayContext";
import { InvestmentSearchContext } from "@/context/InvestmentFormContext";
import { useContext } from "react";

export const useInvestmentDisplayContext = () =>
  useContext(InvestmentResultContext);

export const useInvestmentFormContext = () =>
  useContext(InvestmentSearchContext);

export const useAdviserAuthContext = () => useContext(AdviserAuthContext);
