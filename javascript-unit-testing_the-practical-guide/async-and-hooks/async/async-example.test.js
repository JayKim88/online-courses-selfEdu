import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

// testing function having callback
it("should generate a token value", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    /**
     * @description Vitest and Jest will pick up errors and consider the test to have failed and show the reason why it failed.
     * But if using done, errors won't be picked up by test runner.
     * This shows Error: Test timed out in 5000ms.
     * Thus, necessary to use try-catch.
     */
    try {
      expect(token).toBeDefined();
      //   expect(token).toBe(2);
      /**
       * @description Test will not wait for any inner callback functions to finish.
       * Should add done after the end of testing code completed.
       *  Then, test(Vitest and Jest) will wait until done is called.
       *  And then, it will run expect codes.
       */
      done();
    } catch (err) {
      done(err);
    }
  });
});
// testing function using promise
it("should generate a token value", () => {
  const testUserEmail = "test@test.com";

  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it("should generate a token value", async () => {
  const testUserEmail = "test@test.com";

  const token = await generateTokenPromise(testUserEmail);

  expect(token).toBeDefined();
  //   expect(token).toBe(2);
});
