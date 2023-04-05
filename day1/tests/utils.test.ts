import { input } from "../input";
import { convertStringToArrayOfArrays, sumArray } from "../utils";

describe("testing utils - converting string to array of arrays based on \n", () => {
  it("should convert string to array of arrays", () => {
    const result = convertStringToArrayOfArrays(`4035
10596
17891
5278

11293
8478
10874

9707
15243
13494

18006
15104
9091

1177
5310
4579
2550
3865`);

    expect(result).toEqual([
      ["4035", "10596", "17891", "5278"],
      ["11293", "8478", "10874"],
      ["9707", "15243", "13494"],
      ["18006", "15104", "9091"],
      ["1177", "5310", "4579", "2550", "3865"],
    ]);
  });
});

describe("testing utils - summing array of numbers", () => {
  it("should sum array of numbers", () => {
    const result = sumArray(["1", "2", "3"]);
    expect(result).toBe(6);
  });
  it("should sum array of numbers", () => {
    const t = () => {
      sumArray(["1", "asdk", "3"]);
    };
    expect(t).toThrow(Error("array contains non-numbers"));
  });
});
