import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioColorSchemes, RadioGroup, RadioSizes } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  args: {
    colorScheme: 'brand',
    defaultValue: 'hello',
    size: 'md',
    isDisabled: false,
    isRequired: false,
    items: [
      { label: 'Hello item 1', value: 'hello' },
      { label: 'World item 2', value: 'world' },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {};

export const HorizontalGroup: Story = {
  args: {
    className: 'flex space-x-6',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Sizes: Story = {
  argTypes: {
    size: {
      control: false,
    },
  },
  render: (args) => {
    const sizes = Object.values(RadioSizes);
    return (
      <div className="space-y-6">
        {sizes.map((size) => (
          <RadioGroup key={size} {...args} size={size} />
        ))}
      </div>
    );
  },
};

export const ColorSchemes: Story = {
  argTypes: {
    colorScheme: {
      control: false,
    },
  },
  render: (args) => {
    const colorSchemes = Object.values(RadioColorSchemes);
    return (
      <div className="space-y-6">
        {colorSchemes.map((colorScheme) => (
          <RadioGroup key={colorScheme} {...args} colorScheme={colorScheme} />
        ))}
      </div>
    );
  },
};
