import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Code, TabsNav, tabsNavPropDefs, Text } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/TabsNav',
  component: TabsNav.Root,
  args: {
    size: tabsNavPropDefs.size.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TabsNav.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 600 }}>
      <TabsNav.Root {...args}>
        <TabsNav.Link active={true} href="#">
          Account
        </TabsNav.Link>
        <TabsNav.Link href="#">Documents</TabsNav.Link>
        <TabsNav.Link href="#">Settings</TabsNav.Link>
      </TabsNav.Root>
    </div>
  ),
};

export const RenderProp: Story = {
  name: 'Render Prop (Client-Side Routing)',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 600 }}>
      <Text>
        Use the <Code>render</Code> prop to integrate with your framework&apos;s router for client-side navigation. This
        is useful for frameworks like Next.js, React Router, or Remix.
      </Text>
      <TabsNav.Root {...args}>
        <TabsNav.Link render={<a href="/account" />}>Account</TabsNav.Link>
        <TabsNav.Link render={<a href="/documents" />}>Documents</TabsNav.Link>
        <TabsNav.Link
          active
          render={({ children, ...props }) => (
            <a href="/settings" {...props}>
              {children}
            </a>
          )}
        >
          Settings
        </TabsNav.Link>
      </TabsNav.Root>
      <Text size="1" color="gray">
        In a real app, replace <Code>{'<a />'}</Code> with your router&apos;s Link component, e.g.{' '}
        <Code>{'<NextLink href="/account" />'}</Code> for Next.js.
      </Text>
    </div>
  ),
};
