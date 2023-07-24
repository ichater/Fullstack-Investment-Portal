import { ADVISERFEETYPE } from "@prisma/client";

export const adviserFeeParser = (
  feeType: ADVISERFEETYPE,
  feeAmount: string
): string => {
  if (feeType === ADVISERFEETYPE.PERCENTAGE && parseInt(feeAmount) > 5) {
    return "Invalid Fee";
  }
  return feeType === ADVISERFEETYPE.PERCENTAGE
    ? feeAmount + "% P/A"
    : "$" + feeAmount + " P/A";
};
