import dayjs, { Dayjs } from "dayjs";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);
const dayjsWapper = dayjs;
export { dayjsWapper, Dayjs };
