import { input } from "../input";
import getLargestThreeCaloriesOfAllElves from "../part2";

describe("testing day1 part1", () => {
  it("should return top three elves with largest calories", () => {
    const result = getLargestThreeCaloriesOfAllElves(input);
    expect(result).toBe(211447);
  });

  it("should throw error if input has no numbers", () => {
    const t = () => {
      getLargestThreeCaloriesOfAllElves("string no numbers here");
    };
    expect(t).toThrow(Error("allCalories is not a string of numbers"));
  });
});
