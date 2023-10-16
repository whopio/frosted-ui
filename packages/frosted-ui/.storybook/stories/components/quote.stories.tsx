import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Quote, Text } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Typography/Quote',
  component: Quote,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Quote>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Text>
      His famous quote,{' '}
      <Quote>Styles come and go. Good design is a language, not a style</Quote>,
      elegantly summs up Massimo’s philosophy of design.
    </Text>
  ),
};
