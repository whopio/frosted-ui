import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  Button,
  Drawer,
  Flex,
  Inset,
  Table,
  Text,
  TextField,
} from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Drawer',
  component: Drawer.Root,
  args: {},

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: ({ children, ...args }) => (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>Edit profile</Button>
      </Drawer.Trigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Edit profile</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Text as="p" size="2" mb="4">
            Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes
            to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile.
            Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes
            to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile.
            Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes
            to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile.
            Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes
            to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile.
            Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes
            to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile.
            Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes
            to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile.
            Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes
            to your profile. Make changes to your profile. Make changes to your
            profile. Make changes to your profile. Make changes to your profile.
            Make changes to your profile. Make changes to your profile. Make
            changes to your profile. Make changes to your profile. Make changes
          </Text>

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
            <Drawer.Close>
              <Button
                variant="soft"
                color="gray"
                onClick={() => alert('Cancel')}
              >
                Cancel
              </Button>
            </Drawer.Close>
            <Drawer.Close>
              <Button onClick={() => alert('Save')}>Save</Button>
            </Drawer.Close>
          </Flex>
        </Drawer.Body>
        <Drawer.StickyFooter>
          <Button variant="classic" size="4" style={{ width: '100%' }}>
            Subscribe
          </Button>
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
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Users</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Text as="p">The following users have access to this project.</Text>

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
            <Drawer.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Drawer.Close>
          </Flex>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  ),
};
