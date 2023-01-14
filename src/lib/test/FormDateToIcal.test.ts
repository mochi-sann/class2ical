import { ICalEventRepeatingFreq, ICalWeekday } from "ical-generator";
import { expect, test } from "vitest";

import FormDateToIcal, {
  FormDateToIcalArgsType,
  FormDateToIcalReturnType,
} from "../FormDateToIcal";
import { dayjsWapper } from "../dayjs";

test("Convert to Icaldeta 曜日と startDateが同じ", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-26",
    endDate: "2022-12-01",
    periodNumber: 0,
    dayOfweek: "Mon",
    summary: "授業の名前",
    location: "hello",
    description: "授業の説明とかを書くぞ",
    url: "https://google.com/",
    lessonTime: [
      { start: "08:40", end: "10:10" },
      { start: "10:20", end: "11:50" },
      { start: "12:40", end: "14:10" },
      { start: "14:20", end: "15:50" },
      { start: "16:00", end: "17:30" },
      { start: "17:40", end: "19:10" },
    ],
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-09-26 08:40:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-09-26 08:40:00+09:00").add(90, "minutes").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      until: dayjsWapper("2022-12-01")
        .tz("Asia/Tokyo")
        .hour(23)
        .minute(59)
        .toDate(),
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});

test("Convert to Icaldeta 曜日と startDateが違う", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-24",
    endDate: "2022-12-01",
    periodNumber: 0,
    dayOfweek: "Mon",
    location: "hello",
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    url: "https://google.com/",
    lessonTime: [
      { start: "08:40", end: "10:10" },
      { start: "10:20", end: "11:50" },
      { start: "12:40", end: "14:10" },
      { start: "14:20", end: "15:50" },
      { start: "16:00", end: "17:30" },
      { start: "17:40", end: "19:10" },
    ],
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-09-26 08:40:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-09-26 08:40:00+09:00").add(90, "minutes").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      until: dayjsWapper("2022-12-01")
        .tz("Asia/Tokyo")
        .hour(23)
        .minute(59)
        .toDate(),
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});
test("Convert to Icaldeta:3", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-05",
    endDate: "2022-12-01",
    periodNumber: 5,
    location: "hello",
    dayOfweek: "Fri",
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    url: "https://google.com/",
    lessonTime: [
      { start: "08:40", end: "10:10" },
      { start: "10:20", end: "11:50" },
      { start: "12:40", end: "14:10" },
      { start: "14:20", end: "15:50" },
      { start: "16:00", end: "17:30" },
      { start: "17:40", end: "19:10" },
    ],
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-09-09 17:40:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-09-09 17:40:00+09:00").add(90, "minutes").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      until: dayjsWapper("2022-12-01")
        .tz("Asia/Tokyo")
        .hour(23)
        .minute(59)
        .toDate(),
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});
test("Convert to Icaldeta:4", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-30",
    endDate: "2022-12-01",
    periodNumber: 5,
    dayOfweek: "Mon",
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    location: "hello",
    url: "https://google.com/",
    lessonTime: [
      { start: "08:40", end: "10:10" },
      { start: "10:20", end: "11:50" },
      { start: "12:40", end: "14:10" },
      { start: "14:20", end: "15:50" },
      { start: "16:00", end: "17:30" },
      { start: "17:40", end: "19:10" },
    ],
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-10-03 17:40:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-10-03 17:40:00+09:00").add(90, "minutes").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      until: dayjsWapper("2022-12-01")
        .tz("Asia/Tokyo")
        .hour(23)
        .minute(59)
        .toDate(),
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});
test("Convert to Icaldeta custom time : 1", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-30",
    endDate: "2022-12-01",
    periodNumber: 5,
    dayOfweek: "Mon",
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    location: "hello",
    url: "https://google.com/",
    lessonTime: [
      { start: "08:40", end: "10:10" },
      { start: "10:20", end: "11:50" },
      { start: "12:40", end: "14:10" },
      { start: "14:20", end: "15:50" },
      { start: "16:00", end: "17:30" },
      { start: "17:59", end: "19:13" },
    ],
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-10-03 17:59:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-10-03 19:13:00+09:00").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      until: dayjsWapper("2022-12-01")
        .tz("Asia/Tokyo")
        .hour(23)
        .minute(59)
        .toDate(),
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});
test("Convert to Icaldeta custom time : 2", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-30",
    endDate: "2022-12-01",
    periodNumber: 0,
    dayOfweek: "Mon",
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    location: "hello",
    url: "https://google.com/",
    lessonTime: [
      { start: "08:40", end: "10:13" },
      { start: "10:20", end: "11:50" },
      { start: "12:40", end: "14:10" },
      { start: "14:20", end: "15:50" },
      { start: "16:00", end: "17:30" },
      { start: "17:59", end: "19:10" },
    ],
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-10-03 08:40:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-10-03 10:13:00+09:00").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      until: dayjsWapper("2022-12-01")
        .tz("Asia/Tokyo")
        .hour(23)
        .minute(59)
        .toDate(),
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});
test("Convert to Icaldeta custom time : 3", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-30",
    endDate: "2022-12-01",
    periodNumber: 5,
    dayOfweek: "Mon",
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    location: "hello",
    url: "https://google.com/",
    lessonTime: [
      { start: "08:40", end: "10:10" },
      { start: "10:20", end: "11:50" },
      { start: "12:40", end: "14:10" },
      { start: "14:20", end: "15:50" },
      { start: "16:00", end: "17:30" },
      { start: "21:59", end: "19:13" },
    ],
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-10-03 21:59:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-10-03 19:13:00+09:00").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      until: dayjsWapper("2022-12-01")
        .tz("Asia/Tokyo")
        .hour(23)
        .minute(59)
        .toDate(),
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});
