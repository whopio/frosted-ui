import type { Meta, StoryObj } from '@storybook/react';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import React from 'react';
import {
  Badge,
  Button,
  Checkbox,
  Code,
  DataTable,
  DataTableColumnHeaderCellButton,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Flex,
  IconButton,
  ScrollArea,
  Select,
  Text,
  TextFieldInput,
} from '../../../src/components';
import { dataTableRootPropDefs } from '../../../src/components/data-table.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Data presentation/DataTable',
  component: DataTable.Root,
  args: {
    size: dataTableRootPropDefs.size.default,
    variant: dataTableRootPropDefs.variant.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <DataTable.Root {...args}>
      <DataTable.Table>
        <DataTable.Header>
          <DataTable.Row>
            <DataTable.ColumnHeaderCell>Full name</DataTable.ColumnHeaderCell>
            <DataTable.ColumnHeaderCell>Email</DataTable.ColumnHeaderCell>
            <DataTable.ColumnHeaderCell>Group</DataTable.ColumnHeaderCell>
          </DataTable.Row>
        </DataTable.Header>

        <DataTable.Body>
          <DataTable.Row>
            <DataTable.RowHeaderCell>Danilo Sousa</DataTable.RowHeaderCell>
            <DataTable.Cell>danilo@example.com</DataTable.Cell>
            <DataTable.Cell>
              <Badge color="green">Developer</Badge>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.RowHeaderCell>Zahra Ambessa</DataTable.RowHeaderCell>
            <DataTable.Cell>zahra@example.com</DataTable.Cell>
            <DataTable.Cell>
              <Badge color="amber">Admin</Badge>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.RowHeaderCell>Jasper Eriksson</DataTable.RowHeaderCell>
            <DataTable.Cell>jasper@example.com</DataTable.Cell>
            <DataTable.Cell>
              <Badge color="green">Developer</Badge>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable.Body>
      </DataTable.Table>
      <DataTable.BottomBar>Showing 1 to 3 of 3 entries</DataTable.BottomBar>
    </DataTable.Root>
  ),
};

export const Variant: Story = {
  render: (args) => (
    <Flex direction="row" gap="3">
      <div>
        <DataTable.Root {...args} variant="ghost">
          <DataTable.Table>
            <DataTable.Header>
              <DataTable.Row>
                <DataTable.ColumnHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Full name
                  </Flex>
                </DataTable.ColumnHeaderCell>
                <DataTable.ColumnHeaderCell>Email</DataTable.ColumnHeaderCell>
                <DataTable.ColumnHeaderCell>Group</DataTable.ColumnHeaderCell>
              </DataTable.Row>
            </DataTable.Header>

            <DataTable.Body>
              <DataTable.Row>
                <DataTable.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Danilo Sousa
                  </Flex>
                </DataTable.RowHeaderCell>
                <DataTable.Cell>danilo@example.com</DataTable.Cell>
                <DataTable.Cell>
                  <Badge color="green">Developer</Badge>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Zahra Ambessa
                  </Flex>
                </DataTable.RowHeaderCell>
                <DataTable.Cell>zahra@example.com</DataTable.Cell>
                <DataTable.Cell>
                  <Badge color="amber">Admin</Badge>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Jasper Eriksson
                  </Flex>
                </DataTable.RowHeaderCell>
                <DataTable.Cell>jasper@example.com</DataTable.Cell>
                <DataTable.Cell>
                  <Badge color="green">Developer</Badge>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable.Table>
        </DataTable.Root>
      </div>
      <div>
        <DataTable.Root {...args} variant="surface">
          <DataTable.Table>
            <DataTable.Header>
              <DataTable.Row>
                <DataTable.ColumnHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Full name
                  </Flex>
                </DataTable.ColumnHeaderCell>
                <DataTable.ColumnHeaderCell>Email</DataTable.ColumnHeaderCell>
                <DataTable.ColumnHeaderCell>Group</DataTable.ColumnHeaderCell>
              </DataTable.Row>
            </DataTable.Header>

            <DataTable.Body>
              <DataTable.Row>
                <DataTable.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Danilo Sousa
                  </Flex>
                </DataTable.RowHeaderCell>
                <DataTable.Cell>danilo@example.com</DataTable.Cell>
                <DataTable.Cell>
                  <Badge color="green">Developer</Badge>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Zahra Ambessa
                  </Flex>
                </DataTable.RowHeaderCell>
                <DataTable.Cell>zahra@example.com</DataTable.Cell>
                <DataTable.Cell>
                  <Badge color="amber">Admin</Badge>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Jasper Eriksson
                  </Flex>
                </DataTable.RowHeaderCell>
                <DataTable.Cell>jasper@example.com</DataTable.Cell>
                <DataTable.Cell>
                  <Badge color="green">Developer</Badge>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable.Table>
        </DataTable.Root>
      </div>
    </Flex>
  ),
};

export const TableFooter: Story = {
  render: (args) => (
    <Flex direction="column" gap="6" justify="center" align="center">
      <Text style={{ maxWidth: 700 }}>
        The <Code>{'<TableFooter />'}</Code> component is usually used as
        summary of the columns, e.g., a sum of the given numbers in a column.
      </Text>
      <Flex direction="row" gap="8">
        <div>
          <DataTable.Root {...args} variant="ghost">
            <DataTable.Table>
              <DataTable.Header>
                <DataTable.Row>
                  <DataTable.ColumnHeaderCell>
                    Product
                  </DataTable.ColumnHeaderCell>
                  <DataTable.ColumnHeaderCell>Price</DataTable.ColumnHeaderCell>
                </DataTable.Row>
              </DataTable.Header>

              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.RowHeaderCell>Pizza</DataTable.RowHeaderCell>
                  <DataTable.Cell>$20</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.RowHeaderCell>Confetti</DataTable.RowHeaderCell>
                  <DataTable.Cell>$30</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.RowHeaderCell>Beer</DataTable.RowHeaderCell>
                  <DataTable.Cell>$43</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
              <DataTable.Footer>
                <DataTable.Row>
                  <DataTable.RowHeaderCell>Total</DataTable.RowHeaderCell>
                  <DataTable.Cell>
                    <Text color="green">$93</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Footer>
            </DataTable.Table>
          </DataTable.Root>
        </div>
        <div>
          <DataTable.Root {...args} variant="surface">
            <DataTable.Table>
              <DataTable.Header>
                <DataTable.Row>
                  <DataTable.ColumnHeaderCell>
                    Product
                  </DataTable.ColumnHeaderCell>
                  <DataTable.ColumnHeaderCell>Price</DataTable.ColumnHeaderCell>
                </DataTable.Row>
              </DataTable.Header>

              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.RowHeaderCell>Pizza</DataTable.RowHeaderCell>
                  <DataTable.Cell>$20</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.RowHeaderCell>Confetti</DataTable.RowHeaderCell>
                  <DataTable.Cell>$30</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.RowHeaderCell>Beer</DataTable.RowHeaderCell>
                  <DataTable.Cell>$43</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
              <DataTable.Footer>
                <DataTable.Row>
                  <DataTable.RowHeaderCell>Total</DataTable.RowHeaderCell>
                  <DataTable.Cell>
                    <Text color="green">$93</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Footer>
            </DataTable.Table>
          </DataTable.Root>
        </div>
      </Flex>
    </Flex>
  ),
};

export const HorizontalScroll: Story = {
  render: (args) => (
    <Flex direction="row" gap="8">
      <div>
        <DataTable.Root
          {...args}
          variant="ghost"
          style={{ maxWidth: 400, whiteSpace: 'nowrap' }}
        >
          <ScrollArea scrollbars="horizontal">
            <DataTable.Table>
              <DataTable.Header>
                <DataTable.Row>
                  <DataTable.ColumnHeaderCell>
                    Product
                  </DataTable.ColumnHeaderCell>
                  <DataTable.ColumnHeaderCell>
                    Availability
                  </DataTable.ColumnHeaderCell>
                  <DataTable.ColumnHeaderCell>Store</DataTable.ColumnHeaderCell>
                  <DataTable.ColumnHeaderCell>Price</DataTable.ColumnHeaderCell>
                  <DataTable.ColumnHeaderCell>Tax</DataTable.ColumnHeaderCell>
                </DataTable.Row>
              </DataTable.Header>

              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.RowHeaderCell>Pizza</DataTable.RowHeaderCell>
                  <DataTable.Cell>
                    <Badge color="green">In stock</Badge>
                  </DataTable.Cell>
                  <DataTable.Cell>Tesco</DataTable.Cell>
                  <DataTable.Cell>$20</DataTable.Cell>
                  <DataTable.Cell>$2</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.RowHeaderCell>Confetti</DataTable.RowHeaderCell>
                  <DataTable.Cell>
                    <Badge color="green">In stock</Badge>
                  </DataTable.Cell>
                  <DataTable.Cell>Wallmart</DataTable.Cell>
                  <DataTable.Cell>$30</DataTable.Cell>
                  <DataTable.Cell>$3.50</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.RowHeaderCell>Beer</DataTable.RowHeaderCell>
                  <DataTable.Cell>
                    <Badge color="red">Out of stock</Badge>
                  </DataTable.Cell>
                  <DataTable.Cell>Beer Enthusiast</DataTable.Cell>
                  <DataTable.Cell>$43</DataTable.Cell>
                  <DataTable.Cell>$13.75</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
              <DataTable.Footer>
                <DataTable.Row>
                  <DataTable.RowHeaderCell colSpan={3}>
                    Total
                  </DataTable.RowHeaderCell>
                  <DataTable.Cell>
                    <Text color="green">$93</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text color="red">$19.25</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Footer>
            </DataTable.Table>
          </ScrollArea>
          <DataTable.BottomBar>
            <Text size="1" color="gray" align="center">
              Birthday party shopping list.
            </Text>
          </DataTable.BottomBar>
        </DataTable.Root>
      </div>
      <div>
        <DataTable.Root
          {...args}
          variant="surface"
          style={{ maxWidth: 400, whiteSpace: 'nowrap' }}
        >
          <ScrollArea scrollbars="horizontal">
            <DataTable.Table>
              <DataTable.Header>
                <DataTable.Row>
                  <DataTable.ColumnHeaderCell>
                    Product
                  </DataTable.ColumnHeaderCell>
                  <DataTable.ColumnHeaderCell>
                    Availability
                  </DataTable.ColumnHeaderCell>
                  <DataTable.ColumnHeaderCell>Store</DataTable.ColumnHeaderCell>
                  <DataTable.ColumnHeaderCell>Price</DataTable.ColumnHeaderCell>
                  <DataTable.ColumnHeaderCell>Tax</DataTable.ColumnHeaderCell>
                </DataTable.Row>
              </DataTable.Header>

              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.RowHeaderCell>Pizza</DataTable.RowHeaderCell>
                  <DataTable.Cell>
                    <Badge color="green">In stock</Badge>
                  </DataTable.Cell>
                  <DataTable.Cell>Tesco</DataTable.Cell>
                  <DataTable.Cell>$20</DataTable.Cell>
                  <DataTable.Cell>$2</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.RowHeaderCell>Confetti</DataTable.RowHeaderCell>
                  <DataTable.Cell>
                    <Badge color="green">In stock</Badge>
                  </DataTable.Cell>
                  <DataTable.Cell>Wallmart</DataTable.Cell>
                  <DataTable.Cell>$30</DataTable.Cell>
                  <DataTable.Cell>$3.50</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.RowHeaderCell>Beer</DataTable.RowHeaderCell>
                  <DataTable.Cell>
                    <Badge color="red">Out of stock</Badge>
                  </DataTable.Cell>
                  <DataTable.Cell>Beer Enthusiast</DataTable.Cell>
                  <DataTable.Cell>$43</DataTable.Cell>
                  <DataTable.Cell>$13.75</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
              <DataTable.Footer>
                <DataTable.Row>
                  <DataTable.RowHeaderCell colSpan={3}>
                    Total
                  </DataTable.RowHeaderCell>
                  <DataTable.Cell>
                    <Text color="green">$93</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text color="red">$19.25</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Footer>
            </DataTable.Table>
          </ScrollArea>
          <DataTable.BottomBar>
            <Text size="1" color="gray" align="center">
              Birthday party shopping list.
            </Text>
          </DataTable.BottomBar>
        </DataTable.Root>
      </div>
    </Flex>
  ),
};

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

const data: Payment[] = [
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'ilya@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'jamie@gmail.com',
  },
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'artur@yahoo.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'fj@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'steven@whop.com',
  },
  {
    id: '5kma23ae',
    amount: 874,
    status: 'success',
    email: 'es@whop.com',
  },
  {
    id: '8jqecj4p',
    amount: 721,
    status: 'failed',
    email: 'dima@yahoo.com',
  },
  {
    id: 'asma53ae',
    amount: 174,
    status: 'success',
    email: 'tester@wp.pl',
  },
  {
    id: 'bhqokj4p',
    amount: 721,
    status: 'failed',
    email: 'someone@gmail.com',
  },
  {
    id: '5kma93ae',
    amount: 894,
    status: 'success',
    email: 'tristan@whop.com',
  },
];

const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllRowsSelected() ||
          (table.getIsSomeRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: () => (
      <DataTableColumnHeaderCellButton>Status</DataTableColumnHeaderCellButton>
    ),
    cell: ({ row }) => row.getValue('status'),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <DataTableColumnHeaderCellButton
          isSortable={column.getCanSort()}
          sortDirection={column.getIsSorted()}
          onClick={() => column.toggleSorting()}
        >
          Email
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </DataTableColumnHeaderCellButton>
      );
    },
    cell: ({ row }) => row.getValue('email'),
  },
  {
    enableSorting: true,
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <DataTableColumnHeaderCellButton
          isSortable={column.getCanSort()}
          sortDirection={column.getIsSorted()}
          onClick={() => column.toggleSorting()}
        >
          Amount
        </DataTableColumnHeaderCellButton>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <Text color="green">{formatted}</Text>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <Flex justify="end">
          <DropdownMenuRoot>
            <DropdownMenuTrigger>
              <IconButton
                variant="ghost"
                color="gray"
                aria-label="Open menu"
                style={{ margin: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 16, height: 16 }}
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuItem
                color="danger"
                // onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Refund
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuRoot>
        </Flex>
      );
    },
  },
];

const TanstackTableExample = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [pagination, setPagination] = React.useState({
    pageSize: 5,
    pageIndex: 0,
  });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  return (
    <Flex direction="column" gap="4" style={{ width: 580 }}>
      <Flex gap="4" width="100%">
        <div style={{ width: '100%' }}>
          <TextFieldInput
            placeholder="Filter emails..."
            value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('email')?.setFilterValue(event.target.value)
            }
            style={{ width: '100%' }}
            width={'100%'}
          />
        </div>
        <DropdownMenuRoot>
          <DropdownMenuTrigger>
            <Button variant="surface" className="ml-auto">
              Columns
              {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                    // Prevents dropdown from closing when clicking on the checkbox
                    onSelect={(event) => event.preventDefault()}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenuRoot>
      </Flex>
      <DataTable.Root size="2">
        <DataTable.Table>
          <DataTable.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <DataTable.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <DataTable.ColumnHeaderCell key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </DataTable.ColumnHeaderCell>
                  );
                })}
              </DataTable.Row>
            ))}
          </DataTable.Header>
          <DataTable.Body>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <DataTable.Row
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <DataTable.Cell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </DataTable.Cell>
                  ))}
                </DataTable.Row>
              ))
            ) : (
              <DataTable.Row>
                <DataTable.Cell colSpan={columns.length}>
                  No results.
                </DataTable.Cell>
              </DataTable.Row>
            )}
          </DataTable.Body>
        </DataTable.Table>
        <DataTable.BottomBar>
          <Flex align="center" justify="between">
            <Text color="gray" size="2">
              {table.getFilteredSelectedRowModel().rows.length} of{' '}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </Text>
            <Flex gap="2">
              <Button
                variant="surface"
                // size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="surface"
                // size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>

              <Select.Root
                onValueChange={(newPerPage) =>
                  table.setPageSize(Number(newPerPage))
                }
                size="2"
                value={table.getState().pagination.pageSize.toString()}
                aria-label="Rows per page"
              >
                <Select.Trigger color="gray" variant="soft" />
                <Select.Content>
                  {[2, 5, 10].map((option) => (
                    <Select.Item key={option} value={option.toString()}>
                      {option}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>
        </DataTable.BottomBar>
      </DataTable.Root>
    </Flex>
  );
};
export const TanstackTable: Story = {
  render: (args) => <TanstackTableExample />,
};
