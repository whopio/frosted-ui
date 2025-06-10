import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading, headingPropDefs } from '../../../src/components/heading';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    size: headingPropDefs.size.default,
  },
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Heading {...args} size="0">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} size="1">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} size="2">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} size="3">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} size="4">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} size="5">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} size="6">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} size="7">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} size="8">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} size="9">
        The quick brown fox jumps over the lazy dog.
      </Heading>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Heading {...args} color="indigo">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} color="cyan">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} color="orange">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} color="crimson">
        The quick brown fox jumps over the lazy dog.
      </Heading>
    </div>
  ),
};

export const Align: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 500 }}>
      <Heading {...args} align="left">
        Left-aligned
      </Heading>
      <Heading {...args} align="center">
        Center-aligned
      </Heading>
      <Heading {...args} align="right">
        Right-aligned
      </Heading>
    </div>
  ),
};

export const Trim: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Heading
        {...args}
        trim="normal"
        style={{
          background: 'var(--gray-a2)',
          borderTop: '1px dashed var(--gray-a7)',
          borderBottom: '1px dashed var(--gray-a7)',
        }}
      >
        Without trim
      </Heading>
      <Heading
        {...args}
        trim="both"
        style={{
          background: 'var(--gray-a2)',
          borderTop: '1px dashed var(--gray-a7)',
          borderBottom: '1px dashed var(--gray-a7)',
        }}
      >
        With trim
      </Heading>
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Heading {...args} highContrast color="indigo">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} highContrast color="cyan">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} highContrast color="orange">
        The quick brown fox jumps over the lazy dog.
      </Heading>
      <Heading {...args} highContrast color="crimson">
        The quick brown fox jumps over the lazy dog.
      </Heading>
    </div>
  ),
};
