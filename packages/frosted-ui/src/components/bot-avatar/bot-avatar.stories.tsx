import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BotAvatar } from '..';
import { botAvatarShapes } from './bot-avatar.shapes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/BotAvatar',
  component: BotAvatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof BotAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'blue',
    shape: 'sunny',
  },
};

export const Shape: Story = {
  args: {
    color: 'blue',
    size: '5',
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: 'var(--space-4)',
      }}
    >
      {botAvatarShapes.map((shape) => (
        <BotAvatar key={shape} {...args} shape={shape} />
      ))}
    </div>
  ),
};

export const Size: Story = {
  args: {
    color: 'blue',
    shape: 'cookie-9',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      <BotAvatar {...args} size="0" />
      <BotAvatar {...args} size="1" />
      <BotAvatar {...args} size="2" />
      <BotAvatar {...args} size="3" />
      <BotAvatar {...args} size="4" />
      <BotAvatar {...args} size="5" />
      <BotAvatar {...args} size="6" />
      <BotAvatar {...args} size="7" />
      <BotAvatar {...args} size="8" />
      <BotAvatar {...args} size="9" />
    </div>
  ),
};

export const Color: Story = {
  args: {
    shape: 'flower',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <BotAvatar {...args} color="indigo" />
      <BotAvatar {...args} color="cyan" />
      <BotAvatar {...args} color="orange" />
      <BotAvatar {...args} color="crimson" />
    </div>
  ),
};

export const HighContrast: Story = {
  args: {
    shape: 'clover-4',
  },
  render: (args) => (
    <div style={{ display: 'inline-grid', gridTemplateRows: 'repeat(2, 1fr)', gap: '8px', gridAutoFlow: 'column' }}>
      <BotAvatar {...args} color="indigo" />
      <BotAvatar {...args} color="indigo" highContrast />
      <BotAvatar {...args} color="cyan" />
      <BotAvatar {...args} color="cyan" highContrast />
      <BotAvatar {...args} color="orange" />
      <BotAvatar {...args} color="orange" highContrast />
      <BotAvatar {...args} color="crimson" />
      <BotAvatar {...args} color="crimson" highContrast />
    </div>
  ),
};
