import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  AlertDialog,
  Button,
  Code,
  Flex,
  Inset,
  Table,
  Text,
} from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog.Root,
  args: {},

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: ({ children, ...args }) => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="classic" color="red">
          Revoke access
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title mb="3">Revoke access</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This application will no longer be accessible and any
          existing sessions will be expired.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red">
              Revoke access
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  render: ({ children, ...args }) => (
    <Flex direction="column" align={'center'} gap="6">
      <Text>
        Use the <Code>Inset</Code> component to align content flush with the
        sides of the dialog (bypassing its padding).
      </Text>
      <div>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red" variant="classic">
              Delete users
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content style={{ maxWidth: 500 }}>
            <AlertDialog.Title>Delete Users</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Are you sure you want to delete these users? This action is
              permanent and cannot be undone.
            </AlertDialog.Description>

            <Inset side="x" my="5">
              <Table.Root>
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
                    <Table.Cell>Developer</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                    <Table.Cell>zahra@example.com</Table.Cell>
                    <Table.Cell>Admin</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Inset>

            <Flex gap="3" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button color="red">Delete users</Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </Flex>
  ),
};
