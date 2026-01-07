import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Code, FilterChip, filterChipPropDefs, Text } from '..';

const ExampleIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 8C3 6 5.70833 3 9.5 3C13.2917 3 16 6 16 8M16 8H13M16 8V8C16.5523 8 17 7.55228 17 7V4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 12C17 14 14.2917 17 10.5 17C6.70833 17 4 14 4 12M4 12H7M4 12V12C3.44772 12 3 12.4477 3 13V16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/FilterChip',
  component: FilterChip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  args: {
    children: null,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: filterChipPropDefs.size.default,
    color: filterChipPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
      <FilterChip defaultChecked {...args}>
        <ExampleIcon size={16} />
        Default
      </FilterChip>
      <FilterChip defaultChecked={true} disabled {...args}>
        <ExampleIcon size={16} />
        Disabled checked
      </FilterChip>
      <FilterChip defaultChecked={false} disabled {...args}>
        <ExampleIcon size={16} />
        Disabled unchecked
      </FilterChip>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <FilterChip defaultChecked {...args} size="1">
        <ExampleIcon size={16} /> Size 1
      </FilterChip>
      <FilterChip defaultChecked {...args} size="2">
        <ExampleIcon size={20} /> Size 2
      </FilterChip>
      <FilterChip defaultChecked {...args} size="3">
        <ExampleIcon size={24} /> Size 3
      </FilterChip>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <FilterChip {...args} color="indigo" defaultChecked>
        <ExampleIcon size={20} />
        Indigo
      </FilterChip>
      <FilterChip {...args} color="cyan" defaultChecked>
        <ExampleIcon size={20} />
        Cyan
      </FilterChip>
      <FilterChip {...args} color="orange" defaultChecked>
        <ExampleIcon size={20} />
        Orange
      </FilterChip>
      <FilterChip {...args} color="crimson" defaultChecked>
        <ExampleIcon size={20} />
        Crimson
      </FilterChip>
    </div>
  ),
};

export const ReadOnly: Story = {
  name: 'Read Only',
  render: (args) => {
    const activeFilters = {
      inStock: true,
      onSale: false,
      freeShipping: true,
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
        <Text>
          The <Code>readOnly</Code> prop prevents users from toggling a filter chip while still showing its current
          state. Unlike <Code>disabled</Code>, read-only chips remain focusable and their values are submitted with
          forms.
        </Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <Text size="2" weight="medium">
            Applied Filters (from saved search)
          </Text>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <FilterChip {...args} checked={activeFilters.inStock} readOnly>
              In Stock
            </FilterChip>
            <FilterChip {...args} checked={activeFilters.onSale} readOnly>
              On Sale
            </FilterChip>
            <FilterChip {...args} checked={activeFilters.freeShipping} readOnly>
              Free Shipping
            </FilterChip>
          </div>
        </div>
      </div>
    );
  },
};

export const InputRef: Story = {
  name: 'Input Ref',
  render: (args) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [info, setInfo] = React.useState<string>('Click a button to inspect the input');

    const focusInput = () => {
      inputRef.current?.focus();
      setInfo('Input focused programmatically');
    };

    const checkState = () => {
      const input = inputRef.current;
      if (input) {
        const isChecked = input.checked;
        const name = input.name;
        setInfo(`Name: "${name}", Checked: ${isChecked}`);
      }
    };

    const toggleChecked = () => {
      const input = inputRef.current;
      if (input) {
        input.click();
        setInfo(`Toggled via native click. New state: ${!input.checked}`);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
        <Text>
          The <Code>inputRef</Code> prop provides direct access to the hidden native <Code>&lt;input&gt;</Code> element.
          This is useful for programmatic focus, form validation, or integrating with third-party libraries.
        </Text>
        <FilterChip {...args} inputRef={inputRef} name="featured" defaultChecked>
          <ExampleIcon size={16} />
          Featured Items
        </FilterChip>
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <Button size="1" variant="soft" onClick={focusInput}>
            Focus Input
          </Button>
          <Button size="1" variant="soft" onClick={checkState}>
            Check State
          </Button>
          <Button size="1" variant="soft" onClick={toggleChecked}>
            Toggle via Ref
          </Button>
        </div>
        <Code style={{ padding: 'var(--space-2)', display: 'block' }}>{info}</Code>
      </div>
    );
  },
};

export const FormValues: Story = {
  name: 'Form with value & uncheckedValue',
  render: (args) => {
    const [formData, setFormData] = React.useState<Record<string, FormDataEntryValue>>({});
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.currentTarget).entries());
      setFormData(data);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
        <Text>
          Use <Code>value</Code> and <Code>uncheckedValue</Code> props to customize what gets submitted with the form.
          By default, checked chips submit <Code>"on"</Code> and unchecked chips submit nothing.
        </Text>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Text size="2" weight="medium">
            Product Filters
          </Text>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <FilterChip {...args} name="availability" defaultChecked value="in-stock" uncheckedValue="all">
              In Stock
            </FilterChip>
            <FilterChip {...args} name="shipping" value="free" uncheckedValue="any">
              Free Shipping
            </FilterChip>
            <FilterChip {...args} name="discount" defaultChecked value="on-sale" uncheckedValue="no-filter">
              On Sale
            </FilterChip>
          </div>
          <Button variant="solid" type="submit" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-2)' }}>
            Apply Filters
          </Button>
        </form>
        <div>
          <Text size="2" weight="medium">
            Form Data:
          </Text>
          <Code style={{ display: 'block', marginTop: 'var(--space-2)', whiteSpace: 'pre', padding: 'var(--space-2)' }}>
            {JSON.stringify(formData, null, 2)}
          </Code>
        </div>
      </div>
    );
  },
};
