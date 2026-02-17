import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import * as Combobox from './combobox';
import { TextField } from '../index';

const meta: Meta<typeof Combobox.Root> = {
  title: 'Controls/Combobox',
  component: Combobox.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Combobox.Root>;

const fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Pineapple',
  'Grape',
  'Mango',
  'Strawberry',
  'Blueberry',
  'Raspberry',
  'Watermelon',
];

// ============================================================================
// Default (single)
// ============================================================================

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={fruits} defaultValue="Apple" size="2">
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Choose a fruit..." />} />
          <TextField.Slot>
            <Combobox.Clear aria-label="Clear selection">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </Combobox.Clear>
          </TextField.Slot>
        </TextField.Root>
        <Combobox.Content>
          <Combobox.Empty>No fruits found.</Combobox.Empty>
          <Combobox.List>
            {(item) => (
              <Combobox.Item key={item} value={item}>
                {item}
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Multiple (chips)
// ============================================================================

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>(['Apple', 'Orange']);
    return (
      <div style={{ maxWidth: 400 }}>
        <Combobox.Root
          items={fruits}
          multiple
          value={value}
          onValueChange={(v) => setValue(v as string[])}
          size="2"
        >
          <Combobox.Chips className="fui-ComboboxChips" style={{ minHeight: 36, padding: '6px 10px', border: '1px solid var(--gray-a6)', borderRadius: 8 }}>
            <Combobox.Value>
              {value.map((item) => (
                <Combobox.Chip key={item}>
                  {item}
                  <Combobox.ChipRemove aria-label={`Remove ${item}`} />
                </Combobox.Chip>
              ))}
            </Combobox.Value>
            <Combobox.Input
              render={<input placeholder="Add fruit..." style={{ border: 'none', background: 'transparent', flex: 1, minWidth: 80, outline: 'none' }} />}
            />
          </Combobox.Chips>
          <Combobox.Content>
            <Combobox.Empty>No fruits found.</Combobox.Empty>
            <Combobox.List>
              {(item) => (
                <Combobox.Item key={item} value={item}>
                  {item}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
      </div>
    );
  },
};

// ============================================================================
// Grouped
// ============================================================================

interface ProduceGroup {
  label: string;
  items: string[];
}

const produceGroups: ProduceGroup[] = [
  { label: 'Fruits', items: ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'] },
  { label: 'Vegetables', items: ['Carrot', 'Lettuce', 'Potato', 'Tomato', 'Broccoli'] },
];

export const Grouped: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={produceGroups} size="2">
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Select produce" />} />
        </TextField.Root>
        <Combobox.Content>
          <Combobox.Empty>No results.</Combobox.Empty>
          <Combobox.List>
            {(group) => {
              const g = group as ProduceGroup;
              return (
                <Combobox.Group key={g.label} items={g.items}>
                  <Combobox.GroupLabel>{g.label}</Combobox.GroupLabel>
                  <Combobox.Collection>
                    {(item) => (
                      <Combobox.Item key={item as string} value={item}>
                        {item as string}
                      </Combobox.Item>
                    )}
                  </Combobox.Collection>
                </Combobox.Group>
              );
            }}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Custom items (objects)
// ============================================================================

interface Framework {
  label: string;
  value: string;
}

const frameworks: Framework[] = [
  { label: 'Next.js', value: 'next' },
  { label: 'SvelteKit', value: 'sveltekit' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Remix', value: 'remix' },
  { label: 'Astro', value: 'astro' },
];

export const CustomItems: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root
        items={frameworks}
        itemToStringLabel={(f) => (f as Framework).label}
        itemToStringValue={(f) => (f as Framework).value}
        size="2"
      >
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Select framework" />} />
        </TextField.Root>
        <Combobox.Content>
          <Combobox.Empty>No frameworks found.</Combobox.Empty>
          <Combobox.List>
            {(item) => {
              const f = item as Framework;
              return (
                <Combobox.Item key={f.value} value={f}>
                  {f.label}
                </Combobox.Item>
              );
            }}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Clear button
// ============================================================================

export const ClearButton: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={fruits} defaultValue="Mango" size="2">
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Choose a fruit..." />} />
          <TextField.Slot>
            <Combobox.Clear aria-label="Clear" keepMounted>
              <span aria-hidden style={{ fontSize: 14 }}>×</span>
            </Combobox.Clear>
          </TextField.Slot>
        </TextField.Root>
        <Combobox.Content>
          <Combobox.Empty>No fruits found.</Combobox.Empty>
          <Combobox.List>
            {(item) => (
              <Combobox.Item key={item} value={item}>
                {item}
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Input inside popup (trigger opens, then search inside)
// ============================================================================

export const InputInsidePopup: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={fruits} size="2">
        <Combobox.Trigger placeholder="Select country" />
        <Combobox.Content>
          <div style={{ padding: 'var(--space-2)', borderBottom: '1px solid var(--gray-a5)' }}>
            <Combobox.Input
              render={
                <input
                  placeholder="Search..."
                  style={{
                    width: '100%',
                    padding: 'var(--space-2)',
                    border: '1px solid var(--gray-a6)',
                    borderRadius: 'var(--radius-2)',
                    outline: 'none',
                  }}
                />
              }
            />
          </div>
          <Combobox.Empty>No results.</Combobox.Empty>
          <Combobox.List>
            {(item) => (
              <Combobox.Item key={item} value={item}>
                {item}
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Disabled
// ============================================================================

export const Disabled: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={fruits} defaultValue="Apple" disabled size="2">
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Choose a fruit..." disabled />} />
        </TextField.Root>
        <Combobox.Content>
          <Combobox.Empty>No fruits found.</Combobox.Empty>
          <Combobox.List>
            {(item) => (
              <Combobox.Item key={item} value={item}>
                {item}
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Empty state
// ============================================================================

export const EmptyState: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={fruits} size="2">
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Type to filter (e.g. xyz)" />} />
        </TextField.Root>
        <Combobox.Content>
          <Combobox.Empty>No fruits found. Try a different search.</Combobox.Empty>
          <Combobox.List>
            {(item) => (
              <Combobox.Item key={item} value={item}>
                {item}
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Trigger only (dropdown style, like Select)
// Clear input value when opening so the list shows all items instead of
// filtering to the selected value.
// ============================================================================

export const TriggerOnly: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    return (
      <div style={{ maxWidth: 300 }}>
        <Combobox.Root
          items={fruits}
          defaultValue="Orange"
          size="2"
          open={open}
          onOpenChange={(nextOpen) => {
            setOpen(nextOpen);
            if (nextOpen) setInputValue('');
          }}
          inputValue={inputValue}
          onInputValueChange={(value) => setInputValue(value)}
        >
          <Combobox.Trigger placeholder="Choose a fruit" />
          <Combobox.Content>
            <Combobox.Empty>No fruits found.</Combobox.Empty>
            <Combobox.List>
              {(item) => (
                <Combobox.Item key={item} value={item}>
                  {item}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
      </div>
    );
  },
};
