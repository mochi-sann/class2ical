import { assert, expect, test } from "vitest";

import AddClassStartTime from "../AddClassStartTime";

test("add-class-start-time 0", () => {
  expect(AddClassStartTime({ periodNumber: 0 })).toBe(8 * 60 + 40);
});
test("add-class-start-time 1", () => {
  expect(AddClassStartTime({ periodNumber: 1 })).toBe(10 * 60 + 20);
});
test("add-class-start-time 2", () => {
  expect(AddClassStartTime({ periodNumber: 2 })).toBe(12 * 60 + 40);
});
test("add-class-start-time 3", () => {
  expect(AddClassStartTime({ periodNumber: 3 })).toBe(14 * 60 + 20);
});
test("add-class-start-time 4", () => {
  expect(AddClassStartTime({ periodNumber: 4 })).toBe(16 * 60 + 0);
});
test("add-class-start-time 5", () => {
  expect(AddClassStartTime({ periodNumber: 5 })).toBe(17 * 60 + 40);
});
