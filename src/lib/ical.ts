import { Dayjs, dayjs } from "./dayjs";
import ical, { ICalCalendar, ICalCalendarJSONData } from "ical-generator";

export const GetClaender = (): ICalCalendar => {
  const calendar = ical({ name: "授業の時間" });
  type classListType = {
    title: string;
    start: Dayjs;
    end: Dayjs;
    summary: string;
  };
  const classList = (): classListType[] => [
    {
      title: "1つ目",
      summary: "テストの授業1つ目です",
      start: dayjs().hour(10).weekday(1),
      end: dayjs().hour(10).weekday(1).add(1.5, "hour"),
    },
    {
      title: "2つ目",
      summary: "テストの授業1つ目です",
      start: dayjs().hour(13).weekday(4),
      end: dayjs().hour(13).weekday(4).add(1.5, "hour"),
    },
    {
      title: "2つ目",
      summary: "テストの授業1つ目です",
      start: dayjs().hour(16).weekday(6),
      end: dayjs().hour(16).weekday(6).add(1.5, "hour"),
    },
  ];
  classList().map((value) => {
    for (let i = 0; i < 6; i++) {
      calendar.createEvent({
        start: value.start.add(i, "week").toDate(),
        end: value.end.add(i, "week").toDate(),
        description: value.summary,
        summary: value.title,
      });
    }
  });

  return calendar;
};
