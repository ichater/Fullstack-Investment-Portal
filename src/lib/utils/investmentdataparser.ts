import { PageState } from "@/types";
import { DisplayFund, DisplayShare } from "@/types";

export function investmentsPageParser(
  investmentArray: DisplayShare[] | DisplayFund[],
  pageState: PageState
): DisplayShare[][] | DisplayFund[][] {
  let returnArr: DisplayShare[][] | DisplayFund[][] = [];
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
