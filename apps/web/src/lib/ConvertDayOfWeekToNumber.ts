import { ShortDayOfWeekList } from "./types";

export type ConvertDayOfWeekToNumberArgsType = ShortDayOfWeekList;
export type ConvertDayOfWeekToNumberReturnType = number;
/*
 * 曜日を入力するとそれに対応した曜日を返す
 */
const ConvertDayOfWeekToNumber = (
  Args: ConvertDayOfWeekToNumberArgsType
): number => {
  switch (Args) {
    case "Mon":
      return 1;
    case "Tue":
      return 2;
    case "Wed":
      return 3;
    case "Thu":
      return 4;
    case "Fri":
      return 5;
    case "Sat":
      return 6;
    default:
      return 0;
  }
};

export default ConvertDayOfWeekToNumber;
