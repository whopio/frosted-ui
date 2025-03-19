import type { StoryObj } from '@storybook/react';

import React from 'react';
import { Text } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Utilities/Scrollbars',
  //   component: AccessibleIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <Text>Frosted-UI comes with custom styles for native CSS scrollbars:</Text>
      <div
        style={{
          width: 400,
          height: 400,
          overflowY: 'auto',
          border: '1px solid var(--gray-a5)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: 1000,

            //   background: 'var(--gray-a3)'
          }}
        ></div>
      </div>
      <div
        style={{
          width: 400,
          height: 400,
          overflowX: 'auto',
          border: '1px solid var(--gray-a5)',
        }}
      >
        <div
          style={{
            width: 1000,
            height: '100%',

            //   background: 'var(--gray-a3)'
          }}
        ></div>
      </div>
      <div
        style={{
          width: 400,
          height: 400,
          overflow: 'auto',
          border: '1px solid var(--gray-a5)',
        }}
      >
        <div
          style={{
            width: 1000,
            height: 1000,

            // background: 'var(--gray-a3)'
          }}
        ></div>
      </div>
    </div>
  ),
};
