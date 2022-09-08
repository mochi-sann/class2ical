import { assert, expect, test } from "vitest";

import ConvertDayOfWeekToJp from "../ConvertDayOfWeekToJp";

test("convert-day-of-week-to-jp", () => {
  expect(ConvertDayOfWeekToJp("Mon")).toBe("月");
});
test("convert-day-of-week-to-jp", () => {
  expect(ConvertDayOfWeekToJp("Sat")).toBe("土");
});
