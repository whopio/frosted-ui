import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Link, linkPropDefs } from '../../../src/components';

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Link {...args} size="0" />
      <Link {...args} size="1" />
      <Link {...args} size="2" />
      <Link {...args} size="3" />
      <Link {...args} size="4" />
      <Link {...args} size="5" />
      <Link {...args} size="6" />
      <Link {...args} size="7" />
      <Link {...args} size="8" />
      <Link {...args} size="9" />
    </div>
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 'var(--space-2)' }}>
      <Link {...args} color="indigo" />
      <Link {...args} color="cyan" />
      <Link {...args} color="orange" />
      <Link {...args} color="crimson" />
    </div>
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 'var(--space-2)' }}>
      <Link {...args} underline="auto" />
      <Link {...args} underline="hover" />
      <Link {...args} underline="always" />
    </div>
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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link {...args} />
      <Link {...args} highContrast />
    </div>
  ),
};
