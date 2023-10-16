import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Box } from '../../../src/components/box';
import { Checkbox } from '../../../src/components/checkbox';
import { Code } from '../../../src/components/code';
import { Em } from '../../../src/components/em';
import { Flex } from '../../../src/components/flex';
import { Kbd } from '../../../src/components/kbd';
import { Link } from '../../../src/components/link';
import { Text } from '../../../src/components/text';
import { textPropDefs } from '../../../src/components/text.props';

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
    <Flex direction="column" gap="3">
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
    </Flex>
  ),
};

export const Color: Story = {
  render: (args) => (
    <Flex direction="column" gap="3">
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
    </Flex>
  ),
};

export const Align: Story = {
  render: (args) => (
    <Flex direction="column" gap="3" style={{ width: 500 }}>
      <Text {...args} align="left">
        Left-aligned
      </Text>
      <Text {...args} align="center">
        Center-aligned
      </Text>
      <Text {...args} align="right">
        Right-aligned
      </Text>
    </Flex>
  ),
};

export const Trim: Story = {
  render: (args) => (
    <Flex direction="column" gap="3">
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
    </Flex>
  ),
};

export const Formatting: Story = {
  render: (args) => (
    <Text size="5" {...args}>
      Look, such a helpful <Link href="#">link</Link>, an{' '}
      <Em>italic emphasis</Em>, a piece of computer <Code>code</Code>, and even
      a hotkey combination <Kbd>⇧⌘A</Kbd> within the text.
    </Text>
  ),
};

export const FormControls: Story = {
  name: 'With form controls',
  render: (args) => (
    <Box style={{ maxWidth: 300 }}>
      <Text size="3">
        <Flex gap="2">
          <Checkbox defaultChecked /> Composing Text with a form control like
          Checkbox, RadioGroup, or Switch automatically centers the control with
          the first line of text, even when the text is multi-line.
        </Flex>
      </Text>
    </Box>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <Flex direction="column" gap="3">
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
    </Flex>
  ),
};
