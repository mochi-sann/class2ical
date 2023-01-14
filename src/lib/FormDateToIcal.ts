import { ICalEventRepeatingFreq } from "ical-generator";

import { AddLessonProps } from "src/components/AddLesson";
import { FormValue } from "src/components/ClassScheduleTable";
import { useClassTableIcalProps } from "src/hooks/useClassTableIcal";

import AddClassStartTime from "./AddClassStartTime";
import ConvertDayOfWeekToNumber from "./ConvertDayOfWeekToNumber";
import ConvertTimeToMinAndHours from "./ConvertTimeToMinAndHours";
import GetNextDayOfWeek from "./GetNextDayOfWeek";
import { dayjsWapper } from "./dayjs";

export type FormDateToIcalArgsType = FormValue["Mon"][0] & {
  startDate: string;
  endDate: string;
  periodNumber: number; //1限なら0 2限なら 1が入る
  dayOfweek: AddLessonProps["dayOfweek"];
  lessonTime: FormValue["LessonTime"];
};
export type FormDateToIcalReturnType = useClassTableIcalProps["init"][0];

const FormDateToIcal = (
  args: FormDateToIcalArgsType
): FormDateToIcalReturnType => {
  const StartClassTime = dayjsWapper(args.startDate + "T00:00:00")
    .tz(dayjsWapper.tz.guess(), true)
    .add(
      AddClassStartTime({
        periodNumber: args.periodNumber,
        lessonTime: args.lessonTime.map((value) => {
          return ConvertTimeToMinAndHours({ time: value.start });
        }),
      }),
      "minutes"
    );
  const AddClasssStartMin = AddClassStartTime({
    periodNumber: args.periodNumber,
    lessonTime: args.lessonTime.map((value) => {
      return ConvertTimeToMinAndHours({ time: value.start });
    }),
  });
  const AddClasssEndMin = AddClassStartTime({
    periodNumber: args.periodNumber,
    lessonTime: args.lessonTime.map((value) => {
      return ConvertTimeToMinAndHours({ time: value.end });
    }),
  });

  const DayOfWeek = ConvertDayOfWeekToNumber(args.dayOfweek);
  const StartClassTimeDate = GetNextDayOfWeek({
    date: args.startDate,
    dayOfWeek: DayOfWeek,
    includeToday: true,
  });
  const StartTime = dayjsWapper(StartClassTimeDate).add(
    AddClasssStartMin,
    "minutes"
  );
  const EndTime = dayjsWapper(StartClassTimeDate).add(
    AddClasssEndMin,
    "minutes"
  );
  const EndDate = dayjsWapper(args.endDate)
    .tz("Asia/Tokyo")
    .hour(23)
    .minute(59)
    .toDate();

  const ReturnValue: FormDateToIcalReturnType = {
    url: args.url,
    summary: args.summary,
    description: args.description,
    start: StartTime.toDate(),
    end: EndTime.toDate(),
    timezone: dayjsWapper.tz.guess(),
    location: args.location,
    repeating: {
      freq: ICalEventRepeatingFreq["WEEKLY"],
      until: EndDate,
    },
  };

  return ReturnValue;
};

export default FormDateToIcal;
