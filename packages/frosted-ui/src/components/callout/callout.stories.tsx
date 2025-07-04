import type { Meta, StoryObj } from '@storybook/react';

import { InfoCircle16 } from '@frosted-ui/icons';
import React from 'react';
import { Callout, Code, Link, Text, calloutRootPropDefs } from '..';
import { RootProps as CalloutRootProps } from '../../../src/components/callout/callout';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Callout',
  component: Callout.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Callout.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    color: calloutRootPropDefs.color.default,
    variant: calloutRootPropDefs.variant.default,
    children: (
      <>
        You will need to upgrade to the <Link href="#">newest Frosted-UI version</Link> now.
      </>
    ),
  },
  render: ({ children, ...args }: CalloutRootProps) => (
    <Callout.Root {...args}>
      <Callout.Icon>
        {/* @ts-expect-error -- fix frosted icon types */}
        <InfoCircle16 />
      </Callout.Icon>
      <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  ),
};

export const Size: Story = {
  args: {
    color: calloutRootPropDefs.color.default,
    variant: calloutRootPropDefs.variant.default,
    children: (
      <>
        You will need to upgrade to the <Link href="#">newest Frosted-UI version</Link> now.
      </>
    ),
  },
  render: ({ children, ...args }: CalloutRootProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
      <Callout.Root {...args} size="3">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>

      <Callout.Root {...args} size="2">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>

      <Callout.Root {...args} size="1">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>
    </div>
  ),
};

export const Variant: Story = {
  args: {
    color: calloutRootPropDefs.color.default,
    children: (
      <>
        You will need to upgrade to the <Link href="#">newest Frosted-UI version</Link> now.
      </>
    ),
  },
  render: ({ children, ...args }: CalloutRootProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Callout.Root {...args} variant="soft">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>

      <Callout.Root {...args} variant="surface">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>

      <Callout.Root {...args} variant="outline">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>
    </div>
  ),
};

export const Color: Story = {
  args: {
    color: calloutRootPropDefs.color.default,
    variant: calloutRootPropDefs.variant.default,
    children: (
      <>
        You will need to upgrade to the <Link href="#">newest Frosted-UI version</Link> now.
      </>
    ),
  },
  render: ({ children, ...args }: CalloutRootProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Callout.Root {...args} color="blue">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>

      <Callout.Root {...args} color="green">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>

      <Callout.Root {...args} color="red">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>
    </div>
  ),
};

export const SemanticColor: Story = {
  name: 'Semantic color',
  args: {
    color: calloutRootPropDefs.color.default,
    variant: calloutRootPropDefs.variant.default,
    children: (
      <>
        You will need to upgrade to the <Link href="#">newest Frosted-UI version</Link> now.
      </>
    ),
  },
  render: ({ children, ...args }: CalloutRootProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Callout.Root {...args} color="info">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>

      <Callout.Root {...args} color="success">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>

      <Callout.Root {...args} color="warning">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>

      <Callout.Root {...args} color="danger">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  args: {
    color: calloutRootPropDefs.color.default,
    variant: calloutRootPropDefs.variant.default,
    children: (
      <>
        You will need to upgrade to the <Link href="#">newest Frosted-UI version</Link> now.
      </>
    ),
  },
  render: ({ children, ...args }: CalloutRootProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Callout.Root {...args} variant="soft">
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>

      <Callout.Root {...args} variant="soft" highContrast>
        <Callout.Icon>
          <Callout.Icon>
            {/* @ts-expect-error -- fix frosted icon types */}
            <InfoCircle16 />
          </Callout.Icon>
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
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
          <Callout.Icon>
            <Callout.Icon>🚨</Callout.Icon>
          </Callout.Icon>
          <Callout.Text>Access denied. Please contact the network administrator to view this page.</Callout.Text>
        </Callout.Root>
      </div>
    </>
  ),
};
