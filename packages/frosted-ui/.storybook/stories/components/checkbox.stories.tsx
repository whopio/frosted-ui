import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Code, Text } from '../../../src/components';
import { Checkbox } from '../../../src/components/checkbox';
import { checkboxPropDefs } from '../../../src/components/checkbox.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: checkboxPropDefs.size.default,
    color: checkboxPropDefs.color.default,
    highContrast: checkboxPropDefs.highContrast.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
      <Checkbox checked {...args}>
        Checked
      </Checkbox>
      <Checkbox checked disabled {...args}>
        Checked disabled
      </Checkbox>
      <Checkbox checked={false} {...args}>
        Unchecked
      </Checkbox>
      <Checkbox checked={false} disabled {...args}>
        Unchecked disabled
      </Checkbox>
      <Checkbox checked={'indeterminate'} {...args}>
        Indeterminate
      </Checkbox>
      <Checkbox checked={'indeterminate'} disabled {...args}>
        Indeterminate disabled
      </Checkbox>
    </div>
  ),
};

export const Composed: Story = {
  args: {
    size: checkboxPropDefs.size.default,
    color: checkboxPropDefs.color.default,
    highContrast: checkboxPropDefs.highContrast.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
      <Text as="label" size="2">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Checkbox defaultChecked {...args} />
          Default
        </div>
      </Text>
      <Text as="label" size="2">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Checkbox defaultChecked={true} disabled {...args} />
          Disabled checked
        </div>
      </Text>
      <Text as="label" size="2">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Checkbox defaultChecked={false} disabled {...args} />
          Disabled unchecked
        </div>
      </Text>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <Checkbox defaultChecked {...args} size="1" />
      <Checkbox defaultChecked {...args} size="2" />
      <Checkbox defaultChecked {...args} size="3" />
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <Checkbox {...args} color="indigo" defaultChecked />
      <Checkbox {...args} color="cyan" defaultChecked />
      <Checkbox {...args} color="orange" defaultChecked />
      <Checkbox {...args} color="crimson" defaultChecked />
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div
      style={{
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '8px',
      }}
    >
      <Checkbox {...args} color="indigo" defaultChecked />
      <Checkbox {...args} color="indigo" defaultChecked highContrast />
      <Checkbox {...args} color="cyan" defaultChecked />
      <Checkbox {...args} color="cyan" defaultChecked highContrast />
      <Checkbox {...args} color="orange" defaultChecked />
      <Checkbox {...args} color="orange" defaultChecked highContrast />
      <Checkbox {...args} color="crimson" defaultChecked />
      <Checkbox {...args} color="crimson" defaultChecked highContrast />
    </div>
  ),
};

export const Alignment: Story = {
  name: 'Alignment with text',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Text style={{ marginBottom: 12 }}>
        Composing <Code>Checkbox</Code> within <Code>Text</Code> automatically centers it with the first line of text.
      </Text>
      <Text as="label" size="3">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Checkbox {...args} size="1" defaultChecked /> Agree to Terms and Conditions
        </div>
      </Text>

      <Text as="label" size="4">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Checkbox {...args} size="2" defaultChecked /> Agree to Terms and Conditions
        </div>
      </Text>

      <Text as="label" size="5">
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Checkbox {...args} size="3" defaultChecked /> Agree to Terms and Conditions
        </div>
      </Text>

      <div style={{ maxWidth: 300 }}>
        <Text as="label" size="4">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Checkbox defaultChecked /> It is automatically well-aligned with multi-line text too.
          </div>
        </Text>
      </div>
    </div>
  ),
};
