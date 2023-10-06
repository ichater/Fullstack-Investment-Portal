type Base = {
  id: string;
  name: string;
  category: string;
};

type GenericInvestmentProps<T> = {
  investment: T;
};

// At this point this isn't being used because its a lot of added complexity
// for what is 2 simple components, this was done as an exercise in experimenting
// with generic components.
export function investmentRowParser<T extends Base>({
  investment,
}: GenericInvestmentProps<T>): any {
  const tempArr: string[][] = [];
  let returnArr: string[] = [];

  for (let [key, val] of Object.entries(investment)) {
    if (key !== "id") {
      tempArr.push([key, val]);
    }
  }

  function filterVals(
    arr: string[][],
    valOne: string,
    valTwo: string = ""
  ): string | null {
    const element = arr.filter((i) => i[0] === valOne || i[0] === valTwo);

    return element[0] && element[0][1].toString();
  }

  const rowOne = filterVals(tempArr, "apir", "asxCode");
  const rowTwo = filterVals(tempArr, "name");
  const rowThree = filterVals(tempArr, "nabOwned");
  const rowFour = filterVals(tempArr, "mer");
  const finalRow = filterVals(tempArr, "category");

  rowOne && returnArr.push(rowOne);
  rowTwo && returnArr.push(rowTwo);
  rowThree && returnArr.push(rowThree);
  rowFour && returnArr.push(rowFour);
  finalRow && returnArr.push(finalRow);

  return returnArr;
}
