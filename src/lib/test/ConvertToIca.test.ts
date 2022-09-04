import { assert, expect, test } from "vitest";

import { FormValue } from "src/components/ClassScheduleTable";

import { ConvertToIcal } from "../ConvertToIcal";

test("convert-day-of-week-to-number:Mon", () => {
  const FormValueTest: FormValue = {
    startDate: "2022-09-21",
    count: 8,
    Mon: [
      {
        summary: "テスト授業Mon",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Mon",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Mon",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Mon",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Mon",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Mon",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
    ],
    Tue: [
      {
        summary: "テスト授業Tue",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Tue",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Tue",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: null,
        description: null,
        url: "",
      },
      {
        summary: null,
        description: "",
        url: "",
      },
      {
        summary: "テスト授業Tue",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
    ],
    Wed: [
      {
        summary: "テスト授業Wed",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Wed",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "",
        description: "",
        url: "",
      },
      {
        summary: "テスト授業Wed",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Wed",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Wed",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
    ],
    Thu: [
      {
        summary: "",
        description: "",
        url: "",
      },
      {
        summary: "",
        description: "",
        url: "",
      },
      {
        summary: "テスト授業Thu",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Thu",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Thu",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Thu",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
    ],
    Fri: [
      {
        summary: "テスト授業Fri",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Fri",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Fri",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Fri",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Fri",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Fri",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
    ],
    Sat: [
      {
        summary: "テスト授業Sat",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Sat",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Sat",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Sat",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Sat",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
      {
        summary: "テスト授業Sat",
        description: "テスト授業の説明",
        url: "https://www.google.com/",
      },
    ],
  };
  expect(ConvertToIcal(FormValueTest)).toBe(1);
});
