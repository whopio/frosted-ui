import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { FilterChip, filterChipPropDefs } from '..';

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
