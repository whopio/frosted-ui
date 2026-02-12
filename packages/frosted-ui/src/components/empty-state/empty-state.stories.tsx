import type { Meta, StoryObj } from '@storybook/react';

import { Bell16, Document16, Download16, MagnifyingGlass16, Plus16, Sad32 } from '@frosted-ui/icons';
import React from 'react';
import { EmptyState, Button, Link } from '..';

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
        <EmptyState.Media>
          <Bell16 />
        </EmptyState.Media>
        <EmptyState.Title>No notifications</EmptyState.Title>
        <EmptyState.Description>
          You don't have any notifications in your inbox yet.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Content>
        <Button>Configure notifications</Button>
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
        <EmptyState.Description>
          Upload your first file to get started.
        </EmptyState.Description>
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

export const WithMultipleActions: Story = {
  render: () => (
    <EmptyState.Root style={{ maxWidth: 400 }}>
      <EmptyState.Header>
        <EmptyState.Media variant="icon">
          <Plus16 />
        </EmptyState.Media>
        <EmptyState.Title>Create your first project</EmptyState.Title>
        <EmptyState.Description>
          Projects help you organize your work. Get started by creating a new project or importing an existing one.
        </EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Content>
        <Button>Create project</Button>
        <Button variant="ghost">Import from GitHub</Button>
      </EmptyState.Content>
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
        <EmptyState.Description>
          This section will be populated once you add some items.
        </EmptyState.Description>
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
          <EmptyState.Description size="2">
            With a slightly larger description text size.
          </EmptyState.Description>
        </EmptyState.Header>
      </EmptyState.Root>

      <EmptyState.Root style={{ maxWidth: 400 }}>
        <EmptyState.Header>
          <EmptyState.Media>
            <Bell16 />
          </EmptyState.Media>
          <EmptyState.Title size="1">
            Smaller title
          </EmptyState.Title>
          <EmptyState.Description size="1">
            With a compact description.
          </EmptyState.Description>
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
