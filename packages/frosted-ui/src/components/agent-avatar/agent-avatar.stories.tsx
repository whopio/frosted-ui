import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AgentAvatar, Button, createBotAvatarHandle } from '..';
import { botAvatarExpressionsList } from '../bot-avatar/bot-avatar.expressions';
import { botAvatarStatuses } from '../bot-avatar/bot-avatar.status';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/AgentAvatar',
  component: AgentAvatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    expression: {
      control: 'select',
      // 'none' renders the plain head without a face
      options: ['none', ...botAvatarExpressionsList],
      mapping: { none: undefined },
    },
    status: {
      control: 'select',
      options: ['none', ...botAvatarStatuses],
      mapping: { none: undefined },
    },
  },
} satisfies Meta<typeof AgentAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'blue',
    expression: 'neutral',
    size: '6',
  },
};

export const Size: Story = {
  args: {
    color: 'blue',
    expression: 'neutral',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      <AgentAvatar {...args} size="0" />
      <AgentAvatar {...args} size="1" />
      <AgentAvatar {...args} size="2" />
      <AgentAvatar {...args} size="3" />
      <AgentAvatar {...args} size="4" />
      <AgentAvatar {...args} size="5" />
      <AgentAvatar {...args} size="6" />
      <AgentAvatar {...args} size="7" />
      <AgentAvatar {...args} size="8" />
      <AgentAvatar {...args} size="9" />
    </div>
  ),
};

export const Color: Story = {
  args: {
    expression: 'neutral',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <AgentAvatar {...args} color="indigo" />
      <AgentAvatar {...args} color="cyan" />
      <AgentAvatar {...args} color="orange" />
      <AgentAvatar {...args} color="crimson" />
    </div>
  ),
};

export const Expression: Story = {
  args: {
    color: 'blue',
    size: '6',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
      {botAvatarExpressionsList.map((expression) => (
        <div
          key={expression}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-1)' }}
        >
          <AgentAvatar {...args} expression={expression} />
          <span style={{ fontSize: 11, color: 'var(--gray-a11)' }}>{expression}</span>
        </div>
      ))}
    </div>
  ),
};

/**
 * With a single silhouette, identity is carried by color alone: the same
 * identity string always gets the same accent color.
 */
export const Identity: Story = {
  args: {
    size: '5',
    expression: 'neutral',
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
        'research-agent',
        'ops-agent',
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
          <AgentAvatar {...args} identity={id} />
          <span style={{ fontSize: 10, color: 'var(--gray-a11)' }}>{id}</span>
        </div>
      ))}
    </div>
  ),
};

export const Notification: Story = {
  args: {
    color: 'blue',
    expression: 'neutral',
    notification: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      <AgentAvatar {...args} size="3" />
      <AgentAvatar {...args} size="5" color="crimson" />
      <AgentAvatar {...args} size="7" color="indigo" />
      <AgentAvatar {...args} size="9" color="teal" />
    </div>
  ),
};

/**
 * Imperative control via the Base UI handle pattern: create a handle with
 * `createBotAvatarHandle()`, pass it to the `handle` prop, and call
 * `blink()` / `lookAt()` from event handlers or effects. Calls with no
 * mounted avatar attached are ignored.
 */
export const Handle: Story = {
  render: function HandleDemo() {
    const handle = React.useMemo(() => createBotAvatarHandle(), []);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)' }}>
        <AgentAvatar handle={handle} color="blue" expression="neutral" size="8" />
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button onClick={() => handle.blink()}>blink()</Button>
          <Button onClick={() => handle.lookAt({ x: -1, y: 0.2 })}>look left</Button>
          <Button onClick={() => handle.lookAt({ x: 1, y: -0.6 })}>look up-right</Button>
          <Button onClick={() => handle.lookAt(null)}>release</Button>
        </div>
      </div>
    );
  },
};

/**
 * The agents watch the cursor: the pointer's direction from each avatar's
 * center becomes its gaze, and the automatic wander stills while tracking.
 * Disabled under prefers-reduced-motion.
 */
export const FollowPointer: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-6)', padding: 'var(--space-9)' }}>
      <AgentAvatar identity="research-agent" expression="neutral" followPointer size="7" />
      <AgentAvatar identity="ops-agent" expression="happy" followPointer size="7" />
      <AgentAvatar identity="qa-runner" expression="wide" followPointer size="7" />
      <AgentAvatar color="crimson" expression="neutral" followPointer size="7" />
    </div>
  ),
};

/**
 * The avatar carries the agent lifecycle: each status maps to an expression
 * preset and its own motion. An explicit `expression` prop overrides the
 * mapped one while keeping the status motion.
 */
export const Status: Story = {
  args: {
    color: 'blue',
    size: '6',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-5)' }}>
      {botAvatarStatuses.map((status) => (
        <div
          key={status}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-1)' }}
        >
          <AgentAvatar {...args} status={status} />
          <span style={{ fontSize: 11, color: 'var(--gray-a11)' }}>{status}</span>
        </div>
      ))}
    </div>
  ),
};

/**
 * A team of agents: identity-derived colors, expressions with idle life
 * (blink, gaze drift, breath), and notification badges. Instances blink out
 * of sync on purpose.
 */
export const Roster: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 240 }}>
      {(
        [
          { id: 'research-agent', name: 'Research', expression: 'neutral', notification: true },
          { id: 'ops-agent', name: 'Ops', expression: 'happy', notification: false },
          { id: 'code-reviewer', name: 'Code Review', expression: 'suspicious', notification: true },
          { id: 'inbox-triage', name: 'Inbox Triage', expression: 'sleepy', notification: false },
          { id: 'qa-runner', name: 'QA', expression: 'wide', notification: false },
          { id: 'sales-scout', name: 'Sales Scout', expression: 'wink', notification: true },
        ] as const
      ).map((agent) => (
        <div key={agent.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <AgentAvatar identity={agent.id} expression={agent.expression} notification={agent.notification} size="4" />
          <span style={{ fontSize: 14 }}>{agent.name}</span>
        </div>
      ))}
    </div>
  ),
};

export const HighContrast: Story = {
  args: {
    expression: 'neutral',
  },
  render: (args) => (
    <div style={{ display: 'inline-grid', gridTemplateRows: 'repeat(2, 1fr)', gap: '8px', gridAutoFlow: 'column' }}>
      <AgentAvatar {...args} color="indigo" />
      <AgentAvatar {...args} color="indigo" highContrast />
      <AgentAvatar {...args} color="cyan" />
      <AgentAvatar {...args} color="cyan" highContrast />
      <AgentAvatar {...args} color="orange" />
      <AgentAvatar {...args} color="orange" highContrast />
      <AgentAvatar {...args} color="crimson" />
      <AgentAvatar {...args} color="crimson" highContrast />
    </div>
  ),
};
