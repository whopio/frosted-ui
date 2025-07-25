import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Progress, progressPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Progress',
  component: Progress,
  args: {
    size: progressPropDefs.size.default,
    color: progressPropDefs.color.default,
    value: 40,
    max: 100,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: progressPropDefs.size.default,
    color: progressPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 300 }}>
      <Progress {...args} />
    </div>
  ),
};

export const Size: Story = {
  args: {
    size: progressPropDefs.size.default,
    color: progressPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 300 }}>
      <Progress {...args} size="6" />
      <Progress {...args} size="5" />
      <Progress {...args} size="4" />
      <Progress {...args} size="3" />
      <Progress {...args} size="2" />
      <Progress {...args} size="1" />
    </div>
  ),
};

export const Color: Story = {
  args: {
    size: progressPropDefs.size.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 300 }}>
      <Progress {...args} color="indigo" />
      <Progress {...args} color="cyan" />
      <Progress {...args} color="orange" />
      <Progress {...args} color="crimson" />
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--space-2)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 300 }}>
        <Progress {...args} highContrast={false} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 300 }}>
        <Progress {...args} highContrast />
      </div>
    </div>
  ),
};
