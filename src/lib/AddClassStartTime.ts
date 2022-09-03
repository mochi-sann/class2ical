import { Dayjs } from "dayjs";

export type AddClassStartTimeArgsType = {
  periodNumber: 0 | 1 | 2 | 3 | 4 | 5;
};
export type AddClassStartTimeReturnType = number;

const AddClassStartTime = (
  Args: AddClassStartTimeArgsType
): AddClassStartTimeReturnType => {
  const List = [
    8 * 60 + 40,
    10 * 60 + 20,
    12 * 60 + 40,
    14 * 60 + 20,
    16 * 60 + 0,
    17 * 60 + 40,
  ];
  return List[Args.periodNumber];
};

export default AddClassStartTime;
