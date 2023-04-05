export const convertStringToArrayOfArrays = (
  allCalories: string
): string[][] => {
  const noWhiteSpaceCalories = allCalories.replace(/\s/g, "");
  if (isNaN(Number(noWhiteSpaceCalories))) {
    throw new Error("allCalories is not a string of numbers");
  }

  const separatedElvesCalories: string[][] = allCalories
    .split("\n\n")
    .map((x) => x.split("\n"));
  return separatedElvesCalories;
};

export const sumArray = (array: string[]): number => {
  return array.reduce((partialSum, a) => {
    const numberified = Number(a);
    if (isNaN(numberified)) throw new Error("array contains non-numbers");
    return partialSum + numberified;
  }, 0);
};
