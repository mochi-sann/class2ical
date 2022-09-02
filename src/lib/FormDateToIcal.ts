import { AddLessonProps } from "src/components/AddLesson";
import { FormValue } from "src/components/ClassScheduleTable";
import { useClassTableIcalProps } from "src/hooks/useClassTableIcal";

export type FormDateToIcalArgsType = FormValue["Mon"][0] & {
  startDate: string;
  endDate: string;
  dayOfweek: AddLessonProps["dayOfweek"];
};
export type FormDateToIcalReturnType = useClassTableIcalProps["init"][0];

const FormDateToIcal = (
  Args: FormDateToIcalArgsType
): FormDateToIcalReturnType => {
  return;
};

export default FormDateToIcal;
