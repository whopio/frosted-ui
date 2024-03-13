import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '@frosted-ui/icons';
import React from 'react';
import { Flex, Tooltip } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Lab/Icons',
  // @ts-ignore
  component: Icons.SparkleRectangle20,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Icons.SparkleRectangle20>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Flex direction="row" style={{ width: 400 }} wrap="wrap">
      {Object.entries(Icons).map(([name, Icon]) => (
        <div style={{ width: '20%', padding: 8 }}>
          <Tooltip key={name} content={name} delayDuration={0}>
            {/* @ts-ignore */}
            <Icon />
          </Tooltip>
        </div>
      ))}
    </Flex>
  ),
};
