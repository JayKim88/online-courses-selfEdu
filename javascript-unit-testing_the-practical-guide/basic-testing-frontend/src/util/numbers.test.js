import { describe, it, expect } from "vitest";

import { transformToNumber, cleanNumbers } from "./numbers.js";

describe("transformToNumber()", () => {
  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it("should yield NaN for non-transformable values", () => {
    const input = "invalid";

    const result = transformToNumber(input);

    expect(result).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
    /**
     * @description Use "toEqual" method for deep-comparison on values not address of the object
     * In contrary, toBe method does shallow comparison
     *  */
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
