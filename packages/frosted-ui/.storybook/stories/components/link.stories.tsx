import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Flex, Link } from '../../../src/components';
import { linkPropDefs } from '../../../src/components/link.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Typography/Link',
  component: Link,
  args: {
    children: 'Frosted-UI',
    href: 'https://storybook.whop.dev/',
    target: '_blank',
    color: linkPropDefs.color.default,
    size: linkPropDefs.size.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};

export const Size: Story = {
  args: {
    children: 'Frosted-UI',
    href: 'https://storybook.whop.dev/',
    target: '_blank',
    color: linkPropDefs.color.default,
  },
  render: (args) => (
    <Flex direction="column" gap="3">
      <Link {...args} size="1" />
      <Link {...args} size="2" />
      <Link {...args} size="3" />
      <Link {...args} size="4" />
      <Link {...args} size="5" />
      <Link {...args} size="6" />
      <Link {...args} size="7" />
      <Link {...args} size="8" />
      <Link {...args} size="9" />
    </Flex>
  ),
};

export const Color: Story = {
  args: {
    children: 'Frosted-UI',
    href: 'https://storybook.whop.dev/',
    target: '_blank',
    color: linkPropDefs.color.default,
  },
  render: (args) => (
    <Flex direction="column" align="start" gap="2">
      <Link {...args} color="indigo" />
      <Link {...args} color="cyan" />
      <Link {...args} color="orange" />
      <Link {...args} color="crimson" />
    </Flex>
  ),
};

export const Underline: Story = {
  args: {
    children: 'Frosted-UI',
    href: 'https://storybook.whop.dev/',
    target: '_blank',
    color: linkPropDefs.color.default,
  },
  render: (args) => (
    <Flex direction="column" align="start" gap="2">
      <Link {...args} underline="auto" />
      <Link {...args} underline="hover" />
      <Link {...args} underline="always" />
    </Flex>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  args: {
    children: 'Frosted-UI',
    href: 'https://storybook.whop.dev/',
    target: '_blank',
    color: linkPropDefs.color.default,
  },
  render: (args) => (
    <Flex direction="column">
      <Link {...args} />
      <Link {...args} highContrast />
    </Flex>
  ),
};
