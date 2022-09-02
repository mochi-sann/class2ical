import { FormValue } from "src/components/ClassScheduleTable";
import { useClassTableIcalProps } from "src/hooks/useClassTableIcal";
import ConvertDateToDayofWeek from "./ConvertDateToDayofWeek";
import { dayjsWapper } from "./dayjs";

export const ConvertToIcal = (
  value: FormValue
): useClassTableIcalProps["init"] => {
  // 始まる日の曜日を取得できる
  const StartDayOfWeek: number = ConvertDateToDayofWeek(value.startDate);
  const EndDayOfWeek: number = ConvertDateToDayofWeek(value.endDate);
  return StartDayOfWeek;
};
