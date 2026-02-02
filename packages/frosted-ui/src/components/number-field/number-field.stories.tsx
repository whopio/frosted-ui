import type { Meta, StoryObj } from '@storybook/react';

import { DollarSign16, Percentage16 } from '@frosted-ui/icons';
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
          Trailing (default)
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
          Split
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

export const WithSlot: Story = {
  name: 'With Slot',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 300 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Text size="2" weight="bold">
          Slot
        </Text>
        <Text size="1" color="gray">
          Use <Code size="1">NumberField.Slot</Code> to add icons or other content inside the input area. Works with all
          button layouts.
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            Leading slot (currency)
          </Text>
          <NumberField.Root {...args} defaultValue={99.99} step={0.01} format={{ minimumFractionDigits: 2 }}>
            <NumberField.Group>
              <NumberField.Slot>
                <DollarSign16 />
              </NumberField.Slot>
              <NumberField.Input />
            </NumberField.Group>
          </NumberField.Root>
        </div>

        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            Trailing slot (unit)
          </Text>
          <NumberField.Root {...args} defaultValue={75}>
            <NumberField.Group>
              <NumberField.Input />
              <NumberField.Slot>kg</NumberField.Slot>
            </NumberField.Group>
          </NumberField.Root>
        </div>

        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            Both slots
          </Text>
          <NumberField.Root {...args} defaultValue={50} min={0} max={100}>
            <NumberField.Group>
              <NumberField.Slot>
                <Percentage16 />
              </NumberField.Slot>
              <NumberField.Input />
              <NumberField.Slot>off</NumberField.Slot>
            </NumberField.Group>
          </NumberField.Root>
        </div>

        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            With split button layout
          </Text>
          <NumberField.Root {...args} defaultValue={5} buttonLayout="split">
            <NumberField.Group>
              <NumberField.Slot>Qty</NumberField.Slot>
              <NumberField.Input />
            </NumberField.Group>
          </NumberField.Root>
        </div>

        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            Colored slot
          </Text>
          <NumberField.Root {...args} defaultValue={100} color="green">
            <NumberField.Group>
              <NumberField.Slot color="green">
                <DollarSign16 />
              </NumberField.Slot>
              <NumberField.Input />
            </NumberField.Group>
          </NumberField.Root>
        </div>
      </div>
    </div>
  ),
};

// Simple icons for slot demos
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
  name: 'Step Configuration',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 400 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Text size="2" weight="bold">
          step
        </Text>
        <Text size="1" color="gray">
          Base increment amount. Use buttons or arrow keys (↑↓).
        </Text>
        <NumberField.Root {...args} defaultValue={0} step={5}>
          <NumberField.Group>
            <NumberField.Input placeholder="step={5}" />
          </NumberField.Group>
        </NumberField.Root>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Text size="2" weight="bold">
          smallStep + largeStep
        </Text>
        <Text size="1" color="gray">
          Hold <Code size="1">Alt/Option</Code> for small steps, <Code size="1">Shift</Code> for large steps.
        </Text>
        <NumberField.Root {...args} defaultValue={50} step={1} smallStep={0.1} largeStep={10}>
          <NumberField.Group>
            <NumberField.Input placeholder="step=1, smallStep=0.1, largeStep=10" />
          </NumberField.Group>
        </NumberField.Root>
        <Text size="1" color="gray">
          <em>Normal: ±1 · Alt/Option: ±0.1 · Shift: ±10</em>
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Text size="2" weight="bold">
          snapOnStep
        </Text>
        <Text size="1" color="gray">
          Controls snapping behavior when using buttons or arrow keys. Type "7", then press ↑ to see the difference.
        </Text>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <div style={{ flex: 1 }}>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              snapOnStep={'{false}'} (default)
            </Text>
            <NumberField.Root {...args} defaultValue={7} step={5} snapOnStep={false}>
              <NumberField.Group>
                <NumberField.Input />
              </NumberField.Group>
            </NumberField.Root>
            <Text size="1" color="gray">
              <em>7 → ↑ → 12 (adds step)</em>
            </Text>
          </div>
          <div style={{ flex: 1 }}>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              snapOnStep={'{true}'}
            </Text>
            <NumberField.Root {...args} defaultValue={7} step={5} snapOnStep>
              <NumberField.Group>
                <NumberField.Input />
              </NumberField.Group>
            </NumberField.Root>
            <Text size="1" color="gray">
              <em>7 → ↑ → 10 (snaps to step)</em>
            </Text>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Text size="2" weight="bold">
          Decimal precision (step=0.01)
        </Text>
        <Text size="1" color="gray">
          Use small step values for currency or precise decimal inputs.
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
  name: 'format (Intl.NumberFormatOptions)',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 500 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Text size="2" weight="bold">
          format
        </Text>
        <Text size="1" color="gray">
          Uses{' '}
          <Code size="1">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"
              target="_blank"
              rel="noopener"
              style={{ color: 'inherit' }}
            >
              Intl.NumberFormatOptions
            </a>
          </Code>{' '}
          to format the displayed value. The actual numeric value remains unchanged.
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          <Text size="1" weight="medium">
            Currency
          </Text>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <NumberField.Root
              {...args}
              defaultValue={1234.56}
              step={0.01}
              format={{ style: 'currency', currency: 'USD' }}
            >
              <NumberField.Group>
                <NumberField.Input placeholder="USD" />
              </NumberField.Group>
            </NumberField.Root>
            <NumberField.Root
              {...args}
              defaultValue={1234.56}
              step={0.01}
              format={{ style: 'currency', currency: 'EUR' }}
            >
              <NumberField.Group>
                <NumberField.Input placeholder="EUR" />
              </NumberField.Group>
            </NumberField.Root>
            <NumberField.Root
              {...args}
              defaultValue={1234.56}
              step={0.01}
              format={{ style: 'currency', currency: 'JPY' }}
            >
              <NumberField.Group>
                <NumberField.Input placeholder="JPY" />
              </NumberField.Group>
            </NumberField.Root>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          <Text size="1" weight="medium">
            Percentage
          </Text>
          <Text size="1" color="gray">
            Value 0.75 displays as 75%. Use <Code size="1">step={'{0.01}'}</Code> for 1% increments.
          </Text>
          <NumberField.Root {...args} defaultValue={0.75} format={{ style: 'percent' }} step={0.01}>
            <NumberField.Group>
              <NumberField.Input style={{ width: 120 }} />
            </NumberField.Group>
          </NumberField.Root>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          <Text size="1" weight="medium">
            Units
          </Text>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <NumberField.Root {...args} defaultValue={75} format={{ style: 'unit', unit: 'kilogram' }}>
              <NumberField.Group>
                <NumberField.Input />
              </NumberField.Group>
            </NumberField.Root>
            <NumberField.Root {...args} defaultValue={100} format={{ style: 'unit', unit: 'kilometer-per-hour' }}>
              <NumberField.Group>
                <NumberField.Input />
              </NumberField.Group>
            </NumberField.Root>
            <NumberField.Root {...args} defaultValue={24} format={{ style: 'unit', unit: 'celsius' }}>
              <NumberField.Group>
                <NumberField.Input />
              </NumberField.Group>
            </NumberField.Root>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          <Text size="1" weight="medium">
            Decimal precision
          </Text>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <div>
              <Text size="1" color="gray" style={{ display: 'block', marginBottom: 'var(--space-1)' }}>
                2 decimals
              </Text>
              <NumberField.Root
                {...args}
                defaultValue={3.14159}
                format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
              >
                <NumberField.Group>
                  <NumberField.Input style={{ width: 100 }} />
                </NumberField.Group>
              </NumberField.Root>
            </div>
            <div>
              <Text size="1" color="gray" style={{ display: 'block', marginBottom: 'var(--space-1)' }}>
                No decimals
              </Text>
              <NumberField.Root
                {...args}
                defaultValue={1234}
                format={{ minimumFractionDigits: 0, maximumFractionDigits: 0 }}
              >
                <NumberField.Group>
                  <NumberField.Input style={{ width: 100 }} />
                </NumberField.Group>
              </NumberField.Root>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          <Text size="1" weight="medium">
            Compact notation
          </Text>
          <Text size="1" color="gray">
            Large numbers displayed as "1.2M" or "5K".
          </Text>
          <NumberField.Root {...args} defaultValue={1234567} format={{ notation: 'compact' }} step={1000}>
            <NumberField.Group>
              <NumberField.Input style={{ width: 120 }} />
            </NumberField.Group>
          </NumberField.Root>
        </div>
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

export const OnValueChangeVsCommitted: Story = {
  name: 'onValueChange vs onValueCommitted',
  render: (args) => {
    const [changeLog, setChangeLog] = React.useState<string[]>([]);
    const [commitLog, setCommitLog] = React.useState<string[]>([]);

    const addChangeLog = (value: number | null) => {
      const timestamp = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3,
      });
      setChangeLog((prev) => [`${timestamp}: ${value ?? 'null'}`, ...prev].slice(0, 8));
    };

    const addCommitLog = (value: number | null) => {
      const timestamp = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3,
      });
      setCommitLog((prev) => [`${timestamp}: ${value ?? 'null'}`, ...prev].slice(0, 8));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 560 }}>
        <NumberField.Root
          {...args}
          defaultValue={50}
          onValueChange={(value) => addChangeLog(value)}
          onValueCommitted={(value) => addCommitLog(value)}
        >
          <NumberField.Group>
            <NumberField.Input />
          </NumberField.Group>
        </NumberField.Root>

        <Text size="1" color="gray">
          Try typing, using arrow keys (↑↓), clicking buttons, or blurring the input to see when each callback fires.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>
            <Text size="2" weight="bold" color="blue">
              onValueChange
            </Text>
            <Text size="1" color="gray">
              Fires on <strong>every</strong> value change. Use for real-time updates like live previews.
            </Text>
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: 11,
                padding: 'var(--space-2)',
                background: 'var(--color-panel)',
                borderRadius: 'var(--radius-2)',
                minHeight: 140,
              }}
            >
              {changeLog.length === 0 ? (
                <span style={{ color: 'var(--gray-9)' }}>No events yet...</span>
              ) : (
                changeLog.map((log, i) => (
                  <div key={i} style={{ opacity: 1 - i * 0.1 }}>
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>
            <Text size="2" weight="bold" color="green">
              onValueCommitted
            </Text>
            <Text size="1" color="gray">
              Fires on <strong>blur</strong>, arrow keys (↑↓), or button clicks. Use for API calls.
            </Text>
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: 11,
                padding: 'var(--space-2)',
                background: 'var(--color-panel)',
                borderRadius: 'var(--radius-2)',
                minHeight: 140,
              }}
            >
              {commitLog.length === 0 ? (
                <span style={{ color: 'var(--gray-9)' }}>No events yet...</span>
              ) : (
                commitLog.map((log, i) => (
                  <div key={i} style={{ opacity: 1 - i * 0.1 }}>
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <Button
          size="1"
          variant="soft"
          onClick={() => {
            setChangeLog([]);
            setCommitLog([]);
          }}
        >
          Clear logs
        </Button>
      </div>
    );
  },
};

export const InputRef: Story = {
  name: 'Input Ref',
  render: (args) => {
    const visibleInputRef = React.useRef<HTMLInputElement>(null);
    const hiddenInputRef = React.useRef<HTMLInputElement>(null);

    const focusInput = () => {
      visibleInputRef.current?.focus();
    };

    const selectAll = () => {
      if (visibleInputRef.current) {
        visibleInputRef.current.focus();
        visibleInputRef.current.select();
      }
    };

    const logHiddenValue = () => {
      alert(`Hidden input value: ${hiddenInputRef.current?.value}`);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 450 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <Text size="2" weight="bold">
            Two ways to access the input
          </Text>
          <Text size="1" color="gray">
            <strong>NumberField.Input ref</strong> — Access the visible input for focus, selection, etc.
          </Text>
          <Text size="1" color="gray">
            <strong>NumberField.Root inputRef</strong> — Access the hidden form input (for form libraries).
          </Text>
        </div>

        <NumberField.Root {...args} defaultValue={1234.56} inputRef={hiddenInputRef}>
          <NumberField.Group>
            <NumberField.Input ref={visibleInputRef} />
          </NumberField.Group>
        </NumberField.Root>

        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <Button size="1" variant="soft" onClick={focusInput}>
            Focus visible input
          </Button>
          <Button size="1" variant="soft" onClick={selectAll}>
            Select all text
          </Button>
          <Button size="1" variant="soft" onClick={logHiddenValue}>
            Read hidden input
          </Button>
        </div>

        <div
          style={{
            padding: 'var(--space-3)',
            background: 'var(--color-panel)',
            borderRadius: 'var(--radius-2)',
          }}
        >
          <Text size="2" weight="medium" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            When to use each:
          </Text>
          <Text size="1" color="gray" render={<ul style={{ margin: 0, paddingLeft: 'var(--space-4)' }} />}>
            <li>
              <strong>Visible input ref:</strong> Focus on modal open, select all for editing, custom keyboard shortcuts
            </li>
            <li>
              <strong>Hidden input ref:</strong> Form library integration, accessing the raw numeric value
            </li>
          </Text>
        </div>
      </div>
    );
  },
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
