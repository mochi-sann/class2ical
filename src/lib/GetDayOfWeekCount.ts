import { ShortDayOfWeekList } from "./types";

export type GetDayOfWeekCountArgsType = {
  start: Date;
  end: Date;
  dayOfWeek: ShortDayOfWeekList;
};
export type GetDayOfWeekCountReturnType = {};

const GetDayOfWeekCount = (
  Args: GetDayOfWeekCountArgsType
): GetDayOfWeekCountReturnType => {
  return;
};

export default GetDayOfWeekCount;
