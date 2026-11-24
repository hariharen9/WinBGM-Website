import { describe, expect, it } from "vitest";

import { normalizePath, pageFromPath } from "@/lib/routes";

describe("site routing", () => {
  it("resolves known pages", () => {
    expect(normalizePath("/")).toBe("/");
    expect(normalizePath("/features")).toBe("/features");
    expect(normalizePath("/safety/")).toBe("/safety");
    expect(normalizePath("/download")).toBe("/download");
  });

  it("falls back to the home page for unknown paths", () => {
    expect(normalizePath("/nope")).toBe("/");
    expect(normalizePath("")).toBe("/");
  });

  it("maps paths to page ids", () => {
    expect(pageFromPath("/")).toBe("home");
    expect(pageFromPath("/features")).toBe("features");
    expect(pageFromPath("/safety")).toBe("safety");
    expect(pageFromPath("/download")).toBe("download");
  });
});
