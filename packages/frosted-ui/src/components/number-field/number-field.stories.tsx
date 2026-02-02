import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Code, NumberField, Text, TextField, numberFieldPropDefs } from '..';

const meta = {
  title: 'Controls/NumberField',
  component: NumberField.Root,
  args: {
    size: numberFieldPropDefs.size.default,
    variant: numberFieldPropDefs.variant.default,
    color: numberFieldPropDefs.color.default,
    buttonLayout: numberFieldPropDefs.buttonLayout.default,
  },
  argTypes: {
    size: {
      control: 'select',
      options: numberFieldPropDefs.size.values,
    },
    variant: {
      control: 'select',
      options: numberFieldPropDefs.variant.values,
    },
    color: {
      control: 'select',
      options: numberFieldPropDefs.color.values,
    },
    buttonLayout: {
      control: 'select',
      options: numberFieldPropDefs.buttonLayout.values,
    },
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NumberField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 160 }}>
      <NumberField.Root {...args} defaultValue={50}>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
      <NumberField.Root {...args} size="1" defaultValue={10}>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>

      <NumberField.Root {...args} size="2" defaultValue={20}>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>

      <NumberField.Root {...args} size="3" defaultValue={30}>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>

      <NumberField.Root {...args} size="4" defaultValue={40}>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};

export const Variant: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Text size="2" weight="medium">
          Surface
        </Text>
        <NumberField.Root {...args} variant="surface" defaultValue={100}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Text size="2" weight="medium">
          Soft
        </Text>
        <NumberField.Root {...args} variant="soft" defaultValue={100}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
      </div>
    </div>
  ),
};

export const ButtonLayout: Story = {
  name: 'Button Layout',
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Text size="2" weight="medium">
          Split (default)
        </Text>
        <Text size="1" color="gray">
          Buttons on either side
        </Text>
        <NumberField.Root {...args} buttonLayout="split" defaultValue={50}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
        <TextField.Input
          size={args.size}
          variant={args.variant}
          color={args.color}
          disabled={args.disabled}
          placeholder="TextField"
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Text size="2" weight="medium">
          Stacked
        </Text>
        <Text size="1" color="gray">
          Buttons stacked on right
        </Text>
        <NumberField.Root {...args} buttonLayout="stacked" defaultValue={50}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
        <TextField.Input
          size={args.size}
          variant={args.variant}
          color={args.color}
          disabled={args.disabled}
          placeholder="TextField"
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Text size="2" weight="medium">
          Trailing
        </Text>
        <Text size="1" color="gray">
          Buttons in row on right
        </Text>
        <NumberField.Root {...args} buttonLayout="trailing" defaultValue={50}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
        <TextField.Input
          size={args.size}
          variant={args.variant}
          color={args.color}
          disabled={args.disabled}
          placeholder="TextField"
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Text size="2" weight="medium">
          None
        </Text>
        <Text size="1" color="gray">
          No buttons
        </Text>
        <NumberField.Root {...args} buttonLayout="none" defaultValue={50}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
        <TextField.Input
          size={args.size}
          variant={args.variant}
          color={args.color}
          disabled={args.disabled}
          placeholder="TextField"
        />
      </div>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <NumberField.Root {...args} color="indigo" defaultValue={100}>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>

      <NumberField.Root {...args} color="green" defaultValue={100}>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>

      <NumberField.Root {...args} color="red" defaultValue={100}>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};

export const MinMax: Story = {
  name: 'Min / Max',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
      <Text size="2" color="gray">
        Value constrained between 0 and 100
      </Text>
      <NumberField.Root {...args} defaultValue={50} min={0} max={100}>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};

export const Step: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div>
        <Text render={<div />} size="2" color="gray" style={{ marginBottom: 'var(--space-2)' }}>
          Step: 5
        </Text>
        <NumberField.Root {...args} defaultValue={0} step={5}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
      </div>

      <div>
        <Text render={<div />} size="2" color="gray" style={{ marginBottom: 'var(--space-2)' }}>
          Step: 0.01 (for currency)
        </Text>
        <NumberField.Root {...args} defaultValue={9.99} step={0.01}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
      </div>
    </div>
  ),
};

export const Formatting: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div>
        <Text render={<div />} size="2" color="gray" style={{ marginBottom: 'var(--space-2)' }}>
          Currency (USD)
        </Text>
        <NumberField.Root {...args} defaultValue={1234.56} format={{ style: 'currency', currency: 'USD' }}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
      </div>

      <div>
        <Text render={<div />} size="2" color="gray" style={{ marginBottom: 'var(--space-2)' }}>
          Percentage
        </Text>
        <NumberField.Root {...args} defaultValue={0.75} format={{ style: 'percent' }} step={0.01}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
      </div>

      <div>
        <Text render={<div />} size="2" color="gray" style={{ marginBottom: 'var(--space-2)' }}>
          Unit (kilograms)
        </Text>
        <NumberField.Root {...args} defaultValue={75} format={{ style: 'unit', unit: 'kilogram' }}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <NumberField.Root {...args} variant="surface" defaultValue={100} disabled>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>

      <NumberField.Root {...args} variant="soft" defaultValue={100} disabled>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};

export const ReadOnly: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <NumberField.Root {...args} variant="surface" defaultValue={100} readOnly>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>

      <NumberField.Root {...args} variant="soft" defaultValue={100} readOnly>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};

export const DisabledVsReadOnly: Story = {
  name: 'Disabled vs ReadOnly (Accessibility)',
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 280 }}>
        <Text size="2" weight="bold">
          Disabled
        </Text>
        <Text size="1" color="gray">
          Use when the field is completely unavailable. The input <strong>cannot be focused</strong> via keyboard (Tab
          skips it). Screen readers announce it as disabled. Value is <strong>not submitted</strong> with the form.
        </Text>
        <NumberField.Root {...args} defaultValue={100} disabled>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
        <Text size="1" color="gray">
          <em>Try pressing Tab — the input will be skipped.</em>
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 280 }}>
        <Text size="2" weight="bold">
          ReadOnly
        </Text>
        <Text size="1" color="gray">
          Use when you want to display a value that cannot be changed, but should remain{' '}
          <strong>focusable and selectable</strong>. Users can Tab to it, copy the value, and screen readers can
          announce it. Value <strong>is submitted</strong> with the form.
        </Text>
        <NumberField.Root {...args} defaultValue={100} readOnly>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>
        <Text size="1" color="gray">
          <em>Try pressing Tab — the input can be focused.</em>
        </Text>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<number | null>(50);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
        <NumberField.Root {...args} value={value} onValueChange={(v) => setValue(v)}>
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>

        <Code size="2">value: {value === null ? 'null' : value}</Code>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button size="1" variant="soft" onClick={() => setValue(0)}>
            Set to 0
          </Button>
          <Button size="1" variant="soft" onClick={() => setValue(100)}>
            Set to 100
          </Button>
          <Button size="1" variant="soft" onClick={() => setValue(null)}>
            Clear
          </Button>
        </div>
      </div>
    );
  },
};

export const WithScrubArea: Story = {
  name: 'With Scrub Area',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
      <Text size="2" color="gray">
        Click and drag on the label to scrub the value
      </Text>
      <NumberField.Root {...args} defaultValue={50}>
        <NumberField.ScrubArea>
          <label style={{ cursor: 'ew-resize', userSelect: 'none' }}>
            <Text size="2" weight="medium">
              Amount
            </Text>
          </label>
          <NumberField.ScrubAreaCursor />
        </NumberField.ScrubArea>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};

export const LargeAndSmallSteps: Story = {
  name: 'Large and Small Steps',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
      <Text size="2" color="gray">
        Hold <Code size="1">Shift</Code> for large steps (10), <Code size="1">Alt/Option</Code> for small steps (0.1)
      </Text>
      <NumberField.Root {...args} defaultValue={50} step={1} largeStep={10} smallStep={0.1}>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};

export const AllowWheelScrub: Story = {
  name: 'Mouse Wheel Scrub',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
      <Text size="2" color="gray">
        Focus the input and use mouse wheel to change value
      </Text>
      <NumberField.Root {...args} defaultValue={50} allowWheelScrub>
        <NumberField.Group>
          <NumberField.Input />
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};

export const FormSubmission: Story = {
  name: 'Form Submission',
  render: (args) => {
    const [formData, setFormData] = React.useState<FormData | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      setFormData(data);
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}
      >
        <div>
          <Text render={<label htmlFor="quantity" />} size="2" weight="medium">
            Quantity
          </Text>
          <NumberField.Root {...args} id="quantity" name="quantity" defaultValue={1} min={1} max={99}>
            <NumberField.Group>
              <NumberField.Input />
            </NumberField.Group>
          </NumberField.Root>
        </div>

        <div>
          <Text render={<label htmlFor="price" />} size="2" weight="medium">
            Price
          </Text>
          <NumberField.Root
            {...args}
            id="price"
            name="price"
            defaultValue={19.99}
            step={0.01}
            format={{ style: 'currency', currency: 'USD' }}
          >
            <NumberField.Group>
              <NumberField.Input />
            </NumberField.Group>
          </NumberField.Root>
        </div>

        <Button type="submit" size="2">
          Submit
        </Button>

        {formData && (
          <Code size="2" style={{ whiteSpace: 'pre' }}>
            {JSON.stringify(Object.fromEntries(formData.entries()), null, 2)}
          </Code>
        )}
      </form>
    );
  },
};
