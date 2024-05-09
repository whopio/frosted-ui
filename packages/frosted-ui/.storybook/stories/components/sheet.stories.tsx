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
        <Sheet.Title>Edit profile</Sheet.Title>
        <Sheet.Description>Make changes to your profile.</Sheet.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Input
              defaultValue="Freja Johnsen"
              placeholder="Enter your full name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Input
              defaultValue="freja@example.com"
              placeholder="Enter your email"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Sheet.Close>
            <Button variant="soft" color="gray" onClick={() => alert('Cancel')}>
              Cancel
            </Button>
          </Sheet.Close>
          <Sheet.Close>
            <Button onClick={() => alert('Save')}>Save</Button>
          </Sheet.Close>
        </Flex>
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
        <Sheet.Title>Users</Sheet.Title>
        <Sheet.Description>
          The following users have access to this project.
        </Sheet.Description>

        <Inset side="x" my="5">
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
      </Sheet.Content>
    </Sheet.Root>
  ),
};
