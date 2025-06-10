import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AlertDialog, Button, Code, Inset, Table, Text, alertDialogContentPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog.Content,
  args: {
    size: alertDialogContentPropDefs.size.default,
  },

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="classic" color="red">
          Revoke access
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }} {...args}>
        <AlertDialog.Title>Revoke access</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure? This application will no longer be accessible and any existing sessions will be expired.
        </AlertDialog.Description>

        <div
          style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', justifyContent: 'flex-end' }}
        >
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="classic" color="red">
              Revoke access
            </Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="classic" color="red">
            Size 1
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 350 }} {...args} size="1">
          <AlertDialog.Title>Revoke access</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure? This application will no longer be accessible and any existing sessions will be expired.
          </AlertDialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
            <AlertDialog.Cancel>
              <Button size="1" variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button size="1" variant="classic" color="red">
                Revoke access
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="classic" color="red">
            Size 2
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 350 }} size="2">
          <AlertDialog.Title>Revoke access</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure? This application will no longer be accessible and any existing sessions will be expired.
          </AlertDialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
            <AlertDialog.Cancel>
              <Button size="2" variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button size="2" variant="classic" color="red">
                Revoke access
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="classic" color="red">
            Size 3
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 350 }} size="3">
          <AlertDialog.Title>Revoke access</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure? This application will no longer be accessible and any existing sessions will be expired.
          </AlertDialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
            <AlertDialog.Cancel>
              <Button size="2" variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button size="2" variant="classic" color="red">
                Revoke access
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="classic" color="red">
            Size 4
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 350 }} size="4">
          <AlertDialog.Title>Revoke access</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure? This application will no longer be accessible and any existing sessions will be expired.
          </AlertDialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
            <AlertDialog.Cancel>
              <Button size="3" variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button size="3" variant="classic" color="red">
                Revoke access
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)' }}>
      <Text>
        Use the <Code>Inset</Code> component to align content flush with the sides of the dialog (bypassing its
        padding).
      </Text>
      <div>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red" variant="classic">
              Delete users
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content style={{ maxWidth: 500 }} {...args}>
            <AlertDialog.Title>Delete Users</AlertDialog.Title>
            <AlertDialog.Description>
              Are you sure you want to delete these users? This action is permanent and cannot be undone.
            </AlertDialog.Description>

            <Inset side="x" style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-5)' }}>
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

            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button color="red" variant="classic">
                  Delete users
                </Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </div>
  ),
};
