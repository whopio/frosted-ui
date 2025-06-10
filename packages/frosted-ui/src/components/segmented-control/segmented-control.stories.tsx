import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Drawer, SegmentedControl, Text } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl.List,
  args: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl.List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 'auto' }}>
      <SegmentedControl.Root defaultValue="account">
        <SegmentedControl.List {...args}>
          <SegmentedControl.Trigger value="account">Account</SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="documents">Documents</SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="settings">Settings</SegmentedControl.Trigger>
        </SegmentedControl.List>

        <div style={{ padding: '12px 16px 8px 16px' }}>
          <SegmentedControl.Content value="account">
            <Text size="2">Your account.</Text>
          </SegmentedControl.Content>

          <SegmentedControl.Content value="documents">
            <Text size="2">Your documents.</Text>
          </SegmentedControl.Content>

          <SegmentedControl.Content value="settings">
            <Text size="2">Your profile.</Text>
          </SegmentedControl.Content>
        </div>
      </SegmentedControl.Root>
    </div>
  ),
};
export const InDrawer: Story = {
  name: 'In a drawer',
  render: (args) => (
    <Drawer.Root defaultOpen>
      <Drawer.Trigger>
        <Button>View users</Button>
      </Drawer.Trigger>
      <Drawer.Content style={{ width: 400 }}>
        <Drawer.Header>
          <Drawer.Title>Users</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <SegmentedControl.Root defaultValue="account">
            <SegmentedControl.List {...args}>
              <SegmentedControl.Trigger value="account">Account</SegmentedControl.Trigger>
              <SegmentedControl.Trigger value="documents">Documents</SegmentedControl.Trigger>
              <SegmentedControl.Trigger value="settings">Settings</SegmentedControl.Trigger>
            </SegmentedControl.List>

            <div style={{ padding: '12px 16px 8px 16px' }}>
              <SegmentedControl.Content value="account">
                <Text size="2">Make changes to your account.</Text>
              </SegmentedControl.Content>

              <SegmentedControl.Content value="documents">
                <Text size="2">Access and update your documents.</Text>
              </SegmentedControl.Content>

              <SegmentedControl.Content value="settings">
                <Text size="2">Edit your profile.</Text>
              </SegmentedControl.Content>
            </div>
          </SegmentedControl.Root>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  ),
};
