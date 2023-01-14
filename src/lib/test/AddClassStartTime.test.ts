import { assert, expect, test } from "vitest";

import AddClassStartTime from "../AddClassStartTime";
import ConvertTimeToMinAndHours from "../ConvertTimeToMinAndHours";

test("add-class-start-time 0", () => {
  const LessonTime = [
    { start: "08:40", end: "10:10" },
    { start: "10:20", end: "11:50" },
    { start: "12:40", end: "14:10" },
    { start: "14:20", end: "15:50" },
    { start: "16:00", end: "17:30" },
    { start: "17:40", end: "19:10" },
  ];
  const LessonStartTimes = LessonTime.map((value) => {
    return ConvertTimeToMinAndHours({ time: value.start });
  });
  expect(
    AddClassStartTime({ periodNumber: 0, lessonTime: LessonStartTimes })
  ).toBe(8 * 60 + 40);
});
test("add-class-start-time 1", () => {
  const LessonTime = [
    { start: "08:40", end: "10:10" },
    { start: "10:20", end: "11:50" },
    { start: "12:40", end: "14:10" },
    { start: "14:20", end: "15:50" },
    { start: "16:00", end: "17:30" },
    { start: "17:40", end: "19:10" },
  ];
  const LessonStartTimes = LessonTime.map((value) => {
    return ConvertTimeToMinAndHours({ time: value.start });
  });
  expect(
    AddClassStartTime({ periodNumber: 1, lessonTime: LessonStartTimes })
  ).toBe(10 * 60 + 20);
});
test("add-class-start-time 2", () => {
  const LessonTime = [
    { start: "08:40", end: "10:10" },
    { start: "10:20", end: "11:50" },
    { start: "12:40", end: "14:10" },
    { start: "14:20", end: "15:50" },
    { start: "16:00", end: "17:30" },
    { start: "17:40", end: "19:10" },
  ];
  const LessonStartTimes = LessonTime.map((value) => {
    return ConvertTimeToMinAndHours({ time: value.start });
  });
  expect(
    AddClassStartTime({ periodNumber: 2, lessonTime: LessonStartTimes })
  ).toBe(12 * 60 + 40);
});
test("add-class-start-time 3", () => {
  const LessonTime = [
    { start: "08:40", end: "10:10" },
    { start: "10:20", end: "11:50" },
    { start: "12:40", end: "14:10" },
    { start: "14:20", end: "15:50" },
    { start: "16:00", end: "17:30" },
    { start: "17:40", end: "19:10" },
  ];
  const LessonStartTimes = LessonTime.map((value) => {
    return ConvertTimeToMinAndHours({ time: value.start });
  });
  expect(
    AddClassStartTime({ periodNumber: 3, lessonTime: LessonStartTimes })
  ).toBe(14 * 60 + 20);
});
test("add-class-start-time 4", () => {
  const LessonTime = [
    { start: "08:40", end: "10:10" },
    { start: "10:20", end: "11:50" },
    { start: "12:40", end: "14:10" },
    { start: "14:20", end: "15:50" },
    { start: "16:00", end: "17:30" },
    { start: "17:40", end: "19:10" },
  ];
  const LessonStartTimes = LessonTime.map((value) => {
    return ConvertTimeToMinAndHours({ time: value.start });
  });
  expect(
    AddClassStartTime({ periodNumber: 4, lessonTime: LessonStartTimes })
  ).toBe(16 * 60 + 0);
});
test("add-class-start-time 5", () => {
  const LessonTime = [
    { start: "08:40", end: "10:10" },
    { start: "10:20", end: "11:50" },
    { start: "12:40", end: "14:10" },
    { start: "14:20", end: "15:50" },
    { start: "16:00", end: "17:30" },
    { start: "17:40", end: "19:10" },
  ];
  const LessonStartTimes = LessonTime.map((value) => {
    return ConvertTimeToMinAndHours({ time: value.start });
  });
  expect(
    AddClassStartTime({ periodNumber: 5, lessonTime: LessonStartTimes })
  ).toBe(17 * 60 + 40);
});
test("add-class-start-time custom time 1 ", () => {
  const LessonTime = [
    { start: "10:21", end: "10:10" },
    { start: "10:20", end: "11:50" },
    { start: "12:40", end: "14:10" },
    { start: "14:20", end: "15:50" },
    { start: "16:00", end: "17:30" },
    { start: "17:40", end: "19:10" },
  ];
  const LessonStartTimes = LessonTime.map((value) => {
    return ConvertTimeToMinAndHours({ time: value.start });
  });
  expect(
    AddClassStartTime({ periodNumber: 0, lessonTime: LessonStartTimes })
  ).toBe(10 * 60 + 21);
});
test("add-class-start-time custom time 2 ", () => {
  const LessonTime = [
    { start: "10:21", end: "10:10" },
    { start: "10:20", end: "11:50" },
    { start: "12:40", end: "14:10" },
    { start: "04:02", end: "15:50" },
    { start: "16:00", end: "17:30" },
    { start: "17:40", end: "19:10" },
  ];
  const LessonStartTimes = LessonTime.map((value) => {
    return ConvertTimeToMinAndHours({ time: value.start });
  });
  expect(
    AddClassStartTime({ periodNumber: 3, lessonTime: LessonStartTimes })
  ).toBe(4 * 60 + 2);
});
