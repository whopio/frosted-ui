import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '@frosted-ui/icons';
import React from 'react';
import { Flex, Tooltip } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Lab/Icons',
  component: Icons.Store20,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Icons.Store20>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Flex direction="column" gap="5">
      {Object.entries(Icons).map(([name, Icon]) => (
        <Tooltip key={name} content={name}>
          <Icon />
        </Tooltip>
      ))}
    </Flex>
  ),
};
