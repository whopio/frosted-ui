import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Flex, Grid, Switch, Text } from '../../../src/components';
import { switchPropDefs } from '../../../src/components/switch.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Switch',
  component: Switch,
  args: {
    size: switchPropDefs.size.default,
    color: switchPropDefs.color.default,
    variant: switchPropDefs.variant.default,
    radius: switchPropDefs.radius.default,
    highContrast: switchPropDefs.highContrast.default,
    disabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Text as="label" size="2">
      <Flex gap="2">
        <Switch {...args} defaultChecked /> Sync settings
      </Flex>
    </Text>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Flex align="center" gap="2">
      <Switch {...args} size="1" defaultChecked />
      <Switch {...args} size="2" defaultChecked />
      <Switch {...args} size="3" defaultChecked />
    </Flex>
  ),
};

export const Color: Story = {
  render: (args) => (
    <Flex gap="2">
      <Switch {...args} color="indigo" defaultChecked />
      <Switch {...args} color="cyan" defaultChecked />
      <Switch {...args} color="orange" defaultChecked />
      <Switch {...args} color="crimson" defaultChecked />
    </Flex>
  ),
};

export const Variant: Story = {
  render: (args) => (
    <Flex gap="2">
      <Flex direction="column" gap="3">
        <Switch {...args} variant="surface" />
        <Switch {...args} variant="classic" />
        <Switch {...args} variant="soft" />
      </Flex>

      <Flex direction="column" gap="3">
        <Switch {...args} variant="surface" defaultChecked />
        <Switch {...args} variant="classic" defaultChecked />
        <Switch {...args} variant="soft" defaultChecked />
      </Flex>
    </Flex>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <Grid rows="2" gapX="2" gapY="3" display="inline-grid" flow="column">
      <Switch {...args} color="indigo" defaultChecked />
      <Switch {...args} color="indigo" defaultChecked highContrast />
      <Switch {...args} color="cyan" defaultChecked />
      <Switch {...args} color="cyan" defaultChecked highContrast />
      <Switch {...args} color="orange" defaultChecked />
      <Switch {...args} color="orange" defaultChecked highContrast />
      <Switch {...args} color="crimson" defaultChecked />
      <Switch {...args} color="crimson" defaultChecked highContrast />
    </Grid>
  ),
};

export const Radius: Story = {
  render: (args) => (
    <Flex gap="3">
      <Switch {...args} radius="none" defaultChecked />
      <Switch {...args} radius="small" defaultChecked />
      <Switch {...args} radius="full" defaultChecked />
    </Flex>
  ),
};

export const Alignment: Story = {
  name: 'Alignment with text',
  render: (args) => (
    <Flex direction="column" gap="3">
      <Text as="label" size="2">
        <Flex gap="2">
          <Switch {...args} size="1" defaultChecked /> Sync settings
        </Flex>
      </Text>

      <Text as="label" size="3">
        <Flex gap="2">
          <Switch {...args} size="2" defaultChecked /> Sync settings
        </Flex>
      </Text>

      <Text as="label" size="4">
        <Flex gap="2">
          <Switch {...args} size="3" defaultChecked /> Sync settings
        </Flex>
      </Text>
    </Flex>
  ),
};
