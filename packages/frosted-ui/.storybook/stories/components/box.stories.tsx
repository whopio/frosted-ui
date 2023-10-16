import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Box } from '../../../src/components/box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Layout/Box',
  component: Box,
  args: {
    children: 'Box',
    width: '9',
    height: '9',
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  render: (args) => (
    <Box {...args}>
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'repeating-linear-gradient( 45deg, var(--orange-8), var(--orange-8) 5px, var(--orange-6) 5px, var(--orange-6) 25px )',
        }}
      ></div>
    </Box>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
