import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '../../lib/classnames';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'General/Skeleton',
  component: Skeleton,
  args: {
    className: undefined,
  },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: 'h-4 w-full',
  },
};

export const ComponentExample: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Skeleton className={cn('h-12 w-12 rounded-full', args.className)} />
      <div className="space-y-2">
        <Skeleton className={cn('h-4 w-[250px]', args.className)} />
        <Skeleton className={cn('h-4 w-[200px]', args.className)} />
      </div>
    </div>
  ),
};
