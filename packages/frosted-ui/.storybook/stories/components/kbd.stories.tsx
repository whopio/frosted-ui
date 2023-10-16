import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Flex, Kbd } from '../../../src/components/';
import { kbdPropDefs } from '../../../src/components/kbd.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Typography/Kbd',
  component: Kbd,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Shift + Tab',
    size: kbdPropDefs.size.default,
  },
};

export const Size: Story = {
  render: (args) => (
    <Flex direction="column" gap="3">
      <div>
        <Kbd {...args} size="1">
          Shift + Tab
        </Kbd>
      </div>
      <div>
        <Kbd {...args} size="2">
          Shift + Tab
        </Kbd>
      </div>
      <div>
        <Kbd {...args} size="3">
          Shift + Tab
        </Kbd>
      </div>
      <div>
        <Kbd {...args} size="4">
          Shift + Tab
        </Kbd>
      </div>
      <div>
        <Kbd {...args} size="5">
          Shift + Tab
        </Kbd>
      </div>
      <div>
        <Kbd {...args} size="6">
          Shift + Tab
        </Kbd>
      </div>
      <div>
        <Kbd {...args} size="7">
          Shift + Tab
        </Kbd>
      </div>
      <div>
        <Kbd {...args} size="8">
          Shift + Tab
        </Kbd>
      </div>
      <div>
        <Kbd {...args} size="9">
          Shift + Tab
        </Kbd>
      </div>
    </Flex>
  ),
};
