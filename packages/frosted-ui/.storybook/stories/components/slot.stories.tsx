import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Link, Slot, Text } from '../../../src/components';

const CustomButton = ({ asChild, ...props }: { asChild?: boolean; children: React.ReactNode }) => {
  const Comp = asChild ? Slot.Root : 'button';
  return (
    <Comp
      {...props}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--gray-7)',
      }}
    />
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Utilities/Slot',
  component: Slot.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Slot.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <Text>
        Can be used to support your own `asChild` prop. See{' '}
        <Link href="https://www.radix-ui.com/primitives/docs/utilities/slot">Radix UI docs</Link>.
      </Text>
      <div>
        <CustomButton asChild>
          <a href="/contact">Contact</a>
        </CustomButton>
      </div>
    </div>
  ),
};
