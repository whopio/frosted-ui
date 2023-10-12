import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../../../src/components/badge';
import { badgePropDefs } from '../../../src/components/badge.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Badge',
  component: Badge,
  args: {
    children: 'Badge',
    size: badgePropDefs.size.default,
    variant: badgePropDefs.variant.default,
    color: badgePropDefs.color.default,
    highContrast: true,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
