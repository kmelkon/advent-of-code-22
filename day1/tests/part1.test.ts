import getLargestCaloriesOfAllElves, { input } from "../part1";

describe("testing day1 part1", () => {
  it("should return 71934", () => {
    const result = getLargestCaloriesOfAllElves(input);
    expect(result).toBe(71934);
  });

  it("should return", () => {
    const t = () => {
      getLargestCaloriesOfAllElves("string no numbers here");
    };
    expect(t).toThrow(Error("allCalories is not a string of numbers"));
  });

  it("should return same number if input has only a single number", () => {
    const result = getLargestCaloriesOfAllElves("1");
    expect(result).toBe(1);
  });
});
