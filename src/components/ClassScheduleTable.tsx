import React, { useEffect } from "react";

import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FormProvider, useForm } from "react-hook-form";
import { useLocalStorage } from "react-use";

import { useClassTableIcal } from "src/hooks/useClassTableIcal";
import { ConvertToIcal } from "src/lib/ConvertToIcal";
import { dayjsWapper } from "src/lib/dayjs";

import AddLesson from "./AddLesson";
import FormInputDate from "./FormInputDate";
import SetLessonTime from "./SetLessonTime";

export type ClassScheduleTableProps = {
  // table: useClassTableIcalProps["init"];
};
type lessonValue = {
  summary: string;
  description: string;
  url: string;
  location: string;
};
export type FormValue = {
  startDate: string;
  endDate: string;
  LessonTime: Array<{ start: string; end: string }>;
  Mon: lessonValue[];
  Tue: lessonValue[];
  Wed: lessonValue[];
  Thu: lessonValue[];
  Fri: lessonValue[];
  Sat: lessonValue[];
};

type Person = {
  periodNumber: null | React.ReactElement;
  Mon: null | React.ReactElement;
  Tue: null | React.ReactElement;
  Wed: null | React.ReactElement;
  Thu: null | React.ReactElement;
  Fri: null | React.ReactElement;
  Sat: null | React.ReactElement;
};

const defaultData: Person[] = [0, 1, 2, 3, 4, 5].map((value) => {
  return {
    periodNumber: <SetLessonTime lessonNumber={value + 1} />,
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const TestClassSchedule = (dayOfweek: string) => {
    return {
      summary: "",
      description: "",
      url: "",
      location: "",
    };
  };
  const defaultValues: FormValue = {
    startDate: dayjsWapper().format("YYYY-MM-DD"),
    endDate: dayjsWapper().add(90, "day").format("YYYY-MM-DD"),

    LessonTime: [
      { start: "08:40", end: "10:10" },
      { start: "10:20", end: "11:50" },
      { start: "12:40", end: "14:10" },
      { start: "14:20", end: "15:50" },
      { start: "16:00", end: "17:30" },
      { start: "17:40", end: "19:10" },
    ],
    Mon: new Array(6).fill({ ...TestClassSchedule("Mon") }),
    Tue: new Array(6).fill({ ...TestClassSchedule("Tue") }),
    Wed: new Array(6).fill({ ...TestClassSchedule("Wed") }),
    Thu: new Array(6).fill({ ...TestClassSchedule("Thu") }),
    Fri: new Array(6).fill({ ...TestClassSchedule("Fri") }),
    Sat: new Array(6).fill({ ...TestClassSchedule("Sat") }),
  };

  const [LocalStoragevalue, setLocalStorageValue] = useLocalStorage<FormValue>(
    "form-local-storage",
    defaultValues
  );

  const methods = useForm<FormValue>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (LocalStoragevalue) {
      methods.reset(LocalStoragevalue);
    }
  }, []);

  const { DownloadFile } = useClassTableIcal();

  const onSubmit = (data: FormValue) => {
    // setCalenderEvents(ConvertToIcal(data));
    DownloadFile(ConvertToIcal(data));
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Flex flexDir={"column"} gap={4} w="full">
            <HStack>
              <FormInputDate
                required="開始日を入力してください"
                placeholder="開始日"
                name="startDate"
                label="開始日"
                id="startDate"
              />
              <FormInputDate
                required="終了日を入力してください"
                placeholder="終了日"
                name="endDate"
                label="終了日"
                id="endDate"
              />
            </HStack>
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
            <Box py={4}>
              <VStack>
                <Button type={"submit"} w="full" colorScheme={"blue"}>
                  ダウンロード
                </Button>
                <Button
                  w="full"
                  colorScheme={"green"}
                  onClick={() => {
                    setLocalStorageValue(methods.getValues());
                  }}
                >
                  ブラウザに保存
                </Button>
                <Button
                  w="full"
                  colorScheme={"red"}
                  onClick={() => {
                    setLocalStorageValue(defaultValues);
                    location.reload();
                  }}
                >
                  リセット
                </Button>
              </VStack>
            </Box>
          </Flex>
        </form>
      </FormProvider>
    </div>
  );
};

export default ClassScheduleTable;
