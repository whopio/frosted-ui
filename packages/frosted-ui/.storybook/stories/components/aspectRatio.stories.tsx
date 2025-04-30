import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { AspectRatio } from '../../../src/components/aspectRatio';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    children: (
      <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: 'var(--radius-2)',
        }}
      />
    ),
  },
} satisfies Meta<typeof AspectRatio.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ratio: 1.5,
  },
  render: (args) => (
    <div style={{ width: 300 }}>
      <AspectRatio.Root {...args} />
    </div>
  ),
};
