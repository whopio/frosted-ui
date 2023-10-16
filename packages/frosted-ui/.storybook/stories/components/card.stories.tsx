import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import {
  Avatar,
  Box,
  Card,
  Code,
  Flex,
  Inset,
  Text,
} from '../../../src/components';
import { cardPropDefs } from '../../../src/components/card.props';

const CardContentExample = ({
  size = '2',
}: {
  size?: '1' | '2' | '3' | '4';
}) => (
  <Flex gap="3" align="center">
    <Avatar size="3" radius="full" fallback="IM" color="indigo" />
    <Box>
      <Text as="div" size="2" weight="bold">
        Ilya Miskov
      </Text>
      <Text as="div" size="2" color="gray">
        I love how we have the freedom to explore skeuomorphism
      </Text>
    </Box>
  </Flex>
);
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Card',
  component: Card,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: <CardContentExample />,
    size: cardPropDefs.size.default,
  },
};

export const Size: Story = {
  args: {
    children: <CardContentExample />,
    size: cardPropDefs.size.default,
  },
  render: ({ children, ...args }) => (
    <Flex gap="3" direction="column">
      <Card {...args} size="1" style={{ width: 350 }}>
        <Flex gap="3" align="center">
          <Avatar size="3" radius="full" fallback="T" color="indigo" />
          <Box>
            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>

      <Card {...args} size="2" style={{ width: 425 }}>
        <Flex gap="4" align="center">
          <Avatar size="4" radius="full" fallback="T" color="indigo" />
          <Box>
            <Text as="div" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>

      <Card {...args} size="3" style={{ width: 500 }}>
        <Flex gap="4" align="center">
          <Avatar size="5" radius="full" fallback="T" color="indigo" />
          <Box>
            <Text as="div" size="4" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="4" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>
    </Flex>
  ),
};

export const Variant: Story = {
  args: {
    children: <CardContentExample />,
  },
  render: ({ children, ...args }) => (
    <Flex direction="column" gap="6">
      <Card {...args} variant="classic">
        {children}
      </Card>
      <Card {...args} variant="ghost">
        {children}
      </Card>
      <Card {...args} variant="surface">
        {children}
      </Card>
    </Flex>
  ),
};

export const InsetContent: Story = {
  name: 'Inset Content',
  render: ({ children, ...args }) => (
    <Card size="2" style={{ maxWidth: 240 }} {...args}>
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          alt="Bold typography"
          style={{
            display: 'block',
            objectFit: 'cover',
            width: '100%',
            height: 140,
            backgroundColor: 'var(--gray-5)',
          }}
        />
      </Inset>
      <Text as="p" size="3">
        Use <Code>{'<Inset />'}</Code> component to align content flush with the
        sides of the card.
      </Text>
    </Card>
  ),
};

export const AsAnotherElement: Story = {
  name: 'As another element',
  render: ({ children, ...args }) => (
    <Flex direction="column" gap="6">
      <Box>
        <Text>
          Use the <Code>asChild</Code> prop to render the card as a link or a
          button. This prop adds styles for the interactive states, like hover
          and focus.
        </Text>
      </Box>
      <Box>
        <Card {...args} asChild style={{ maxWidth: 350 }}>
          <a href="#">
            <CardContentExample />
          </a>
        </Card>
      </Box>
    </Flex>
  ),
};
