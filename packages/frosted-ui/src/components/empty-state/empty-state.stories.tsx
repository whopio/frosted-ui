import type { Meta, StoryObj } from '@storybook/react';

import {
  Bell16,
  Document16,
  FolderAdd16,
  Gear16,
  MagnifyingGlass16,
  Message16,
  Plus16,
  Rocket16,
  Sad16,
  Upload16,
  XCircleFilled16,
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
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media variant="icon">
          <FolderAdd16 />
        </EmptyState.Media>
        <EmptyState.Title>No projects found</EmptyState.Title>
        <EmptyState.Description>
          Projects help you organize your work. Get started by creating a new project or importing an existing one.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Content
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Button variant="surface">Clear search</Button>
        <Button variant="solid">Create project</Button>
      </EmptyState.Content>
      <Link underline="always" href="#" size="2">
        Learn more
      </Link>
    </EmptyState.Root>
  ),
};

export const SearchResults: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media>
          <Sad16 />
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
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Title>Nothing here yet</EmptyState.Title>
        <EmptyState.Description>This section will be populated once you add some items.</EmptyState.Description>
      </EmptyState.Header>
    </EmptyState.Root>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media variant="icon" color="blue">
            <Document16 />
          </EmptyState.Media>
          <EmptyState.Title>No documents</EmptyState.Title>
          <EmptyState.Description>Create your first document to get started.</EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <Button variant="surface" color="blue">
            <Plus16 />
            New document
          </Button>
        </EmptyState.Content>
      </EmptyState.Root>

      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media variant="icon" color="green">
            <Plus16 />
          </EmptyState.Media>
          <EmptyState.Title>No deployments</EmptyState.Title>
          <EmptyState.Description>Deploy your first app to see it here.</EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <Button variant="soft" color="green">
            Deploy now
          </Button>
        </EmptyState.Content>
      </EmptyState.Root>

      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media variant="icon" color="lemon">
            <Bell16 />
          </EmptyState.Media>
          <EmptyState.Title>No notifications</EmptyState.Title>
          <EmptyState.Description>Configure alerts to stay informed.</EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <Button variant="solid" color="lemon">
            Set up alerts
          </Button>
        </EmptyState.Content>
      </EmptyState.Root>

      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media variant="icon" color="danger">
            <Sad16 />
          </EmptyState.Media>
          <EmptyState.Title>Too many errors</EmptyState.Title>
          <EmptyState.Description>Your application has critical issues that need attention.</EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <Button variant="solid" color="danger">
            View errors
          </Button>
        </EmptyState.Content>
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
        {emojis.map(({ emoji, title, description, action }) => {
          const color = getColorForEmoji(emoji) ?? 'gray';
          return (
            <EmptyState.Root key={emoji}>
              <EmptyState.Header>
                <EmptyState.Media variant="icon" color={color}>
                  <Text
                    size="4"
                    style={{
                      // solid color to avoid emoji transparency
                      color: 'black',
                    }}
                  >
                    {emoji}
                  </Text>
                </EmptyState.Media>
                <EmptyState.Title>{title}</EmptyState.Title>
                <EmptyState.Description>{description}</EmptyState.Description>
              </EmptyState.Header>
              <EmptyState.Content>
                <Button variant="solid" color={color}>
                  {action}
                </Button>
              </EmptyState.Content>
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
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

              <EmptyState.Content>
                <Button variant="solid" color={color}>
                  {action}
                </Button>
              </EmptyState.Content>
            </EmptyState.Root>
          );
        })}
      </div>
    );
  },
};

export const WithAvatar: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media>
          <Avatar
            size="6"
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
      <EmptyState.Content>
        <Button>
          <Message16 />
          Leave Message
        </Button>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const WithAvatarStack: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media>
          <AvatarStack.Root size="4">
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
      <EmptyState.Content>
        <Button variant="solid">
          <Plus16 />
          Invite Members
        </Button>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const WithTextField: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media variant="icon" color="purple">
            <Gear16 />
          </EmptyState.Media>
          <EmptyState.Title>Enter invite code</EmptyState.Title>
          <EmptyState.Description>Have an invite code? Enter it below to join.</EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <TextField.Root style={{ width: '100%' }}>
            <TextField.Input placeholder="XXXX-XXXX-XXXX" style={{ textAlign: 'center' }} />
          </TextField.Root>
          <Button variant="solid" color="purple" style={{ width: '100%' }}>
            Join
          </Button>
        </EmptyState.Content>
      </EmptyState.Root>

      <EmptyState.Root>
        <EmptyState.Header>
          <EmptyState.Media variant="icon" color="blue">
            <MagnifyingGlass16 />
          </EmptyState.Media>
          <EmptyState.Title>No results found</EmptyState.Title>
          <EmptyState.Description>Try searching with different keywords.</EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <TextField.Root style={{ width: '100%' }}>
            <TextField.Input placeholder="Search again..." />
          </TextField.Root>
        </EmptyState.Content>
      </EmptyState.Root>
    </div>
  ),
};

export const WithTextFieldAndButton: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media variant="icon" color="green">
          <Plus16 />
        </EmptyState.Media>
        <EmptyState.Title>Invite teammates</EmptyState.Title>
        <EmptyState.Description>Enter an email address to send an invitation.</EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Content>
        <div style={{ display: 'flex', gap: 'var(--space-2)', width: '100%' }}>
          <TextField.Root style={{ flex: 1 }}>
            <TextField.Input type="email" placeholder="colleague@company.com" />
          </TextField.Root>
          <Button variant="solid" color="green">
            Invite
          </Button>
        </div>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media variant="icon" color="blue">
          <Bell16 />
        </EmptyState.Media>
        <EmptyState.Title>Welcome to the app!</EmptyState.Title>
        <EmptyState.Description>
          We've prepared a quick tour to help you get started with the main features.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Content>
        <Button variant="solid" color="blue">
          Start tour
        </Button>
        <Field.Root>
          <Field.Label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer' }}>
            <Checkbox size="1" />
            <Text size="1" color="gray">
              Don't show this again
            </Text>
          </Field.Label>
        </Field.Root>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const FileDropHint: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media variant="icon" color="orange">
          <Upload16 />
        </EmptyState.Media>
        <EmptyState.Title>Upload files</EmptyState.Title>
        <EmptyState.Description>Drag and drop files here, or click to browse.</EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Content>
        <Button variant="surface">
          <Upload16 />
          Browse files
        </Button>
        <Text size="1" color="gray">
          Supports PDF, PNG, JPG up to 10MB
        </Text>
      </EmptyState.Content>
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
      <EmptyState.Root style={{ maxWidth: 400 }}>
        <EmptyState.Header>
          <EmptyState.Media variant="icon" color="danger">
            <XCircleFilled16 />
          </EmptyState.Media>
          <EmptyState.Title>Connection failed</EmptyState.Title>
          <EmptyState.Description>
            We couldn't connect to the server. Please check your internet connection and try again.
          </EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <Button variant="solid" color="danger" onClick={handleRetry} loading={loading}>
            Try again
          </Button>
          <Link href="#" size="1">
            View status page
          </Link>
        </EmptyState.Content>
      </EmptyState.Root>
    );
  },
};

export const Achievement: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media>
          <Text size="8">🏆</Text>
        </EmptyState.Media>
        <EmptyState.Title>Achievement Unlocked!</EmptyState.Title>
        <EmptyState.Description>
          You've completed your first project. Keep going to unlock more achievements and rewards.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Content>
        <Button variant="solid" color="amber">
          View all achievements
        </Button>
        <Text size="1" color="gray">
          3 of 12 achievements unlocked
        </Text>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const WithKeyboardShortcut: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media variant="icon" color="gray">
          <MagnifyingGlass16 />
        </EmptyState.Media>
        <EmptyState.Title>Quick search</EmptyState.Title>
        <EmptyState.Description>
          Find anything in your workspace instantly using the command palette.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Content>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Text size="2" color="gray">
            Press
          </Text>
          <Kbd size="2">⌘</Kbd>
          <Kbd size="2">K</Kbd>
          <Text size="2" color="gray">
            to search
          </Text>
        </div>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const Countdown: Story = {
  render: () => {
    const [launchDate] = React.useState(() => {
      const date = new Date();
      date.setDate(date.getDate() + 7);
      return date;
    });

    const [timeLeft, setTimeLeft] = React.useState({ days: 7, hours: 0, minutes: 0, seconds: 0 });

    React.useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;

        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }, 1000);

      return () => clearInterval(timer);
    }, [launchDate]);

    return (
      <EmptyState.Root style={{ maxWidth: 400 }}>
        <EmptyState.Header>
          <EmptyState.Media variant="icon" color="iris">
            <Rocket16 />
          </EmptyState.Media>
          <EmptyState.Title>New feature launching soon</EmptyState.Title>
          <EmptyState.Description>
            We're working on something exciting. Be the first to know when it's ready.
          </EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center' }}>
            {[
              { value: timeLeft.days, label: 'days' },
              { value: timeLeft.hours, label: 'hrs' },
              { value: timeLeft.minutes, label: 'min' },
              { value: timeLeft.seconds, label: 'sec' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <Text size="6" weight="bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {String(value).padStart(2, '0')}
                </Text>
                <Text size="1" color="gray">
                  {label}
                </Text>
              </div>
            ))}
          </div>
          <TextField.Root style={{ width: '100%' }}>
            <TextField.Input type="email" placeholder="Enter email for updates" />
          </TextField.Root>
          <Button variant="solid" color="iris" style={{ width: '100%' }}>
            Notify me
          </Button>
        </EmptyState.Content>
      </EmptyState.Root>
    );
  },
};

export const WithOTPField: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media variant="icon" color="green">
          <Gear16 />
        </EmptyState.Media>
        <EmptyState.Title>Verify your device</EmptyState.Title>
        <EmptyState.Description>Enter the 6-digit code sent to your phone ending in ••••42.</EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Content>
        <OTPField.Root
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
        <Button variant="solid" color="green" style={{ width: '100%' }}>
          Verify
        </Button>
        <Link href="#" size="1">
          Resend code
        </Link>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};
