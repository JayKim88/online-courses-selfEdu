import fs from "fs";
import path from "path";
import { beforeEach, expect, it, vi } from "vitest";
import { Window } from "happy-dom";
import { showError } from "./dom";

/**
 * @description ReferenceError: document is not defined
 * In this case, should set testing environment as jsdom or happy-dom for emulation.
 */

const htmlDocPath = path.join(process.cwd(), "index.html");
// To read html document content by making it string
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

/**
 * @description On the document of virtual window, render the html page.
 */
const window = new Window();
const document = window.document;
vi.stubGlobal("document", document); // document object as an global replacement.

// should reset the document for using new.
beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

it("should add an error paragraph to the id='errors' element", () => {
  showError("Test");

  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});

it("should not contain an error paragraph initially", () => {
  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).toBeNull();
});

it("should output the provided message in the error paragraph", () => {
  const testErrorMessage = "Test";

  showError(testErrorMessage);

  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph.textContent).toBe(testErrorMessage);
});
