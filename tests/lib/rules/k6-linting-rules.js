/**
 * @fileoverview Ruleset to support the linting of k6 tests
 * @author Stuart Thomas
 */
"use strict";

const assert = require("assert");
const ruleset = require("../../../lib/rules/k6-linting-rules");

describe("k6-linting-rules", () => {
  it("exports metadata and k6 rule overrides", () => {
    assert.ok(ruleset.meta);
    assert.strictEqual(
      ruleset.meta.docs.description,
      "Ruleset to support the linting of k6 tests",
    );

    assert.ok(ruleset.rules);
    assert.ok(ruleset.rules.k6);
  });

  it("defines expected k6 eslint settings", () => {
    const k6 = ruleset.rules.k6;

    assert.strictEqual(k6["import/no-unresolved"], 0);
    assert.strictEqual(k6["no-restricted-globals"], 0);
    assert.strictEqual(k6["import/extensions"], 0);
    assert.strictEqual(k6["no-prototype-builtins"], 0);
    assert.strictEqual(k6.semi, 1);
    assert.strictEqual(k6.quotes, 2);
  });
});
