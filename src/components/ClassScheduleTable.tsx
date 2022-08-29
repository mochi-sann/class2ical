import React from "react";
import {
  useClassTableIcal,
  useClassTableIcalProps,
} from "src/hooks/useClassTableIcal";
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
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export type ClassScheduleTableProps = {
  // table: useClassTableIcalProps["init"];
};

type Person = {
  periodNumber: number;
  Mon: string | null;
  Tue: string | null;
  Wed: string | null;
  Thu: string | null;
  Fri: string | null;
  Sat: string | null;
};

const defaultData: Person[] = [1, 2, 3, 4, 5, 6].map((value) => {
  return {
    periodNumber: value,
    Mon: "Mon" + value,
    Tue: "Tue" + value,
    Wed: "Wed" + value,
    Thu: "Thu" + value,
    Fri: "Fri" + value,
    Sat: "Sat" + value,
  };
});
const columnHelper = createColumnHelper<Person>();
// period = 授業の何限なのか
const columns = [
  columnHelper.accessor("periodNumber", {
    cell: (info) => info.getValue(),

    header: "限目",
    // footer: (info) => info.column.id,
  }),
  columnHelper.group({
    header: "day of week",
    footer: (props) => props.column.id,
    columns: [
      columnHelper.accessor("Mon", {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("Tue", {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("Wed", {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("Thu", {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("Fri", {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("Sat", {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
    ],
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
        <Table variant="unstyled">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td borderWidth={"2px"} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <Tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClassScheduleTable;
