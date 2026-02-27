import type { Meta, StoryObj } from '@storybook/react';

import { ChevronDown16, ChevronLeft16, ChevronRight16, ChevronUp16 } from '@frosted-ui/icons';
import React, { useRef, useState } from 'react';
import { Avatar, Badge, Button, Card, Code, Heading, IconButton, ScrollGallery, Strong, Text } from '..';

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
  args: {},
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollGallery.Root>;

export default meta;
type Story = StoryObj;

function MarkerDots({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <ScrollGallery.ScrollMarker
          key={i}
          index={i}
          render={(props, state) => (
            <button
              {...props}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                border: '1.5px solid var(--gray-8)',
                background: state.active ? 'var(--gray-12)' : 'transparent',
                padding: 0,
                cursor: 'pointer',
                transition: 'background 150ms',
              }}
            />
          )}
        />
      ))}
    </>
  );
}

function PersonCard({ person }: { person: (typeof people)[number] }) {
  return (
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
  );
}

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
          {people.map((person) => (
            <ScrollGallery.Item key={person.name} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
              <PersonCard person={person} />
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
            <ScrollGallery.Previous aria-label="Previous" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next aria-label="Next" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronRight16 />
            </ScrollGallery.Next>
          </div>

          <ScrollGallery.ScrollMarkerGroup
            aria-label="Choose team member"
            style={{ display: 'flex', gap: 'var(--space-1)' }}
          >
            <MarkerDots count={people.length} />
          </ScrollGallery.ScrollMarkerGroup>
        </div>
      </ScrollGallery.Root>
    </div>
  ),
};

const colors = ['crimson', 'indigo', 'cyan', 'orange', 'plum', 'teal', 'violet', 'jade'] as const;

function makeItem(id: number) {
  const color = colors[id % colors.length];
  return { id, name: `Item ${id}`, color, initials: `${id}` };
}

function DynamicItemsDemo() {
  const nextId = useRef(2);
  const [items, setItems] = useState(() => [makeItem(0), makeItem(1)]);

  const prepend = () => {
    const id = nextId.current++;
    setItems((prev) => [makeItem(id), ...prev]);
  };

  const append = () => {
    const id = nextId.current++;
    setItems((prev) => [...prev, makeItem(id)]);
  };

  const removeFirst = () => setItems((prev) => prev.slice(1));
  const removeLast = () => setItems((prev) => prev.slice(0, -1));

  return (
    <div style={{ maxWidth: 720 }}>
      <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
        <Button size="1" variant="soft" onClick={prepend}>
          Prepend
        </Button>
        <Button size="1" variant="soft" color="red" onClick={removeFirst} disabled={items.length === 0}>
          Remove first
        </Button>
        <Button size="1" variant="soft" color="red" onClick={removeLast} disabled={items.length === 0}>
          Remove last
        </Button>
        <Button size="1" variant="soft" onClick={append}>
          Append
        </Button>
      </div>

      <Text render={<div />} size="1" color="gray" style={{ marginBottom: 'var(--space-2)' }}>
        {items.length} item{items.length !== 1 && 's'}
      </Text>

      <ScrollGallery.Root defaultValue={0}>
        <ScrollGallery.Viewport
          aria-label="Dynamic items"
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
          }}
        >
          {items.map((item) => (
            <ScrollGallery.Item key={item.id} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
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
                  <Avatar size="5" fallback={item.initials} color={item.color} />
                  <div style={{ textAlign: 'center' }}>
                    <Text render={<div />} size="2" weight="bold">
                      {item.name}
                    </Text>
                    <div style={{ marginTop: 'var(--space-1)' }}>
                      <Badge size="1" variant="soft" color={item.color}>
                        {item.color}
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
            <ScrollGallery.Previous aria-label="Previous" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next aria-label="Next" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronRight16 />
            </ScrollGallery.Next>
          </div>

          <ScrollGallery.ScrollMarkerGroup
            aria-label="Choose item"
            style={{ display: 'flex', gap: 'var(--space-1)' }}
          >
            <MarkerDots count={items.length} />
          </ScrollGallery.ScrollMarkerGroup>
        </div>
      </ScrollGallery.Root>
    </div>
  );
}

export const DynamicItems: Story = {
  render: () => <DynamicItemsDemo />,
};

export const WithoutScrollSnap: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <ScrollGallery.Root defaultValue={0}>
        <ScrollGallery.Viewport
          aria-label="Team members (no snap)"
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {people.map((person) => (
            <ScrollGallery.Item key={person.name} style={{ flexShrink: 0 }}>
              <PersonCard person={person} />
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
            <ScrollGallery.Previous aria-label="Previous" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next aria-label="Next" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronRight16 />
            </ScrollGallery.Next>
          </div>

          <ScrollGallery.ScrollMarkerGroup
            aria-label="Choose team member"
            style={{ display: 'flex', gap: 'var(--space-1)' }}
          >
            <MarkerDots count={people.length} />
          </ScrollGallery.ScrollMarkerGroup>
        </div>
      </ScrollGallery.Root>
    </div>
  ),
};

function ImperativeScrollToDemo() {
  const galleryRef = useRef<ScrollGallery.ScrollGalleryRootRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [log, setLog] = useState<{ index: number; source: string }[]>([]);

  return (
    <div style={{ maxWidth: 720 }}>
      <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <Text size="2">
          Active: <Code size="2">{activeIndex}</Code>
        </Text>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          {people.map((_, i) => (
            <Button
              key={i}
              size="1"
              variant={activeIndex === i ? 'solid' : 'soft'}
              onClick={() => galleryRef.current?.scrollTo(i)}
            >
              {i}
            </Button>
          ))}
        </div>
      </div>

      <ScrollGallery.Root
        ref={galleryRef}
        onValueChange={(newValue, { source }) => {
          setActiveIndex(newValue);
          setLog((prev) => [{ index: newValue, source }, ...prev].slice(0, 10));
        }}
      >
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
          {people.map((person) => (
            <ScrollGallery.Item key={person.name} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
              <PersonCard person={person} />
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
            <ScrollGallery.Previous aria-label="Previous" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next aria-label="Next" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronRight16 />
            </ScrollGallery.Next>
          </div>

          <ScrollGallery.ScrollMarkerGroup
            aria-label="Choose team member"
            style={{ display: 'flex', gap: 'var(--space-1)' }}
          >
            <MarkerDots count={people.length} />
          </ScrollGallery.ScrollMarkerGroup>
        </div>
      </ScrollGallery.Root>

      <div style={{ marginTop: 'var(--space-4)' }}>
        <Text render={<div />} size="2" weight="bold" style={{ marginBottom: 'var(--space-2)' }}>
          Event log
        </Text>
        <div
          style={{
            fontFamily: 'var(--code-font-family)',
            fontSize: 'var(--font-size-1)',
            lineHeight: 'var(--line-height-2)',
            color: 'var(--gray-11)',
            minHeight: 120,
          }}
        >
          {log.length === 0 ? (
            <Text size="1" color="gray">Scroll, click markers, or use the buttons above to see events…</Text>
          ) : (
            log.map((entry, i) => (
              <div key={i}>
                index: <Code size="1">{entry.index}</Code>{' '}
                source: <Code size="1" color={entry.source === 'scroll' ? 'gray' : 'indigo'}>{entry.source}</Code>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export const ImperativeScrollTo: Story = {
  render: () => <ImperativeScrollToDemo />,
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
      <ScrollGallery.Root defaultValue={0} orientation="vertical">
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <ScrollGallery.Viewport
            aria-label="Team members"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
              overflowY: 'auto',
              scrollSnapType: 'y mandatory',
              scrollbarWidth: 'none',
              height: 360,
            }}
          >
            {people.map((person) => (
              <ScrollGallery.Item key={person.name} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
                <Card size="2" style={{ width: 260 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <Avatar size="4" fallback={person.initials} color={person.color} />
                    <div>
                      <Text render={<div />} size="2" weight="bold">
                        {person.name}
                      </Text>
                      <Badge size="1" variant="soft" color={person.color}>
                        {person.role}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </ScrollGallery.Item>
            ))}
          </ScrollGallery.Viewport>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
            <ScrollGallery.Previous aria-label="Previous" render={<IconButton variant="soft" size="1" color="gray" />}>
              <ChevronUp16 />
            </ScrollGallery.Previous>

            <ScrollGallery.ScrollMarkerGroup
              aria-label="Choose team member"
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}
            >
              <MarkerDots count={people.length} />
            </ScrollGallery.ScrollMarkerGroup>

            <ScrollGallery.Next aria-label="Next" render={<IconButton variant="soft" size="1" color="gray" />}>
              <ChevronDown16 />
            </ScrollGallery.Next>
          </div>
        </div>
      </ScrollGallery.Root>
    </div>
  ),
};

function DefaultValueDemo() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [log, setLog] = useState<{ index: number; source: string }[]>([]);

  return (
    <div style={{ maxWidth: 720 }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Heading size="3" style={{ marginBottom: 'var(--space-2)' }}>
          Default Value
        </Heading>
        <Text render={<p />} size="2" color="gray" style={{ maxWidth: 560, lineHeight: 1.6 }}>
          Use <Code size="2">defaultValue</Code> to initialize the gallery at a specific item.
          Here, the gallery starts at item <Strong>3</Strong> (James Wright) — the viewport
          scrolls there instantly on mount, and the corresponding marker is active. Pair with{' '}
          <Code size="2">onValueChange</Code> to track the active index as the user scrolls.
        </Text>
      </div>

      <Text render={<div />} size="1" color="gray" style={{ marginBottom: 'var(--space-2)' }}>
        Active: <Code size="1">{activeIndex}</Code>
      </Text>

      <ScrollGallery.Root
        defaultValue={3}
        onValueChange={(newValue, { source }) => {
          setActiveIndex(newValue);
          setLog((prev) => [{ index: newValue, source }, ...prev].slice(0, 10));
        }}
      >
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
          {people.map((person) => (
            <ScrollGallery.Item key={person.name} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
              <PersonCard person={person} />
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
            <ScrollGallery.Previous aria-label="Previous" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next aria-label="Next" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronRight16 />
            </ScrollGallery.Next>
          </div>

          <ScrollGallery.ScrollMarkerGroup
            aria-label="Choose team member"
            style={{ display: 'flex', gap: 'var(--space-1)' }}
          >
            <MarkerDots count={people.length} />
          </ScrollGallery.ScrollMarkerGroup>
        </div>
      </ScrollGallery.Root>

      <div style={{ marginTop: 'var(--space-4)' }}>
        <Text render={<div />} size="2" weight="bold" style={{ marginBottom: 'var(--space-2)' }}>
          onValueChange log
        </Text>
        <div
          style={{
            fontFamily: 'var(--code-font-family)',
            fontSize: 'var(--font-size-1)',
            lineHeight: 'var(--line-height-2)',
            color: 'var(--gray-11)',
            minHeight: 120,
          }}
        >
          {log.length === 0 ? (
            <Text size="1" color="gray">Scroll or click markers to see events…</Text>
          ) : (
            log.map((entry, i) => (
              <div key={i}>
                index: <Code size="1">{entry.index}</Code>{' '}
                source: <Code size="1" color={entry.source === 'scroll' ? 'gray' : 'indigo'}>{entry.source}</Code>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export const DefaultValue: Story = {
  render: () => <DefaultValueDemo />,
};

export const ActiveItemHighlight: Story = {
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
          {people.map((person) => (
            <ScrollGallery.Item
              key={person.name}
              style={{ scrollSnapAlign: 'start', flexShrink: 0 }}
              render={(props, state) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    opacity: state.active ? 1 : 0.5,
                    transform: state.active ? 'scale(1)' : 'scale(0.95)',
                    transition: 'opacity 200ms, transform 200ms',
                  }}
                />
              )}
            >
              <PersonCard person={person} />
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
            <ScrollGallery.Previous aria-label="Previous" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next aria-label="Next" render={<IconButton variant="soft" size="2" color="gray" />}>
              <ChevronRight16 />
            </ScrollGallery.Next>
          </div>

          <ScrollGallery.ScrollMarkerGroup
            aria-label="Choose team member"
            style={{ display: 'flex', gap: 'var(--space-1)' }}
          >
            <MarkerDots count={people.length} />
          </ScrollGallery.ScrollMarkerGroup>
        </div>
      </ScrollGallery.Root>
    </div>
  ),
};
