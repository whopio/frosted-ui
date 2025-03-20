import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Badge } from '../../../src/components';
import { badgePropDefs } from '../../../src/components/badge.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Badge',
  component: Badge,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Badge',
    size: badgePropDefs.size.default,
    variant: badgePropDefs.variant.default,
    color: badgePropDefs.color.default,
  },
};

export const Size: Story = {
  args: {
    children: 'Badge',
    size: badgePropDefs.size.default,
    variant: badgePropDefs.variant.default,
    color: badgePropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Badge {...args} size="2" />
      <Badge {...args} size="1" />
    </div>
  ),
};

export const Variant: Story = {
  args: {
    children: 'Badge',
    size: badgePropDefs.size.default,
    color: badgePropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Badge {...args} variant="solid" />
      <Badge {...args} variant="soft" />
      <Badge {...args} variant="outline" />
      <Badge {...args} variant="surface" />
    </div>
  ),
};

export const Color: Story = {
  args: {
    children: 'Badge',
    size: badgePropDefs.size.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Badge {...args} color="indigo" />
      <Badge {...args} color="cyan" />
      <Badge {...args} color="orange" />
      <Badge {...args} color="crimson" />
    </div>
  ),
};

export const SemanticColor: Story = {
  name: 'Semantic color',
  args: {
    size: badgePropDefs.size.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Badge {...args} color="info">
        Info
      </Badge>
      <Badge {...args} color="success">
        Success
      </Badge>
      <Badge {...args} color="warning">
        Warning
      </Badge>
      <Badge {...args} color="danger">
        Danger
      </Badge>
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  args: {
    children: 'Badge',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Badge {...args} highContrast={false} variant="solid" />
        <Badge {...args} highContrast={false} variant="soft" />
        <Badge {...args} highContrast={false} variant="outline" />
        <Badge {...args} highContrast={false} variant="surface" />
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Badge {...args} variant="solid" highContrast />
        <Badge {...args} variant="soft" highContrast />
        <Badge {...args} variant="outline" highContrast />
        <Badge {...args} variant="surface" highContrast />
      </div>
    </div>
  ),
};
