import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'General/Avatar',
  component: Avatar,
  args: {
    username: 'Whop',
    src: 'https://pbs.twimg.com/profile_images/1641784443072311298/VhfBDoAT_400x400.jpg',
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const ManualFallback: Story = {
  argTypes: {
    showFallback: {
      control: false,
    },
  },
  args: {
    showFallback: true,
  },
};

export const AutomaticFallback: Story = {
  args: {
    src: 'https://pbs.twimg.com/profile_images/1641784443072311298/VhfBDoAT_400x400.jp',
  },
};

export const Loading: Story = {
  argTypes: {
    isLoading: {
      control: false,
    },
  },
  args: {
    isLoading: true,
  },
};

export const Shape: Story = {
  argTypes: {
    shape: {
      control: false,
    },
  },
  args: {
    shape: 'square',
  },
};

export const Sizes: Story = {
  argTypes: {
    size: {
      control: false,
    },
  },
  render: (args) => {
    const sizes = [16, 24, 32, 40, 48, 56, 64, 72, 80];
    return (
      <div className="flex flex-col items-center space-y-3">
        {sizes.map((size, i) => (
          <Avatar key={i} {...args} size={size} />
        ))}
      </div>
    );
  },
};
