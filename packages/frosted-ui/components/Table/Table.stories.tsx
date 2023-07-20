import { faEllipsis, faPlus } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { ColumnDef, createColumnHelper } from '../../lib/table-helpers';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { TablePagination } from '../TablePagination';
import { Tag } from '../Tag';
import { Table } from './Table';
import { mockTableData as paginationData } from './mock-data';

type Webhooks = {
  url: string;
  secret: string;
  events: number;
  dateCreated: Date;
};

const columnHelper = createColumnHelper<Webhooks>();

const columns = [
  columnHelper.accessor('url', {
    header: () => 'Webhook URL',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('secret', {
    header: () => 'Webhook Secret',
    cell: (info) => info.getValue(),
    enableSorting: false,
  }),
  columnHelper.accessor('events', {
    header: () => 'Events',
    cell: (info) => (
      <Tag text={info.getValue() + ' events'} colorScheme="gray" />
    ),
  }),
  columnHelper.accessor('dateCreated', {
    header: () => 'Date created',
    cell: (info) => new Date(info.getValue()).toDateString(),
  }),
  columnHelper.display({
    id: 'actions',
    cell: () => (
      <div className="flex">
        <Button variant="blank" colorScheme="black" size="sm" className="mr-">
          Send test webhook
        </Button>
        <IconButton
          variant="blank"
          colorScheme="black"
          size="sm"
          icon={faEllipsis}
        />
      </div>
    ),
    enableSorting: false,
  }),
];

const columnsClassnames = [
  columnHelper.accessor('url', {
    header: () => 'Webhook URL',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('secret', {
    header: () => 'Webhook Secret',
    meta: {
      classNames: ['justify-end', 'text-whop-field-highlight'],
    },
    cell: (info) => info.getValue(),
    enableSorting: false,
  }),
];

const data: Webhooks[] = [
  {
    url: 'https://data.whop.com/api/productName1',
    secret: '3449b107-1d4e-4427-b50a-d96567a79138',
    events: 4,
    dateCreated: new Date('2023-02-17'),
  },
  {
    url: 'https://data.whop.com/api/productName3',
    secret: '363a781b-6ba7-4b9d-9600-4616de46d8fe',
    events: 12,
    dateCreated: new Date('2023-01-01'),
  },
  {
    url: 'https://data.whop.com/api/productName2',
    secret: '500e4d81-0642-407f-8c31-85eb307bcfbf',
    events: 0,
    dateCreated: new Date('2023-02-03'),
  },
];

const meta: Meta<typeof Table> = {
  title: 'General/Table',
  component: Table,
  args: {
    data,
    // @ts-expect-error this works
    columns,
    showHeader: true,
  },
};
export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};

export const NoHeaders: Story = {
  args: {
    showHeader: false,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    empty: {
      title: "You don't have any webhooks",
      description: 'Create one to start sending event payloads.',
      primaryButton: {
        leftIcon: faPlus,
        children: 'Create a webhook',
        onClick: () => alert('Created a webhook'),
      },
    },
  },
};

export const HeaderClassNames: Story = {
  args: {
    columns: columnsClassnames as ColumnDef<object, string>[],
  },
};

export const Loading: Story = {
  args: {
    data: [],
    isLoading: true,
  },
};

export const BasicPagination: Story = {
  render: (args) => (
    <Table {...args} data={paginationData}>
      <TablePagination />
    </Table>
  ),
};

export const ControlledPagination: Story = {
  render: (args) => {
    const [data, setData] = useState(paginationData.slice(0, 10));
    const handlePaginationChange = useCallback(
      ({ pageIndex, pageSize }: { pageIndex: number; pageSize: number }) => {
        setData(
          // This is where you'd make an API call to get the next page of data
          paginationData.slice(
            pageIndex * pageSize,
            (pageIndex + 1) * pageSize,
          ),
        );
      },
      [],
    );

    return (
      <Table
        {...args}
        data={data}
        initialState={{ pagination: { pageIndex: 2 } }}
        totalRowCount={472}
      >
        <TablePagination onChange={handlePaginationChange} />
      </Table>
    );
  },
};
