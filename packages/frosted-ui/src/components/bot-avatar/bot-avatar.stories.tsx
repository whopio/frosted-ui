import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BotAvatar } from '..';
import { botAvatarExpressionsList } from './bot-avatar.expressions';
import { botAvatarShapes } from './bot-avatar.shapes';
import { botAvatarStatuses } from './bot-avatar.status';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/BotAvatar',
  component: BotAvatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    expression: {
      control: 'select',
      // 'none' renders the plain shape without a face
      options: ['none', ...botAvatarExpressionsList],
      mapping: { none: undefined },
    },
    shape: {
      control: 'select',
      options: botAvatarShapes,
    },
    status: {
      control: 'select',
      options: ['none', ...botAvatarStatuses],
      mapping: { none: undefined },
    },
  },
} satisfies Meta<typeof BotAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'blue',
    shape: 'sunny',
    expression: 'neutral',
    size: '6',
  },
};

export const Shape: Story = {
  args: {
    color: 'blue',
    size: '5',
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: 'var(--space-4)',
      }}
    >
      {botAvatarShapes.map((shape) => (
        <BotAvatar key={shape} {...args} shape={shape} />
      ))}
    </div>
  ),
};

export const Size: Story = {
  args: {
    color: 'blue',
    shape: 'cookie-9',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      <BotAvatar {...args} size="0" />
      <BotAvatar {...args} size="1" />
      <BotAvatar {...args} size="2" />
      <BotAvatar {...args} size="3" />
      <BotAvatar {...args} size="4" />
      <BotAvatar {...args} size="5" />
      <BotAvatar {...args} size="6" />
      <BotAvatar {...args} size="7" />
      <BotAvatar {...args} size="8" />
      <BotAvatar {...args} size="9" />
    </div>
  ),
};

export const Color: Story = {
  args: {
    shape: 'flower',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <BotAvatar {...args} color="indigo" />
      <BotAvatar {...args} color="cyan" />
      <BotAvatar {...args} color="orange" />
      <BotAvatar {...args} color="crimson" />
    </div>
  ),
};

export const Expression: Story = {
  args: {
    color: 'blue',
    size: '6',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        {botAvatarExpressionsList.map((expression) => (
          <div
            key={expression}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-1)' }}
          >
            <BotAvatar {...args} expression={expression} />
            <span style={{ fontSize: 11, color: 'var(--gray-a11)' }}>{expression}</span>
          </div>
        ))}
      </div>
      {/* Shapes with little room up top still keep the face inside the silhouette */}
      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        {(['triangle', 'boom', 'pixel-triangle', 'heart', 'fan', 'semi-circle', 'diamond', 'arrow'] as const).map(
          (shape) => (
            <BotAvatar {...args} key={shape} shape={shape} expression="neutral" />
          ),
        )}
      </div>
    </div>
  ),
};

export const Identity: Story = {
  args: {
    size: '5',
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: 'var(--space-4)',
        justifyItems: 'center',
      }}
    >
      {[
        'research-bot',
        'ops-bot',
        'code-reviewer',
        'inbox-triage',
        'morning-briefing',
        'sales-scout',
        'qa-runner',
        'data-cruncher',
        'design-critic',
        'meeting-notes',
        'release-manager',
        'support-agent',
      ].map((id) => (
        <div key={id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-1)' }}>
          <BotAvatar {...args} identity={id} />
          <span style={{ fontSize: 10, color: 'var(--gray-a11)' }}>{id}</span>
        </div>
      ))}
    </div>
  ),
};

export const Notification: Story = {
  args: {
    color: 'blue',
    shape: 'sunny',
    notification: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      <BotAvatar {...args} size="3" />
      <BotAvatar {...args} size="5" shape="clover-4" color="crimson" />
      <BotAvatar {...args} size="7" shape="cookie-6" color="indigo" />
      <BotAvatar {...args} size="9" shape="circle" color="teal" />
    </div>
  ),
};

/**
 * Shape changes while a face is shown are masked by a blink: the eyes close,
 * the silhouette (and its face fit) swaps while they're shut, and the eyes
 * reopen. Click the avatar to cycle shapes.
 */
export const BlinkMaskedShapeChange: Story = {
  render: function BlinkMaskedShapeChangeDemo() {
    const cycle = ['sunny', 'cookie-6', 'clover-4', 'heart', 'triangle', 'flower'] as const;
    const [index, setIndex] = React.useState(0);
    return (
      <button
        type="button"
        onClick={() => setIndex((i) => (i + 1) % cycle.length)}
        style={{ all: 'unset', cursor: 'pointer' }}
        aria-label="Cycle avatar shape"
      >
        <BotAvatar color="blue" size="8" shape={cycle[index]} expression="neutral" />
      </button>
    );
  },
};

/**
 * The avatar carries the agent lifecycle: each status maps to an expression
 * preset and its own motion. An explicit `expression` prop overrides the
 * mapped one while keeping the status motion.
 */
export const Status: Story = {
  args: {
    color: 'blue',
    shape: 'sunny',
    size: '6',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-5)' }}>
      {botAvatarStatuses.map((status) => (
        <div
          key={status}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-1)' }}
        >
          <BotAvatar {...args} status={status} />
          <span style={{ fontSize: 11, color: 'var(--gray-a11)' }}>{status}</span>
        </div>
      ))}
    </div>
  ),
};

/**
 * Everything together, Grok Bot style: identity-derived shape + color, an
 * expression with idle life (blink, gaze drift, breath), and notification
 * badges. Instances blink out of sync on purpose.
 */
export const Roster: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 240 }}>
      {(
        [
          { id: 'research-bot', name: 'Research', expression: 'neutral', notification: true },
          { id: 'ops-bot', name: 'Ops', expression: 'happy', notification: false },
          { id: 'code-reviewer', name: 'Code Review', expression: 'suspicious', notification: true },
          { id: 'inbox-triage', name: 'Inbox Triage', expression: 'sleepy', notification: false },
          { id: 'qa-runner', name: 'QA', expression: 'wide', notification: false },
          { id: 'sales-scout', name: 'Sales Scout', expression: 'wink', notification: true },
        ] as const
      ).map((bot) => (
        <div key={bot.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <BotAvatar identity={bot.id} expression={bot.expression} notification={bot.notification} size="4" />
          <span style={{ fontSize: 14 }}>{bot.name}</span>
        </div>
      ))}
    </div>
  ),
};

export const HighContrast: Story = {
  args: {
    shape: 'clover-4',
  },
  render: (args) => (
    <div style={{ display: 'inline-grid', gridTemplateRows: 'repeat(2, 1fr)', gap: '8px', gridAutoFlow: 'column' }}>
      <BotAvatar {...args} color="indigo" />
      <BotAvatar {...args} color="indigo" highContrast />
      <BotAvatar {...args} color="cyan" />
      <BotAvatar {...args} color="cyan" highContrast />
      <BotAvatar {...args} color="orange" />
      <BotAvatar {...args} color="orange" highContrast />
      <BotAvatar {...args} color="crimson" />
      <BotAvatar {...args} color="crimson" highContrast />
    </div>
  ),
};
