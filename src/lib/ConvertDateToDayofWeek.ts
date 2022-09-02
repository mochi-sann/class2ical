import { dayjsWapper } from "./dayjs";

export type ConvertDateToDayofWeekArgsType = string;
export type ConvertDateToDayofWeekReturnType = number;
/*
 * 日付を入力したら曜日を返す
 * 返す曜日は数字
 * 例 月曜日 -> 0
 * 例 火曜日 -> 1
 *  日曜日 -> 6
 * **/
const ConvertDateToDayofWeek = (
  Args: ConvertDateToDayofWeekArgsType
): ConvertDateToDayofWeekReturnType => {
  return dayjsWapper(Args).day();
};

export default ConvertDateToDayofWeek;
