export type ConvertTimeToMinAndHoursArgsType = {
  time: string;
};
export type ConvertTimeToMinAndHoursReturnType = {
  hour: number;
  minute: number;
};

/*
 * time に 12:34 って渡すと hour : 12 min : 34 って返す
 * */
const ConvertTimeToMinAndHours = (
  Args: ConvertTimeToMinAndHoursArgsType
): ConvertTimeToMinAndHoursReturnType => {
  const TimeSlite = Args.time.split(":");
  return { hour: parseInt(TimeSlite[0]), minute: parseInt(TimeSlite[1]) };
};

export default ConvertTimeToMinAndHours;
