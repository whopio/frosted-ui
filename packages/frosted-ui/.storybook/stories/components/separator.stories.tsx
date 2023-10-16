import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Flex, Separator, Text } from '../../../src/components';
import { separatorPropDefs } from '../../../src/components/separator.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Layout/Separator',
  component: Separator,
  args: {
    size: separatorPropDefs.size.default,
    color: separatorPropDefs.color.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Text size="2">
      Tools for building high-quality, accessible UI.
      <Separator {...args} orientation="horizontal" my="3" size="4" />
      <Flex gap="3" align="center">
        Themes
        <Separator {...args} orientation="vertical" />
        Primitives
        <Separator {...args} orientation="vertical" />
        Icons
        <Separator {...args} orientation="vertical" />
        Colors
      </Flex>
    </Text>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="4">
        <Separator {...args} orientation="horizontal" size="4" />
        <Separator {...args} orientation="horizontal" size="3" />
        <Separator {...args} orientation="horizontal" size="2" />
        <Separator {...args} orientation="horizontal" size="1" />
      </Flex>
      <Flex align="center" gap="4" style={{ height: 96 }}>
        <Separator {...args} orientation="vertical" size="4" />
        <Separator {...args} orientation="vertical" size="3" />
        <Separator {...args} orientation="vertical" size="2" />
        <Separator {...args} orientation="vertical" size="1" />
      </Flex>
    </Flex>
  ),
};

export const Color: Story = {
  render: (args) => (
    <Flex direction="column" gap="3">
      <Separator {...args} color="indigo" size="3" />
      <Separator {...args} color="cyan" size="3" />
      <Separator {...args} color="orange" size="3" />
      <Separator {...args} color="crimson" size="3" />
    </Flex>
  ),
};

export const Orientation: Story = {
  render: (args) => (
    <Flex align="center" gap="4">
      <Separator {...args} orientation="horizontal" />
      <Separator {...args} orientation="vertical" />
    </Flex>
  ),
};
