export const arrayFromNumber = (num: number): number[] =>
  Array.from(Array(num), (_, index) => index + 1);
