import type { Meta, StoryObj } from '@storybook/react';

import { ChevronDown16, ChevronLeft16, ChevronRight16, ChevronUp16 } from '@frosted-ui/icons';
import React, { useRef, useState } from 'react';
import {
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Code,
  Heading,
  IconButton,
  Link,
  NumberField,
  ScrollGallery,
  Separator,
  Strong,
  Text,
} from '..';

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
      <Breadcrumbs.Root style={{ marginBottom: 'var(--space-4)' }}>
        <Breadcrumbs.Item render={<a href="#" />} nativeButton={false}>
          Home
        </Breadcrumbs.Item>
        <Breadcrumbs.Item render={<a href="#" />} nativeButton={false}>
          Clothing
        </Breadcrumbs.Item>
        <Breadcrumbs.Item render={<a href="#" />} nativeButton={false}>
          Hoodies
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Hoodie with Logo</Breadcrumbs.Item>
      </Breadcrumbs.Root>

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
                  <ScrollGallery.Item key={img.id} style={{ scrollSnapAlign: 'start', flexShrink: 0, width: '100%' }}>
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
                render={
                  <IconButton
                    variant="surface"
                    size="3"
                    color="gray"
                    highContrast
                    style={{
                      position: 'absolute',
                      left: 'var(--space-3)',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: 'var(--shadow-2)',
                    }}
                  />
                }
              >
                <ChevronLeft16 />
              </ScrollGallery.Previous>

              <ScrollGallery.Next
                step={1}
                tabIndex={-1}
                aria-label="Next image"
                render={
                  <IconButton
                    variant="surface"
                    size="3"
                    color="gray"
                    highContrast
                    style={{
                      position: 'absolute',
                      right: 'var(--space-3)',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: 'var(--shadow-2)',
                    }}
                  />
                }
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

        {/* Right: Product info */}
        <div style={{ flex: 1, paddingTop: 'var(--space-2)' }}>
          <Heading size="6" weight="bold" style={{ marginBottom: 'var(--space-2)' }}>
            Hoodie with Logo
          </Heading>

          <Text size="6" weight="bold" style={{ display: 'block', marginBottom: 'var(--space-4)' }}>
            $45.00
          </Text>

          <Text render={<p />} size="2" color="gray" style={{ marginBottom: 'var(--space-5)', lineHeight: 1.6 }}>
            This is a simple product. A comfortable hoodie featuring an embroidered logo on the chest. Made from premium
            cotton blend for all-day comfort.
          </Text>

          <div
            style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-end', marginBottom: 'var(--space-5)' }}
          >
            <div>
              <Text
                render={<label htmlFor="qty" />}
                size="1"
                color="gray"
                weight="medium"
                style={{ display: 'block', marginBottom: 'var(--space-1)' }}
              >
                Quantity
              </Text>
              <NumberField.Root id="qty" defaultValue={1} min={1} max={99} size="3">
                <NumberField.Input style={{ width: 80 }} />
              </NumberField.Root>
            </div>
            <Button size="3" variant="solid">
              Add to cart
            </Button>
          </div>

          <Separator size="4" style={{ marginBottom: 'var(--space-4)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <Text size="2" color="gray">
              SKU:{' '}
              <Text size="2" color="gray" weight="medium">
                woo-hoodie-with-logo
              </Text>
            </Text>
            <Text size="2" color="gray">
              Category:{' '}
              <Link href="#" size="2">
                Hoodies
              </Link>
            </Text>
          </div>
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
