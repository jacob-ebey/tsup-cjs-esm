import * as assert from "node:assert/strict";
import { test } from "node:test";

import { sayHello } from "./index.js";

test("sayHello", () => {
  assert.equal(sayHello("TypeScript"), "Hello, TypeScript!");
});
