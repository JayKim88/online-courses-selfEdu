import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user = new User(testEmail);

/**
 * @description when using identical variables for testing and needing reset the variables
 * hooks are required to use as below.
 * If there are suites using global variable, beforeAll or afterAll is useful.
 * or if there are each single tests using global variables, beforeEach or afterEach is required.
 */

beforeAll(() => {
  console.log("beforeAll()");
});

beforeEach(() => {
  // user = new User(testEmail);
  console.log("beforeEach()");
});

afterEach(() => {
  user = new User(testEmail);
  console.log("afterEach()");
});

afterAll(() => {
  // cleanup works here!
  console.log("afterAll()");
});

/**
 * @description there are 2 ways of executing tests in parallel for speed-up
 * 1. describe.concurrent(()=>{
 *   include tests
 *   })
 * 2. it.concurrent on each tests
 *
 * @note Even when not adding the .concurrent property / annotation,
 * tests that are stored in different files are executed concurrently (i.e., in parallel).
 * This is done by both Vitest and Jest
 */

it.concurrent("should update the email", () => {
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it("should still have an email property after clearing the email", () => {
  user.clearEmail();

  expect(user).toHaveProperty("email");
});
