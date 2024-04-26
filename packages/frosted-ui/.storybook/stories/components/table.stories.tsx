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
  DropdownMenu,
  Flex,
  IconButton,
  ScrollArea,
  Select,
  Table,
  Text,
  TextField,
} from '../../../src/components';
import { tableRootPropDefs } from '../../../src/components/table.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Data presentation/Table',
  component: Table.Root,
  args: {
    size: tableRootPropDefs.size.default,
    variant: tableRootPropDefs.variant.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Table.Root {...args}>
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell>danilo@example.com</Table.Cell>
            <Table.Cell>
              <Badge color="green">Developer</Badge>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
            <Table.Cell>zahra@example.com</Table.Cell>
            <Table.Cell>
              <Badge color="amber">Admin</Badge>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
            <Table.Cell>jasper@example.com</Table.Cell>
            <Table.Cell>
              <Badge color="green">Developer</Badge>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Table>
      <Table.BottomBar>Showing 1 to 3 of 3 entries</Table.BottomBar>
    </Table.Root>
  ),
};

export const Variant: Story = {
  render: (args) => (
    <Flex direction="row" gap="3">
      <div>
        <Table.Root {...args} variant="ghost">
          <Table.Table>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Full name
                  </Flex>
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Danilo Sousa
                  </Flex>
                </Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>
                  <Badge color="green">Developer</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Zahra Ambessa
                  </Flex>
                </Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>
                  <Badge color="amber">Admin</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Jasper Eriksson
                  </Flex>
                </Table.RowHeaderCell>
                <Table.Cell>jasper@example.com</Table.Cell>
                <Table.Cell>
                  <Badge color="green">Developer</Badge>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Table>
        </Table.Root>
      </div>
      <div>
        <Table.Root {...args} variant="surface">
          <Table.Table>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Full name
                  </Flex>
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Danilo Sousa
                  </Flex>
                </Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>
                  <Badge color="green">Developer</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Zahra Ambessa
                  </Flex>
                </Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>
                  <Badge color="amber">Admin</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <Flex align="center" gap="3">
                    <Checkbox />
                    Jasper Eriksson
                  </Flex>
                </Table.RowHeaderCell>
                <Table.Cell>jasper@example.com</Table.Cell>
                <Table.Cell>
                  <Badge color="green">Developer</Badge>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Table>
        </Table.Root>
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
          <Table.Root {...args} variant="ghost">
            <Table.Table>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>Pizza</Table.RowHeaderCell>
                  <Table.Cell>$20</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Confetti</Table.RowHeaderCell>
                  <Table.Cell>$30</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Beer</Table.RowHeaderCell>
                  <Table.Cell>$43</Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.RowHeaderCell>Total</Table.RowHeaderCell>
                  <Table.Cell>
                    <Text color="green">$93</Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Footer>
            </Table.Table>
          </Table.Root>
        </div>
        <div>
          <Table.Root {...args} variant="surface">
            <Table.Table>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>Pizza</Table.RowHeaderCell>
                  <Table.Cell>$20</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Confetti</Table.RowHeaderCell>
                  <Table.Cell>$30</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Beer</Table.RowHeaderCell>
                  <Table.Cell>$43</Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.RowHeaderCell>Total</Table.RowHeaderCell>
                  <Table.Cell>
                    <Text color="green">$93</Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Footer>
            </Table.Table>
          </Table.Root>
        </div>
      </Flex>
    </Flex>
  ),
};

export const HorizontalScroll: Story = {
  render: (args) => (
    <Flex direction="row" gap="8">
      <div>
        <Table.Root
          {...args}
          variant="ghost"
          style={{ maxWidth: 400, whiteSpace: 'nowrap' }}
        >
          <ScrollArea scrollbars="horizontal">
            <Table.Table>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Availability</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Store</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Tax</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>Pizza</Table.RowHeaderCell>
                  <Table.Cell>
                    <Badge color="green">In stock</Badge>
                  </Table.Cell>
                  <Table.Cell>Tesco</Table.Cell>
                  <Table.Cell>$20</Table.Cell>
                  <Table.Cell>$2</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Confetti</Table.RowHeaderCell>
                  <Table.Cell>
                    <Badge color="green">In stock</Badge>
                  </Table.Cell>
                  <Table.Cell>Wallmart</Table.Cell>
                  <Table.Cell>$30</Table.Cell>
                  <Table.Cell>$3.50</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Beer</Table.RowHeaderCell>
                  <Table.Cell>
                    <Badge color="red">Out of stock</Badge>
                  </Table.Cell>
                  <Table.Cell>Beer Enthusiast</Table.Cell>
                  <Table.Cell>$43</Table.Cell>
                  <Table.Cell>$13.75</Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.RowHeaderCell colSpan={3}>Total</Table.RowHeaderCell>
                  <Table.Cell>
                    <Text color="green">$93</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text color="red">$19.25</Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Footer>
            </Table.Table>
          </ScrollArea>
          <Table.BottomBar>
            <Text size="1" color="gray" align="center">
              Birthday party shopping list.
            </Text>
          </Table.BottomBar>
        </Table.Root>
      </div>
      <div>
        <Table.Root
          {...args}
          variant="surface"
          style={{ maxWidth: 400, whiteSpace: 'nowrap' }}
        >
          <ScrollArea scrollbars="horizontal">
            <Table.Table>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Availability</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Store</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Tax</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>Pizza</Table.RowHeaderCell>
                  <Table.Cell>
                    <Badge color="green">In stock</Badge>
                  </Table.Cell>
                  <Table.Cell>Tesco</Table.Cell>
                  <Table.Cell>$20</Table.Cell>
                  <Table.Cell>$2</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Confetti</Table.RowHeaderCell>
                  <Table.Cell>
                    <Badge color="green">In stock</Badge>
                  </Table.Cell>
                  <Table.Cell>Wallmart</Table.Cell>
                  <Table.Cell>$30</Table.Cell>
                  <Table.Cell>$3.50</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Beer</Table.RowHeaderCell>
                  <Table.Cell>
                    <Badge color="red">Out of stock</Badge>
                  </Table.Cell>
                  <Table.Cell>Beer Enthusiast</Table.Cell>
                  <Table.Cell>$43</Table.Cell>
                  <Table.Cell>$13.75</Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.RowHeaderCell colSpan={3}>Total</Table.RowHeaderCell>
                  <Table.Cell>
                    <Text color="green">$93</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text color="red">$19.25</Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Footer>
            </Table.Table>
          </ScrollArea>
          <Table.BottomBar>
            <Text size="1" color="gray" align="center">
              Birthday party shopping list.
            </Text>
          </Table.BottomBar>
        </Table.Root>
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
      <Table.ColumnHeaderCellButton>Status</Table.ColumnHeaderCellButton>
    ),
    cell: ({ row }) => row.getValue('status'),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Table.ColumnHeaderCellButton
          isSortable={column.getCanSort()}
          sortDirection={column.getIsSorted()}
          onClick={() => column.toggleSorting()}
        >
          Email
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Table.ColumnHeaderCellButton>
      );
    },
    cell: ({ row }) => row.getValue('email'),
  },
  {
    enableSorting: true,
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <Table.ColumnHeaderCellButton
          isSortable={column.getCanSort()}
          sortDirection={column.getIsSorted()}
          onClick={() => column.toggleSorting()}
        >
          Amount
        </Table.ColumnHeaderCellButton>
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
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
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
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              <DropdownMenu.Item>View customer</DropdownMenu.Item>
              <DropdownMenu.Item>View payment details</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Label>Actions</DropdownMenu.Label>
              <DropdownMenu.Item
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenu.Item>
              <DropdownMenu.Item
                color="danger"
                // onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Refund
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      );
    },
  },
];

const TanstackTableExample = (
  props: React.ComponentProps<typeof Table.Root>,
) => {
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
          <TextField.Input
            placeholder="Filter emails..."
            value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('email')?.setFilterValue(event.target.value)
            }
            style={{ width: '100%' }}
            width={'100%'}
          />
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="surface" className="ml-auto">
              Columns
              {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenu.CheckboxItem
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
                  </DropdownMenu.CheckboxItem>
                );
              })}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
      <Table.Root {...props}>
        <Table.Table>
          <Table.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Table.ColumnHeaderCell key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </Table.ColumnHeaderCell>
                  );
                })}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <Table.Row
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Table.Cell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={columns.length}>No results.</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Table>
        <Table.BottomBar>
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
        </Table.BottomBar>
      </Table.Root>
    </Flex>
  );
};
export const TanstackTable: Story = {
  render: (args) => <TanstackTableExample {...args} />,
};
