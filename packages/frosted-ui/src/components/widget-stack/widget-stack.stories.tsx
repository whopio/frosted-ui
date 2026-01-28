import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { IconButton, Text, WidgetStack, widgetStackRootPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/WidgetStack',
  component: WidgetStack.Stack,
  args: {
    orientation: widgetStackRootPropDefs.orientation.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof WidgetStack.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => (
    <WidgetStack.Root {...args}>
      <WidgetStack.Stack
        style={{
          width: 400,
          height: 200,
        }}
      >
        <WidgetStack.Item>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              justifyContent: 'space-between',
              padding: 'var(--space-4)',
              background: 'linear-gradient(var(--blue-9), var(--blue-6))',
              color: 'var(--blue-9-contrast)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'space-between',
                gap: 'var(--space-1)',
              }}
            >
              <Text weight="bold" size="5">
                Wrocław
              </Text>
              <Text weight="light" size="9">
                24
              </Text>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'space-between',
                gap: 'var(--space-1)',
              }}
            >
              <Text weight="medium" size="3">
                Sunny
              </Text>
              <Text weight="medium" size="3">
                H:73 L:55
              </Text>
            </div>
          </div>
        </WidgetStack.Item>
        <WidgetStack.Item>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'space-between',
                gap: 'var(--space-1)',
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop)',
                backgroundSize: 'cover',
                height: '50%',
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: 'var(--space-4)',
                height: '50%',
                background: 'var(--gray-2)',
              }}
            >
              <Text weight="medium" size="4" trim="start">
                Travis S.
              </Text>
              <Text weight="medium" size="2" color="gray">
                4am in Toronto
              </Text>
              <IconButton
                variant="soft"
                style={{
                  position: 'absolute',
                  right: 16,
                  bottom: 16,
                  borderRadius: '50%',
                }}
                color="blue"
                size="4"
              >
                A
              </IconButton>
            </div>
          </div>
        </WidgetStack.Item>
        <WidgetStack.Item>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'var(--grass-9)',
            }}
          >
            <span
              style={{
                fontSize: 96,
                lineHeight: 1,
              }}
            >
              🏝️
            </span>
          </div>
        </WidgetStack.Item>
        <WidgetStack.Item style={{ fontSize: 60 }}>🏝️🏴‍☠️⚜️</WidgetStack.Item>
      </WidgetStack.Stack>
    </WidgetStack.Root>
  ),
};

export const Orientation: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
      <WidgetStack.Root {...args} orientation="horizontal">
        <WidgetStack.Stack
          style={{
            width: 200,
            height: 200,
          }}
        >
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                padding: 'var(--space-4)',
                background: 'linear-gradient(var(--blue-9), var(--blue-6))',
                color: 'var(--blue-9-contrast)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                }}
              >
                <Text weight="bold" size="5">
                  Wrocław
                </Text>
                <Text weight="light" size="9">
                  24
                </Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                }}
              >
                <Text weight="medium" size="3">
                  Sunny
                </Text>
                <Text weight="medium" size="3">
                  H:73 L:55
                </Text>
              </div>
            </div>
          </WidgetStack.Item>
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop)',
                  backgroundSize: 'cover',
                  height: '50%',
                }}
              ></div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  padding: 'var(--space-4)',
                  height: '50%',
                  background: 'var(--gray-2)',
                }}
              >
                <Text weight="medium" size="4" trim="start">
                  Travis S.
                </Text>
                <Text weight="medium" size="2" color="gray">
                  4am in Toronto
                </Text>
                <IconButton
                  variant="soft"
                  style={{
                    position: 'absolute',
                    right: 16,
                    bottom: 16,
                    borderRadius: '50%',
                  }}
                  color="blue"
                  size="4"
                >
                  A
                </IconButton>
              </div>
            </div>
          </WidgetStack.Item>
        </WidgetStack.Stack>
      </WidgetStack.Root>

      <WidgetStack.Root orientation="vertical">
        <WidgetStack.Stack
          style={{
            width: 200,
            height: 200,
          }}
        >
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                padding: 'var(--space-4)',
                background: 'linear-gradient(var(--blue-9), var(--blue-6))',
                color: 'var(--blue-9-contrast)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                }}
              >
                <Text weight="bold" size="5">
                  Wrocław
                </Text>
                <Text weight="light" size="9">
                  24
                </Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                }}
              >
                <Text weight="medium" size="3">
                  Sunny
                </Text>
                <Text weight="medium" size="3">
                  H:73 L:55
                </Text>
              </div>
            </div>
          </WidgetStack.Item>
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop)',
                  backgroundSize: 'cover',
                  height: '50%',
                }}
              ></div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  padding: 'var(--space-4)',
                  height: '50%',
                  background: 'var(--gray-2)',
                }}
              >
                <Text weight="medium" size="4" trim="start">
                  Travis S.
                </Text>
                <Text weight="medium" size="2" color="gray">
                  4am in Toronto
                </Text>
                <IconButton
                  variant="soft"
                  style={{
                    position: 'absolute',
                    right: 16,
                    bottom: 16,
                    borderRadius: '50%',
                  }}
                  color="blue"
                  size="4"
                >
                  A
                </IconButton>
              </div>
            </div>
          </WidgetStack.Item>
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'var(--grass-9)',
              }}
            >
              <span
                style={{
                  fontSize: 96,
                  lineHeight: 1,
                }}
              >
                🏝️
              </span>
            </div>
          </WidgetStack.Item>
          <WidgetStack.Item style={{ fontSize: 60 }}>🏝️🏴‍☠️⚜️</WidgetStack.Item>
        </WidgetStack.Stack>
      </WidgetStack.Root>
    </div>
  ),
};

export const SingleWidget: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <Text>When single widget is inside, the scrolling and animations are blocked automatically.</Text>
      <WidgetStack.Root {...args}>
        <WidgetStack.Stack
          style={{
            width: 400,
            height: 200,
          }}
        >
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                padding: 'var(--space-4)',
                background: 'linear-gradient(var(--blue-9), var(--blue-6))',
                color: 'var(--blue-9-contrast)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                }}
              >
                <Text weight="bold" size="5">
                  Wrocław
                </Text>
                <Text weight="light" size="9">
                  24
                </Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                }}
              >
                <Text weight="medium" size="3">
                  Sunny
                </Text>
                <Text weight="medium" size="3">
                  H:73 L:55
                </Text>
              </div>
            </div>
          </WidgetStack.Item>
        </WidgetStack.Stack>
      </WidgetStack.Root>
    </div>
  ),
};

export const WithControls: Story = {
  args: {},
  render: (args) => (
    <WidgetStack.Root orientation="horizontal" {...args}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--space-4)', alignItems: 'center' }}>
        <WidgetStack.Prev render={<IconButton variant="soft" color="gray" style={{ borderRadius: '50%' }} />}>
          {'<'}
        </WidgetStack.Prev>

        <WidgetStack.Stack
          style={{
            width: 400,
            height: 200,
          }}
        >
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                padding: 'var(--space-4)',
                background: 'linear-gradient(var(--blue-9), var(--blue-6))',
                color: 'var(--blue-9-contrast)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                }}
              >
                <Text weight="bold" size="5">
                  Wrocław
                </Text>
                <Text weight="light" size="9">
                  24
                </Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                }}
              >
                <Text weight="medium" size="3">
                  Sunny
                </Text>
                <Text weight="medium" size="3">
                  H:73 L:55
                </Text>
              </div>
            </div>
          </WidgetStack.Item>
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop)',
                  backgroundSize: 'cover',
                  height: '50%',
                }}
              ></div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  padding: 'var(--space-4)',
                  height: '50%',
                  background: 'var(--gray-2)',
                }}
              >
                <Text weight="medium" size="4" trim="start">
                  Travis S.
                </Text>
                <Text weight="medium" size="2" color="gray">
                  4am in Toronto
                </Text>
                <IconButton
                  variant="soft"
                  style={{
                    position: 'absolute',
                    right: 16,
                    bottom: 16,
                    borderRadius: '50%',
                  }}
                  color="blue"
                  size="4"
                >
                  A
                </IconButton>
              </div>
            </div>
          </WidgetStack.Item>
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'var(--grass-9)',
              }}
            >
              <span
                style={{
                  fontSize: 96,
                  lineHeight: 1,
                }}
              >
                🏝️
              </span>
            </div>
          </WidgetStack.Item>
          <WidgetStack.Item style={{ fontSize: 60 }}>🏝️🏴‍☠️⚜️</WidgetStack.Item>
        </WidgetStack.Stack>
        <WidgetStack.Next render={<IconButton variant="soft" color="gray" style={{ borderRadius: '50%' }} />}>
          {'>'}
        </WidgetStack.Next>
      </div>
    </WidgetStack.Root>
  ),
};
export const AutoPlay: Story = {
  args: {},
  render: (args) => (
    <WidgetStack.Root orientation="horizontal" {...args} autoPlay={4000}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--space-4)', alignItems: 'center' }}>
        <WidgetStack.Prev render={<IconButton variant="soft" color="gray" style={{ borderRadius: '50%' }} />}>
          {'<'}
        </WidgetStack.Prev>

        <WidgetStack.Stack
          style={{
            width: 400,
            height: 200,
          }}
        >
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                padding: 'var(--space-4)',
                background: 'linear-gradient(var(--blue-9), var(--blue-6))',
                color: 'var(--blue-9-contrast)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                }}
              >
                <Text weight="bold" size="5">
                  Wrocław
                </Text>
                <Text weight="light" size="9">
                  24
                </Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                }}
              >
                <Text weight="medium" size="3">
                  Sunny
                </Text>
                <Text weight="medium" size="3">
                  H:73 L:55
                </Text>
              </div>
            </div>
          </WidgetStack.Item>
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: 'var(--space-1)',
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop)',
                  backgroundSize: 'cover',
                  height: '50%',
                }}
              ></div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  padding: 'var(--space-4)',
                  height: '50%',
                  background: 'var(--gray-2)',
                }}
              >
                <Text weight="medium" size="4" trim="start">
                  Travis S.
                </Text>
                <Text weight="medium" size="2" color="gray">
                  4am in Toronto
                </Text>
                <IconButton
                  variant="soft"
                  style={{
                    position: 'absolute',
                    right: 16,
                    bottom: 16,
                    borderRadius: '50%',
                  }}
                  color="blue"
                  size="4"
                >
                  A
                </IconButton>
              </div>
            </div>
          </WidgetStack.Item>
          <WidgetStack.Item>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'var(--grass-9)',
              }}
            >
              <span
                style={{
                  fontSize: 96,
                  lineHeight: 1,
                }}
              >
                🏝️
              </span>
            </div>
          </WidgetStack.Item>
          <WidgetStack.Item style={{ fontSize: 60 }}>🏝️🏴‍☠️⚜️</WidgetStack.Item>
        </WidgetStack.Stack>
        <WidgetStack.Next render={<IconButton variant="soft" color="gray" style={{ borderRadius: '50%' }} />}>
          {'>'}
        </WidgetStack.Next>
      </div>
    </WidgetStack.Root>
  ),
};
