import dayjs from "dayjs";
import { ICalEventRepeatingFreq } from "ical-generator";
import { assert, expect, test } from "vitest";

import { FormValue } from "src/components/ClassScheduleTable";

import { ConvertToIcal } from "../ConvertToIcal";
import { dayjsWapper } from "../dayjs";

test("convert-day-of-week-to-number:Mon", () => {
  const FormValueTest: FormValue = {
    startDate: "2022-09-04",
    endDate: "2022-12-04",
    Mon: [
      {
        summary: "Test",
        description: "test",
        url: "https://example.com",
        location: "hello world",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
    ],
    Tue: [
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
    ],
    Wed: [
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
    ],
    Thu: [
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
    ],
    Fri: [
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
    ],
    Sat: [
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
      {
        summary: "",
        description: "",
        url: "",
        location: "",
      },
    ],
  };

  const ReturnValue = [
    {
      url: "https://example.com",
      summary: "Test",
      description: "test",
      start: dayjsWapper.tz("2022-09-05T08:40:00.000", "Asia/Tokyo").toDate(),
      end: dayjsWapper
        .tz("2022-09-05T08:40:00.000", "Asia/Tokyo")
        .add(90, "minutes")
        .toDate(),
      timezone: dayjsWapper.tz.guess(),
      location: "hello world",
      repeating: {
        freq: ICalEventRepeatingFreq["WEEKLY"],
        until: dayjsWapper("2022-12-04")
          .tz("Asia/Tokyo")
          .hour(23)
          .minute(59)
          .toDate(),
      },
    },
  ];

  expect(ConvertToIcal(FormValueTest)).toStrictEqual(ReturnValue);
});
