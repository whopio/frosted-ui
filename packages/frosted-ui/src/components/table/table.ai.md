# Frosted UI Table Component

A comprehensive data presentation component with flexible layout options and accessibility features. The Table component provides a complete solution for displaying structured data with sorting, alignment, and styling capabilities.

## Overview

The Table component is a multi-part system that creates accessible, well-structured data tables. It consists of multiple sub-components that work together to provide proper semantic HTML structure while maintaining design consistency and flexibility.

Key features:

- **Multi-Component System**: Root, Table, Header, Body, Footer, Row, Cell components
- **2 Size Options**: Compact and comfortable layouts
- **2 Variants**: Surface and ghost styling options
- **Flexible Alignment**: Row and cell alignment options
- **Sortable Headers**: Built-in sorting button component
- **Responsive Design**: Works with scroll areas for overflow handling
- **Semantic HTML**: Proper table structure for accessibility
- **Bottom Bar**: Built-in pagination/summary bar

## Components

### Table.Root

Container that provides styling context and wrapper.

**Props:**

- `size`: `'1' | '2'` (default: `'2'`)
- `variant`: `'surface' | 'ghost'` (default: `'surface'`)

### Table.Table

The main table element (`<table>`).

### Table.Header

Table header section (`<thead>`).

### Table.Body

Table body section (`<tbody>`).

### Table.Footer

Table footer section (`<tfoot>`).

### Table.Row

Table row (`<tr>`) with alignment options.

**Props:**

- `align`: `'start' | 'center' | 'end' | 'baseline'`

### Table.Cell

Standard table cell (`<td>`).

**Props:**

- `justify`: `'start' | 'center' | 'end'`
- `width`: `string | number`

### Table.ColumnHeaderCell

Column header cell (`<th scope="col">`).

**Props:**

- Same as Table.Cell

### Table.RowHeaderCell

Row header cell (`<th scope="row">`).

**Props:**

- Same as Table.Cell

### Table.ColumnHeaderCellButton

Sortable column header button.

**Props:**

- `sortDirection`: `'asc' | 'desc' | false`
- `isSortable`: `boolean`
- All Button props except `variant`, `color`, `size`, `highContrast`

### Table.BottomBar

Footer bar for pagination or summary information.

## Basic Usage

```jsx
import { Table, Badge } from '@frosted-ui/core';

function BasicExample() {
  return (
    <Table.Root>
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>John Doe</Table.RowHeaderCell>
            <Table.Cell>john@example.com</Table.Cell>
            <Table.Cell>
              <Badge color="green">Active</Badge>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Jane Smith</Table.RowHeaderCell>
            <Table.Cell>jane@example.com</Table.Cell>
            <Table.Cell>
              <Badge color="orange">Pending</Badge>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Table>

      <Table.BottomBar>Showing 1 to 2 of 2 entries</Table.BottomBar>
    </Table.Root>
  );
}
```

## Examples

### Size and Variant Options

```jsx
function VariantExample() {
  const users = [
    { name: 'Danilo Sousa', email: 'danilo@example.com', role: 'Developer' },
    { name: 'Zahra Ambessa', email: 'zahra@example.com', role: 'Admin' },
    { name: 'Jasper Eriksson', email: 'jasper@example.com', role: 'Developer' },
  ];

  return (
    <div className="space-y-6">
      {/* Surface variant */}
      <Table.Root variant="surface" size="2">
        <Table.Table>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user.email}>
                <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <Badge color={user.role === 'Admin' ? 'orange' : 'green'}>{user.role}</Badge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Table>
      </Table.Root>

      {/* Ghost variant */}
      <Table.Root variant="ghost" size="1">
        <Table.Table>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user.email}>
                <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <Badge color={user.role === 'Admin' ? 'orange' : 'green'}>{user.role}</Badge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Table>
      </Table.Root>
    </div>
  );
}
```

### With Checkboxes and Selection

```jsx
function SelectableExample() {
  const [selectedRows, setSelectedRows] = React.useState(new Set());

  const users = [
    { id: '1', name: 'Danilo Sousa', email: 'danilo@example.com', role: 'Developer' },
    { id: '2', name: 'Zahra Ambessa', email: 'zahra@example.com', role: 'Admin' },
    { id: '3', name: 'Jasper Eriksson', email: 'jasper@example.com', role: 'Developer' },
  ];

  const isAllSelected = selectedRows.size === users.length;
  const isIndeterminate = selectedRows.size > 0 && selectedRows.size < users.length;

  const toggleAll = () => {
    if (isAllSelected) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(users.map(u => u.id)));
    }
  };

  const toggleRow = (id: string) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedRows(newSelection);
  };

  return (
    <Table.Root>
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell width="50px">
              <Checkbox
                checked={isAllSelected ? true : isIndeterminate ? 'indeterminate' : false}
                onCheckedChange={toggleAll}
              />
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width="100px">Actions</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>
                <Checkbox
                  checked={selectedRows.has(user.id)}
                  onCheckedChange={() => toggleRow(user.id)}
                />
              </Table.Cell>
              <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <Badge color={user.role === 'Admin' ? 'orange' : 'green'}>
                  {user.role}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <IconButton variant="ghost" size="1">
                  <DotsHorizontalIcon />
                </IconButton>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Table>

      <Table.BottomBar>
        {selectedRows.size > 0 ? (
          <div className="flex items-center justify-between w-full">
            <Text size="2">{selectedRows.size} of {users.length} selected</Text>
            <div className="flex gap-2">
              <Button variant="soft" size="1">Export</Button>
              <Button variant="soft" size="1" color="red">Delete</Button>
            </div>
          </div>
        ) : (
          <Text size="2">Showing {users.length} users</Text>
        )}
      </Table.BottomBar>
    </Table.Root>
  );
}
```

### Sortable Headers

```jsx
function SortableExample() {
  const [sortField, setSortField] = React.useState('name');
  const [sortDirection, setSortDirection] = React.useState('asc');

  const users = [
    { name: 'Danilo Sousa', email: 'danilo@example.com', role: 'Developer', joined: '2023-01-15' },
    { name: 'Zahra Ambessa', email: 'zahra@example.com', role: 'Admin', joined: '2022-11-03' },
    { name: 'Jasper Eriksson', email: 'jasper@example.com', role: 'Developer', joined: '2023-05-20' },
  ];

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    const aVal = a[sortField];
    const bVal = b[sortField];
    const modifier = sortDirection === 'asc' ? 1 : -1;
    return aVal.localeCompare(bVal) * modifier;
  });

  return (
    <Table.Root>
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>
              <Table.ColumnHeaderCellButton
                onClick={() => handleSort('name')}
                sortDirection={sortField === 'name' ? sortDirection : false}
                isSortable
              >
                Name
              </Table.ColumnHeaderCellButton>
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              <Table.ColumnHeaderCellButton
                onClick={() => handleSort('email')}
                sortDirection={sortField === 'email' ? sortDirection : false}
                isSortable
              >
                Email
              </Table.ColumnHeaderCellButton>
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              <Table.ColumnHeaderCellButton
                onClick={() => handleSort('role')}
                sortDirection={sortField === 'role' ? sortDirection : false}
                isSortable
              >
                Role
              </Table.ColumnHeaderCellButton>
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              <Table.ColumnHeaderCellButton
                onClick={() => handleSort('joined')}
                sortDirection={sortField === 'joined' ? sortDirection : false}
                isSortable
              >
                Joined
              </Table.ColumnHeaderCellButton>
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sortedUsers.map((user) => (
            <Table.Row key={user.email}>
              <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <Badge color={user.role === 'Admin' ? 'orange' : 'green'}>
                  {user.role}
                </Badge>
              </Table.Cell>
              <Table.Cell>{user.joined}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Table>
    </Table.Root>
  );
}
```

### Alignment and Justification

```jsx
function AlignmentExample() {
  const products = [
    { name: 'Laptop Pro', price: 1299.99, stock: 15, status: 'In Stock' },
    { name: 'Wireless Mouse', price: 29.99, stock: 0, status: 'Out of Stock' },
    { name: 'Keyboard', price: 89.99, stock: 8, status: 'Low Stock' },
  ];

  return (
    <Table.Root>
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="end">Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">Stock</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">Status</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.name} align="center">
              <Table.RowHeaderCell>{product.name}</Table.RowHeaderCell>
              <Table.Cell justify="end">
                <Text size="2" weight="medium">
                  ${product.price}
                </Text>
              </Table.Cell>
              <Table.Cell justify="center">
                <Text size="2">{product.stock}</Text>
              </Table.Cell>
              <Table.Cell justify="center">
                <Badge
                  color={product.status === 'In Stock' ? 'green' : product.status === 'Low Stock' ? 'orange' : 'red'}
                >
                  {product.status}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Table>
    </Table.Root>
  );
}
```

### With Footer and Summary

```jsx
function FooterExample() {
  const transactions = [
    { id: 'TXN001', type: 'Sale', amount: 125.5, fee: 3.75 },
    { id: 'TXN002', type: 'Refund', amount: -45.0, fee: 0 },
    { id: 'TXN003', type: 'Sale', amount: 89.99, fee: 2.7 },
    { id: 'TXN004', type: 'Sale', amount: 234.75, fee: 7.04 },
  ];

  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);
  const totalFees = transactions.reduce((sum, t) => sum + t.fee, 0);

  return (
    <Table.Root>
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Transaction ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="end">Amount</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="end">Fee</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {transactions.map((transaction) => (
            <Table.Row key={transaction.id}>
              <Table.RowHeaderCell>
                <Code>{transaction.id}</Code>
              </Table.RowHeaderCell>
              <Table.Cell>
                <Badge color={transaction.type === 'Refund' ? 'orange' : 'blue'}>{transaction.type}</Badge>
              </Table.Cell>
              <Table.Cell justify="end">
                <Text size="2" weight="medium" color={transaction.amount < 0 ? 'red' : undefined}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </Text>
              </Table.Cell>
              <Table.Cell justify="end">
                <Text size="2">${transaction.fee.toFixed(2)}</Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={2}>
              <Text size="2" weight="bold">
                Totals
              </Text>
            </Table.Cell>
            <Table.Cell justify="end">
              <Text size="2" weight="bold">
                ${totalAmount.toFixed(2)}
              </Text>
            </Table.Cell>
            <Table.Cell justify="end">
              <Text size="2" weight="bold">
                ${totalFees.toFixed(2)}
              </Text>
            </Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table.Table>
    </Table.Root>
  );
}
```

### Responsive with Scroll Area

```jsx
function ResponsiveExample() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      department: 'Engineering',
      role: 'Senior Developer',
      joined: '2022-01-15',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      department: 'Design',
      role: 'UX Designer',
      joined: '2022-03-20',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      department: 'Marketing',
      role: 'Marketing Manager',
      joined: '2021-11-10',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      department: 'Sales',
      role: 'Sales Representative',
      joined: '2023-02-05',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Tom Brown',
      email: 'tom@example.com',
      department: 'Engineering',
      role: 'DevOps Engineer',
      joined: '2022-08-12',
      status: 'Inactive',
    },
  ];

  return (
    <ScrollArea className="w-full max-w-[800px]">
      <Table.Root>
        <Table.Table style={{ minWidth: '1000px' }}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell width="50px">#</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="150px">Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="200px">Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="120px">Department</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="150px">Role</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="100px">Joined</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="100px">Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="80px">Actions</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.department}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>{user.joined}</Table.Cell>
                <Table.Cell>
                  <Badge color={user.status === 'Active' ? 'green' : 'gray'}>{user.status}</Badge>
                </Table.Cell>
                <Table.Cell>
                  <IconButton variant="ghost" size="1">
                    <DotsHorizontalIcon />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Table>
      </Table.Root>
    </ScrollArea>
  );
}
```

### With Pagination

```jsx
function PaginationExample() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 3;

  const allUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Developer' },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', role: 'Designer' },
    { id: 6, name: 'Lisa Davis', email: 'lisa@example.com', role: 'Manager' },
  ];

  const totalPages = Math.ceil(allUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = allUsers.slice(startIndex, endIndex);

  return (
    <Table.Root>
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {currentUsers.map((user) => (
            <Table.Row key={user.id}>
              <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <Badge color="blue">{user.role}</Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Table>

      <Table.BottomBar>
        <div className="flex items-center justify-between w-full">
          <Text size="2">
            Showing {startIndex + 1} to {Math.min(endIndex, allUsers.length)} of {allUsers.length} entries
          </Text>

          <div className="flex items-center gap-2">
            <Button
              variant="soft"
              size="1"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'solid' : 'soft'}
                  size="1"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="soft"
              size="1"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </Table.BottomBar>
    </Table.Root>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
function IntegrationExample() {
  return (
    <Card size="3" className="space-y-4">
      <Heading size="4">User Management</Heading>

      <Table.Root className="ring-2 ring-blue-6">
        <Table.Table>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
                <Text size="2" weight="bold" color="blue">
                  Name
                </Text>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <Text size="2" weight="bold" color="blue">
                  Status
                </Text>
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>John Doe</Table.RowHeaderCell>
              <Table.Cell>
                <Badge color="green">Active</Badge>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Table>
      </Table.Root>
    </Card>
  );
}
```

### Typography Components Integration

```jsx
import { Heading, Text } from '@frosted-ui/core';

function TypographyIntegrationExample() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Heading size="4" weight="bold">
          Project Overview
        </Heading>
        <Text size="2" color="gray">
          Current project status and team assignments
        </Text>
      </div>

      <Table.Root>
        <Table.Table>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
                <Text size="2" weight="medium">
                  Project
                </Text>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <Text size="2" weight="medium">
                  Assignee
                </Text>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <Text size="2" weight="medium">
                  Progress
                </Text>
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>
                <Heading size="2">Website Redesign</Heading>
              </Table.RowHeaderCell>
              <Table.Cell>
                <Text size="2">Sarah Johnson</Text>
              </Table.Cell>
              <Table.Cell>
                <Text size="2" color="green" weight="medium">
                  80%
                </Text>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Table>
      </Table.Root>
    </div>
  );
}
```

### Color Support

This component doesn't have built-in color props but integrates perfectly with Frosted UI's color system through background colors, text colors, and child components. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The Table component includes comprehensive accessibility features:

- **Semantic HTML**: Proper table structure with thead, tbody, tfoot
- **Scope Attributes**: Automatic scope="col" and scope="row" on header cells
- **Keyboard Navigation**: Standard table navigation with tab/arrow keys
- **Screen Reader Support**: Proper table announcement and navigation
- **Sortable Headers**: ARIA attributes for sort direction and state
- **Focus Management**: Clear focus indicators on interactive elements

```jsx
function AccessibilityExample() {
  return (
    <div className="space-y-4">
      <Heading size="3" id="users-table">
        User Directory
      </Heading>

      <Table.Root>
        <Table.Table aria-labelledby="users-table">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Full Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Contact Information</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Account Status</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>John Doe</Table.RowHeaderCell>
              <Table.Cell>
                <div>
                  <Text size="2">john@example.com</Text>
                  <Text size="1" color="gray">
                    +1 (555) 123-4567
                  </Text>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Badge color="green">Active</Badge>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Table>
      </Table.Root>
    </div>
  );
}
```

## Advanced Usage

### Dynamic Column Configuration

```jsx
function DynamicColumnsExample() {
  const [visibleColumns, setVisibleColumns] = React.useState(['name', 'email', 'role', 'status']);

  const columnConfig = {
    name: { label: 'Name', width: '200px' },
    email: { label: 'Email', width: '250px' },
    role: { label: 'Role', width: '150px' },
    department: { label: 'Department', width: '150px' },
    status: { label: 'Status', width: '100px' },
    joined: { label: 'Joined', width: '120px' },
  };

  const users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Developer',
      department: 'Engineering',
      status: 'Active',
      joined: '2022-01-15',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Text size="2" weight="medium">
          Visible Columns:
        </Text>
        <Select.Root>
          <Select.Trigger placeholder="Configure columns" variant="soft" size="1" />
          <Select.Content>
            {Object.entries(columnConfig).map(([key, config]) => (
              <Select.Item key={key} value={key} disabled={visibleColumns.includes(key)}>
                {config.label} {visibleColumns.includes(key) && '✓'}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>

      <Table.Root>
        <Table.Table>
          <Table.Header>
            <Table.Row>
              {visibleColumns.map((columnKey) => (
                <Table.ColumnHeaderCell key={columnKey} width={columnConfig[columnKey].width}>
                  {columnConfig[columnKey].label}
                </Table.ColumnHeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user.email}>
                {visibleColumns.map((columnKey) => {
                  const CellComponent = columnKey === 'name' ? Table.RowHeaderCell : Table.Cell;
                  return <CellComponent key={columnKey}>{user[columnKey]}</CellComponent>;
                })}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Table>
      </Table.Root>
    </div>
  );
}
```

## Best Practices

### Do's ✅

- **Use semantic header cells** (ColumnHeaderCell, RowHeaderCell) appropriately
- **Provide consistent alignment** across related columns
- **Use appropriate column widths** for content type
- **Include helpful table captions** or ARIA labels
- **Use bottom bar** for pagination or summary information
- **Keep column headers descriptive** and concise

```jsx
// ✅ Good - Proper semantic structure and alignment
function GoodExample() {
  return (
    <Table.Root>
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Product Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="end">Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">Stock</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Wireless Headphones</Table.RowHeaderCell>
            <Table.Cell justify="end">$129.99</Table.Cell>
            <Table.Cell justify="center">15</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Table>
    </Table.Root>
  );
}
```

### Don'ts ❌

- **Don't use regular cells for headers** - use proper header cell components
- **Don't mix alignment styles** randomly across similar content
- **Don't forget table structure** - always include proper header/body sections
- **Don't make columns too narrow** for their content
- **Don't forget responsive considerations** for wide tables

```jsx
// ❌ Bad - Wrong cell types, inconsistent alignment
function BadExample() {
  return (
    <Table.Root>
      <Table.Table>
        <Table.Body>
          {' '}
          {/* Missing header */}
          <Table.Row>
            <Table.Cell>Name</Table.Cell> {/* Should be ColumnHeaderCell */}
            <Table.Cell justify="end">Price</Table.Cell>
            <Table.Cell justify="start">Stock</Table.Cell> {/* Inconsistent alignment */}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Product</Table.Cell> {/* Should be RowHeaderCell */}
            <Table.Cell justify="start">$99</Table.Cell> {/* Wrong alignment */}
            <Table.Cell justify="center">5</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Table>
    </Table.Root>
  );
}
```

## Related Components

- **[Badge](../badge/badge.ai.md)** - For status indicators in table cells
- **[Button](../button/button.ai.md)** - For table actions and sorting
- **[Checkbox](../checkbox/checkbox.ai.md)** - For row selection
- **[IconButton](../icon-button/icon-button.ai.md)** - For compact table actions
- **[Text](../text/text.ai.md)** - For table cell content
- **[Heading](../heading/heading.ai.md)** - For table titles and headers
- **[ScrollArea](../scroll-area/scroll-area.ai.md)** - For responsive table handling
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text styling
