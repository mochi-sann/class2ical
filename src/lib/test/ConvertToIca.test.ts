import dayjs from "dayjs";
import { ICalEventRepeatingFreq } from "ical-generator";
import { assert, expect, test } from "vitest";

import { FormValue } from "src/components/ClassScheduleTable";

import { ConvertToIcal } from "../ConvertToIcal";
import { dayjsWapper } from "../dayjs";

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

  const ReturnValue = [
    {
      url: "https://www.google.com/",
      summary: "テスト授業Mon",
      description: "テスト授業の説明",
      start: "2022-09-25T23:40:00.000Z",
      end: "2022-09-26T01:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Mon",
      description: "テスト授業の説明",
      start: "2022-09-26T01:20:00.000Z",
      end: "2022-09-26T02:50:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Mon",
      description: "テスト授業の説明",
      start: "2022-09-26T03:40:00.000Z",
      end: "2022-09-26T05:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Mon",
      description: "テスト授業の説明",
      start: "2022-09-26T05:20:00.000Z",
      end: "2022-09-26T06:50:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Mon",
      description: "テスト授業の説明",
      start: "2022-09-26T07:00:00.000Z",
      end: "2022-09-26T08:30:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Mon",
      description: "テスト授業の説明",
      start: "2022-09-26T08:40:00.000Z",
      end: "2022-09-26T10:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Thu",
      description: "テスト授業の説明",
      start: "2022-09-22T03:40:00.000Z",
      end: "2022-09-22T05:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Thu",
      description: "テスト授業の説明",
      start: "2022-09-22T05:20:00.000Z",
      end: "2022-09-22T06:50:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Thu",
      description: "テスト授業の説明",
      start: "2022-09-22T07:00:00.000Z",
      end: "2022-09-22T08:30:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Thu",
      description: "テスト授業の説明",
      start: "2022-09-22T08:40:00.000Z",
      end: "2022-09-22T10:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Wed",
      description: "テスト授業の説明",
      start: "2022-09-20T23:40:00.000Z",
      end: "2022-09-21T01:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Wed",
      description: "テスト授業の説明",
      start: "2022-09-21T01:20:00.000Z",
      end: "2022-09-21T02:50:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Wed",
      description: "テスト授業の説明",
      start: "2022-09-21T05:20:00.000Z",
      end: "2022-09-21T06:50:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Wed",
      description: "テスト授業の説明",
      start: "2022-09-21T07:00:00.000Z",
      end: "2022-09-21T08:30:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Wed",
      description: "テスト授業の説明",
      start: "2022-09-21T08:40:00.000Z",
      end: "2022-09-21T10:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Tue",
      description: "テスト授業の説明",
      start: "2022-09-26T23:40:00.000Z",
      end: "2022-09-27T01:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Tue",
      description: "テスト授業の説明",
      start: "2022-09-27T01:20:00.000Z",
      end: "2022-09-27T02:50:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Tue",
      description: "テスト授業の説明",
      start: "2022-09-27T03:40:00.000Z",
      end: "2022-09-27T05:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Tue",
      description: "テスト授業の説明",
      start: "2022-09-27T08:40:00.000Z",
      end: "2022-09-27T10:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Fri",
      description: "テスト授業の説明",
      start: "2022-09-22T23:40:00.000Z",
      end: "2022-09-23T01:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Fri",
      description: "テスト授業の説明",
      start: "2022-09-23T01:20:00.000Z",
      end: "2022-09-23T02:50:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Fri",
      description: "テスト授業の説明",
      start: "2022-09-23T03:40:00.000Z",
      end: "2022-09-23T05:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Fri",
      description: "テスト授業の説明",
      start: "2022-09-23T05:20:00.000Z",
      end: "2022-09-23T06:50:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Fri",
      description: "テスト授業の説明",
      start: "2022-09-23T07:00:00.000Z",
      end: "2022-09-23T08:30:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Fri",
      description: "テスト授業の説明",
      start: "2022-09-23T08:40:00.000Z",
      end: "2022-09-23T10:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Sat",
      description: "テスト授業の説明",
      start: "2022-09-23T23:40:00.000Z",
      end: "2022-09-24T01:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Sat",
      description: "テスト授業の説明",
      start: "2022-09-24T01:20:00.000Z",
      end: "2022-09-24T02:50:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Sat",
      description: "テスト授業の説明",
      start: "2022-09-24T03:40:00.000Z",
      end: "2022-09-24T05:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Sat",
      description: "テスト授業の説明",
      start: "2022-09-24T05:20:00.000Z",
      end: "2022-09-24T06:50:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Sat",
      description: "テスト授業の説明",
      start: "2022-09-24T07:00:00.000Z",
      end: "2022-09-24T08:30:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
    {
      url: "https://www.google.com/",
      summary: "テスト授業Sat",
      description: "テスト授業の説明",
      start: "2022-09-24T08:40:00.000Z",
      end: "2022-09-24T10:10:00.000Z",
      timezone: "Asia/Tokyo",
      repeating: {
        count: 8,
        freq: "WEEKLY",
      },
    },
  ];
  const NewReturnValue = ReturnValue.map((data) => ({
    url: data.url,
    summary: data.summary,
    description: data.description,
    start: dayjsWapper(data.start).toDate(),
    end: dayjsWapper(data.end).toDate(),
    timezone: data.timezone,
    repeating: {
      count: data.repeating.count,
      freq: data.repeating.freq,
    },
  }));
  console.log(JSON.stringify(ConvertToIcal(FormValueTest), null, 2));
  expect(JSON.stringify(ConvertToIcal(FormValueTest), null, 2)).toBe(
    JSON.stringify(NewReturnValue, null, 2)
  );
});
