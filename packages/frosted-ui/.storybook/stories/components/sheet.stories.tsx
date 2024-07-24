import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  Badge,
  Button,
  Checkbox,
  Flex,
  Inset,
  ScrollArea,
  Sheet,
  Table,
  Text,
  TextField,
} from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Sheet',
  component: Sheet.Content,
  args: {
    // size: dialogContentPropDefs.size.default,
  },

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: ({ children, ...args }) => (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>Edit profile</Button>
      </Sheet.Trigger>

      <Sheet.Content {...args}>
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>Make changes to your profile.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Name
              </Text>
              <TextField.Input
                size="3"
                defaultValue="Freja Johnsen"
                placeholder="Enter your full name"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email
              </Text>
              <TextField.Input
                size="3"
                defaultValue="freja@example.com"
                placeholder="Enter your email"
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Sheet.Close>
              <Button
                variant="soft"
                color="gray"
                onClick={() => alert('Cancel')}
              >
                Cancel
              </Button>
            </Sheet.Close>
            <Sheet.Close>
              <Button onClick={() => alert('Save')}>Save</Button>
            </Sheet.Close>
          </Flex>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const Nested: Story = {
  render: ({ children, ...args }) => (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>Edit profile</Button>
      </Sheet.Trigger>

      <Sheet.Content {...args}>
        <Sheet.Header>
          <Sheet.Title>Message request</Sheet.Title>
          <Sheet.Description>Artur wants to message you</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Flex gap="3" mt="4" justify="end">
            <Sheet.NestedRoot>
              <Sheet.Trigger>
                <Button variant="soft" color="danger">
                  Block
                </Button>
              </Sheet.Trigger>
              <Sheet.Content>
                <Sheet.Header>
                  <Sheet.Title>
                    Are you sure you want to block Artur?
                  </Sheet.Title>
                  <Sheet.Description>
                    Artur won't be able to message you unless you unblock him.
                  </Sheet.Description>
                </Sheet.Header>
                <Sheet.Body>
                  <Flex gap="3" mt="4" justify="end">
                    <Sheet.Close>
                      <Button size="3">Cancel</Button>
                    </Sheet.Close>
                    <Sheet.Close>
                      <Button variant="classic" color="danger" size="3">
                        Block
                      </Button>
                    </Sheet.Close>
                  </Flex>
                </Sheet.Body>
              </Sheet.Content>
            </Sheet.NestedRoot>
            <Sheet.Close>
              <Button onClick={() => alert('Save')}>Save</Button>
            </Sheet.Close>
          </Flex>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  render: ({ children, ...args }) => (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>View users</Button>
      </Sheet.Trigger>
      <Sheet.Content {...args}>
        <Sheet.Header>
          <Sheet.Title>Users</Sheet.Title>
          <Sheet.Description>
            The following users have access to this project.
          </Sheet.Description>
        </Sheet.Header>

        <Sheet.Body>
          <Inset side="x" mb="4">
            <Table.Root variant="ghost" size="1">
              <ScrollArea scrollbars="horizontal">
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
              </ScrollArea>
            </Table.Root>
          </Inset>

          <Flex gap="3" justify="end">
            <Sheet.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Sheet.Close>
          </Flex>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const ScrollableContent: Story = {
  name: 'Scrollable content',
  render: ({ children, ...args }) => (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>View users</Button>
      </Sheet.Trigger>
      <Sheet.Content {...args}>
        <Sheet.Header>
          <Sheet.Title>Users</Sheet.Title>
          <Sheet.Description>
            The following users have access to this project.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Inset
            side="all"
            px="current"
            pt="current"
            style={{
              flex: 1,
              overflowY: 'auto',
              borderTop: '1px solid vaR(--gray-a4)',
              borderBottom: '1px solid vaR(--gray-a4)',
            }}
          >
            <Text as="p" size="2" mb="4">
              Make changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes
            </Text>
            <Text as="p" size="2" mb="4">
              Make changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes
            </Text>
            <Text as="p" size="2" mb="4">
              Make changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes to your profile. Make
              changes to your profile. Make changes
            </Text>
          </Inset>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const Controlled: Story = {
  name: 'Controlled (non dismissable)',
  render: ({ children, ...args }) => {
    const [open, setOpen] = React.useState(false);

    return (
      <Sheet.Root dismissible={false} open={open}>
        <Sheet.Trigger onClick={() => setOpen(true)}>
          <Button>Delete account</Button>
        </Sheet.Trigger>
        <Sheet.Content {...args}>
          <Sheet.Header>
            <Sheet.Title>Delete account</Sheet.Title>
            <Sheet.Description color="gray">
              Are you sure you want to delete your account?
            </Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
            <Flex direction="column" gap="3" style={{ width: '100%' }}>
              <Sheet.Close onClick={() => setOpen(false)}>
                <Button variant="surface" style={{ width: '100%' }} size="3">
                  Cancel
                </Button>
              </Sheet.Close>
              <Sheet.Close onClick={() => setOpen(false)}>
                <Button
                  variant="classic"
                  color="danger"
                  style={{ width: '100%' }}
                  size="3"
                >
                  Delete account
                </Button>
              </Sheet.Close>
            </Flex>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet.Root>
    );
  },
};

// TODO: add support for snapPoints
// export const SnapPoints: Story = {
//   name: 'Snap points',
//   render: ({ children, ...args }) => {
//     const snapPoints = ['120px', '240px', 1];
//     const [snap, setSnap] = React.useState<string | number | null>('420px');

//     return (
//       <Sheet.Root
//       snapPoints={snapPoints}
//       activeSnapPoint={snap}
//       setActiveSnapPoint={(a) => console.log({ a })}
//       >
//         <Sheet.Trigger>
//           <Button>Open Sheet</Button>
//         </Sheet.Trigger>
//         <Sheet.Content {...args}>
//           <Sheet.Header>
//             <Sheet.Title>Delete account</Sheet.Title>
//             <Sheet.Description>
//               Are you sure you want to delete your account?
//             </Sheet.Description>
//           </Sheet.Header>
//           <Sheet.Body>
//             <div style={{ height: 120, width: '100%', background: 'red' }} />
//             <div style={{ height: 120, width: '100%', background: 'blue' }} />
//             <div style={{ height: 260, width: '100%', background: 'green' }} />
//           </Sheet.Body>
//         </Sheet.Content>
//       </Sheet.Root>
//     );
//   },
// };
