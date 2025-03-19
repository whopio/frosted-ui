import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Flex, Slider } from '../../../src/components';
import { sliderPropDefs } from '../../../src/components/slider.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Slider',
  component: Slider,
  args: {
    size: sliderPropDefs.size.default,
    color: sliderPropDefs.color.default,
    variant: sliderPropDefs.variant.default,
    highContrast: sliderPropDefs.highContrast.default,
    disabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Slider {...args} defaultValue={[50]} />
    </Flex>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Slider {...args} defaultValue={[25]} size="1" />
      <Slider {...args} defaultValue={[50]} size="2" />
      <Slider {...args} defaultValue={[75]} size="3" />
    </Flex>
  ),
};

export const Color: Story = {
  render: (args) => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Slider {...args} defaultValue={[20]} color="indigo" />
      <Slider {...args} defaultValue={[40]} color="cyan" />
      <Slider {...args} defaultValue={[60]} color="orange" />
      <Slider {...args} defaultValue={[80]} color="crimson" />
    </Flex>
  ),
};

export const Variant: Story = {
  render: (args) => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Slider {...args} defaultValue={[25]} variant="surface" />
      <Slider {...args} defaultValue={[50]} variant="classic" />
      <Slider {...args} defaultValue={[75]} variant="soft" />
    </Flex>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)', width: 300 }}>
      <Slider {...args} defaultValue={[20]} color="indigo" />
      <Slider {...args} defaultValue={[20]} color="indigo" highContrast />
      <Slider {...args} defaultValue={[40]} color="cyan" />
      <Slider {...args} defaultValue={[40]} color="cyan" highContrast />
      <Slider {...args} defaultValue={[60]} color="orange" />
      <Slider {...args} defaultValue={[60]} color="orange" highContrast />
      <Slider {...args} defaultValue={[80]} color="crimson" />
      <Slider {...args} defaultValue={[80]} color="crimson" highContrast />
    </div>
  ),
};

export const Range: Story = {
  render: (args) => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Slider {...args} defaultValue={[25, 75]} />
    </Flex>
  ),
};
