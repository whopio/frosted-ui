import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { TabsNav, tabsNavPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/TabsNav',
  component: TabsNav.Root,
  args: {
    size: tabsNavPropDefs.size.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TabsNav.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 600 }}>
      <TabsNav.Root {...args}>
        <TabsNav.Link active={true} href="#">
          Account
        </TabsNav.Link>
        <TabsNav.Link href="#">Documents</TabsNav.Link>
        <TabsNav.Link href="#">Settings</TabsNav.Link>
      </TabsNav.Root>
    </div>
  ),
};
