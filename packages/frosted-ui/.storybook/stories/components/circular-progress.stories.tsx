import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { CircularProgress, Flex } from '../../../src/components';
import { circularProgressPropDefs } from '../../../src/components/circular-progress.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Lab/CircularProgress',
  component: CircularProgress,
  args: {
    size: circularProgressPropDefs.size.default,
    color: circularProgressPropDefs.color.default,
    value: 40,
    max: 100,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: circularProgressPropDefs.size.default,
    color: circularProgressPropDefs.color.default,
  },
  render: (args) => (
    <Flex direction="column" gap="3" style={{ width: 300 }}>
      <CircularProgress {...args} />
    </Flex>
  ),
};

export const Size: Story = {
  args: {
    size: circularProgressPropDefs.size.default,
    color: circularProgressPropDefs.color.default,
  },
  render: (args) => (
    <Flex direction="column" gap="3" style={{ width: 300 }}>
      {circularProgressPropDefs.size.values.map((size) => (
        <CircularProgress {...args} size={size} key={size} />
      ))}
    </Flex>
  ),
};

export const Color: Story = {
  args: {
    size: circularProgressPropDefs.size.default,
  },
  render: (args) => (
    <Flex direction="column" gap="3" style={{ width: 300 }}>
      <CircularProgress {...args} color="indigo" />
      <CircularProgress {...args} color="cyan" />
      <CircularProgress {...args} color="orange" />
      <CircularProgress {...args} color="crimson" />
    </Flex>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  args: {},
  render: (args) => (
    <Flex direction="row" gap="2">
      <Flex direction="column" gap="3" style={{ width: 300 }}>
        <CircularProgress {...args} highContrast={false} />
      </Flex>
      <Flex direction="column" gap="3" style={{ width: 300 }}>
        <CircularProgress {...args} highContrast />
      </Flex>
    </Flex>
  ),
};
