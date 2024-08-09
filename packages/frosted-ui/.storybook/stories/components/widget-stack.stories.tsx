import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import {
  Flex,
  IconButton,
  Link,
  Text,
  WidgetStack,
} from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/WidgetStack',
  component: WidgetStack.Root,
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
  args: {
    color: 'gray',
    children: (
      <>
        You will need to upgrade to the{' '}
        <Link href="#">newest Frosted-UI version</Link> now.
      </>
    ),
  },
  render: ({ children, ...args }) => (
    <WidgetStack.Root
      {...args}
      style={{
        width: 400,
        height: 200,
      }}
    >
      <WidgetStack.Item>
        <Flex
          direction={'column'}
          width={'100%'}
          height="100%"
          justify={'between'}
          p={'4'}
          style={{
            background: 'linear-gradient(var(--blue-9), var(--blue-6))',
            color: 'var(--blue-9-contrast)',
          }}
        >
          <Flex direction={'column'} width={'100%'} justify={'between'} gap="1">
            <Text weight="bold" size="5">
              Wrocław
            </Text>
            <Text weight="light" size="9">
              24
            </Text>
          </Flex>
          <Flex direction={'column'} width={'100%'} justify={'between'} gap="1">
            <Text weight="medium" size="3">
              Sunny
            </Text>
            <Text weight="medium" size="3">
              H:73 L:55
            </Text>
          </Flex>
        </Flex>
      </WidgetStack.Item>
      <WidgetStack.Item>
        <Flex
          direction={'column'}
          width={'100%'}
          height="100%"
          justify={'between'}
        >
          <Flex
            direction={'column'}
            width={'100%'}
            justify={'between'}
            gap="1"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop)',
              backgroundSize: 'cover',
              height: '50%',
            }}
          ></Flex>
          <Flex
            direction={'column'}
            width={'100%'}
            p={'4'}
            style={{
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
          </Flex>
        </Flex>
      </WidgetStack.Item>
      <WidgetStack.Item>
        <Flex
          direction={'column'}
          width={'100%'}
          height="100%"
          justify={'center'}
          align={'center'}
          style={{ background: 'var(--grass-9)' }}
        >
          <span
            style={{
              fontSize: 96,
              lineHeight: 1,
            }}
          >
            🏝️
          </span>
        </Flex>
      </WidgetStack.Item>
      <WidgetStack.Item style={{ fontSize: 60 }}>🏝️🏴‍☠️⚜️</WidgetStack.Item>
    </WidgetStack.Root>
  ),
};

export const Orientation: Story = {
  args: {
    color: 'gray',
    children: (
      <>
        You will need to upgrade to the{' '}
        <Link href="#">newest Frosted-UI version</Link> now.
      </>
    ),
  },
  render: ({ children, ...args }) => (
    <Flex gap="8">
      <WidgetStack.Root
        {...args}
        orientation="horizontal"
        style={{
          width: 200,
          height: 200,
        }}
      >
        <WidgetStack.Item>
          <Flex
            direction={'column'}
            width={'100%'}
            height="100%"
            justify={'between'}
            p={'4'}
            style={{
              background: 'linear-gradient(var(--blue-9), var(--blue-6))',
              color: 'var(--blue-9-contrast)',
            }}
          >
            <Flex
              direction={'column'}
              width={'100%'}
              justify={'between'}
              gap="1"
            >
              <Text weight="bold" size="5">
                Wrocław
              </Text>
              <Text weight="light" size="9">
                24
              </Text>
            </Flex>
            <Flex
              direction={'column'}
              width={'100%'}
              justify={'between'}
              gap="1"
            >
              <Text weight="medium" size="3">
                Sunny
              </Text>
              <Text weight="medium" size="3">
                H:73 L:55
              </Text>
            </Flex>
          </Flex>
        </WidgetStack.Item>
        <WidgetStack.Item>
          <Flex
            direction={'column'}
            width={'100%'}
            height="100%"
            justify={'between'}
          >
            <Flex
              direction={'column'}
              width={'100%'}
              justify={'between'}
              gap="1"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop)',
                backgroundSize: 'cover',
                height: '50%',
              }}
            ></Flex>
            <Flex
              direction={'column'}
              width={'100%'}
              p={'4'}
              style={{
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
            </Flex>
          </Flex>
        </WidgetStack.Item>
        <WidgetStack.Item>
          <Flex
            direction={'column'}
            width={'100%'}
            height="100%"
            justify={'center'}
            align={'center'}
            style={{ background: 'var(--grass-9)' }}
          >
            <span
              style={{
                fontSize: 96,
                lineHeight: 1,
              }}
            >
              🏝️
            </span>
          </Flex>
        </WidgetStack.Item>
        <WidgetStack.Item style={{ fontSize: 60 }}>🏝️🏴‍☠️⚜️</WidgetStack.Item>
      </WidgetStack.Root>

      <WidgetStack.Root
        {...args}
        orientation="vertical"
        style={{
          width: 200,
          height: 200,
        }}
      >
        <WidgetStack.Item>
          <Flex
            direction={'column'}
            width={'100%'}
            height="100%"
            justify={'between'}
            p={'4'}
            style={{
              background: 'linear-gradient(var(--blue-9), var(--blue-6))',
              color: 'var(--blue-9-contrast)',
            }}
          >
            <Flex
              direction={'column'}
              width={'100%'}
              justify={'between'}
              gap="1"
            >
              <Text weight="bold" size="5">
                Wrocław
              </Text>
              <Text weight="light" size="9">
                24
              </Text>
            </Flex>
            <Flex
              direction={'column'}
              width={'100%'}
              justify={'between'}
              gap="1"
            >
              <Text weight="medium" size="3">
                Sunny
              </Text>
              <Text weight="medium" size="3">
                H:73 L:55
              </Text>
            </Flex>
          </Flex>
        </WidgetStack.Item>
        <WidgetStack.Item>
          <Flex
            direction={'column'}
            width={'100%'}
            height="100%"
            justify={'between'}
          >
            <Flex
              direction={'column'}
              width={'100%'}
              justify={'between'}
              gap="1"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop)',
                backgroundSize: 'cover',
                height: '50%',
              }}
            ></Flex>
            <Flex
              direction={'column'}
              width={'100%'}
              p={'4'}
              style={{
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
            </Flex>
          </Flex>
        </WidgetStack.Item>
        <WidgetStack.Item>
          <Flex
            direction={'column'}
            width={'100%'}
            height="100%"
            justify={'center'}
            align={'center'}
            style={{ background: 'var(--grass-9)' }}
          >
            <span
              style={{
                fontSize: 96,
                lineHeight: 1,
              }}
            >
              🏝️
            </span>
          </Flex>
        </WidgetStack.Item>
        <WidgetStack.Item style={{ fontSize: 60 }}>🏝️🏴‍☠️⚜️</WidgetStack.Item>
      </WidgetStack.Root>
    </Flex>
  ),
};
