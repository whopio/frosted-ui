import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { toast } from '../toast';
import { Toaster } from './Toaster';

const meta: Meta<typeof Toaster> = {
  title: 'General/Toaster',
  component: Toaster,
  args: {},
};
export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Button onClick={() => toast('This is a toast')}>Create toast</Button>
        <Toaster />
      </>
    );
  },
};

export const SuccessToast: Story = {
  render: () => {
    return (
      <>
        <Button onClick={() => toast.success('This is a success toast!')}>
          Create success toast
        </Button>
        <Toaster />
      </>
    );
  },
};

export const ErrorToast: Story = {
  render: () => {
    return (
      <>
        <Button onClick={() => toast.error('This is a error toast!')}>
          Create error toast
        </Button>
        <Toaster />
      </>
    );
  },
};

export const PromiseToast: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toast.promise(
            new Promise((resolve) => {
              setTimeout(resolve, 2000);
            }),
            {
              loading: 'Loading...',
              success: 'Loaded!',
              error: 'Error!',
            },
          )
        }
      >
        Create toast
      </Button>
      <Toaster />
    </>
  ),
};

export const VeryLongMessage: Story = {
  render: () => {
    return (
      <>
        <Button
          onClick={() =>
            toast.success(
              'This is a success toast! It can continue to ramble on forever. Okay, maybe not forever, but longer than typical and this should still look decent.',
            )
          }
        >
          Create success toast
        </Button>
        <Toaster />
      </>
    );
  },
};
