import { expect } from "chai";
import { example } from "../src";

describe("Test", () => {
  it("should return 'test'", () => {
    expect(example()).to.eq("test");
  });
});
