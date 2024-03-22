import type { Meta, StoryObj } from '@storybook/react';

import { Monitor20, Moon20, Sun20 } from '@frosted-ui/icons';
import React from 'react';
import { SegmentedControlRadioGroup } from '../../../src/components';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/SegmentedControlRadioGroup',
  component: SegmentedControlRadioGroup.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControlRadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <SegmentedControlRadioGroup.Root
      defaultValue="system"
      {...args}
      onValueChange={(value) => console.log('🟢 onValueChange ', value)}
    >
      <SegmentedControlRadioGroup.Item value="system">
        {/* @ts-expect-error -- fix types in frosted icons */}
        <Monitor20 />
      </SegmentedControlRadioGroup.Item>
      <SegmentedControlRadioGroup.Item value="light-mode">
        {/* @ts-expect-error -- fix types in frosted icons */}
        <Sun20 />
      </SegmentedControlRadioGroup.Item>
      <SegmentedControlRadioGroup.Item value="dark-mode">
        {/* @ts-expect-error -- fix types in frosted icons */}
        <Moon20 />
      </SegmentedControlRadioGroup.Item>
    </SegmentedControlRadioGroup.Root>
  ),
};
