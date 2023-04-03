import { expect, it, vi } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponseData = {
  testKey: "testData",
};
// await fetch('https://dummy-site.dev/posts', { method: 'POST',...
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    /**
     * @description test JSON.stringify(required data conversion) works or not
     */
    if (typeof options.body !== "string") return reject("Not a string.");

    const testResponse = {
      //if (!response.ok) {
      ok: true,
      //const responseData = await response.json();
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

/**
 * @description fetch is a globally available function which is not imported.
 * Thus, cannot use vi.mock to replace a module in this case.
 * SubGlobal method allows us to replace globally available objects and functions with implementations
 * Production codes are not effected!
 */
vi.stubGlobal("fetch", testFetch);

it("should return any available response data", () => {
  const testData = { key: "test" };
  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it("should convert the provided data to JSON before sending the request", async () => {
  const testData = { key: "test" };

  let errorMessage;

  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe("Not a string.");
});

it("should throw and httpError in case of non-ok responses", () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      };
      resolve(testResponse);
    });
  });

  const testData = { key: "test" };

  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
