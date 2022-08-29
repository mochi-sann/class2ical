import React from "react";
import {
  useClassTableIcal,
  useClassTableIcalProps,
} from "src/hooks/useClassTableIcal";

export type ClassScheduleTableProps = {
  table: useClassTableIcalProps["init"];
};

const ClassScheduleTable: React.FC<ClassScheduleTableProps> = (props) => {
  const { CalenderEvents } = useClassTableIcal();
  return (
    <div>
      <pre>{JSON.stringify(props.table, null, 2)}</pre>
    </div>
  );
};

export default ClassScheduleTable;
