import type { Meta, StoryObj } from '@storybook/react';

import { InfoCircle16 } from '@frosted-ui/icons';
import React from 'react';
import { Callout, Code, Link, Text, calloutRootPropDefs } from '..';
import { RootProps as CalloutRootProps } from '../../../src/components/callout/callout';

const meta = {
  title: 'Components/Callout',
  component: Callout.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Callout.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: calloutRootPropDefs.color.default,
  },
  render: (args: CalloutRootProps) => (
    <Callout.Root {...args}>
      <Callout.Icon>
        <InfoCircle16 />
      </Callout.Icon>
      <Callout.Title>Your trial ends in 3 days</Callout.Title>
      <Callout.Description>
        Upgrade to Pro to keep access to analytics, webhooks, and priority support.
      </Callout.Description>
    </Callout.Root>
  ),
};

export const Color: Story = {
  render: (args: CalloutRootProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Callout.Root {...args} color="blue">
        <Callout.Icon>
          <InfoCircle16 />
        </Callout.Icon>
        <Callout.Title>New feature available</Callout.Title>
        <Callout.Description>You can now accept crypto payments directly from your checkout page.</Callout.Description>
      </Callout.Root>

      <Callout.Root {...args} color="green">
        <Callout.Icon>
          <InfoCircle16 />
        </Callout.Icon>
        <Callout.Title>Payout sent</Callout.Title>
        <Callout.Description>
          Your $1,250.00 payout was deposited to your bank account ending in 4821.
        </Callout.Description>
      </Callout.Root>

      <Callout.Root {...args} color="red">
        <Callout.Icon>
          <InfoCircle16 />
        </Callout.Icon>
        <Callout.Title>Payment failed</Callout.Title>
        <Callout.Description>
          The card on file was declined. Update your billing details to avoid service interruption.
        </Callout.Description>
      </Callout.Root>
    </div>
  ),
};

export const SemanticColor: Story = {
  name: 'Semantic color',
  render: (args: CalloutRootProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Callout.Root {...args} color="info">
        <Callout.Icon>
          <InfoCircle16 />
        </Callout.Icon>
        <Callout.Title>API maintenance scheduled</Callout.Title>
        <Callout.Description>Our REST API will be read-only on March 15 from 2–4 AM UTC.</Callout.Description>
      </Callout.Root>

      <Callout.Root {...args} color="success">
        <Callout.Icon>
          <InfoCircle16 />
        </Callout.Icon>
        <Callout.Title>Store connected</Callout.Title>
        <Callout.Description>Stripe is now linked and ready to accept payments.</Callout.Description>
      </Callout.Root>

      <Callout.Root {...args} color="warning">
        <Callout.Icon>
          <InfoCircle16 />
        </Callout.Icon>
        <Callout.Title>Action required</Callout.Title>
        <Callout.Description>
          Verify your business address by April 1 to continue receiving payouts.
        </Callout.Description>
      </Callout.Root>

      <Callout.Root {...args} color="danger">
        <Callout.Icon>
          <InfoCircle16 />
        </Callout.Icon>
        <Callout.Title>Account restricted</Callout.Title>
        <Callout.Description>Payouts are paused until you submit updated tax documentation.</Callout.Description>
      </Callout.Root>
    </div>
  ),
};

export const AsAlert: Story = {
  name: 'As Alert',

  render: (args: CalloutRootProps) => (
    <>
      <div style={{ maxWidth: 500 }}>
        <Text>
          Add a native{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role" target="_blank">
            WAI-ARIA <Code>alert</Code> role
          </Link>{' '}
          to the callout when the user's immediate attention is required, like when an error message appears. The screen
          reader will be interrupted, announcing the new content immediately.
        </Text>
      </div>
      <br />
      <div style={{ display: 'inline-block' }}>
        <Callout.Root {...args} color="red" role="alert">
          <Callout.Icon>🚨</Callout.Icon>
          <Callout.Title>Unable to load dashboard</Callout.Title>
          <Callout.Description>
            You don&apos;t have permission to view this page. Contact your workspace admin for access.
          </Callout.Description>
        </Callout.Root>
      </div>
    </>
  ),
};
