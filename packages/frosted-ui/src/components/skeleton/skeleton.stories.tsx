import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Avatar, Card, Skeleton, Text, skeletonAvatarPropDefs, skeletonRectPropDefs, skeletonTextPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Skeleton',
  component: Skeleton.Avatar,
  args: {
    highContrast: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton.Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// Avatar
export const AvatarDefault: Story = {
  name: 'Avatar',
  args: {
    size: skeletonAvatarPropDefs.size.default,
    color: skeletonAvatarPropDefs.color.default,
  },
  render: (args) => <Skeleton.Avatar {...args} />,
};

export const AvatarSizes: Story = {
  name: 'Avatar sizes',
  args: {
    size: skeletonAvatarPropDefs.size.default,
    color: skeletonAvatarPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--space-3)' }}>
      <Skeleton.Avatar {...args} size="0" />
      <Skeleton.Avatar {...args} size="1" />
      <Skeleton.Avatar {...args} size="2" />
      <Skeleton.Avatar {...args} size="3" />
      <Skeleton.Avatar {...args} size="4" />
      <Skeleton.Avatar {...args} size="5" />
      <Skeleton.Avatar {...args} size="6" />
      <Skeleton.Avatar {...args} size="7" />
      <Skeleton.Avatar {...args} size="8" />
      <Skeleton.Avatar {...args} size="9" />
    </div>
  ),
};

export const AvatarColors: Story = {
  name: 'Avatar colors',
  args: {
    size: skeletonAvatarPropDefs.size.default,
    color: skeletonAvatarPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--space-3)' }}>
      <Skeleton.Avatar {...args} color="indigo" />
      <Skeleton.Avatar {...args} color="cyan" />
      <Skeleton.Avatar {...args} color="orange" />
      <Skeleton.Avatar {...args} color="crimson" />
    </div>
  ),
};

export const AvatarHighContrast: Story = {
  name: 'Avatar high contrast',
  args: {
    size: skeletonAvatarPropDefs.size.default,
    color: skeletonAvatarPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Skeleton.Avatar {...args} color="gray" highContrast={false} />
        <Skeleton.Avatar {...args} color="indigo" highContrast={false} />
        <Skeleton.Avatar {...args} color="cyan" highContrast={false} />
        <Skeleton.Avatar {...args} color="orange" highContrast={false} />
        <Skeleton.Avatar {...args} color="crimson" highContrast={false} />
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Skeleton.Avatar {...args} color="gray" highContrast />
        <Skeleton.Avatar {...args} color="indigo" highContrast />
        <Skeleton.Avatar {...args} color="cyan" highContrast />
        <Skeleton.Avatar {...args} color="orange" highContrast />
        <Skeleton.Avatar {...args} color="crimson" highContrast />
      </div>
    </div>
  ),
};

// Text

export const TextDefault: Story = {
  name: 'Text',
  args: {
    size: skeletonTextPropDefs.size.default,
    color: skeletonTextPropDefs.color.default,
  },
  render: (args) => <Skeleton.Text {...args} style={{ width: 400 }} />,
};

export const TextSizes: Story = {
  name: 'Text sizes',
  args: {
    size: skeletonTextPropDefs.size.default,
    color: skeletonTextPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Skeleton.Text {...args} size="0" style={{ width: 400 }} />
      <Skeleton.Text {...args} size="1" style={{ width: 400 }} />
      <Skeleton.Text {...args} size="2" style={{ width: 400 }} />
      <Skeleton.Text {...args} size="3" style={{ width: 400 }} />
      <Skeleton.Text {...args} size="4" style={{ width: 400 }} />
      <Skeleton.Text {...args} size="5" style={{ width: 400 }} />
      <Skeleton.Text {...args} size="6" style={{ width: 400 }} />
      <Skeleton.Text {...args} size="7" style={{ width: 400 }} />
      <Skeleton.Text {...args} size="8" style={{ width: 400 }} />
      <Skeleton.Text {...args} size="9" style={{ width: 400 }} />
    </div>
  ),
};

export const TextColors: Story = {
  name: 'Text colors',
  args: {
    size: skeletonTextPropDefs.size.default,
    color: skeletonTextPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Skeleton.Text {...args} color="indigo" style={{ width: 400 }} />
      <Skeleton.Text {...args} color="cyan" style={{ width: 400 }} />
      <Skeleton.Text {...args} color="orange" style={{ width: 400 }} />
      <Skeleton.Text {...args} color="crimson" style={{ width: 400 }} />
    </div>
  ),
};

export const TextHighContrast: Story = {
  name: 'Text high contrast',
  args: {
    size: skeletonTextPropDefs.size.default,
    color: skeletonTextPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--space-2)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Skeleton.Text {...args} color="gray" highContrast={false} style={{ width: 400 }} />
        <Skeleton.Text {...args} color="indigo" highContrast={false} style={{ width: 400 }} />
        <Skeleton.Text {...args} color="cyan" highContrast={false} style={{ width: 400 }} />
        <Skeleton.Text {...args} color="orange" highContrast={false} style={{ width: 400 }} />
        <Skeleton.Text {...args} color="crimson" highContrast={false} style={{ width: 400 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Skeleton.Text {...args} color="gray" highContrast style={{ width: 400 }} />
        <Skeleton.Text {...args} color="indigo" highContrast style={{ width: 400 }} />
        <Skeleton.Text {...args} color="cyan" highContrast style={{ width: 400 }} />
        <Skeleton.Text {...args} color="orange" highContrast style={{ width: 400 }} />
        <Skeleton.Text {...args} color="crimson" highContrast style={{ width: 400 }} />
      </div>
    </div>
  ),
};

// Rect
export const RectDefault: Story = {
  name: 'Rect',
  args: {
    color: skeletonRectPropDefs.color.default,
  },
  render: (args) => <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} />,
};

export const RectColors: Story = {
  name: 'Rect colors',
  args: {
    color: skeletonRectPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--space-3)' }}>
      <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="indigo" />
      <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="cyan" />
      <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="orange" />
      <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="crimson" />
    </div>
  ),
};

export const RectHighContrast: Story = {
  name: 'Rect high contrast',
  args: {
    color: skeletonRectPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="gray" highContrast={false} />
        <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="indigo" highContrast={false} />
        <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="cyan" highContrast={false} />
        <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="orange" highContrast={false} />
        <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="crimson" highContrast={false} />
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="gray" highContrast />
        <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="indigo" highContrast />
        <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="cyan" highContrast />
        <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="orange" highContrast />
        <Skeleton.Rect style={{ width: 140, height: 140 }} {...args} color="crimson" highContrast />
      </div>
    </div>
  ),
};

export const Composed: Story = {
  args: {
    color: skeletonTextPropDefs.color.default,
    highContrast: skeletonTextPropDefs.highContrast.default,
  },
  render: (args) => {
    const [show, setShow] = React.useState(false);

    return (
      <Card
        variant="surface"
        size="3"
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        style={{ minWidth: 400 }}
      >
        <div
          style={{
            objectFit: 'cover',
            width: 400,
            aspectRatio: '2 / 1',
            borderRadius: 'var(--radius-2)',
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          {show ? (
            <img
              className="Image"
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
              alt="Landscape photograph by Tobias Tullius"
              style={{
                objectFit: 'cover',
                display: 'inline-block',
                verticalAlign: 'center',
                flex: 1,
              }}
            />
          ) : (
            <Skeleton.Rect
              highContrast={args.highContrast}
              color={args.color}
              style={{
                flex: 1,
              }}
            />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 'var(--space-4)',
            alignItems: 'center',
            marginTop: 'var(--space-4)',
          }}
        >
          {show ? (
            <Avatar highContrast={args.highContrast} color={args.color} fallback="AB" size="6" />
          ) : (
            <Skeleton.Avatar {...args} size="6" />
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {show ? (
              <>
                <Text highContrast={args.highContrast} size="6">
                  Artur
                </Text>
                <Text highContrast={args.highContrast} size="2">
                  Design Engineer at Whop
                </Text>
                <Text highContrast={args.highContrast} size="2">
                  Professional button polisher.
                </Text>
              </>
            ) : (
              <>
                <Skeleton.Text {...args} size="6" style={{ width: 150 }} />
                <Skeleton.Text {...args} size="2" style={{ width: 250 }} />
                <Skeleton.Text {...args} size="2" style={{ width: 200 }} />
              </>
            )}
          </div>
        </div>
      </Card>
    );
  },
};

export const ComposedColor: Story = {
  name: 'Composed color',
  args: {
    color: 'iris',
    highContrast: skeletonTextPropDefs.highContrast.default,
  },
  render: (args) => {
    const [show, setShow] = React.useState(false);

    return (
      <div
        style={{
          minWidth: 400,
          boxSizing: 'border-box',
          padding: 24,
          background: `var(--${args.color}-a2)`,
          border: `1px solid var(--${args.color}-a6)`,
          borderRadius: 'var(--radius-5)',
        }}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <div
          style={{
            objectFit: 'cover',
            width: 400,
            aspectRatio: '2 / 1',
            borderRadius: 'var(--radius-2)',
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          {show ? (
            <img
              className="Image"
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
              alt="Landscape photograph by Tobias Tullius"
              style={{
                objectFit: 'cover',
                display: 'inline-block',
                verticalAlign: 'center',
                flex: 1,
              }}
            />
          ) : (
            <Skeleton.Rect
              highContrast={args.highContrast}
              color={args.color}
              style={{
                flex: 1,
              }}
            />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 'var(--space-4)',
            alignItems: 'center',
            marginTop: 'var(--space-4)',
          }}
        >
          {show ? (
            <Avatar highContrast={args.highContrast} color={args.color} fallback="AB" size="6" />
          ) : (
            <Skeleton.Avatar {...args} size="6" />
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {show ? (
              <>
                <Text color={args.color} highContrast={args.highContrast} size="6">
                  Artur
                </Text>
                <Text color={args.color} highContrast={args.highContrast} size="2">
                  Design Engineer at Whop
                </Text>
                <Text color={args.color} highContrast={args.highContrast} size="2">
                  Professional button polisher.
                </Text>
              </>
            ) : (
              <>
                <Skeleton.Text {...args} size="6" style={{ width: 150 }} />
                <Skeleton.Text {...args} size="2" style={{ width: 250 }} />
                <Skeleton.Text {...args} size="2" style={{ width: 200 }} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  },
};
