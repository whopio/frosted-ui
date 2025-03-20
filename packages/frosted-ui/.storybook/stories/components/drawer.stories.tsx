import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Badge, Button, Checkbox, Drawer, Inset, ScrollArea, Table, Text, TextField } from '../../../src/components';
import { drawerContentPropDefs } from '../../../src/components/drawer.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Drawer',
  component: Drawer.Content,
  args: {
    size: drawerContentPropDefs.size.default,
  },

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: ({ children, ...args }) => (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>Edit profile</Button>
      </Drawer.Trigger>

      <Drawer.Content style={{ maxWidth: 400 }} {...args}>
        <Drawer.Header>
          <Drawer.Title>Edit profile</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Text as="p" size="2" style={{ marginBottom: 'var(--space-4)' }}>
            Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
            your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to your
            profile. Make changes
          </Text>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <label>
              <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                Name
              </Text>
              <TextField.Input defaultValue="Freja Johnsen" placeholder="Enter your full name" />
            </label>
            <label>
              <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                Email
              </Text>
              <TextField.Input defaultValue="freja@example.com" placeholder="Enter your email" />
            </label>
          </div>

          <div
            style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', justifyContent: 'flex-end' }}
          >
            <Drawer.Close>
              <Button variant="soft" color="gray" onClick={() => alert('Cancel')}>
                Cancel
              </Button>
            </Drawer.Close>
            <Drawer.Close>
              <Button onClick={() => alert('Save')}>Save</Button>
            </Drawer.Close>
          </div>
        </Drawer.Body>
        <Drawer.StickyFooter>
          <Drawer.Close>
            <Button variant="classic" color="lime" size="4" style={{ width: '100%' }}>
              Subscribe
            </Button>
          </Drawer.Close>
        </Drawer.StickyFooter>
      </Drawer.Content>
    </Drawer.Root>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  render: ({ children, ...args }) => (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>View users</Button>
      </Drawer.Trigger>
      <Drawer.Content style={{ maxWidth: 540 }} {...args}>
        <Drawer.Header>
          <Drawer.Title>Users</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Text as="p">The following users have access to this project.</Text>

          <Inset side="x" style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-5)' }}>
            <Table.Root variant="ghost">
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
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
            <Drawer.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Drawer.Close>
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  ),
};
