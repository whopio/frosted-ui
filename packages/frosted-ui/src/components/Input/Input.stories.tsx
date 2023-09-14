import { faStar } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input, InputSizes } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  args: {
    size: 'md',
    placeholder: 'hello@whop.com',
    isDisabled: false,
    messageIcon: true,
    isReadOnly: false,
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: {
      children: 'Label',
      tooltip: { description: 'There is more info in the tooltip.' },
    },
  },
};

export const LeftIcon: Story = {
  args: {
    leftIcon: faStar,
  },
};

export const LeftText: Story = {
  args: {
    leftText: 'https://whop.com/',
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

export const Sizes: Story = {
  argTypes: {
    size: {
      control: false,
    },
  },
  render: (args) => {
    const sizes = Object.values(InputSizes);
    return (
      <div className="space-y-6">
        {sizes.map((size, i) => (
          <Input key={i} {...args} size={size} />
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
          <Input {...args} helpMessage="Just so you know..." />
          <Input {...args} errorMessage="Ooops there has been an error" />
        </div>
        <div className="flex space-x-6">
          <Input
            {...args}
            helpMessage="Just so you know..."
            messageIcon={false}
          />
          <Input
            {...args}
            errorMessage="Ooops there has been an error"
            messageIcon={false}
          />
        </div>
      </div>
    );
  },
};
