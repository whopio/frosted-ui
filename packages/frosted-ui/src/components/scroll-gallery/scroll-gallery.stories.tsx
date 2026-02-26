import type { Meta, StoryObj } from '@storybook/react';

import { ChevronLeft16, ChevronRight16 } from '@frosted-ui/icons';
import React from 'react';
import { Avatar, Badge, Card, IconButton, ScrollGallery, Text } from '..';

const people = [
  { name: 'Olivia Chen', role: 'Design Lead', color: 'crimson' as const, initials: 'OC' },
  { name: 'Marcus Johnson', role: 'Engineering', color: 'indigo' as const, initials: 'MJ' },
  { name: 'Sofia Andersson', role: 'Product', color: 'cyan' as const, initials: 'SA' },
  { name: 'James Wright', role: 'Marketing', color: 'orange' as const, initials: 'JW' },
  { name: 'Priya Patel', role: 'Design', color: 'plum' as const, initials: 'PP' },
  { name: 'Alex Kim', role: 'Engineering', color: 'teal' as const, initials: 'AK' },
  { name: 'Emma Davis', role: 'Research', color: 'violet' as const, initials: 'ED' },
  { name: 'Noah Garcia', role: 'Engineering', color: 'jade' as const, initials: 'NG' },
];

const meta = {
  title: 'Components/ScrollGallery',
  component: ScrollGallery.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollGallery.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <ScrollGallery.Root defaultValue={0}>
        <ScrollGallery.Viewport
          aria-label="Team members"
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
          }}
        >
          {people.map((person, i) => (
            <ScrollGallery.Item key={person.name} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
              <Card size="2" style={{ width: 220 }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-2) 0',
                  }}
                >
                  <Avatar size="5" fallback={person.initials} color={person.color} />
                  <div style={{ textAlign: 'center' }}>
                    <Text render={<div />} size="2" weight="bold">
                      {person.name}
                    </Text>
                    <div style={{ marginTop: 'var(--space-1)' }}>
                      <Badge size="1" variant="soft" color={person.color}>
                        {person.role}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollGallery.Item>
          ))}
        </ScrollGallery.Viewport>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'var(--space-3)',
          }}
        >
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <ScrollGallery.Previous render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronRight16 />
            </ScrollGallery.Next>
          </div>

          <ScrollGallery.IndicatorGroup
            aria-label="Choose team member"
            style={{ display: 'flex', gap: 'var(--space-1)' }}
          >
            {people.map((_, i) => (
              <ScrollGallery.Indicator
                key={i}
                index={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  border: '1.5px solid var(--gray-8)',
                  background: 'transparent',
                  padding: 0,
                  cursor: 'pointer',
                }}
              />
            ))}
          </ScrollGallery.IndicatorGroup>
        </div>
      </ScrollGallery.Root>
    </div>
  ),
};
