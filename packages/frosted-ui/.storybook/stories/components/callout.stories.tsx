import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Callout, CalloutRootProps } from '../../../src/components/callout';
import { calloutRootPropDefs } from '../../../src/components/callout.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Callout',
  component: Callout.Root,
  args: {
    color: calloutRootPropDefs.color.default,
    highContrast: true,
    children: 'Please upgrade to the newest version of Frosted UI.',
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  render: ({ children, ...args }: CalloutRootProps) => (
    <Callout.Root {...args}>
      <Callout.Icon>i</Callout.Icon>
      <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Callout.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
