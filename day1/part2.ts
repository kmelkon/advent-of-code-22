import { convertStringToArrayOfArrays, sumArray } from "./utils";

const getLargestThreeCaloriesOfAllElves = (allCalories: string) => {
  const separatedElvesCalories: string[][] =
    convertStringToArrayOfArrays(allCalories);

  const ElvesCaloriesSummed = separatedElvesCalories.map((x) => sumArray(x));
  const sortedElvesCaloriesSummed = ElvesCaloriesSummed.sort((a, b) => b - a);
  return sortedElvesCaloriesSummed.slice(0, 3);
};

export default getLargestThreeCaloriesOfAllElves;
