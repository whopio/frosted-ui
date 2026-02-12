import type { Meta, StoryObj } from '@storybook/react';

import { Bell16, Document16, FolderAdd16, Message16, Plus16, Sad16 } from '@frosted-ui/icons';
import React from 'react';
import { Avatar, AvatarStack, Button, EmptyState, Link, Shine, Text } from '..';
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
