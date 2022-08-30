import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export type ClassScheduleTableProps = {
  // table: useClassTableIcalProps["init"];
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
    Mon: (
      <div>
        <p>テキストテキスト</p>
      </div>
    ),
    Tue: (
      <div>
        <p>this is Tue</p>
      </div>
    ),
    Wed: null,
    Thu: null,
    Fri: null,
    Sat: null,
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

  return (
    <div>
      {/* <pre>{JSON.stringify(props.table, null, 2)}</pre> */}
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClassScheduleTable;
