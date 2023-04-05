import { convertStringToArrayOfArrays, sumArray } from "./utils";

const getLargestCaloriesOfAllElves = (
  allCaloriesOfAllElves: string
): number => {
  const separatedElvesCalories: string[][] = convertStringToArrayOfArrays(
    allCaloriesOfAllElves
  );
  const ElvesCaloriesSummed = separatedElvesCalories.map((x) => sumArray(x));
  return Math.max(...ElvesCaloriesSummed);
};

export default getLargestCaloriesOfAllElves;
