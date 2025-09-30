import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Select, selectTriggerPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Select',
  component: Select.Trigger,
  args: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Select.Trigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <Select.Root defaultValue="apple" size="4">
      <Select.Trigger {...args} />
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
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
      <Select.Root size="1" defaultValue="apple">
        <Select.Trigger {...args} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root size="2" defaultValue="apple">
        <Select.Trigger {...args} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root size="3" defaultValue="apple">
        <Select.Trigger {...args} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root size="4" defaultValue="apple">
        <Select.Trigger {...args} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const TriggerVariant: Story = {
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} variant="surface" />
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} variant="soft" />
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} variant="ghost" />
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
        <Select.Root defaultValue="apple" disabled>
          <Select.Trigger {...args} variant="surface" />
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="apple" disabled>
          <Select.Trigger {...args} variant="soft" />
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="apple" disabled>
          <Select.Trigger {...args} variant="ghost" />
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  ),
};

export const Color: Story = {
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <Select.Root defaultValue="apple">
        <Select.Trigger {...args} color="indigo" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger {...args} color="cyan" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger {...args} color="orange" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger {...args} color="crimson" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const Placeholder: Story = {
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <Select.Root>
      <Select.Trigger {...args} placeholder="Pick a fruit" />
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
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <Select.Root defaultValue="apple">
        <Select.Trigger {...args} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger {...args} />
        <Select.Content highContrast>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const AlternativePositioning: Story = {
  name: 'Alternative positioning',
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <Select.Root defaultValue="apple">
      <Select.Trigger {...args} />
      <Select.Content position="popper">
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};
