import { PageState } from "@/types";
import { ManagedInvestment, Share } from "@prisma/client";

export function investmentsPageParser(
  investmentArray: Share[] | ManagedInvestment[],
  pageState: PageState
): Share[][] | ManagedInvestment[][] {
  let returnArr: Share[][] | ManagedInvestment[][] = [];
  if (pageState > investmentArray.length) {
    returnArr[0] = investmentArray;
    return returnArr;
  }

  const pages = investmentArray.length / pageState;

  for (let i = 0; i < pages; i++) {
    returnArr[i] = [];
    for (let j = 0; j < pageState; j++) {
      if (!investmentArray[i * pageState + j]) break;
      returnArr[i][j] = investmentArray[i * pageState + j];
    }
  }

  return returnArr;
}
