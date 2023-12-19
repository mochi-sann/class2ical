import { FormValue } from "../components/ClassScheduleTable";
import { useClassTableIcalProps } from "../hooks/useClassTableIcal";
import FormDateToIcal from "./FormDateToIcal";
import { ShortDayOfWeekList } from "./types";

export const ConvertToIcalMap = (
  FormData: FormValue,
  dayOfWeek: ShortDayOfWeekList
) => {
  return FormData[dayOfWeek]
    .map((value, key) => {
      if (value.summary.length > 0) {
        return FormDateToIcal({
          startDate: FormData.startDate,
          endDate: FormData.endDate,
          dayOfweek: dayOfWeek,
          periodNumber: key,
          summary: value.summary,
          description: value.description,
          url: value.url,
          lessonTime: FormData.LessonTime,
          location: value.location,
        });
      }
      return null;
    })
    .filter((list) => list !== null);
};

export const ConvertToIcal = (
  value: FormValue
): useClassTableIcalProps["init"] => {
  // 始まる日の曜日を取得できる
  const ReturnValue: useClassTableIcalProps["init"] = [
    ConvertToIcalMap(value, "Mon"),
    ConvertToIcalMap(value, "Thu"),
    ConvertToIcalMap(value, "Wed"),
    ConvertToIcalMap(value, "Tue"),
    ConvertToIcalMap(value, "Fri"),
    ConvertToIcalMap(value, "Sat"),
  ]
    .flat()
    .filter((list) => list !== null) as useClassTableIcalProps["init"];
  return ReturnValue;
};
