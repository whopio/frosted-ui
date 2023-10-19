import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Flex, Progress } from '../../../src/components';
import { progressPropDefs } from '../../../src/components/progress.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Progress',
  component: Progress,
  args: {
    size: progressPropDefs.size.default,
    variant: progressPropDefs.variant.default,
    color: progressPropDefs.color.default,
    value: 40,
    max: 100,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: progressPropDefs.size.default,
    variant: progressPropDefs.variant.default,
    color: progressPropDefs.color.default,
  },
  render: (args) => (
    <Flex direction="column" gap="3" style={{ width: 300 }}>
      <Progress {...args} />
    </Flex>
  ),
};

export const Size: Story = {
  args: {
    size: progressPropDefs.size.default,
    variant: progressPropDefs.variant.default,
    color: progressPropDefs.color.default,
  },
  render: (args) => (
    <Flex direction="column" gap="3" style={{ width: 300 }}>
      <Progress {...args} size="3" />
      <Progress {...args} size="2" />
      <Progress {...args} size="1" />
    </Flex>
  ),
};

export const Variant: Story = {
  args: {
    size: progressPropDefs.size.default,
    color: progressPropDefs.color.default,
  },
  render: (args) => (
    <Flex direction="column" gap="3" style={{ width: 300 }}>
      <Progress {...args} variant="soft" />
      <Progress {...args} variant="surface" />
      <Progress {...args} variant="classic" />
    </Flex>
  ),
};

export const Color: Story = {
  args: {
    size: progressPropDefs.size.default,
  },
  render: (args) => (
    <Flex direction="column" gap="3" style={{ width: 300 }}>
      <Progress {...args} color="indigo" />
      <Progress {...args} color="cyan" />
      <Progress {...args} color="orange" />
      <Progress {...args} color="crimson" />
    </Flex>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  args: {},
  render: (args) => (
    <Flex direction="row" gap="2">
      <Flex direction="column" gap="3" style={{ width: 300 }}>
        <Progress {...args} variant="soft" highContrast={false} />
        <Progress {...args} variant="surface" highContrast={false} />
        <Progress {...args} variant="classic" highContrast={false} />
      </Flex>
      <Flex direction="column" gap="3" style={{ width: 300 }}>
        <Progress {...args} variant="soft" highContrast />
        <Progress {...args} variant="surface" highContrast />
        <Progress {...args} variant="classic" highContrast />
      </Flex>
    </Flex>
  ),
};
