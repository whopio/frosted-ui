import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Code, SegmentedControlNav, Text } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/SegmentedControlNav',
  component: SegmentedControlNav.Root,
  args: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControlNav.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 600 }}>
      <SegmentedControlNav.Root {...args}>
        <SegmentedControlNav.Link active={true} href="#">
          Account
        </SegmentedControlNav.Link>
        <SegmentedControlNav.Link href="#">Documents</SegmentedControlNav.Link>
        <SegmentedControlNav.Link href="#">Settings</SegmentedControlNav.Link>
      </SegmentedControlNav.Root>
    </div>
  ),
};

export const RenderProp: Story = {
  name: 'Render Prop (Client-Side Routing)',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
      <Text>
        Use the <Code>render</Code> prop to integrate with your framework&apos;s router for client-side navigation.
      </Text>
      <SegmentedControlNav.Root {...args}>
        <SegmentedControlNav.Link active render={<a href="/account" />}>
          Account
        </SegmentedControlNav.Link>
        <SegmentedControlNav.Link render={<a href="/documents" />}>Documents</SegmentedControlNav.Link>
        <SegmentedControlNav.Link render={<a href="/settings" />}>Settings</SegmentedControlNav.Link>
      </SegmentedControlNav.Root>
      <Text size="1" color="gray">
        In a real app, replace <Code>{'<a />'}</Code> with your router&apos;s Link component, e.g.{' '}
        <Code>{'<NextLink href="/account" />'}</Code> for Next.js.
      </Text>
    </div>
  ),
};
