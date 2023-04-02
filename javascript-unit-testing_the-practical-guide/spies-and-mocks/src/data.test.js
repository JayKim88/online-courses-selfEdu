import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData", () => {
  it("should execute logFn if provided", () => {
    /**
     * @description fn creates an empty function that keeps track of any function executions of that function.
     * Means calls to the function. It also keeps track of arguments that are provided with those calls.
     */
    const logger = vi.fn();
    // For a specific test, able to make a mock as below
    logger.mockImplementationOnce(() => {});

    generateReportData(logger);

    expect(logger).toBeCalled();
    // expect(logger).toBeCalledTimes(2);
  });
});
