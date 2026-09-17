import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AgentAvatar, Button, agentAvatarAccessoriesList, createBotAvatarHandle } from '..';
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
    accessory: {
      control: 'select',
      options: ['none', ...agentAvatarAccessoriesList],
      mapping: { none: undefined },
    },
    // Imperative-only inputs — not meaningful as panel controls.
    handle: { control: false },
    gaze: { control: false },
  },
} satisfies Meta<typeof AgentAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Hides the controls a demo manages itself, so the panel only shows knobs
 * that actually do something in that story. */
const withoutControls = (...exclude: string[]) => ({ controls: { exclude } });

export const Default: Story = {
  args: {
    color: 'blue',
    expression: 'neutral',
    size: '6',
  },
  // `color` is set explicitly, so identity would never kick in here.
  parameters: withoutControls('identity'),
};

export const Size: Story = {
  args: {
    color: 'blue',
    expression: 'neutral',
  },
  parameters: withoutControls('size', 'identity'),
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
  parameters: withoutControls('color', 'identity'),
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
  parameters: withoutControls('expression', 'identity'),
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
  // Identity derives the color, so an explicit color would fight the demo.
  parameters: withoutControls('identity', 'color'),
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
  parameters: withoutControls('size', 'color', 'identity'),
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
 * Worn accessories, molded-plastic style: headwear (hair, cap, top hat)
 * covers the stud and stays put like the real pieces, while face wear
 * (glasses, shades, moustache) rides the gaze with the face. They are what
 * makes a team of same-shaped heads read as individuals.
 */
export const Accessories: Story = {
  args: {
    color: 'blue',
    size: '7',
  },
  parameters: withoutControls('accessory', 'identity'),
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 'var(--space-4)',
          justifyItems: 'center',
        }}
      >
        {agentAvatarAccessoriesList.map((accessory) => (
          <div
            key={accessory}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-1)' }}
          >
            <AgentAvatar {...args} accessory={accessory} expression="neutral" />
            <span style={{ fontSize: 11, color: 'var(--gray-a11)' }}>{accessory}</span>
          </div>
        ))}
      </div>
      {/* Accessories hold up across expressions — shades hand expression to the mouth */}
      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        <AgentAvatar {...args} accessory="pigtails" expression="happy" color="orange" />
        <AgentAvatar {...args} accessory="viking-helmet" expression="angry" color="teal" />
        <AgentAvatar {...args} accessory="crown" expression="suspicious" color="purple" />
        <AgentAvatar {...args} accessory="glasses" expression="wide" color="crimson" />
        <AgentAvatar {...args} accessory="space-helmet" expression="happy" color="gray" />
        <AgentAvatar {...args} accessory="party-hat" expression="wink" color="indigo" />
        <AgentAvatar {...args} accessory="chef-hat" expression="sleepy" color="brown" />
        <AgentAvatar {...args} accessory="graduation-cap" expression="neutral" color="cyan" />
      </div>
      {/* The whole set must still read at roster size */}
      <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
        {agentAvatarAccessoriesList.map((accessory) => (
          <AgentAvatar {...args} key={accessory} size="4" accessory={accessory} expression="neutral" />
        ))}
      </div>
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
  args: {
    color: 'blue',
    expression: 'neutral',
    size: '8',
  },
  parameters: withoutControls('identity'),
  render: function HandleDemo(args) {
    const handle = React.useMemo(() => createBotAvatarHandle(), []);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)' }}>
        <AgentAvatar {...args} handle={handle} />
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
  args: {
    followPointer: true,
    size: '7',
  },
  parameters: withoutControls('identity', 'color', 'expression'),
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-6)', padding: 'var(--space-9)' }}>
      <AgentAvatar {...args} identity="research-agent" expression="neutral" />
      <AgentAvatar {...args} identity="ops-agent" expression="happy" />
      <AgentAvatar {...args} identity="qa-runner" expression="wide" />
      <AgentAvatar {...args} color="crimson" expression="neutral" />
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
  parameters: withoutControls('status', 'identity'),
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
  args: {
    size: '4',
  },
  parameters: withoutControls('identity', 'color', 'expression', 'notification', 'accessory'),
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 240 }}>
      {(
        [
          { id: 'research-agent', name: 'Research', expression: 'neutral', notification: true, accessory: 'glasses' },
          { id: 'ops-agent', name: 'Ops', expression: 'happy', notification: false, accessory: 'cap' },
          {
            id: 'code-reviewer',
            name: 'Code Review',
            expression: 'suspicious',
            notification: true,
            accessory: 'moustache',
          },
          { id: 'inbox-triage', name: 'Inbox Triage', expression: 'sleepy', notification: false, accessory: 'hair' },
          { id: 'qa-runner', name: 'QA', expression: 'wide', notification: false, accessory: undefined },
          { id: 'sales-scout', name: 'Sales Scout', expression: 'wink', notification: true, accessory: 'sunglasses' },
        ] as const
      ).map((agent) => (
        <div key={agent.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <AgentAvatar
            {...args}
            identity={agent.id}
            expression={agent.expression}
            notification={agent.notification}
            accessory={agent.accessory}
          />
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
  parameters: withoutControls('highContrast', 'color', 'identity'),
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
