export type AddClassStartTimeArgsType = {
  periodNumber: number;
  lessonTime: { hour: number; minute: number }[];
};
export type AddClassStartTimeReturnType = number;

const AddClassStartTime = (
  Args: AddClassStartTimeArgsType
): AddClassStartTimeReturnType => {
  const List = [
    Args.lessonTime[0].hour * 60 + Args.lessonTime[0].minute,
    Args.lessonTime[1].hour * 60 + Args.lessonTime[1].minute,
    Args.lessonTime[2].hour * 60 + Args.lessonTime[2].minute,
    Args.lessonTime[3].hour * 60 + Args.lessonTime[3].minute,
    Args.lessonTime[4].hour * 60 + Args.lessonTime[4].minute,
    Args.lessonTime[5].hour * 60 + Args.lessonTime[5].minute,
  ];
  return List[Args.periodNumber];
};

export default AddClassStartTime;
