import type { Meta, StoryObj } from '@storybook/react';

import {
  Bell24,
  CheckmarkCircleFilled16,
  Document24,
  DocumentLines24,
  FolderAdd24,
  Gear24,
  HandWave24,
  LightningFilled24,
  MagnifyingGlass16,
  MagnifyingGlass24,
  Message16,
  PeoplePlus24,
  Plus16,
  Sad24,
  SparkleFilled24,
  Upload16,
  XCircleFilled24,
} from '@frosted-ui/icons';
import React from 'react';
import {
  Avatar,
  AvatarStack,
  Button,
  Checkbox,
  EmptyState,
  Field,
  Kbd,
  Link,
  OTPField,
  Shine,
  Text,
  TextField,
} from '..';
import { getColorForEmoji } from '../../helpers/emoji-colors';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Media>
          <FolderAdd24 />
        </EmptyState.Media>
        <EmptyState.Title>No projects found</EmptyState.Title>
        <EmptyState.Description>
          Projects help you organize your work. Get started by creating a new project or importing an existing one.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Button variant="surface">Clear search</Button>
        <Button variant="solid">Create project</Button>
      </EmptyState.Actions>
      <Link underline="always" href="#" size="2">
        Learn more
      </Link>
    </EmptyState.Root>
  ),
};

export const SearchResults: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Media>
          <Sad24 />
        </EmptyState.Media>
        <EmptyState.Title>No results found</EmptyState.Title>
        <EmptyState.Description>
          We couldn't find anything matching your search. Try using different keywords.
        </EmptyState.Description>
      </EmptyState.Header>
    </EmptyState.Root>
  ),
};

export const Minimal: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Title>Nothing here yet</EmptyState.Title>
        <EmptyState.Description>This section will be populated once you add some items.</EmptyState.Description>
      </EmptyState.Header>
    </EmptyState.Root>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media color="blue">
            <Document24 />
          </EmptyState.Media>
          <EmptyState.Title>No documents</EmptyState.Title>
          <EmptyState.Description>Create your first document to get started.</EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Actions>
          <Button variant="surface" color="blue">
            <Plus16 />
            New document
          </Button>
        </EmptyState.Actions>
      </EmptyState.Root>

      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media color="green">
            <Plus16 />
          </EmptyState.Media>
          <EmptyState.Title>No deployments</EmptyState.Title>
          <EmptyState.Description>Deploy your first app to see it here.</EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Actions>
          <Button variant="soft" color="green">
            Deploy now
          </Button>
        </EmptyState.Actions>
      </EmptyState.Root>

      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media color="lemon">
            <Bell24 />
          </EmptyState.Media>
          <EmptyState.Title>No notifications</EmptyState.Title>
          <EmptyState.Description>Configure alerts to stay informed.</EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Actions>
          <Button variant="solid" color="lemon">
            Set up alerts
          </Button>
        </EmptyState.Actions>
      </EmptyState.Root>

      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media color="danger">
            <Sad24 />
          </EmptyState.Media>
          <EmptyState.Title>Too many errors</EmptyState.Title>
          <EmptyState.Description>Your application has critical issues that need attention.</EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Actions>
          <Button variant="solid" color="danger">
            View errors
          </Button>
        </EmptyState.Actions>
      </EmptyState.Root>
    </div>
  ),
};

export const Emojis: Story = {
  render: () => {
    const emojis = [
      {
        emoji: '💕',
        title: 'No favorites',
        description: 'Save items you love for quick access.',
        action: 'Browse items',
      },
      {
        emoji: '🎉',
        title: 'No celebrations',
        description: 'Complete milestones to earn achievements.',
        action: 'View goals',
      },
      {
        emoji: '💩',
        title: 'No bugs found',
        description: 'Your code is squeaky clean. Nice work!',
        action: 'Run tests',
      },
      {
        emoji: '🌱',
        title: 'No projects',
        description: 'Plant the seed for your next big idea.',
        action: 'Start project',
      },
    ];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {emojis.map(({ emoji, title, description, action }) => {
          const color = getColorForEmoji(emoji) ?? 'gray';
          return (
            <EmptyState.Root key={emoji}>
              <EmptyState.Header>
                <EmptyState.Media color={color}>{emoji}</EmptyState.Media>
                <EmptyState.Title>{title}</EmptyState.Title>
                <EmptyState.Description>{description}</EmptyState.Description>
              </EmptyState.Header>
              <EmptyState.Actions>
                <Button variant="solid" color={color}>
                  {action}
                </Button>
              </EmptyState.Actions>
            </EmptyState.Root>
          );
        })}
      </div>
    );
  },
};

export const ShinyEmojis: Story = {
  render: () => {
    const emojis = [
      {
        emoji: '💕',
        title: 'No favorites',
        description: 'Save items you love for quick access.',
        action: 'Browse items',
      },
      {
        emoji: '🎉',
        title: 'No celebrations',
        description: 'Complete milestones to earn achievements.',
        action: 'View goals',
      },
      {
        emoji: '💩',
        title: 'No bugs found',
        description: 'Your code is squeaky clean. Nice work!',
        action: 'Run tests',
      },
      {
        emoji: '🌱',
        title: 'No projects',
        description: 'Plant the seed for your next big idea.',
        action: 'Start project',
      },
    ];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {emojis.map(({ emoji, title, description, action }) => {
          const color = getColorForEmoji(emoji) ?? 'gray';
          return (
            <EmptyState.Root key={emoji}>
              <Shine
                style={{
                  fontSize: 64,
                  lineHeight: 1,
                }}
              >
                {emoji}
              </Shine>
              <EmptyState.Header>
                <EmptyState.Title>{title}</EmptyState.Title>
                <EmptyState.Description>{description}</EmptyState.Description>
              </EmptyState.Header>

              <EmptyState.Actions>
                <Button variant="solid" color={color}>
                  {action}
                </Button>
              </EmptyState.Actions>
            </EmptyState.Root>
          );
        })}
      </div>
    );
  },
};

export const WithAvatar: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Media>
          <Avatar
            size="5"
            fallback="Luna Rose"
            color="pink"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&q=70&crop=faces&fit=crop"
          />
        </EmptyState.Media>
        <EmptyState.Title>User Offline</EmptyState.Title>
        <EmptyState.Description>
          This user is currently offline. You can leave a message to notify them or try again later.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions>
        <Button>
          <Message16 />
          Leave Message
        </Button>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};

export const WithAvatarStack: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Media variant="ghost">
          <AvatarStack.Root size="5">
            <AvatarStack.Avatar
              fallback="Cameron Zoub"
              color="blue"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            />
            <AvatarStack.Avatar fallback="Luna Rose" color="pink" />
            <AvatarStack.Avatar fallback="Ethan Livers" color="green" />
          </AvatarStack.Root>
        </EmptyState.Media>
        <EmptyState.Title>No Team Members</EmptyState.Title>
        <EmptyState.Description>Invite your team to collaborate on this project.</EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions>
        <Button variant="solid">
          <Plus16 />
          Invite Members
        </Button>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};

export const WithTextFieldAndButton: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Media color="green">
          <PeoplePlus24 />
        </EmptyState.Media>
        <EmptyState.Title>Invite teammates</EmptyState.Title>
        <EmptyState.Description>Enter an email address to send an invitation.</EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions>
        <div style={{ display: 'flex', gap: 8, width: '100%' }}>
          <TextField.Root style={{ flex: 1 }}>
            <TextField.Input type="email" placeholder="colleague@company.com" />
          </TextField.Root>
          <Button variant="solid" color="green">
            Invite
          </Button>
        </div>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Media color="blue">
          <HandWave24 />
        </EmptyState.Media>
        <EmptyState.Title>Welcome to the app!</EmptyState.Title>
        <EmptyState.Description>
          We've prepared a quick tour to help you get started with the main features.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions>
        <Button variant="solid" color="blue">
          Start tour
        </Button>
        <Field.Root>
          <Field.Label style={{ display: 'flex', margin: 'auto', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <Checkbox size="1" />
            <Text size="1" color="gray">
              Don't show this again
            </Text>
          </Field.Label>
        </Field.Root>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};

export const FileDropHint: Story = {
  render: () => (
    <EmptyState.Root
      style={{
        border: '2px dashed var(--color-stroke)',
      }}
    >
      <EmptyState.Header>
        <EmptyState.Media>
          <DocumentLines24 />
        </EmptyState.Media>
        <EmptyState.Title>Cloud Storage empty</EmptyState.Title>
        <EmptyState.Description>Upload files to your cloud storage to access them anywhere.</EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions>
        <Button variant="surface">
          <Upload16 />
          Upload files
        </Button>
        <Text size="1" color="gray">
          Supports PDF, PNG, JPG up to 10MB
        </Text>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};

export const ErrorWithRetry: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(false);

    const handleRetry = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };

    return (
      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media color="danger">
            <XCircleFilled24 />
          </EmptyState.Media>
          <EmptyState.Title>Connection failed</EmptyState.Title>
          <EmptyState.Description>
            We couldn't connect to the server. Please check your internet connection and try again.
          </EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Actions>
          <Button variant="solid" color="danger" onClick={handleRetry} loading={loading}>
            Try again
          </Button>
          <Link href="#" size="2" underline="always">
            View status page
          </Link>
        </EmptyState.Actions>
      </EmptyState.Root>
    );
  },
};

export const Achievement: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Media variant="ghost">
          <Text size="8">🏆</Text>
        </EmptyState.Media>
        <EmptyState.Title>Achievement Unlocked!</EmptyState.Title>
        <EmptyState.Description>
          You've completed your first project. Keep going to unlock more achievements and rewards.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions>
        <Button variant="solid" color="amber">
          View all achievements
        </Button>
        <Text size="1" color="gray">
          3 of 12 achievements unlocked
        </Text>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};

export const WithKeyboardShortcut: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Media color="gray">
          <MagnifyingGlass24 />
        </EmptyState.Media>
        <EmptyState.Title>Quick search</EmptyState.Title>
        <EmptyState.Description>
          Find anything in your workspace instantly using the command palette.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Text size="2" color="gray">
            Press
          </Text>
          <Kbd size="2">⌘</Kbd>
          <Kbd size="2">K</Kbd>
          <Text size="2" color="gray">
            to search
          </Text>
        </div>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};

export const WithOTPField: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Media color="green">
          <Gear24 />
        </EmptyState.Media>
        <EmptyState.Title>Verify your device</EmptyState.Title>
        <EmptyState.Description>Enter the 6-digit code sent to your phone ending in ••••42.</EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions>
        <OTPField.Root
          color="green"
          maxLength={6}
          render={({ slots }) => (
            <>
              <OTPField.Group>
                {slots.slice(0, 3).map((slot, index) => (
                  <OTPField.Slot key={index} {...slot} />
                ))}
              </OTPField.Group>
              <OTPField.Separator />
              <OTPField.Group>
                {slots.slice(3).map((slot, index) => (
                  <OTPField.Slot key={index + 3} {...slot} />
                ))}
              </OTPField.Group>
            </>
          )}
        />
        <Button variant="ghost" size="2" color="green" style={{ textDecoration: 'underline' }}>
          Resend code
        </Button>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};

export const NotFound404: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 480 }}>
      <EmptyState.Header>
        <EmptyState.Title size="5" weight="bold">
          404 - Not Found
        </EmptyState.Title>
        <EmptyState.Description size="3">
          The page you're looking for doesn't exist. Try searching for what you need below.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions>
        <TextField.Root size="3" style={{ width: '100%' }}>
          <TextField.Slot>
            <MagnifyingGlass16 />
          </TextField.Slot>
          <TextField.Input placeholder="Try searching for pages..." />
        </TextField.Root>
        <Button size="2" variant="ghost" color="gray" style={{ textDecoration: 'underline' }}>
          Contact support
        </Button>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};

export const AIAssistant: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 420 }}>
      <EmptyState.Header>
        <EmptyState.Media>
          <SparkleFilled24 />
        </EmptyState.Media>
        <EmptyState.Title>Start a conversation</EmptyState.Title>
        <EmptyState.Description>
          Ask me anything — I can help you write, brainstorm, analyze data, or answer questions.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Actions>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button size="1" variant="surface" color="gray" style={{ cursor: 'pointer' }}>
            ✍️ Help me write
          </Button>
          <Button size="1" variant="surface" color="gray" style={{ cursor: 'pointer' }}>
            💡 Brainstorm ideas
          </Button>
          <Button size="1" variant="surface" color="gray" style={{ cursor: 'pointer' }}>
            📊 Analyze data
          </Button>
          <Button size="1" variant="surface" color="gray" style={{ cursor: 'pointer' }}>
            🔍 Research topic
          </Button>
          <Button size="1" variant="surface" color="gray" style={{ cursor: 'pointer' }}>
            💬 Answer questions
          </Button>
        </div>
        <Text size="1" color="gray">
          Press{' '}
          <Kbd size="1" style={{ marginInline: 2 }}>
            /
          </Kbd>{' '}
          to see all commands
        </Text>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};

export const UpgradeToPro: Story = {
  render: () => (
    <EmptyState.Root
      style={{
        maxWidth: 420,
        borderRadius: 24,
        border: '1px solid var(--color-stroke)',
        background: 'var(--color-panel-solid)',
        paddingTop: 48,
      }}
    >
      <EmptyState.Header>
        <EmptyState.Media color="amber">
          <LightningFilled24 />
        </EmptyState.Media>
        <EmptyState.Title>Unlock Pro features</EmptyState.Title>
        <EmptyState.Description>
          You've hit the free plan limit. Upgrade to continue and access premium features.
        </EmptyState.Description>
      </EmptyState.Header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          width: '100%',
          padding: 12,
          background: 'var(--gray-a2)',
          borderRadius: 'var(--radius-3)',
        }}
      >
        {['Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom integrations'].map((feature) => (
          <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <CheckmarkCircleFilled16 style={{ color: 'var(--green-a11)' }} />
            <Text size="2">{feature}</Text>
          </div>
        ))}
      </div>
      <EmptyState.Actions style={{ display: 'flex', gap: 8, flexDirection: 'row', width: '100%' }}>
        <Button size="3" variant="surface" color="gray" style={{ flex: 1 }}>
          Maybe later
        </Button>
        <Button size="3" variant="solid" color="amber" style={{ flex: 1 }}>
          Upgrade — $9/mo
        </Button>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
};
