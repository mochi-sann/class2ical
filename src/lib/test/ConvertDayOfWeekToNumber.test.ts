import { assert, expect, test } from "vitest";

import ConvertDayOfWeekToNumber from "../ConvertDayOfWeekToNumber";

test("convert-day-of-week-to-number:Mon", () => {
  expect(ConvertDayOfWeekToNumber("Mon")).toBe(1);
});
test("convert-day-of-week-to-number:Thu", () => {
  expect(ConvertDayOfWeekToNumber("Thu")).toBe(4);
});
test("convert-day-of-week-to-number:Fri", () => {
  expect(ConvertDayOfWeekToNumber("Fri")).toBe(5);
});
