import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  Avatar,
  Button,
  Code,
  DataList,
  Heading,
  HoverCard,
  Inset,
  Link,
  Strong,
  Text,
  hoverCardContentPropDefs,
} from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/HoverCard',
  component: HoverCard.Content,
  args: {},

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: (args) => (
    <Text>
      Follow{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="https://github.com/whopio/frosted-ui" target="_blank">
            frosted-ui
          </Link>
        </HoverCard.Trigger>
        <HoverCard.Content {...args}>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <Avatar size="3" fallback="FUI" />
            <div>
              <Heading size="3" as="h3">
                Frosted UI
              </Heading>
              <Text as="div" size="2" color="gray">
                frosted-ui
              </Text>

              <Text as="div" size="2" style={{ maxWidth: 300, marginTop: 'var(--space-3)' }}>
                React components library built on top of Base UI primitives.
              </Text>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>{' '}
      for updates.
    </Text>
  ),
};

export const Size: Story = {
  args: {
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">Size one</Link>
        </HoverCard.Trigger>
        <HoverCard.Content {...args} size="1">
          <Text as="div" size="1" style={{ maxWidth: 325 }}>
            <Strong>Typography</Strong> is the art and technique of arranging type to make written language legible,
            readable and appealing when displayed.
          </Text>
        </HoverCard.Content>
      </HoverCard.Root>

      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">Size two</Link>
        </HoverCard.Trigger>
        <HoverCard.Content {...args} size="2">
          <Text as="div" size="2" style={{ maxWidth: 350 }}>
            <Strong>Typography</Strong> is the art and technique of arranging type to make written language legible,
            readable and appealing when displayed.
          </Text>
        </HoverCard.Content>
      </HoverCard.Root>

      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">Size three</Link>
        </HoverCard.Trigger>
        <HoverCard.Content {...args} size="3">
          <Text as="div" size="3" style={{ maxWidth: 400 }}>
            <Strong>Typography</Strong> is the art and technique of arranging type to make written language legible,
            readable and appealing when displayed.
          </Text>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: (args) => (
    <Text>
      Technology revolutionized{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">typography</Link>
        </HoverCard.Trigger>

        <HoverCard.Content {...args}>
          <div style={{ display: 'flex' }}>
            <Inset side="left" pr="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?&auto=format&fit=crop&w=300&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  height: '100%',
                  width: 150,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>

            <Text size="2" style={{ maxWidth: 250 }} as="p">
              <Strong>Typography</Strong> is the art and technique of arranging type to make written language legible,
              readable and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes,
              line lengths, line-spacing (leading), and letter-spacing (tracking)…
            </Text>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>{' '}
      in the latter twentieth century.
    </Text>
  ),
};

export const Delays: Story = {
  name: 'Custom Delays',
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
      <Text>
        The <Code>delay</Code> and <Code>closeDelay</Code> props on <Code>HoverCard.Trigger</Code> control how long to
        wait before opening/closing the hover card. This is useful for preventing accidental triggers.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        <HoverCard.Root>
          <HoverCard.Trigger delay={0} closeDelay={0}>
            <Link href="#">Instant (0ms)</Link>
          </HoverCard.Trigger>
          <HoverCard.Content {...args}>
            <Text size="2">Opens and closes instantly with no delay.</Text>
          </HoverCard.Content>
        </HoverCard.Root>

        <HoverCard.Root>
          <HoverCard.Trigger delay={200} closeDelay={150}>
            <Link href="#">Default (200/150ms)</Link>
          </HoverCard.Trigger>
          <HoverCard.Content {...args}>
            <Text size="2">Uses the default delays: 200ms open, 150ms close.</Text>
          </HoverCard.Content>
        </HoverCard.Root>

        <HoverCard.Root>
          <HoverCard.Trigger delay={600} closeDelay={300}>
            <Link href="#">Slow (600/300ms)</Link>
          </HoverCard.Trigger>
          <HoverCard.Content {...args}>
            <Text size="2">Slower delays for more deliberate interactions.</Text>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  name: 'Controlled Mode',
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: function ControlledDemo(args) {
    const [open, setOpen] = React.useState(false);
    const [hoverCount, setHoverCount] = React.useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
        <Text>
          Use <Code>open</Code> and <Code>onOpenChange</Code> props on <Code>HoverCard.Root</Code> for controlled mode.
        </Text>

        <DataList.Root>
          <DataList.Item>
            <DataList.Label>Open state</DataList.Label>
            <DataList.Value>
              <Code>{String(open)}</Code>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Hover count</DataList.Label>
            <DataList.Value>
              <Code>{hoverCount}</Code>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>

        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Button variant="soft" size="1" onClick={() => setOpen(!open)}>
            Toggle programmatically
          </Button>
          <Button variant="soft" size="1" color="gray" onClick={() => setHoverCount(0)}>
            Reset count
          </Button>
        </div>

        <Text>
          Hover over{' '}
          <HoverCard.Root
            open={open}
            onOpenChange={(newOpen) => {
              setOpen(newOpen);
              if (newOpen) setHoverCount((c) => c + 1);
            }}
          >
            <HoverCard.Trigger>
              <Link href="#">this link</Link>
            </HoverCard.Trigger>
            <HoverCard.Content {...args}>
              <Text size="2">This is a controlled hover card. You've hovered {hoverCount} times.</Text>
            </HoverCard.Content>
          </HoverCard.Root>{' '}
          to see the hover card.
        </Text>
      </div>
    );
  },
};

export const Positioning: Story = {
  name: 'Positioning',
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 600 }}>
      <Text>
        Use <Code>side</Code> and <Code>alignment</Code> props to control positioning.
      </Text>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-4)',
          padding: 'var(--space-6)',
        }}
      >
        {/* Top row */}
        <div />
        <div style={{ textAlign: 'center' }}>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="#">Top</Link>
            </HoverCard.Trigger>
            <HoverCard.Content {...args} side="top" alignment="center">
              <Text size="2">Positioned on top, centered</Text>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
        <div />

        {/* Middle row */}
        <div style={{ textAlign: 'center' }}>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="#">Left</Link>
            </HoverCard.Trigger>
            <HoverCard.Content {...args} side="left" alignment="center">
              <Text size="2">Positioned on left, centered</Text>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
        <div />
        <div style={{ textAlign: 'center' }}>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="#">Right</Link>
            </HoverCard.Trigger>
            <HoverCard.Content {...args} side="right" alignment="center">
              <Text size="2">Positioned on right, centered</Text>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>

        {/* Bottom row */}
        <div />
        <div style={{ textAlign: 'center' }}>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="#">Bottom</Link>
            </HoverCard.Trigger>
            <HoverCard.Content {...args} side="bottom" alignment="center">
              <Text size="2">Positioned on bottom, centered</Text>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
        <div />
      </div>

      <Text size="2" color="gray">
        Alignment options: <Code>start</Code>, <Code>center</Code>, <Code>end</Code>
      </Text>
    </div>
  ),
};

export const ProfileCard: Story = {
  name: 'Profile Card (Real World)',
  args: {
    size: '2',
    variant: 'translucent',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
      <Text>
        A common use case is showing user profiles on hover. This provides quick context without navigating away.
      </Text>

      <Text>
        The project was created by{' '}
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Link href="https://github.com/whopio">@whopio</Link>
          </HoverCard.Trigger>
          <HoverCard.Content {...args}>
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <Avatar
                size="4"
                src="https://avatars.githubusercontent.com/u/91078276?s=200&v=4"
                fallback="W"
                shape="square"
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                <Heading size="3" as="h3">
                  Whop
                </Heading>
                <Text as="div" size="2" color="gray">
                  @whopio
                </Text>
                <Text as="div" size="2" style={{ marginTop: 'var(--space-2)', maxWidth: 280 }}>
                  Build, sell, and engage with software products. We make it easy for creators to launch and grow their
                  digital businesses.
                </Text>
                <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
                  <Text size="2" color="gray">
                    <Strong>127</Strong> repos
                  </Text>
                  <Text size="2" color="gray">
                    <Strong>42</Strong> members
                  </Text>
                </div>
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard.Root>{' '}
        and is open source.
      </Text>
    </div>
  ),
};

export const LinkPreview: Story = {
  name: 'Link Preview',
  args: {
    size: '2',
    variant: 'translucent',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
      <Text>
        HoverCard is perfect for showing link previews, giving users a glimpse of what they'll see before clicking.
      </Text>

      <Text>
        The principles of good{' '}
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Link href="https://en.wikipedia.org/wiki/Typography" target="_blank">
              typography
            </Link>
          </HoverCard.Trigger>
          <HoverCard.Content {...args}>
            <Inset side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=200&fit=crop"
                alt="Typography example"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 120,
                  objectFit: 'cover',
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <div style={{ maxWidth: 300 }}>
              <Text size="2" weight="medium" as="div">
                Typography - Wikipedia
              </Text>
              <Text size="1" color="gray" as="div" style={{ marginTop: 'var(--space-1)' }}>
                en.wikipedia.org
              </Text>
              <Text size="2" as="div" style={{ marginTop: 'var(--space-2)' }}>
                Typography is the art and science of arranging type to make written language clear, visually appealing,
                and effective in communication.
              </Text>
            </div>
          </HoverCard.Content>
        </HoverCard.Root>{' '}
        remain into the digital age.
      </Text>
    </div>
  ),
};

export const OpenChangeComplete: Story = {
  name: 'Open Change Complete Callback',
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: function OpenChangeCompleteDemo(args) {
    const [events, setEvents] = React.useState<string[]>([]);

    const addEvent = (event: string) => {
      const time = new Date().toLocaleTimeString('en-US', { hour12: false });
      setEvents((prev) => [`${time} - ${event}`, ...prev].slice(0, 6));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
        <Text>
          <Code>onOpenChange</Code> fires immediately, while <Code>onOpenChangeComplete</Code> fires after animations
          complete. Useful for cleanup actions that should wait for exit animations.
        </Text>

        <Text>
          Hover over{' '}
          <HoverCard.Root
            onOpenChange={(open) => addEvent(`onOpenChange: ${open}`)}
            onOpenChangeComplete={(open) => addEvent(`onOpenChangeComplete: ${open}`)}
          >
            <HoverCard.Trigger>
              <Link href="#">this link</Link>
            </HoverCard.Trigger>
            <HoverCard.Content {...args}>
              <Text size="2">Watch the event log to see the timing difference.</Text>
            </HoverCard.Content>
          </HoverCard.Root>{' '}
          to see the events.
        </Text>

        <div
          style={{
            padding: 'var(--space-3)',
            backgroundColor: 'var(--gray-2)',
            borderRadius: 'var(--radius-2)',
            fontFamily: 'monospace',
            fontSize: 'var(--font-size-1)',
            minHeight: 100,
          }}
        >
          <Text size="1" color="gray" weight="medium" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
            Event Log:
          </Text>
          {events.length === 0 ? (
            <Text size="1" color="gray">
              Hover to generate events...
            </Text>
          ) : (
            events.map((event, i) => (
              <div key={i} style={{ color: 'var(--gray-11)' }}>
                {event}
              </div>
            ))
          )}
        </div>
      </div>
    );
  },
};

export const Anchor: Story = {
  name: 'Custom Anchor',
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: function AnchorDemo(args) {
    const avatarRef = React.useRef<HTMLDivElement>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
        <Text>
          Use the <Code>anchor</Code> prop on <Code>HoverCard.Content</Code> to position relative to a different
          element.
        </Text>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex' }} ref={avatarRef}>
            <Avatar size="4" fallback="JD" shape="circle" color="lime" />
          </div>

          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="#" color="lime">
                John Doe
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content {...args} anchor={avatarRef}>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <div>
                  <Text size="2" weight="medium" as="div">
                    John Doe
                  </Text>
                  <Text size="2" color="gray" as="div">
                    Software Engineer
                  </Text>
                  <Text size="2" as="div" style={{ marginTop: 'var(--space-2)', maxWidth: 200 }}>
                    Building great user experiences with React and TypeScript.
                  </Text>
                </div>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>

          <Text size="2" color="gray">
            ← Hover the link, card appears near avatar
          </Text>
        </div>
      </div>
    );
  },
};

export const WithButton: Story = {
  name: 'With Button Trigger',
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
      <Text>
        The trigger can be any element. Use the <Code>render</Code> pattern to wrap buttons or other interactive
        elements.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Button variant="soft">Hover me</Button>
          </HoverCard.Trigger>
          <HoverCard.Content {...args}>
            <Text size="2">This hover card is triggered by a button instead of a link.</Text>
          </HoverCard.Content>
        </HoverCard.Root>

        <HoverCard.Root>
          <HoverCard.Trigger>
            <Avatar fallback="AB" shape="circle" style={{ cursor: 'pointer' }} />
          </HoverCard.Trigger>
          <HoverCard.Content {...args}>
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <div>
                <Text size="2" weight="medium" as="div">
                  Alice Brown
                </Text>
                <Text size="2" color="gray" as="div">
                  Product Designer
                </Text>
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>
    </div>
  ),
};

export const CollisionBoundary: Story = {
  name: 'Collision Boundary',
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: function CollisionBoundaryDemo(args) {
    const [boundary, setBoundary] = React.useState<HTMLDivElement | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 600 }}>
        <Text>
          The <Code>collisionBoundary</Code> prop constrains the hover card to stay within a specific element instead of
          the viewport.
        </Text>

        <div
          ref={setBoundary}
          style={{
            border: '2px dashed var(--gray-6)',
            borderRadius: 'var(--radius-3)',
            padding: 'var(--space-6)',
            height: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Text size="1" color="gray" style={{ position: 'absolute', top: 'var(--space-2)', left: 'var(--space-2)' }}>
            Collision boundary
          </Text>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="#">Hover me</Link>
            </HoverCard.Trigger>
            <HoverCard.Content {...args} collisionBoundary={boundary ?? undefined} side="bottom">
              <Text size="2" style={{ maxWidth: 250 }}>
                This hover card is constrained to stay within the dashed boundary, not the viewport.
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
      </div>
    );
  },
};

export const CollisionAvoidance: Story = {
  name: 'Collision Avoidance',
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: function CollisionAvoidanceDemo(args) {
    const [boundary, setBoundary] = React.useState<HTMLDivElement | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 600 }}>
        <Text>
          The <Code>collisionAvoidance</Code> prop controls how the hover card avoids collisions. It accepts an object
          with <Code>side</Code> and <Code>align</Code> properties.
        </Text>
        <ul style={{ margin: 0, paddingLeft: 'var(--space-4)' }}>
          <li>
            <Text size="2">
              <Code>side: 'flip'</Code> (default) - Flips to opposite side if not enough space
            </Text>
          </li>
          <li>
            <Text size="2">
              <Code>side: 'none'</Code> - No side collision avoidance
            </Text>
          </li>
          <li>
            <Text size="2">
              <Code>align: 'flip' | 'shift' | 'none'</Code> - Controls alignment axis behavior
            </Text>
          </li>
        </ul>

        <div
          ref={setBoundary}
          style={{
            height: 400,
            overflow: 'auto',
            border: '1px solid var(--gray-6)',
            borderRadius: 'var(--radius-2)',
            position: 'relative',
          }}
        >
          <div style={{ height: 400 }} />
          <div style={{ display: 'flex', gap: 'var(--space-6)', justifyContent: 'center', padding: 'var(--space-4)' }}>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link href="#">flip (default)</Link>
              </HoverCard.Trigger>
              <HoverCard.Content
                {...args}
                side="top"
                collisionAvoidance={{ side: 'flip' }}
                collisionBoundary={boundary ?? undefined}
              >
                <Text size="2" style={{ maxWidth: 200 }}>
                  This will flip to bottom if there's not enough space on top.
                </Text>
              </HoverCard.Content>
            </HoverCard.Root>

            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link href="#">align: shift</Link>
              </HoverCard.Trigger>
              <HoverCard.Content
                {...args}
                side="top"
                collisionAvoidance={{ side: 'flip', align: 'shift' }}
                collisionBoundary={boundary ?? undefined}
              >
                <Text size="2" style={{ maxWidth: 200 }}>
                  Flips side, shifts alignment to stay in view.
                </Text>
              </HoverCard.Content>
            </HoverCard.Root>

            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link href="#">none</Link>
              </HoverCard.Trigger>
              <HoverCard.Content
                {...args}
                side="top"
                collisionAvoidance={{ side: 'none', align: 'none' }}
                collisionBoundary={boundary ?? undefined}
              >
                <Text size="2" style={{ maxWidth: 200 }}>
                  This won't avoid collisions at all.
                </Text>
              </HoverCard.Content>
            </HoverCard.Root>
          </div>
          <div style={{ height: 400 }} />
        </div>

        <Text size="2" color="gray">
          Scroll the box above so triggers are near the top edge to see flip vs none behavior.
        </Text>
      </div>
    );
  },
};

export const Sticky: Story = {
  name: 'Sticky',
  args: {
    size: hoverCardContentPropDefs.size.default,
    variant: hoverCardContentPropDefs.variant.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 600 }}>
      <Text>
        The <Code>sticky</Code> prop controls whether the hover card repositions to stay in the viewport when the anchor
        scrolls toward the edge.
      </Text>
      <ul style={{ margin: 0, paddingLeft: 'var(--space-4)' }}>
        <li>
          <Text size="2">
            <Code>sticky=false</Code> (default) - The popup hides when anchor scrolls out of viewport
          </Text>
        </li>
        <li>
          <Text size="2">
            <Code>sticky=true</Code> - The popup stays at viewport edge as anchor scrolls away
          </Text>
        </li>
      </ul>

      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Link href="#">sticky=false</Link>
          </HoverCard.Trigger>
          <HoverCard.Content {...args} sticky={false} side="top">
            <Text size="2" style={{ maxWidth: 200 }}>
              Scroll the page down - this hover card will disappear when the anchor leaves the viewport.
            </Text>
          </HoverCard.Content>
        </HoverCard.Root>

        <HoverCard.Root>
          <HoverCard.Trigger>
            <Link href="#">sticky=true</Link>
          </HoverCard.Trigger>
          <HoverCard.Content {...args} sticky={true} side="top">
            <Text size="2" style={{ maxWidth: 200 }}>
              Scroll the page down - this hover card will stick to the viewport edge.
            </Text>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>

      <Text size="2" color="gray">
        Open a hover card, then scroll the page (not a container) to see the difference. Works best when this story is
        near the top of the viewport.
      </Text>

      {/* Spacer to enable page scrolling */}
      <div style={{ height: 800 }} />
    </div>
  ),
};
