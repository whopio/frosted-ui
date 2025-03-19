import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Select } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Select',
  component: Select.Root,
  args: {},
  argTypes: {
    onValueChange: {
      action: 'onValueChange',
      description: `(value: string) => void`,
      type: 'function',
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Select.Root defaultValue="apple" {...args}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="orange">Orange</Select.Item>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="grape" disabled>
            Grape
          </Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="potato">Potato</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
      <Select.Root {...args} size="1" defaultValue="apple">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root {...args} size="2" defaultValue="apple">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root {...args} size="3" defaultValue="apple">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const Variant: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
      <Select.Root {...args} defaultValue="apple">
        <Select.Trigger variant="surface" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root {...args} defaultValue="apple">
        <Select.Trigger variant="classic" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root {...args} defaultValue="apple">
        <Select.Trigger variant="soft" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root {...args} defaultValue="apple">
        <Select.Trigger variant="ghost" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <Select.Root {...args} defaultValue="apple">
        <Select.Trigger color="indigo" variant="soft" />
        <Select.Content color="indigo">
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root {...args} defaultValue="apple">
        <Select.Trigger color="cyan" variant="soft" />
        <Select.Content color="cyan">
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root {...args} defaultValue="apple">
        <Select.Trigger color="orange" variant="soft" />
        <Select.Content color="orange">
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root {...args} defaultValue="apple">
        <Select.Trigger color="crimson" variant="soft" />
        <Select.Content color="crimson">
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const Placeholder: Story = {
  render: (args) => (
    <Select.Root {...args}>
      <Select.Trigger placeholder="Pick a fruit" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="orange">Orange</Select.Item>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="grape" disabled>
            Grape
          </Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="potato">Potato</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <Select.Root defaultValue="apple">
        <Select.Trigger variant="soft" />
        <Select.Content variant="solid">
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger variant="soft" />
        <Select.Content variant="solid" highContrast>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const AlternativePositioning: Story = {
  name: 'Alternative positioning',
  render: (args) => (
    <Select.Root defaultValue="apple" {...args}>
      <Select.Trigger />
      <Select.Content position="popper">
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};
