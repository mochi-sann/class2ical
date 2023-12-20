import { assert, expect, test } from "vitest";

import ConvertTimeToMinAndHours from "../ConvertTimeToMinAndHours";

test("convert-time-to-min-and-hours 12:34", () => {
  expect(ConvertTimeToMinAndHours({ time: "12:34" })).toStrictEqual({
    hour: 12,
    minute: 34,
  });
});

test("convert-time-to-min-and-hours 02:34", () => {
  expect(ConvertTimeToMinAndHours({ time: "02:34" })).toStrictEqual({
    hour: 2,
    minute: 34,
  });
});

test("convert-time-to-min-and-hours 02:04", () => {
  expect(ConvertTimeToMinAndHours({ time: "02:04" })).toStrictEqual({
    hour: 2,
    minute: 4,
  });
});
