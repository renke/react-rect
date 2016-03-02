/* global describe, it */
import {expect} from "chai";

import reactRect from "../src";

describe("reactRect", () => {
  it("should return foo", () => {
    expect(reactRect()).to.equal("foo");
  });
});
