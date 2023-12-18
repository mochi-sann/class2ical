import { ShortDayOfWeekList } from "./types";

export type ConvertDayOfWeekToJpArgsType = ShortDayOfWeekList;
export type ConvertDayOfWeekToJpReturnType =
  | "月"
  | "火"
  | "水"
  | "木"
  | "金"
  | "土";

const ConvertDayOfWeekToJp = (
  Args: ConvertDayOfWeekToJpArgsType
): ConvertDayOfWeekToJpReturnType => {
  const List = {
    Mon: "月",
    Tue: "火",
    Wed: "水",
    Thu: "木",
    Fri: "金",
    Sat: "土",
  };
  return List[Args] as ConvertDayOfWeekToJpReturnType;
};

export default ConvertDayOfWeekToJp;
