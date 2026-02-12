import type { Meta, StoryObj } from '@storybook/react';

import {
  Bell16,
  Document16,
  Download16,
  FolderAdd16,
  MagnifyingGlass16,
  Message16,
  Plus16,
  Sad32,
} from '@frosted-ui/icons';
import React from 'react';
import { Avatar, AvatarStack, Button, EmptyState, Link } from '..';

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
    </EmptyState.Root>
  ),
};

export const WithIconVariant: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media variant="icon" color="blue">
          <Document16 />
        </EmptyState.Media>
        <EmptyState.Title>No files uploaded</EmptyState.Title>
        <EmptyState.Description>Upload your first file to get started.</EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Content>
        <Button>
          <Download16 />
          Upload file
        </Button>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const SearchResults: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media>
          <MagnifyingGlass16 />
        </EmptyState.Media>
        <EmptyState.Title>No results found</EmptyState.Title>
        <EmptyState.Description>
          We couldn't find anything matching your search. Try using different keywords.
        </EmptyState.Description>
      </EmptyState.Header>
    </EmptyState.Root>
  ),
};

export const WithLink: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media>
          <Bell16 />
        </EmptyState.Media>
        <EmptyState.Title>No notifications</EmptyState.Title>
        <EmptyState.Description>
          You're all caught up! Check your <Link href="#">notification settings</Link> to customize what you receive.
        </EmptyState.Description>
      </EmptyState.Header>
    </EmptyState.Root>
  ),
};

export const MinimalWithoutMedia: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Title>Nothing here yet</EmptyState.Title>
        <EmptyState.Description>This section will be populated once you add some items.</EmptyState.Description>
      </EmptyState.Header>
    </EmptyState.Root>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <EmptyState.Root style={{ maxWidth: 400 }}>
        <EmptyState.Header>
          <EmptyState.Media>
            <Sad32 />
          </EmptyState.Media>
          <EmptyState.Title size="3" weight="bold">
            Large title
          </EmptyState.Title>
          <EmptyState.Description size="2">With a slightly larger description text size.</EmptyState.Description>
        </EmptyState.Header>
      </EmptyState.Root>

      <EmptyState.Root style={{ maxWidth: 400 }}>
        <EmptyState.Header>
          <EmptyState.Media>
            <Bell16 />
          </EmptyState.Media>
          <EmptyState.Title size="1">Smaller title</EmptyState.Title>
          <EmptyState.Description size="1">With a compact description.</EmptyState.Description>
        </EmptyState.Header>
      </EmptyState.Root>
    </div>
  ),
};

export const IconColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
      {(['gray', 'blue', 'green', 'orange', 'red', 'purple'] as const).map((color) => (
        <EmptyState.Root key={color} style={{ maxWidth: 200 }}>
          <EmptyState.Header>
            <EmptyState.Media variant="icon" color={color}>
              <Document16 />
            </EmptyState.Media>
            <EmptyState.Title>{color}</EmptyState.Title>
          </EmptyState.Header>
        </EmptyState.Root>
      ))}
    </div>
  ),
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
