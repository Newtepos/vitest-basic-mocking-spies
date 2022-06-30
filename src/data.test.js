import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provied", () => {
    const logger = vi.fn();
    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
