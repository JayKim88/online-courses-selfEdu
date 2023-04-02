import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

/**
 * @description Problem. This test(without mock) interacts with upper system such as hard drive, database outside of program and code.
 * Means that there could be side effects. e.g. important files or data could be deleted or edited accidentally.
 */

/**
 * @description cannot use spy in this case because of unusable modules we don't own.
 * In this case, it doesn't receive writeFile as an argument.
 * Mock works with built in or third-party module and own modules, own files.
 * This starts Vitest's or Jest's auto-mocking algorithm finding module by name or path and replace all the functions with empty spy functions.
 * And importantly, vi.mock is hoisted automatically to the top for mocking away before importing.
 */

/**
 * @description For multiple test, can set global mock setting(__mocks__).
 */
vi.mock("fs");
/**
 * @description By setting the second argument, able to return wanted outcome
 */
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        /**
         *  @description last argument is filename. In this case, testFileName.
         *  const storagePath = path.join(process.cwd(), "data", filename);
         * */
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);
  /**
   * @description below code makes error. TypeError: Cannot read properties of undefined (reading 'then')
   * Because spy doesn't have methods. In this case, use fs.writeFile that is run in writeData function.
   */
  // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();

  // expect(fs.writeFile).toBeCalled();
  // below code works with vi.mock("path",...)
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);
  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
