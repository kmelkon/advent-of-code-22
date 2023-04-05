import { convertStringToArrayOfArrays, sumArray } from "./utils";

const getLargestThreeCaloriesOfAllElves = (allCalories: string) => {
  const separatedElvesCalories: string[][] =
    convertStringToArrayOfArrays(allCalories);

  const topThreeElves = separatedElvesCalories
    .map((x) => sumArray(x))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .map((x) => x.toString());

  const sumOfTopThreeElves = sumArray(topThreeElves);
  return sumOfTopThreeElves;
};

export default getLargestThreeCaloriesOfAllElves;
