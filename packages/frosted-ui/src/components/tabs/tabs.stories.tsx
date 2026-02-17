import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Code, Tabs, Text, TextArea, TextField, tabsListPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Tabs',
  component: Tabs.List,
  args: {
    size: tabsListPropDefs.size.default,
    color: tabsListPropDefs.color.default,
  },
  argTypes: {
    size: {
      control: 'select',
      options: tabsListPropDefs.size.values,
    },
    color: {
      control: 'select',
      options: tabsListPropDefs.color.values,
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs.List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// TODO: Tabs content jumping in size due to font-weight change
// This doesn't happen in Frosted UI (might be due to a font in use?)
export const Default: Story = {
  render: (args) => (
    <div style={{ width: 600 }}>
      <Tabs.Root defaultValue="account">
        <Tabs.List {...args}>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="account" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Make changes to your account.</Text>
        </Tabs.Content>

        <Tabs.Content value="documents" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Access and update your documents.</Text>
        </Tabs.Content>

        <Tabs.Content value="settings" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Edit your profile or update contact information.</Text>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', width: 600 }}>
      <Tabs.Root defaultValue="account">
        <Tabs.List {...args} color="indigo">
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Indigo accent.</Text>
        </Tabs.Content>
        <Tabs.Content value="documents" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Documents.</Text>
        </Tabs.Content>
        <Tabs.Content value="settings" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Settings.</Text>
        </Tabs.Content>
      </Tabs.Root>

      <Tabs.Root defaultValue="tab1">
        <Tabs.List {...args} color="cyan">
          <Tabs.Trigger value="tab1">Overview</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Analytics</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Reports</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Cyan accent.</Text>
        </Tabs.Content>
        <Tabs.Content value="tab2" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Analytics.</Text>
        </Tabs.Content>
        <Tabs.Content value="tab3" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Reports.</Text>
        </Tabs.Content>
      </Tabs.Root>

      <Tabs.Root defaultValue="one">
        <Tabs.List {...args} color="crimson">
          <Tabs.Trigger value="one">One</Tabs.Trigger>
          <Tabs.Trigger value="two">Two</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="one" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Crimson accent.</Text>
        </Tabs.Content>
        <Tabs.Content value="two" style={{ padding: '12px 16px 8px 16px' }}>
          <Text size="2">Two.</Text>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  ),
};

export const ActivateOnFocus: Story = {
  name: 'Activate on Focus',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 600 }}>
      <Text>
        The <Code>activateOnFocus</Code> prop controls whether tabs are activated immediately when focused via keyboard
        navigation, or only when explicitly clicked/pressed. Try using <Code>Tab</Code> to focus the tabs, then{' '}
        <Code>Arrow</Code> keys to navigate.
      </Text>

      <div>
        <Text size="2" weight="medium" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          activateOnFocus={'{true}'}
        </Text>
        <Tabs.Root defaultValue="tab1">
          <Tabs.List {...args} activateOnFocus>
            <Tabs.Trigger value="tab1">Overview</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Analytics</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Reports</Tabs.Trigger>
          </Tabs.List>
          <div style={{ padding: '12px 16px 8px 16px' }}>
            <Tabs.Content value="tab1">
              <Text size="2">Overview content — Tab activates immediately on arrow key navigation.</Text>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Text size="2">Analytics content — Tab activates immediately on arrow key navigation.</Text>
            </Tabs.Content>
            <Tabs.Content value="tab3">
              <Text size="2">Reports content — Tab activates immediately on arrow key navigation.</Text>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>

      <div>
        <Text size="2" weight="medium" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          activateOnFocus={'{false}'} (default)
        </Text>
        <Tabs.Root defaultValue="tab1">
          <Tabs.List {...args} activateOnFocus={false}>
            <Tabs.Trigger value="tab1">Overview</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Analytics</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Reports</Tabs.Trigger>
          </Tabs.List>
          <div style={{ padding: '12px 16px 8px 16px' }}>
            <Tabs.Content value="tab1">
              <Text size="2">Overview content — Must press Enter/Space to activate after focusing.</Text>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Text size="2">Analytics content — Must press Enter/Space to activate after focusing.</Text>
            </Tabs.Content>
            <Tabs.Content value="tab3">
              <Text size="2">Reports content — Must press Enter/Space to activate after focusing.</Text>
            </Tabs.Content>
          </div>
        </Tabs.Root>
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
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [bio, setBio] = React.useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
        <Text>
          The <Code>keepMounted</Code> prop on <Code>Tabs.Content</Code> keeps tab panels in the DOM even when hidden.
          This preserves component state like form inputs, scroll position, and avoids re-mounting expensive components.
        </Text>

        <Text size="2" weight="medium">
          With keepMounted={'{true}'} — Form state is preserved
        </Text>
        <Tabs.Root defaultValue="profile">
          <Tabs.List {...args}>
            <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
            <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
            <Tabs.Trigger value="about">About</Tabs.Trigger>
          </Tabs.List>
          <div
            style={{
              padding: '16px',
              background: 'var(--gray-2)',
              borderRadius: '0 0 var(--radius-2) var(--radius-2)',
            }}
          >
            <Tabs.Content value="profile" keepMounted>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Text render={<label />} size="2">
                  Name
                </Text>
                <TextField.Input
                  size="3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
                <Text size="1" color="gray">
                  Type something, switch tabs, then come back — your input is preserved!
                </Text>
              </div>
            </Tabs.Content>
            <Tabs.Content value="contact" keepMounted>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Text render={<label />} size="2">
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
            </Tabs.Content>
            <Tabs.Content value="about" keepMounted>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Text render={<label />} size="2">
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
            </Tabs.Content>
          </div>
        </Tabs.Root>

        <Text size="1" color="gray">
          Use <Code>keepMounted</Code> on <Code>Tabs.Content</Code> for multi-step forms, preserving video/audio
          playback state, or panels with expensive initialization. Without it, panels unmount when hidden and lose their
          state.
        </Text>
      </div>
    );
  },
};
