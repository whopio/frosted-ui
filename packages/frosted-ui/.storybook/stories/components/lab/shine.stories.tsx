import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Shine } from '../../../../src/components/lab/shine';
// import { calloutRootPropDefs } from '../../../../src/components/lab/shine.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Lab/Shine',
  component: Shine,
  args: {
    puffyness: '2',
    children: (
      <div
        style={{
          fontSize: 92,
          fontWeight: 'bold',
          color: 'pink',
        }}
      >
        🧸☔️ Shine! ✨👻
      </div>
    ),
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Shine>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
