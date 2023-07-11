import { PageState } from "@/types";
import { ManagedInvestment, Share } from "@prisma/client";

export function investmentsPageParser({
  arr,
  num,
}: {
  arr: Share[] | ManagedInvestment[];
  num: PageState;
}): Share[][] | ManagedInvestment[][] {
  let returnArr: Share[][] | ManagedInvestment[][] = [];
  if (num > arr.length) {
    returnArr[0] = arr;
    return returnArr;
  }

  const pages = arr.length / num;

  for (let i = 0; i < pages; i++) {
    returnArr[i] = [];
    for (let j = 0; j < num; j++) {
      returnArr[i][j] = arr[i * num + j];
    }
  }

  return returnArr;
}
