import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Checkbox, Code, Em, Kbd, Link, Text, textPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Typography/Text',
  component: Text,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    size: textPropDefs.size.default,
  },
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text {...args} size="0">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} size="1">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} size="2">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} size="3">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} size="4">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} size="5">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} size="6">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} size="7">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} size="8">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} size="9">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  ),
};

export const Weight: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text {...args} weight="light">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} weight="regular">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} weight="medium">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} weight="semi-bold">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} weight="bold">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text {...args} color="indigo">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} color="cyan">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} color="orange">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} color="crimson">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  ),
};

export const Align: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 500 }}>
      <Text {...args} align="left">
        Left-aligned
      </Text>
      <Text {...args} align="center">
        Center-aligned
      </Text>
      <Text {...args} align="right">
        Right-aligned
      </Text>
    </div>
  ),
};

export const Trim: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text
        {...args}
        trim="normal"
        style={{
          background: 'var(--gray-a2)',
          borderTop: '1px dashed var(--gray-a7)',
          borderBottom: '1px dashed var(--gray-a7)',
        }}
      >
        Without trim
      </Text>
      <Text
        {...args}
        trim="both"
        style={{
          background: 'var(--gray-a2)',
          borderTop: '1px dashed var(--gray-a7)',
          borderBottom: '1px dashed var(--gray-a7)',
        }}
      >
        With trim
      </Text>
    </div>
  ),
};

export const Formatting: Story = {
  render: (args) => (
    <Text size="5" {...args}>
      Look, such a helpful <Link href="#">link</Link>, an <Em>italic emphasis</Em>, a piece of computer{' '}
      <Code>code</Code>, and even a hotkey combination <Kbd>⇧⌘A</Kbd> within the text.
    </Text>
  ),
};

export const FormControls: Story = {
  name: 'With form controls',
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Text size="3" asChild>
        <div style={{ display: 'flex', gap: 12 }}>
          <Checkbox defaultChecked /> Composing Text with a form control like Checkbox, RadioGroup, or Switch
          automatically centers the control with the first line of text, even when the text is multi-line.
        </div>
      </Text>
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text {...args} highContrast color="indigo">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} highContrast color="cyan">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} highContrast color="orange">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text {...args} highContrast color="crimson">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  ),
};
