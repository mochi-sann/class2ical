import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import AddLesson from "./AddLesson";

export type ClassScheduleTableProps = {
  // table: useClassTableIcalProps["init"];
};
type FormValue = {
  summary: string;
  description: string;
  classPeriod: number;
  weekOfDay:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
};

type Person = {
  periodNumber: number;
  Mon: null | React.ReactElement;
  Tue: null | React.ReactElement;
  Wed: null | React.ReactElement;
  Thu: null | React.ReactElement;
  Fri: null | React.ReactElement;
  Sat: null | React.ReactElement;
};

const defaultData: Person[] = [1, 2, 3, 4, 5, 6].map((value) => {
  return {
    periodNumber: value,
    Mon: <AddLesson dayOfweek="Mon" periodNumber={value} />,
    Tue: <AddLesson dayOfweek="Tue" periodNumber={value} />,
    Wed: <AddLesson dayOfweek="Wed" periodNumber={value} />,
    Thu: <AddLesson dayOfweek="Thu" periodNumber={value} />,
    Fri: <AddLesson dayOfweek="Fri" periodNumber={value} />,
    Sat: <AddLesson dayOfweek="Sat" periodNumber={value} />,
  };
});
const columnHelper = createColumnHelper<Person>();
// period = 授業の何限なのか
const columns = [
  columnHelper.accessor("periodNumber", {
    cell: (info) => info.getValue(),
    header: "限目",
  }),
  columnHelper.accessor("Mon", {
    cell: (info) => info.getValue(),
    header: "月",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("Tue", {
    cell: (info) => info.getValue(),
    header: "火",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("Wed", {
    cell: (info) => info.getValue(),
    header: "水",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("Thu", {
    cell: (info) => info.getValue(),
    header: "木",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("Fri", {
    cell: (info) => info.getValue(),
    header: "金",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("Sat", {
    cell: (info) => info.getValue(),
    header: "土",
    footer: (info) => info.column.id,
  }),
];

const ClassScheduleTable: React.FC<ClassScheduleTableProps> = (props) => {
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const methods = useForm<FormValue>();
  const onSubmit = (data: FormValue) =>
    console.log("submit!!", JSON.stringify(data, null, 2));
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TableContainer>
            <Table
              border={"2px"}
              borderRadius={"md"}
              borderColor={"gray.500"}
              variant="unstyled"
            >
              <Thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <Tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <Th
                        borderWidth={"1px"}
                        borderColor={"gray.500"}
                        textAlign={"center"}
                        _first={{ width: "10px" }}
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody>
                {table.getRowModel().rows.map((row) => (
                  <Tr
                    borderBottomWidth={"1px"}
                    borderTopWidth={"1px"}
                    borderColor={"gray.500"}
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <Td
                        textAlign={"center"}
                        _first={{ borderStartWidth: "0px" }}
                        borderStartWidth={"1px"}
                        borderColor={"gray.500"}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Button type={"submit"} w="full" colorScheme={"blue"}>
            ダウンロード
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ClassScheduleTable;
