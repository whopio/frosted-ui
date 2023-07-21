import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InputSizes } from '../Input';
import { NumberInput, NumberInputVariants } from './NumberInput';

const meta: Meta<typeof NumberInput> = {
  title: 'Forms/NumberInput',
  component: NumberInput,
  args: {
    defaultValue: 22,
    variant: 'default',
    size: 'md',
    isDisabled: false,
    isReadOnly: false,
    messageIcon: true,
  },
};
export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: {
      children: 'Label',
      tooltip: { description: 'There is more info in the tooltip.' },
    },
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
  },
};

export const Variants: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  args: {
    onChange: (event) => console.log(`changed to ${event.target.value}`),
  },
  render: (args) => {
    const variants = Object.values(NumberInputVariants);
    return (
      <div className="space-y-6">
        {variants.map((variant) => (
          <NumberInput key={variant} {...args} variant={variant} />
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  args: {
    onChange: (event) => console.log(`changed to ${event.target.value}`),
  },
  render: (args) => {
    const sizes = Object.values(InputSizes);
    const variants = Object.values(NumberInputVariants);
    return (
      <div className="space-y-12">
        {sizes.map((size) => (
          <div className="space-y-6">
            {variants.map((variant) => (
              <NumberInput
                key={variant}
                {...args}
                variant={variant}
                size={size}
              />
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export const Messages: Story = {
  argTypes: {
    helpMessage: {
      control: false,
    },
    errorMessage: {
      control: false,
    },
  },
  render: (args) => {
    return (
      <div className="space-y-6">
        <div className="flex space-x-6">
          <NumberInput {...args} helpMessage="Just so you know..." />
          <NumberInput {...args} errorMessage="Ooops there has been an error" />
        </div>
        <div className="flex space-x-6">
          <NumberInput
            {...args}
            helpMessage="Just so you know..."
            messageIcon={false}
          />
          <NumberInput
            {...args}
            errorMessage="Ooops there has been an error"
            messageIcon={false}
          />
        </div>
      </div>
    );
  },
};
