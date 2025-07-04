import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Badge, Button, Checkbox, Dialog, Inset, ScrollArea, Table, Text, TextField, dialogContentPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Dialog',
  component: Dialog.Content,
  args: {
    size: dialogContentPropDefs.size.default,
  },

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit profile</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }} {...args}>
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description>Make changes to your profile.</Dialog.Description>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <label>
            <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
              Name
            </Text>
            <TextField.Input defaultValue="Freja Johnsen" placeholder="Enter your full name" />
          </label>
          <label>
            <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
              Email
            </Text>
            <TextField.Input defaultValue="freja@example.com" placeholder="Enter your email" />
          </label>
        </div>

        <div
          style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', justifyContent: 'flex-end' }}
        >
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={() => alert('Cancel')}>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={() => alert('Save')}>Save</Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 1</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} {...args} size="1">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
            <Dialog.Close>
              <Button size="1" variant="soft" color="gray" onClick={() => alert('Cancel')}>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="1" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 2</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} {...args} size="2">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
            <Dialog.Close>
              <Button size="2" variant="soft" color="gray" onClick={() => alert('Cancel')}>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="2" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 3</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} {...args} size="3">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
            <Dialog.Close>
              <Button size="2" variant="soft" color="gray" onClick={() => alert('Cancel')}>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="2" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 4</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} {...args} size="4">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Dialog.Close>
              <Button size="3" variant="soft" color="gray" onClick={() => alert('Cancel')}>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="3" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  render: (args) => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>View users</Button>
      </Dialog.Trigger>
      <Dialog.Content {...args}>
        <Dialog.Title>Users</Dialog.Title>
        <Dialog.Description>The following users have access to this project.</Dialog.Description>

        <Inset side="x" style={{ marginTop: 20 }}>
          <Table.Root variant="ghost" size="1">
            <ScrollArea scrollbars="horizontal">
              <Table.Table>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <Checkbox />
                        Full name
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.RowHeaderCell>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <Checkbox />
                        Danilo Sousa
                      </div>
                    </Table.RowHeaderCell>
                    <Table.Cell>danilo@example.com</Table.Cell>
                    <Table.Cell>
                      <Badge color="green">Developer</Badge>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.RowHeaderCell>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <Checkbox />
                        Zahra Ambessa
                      </div>
                    </Table.RowHeaderCell>
                    <Table.Cell>zahra@example.com</Table.Cell>
                    <Table.Cell>
                      <Badge color="amber">Admin</Badge>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.RowHeaderCell>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <Checkbox />
                        Jasper Eriksson
                      </div>
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
      </Dialog.Content>
    </Dialog.Root>
  ),
};
