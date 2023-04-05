export const convertStringToArrayOfArrays = (
  allCalories: string
): string[][] => {
  const noWhiteSpaceCalories = allCalories.replace(/\s/g, "");
  if (isNaN(Number(noWhiteSpaceCalories))) {
    throw new Error("allCalories is not a string of numbers");
  }

  const elvesCalories: string[] = allCalories.split("\n\n");
  const separatedElvesCalories: string[][] = elvesCalories.map((x, index) =>
    elvesCalories[index].split("\n")
  );

  return separatedElvesCalories;
};

export const sumArray = (array: string[]): number =>
  array.reduce((partialSum, a) => partialSum + Number(a), 0);
