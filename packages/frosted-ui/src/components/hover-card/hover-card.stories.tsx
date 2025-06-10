import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Avatar, Heading, HoverCard, Inset, Link, Strong, Text, hoverCardContentPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/HoverCard',
  component: HoverCard.Content,
  args: {},

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: hoverCardContentPropDefs.size.default,
  },
  render: (args) => (
    <Text>
      Follow{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="https://github.com/whopio/frosted-ui" target="_blank">
            frosted-ui
          </Link>
        </HoverCard.Trigger>
        <HoverCard.Content {...args}>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <Avatar size="3" fallback="FUI" />
            <div>
              <Heading size="3" as="h3">
                Frosted UI
              </Heading>
              <Text as="div" size="2" color="gray">
                frosted-ui
              </Text>

              <Text as="div" size="2" style={{ maxWidth: 300, marginTop: 'var(--space-3)' }}>
                React components library built on top of Radix Themes.
              </Text>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>{' '}
      for updates.
    </Text>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">Size one</Link>
        </HoverCard.Trigger>
        <HoverCard.Content {...args} size="1">
          <Text as="div" size="1" style={{ maxWidth: 325 }}>
            <Strong>Typography</Strong> is the art and technique of arranging type to make written language legible,
            readable and appealing when displayed.
          </Text>
        </HoverCard.Content>
      </HoverCard.Root>

      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">Size two</Link>
        </HoverCard.Trigger>
        <HoverCard.Content {...args} size="2">
          <Text as="div" size="2" style={{ maxWidth: 350 }}>
            <Strong>Typography</Strong> is the art and technique of arranging type to make written language legible,
            readable and appealing when displayed.
          </Text>
        </HoverCard.Content>
      </HoverCard.Root>

      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">Size three</Link>
        </HoverCard.Trigger>
        <HoverCard.Content {...args} size="3">
          <Text as="div" size="3" style={{ maxWidth: 400 }}>
            <Strong>Typography</Strong> is the art and technique of arranging type to make written language legible,
            readable and appealing when displayed.
          </Text>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  render: (args) => (
    <Text>
      Technology revolutionized{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">typography</Link>
        </HoverCard.Trigger>

        <HoverCard.Content {...args}>
          <div style={{ display: 'flex' }}>
            <Inset side="left" pr="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?&auto=format&fit=crop&w=300&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  height: '100%',
                  width: 150,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>

            <Text size="2" style={{ maxWidth: 250 }} as="p">
              <Strong>Typography</Strong> is the art and technique of arranging type to make written language legible,
              readable and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes,
              line lengths, line-spacing (leading), and letter-spacing (tracking)…
            </Text>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>{' '}
      in the latter twentieth century.
    </Text>
  ),
};
