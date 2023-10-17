import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import {
  Button,
  Code,
  Flex,
  Link,
  Text,
  VisuallyHidden,
} from '../../../src/components';

const CrossIcon = () => (
  <svg
    viewBox="0 0 32 32"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
  >
    <path d="M2 30 L30 2 M30 30 L2 2" />
  </svg>
);

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Utilities/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Text>
        Anything you put inside this component will be hidden visually but will
        be announced by screen readers. See{' '}
        <Link href="https://www.radix-ui.com/primitives/docs/utilities/visually-hidden">
          Radix UI docs
        </Link>
        .
      </Text>
      <Text>
        This is useful in certain scenarios as an alternative to traditional
        labelling with <Code>aria-label</Code> or <Code>aria-labelledby</Code>.
      </Text>
      <div>
        <Button size="4">
          <CrossIcon />
          <VisuallyHidden>Close</VisuallyHidden>
        </Button>
      </div>
    </Flex>
  ),
};
