import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Code, RadioGroup, Text, radioGroupPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/RadioGroup',
  component: RadioGroup.Root,
  args: {
    disabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: radioGroupPropDefs.size.default,
    color: radioGroupPropDefs.color.default,
    variant: radioGroupPropDefs.variant.default,
    highContrast: radioGroupPropDefs.highContrast.default,
  },
  render: (args) => (
    <RadioGroup.Root defaultValue="1" {...args}>
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
        <RadioGroup.Item value="1">Default</RadioGroup.Item>
        <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
        <RadioGroup.Item value="3">Compact</RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  ),
};

export const Composed: Story = {
  args: {
    size: radioGroupPropDefs.size.default,
    color: radioGroupPropDefs.color.default,
    variant: radioGroupPropDefs.variant.default,
    highContrast: radioGroupPropDefs.highContrast.default,
  },
  render: (args) => (
    <RadioGroup.Root defaultValue="1" {...args}>
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
        <Text as="label" size="2">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="1" /> Default
          </div>
        </Text>
        <Text as="label" size="2">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="2" /> Comfortable
          </div>
        </Text>
        <Text as="label" size="2">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="3" /> Compact
          </div>
        </Text>
      </div>
    </RadioGroup.Root>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <RadioGroup.Root {...args} size="1" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} size="2" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} size="3" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>
    </div>
  ),
};

export const Variant: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <RadioGroup.Root
        {...args}
        variant="surface"
        defaultValue="1"
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}
      >
        <RadioGroup.Item value="1" />
        <RadioGroup.Item value="2" />
      </RadioGroup.Root>

      <RadioGroup.Root
        {...args}
        variant="classic"
        defaultValue="1"
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}
      >
        <RadioGroup.Item value="1" />
        <RadioGroup.Item value="2" />
      </RadioGroup.Root>

      <RadioGroup.Root
        {...args}
        variant="soft"
        defaultValue="1"
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}
      >
        <RadioGroup.Item value="1" />
        <RadioGroup.Item value="2" />
      </RadioGroup.Root>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <RadioGroup.Root {...args} color="indigo" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="cyan" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="orange" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="crimson" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>
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
      <RadioGroup.Root {...args} color="indigo" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="indigo" defaultValue="1" highContrast>
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="cyan" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="cyan" defaultValue="1" highContrast>
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="orange" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="orange" defaultValue="1" highContrast>
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="crimson" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="crimson" defaultValue="1" highContrast>
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>
    </div>
  ),
};

export const Alignment: Story = {
  name: 'Alignment with text',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Text style={{ marginBottom: 12 }}>
        Composing <Code>RadioGroup</Code> within <Code>Text</Code> automatically centers it with the first line of text.
      </Text>
      <RadioGroup.Root {...args} size="1" defaultValue="1">
        <Text as="label" size="2">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="1" /> Default
          </div>
        </Text>

        <Text as="label" size="2">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="2" /> Compact
          </div>
        </Text>
      </RadioGroup.Root>

      <RadioGroup.Root {...args} size="2" defaultValue="1">
        <Text as="label" size="3">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="1" /> Default
          </div>
        </Text>

        <Text as="label" size="3">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="2" /> Compact
          </div>
        </Text>
      </RadioGroup.Root>

      <RadioGroup.Root {...args} size="3" defaultValue="1">
        <Text as="label" size="4">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="1" /> Default
          </div>
        </Text>

        <Text as="label" size="4">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="2" /> Compact
          </div>
        </Text>
      </RadioGroup.Root>
    </div>
  ),
};
