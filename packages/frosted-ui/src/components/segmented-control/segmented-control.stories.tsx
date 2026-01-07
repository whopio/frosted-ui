import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Code, Drawer, SegmentedControl, Text, TextArea, TextField } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl.List,
  args: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl.List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 'auto' }}>
      <SegmentedControl.Root defaultValue="account">
        <SegmentedControl.List {...args}>
          <SegmentedControl.Trigger value="account">Account</SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="documents">Documents</SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="settings">Settings</SegmentedControl.Trigger>
        </SegmentedControl.List>

        <SegmentedControl.Content value="account" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Your account.</Text>
        </SegmentedControl.Content>

        <SegmentedControl.Content value="documents" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Your documents.</Text>
        </SegmentedControl.Content>

        <SegmentedControl.Content value="settings" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Your profile.</Text>
        </SegmentedControl.Content>
      </SegmentedControl.Root>
    </div>
  ),
};
export const InDrawer: Story = {
  name: 'In a drawer',
  render: (args) => (
    <Drawer.Root defaultOpen>
      <Drawer.Trigger>
        <Button>View users</Button>
      </Drawer.Trigger>
      <Drawer.Content style={{ width: 400 }}>
        <Drawer.Header>
          <Drawer.Title>Users</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <SegmentedControl.Root defaultValue="account">
            <SegmentedControl.List {...args}>
              <SegmentedControl.Trigger value="account">Account</SegmentedControl.Trigger>
              <SegmentedControl.Trigger value="documents">Documents</SegmentedControl.Trigger>
              <SegmentedControl.Trigger value="settings">Settings</SegmentedControl.Trigger>
            </SegmentedControl.List>

            <div style={{ padding: '12px 16px 8px 16px' }}>
              <SegmentedControl.Content value="account">
                <Text size="2">Make changes to your account.</Text>
              </SegmentedControl.Content>

              <SegmentedControl.Content value="documents">
                <Text size="2">Access and update your documents.</Text>
              </SegmentedControl.Content>

              <SegmentedControl.Content value="settings">
                <Text size="2">Edit your profile.</Text>
              </SegmentedControl.Content>
            </div>
          </SegmentedControl.Root>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  ),
};

export const ActivateOnFocus: Story = {
  name: 'Activate on Focus',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 400 }}>
      <Text>
        The <Code>activateOnFocus</Code> prop controls whether segments are activated immediately when focused via
        keyboard navigation, or only when explicitly clicked/pressed. Try using <Code>Tab</Code> to focus the control,
        then <Code>Arrow</Code> keys to navigate.
      </Text>

      <div>
        <Text size="2" weight="medium" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          activateOnFocus={'{true}'}
        </Text>
        <SegmentedControl.Root defaultValue="day">
          <SegmentedControl.List {...args} activateOnFocus>
            <SegmentedControl.Trigger value="day">Day</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="week">Week</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="month">Month</SegmentedControl.Trigger>
          </SegmentedControl.List>

          <SegmentedControl.Content value="day" style={{ padding: '12px 16px 8px 16px' }}>
            <Text size="2">Daily view — Activates immediately on arrow key navigation.</Text>
          </SegmentedControl.Content>
          <SegmentedControl.Content value="week" style={{ padding: '12px 16px 8px 16px' }}>
            <Text size="2">Weekly view — Activates immediately on arrow key navigation.</Text>
          </SegmentedControl.Content>
          <SegmentedControl.Content value="month" style={{ padding: '12px 16px 8px 16px' }}>
            <Text size="2">Monthly view — Activates immediately on arrow key navigation.</Text>
          </SegmentedControl.Content>
        </SegmentedControl.Root>
      </div>

      <div>
        <Text size="2" weight="medium" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          activateOnFocus={'{false}'} (default)
        </Text>
        <SegmentedControl.Root defaultValue="day">
          <SegmentedControl.List {...args} activateOnFocus={false}>
            <SegmentedControl.Trigger value="day">Day</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="week">Week</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="month">Month</SegmentedControl.Trigger>
          </SegmentedControl.List>

          <SegmentedControl.Content value="day" style={{ padding: '12px 16px 8px 16px' }}>
            <Text size="2">Daily view — Must press Enter/Space to activate after focusing.</Text>
          </SegmentedControl.Content>
          <SegmentedControl.Content value="week" style={{ padding: '12px 16px 8px 16px' }}>
            <Text size="2">Weekly view — Must press Enter/Space to activate after focusing.</Text>
          </SegmentedControl.Content>
          <SegmentedControl.Content value="month" style={{ padding: '12px 16px 8px 16px' }}>
            <Text size="2">Monthly view — Must press Enter/Space to activate after focusing.</Text>
          </SegmentedControl.Content>
        </SegmentedControl.Root>
      </div>

      <Text size="1" color="gray">
        Use <Code>activateOnFocus={'{true}'}</Code> for a more fluid experience. The default (<Code>false</Code>)
        follows WAI-ARIA best practices, requiring explicit activation which is better for accessibility.
      </Text>
    </div>
  ),
};

export const KeepMounted: Story = {
  name: 'Keep Mounted',
  render: (args) => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [bio, setBio] = React.useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
        <Text>
          The <Code>keepMounted</Code> prop on <Code>SegmentedControl.Content</Code> keeps panels in the DOM even when
          hidden. This preserves component state like form inputs, scroll position, and avoids re-mounting expensive
          components.
        </Text>

        <Text size="2" weight="medium">
          With keepMounted={'{true}'} — Form state is preserved
        </Text>
        <SegmentedControl.Root defaultValue="profile">
          <SegmentedControl.List {...args}>
            <SegmentedControl.Trigger value="profile">Profile</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="contact">Contact</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="about">About</SegmentedControl.Trigger>
          </SegmentedControl.List>
          <div
            style={{
              padding: '16px',
              background: 'var(--gray-2)',
              borderRadius: 'var(--radius-2)',
              marginTop: 'var(--space-2)',
            }}
          >
            <SegmentedControl.Content value="profile" keepMounted>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Text as="label" size="2">
                  Username
                </Text>
                <TextField.Input
                  size="3"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
                <Text size="1" color="gray">
                  Type something, switch segments, then come back — your input is preserved!
                </Text>
              </div>
            </SegmentedControl.Content>
            <SegmentedControl.Content value="contact" keepMounted>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Text as="label" size="2">
                  Email
                </Text>
                <TextField.Input
                  size="3"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
            </SegmentedControl.Content>
            <SegmentedControl.Content value="about" keepMounted>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Text as="label" size="2">
                  Bio
                </Text>
                <TextArea
                  size="3"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us about yourself"
                  rows={3}
                />
              </div>
            </SegmentedControl.Content>
          </div>
        </SegmentedControl.Root>

        <Text size="1" color="gray">
          Use <Code>keepMounted</Code> on <Code>SegmentedControl.Content</Code> for multi-step forms, preserving
          video/audio playback state, or panels with expensive initialization. Without it, panels unmount when hidden
          and lose their state.
        </Text>
      </div>
    );
  },
};
