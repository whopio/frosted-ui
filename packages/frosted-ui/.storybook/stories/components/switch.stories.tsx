import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Switch, Text } from '../../../src/components';
import { switchPropDefs } from '../../../src/components/switch.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Switch',
  component: Switch,
  args: {
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
  args: {
    size: switchPropDefs.size.default,
    color: switchPropDefs.color.default,
    highContrast: switchPropDefs.highContrast.default,
  },
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Switch {...args} size="1" defaultChecked />
      <Switch {...args} size="2" defaultChecked />
      <Switch {...args} size="3" defaultChecked />
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Switch {...args} color="indigo" defaultChecked />
      <Switch {...args} color="cyan" defaultChecked />
      <Switch {...args} color="orange" defaultChecked />
      <Switch {...args} color="crimson" defaultChecked />
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div
      style={{
        display: 'inline-grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: 'var(--space-2)',
        gridAutoFlow: 'column',
      }}
    >
      <Switch {...args} color="indigo" defaultChecked />
      <Switch {...args} color="indigo" defaultChecked highContrast />
      <Switch {...args} color="cyan" defaultChecked />
      <Switch {...args} color="cyan" defaultChecked highContrast />
      <Switch {...args} color="orange" defaultChecked />
      <Switch {...args} color="orange" defaultChecked highContrast />
      <Switch {...args} color="crimson" defaultChecked />
      <Switch {...args} color="crimson" defaultChecked highContrast />
    </div>
  ),
};

export const Alignment: Story = {
  name: 'Alignment with text',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Text as="label" size="2">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Switch {...args} size="1" defaultChecked /> Sync settings
        </div>
      </Text>

      <Text as="label" size="3">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Switch {...args} size="2" defaultChecked /> Sync settings
        </div>
      </Text>

      <Text as="label" size="4">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Switch {...args} size="3" defaultChecked /> Sync settings
        </div>
      </Text>
    </div>
  ),
};
