import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Code, Select, selectTriggerPropDefs, Text } from '..';

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
    <Select.Root defaultValue="apple" size="2">
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

const fontItems = [
  { value: 'system', label: 'System font' },
  { value: 'arial', label: 'Arial' },
  { value: 'roboto', label: 'Roboto' },
  { value: 'inter', label: 'Inter' },
  { value: 'open-sans', label: 'Open Sans' },
];

const currencyItems = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  CAD: 'Canadian Dollar',
};

export const FormattingTheValue: Story = {
  name: 'Formatting the Value',
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 600, textAlign: 'center' }}>
        By default, <Code>Select.Value</Code> renders the raw value. Use <Code>items</Code> prop on Root for automatic
        label lookup, or pass a custom render function to <Code>renderValue</Code> on Trigger for full control.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Default: Raw value */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Text size="1" color="gray">
            Default (raw value)
          </Text>
          <Select.Root defaultValue="roboto">
            <Select.Trigger {...args} style={{ width: 150 }} />
            <Select.Content>
              {fontItems.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>

        {/* With items prop for label lookup */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Text size="1" color="gray">
            With items prop
          </Text>
          <Select.Root defaultValue="roboto" items={fontItems}>
            <Select.Trigger {...args} style={{ width: 150 }} />
            <Select.Content>
              {fontItems.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>

        {/* Custom render function */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Text size="1" color="gray">
            Custom renderValue
          </Text>
          <Select.Root defaultValue="EUR">
            <Select.Trigger
              {...args}
              style={{ width: 180 }}
              renderValue={(value: string) => (
                <span>
                  💰 {currencyItems[value as keyof typeof currencyItems]} ({value})
                </span>
              )}
            />
            <Select.Content>
              {Object.entries(currencyItems).map(([code, name]) => (
                <Select.Item key={code} value={code}>
                  {name} ({code})
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </div>
  ),
};

export const DropdownPositioning: Story = {
  name: 'Dropdown Positioning',
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 500, textAlign: 'center' }}>
        By default, Base UI Select aligns the selected item with the trigger (native select behavior). Set{' '}
        <Code>alignItemWithTrigger=&#123;false&#125;</Code> for standard dropdown positioning.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Text size="1" color="gray">
            Default (item-aligned)
          </Text>
          <Select.Root defaultValue="banana">
            <Select.Trigger {...args} />
            <Select.Content>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="cherry">Cherry</Select.Item>
              <Select.Item value="date">Date</Select.Item>
              <Select.Item value="elderberry">Elderberry</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Text size="1" color="gray">
            alignItemWithTrigger=false
          </Text>
          <Select.Root defaultValue="banana">
            <Select.Trigger {...args} />
            <Select.Content alignItemWithTrigger={false}>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="cherry">Cherry</Select.Item>
              <Select.Item value="date">Date</Select.Item>
              <Select.Item value="elderberry">Elderberry</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </div>
  ),
};

export const SideAndAlign: Story = {
  name: 'Side and Align',
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 500, textAlign: 'center' }}>
        Control where the popup appears using <Code>side</Code> and <Code>align</Code> props. These only take effect
        when <Code>alignItemWithTrigger=&#123;false&#125;</Code>.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} placeholder="Bottom Start" />
          <Select.Content alignItemWithTrigger={false} side="bottom" align="start">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} placeholder="Bottom Center" />
          <Select.Content alignItemWithTrigger={false} side="bottom" align="center">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} placeholder="Bottom End" />
          <Select.Content alignItemWithTrigger={false} side="bottom" align="end">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} placeholder="Top Start" />
          <Select.Content alignItemWithTrigger={false} side="top" align="start">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} placeholder="Right Start" />
          <Select.Content alignItemWithTrigger={false} side="right" align="start">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} placeholder="Left Start" />
          <Select.Content alignItemWithTrigger={false} side="left" align="start">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  ),
};

export const SideOffsetAndAlignOffset: Story = {
  name: 'Side Offset and Align Offset',
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 500, textAlign: 'center' }}>
        Fine-tune positioning with <Code>sideOffset</Code> (distance from trigger) and <Code>alignOffset</Code> (shift
        along the alignment axis). Requires <Code>alignItemWithTrigger=&#123;false&#125;</Code>.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} placeholder="Default (4px)" />
          <Select.Content alignItemWithTrigger={false}>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} placeholder="sideOffset: 16" />
          <Select.Content alignItemWithTrigger={false} sideOffset={16}>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="apple">
          <Select.Trigger {...args} placeholder="alignOffset: 20" />
          <Select.Content alignItemWithTrigger={false} alignOffset={20}>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  ),
};

export const ControlledMode: Story = {
  name: 'Controlled Mode',
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: function Render(args) {
    const [value, setValue] = React.useState<string | null>('apple');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text as="div" style={{ maxWidth: 500, textAlign: 'center' }}>
          Control the select's value externally with <Code>value</Code> and <Code>onValueChange</Code> props.
        </Text>

        <Select.Root value={value} onValueChange={(newValue) => setValue(newValue as string | null)}>
          <Select.Trigger {...args} placeholder="Pick a fruit" />
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="cherry">Cherry</Select.Item>
          </Select.Content>
        </Select.Root>

        <Text size="2" color="gray">
          Selected: <Code>{value ?? 'none'}</Code>
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <button onClick={() => setValue('cherry')}>Set to Cherry</button>
          <button onClick={() => setValue(null)}>Clear</button>
        </div>
      </div>
    );
  },
};

export const ManyItems: Story = {
  name: 'Many Items',
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => {
    const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center' }}>
        <Text as="div" style={{ maxWidth: 600, textAlign: 'center' }}>
          Select with many items. Compare <Code>alignItemWithTrigger</Code> behavior.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'center' }}>
            <Text size="2" weight="medium">
              alignItemWithTrigger={'{true}'} (default)
            </Text>
            <Select.Root defaultValue="Item 25">
              <Select.Trigger {...args} />
              <Select.Content>
                {items.map((item) => (
                  <Select.Item key={item} value={item}>
                    {item}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
            <Text size="1" color="gray" style={{ maxWidth: 200, textAlign: 'center' }}>
              Selected item aligns with trigger. Popup expands as you scroll.
            </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'center' }}>
            <Text size="2" weight="medium">
              alignItemWithTrigger={'{false}'}
            </Text>
            <Select.Root defaultValue="Item 25">
              <Select.Trigger {...args} />
              <Select.Content alignItemWithTrigger={false}>
                {items.map((item) => (
                  <Select.Item key={item} value={item}>
                    {item}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
            <Text size="1" color="gray" style={{ maxWidth: 200, textAlign: 'center' }}>
              Standard dropdown positioning below trigger.
            </Text>
          </div>
        </div>
      </div>
    );
  },
};

const languages = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  java: 'Java',
  csharp: 'C#',
  php: 'PHP',
  cpp: 'C++',
  rust: 'Rust',
  go: 'Go',
  swift: 'Swift',
} as const;

type Language = keyof typeof languages;

export const MultipleSelection: Story = {
  name: 'Multiple Selection',
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => {
    const languageKeys = Object.keys(languages) as Language[];

    const renderValue = (value: Language[]) => {
      if (value.length === 0) {
        return 'Select languages...';
      }
      const firstLanguage = languages[value[0]];
      const additionalCount = value.length > 1 ? ` (+${value.length - 1} more)` : '';
      return firstLanguage + additionalCount;
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text as="div" style={{ maxWidth: 500, textAlign: 'center' }}>
          Add the <Code>multiple</Code> prop to <Code>Select.Root</Code> to allow multiple selections. Use the{' '}
          <Code>renderValue</Code> prop on the Trigger to customize how the selection is displayed.
        </Text>

        <Select.Root multiple defaultValue={['javascript', 'typescript']}>
          <Select.Trigger {...args} renderValue={renderValue} />
          <Select.Content alignItemWithTrigger={false}>
            {languageKeys.map((key) => (
              <Select.Item key={key} value={key}>
                {languages[key]}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
    );
  },
};

interface ShippingMethod {
  id: string;
  name: string;
  duration: string;
  price: string;
}

export const ObjectValues: Story = {
  name: 'Object Values',
  args: {
    variant: selectTriggerPropDefs.variant.default,
    color: selectTriggerPropDefs.color.default,
  },
  render: (args) => {
    const shippingMethods: ShippingMethod[] = [
      {
        id: 'standard',
        name: 'Standard',
        duration: 'Delivers in 4-6 business days',
        price: '$4.99',
      },
      {
        id: 'express',
        name: 'Express',
        duration: 'Delivers in 2-3 business days',
        price: '$9.99',
      },
      {
        id: 'overnight',
        name: 'Overnight',
        duration: 'Delivers next business day',
        price: '$19.99',
      },
    ];

    const renderShippingValue = (method: ShippingMethod) => (
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'left' }}>
        <span style={{ fontWeight: 500 }}>{method.name}</span>
        <span style={{ fontSize: '0.85em', color: 'var(--gray-11)' }}>
          {method.duration} ({method.price})
        </span>
      </span>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text as="div" style={{ maxWidth: 500, textAlign: 'center' }}>
          Select items can use objects as values instead of primitives. Use <Code>itemToStringValue</Code> to convert
          objects to strings for comparison, and <Code>renderValue</Code> to display the full object. Note:{' '}
          <Code>alignItemWithTrigger=&#123;false&#125;</Code> is recommended for variable-height items.
        </Text>

        <Select.Root
          defaultValue={shippingMethods[0]}
          itemToStringValue={(item) => (item as ShippingMethod).id}
          size="3"
        >
          <Select.Trigger
            {...args}
            renderValue={renderShippingValue}
            style={{ height: 'auto', minHeight: 'var(--space-8)', paddingTop: 8, paddingBottom: 8 }}
          />
          <Select.Content alignItemWithTrigger={false}>
            {shippingMethods.map((method) => (
              <Select.Item key={method.id} value={method} style={{ height: 'auto', paddingTop: 8, paddingBottom: 8 }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontWeight: 500 }}>{method.name}</span>
                  <span style={{ fontSize: '0.85em', color: 'var(--gray-11)' }}>
                    {method.duration} ({method.price})
                  </span>
                </span>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
    );
  },
};
