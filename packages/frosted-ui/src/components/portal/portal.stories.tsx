import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Theme } from '../../theme';
import { Button } from '../button';
import { Card } from '../card';
import { Heading } from '../heading';
import { Text } from '../text';
import { Portal } from './portal';

const meta: Meta<typeof Portal> = {
  title: 'Components/Portal',
  component: Portal,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Portal>;

export const Default: Story = {
  name: 'Default',
  render: () => {
    const [show, setShow] = React.useState(false);

    return (
      <div>
        <Text render={<p />} style={{ marginBottom: 16 }}>
          Click the button to render content at the end of document.body via Portal.
        </Text>
        <Button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Portal Content</Button>

        {show && (
          <Portal>
            <div
              style={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                padding: 16,
                backgroundColor: 'var(--color-panel-solid)',
                borderRadius: 'var(--radius-3)',
                boxShadow: 'var(--shadow-5)',
                zIndex: 1000,
              }}
            >
              <Text weight="medium">This content is portaled to document.body!</Text>
            </div>
          </Portal>
        )}
      </div>
    );
  },
};

export const CustomContainer: Story = {
  name: 'Custom Container',
  render: () => {
    const [show, setShow] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
      <div style={{ display: 'flex', gap: 24 }}>
        <div style={{ flex: 1 }}>
          <Heading size="3" style={{ marginBottom: 12 }}>
            Source
          </Heading>
          <Text render={<p />} style={{ marginBottom: 16 }}>
            Content will be portaled to the container on the right.
          </Text>
          <Button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Portal Content</Button>

          {show && (
            <Portal container={containerRef.current}>
              <Card style={{ marginTop: 12 }}>
                <Text weight="medium">I was rendered here via Portal!</Text>
                <Text render={<p />} size="2" color="gray" style={{ marginTop: 8 }}>
                  Even though my component is defined on the left, I appear in the custom container.
                </Text>
              </Card>
            </Portal>
          )}
        </div>

        <div
          ref={containerRef}
          style={{
            flex: 1,
            minHeight: 200,
            padding: 16,
            border: '2px dashed var(--gray-6)',
            borderRadius: 'var(--radius-3)',
          }}
        >
          <Heading size="3" style={{ marginBottom: 12 }}>
            Target Container
          </Heading>
          <Text size="2" color="gray">
            Portal content will appear here
          </Text>
        </div>
      </div>
    );
  },
};

export const WithRenderProp: Story = {
  name: 'With Render Prop',
  render: () => {
    const [show, setShow] = React.useState(false);

    return (
      <div>
        <Text render={<p />} style={{ marginBottom: 16 }}>
          Use the <code>render</code> prop to customize the portal wrapper element.
        </Text>
        <Button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Portal</Button>

        {show && (
          <Portal
            render={<aside aria-label="Notification" role="alert" />}
            style={{
              position: 'fixed',
              top: 20,
              right: 20,
              padding: 16,
              backgroundColor: 'var(--accent-9)',
              color: 'var(--accent-contrast)',
              borderRadius: 'var(--radius-3)',
              boxShadow: 'var(--shadow-5)',
              zIndex: 1000,
            }}
          >
            <Text weight="medium" style={{ color: 'inherit' }}>
              This portal renders as an &lt;aside&gt; element!
            </Text>
          </Portal>
        )}
      </div>
    );
  },
};

export const ModalExample: Story = {
  name: 'Modal Example',
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div>
        <Text render={<p />} style={{ marginBottom: 16 }}>
          A simple modal built with Portal. In practice, use the Dialog component for accessible modals.
        </Text>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>

        {open && (
          <>
            {/* Backdrop */}
            <Portal
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
              }}
              onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <Portal
              render={<Theme render={<div role="dialog" aria-modal="true" />} />}
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1000,
              }}
            >
              <Card size="3" style={{ width: 400, maxWidth: '90vw' }}>
                <Heading size="4" style={{ marginBottom: 8 }}>
                  Modal Title
                </Heading>
                <Text render={<p />} color="gray" style={{ marginBottom: 16 }}>
                  This modal is built with two Portal components - one for the backdrop and one for the content.
                </Text>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                  <Button variant="soft" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setOpen(false)}>Confirm</Button>
                </div>
              </Card>
            </Portal>
          </>
        )}
      </div>
    );
  },
};

export const ToastNotifications: Story = {
  name: 'Toast Notifications',
  render: () => {
    const [toasts, setToasts] = React.useState<string[]>([]);

    const addToast = () => {
      const id = Date.now().toString();
      setToasts((prev) => [...prev, id]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t !== id));
      }, 3000);
    };

    return (
      <div>
        <Text render={<p />} style={{ marginBottom: 16 }}>
          Click the button to show toast notifications. Each toast auto-dismisses after 3 seconds.
        </Text>
        <Button onClick={addToast}>Show Toast</Button>

        <Portal>
          <div
            style={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              zIndex: 1000,
            }}
          >
            {toasts.map((id, index) => (
              <div
                key={id}
                style={{
                  padding: '12px 16px',
                  backgroundColor: 'var(--color-panel-solid)',
                  borderRadius: 'var(--radius-3)',
                  boxShadow: 'var(--shadow-4)',
                  animation: 'fadeIn 0.2s ease-out',
                }}
              >
                <Text size="2">Toast notification #{index + 1}</Text>
              </div>
            ))}
          </div>
        </Portal>
      </div>
    );
  },
};
