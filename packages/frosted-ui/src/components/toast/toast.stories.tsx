import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Toast, toast } from '..';

const meta = {
  title: 'Components/Toast',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Toast.Provider>
        <Story />
      </Toast.Provider>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: () => <Button onClick={() => toast.success('Changes saved successfully')}>Show success toast</Button>,
};

export const ErrorToast: Story = {
  name: 'Error',
  render: () => <Button onClick={() => toast.error('Something went wrong')}>Show error toast</Button>,
};

export const Info: Story = {
  render: () => (
    <Button onClick={() => toast.info('Camera access denied. Call will continue with voice only.')}>
      Show info toast
    </Button>
  ),
};

export const Loading: Story = {
  render: () => <Button onClick={() => toast.loading('Connecting to server...')}>Show loading toast</Button>,
};

export const Default: Story = {
  render: () => <Button onClick={() => toast('A new notification has arrived')}>Show default toast</Button>,
};

export const WithDescription: Story = {
  name: 'With Description',
  render: () => (
    <Button
      onClick={() =>
        toast.error('Error initiating withdrawal', {
          description: 'Insufficient balance in your account. Please try a smaller amount.',
        })
      }
    >
      Show toast with description
    </Button>
  ),
};

export const PromisePattern: Story = {
  name: 'Promise Pattern',
  render: () => {
    function simulateAsync() {
      return new Promise<string>((resolve) => {
        setTimeout(() => resolve('Done!'), 2000);
      });
    }

    return (
      <Button
        onClick={() =>
          toast.promise(simulateAsync(), {
            loading: 'Saving changes...',
            success: 'Changes saved successfully',
            error: 'Failed to save changes',
          })
        }
      >
        Run promise toast
      </Button>
    );
  },
};

export const PromiseError: Story = {
  name: 'Promise Error',
  render: () => {
    function simulateAsyncError() {
      return new Promise<string>((_resolve, reject) => {
        setTimeout(() => reject(new Error('Network timeout')), 2000);
      });
    }

    return (
      <Button
        onClick={() =>
          toast.promise(simulateAsyncError(), {
            loading: 'Submitting...',
            success: 'Submitted successfully',
            error: (err: unknown) =>
              `Failed: ${err instanceof globalThis.Error ? err.message : 'Unknown error'}`,
          })
        }
      >
        Run failing promise toast
      </Button>
    );
  },
};

export const LoadingReplace: Story = {
  name: 'Loading → Replace',
  render: () => {
    function handleClick() {
      const id = toast.loading('Connecting to Telegram channel...');

      setTimeout(() => {
        toast.success('Telegram channel connected successfully', { id });
      }, 2500);
    }

    return <Button onClick={handleClick}>Loading → success</Button>;
  },
};

export const LoadingReplaceError: Story = {
  name: 'Loading → Replace (Error)',
  render: () => {
    function handleClick() {
      const id = toast.loading('Generating stream key...');

      setTimeout(() => {
        toast.error('Failed to generate stream key', { id });
      }, 2500);
    }

    return <Button onClick={handleClick}>Loading → error</Button>;
  },
};

export const WithAction: Story = {
  name: 'With Action',
  render: () => (
    <Button
      onClick={() =>
        toast.success('Message archived', {
          actionProps: {
            children: 'Undo',
            onClick: () => toast.info('Undo successful'),
          },
        })
      }
    >
      Show toast with action
    </Button>
  ),
};

export const CustomDuration: Story = {
  name: 'Custom Duration',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <Button onClick={() => toast.error('This stays for 30 seconds', { duration: 30000 })}>Long duration (30s)</Button>
      <Button onClick={() => toast.success('Quick toast', { duration: 1500 })}>Short duration (1.5s)</Button>
    </div>
  ),
};

const VARYING_DESCRIPTIONS = [
  'This is a short one.',
  'Permission saved.',
  'Your changes have been saved successfully. You can continue editing or close this page.',
  'The file you uploaded exceeds the maximum allowed size of 10MB. Please compress the file or choose a smaller one and try again.',
  'Done!',
  'We encountered an unexpected error while processing your request. Our team has been notified and is looking into the issue. Please try again in a few minutes.',
];

export const VaryingHeights: Story = {
  name: 'Varying Heights',
  render: () => {
    let count = 0;

    function createToast() {
      count += 1;
      const description = VARYING_DESCRIPTIONS[Math.floor(Math.random() * VARYING_DESCRIPTIONS.length)];
      toast.success(`Toast ${count} created`, { description });
    }

    return <Button onClick={createToast}>Create varying height toast</Button>;
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Button onClick={() => toast.success('Permission saved')}>Success</Button>
      <Button onClick={() => toast.error('Failed to upload image')}>Error</Button>
      <Button onClick={() => toast.info('Camera access denied')}>Info</Button>
      <Button onClick={() => toast.loading('Updating...')}>Loading</Button>
      <Button onClick={() => toast('Notification received')}>Default</Button>
    </div>
  ),
};
