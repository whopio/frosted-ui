import type { Meta, StoryObj } from '@storybook/react';

import { ChevronDown16, ChevronLeft16, ChevronRight16, ChevronUp16 } from '@frosted-ui/icons';
import React, { useRef, useState } from 'react';
import { Avatar, AvatarGroup, Badge, Button, Card, Code, Heading, IconButton, ScrollGallery, Strong, Text } from '..';

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

          <ScrollGallery.ScrollMarkerGroup aria-label="Choose item" style={{ display: 'flex', gap: 'var(--space-1)' }}>
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
            <Text size="1" color="gray">
              Scroll, click markers, or use the buttons above to see events…
            </Text>
          ) : (
            log.map((entry, i) => (
              <div key={i}>
                index: <Code size="1">{entry.index}</Code> source:{' '}
                <Code size="1" color={entry.source === 'scroll' ? 'gray' : 'indigo'}>
                  {entry.source}
                </Code>
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
          Use <Code size="2">defaultValue</Code> to initialize the gallery at a specific item. Here, the gallery starts
          at item <Strong>3</Strong> (James Wright) — the viewport scrolls there instantly on mount, and the
          corresponding marker is active. Pair with <Code size="2">onValueChange</Code> to track the active index as the
          user scrolls.
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
            <Text size="1" color="gray">
              Scroll or click markers to see events…
            </Text>
          ) : (
            log.map((entry, i) => (
              <div key={i}>
                index: <Code size="1">{entry.index}</Code> source:{' '}
                <Code size="1" color={entry.source === 'scroll' ? 'gray' : 'indigo'}>
                  {entry.source}
                </Code>
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

export const StepByItem: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Heading size="3" style={{ marginBottom: 'var(--space-2)' }}>
          Step Navigation
        </Heading>
        <Text render={<p />} size="2" color="gray" style={{ maxWidth: 560, lineHeight: 1.6 }}>
          Pass <Code size="2">step=&#123;1&#125;</Code> to the Previous and Next buttons to scroll by one item at a time
          instead of by page. You can also use <Code size="2">step=&#123;2&#125;</Code> or any number to skip multiple
          items.
        </Text>
      </div>

      <ScrollGallery.Root>
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
            <ScrollGallery.Previous
              step={1}
              aria-label="Previous item"
              render={<IconButton variant="soft" size="2" color="gray" />}
            >
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next
              step={1}
              aria-label="Next item"
              render={<IconButton variant="soft" size="2" color="gray" />}
            >
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

export const StepByItemNoSnap: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Heading size="3" style={{ marginBottom: 'var(--space-2)' }}>
          Step Navigation (No Snap)
        </Heading>
        <Text render={<p />} size="2" color="gray" style={{ maxWidth: 560, lineHeight: 1.6 }}>
          Step buttons work without scroll snapping too. The viewport scrolls to align the target item with the viewport
          start, but without <Code size="2">scroll-snap-type</Code> the scroll position won't snap after a manual
          trackpad swipe.
        </Text>
      </div>

      <ScrollGallery.Root>
        <ScrollGallery.Viewport
          aria-label="Team members (step, no snap)"
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
            <ScrollGallery.Previous
              step={1}
              aria-label="Previous item"
              render={<IconButton variant="soft" size="2" color="gray" />}
            >
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next
              step={1}
              aria-label="Next item"
              render={<IconButton variant="soft" size="2" color="gray" />}
            >
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

const productImages = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/shoe1/600/600',
    thumb: 'https://picsum.photos/seed/shoe1/120/120',
    alt: 'Product front view',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/shoe2/600/600',
    thumb: 'https://picsum.photos/seed/shoe2/120/120',
    alt: 'Product side view',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/shoe3/600/600',
    thumb: 'https://picsum.photos/seed/shoe3/120/120',
    alt: 'Product back view',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/shoe4/600/600',
    thumb: 'https://picsum.photos/seed/shoe4/120/120',
    alt: 'Product detail',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/shoe5/600/600',
    thumb: 'https://picsum.photos/seed/shoe5/120/120',
    alt: 'Product on model',
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/shoe6/600/600',
    thumb: 'https://picsum.photos/seed/shoe6/120/120',
    alt: 'Product packaging',
  },
];

function ProductGalleryDemo() {
  return (
    <div style={{ maxWidth: 900 }}>
      <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
        {/* Left: Image gallery */}
        <div style={{ flex: '0 0 480px' }}>
          <ScrollGallery.Root loop>
            {/* Main image with overlay nav buttons */}
            <div style={{ position: 'relative' }}>
              <ScrollGallery.Viewport
                aria-label="Product images"
                style={{
                  display: 'flex',
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory',
                  scrollbarWidth: 'none',
                  borderRadius: 'var(--radius-3)',
                  background: 'var(--gray-3)',
                }}
              >
                {productImages.map((img) => (
                  <ScrollGallery.Item key={img.id} style={{ scrollSnapAlign: 'center', flexShrink: 0, width: '100%' }}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }}
                    />
                  </ScrollGallery.Item>
                ))}
              </ScrollGallery.Viewport>

              <ScrollGallery.Previous
                step={1}
                tabIndex={-1}
                aria-label="Previous image"
                style={{
                  color: 'white',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px) invert(0.3) brightness(0.9) saturate(180%)',
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.13)',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  position: 'absolute',
                  left: 'var(--space-3)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ChevronLeft16 />
              </ScrollGallery.Previous>

              <ScrollGallery.Next
                step={1}
                tabIndex={-1}
                aria-label="Next image"
                style={{
                  color: 'white',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px) invert(0.3) brightness(0.9) saturate(180%)',
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.13)',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  position: 'absolute',
                  right: 'var(--space-3)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ChevronRight16 />
              </ScrollGallery.Next>
            </div>

            {/* Dash markers — purely visual, not focusable (thumbnails handle keyboard nav) */}
            <ScrollGallery.ScrollMarkerGroup
              aria-hidden="true"
              tabIndex={-1}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-2)',
                marginTop: 'var(--space-3)',
              }}
            >
              {productImages.map((_, i) => (
                <ScrollGallery.ScrollMarker
                  key={i}
                  index={i}
                  render={(props, state) => (
                    <button
                      {...props}
                      tabIndex={-1}
                      style={{
                        width: 24,
                        height: 3,
                        borderRadius: 2,
                        border: 'none',
                        background: state.active ? 'var(--gray-12)' : 'var(--gray-6)',
                        padding: 0,
                        cursor: 'pointer',
                        transition: 'background 150ms',
                      }}
                    />
                  )}
                />
              ))}
            </ScrollGallery.ScrollMarkerGroup>

            {/* Thumbnail markers */}
            <ScrollGallery.ScrollMarkerGroup
              aria-label="Product thumbnails"
              style={{
                display: 'flex',
                gap: 'var(--space-2)',
                marginTop: 'var(--space-3)',
              }}
            >
              {productImages.map((img, i) => (
                <ScrollGallery.ScrollMarker
                  key={img.id}
                  index={i}
                  render={(props, state) => (
                    <button
                      {...props}
                      style={{
                        flexShrink: 0,
                        width: 80,
                        height: 80,
                        borderRadius: 'var(--radius-2)',
                        overflow: 'hidden',
                        border: state.active ? '2px solid var(--gray-12)' : '2px solid transparent',
                        padding: 0,
                        cursor: 'pointer',
                        opacity: state.active ? 1 : 0.6,
                        transition: 'opacity 150ms, border-color 150ms',
                        background: 'none',
                      }}
                    >
                      <img
                        src={img.thumb}
                        alt={img.alt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </button>
                  )}
                />
              ))}
            </ScrollGallery.ScrollMarkerGroup>
          </ScrollGallery.Root>
        </div>
      </div>
    </div>
  );
}

export const ProductGallery: Story = {
  render: () => <ProductGalleryDemo />,
};

export const Loop: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Heading size="3" weight="bold" style={{ marginBottom: 'var(--space-1)' }}>
          Loop
        </Heading>
        <Text render={<p />} size="2" color="gray">
          With <Code size="2">loop</Code> enabled, the Previous and Next buttons never disable. Clicking Next at the end
          wraps to the first item, and Previous at the start wraps to the last. Arrow keys on markers also wrap.
        </Text>
      </div>

      <ScrollGallery.Root loop>
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

export const LoopStepByItem: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Heading size="3" weight="bold" style={{ marginBottom: 'var(--space-1)' }}>
          Loop + Step by Item
        </Heading>
        <Text render={<p />} size="2" color="gray">
          Combining <Code size="2">loop</Code> with <Code size="2">step={'{1}'}</Code> on the buttons. Each click
          advances one item, and wraps at the boundaries.
        </Text>
      </div>

      <ScrollGallery.Root loop>
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
            <ScrollGallery.Previous
              step={1}
              aria-label="Previous item"
              render={<IconButton variant="soft" size="2" color="gray" />}
            >
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next
              step={1}
              aria-label="Next item"
              render={<IconButton variant="soft" size="2" color="gray" />}
            >
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

export const ResizableViewport: Story = {
  render: () => (
    <div
      style={{
        width: 720,
        minWidth: 200,
        maxWidth: '100%',
        resize: 'horizontal',
        overflow: 'hidden',
        border: '1px dashed var(--gray-6)',
        borderRadius: 'var(--radius-3)',
        padding: 'var(--space-4)',
      }}
    >
      <Text size="1" color="gray" render={<div />} style={{ marginBottom: 'var(--space-3)' }}>
        Drag the bottom-right corner to resize
      </Text>
      <ScrollGallery.Root>
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

export const SnapToCenter: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <ScrollGallery.Root defaultValue={3}>
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
            <ScrollGallery.Item key={person.name} style={{ scrollSnapAlign: 'center', flexShrink: 0 }}>
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
            <ScrollGallery.Previous
              step={1}
              aria-label="Previous"
              render={<IconButton variant="soft" size="2" color="gray" />}
            >
              <ChevronLeft16 />
            </ScrollGallery.Previous>
            <ScrollGallery.Next step={1} aria-label="Next" render={<IconButton variant="soft" size="2" color="gray" />}>
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

// ---------------------------------------------------------------------------
// Real-world demo: Testimonials
// ---------------------------------------------------------------------------

const testimonials = [
  {
    quote: 'This design system has completely transformed how we build products. The component quality is unmatched.',
    author: 'Sarah Chen',
    title: 'VP of Engineering, Acme Corp',
    initials: 'SC',
    color: 'crimson' as const,
    rating: 5,
  },
  {
    quote:
      'We cut our development time in half after adopting this library. The APIs are intuitive and the components are rock solid.',
    author: 'David Park',
    title: 'Lead Developer, Nexus Labs',
    initials: 'DP',
    color: 'indigo' as const,
    rating: 5,
  },
  {
    quote:
      'The attention to accessibility out of the box saved our team weeks of work. Truly best-in-class primitives.',
    author: 'Maria Gonzalez',
    title: 'Head of Product, Orbit.io',
    initials: 'MG',
    color: 'teal' as const,
    rating: 5,
  },
  {
    quote:
      "Finally a component library that doesn't fight you on styling. Headless where it matters, polished where you need it.",
    author: 'James Liu',
    title: 'Senior Engineer, CloudBase',
    initials: 'JL',
    color: 'orange' as const,
    rating: 4,
  },
  {
    quote:
      'We migrated from three different UI libraries to just this one. Our bundle size dropped by 40% and DX went through the roof.',
    author: 'Amara Osei',
    title: 'CTO, Paystack',
    initials: 'AO',
    color: 'plum' as const,
    rating: 5,
  },
];

export const Testimonials: Story = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
        <Heading size="5" weight="bold">
          What people are saying
        </Heading>
        <Text render={<p />} size="2" color="gray" style={{ marginTop: 'var(--space-2)' }}>
          Trusted by teams at companies of all sizes.
        </Text>
      </div>

      <ScrollGallery.Root>
        <ScrollGallery.Viewport
          aria-label="Customer testimonials"
          style={{
            display: 'flex',
            gap: 'var(--space-4)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            paddingInline: 'calc(50% - 170px)',
            maskImage: 'linear-gradient(to right, transparent, black 170px, black calc(100% - 170px), transparent)',
            paddingBlock: 'var(--space-1)',
          }}
        >
          {testimonials.map((t) => (
            <ScrollGallery.Item key={t.author} style={{ scrollSnapAlign: 'center', flexShrink: 0, width: 340 }}>
              <Card size="3" style={{ height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} style={{ color: i < t.rating ? 'var(--amber-9)' : 'var(--gray-5)', fontSize: 14 }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <Text size="2" style={{ flex: 1, lineHeight: 1.6 }}>
                    &ldquo;{t.quote}&rdquo;
                  </Text>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'auto' }}>
                    <Avatar size="3" fallback={t.initials} color={t.color} />
                    <div>
                      <Text render={<div />} size="2" weight="bold">
                        {t.author}
                      </Text>
                      <Text render={<div />} size="1" color="gray">
                        {t.title}
                      </Text>
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
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'var(--space-4)',
            marginTop: 'var(--space-4)',
          }}
        >
          <ScrollGallery.Previous
            step={1}
            aria-label="Previous testimonial"
            render={<IconButton variant="surface" size="2" color="gray" />}
          >
            <ChevronLeft16 />
          </ScrollGallery.Previous>

          <ScrollGallery.ScrollMarkerGroup
            aria-label="Testimonial pages"
            style={{ display: 'flex', gap: 'var(--space-1)' }}
          >
            <MarkerDots count={testimonials.length} />
          </ScrollGallery.ScrollMarkerGroup>

          <ScrollGallery.Next
            step={1}
            aria-label="Next testimonial"
            render={<IconButton variant="surface" size="2" color="gray" />}
          >
            <ChevronRight16 />
          </ScrollGallery.Next>
        </div>
      </ScrollGallery.Root>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Real-world demo: Feature Tour / Onboarding
// ---------------------------------------------------------------------------

const onboardingSteps = [
  {
    step: 1,
    title: 'Create your workspace',
    description: 'Set up a shared workspace for your team. Invite collaborators and organize projects into folders.',
    color: 'indigo' as const,
    icon: '🏗️',
  },
  {
    step: 2,
    title: 'Connect your tools',
    description: 'Integrate with GitHub, Figma, Linear, Slack and 50+ other tools your team already uses.',
    color: 'cyan' as const,
    icon: '🔗',
  },
  {
    step: 3,
    title: 'Design your components',
    description:
      'Build reusable components with our visual editor. Changes sync across all your projects in real time.',
    color: 'violet' as const,
    icon: '🎨',
  },
  {
    step: 4,
    title: 'Ship to production',
    description: 'Deploy with one click. We handle hosting, CDN, versioning and rollbacks automatically.',
    color: 'jade' as const,
    icon: '🚀',
  },
];

function FeatureTourDemo() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div style={{ maxWidth: 560 }}>
      <ScrollGallery.Root onValueChange={(index) => setActiveStep(index)}>
        <ScrollGallery.Viewport
          aria-label="Getting started steps"
          style={{
            display: 'flex',
            gap: 'var(--space-4)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            paddingInline: 'calc(50% - 220px)',
          }}
        >
          {onboardingSteps.map((s) => (
            <ScrollGallery.Item key={s.step} style={{ scrollSnapAlign: 'center', flexShrink: 0, width: 440 }}>
              <Card size="3" style={{ height: '100%' }}>
                <div style={{ padding: 'var(--space-4) 0', textAlign: 'center' }}>
                  <div style={{ fontSize: 48, marginBottom: 'var(--space-4)' }}>{s.icon}</div>
                  <Badge size="2" variant="soft" color={s.color} style={{ marginBottom: 'var(--space-3)' }}>
                    Step {s.step} of {onboardingSteps.length}
                  </Badge>
                  <Heading size="4" weight="bold" render={<div />} style={{ marginBottom: 'var(--space-2)' }}>
                    {s.title}
                  </Heading>
                  <Text
                    render={<p />}
                    size="2"
                    color="gray"
                    style={{ maxWidth: 360, margin: '0 auto', lineHeight: 1.6 }}
                  >
                    {s.description}
                  </Text>
                </div>
              </Card>
            </ScrollGallery.Item>
          ))}
        </ScrollGallery.Viewport>

        {/* Progress bar */}
        <div
          style={{
            height: 3,
            background: 'var(--gray-4)',
            borderRadius: 2,
            marginBottom: 'var(--space-4)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${((activeStep + 1) / onboardingSteps.length) * 100}%`,
              background: `var(--${onboardingSteps[activeStep].color}-9)`,
              borderRadius: 2,
              transition: 'width 300ms ease, background 300ms ease',
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ScrollGallery.Previous
            step={1}
            render={(props, state) => (
              <Button {...props} variant="soft" color="gray" disabled={state.disabled}>
                <ChevronLeft16 /> Back
              </Button>
            )}
          />

          <ScrollGallery.ScrollMarkerGroup aria-label="Go to step" style={{ display: 'flex', gap: 'var(--space-2)' }}>
            {onboardingSteps.map((s, i) => (
              <ScrollGallery.ScrollMarker
                key={s.step}
                index={i}
                render={(props, state) => (
                  <button
                    {...props}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 'var(--radius-full)',
                      border: 'none',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 150ms',
                      background: state.active ? `var(--${onboardingSteps[i].color}-9)` : 'var(--gray-4)',
                      color: state.active ? 'white' : 'var(--gray-11)',
                    }}
                  >
                    {s.step}
                  </button>
                )}
              />
            ))}
          </ScrollGallery.ScrollMarkerGroup>

          <ScrollGallery.Next
            step={1}
            render={(props, state) => (
              <Button
                {...props}
                variant={activeStep === onboardingSteps.length - 1 ? 'solid' : 'soft'}
                color={activeStep === onboardingSteps.length - 1 ? 'jade' : 'gray'}
                disabled={state.disabled}
              >
                {activeStep === onboardingSteps.length - 1 ? 'Get started' : 'Next'} <ChevronRight16 />
              </Button>
            )}
          />
        </div>
      </ScrollGallery.Root>
    </div>
  );
}

export const FeatureTour: Story = {
  render: () => <FeatureTourDemo />,
};

// ---------------------------------------------------------------------------
// Real-world demo: Timeline
// ---------------------------------------------------------------------------

const timelineEvents = [
  {
    date: 'Jan 2024',
    title: 'Company Founded',
    description: 'Started with a team of 3 in a small office in San Francisco.',
    people: ['SC', 'DP', 'MG'],
    color: 'indigo' as const,
  },
  {
    date: 'Apr 2024',
    title: 'Seed Round',
    description: 'Raised $4M seed round led by Sequoia Capital.',
    people: ['SC', 'DP'],
    color: 'jade' as const,
  },
  {
    date: 'Jul 2024',
    title: 'First 100 Customers',
    description: 'Reached product-market fit with 100 paying customers in 6 months.',
    people: ['SC', 'JL', 'AO'],
    color: 'amber' as const,
  },
  {
    date: 'Oct 2024',
    title: 'Team of 20',
    description: 'Scaled the engineering and design teams across 3 timezones.',
    people: ['SC', 'DP', 'MG', 'JL'],
    color: 'violet' as const,
  },
  {
    date: 'Jan 2025',
    title: 'Series A',
    description: 'Raised $18M Series A to expand into enterprise market.',
    people: ['SC', 'DP', 'AO'],
    color: 'crimson' as const,
  },
  {
    date: 'Jun 2025',
    title: 'Enterprise Launch',
    description: 'Launched enterprise tier with SSO, audit logs, and dedicated support.',
    people: ['SC', 'MG', 'JL', 'AO'],
    color: 'cyan' as const,
  },
  {
    date: 'Dec 2025',
    title: '10,000 Teams',
    description: 'Reached 10,000 active teams on the platform worldwide.',
    people: ['SC', 'DP', 'MG', 'JL', 'AO'],
    color: 'orange' as const,
  },
];

export const Timeline: Story = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <div style={{ marginBottom: 'var(--space-5)' }}>
        <Heading size="5" weight="bold">
          Our journey
        </Heading>
        <Text render={<p />} size="2" color="gray" style={{ marginTop: 'var(--space-1)' }}>
          Key milestones that shaped who we are today.
        </Text>
      </div>

      <ScrollGallery.Root>
        <div style={{ position: 'relative' }}>
          <ScrollGallery.Previous
            aria-label="Earlier milestones"
            render={(props, state) => (
              <IconButton
                {...props}
                variant="surface"
                size="2"
                color="gray"
                highContrast
                disabled={state.disabled}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  boxShadow: 'var(--shadow-3)',
                }}
              />
            )}
          >
            <ChevronLeft16 />
          </ScrollGallery.Previous>

          <ScrollGallery.Viewport
            aria-label="Company timeline"
            style={{
              display: 'flex',
              gap: 'var(--space-4)',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              padding: '0 var(--space-8)',
            }}
          >
            {timelineEvents.map((event) => (
              <ScrollGallery.Item key={event.date} style={{ scrollSnapAlign: 'start', flexShrink: 0, width: 260 }}>
                <Card size="2" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Badge size="1" variant="surface" color={event.color}>
                        {event.date}
                      </Badge>
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: 'var(--radius-full)',
                          background: `var(--${event.color}-9)`,
                        }}
                      />
                    </div>
                    <div>
                      <Text render={<div />} size="2" weight="bold" style={{ marginBottom: 'var(--space-1)' }}>
                        {event.title}
                      </Text>
                      <Text render={<div />} size="2" color="gray" style={{ lineHeight: 1.5 }}>
                        {event.description}
                      </Text>
                    </div>
                    <AvatarGroup.Root size="1">
                      {event.people.map((initials) => (
                        <AvatarGroup.Avatar
                          key={initials}
                          fallback={initials}
                          color={
                            initials === 'SC'
                              ? 'crimson'
                              : initials === 'DP'
                                ? 'indigo'
                                : initials === 'MG'
                                  ? 'teal'
                                  : initials === 'JL'
                                    ? 'orange'
                                    : 'plum'
                          }
                        />
                      ))}
                    </AvatarGroup.Root>
                  </div>
                </Card>
              </ScrollGallery.Item>
            ))}
          </ScrollGallery.Viewport>

          <ScrollGallery.Next
            aria-label="Later milestones"
            render={(props, state) => (
              <IconButton
                {...props}
                variant="surface"
                size="2"
                color="gray"
                highContrast
                disabled={state.disabled}
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  boxShadow: 'var(--shadow-3)',
                }}
              />
            )}
          >
            <ChevronRight16 />
          </ScrollGallery.Next>
        </div>

        <ScrollGallery.ScrollMarkerGroup
          aria-label="Jump to milestone"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-1)',
            marginTop: 'var(--space-4)',
          }}
        >
          {timelineEvents.map((event, i) => (
            <ScrollGallery.ScrollMarker
              key={event.date}
              index={i}
              render={(props, state) => (
                <button
                  {...props}
                  style={{
                    height: 6,
                    width: state.active ? 24 : 6,
                    borderRadius: 3,
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    background: state.active ? `var(--${event.color}-9)` : 'var(--gray-6)',
                    transition: 'all 200ms ease',
                  }}
                />
              )}
            />
          ))}
        </ScrollGallery.ScrollMarkerGroup>
      </ScrollGallery.Root>
    </div>
  ),
};
