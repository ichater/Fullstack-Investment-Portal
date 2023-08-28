import { TieredFee } from "@/types";
import { dollarDecimal } from "./dollarDecimal";

export function accountFeeParser(value: number): TieredFee {
  return {
    tierOne: tierOne(value),
    tierTwo: value > 200000 ? tierTwo(value) : 0,
    tierThree:
      value < 500000 ? 0 : tierThree(value) > 1150 ? 1150 : tierThree(value),
    total: feeTotalCapped(value),
  };
}

const tierOne = (value: number): number => {
  const fee = value * 0.004;
  if (fee <= 0) {
    return 0;
  } else if (fee < 375) {
    return 375;
  } else if (fee > 375 && fee < 800) {
    return dollarDecimal(fee);
  } else {
    return 800;
  }
};

const tierTwo = (value: number) => {
  const tierTwoUncapped =
    (value - 200000) * 0.0015 <= 0 ? 0 : (value - 200000) * 0.0015;
  const isTirerTwo = tierTwoUncapped > 450 ? 450 : tierTwoUncapped;
  return value > 200000 ? dollarDecimal(isTirerTwo) : 0;
};

const tierThree = (value: number) =>
  (value - 500000) * 0.0003 <= 0 ? 0 : dollarDecimal((value - 500000) * 0.0003);

const feeTotalUnCapped = (value: number) =>
  tierOne(value) + tierTwo(value) + tierThree(value);

const feeTotalCapped = (value: number) =>
  feeTotalUnCapped(value) < 2400
    ? dollarDecimal(feeTotalUnCapped(value))
    : 2400;
