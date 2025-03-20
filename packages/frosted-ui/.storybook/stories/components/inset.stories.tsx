import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Card, Code, Inset, Text, insetPropDefs } from '../../../src/components/';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Layout/Inset',
  component: Inset,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Inset>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    side: insetPropDefs.side.default,
    clip: insetPropDefs.clip.default,
  },
  render: ({ children, ...args }) => (
    <Card size="2" style={{ maxWidth: 240 }}>
      {/* TODO: "pb" padding doesn't work in this example. Compare to https://www.radix-ui.com/themes/docs/components/inset */}
      <Inset clip="padding-box" side="top" pb="current" {...args}>
        <img
          src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          alt="Bold typography"
          style={{
            display: 'block',
            objectFit: 'cover',
            width: '100%',
            height: 140,
            backgroundColor: 'var(--gray-5)',
          }}
        />
      </Inset>
      <Text as="p" size="3" style={{ marginTop: 12 }}>
        <Code>Inset</Code> component applies a negative margin to allow content to bleed into the surrounding container.
      </Text>
    </Card>
  ),
};
