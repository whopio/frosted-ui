import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  Badge,
  Button,
  Checkbox,
  Dialog,
  Flex,
  Inset,
  ScrollArea,
  Table,
  Text,
  TextField,
  dialogContentPropDefs,
} from '../../../src/components';

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
  render: ({ children, ...args }) => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit profile</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }} {...args}>
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description>Make changes to your profile.</Dialog.Description>

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
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={() => alert('Cancel')}>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={() => alert('Save')}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  ),
};

export const Sizes: Story = {
  render: ({ children, ...args }) => (
    <Flex gap="4">
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 1</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} size="1">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <Flex gap="2" justify="end">
            <Dialog.Close>
              <Button
                size="1"
                variant="soft"
                color="gray"
                onClick={() => alert('Cancel')}
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="1" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 2</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} size="2">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <Flex gap="2" justify="end">
            <Dialog.Close>
              <Button
                size="2"
                variant="soft"
                color="gray"
                onClick={() => alert('Cancel')}
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="2" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 3</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} size="3">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <Flex gap="3" justify="end">
            <Dialog.Close>
              <Button
                size="2"
                variant="soft"
                color="gray"
                onClick={() => alert('Cancel')}
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="2" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 4</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} size="4">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <Flex gap="3" justify="end" align="center">
            <Dialog.Close>
              <Button
                size="3"
                variant="soft"
                color="gray"
                onClick={() => alert('Cancel')}
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="3" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  render: ({ children, ...args }) => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>View users</Button>
      </Dialog.Trigger>
      <Dialog.Content {...args}>
        <Dialog.Title>Users</Dialog.Title>
        <Dialog.Description>
          The following users have access to this project.
        </Dialog.Description>

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
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Close
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  ),
};
