import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Box, Tabs, Text } from '../../../src/components';
import { tabsListPropDefs } from '../../../src/components/tabs.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Tabs',
  component: Tabs.List,
  args: {
    size: tabsListPropDefs.size.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs.List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// TODO: Tabs content jumping in size due to font-weight change
// This doesn't happen in Frosted UI (might be due to a font in use?)
export const Default: Story = {
  render: (args) => (
    <div style={{ width: 600 }}>
      <Tabs.Root defaultValue="account">
        <Tabs.List {...args}>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="account">
            <Text size="2">Make changes to your account.</Text>
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="settings">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  ),
};
