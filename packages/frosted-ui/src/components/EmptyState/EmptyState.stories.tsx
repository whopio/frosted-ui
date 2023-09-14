import { faPlus } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EmptyState, EmptyStateSizes } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'General/EmptyState',
  component: EmptyState,
  args: {
    size: 'sm',
    title: 'Empty',
    description: 'No data to display.',
    showBorder: true,
  },
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const WithButtons: Story = {
  args: {
    primaryButton: {
      children: 'Create a product',
      leftIcon: faPlus,
    },
    secondaryButton: {
      children: 'Schedule a demo',
    },
  },
};

export const Sizes: Story = {
  argTypes: {
    size: {
      control: false,
    },
  },
  render: (args) => {
    const sizes = Object.values(EmptyStateSizes);
    return (
      <div className="space-y-6">
        {sizes.map((size, i) => (
          <EmptyState key={i} {...args} size={size} />
        ))}
      </div>
    );
  },
};
