import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox, CheckboxColorSchemes } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  args: {
    colorScheme: 'brand',
    label: 'I agree to the terms and conditions',
    removeMotion: false,
    isDisabled: false,
    isRequired: false,
  },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const ColorSchemes: Story = {
  argTypes: {
    colorScheme: {
      control: false,
    },
  },
  args: {
    defaultChecked: true,
  },
  render: (args) => {
    const colorSchemes = Object.values(CheckboxColorSchemes);
    return (
      <div className="space-y-6">
        {colorSchemes.map((colorScheme, i) => (
          <Checkbox key={i} {...args} colorScheme={colorScheme} />
        ))}
      </div>
    );
  },
};

export const States: Story = {
  argTypes: {
    isDisabled: {
      control: false,
    },
    checked: {
      control: false,
    },
  },
  render: (args) => {
    return (
      <div className="space-y-6">
        <Checkbox {...args} isDisabled />
        <Checkbox {...args} checked isDisabled />
        <Checkbox {...args} checked />
        <Checkbox {...args} checked="indeterminate" />
      </div>
    );
  },
};
