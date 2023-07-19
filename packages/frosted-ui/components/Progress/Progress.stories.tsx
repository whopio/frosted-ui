import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'General/Progress',
  component: Progress,
  args: {
    value: 45,
  },
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
  },
};
