import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Grid } from '../../../src/components/grid';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Layout/Grid',
  component: Grid,
  args: {
    width: 'auto',
    columns: '3',
    // rows: '2',
    gapX: '3',
    gapY: '6',
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  render: (args) => (
    <Grid {...args}>
      <div style={{ width: 50, height: 50, flexShrink: 0 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background:
              'repeating-linear-gradient( 45deg, var(--orange-8), var(--orange-8) 5px, var(--orange-6) 5px, var(--orange-6) 25px )',
          }}
        ></div>
      </div>
      <div style={{ width: 50, height: 50, flexShrink: 0 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background:
              'repeating-linear-gradient( 45deg, var(--orange-8), var(--orange-8) 5px, var(--orange-6) 5px, var(--orange-6) 25px )',
          }}
        ></div>
      </div>
      <div style={{ width: 50, height: 50, flexShrink: 0 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background:
              'repeating-linear-gradient( 45deg, var(--orange-8), var(--orange-8) 5px, var(--orange-6) 5px, var(--orange-6) 25px )',
          }}
        ></div>
      </div>
      <div style={{ width: 50, height: 50, flexShrink: 0 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background:
              'repeating-linear-gradient( 45deg, var(--orange-8), var(--orange-8) 5px, var(--orange-6) 5px, var(--orange-6) 25px )',
          }}
        ></div>
      </div>
      <div style={{ width: 50, height: 50, flexShrink: 0 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background:
              'repeating-linear-gradient( 45deg, var(--orange-8), var(--orange-8) 5px, var(--orange-6) 5px, var(--orange-6) 25px )',
          }}
        ></div>
      </div>
      <div style={{ width: 50, height: 50, flexShrink: 0 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background:
              'repeating-linear-gradient( 45deg, var(--orange-8), var(--orange-8) 5px, var(--orange-6) 5px, var(--orange-6) 25px )',
          }}
        ></div>
      </div>
    </Grid>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
