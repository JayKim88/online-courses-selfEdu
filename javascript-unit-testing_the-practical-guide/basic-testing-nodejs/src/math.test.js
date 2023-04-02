import { it, expect } from "vitest";
import { add } from "./math.js";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("it should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0);

  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});
/**
 * @description testing for errors.
 *
 */
it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => add();
  // expect(resultFn).not.toThrow() not can be added
  expect(resultFn).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => add(num1, num2);
  // error occurs in for-loop
  // TypeError: numbers is not iterable. narrow down error checking
  expect(resultFn).toThrow(/is not iterable/);
});
