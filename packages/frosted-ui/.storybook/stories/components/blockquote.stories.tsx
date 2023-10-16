import type { Meta, StoryObj } from '@storybook/react';

import { Blockquote } from '../../../src/components/blockquote';
import { blockquotePropDefs } from '../../../src/components/blockquote.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Blockquote',
  component: Blockquote,
  args: {
    children: 'I love how we have the freedom to explore skeuomorphism',
    size: blockquotePropDefs.size.default,
    color: blockquotePropDefs.color.default,
    highContrast: true,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
