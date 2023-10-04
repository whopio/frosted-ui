import { faPlus } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'General/EmptyState',
  component: EmptyState,
  args: {
    size: 'sm',
    title: 'Empty',
    description: 'No data to display.',
    showBorder: true,
  },
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const WithButtons: Story = {
  args: {
    primaryButton: {
      children: 'Create a product',
      leftIcon: faPlus,
    },
    secondaryButton: {
      children: 'Schedule a demo',
    },
  },
};
