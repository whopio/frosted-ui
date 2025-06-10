import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { AccessibleIcon, IconButton } from '..';

const CrossIcon = () => (
  <svg viewBox="0 0 32 32" width={24} height={24} fill="none" stroke="currentColor">
    <path d="M2 30 L30 2 M30 30 L2 2" />
  </svg>
);

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Utilities/AccessibleIcon',
  component: AccessibleIcon.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AccessibleIcon.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Close',
  },
  render: (args) => (
    <IconButton size="4">
      {/* The accessible label for the icon. This label will be visually
      hidden but announced to screen * reader users, similar to `alt`
      text for `img` tags. */}
      <AccessibleIcon.Root {...args}>
        <CrossIcon />
      </AccessibleIcon.Root>
    </IconButton>
  ),
};
