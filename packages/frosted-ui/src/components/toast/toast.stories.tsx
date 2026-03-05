import type { Meta, StoryObj } from '@storybook/react';

import { Telephone20 } from '@frosted-ui/icons';
import React from 'react';
import { Avatar, Button, CircularProgress, Code, Heading, IconButton, Text, toast } from '..';
import { Theme } from '../../theme';

const meta = {
  title: 'Components/Toast',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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

export const Warning: Story = {
  render: () => (
    <Button onClick={() => toast.warning('Your session will expire in 5 minutes')}>Show warning toast</Button>
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
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
      <Button
        onClick={() =>
          toast.promise(new Promise<string>((resolve) => setTimeout(() => resolve('Done!'), 2000)), {
            loading: 'Saving changes...',
            success: 'Changes saved successfully',
            error: 'Failed to save changes',
          })
        }
      >
        With Promise
      </Button>
      <Button
        onClick={() =>
          toast.promise(
            async () => {
              await new Promise((r) => setTimeout(r, 2000));
              return 'Done!';
            },
            {
              loading: 'Saving changes...',
              success: 'Changes saved successfully',
              error: 'Failed to save changes',
            },
          )
        }
      >
        With async function
      </Button>
    </div>
  ),
};

export const PromiseError: Story = {
  name: 'Promise Error',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
      <Button
        onClick={() =>
          toast.promise(
            new Promise<string>((_resolve, reject) => setTimeout(() => reject(new Error('Network timeout')), 2000)),
            {
              loading: 'Submitting...',
              success: 'Submitted successfully',
              error: (err: unknown) => `Failed: ${err instanceof globalThis.Error ? err.message : 'Unknown error'}`,
            },
          )
        }
      >
        Failing promise
      </Button>
      <Button
        onClick={() =>
          toast.promise(
            async () => {
              await new Promise((r) => setTimeout(r, 2000));
              throw new Error('Server error');
            },
            {
              loading: 'Submitting...',
              success: 'Submitted successfully',
              error: (err: unknown) => `Failed: ${err instanceof globalThis.Error ? err.message : 'Unknown error'}`,
            },
          )
        }
      >
        Failing async function
      </Button>
    </div>
  ),
};

export const LoadingReplace: Story = {
  name: 'Loading → Replace',
  render: () => {
    function handleClick() {
      const id = toast.loading('Connecting to Telegram channel...');

      setTimeout(() => {
        toast.success('Telegram channel connected successfully', {
          id,
          description: 'You can now start sending messages to the channel.',
        });
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

export const FileUploadProgress: Story = {
  name: 'File Upload with Progress',
  render: () => (
    <Button
      onClick={() =>
        toast.custom(
          ({ Toast, id }) => {
            const [progress, setProgress] = React.useState(0);

            React.useEffect(() => {
              let timeout: ReturnType<typeof setTimeout>;
              const interval = setInterval(() => {
                setProgress((prev) => {
                  const next = Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
                  if (next >= 100) {
                    clearInterval(interval);
                    timeout = setTimeout(() => toast.success('design-system-v2.fig uploaded', { id }), 400);
                  }
                  return next;
                });
              }, 300);
              return () => {
                clearInterval(interval);
                clearTimeout(timeout);
              };
            }, [id]);

            return (
              <Toast.Root>
                <Toast.Content>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <CircularProgress size="3" value={progress} max={100} color="green" />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <Toast.Title>Uploading design-system-v2.fig</Toast.Title>
                      <Toast.Description>
                        {progress}% — {progress < 100 ? 'Uploading…' : 'Finishing up…'}
                      </Toast.Description>
                    </div>
                  </div>
                </Toast.Content>
              </Toast.Root>
            );
          },
          { id: 'file-upload', duration: Infinity },
        )
      }
    >
      Upload file
    </Button>
  ),
};

export const WithAction: Story = {
  name: 'With Action',
  render: () => (
    <Button
      onClick={() => {
        const id = toast.success('Message archived', {
          actionProps: {
            children: 'Undo',
            onClick: () => {
              toast.dismiss(id);
              toast.info('Undo successful');
            },
          },
        });
      }}
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

export const CustomPosition: Story = {
  name: 'Custom Position (per-toast)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Button onClick={() => toast.success('Top left', { position: 'top-left' })}>Top Left</Button>
        <Button onClick={() => toast.info('Top center', { position: 'top-center' })}>Top Center</Button>
        <Button onClick={() => toast.error('Top right', { position: 'top-right' })}>Top Right</Button>
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Button onClick={() => toast.success('Bottom left', { position: 'bottom-left' })}>Bottom Left</Button>
        <Button onClick={() => toast('Bottom center', { position: 'bottom-center' })}>Bottom Center</Button>
        <Button onClick={() => toast.error('Bottom right', { position: 'bottom-right' })}>Bottom Right</Button>
      </div>
    </div>
  ),
};

export const Deduplication: Story = {
  name: 'Deduplication',
  render: () => {
    let errorCount = 0;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div style={{ maxWidth: 480 }}>
          <Text size="2" color="gray">
            Passing an explicit <Code size="1">id</Code> prevents duplicate toasts. If a toast with that ID already
            exists, it updates in place instead of creating a new one and plays a subtle bounce animation so the user
            notices the update. This is useful for recurring events like network errors or polling failures where you
            want one persistent toast rather than a growing stack.
          </Text>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Button
            onClick={() => {
              toast.error('Network disconnected', {
                id: 'network-status',
                description: 'Check your internet connection and try again.',
              });
            }}
          >
            Show network error (deduplicated)
          </Button>
          <Button
            onClick={() => {
              toast.success('Network restored', { id: 'network-status' });
            }}
          >
            Resolve to success (same ID)
          </Button>
          <Button
            onClick={() => {
              errorCount += 1;
              toast.error(`Error #${errorCount}`, {
                description: 'No ID passed — each click adds a new toast.',
              });
            }}
          >
            Without ID (duplicates)
          </Button>
        </div>
      </div>
    );
  },
};

export const DismissAll: Story = {
  name: 'Dismiss All',
  render: () => {
    function spawnToasts() {
      toast.success('File uploaded');
      toast.error('Payment failed');
      toast.info('New comment on your post');
      toast.loading('Syncing data...');
    }

    return (
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Button onClick={spawnToasts}>Add 4 toasts</Button>
        <Button onClick={() => toast.dismissAll()}>Dismiss all</Button>
      </div>
    );
  },
};

export const CustomContent: Story = {
  name: 'Custom Content',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div style={{ maxWidth: 480 }}>
        <Text size="2" color="gray">
          <Code size="1">toast.custom()</Code> accepts a render callback for fully custom toast content. The callback
          receives <Code size="1">{'{ close, id, Toast }'}</Code> where <Code size="1">Toast</Code> provides{' '}
          <Code size="1">Root</Code>, <Code size="1">Content</Code>, <Code size="1">Title</Code>, and{' '}
          <Code size="1">Description</Code> sub-components. Compose them as{' '}
          <Code size="1">{'<Toast.Root><Toast.Content>…</Toast.Content></Toast.Root>'}</Code> to get the standard chrome
          (animations, swipe-to-dismiss, stacking). Use <Code size="1">Toast.Title</Code> and{' '}
          <Code size="1">Toast.Description</Code> for consistent typography. Pass <Code size="1">className</Code> or{' '}
          <Code size="1">style</Code> to any component to restyle it.
        </Text>
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <Button
          onClick={() =>
            toast.custom(
              ({ close, Toast }) => (
                <Theme
                  appearance="dark"
                  render={<Toast.Root showDismissButton={false} style={{ background: 'black', borderRadius: 999 }} />}
                >
                  <Toast.Content>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <Avatar
                        size="3"
                        fallback="Alex Kim"
                        color="blue"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&q=70&crop=faces&fit=crop"
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Heading size="2" weight="medium">
                          Incoming call
                        </Heading>
                        <Text size="1" color="gray">
                          Alex Kim
                        </Text>
                      </div>
                      <div style={{ display: 'flex', gap: 'var(--space-2)', flexShrink: 0 }}>
                        <IconButton
                          aria-label="Decline call"
                          size="3"
                          style={{ borderRadius: 999 }}
                          variant="solid"
                          color="danger"
                          onClick={close}
                        >
                          <Telephone20 style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }} />
                        </IconButton>
                        <IconButton
                          aria-label="Accept call"
                          size="3"
                          style={{ borderRadius: 999 }}
                          color="success"
                          variant="solid"
                          onClick={() => {
                            close();
                            toast.success('Call accepted');
                          }}
                        >
                          <Telephone20 />
                        </IconButton>
                      </div>
                    </div>
                  </Toast.Content>
                </Theme>
              ),
              { duration: Infinity, position: 'top-center', id: 'incoming-call' },
            )
          }
        >
          Incoming call notification
        </Button>
        <Button
          onClick={() =>
            toast.custom(
              ({ close, Toast }) => (
                <Toast.Root>
                  <Toast.Content>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                      <Toast.Title>Update available</Toast.Title>

                      <Toast.Description>Version 2.4.0 is ready. Restart to apply the update.</Toast.Description>
                      <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-1)' }}>
                        <Button size="1" variant="soft" color="gray" onClick={close} style={{ flex: 1 }}>
                          Later
                        </Button>
                        <Button
                          size="1"
                          onClick={() => {
                            close();
                            toast.loading('Restarting...');
                          }}
                          variant="solid"
                          style={{ flex: 1 }}
                        >
                          Restart now
                        </Button>
                      </div>
                    </div>
                  </Toast.Content>
                </Toast.Root>
              ),
              { duration: Infinity },
            )
          }
        >
          App update prompt
        </Button>
        <Button
          onClick={() =>
            toast.custom(
              ({ close, Toast }) => (
                <Toast.Root style={{ background: 'var(--success-3)' }}>
                  <Toast.Content>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <Text size="2" weight="medium" style={{ flex: 1 }}>
                        Deployment successful
                      </Text>
                      <Button size="1" variant="solid" color="success" onClick={close}>
                        View logs
                      </Button>
                    </div>
                  </Toast.Content>
                </Toast.Root>
              ),
              { duration: 8000 },
            )
          }
        >
          Custom styled toast
        </Button>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Button onClick={() => toast.success('Permission saved')}>Success</Button>
      <Button onClick={() => toast.error('Failed to upload image')}>Error</Button>
      <Button onClick={() => toast.warning('Session expires in 5 minutes')}>Warning</Button>
      <Button onClick={() => toast.info('Camera access denied')}>Info</Button>
      <Button onClick={() => toast.loading('Updating...')}>Loading</Button>
      <Button onClick={() => toast('Notification received')}>Default</Button>
    </div>
  ),
};
