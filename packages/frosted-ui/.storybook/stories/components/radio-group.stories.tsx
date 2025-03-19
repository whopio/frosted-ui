import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Code, Flex, RadioGroup, Text } from '../../../src/components';
import { radioGroupPropDefs } from '../../../src/components/radio-group.props';

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
      <Flex gap="2" direction="column">
        <RadioGroup.Item value="1">Default</RadioGroup.Item>
        <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
        <RadioGroup.Item value="3">Compact</RadioGroup.Item>
      </Flex>
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
      <Flex gap="2" direction="column">
        <Text as="label" size="2">
          <Flex gap="2">
            <RadioGroup.Item value="1" /> Default
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <RadioGroup.Item value="2" /> Comfortable
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <RadioGroup.Item value="3" /> Compact
          </Flex>
        </Text>
      </Flex>
    </RadioGroup.Root>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Flex align="center" gap="2">
      <RadioGroup.Root {...args} size="1" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} size="2" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} size="3" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>
    </Flex>
  ),
};

export const Variant: Story = {
  render: (args) => (
    <Flex gap="2">
      <Flex direction="column" asChild gap="2">
        <RadioGroup.Root {...args} variant="surface" defaultValue="1">
          <RadioGroup.Item value="1" />
          <RadioGroup.Item value="2" />
        </RadioGroup.Root>
      </Flex>

      <Flex direction="column" asChild gap="2">
        <RadioGroup.Root {...args} variant="classic" defaultValue="1">
          <RadioGroup.Item value="1" />
          <RadioGroup.Item value="2" />
        </RadioGroup.Root>
      </Flex>

      <Flex direction="column" asChild gap="2">
        <RadioGroup.Root {...args} variant="soft" defaultValue="1">
          <RadioGroup.Item value="1" />
          <RadioGroup.Item value="2" />
        </RadioGroup.Root>
      </Flex>
    </Flex>
  ),
};

export const Color: Story = {
  render: (args) => (
    <Flex gap="2">
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
    </Flex>
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
    <Flex direction="column" gap="3">
      <Text style={{ marginBottom: 12 }}>
        Composing <Code>RadioGroup</Code> within <Code>Text</Code> automatically centers it with the first line of text.
      </Text>
      <RadioGroup.Root {...args} size="1" defaultValue="1">
        <Text as="label" size="2">
          <Flex gap="2">
            <RadioGroup.Item value="1" /> Default
          </Flex>
        </Text>

        <Text as="label" size="2">
          <Flex gap="2">
            <RadioGroup.Item value="2" /> Compact
          </Flex>
        </Text>
      </RadioGroup.Root>

      <RadioGroup.Root {...args} size="2" defaultValue="1">
        <Text as="label" size="3">
          <Flex gap="2">
            <RadioGroup.Item value="1" /> Default
          </Flex>
        </Text>

        <Text as="label" size="3">
          <Flex gap="2">
            <RadioGroup.Item value="2" /> Compact
          </Flex>
        </Text>
      </RadioGroup.Root>

      <RadioGroup.Root {...args} size="3" defaultValue="1">
        <Text as="label" size="4">
          <Flex gap="2">
            <RadioGroup.Item value="1" /> Default
          </Flex>
        </Text>

        <Text as="label" size="4">
          <Flex gap="2">
            <RadioGroup.Item value="2" /> Compact
          </Flex>
        </Text>
      </RadioGroup.Root>
    </Flex>
  ),
};
