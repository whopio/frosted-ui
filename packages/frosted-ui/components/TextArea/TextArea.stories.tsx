import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Forms/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Some placeholder text',
    isDisabled: false,
    isRequired: false,
    messageIcon: true,
    resizable: true,
  },
};
export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const TenRows: Story = {
  args: {
    rows: 10,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: {
      children: 'Label',
      tooltip: {
        description: 'This is a tooltip',
        variant: 'compact',
      },
    },
  },
};

export const MaxLength: Story = {
  args: {
    maxLength: 200,
  },
};

export const Messages: Story = {
  render: (args) => {
    return (
      <div className="space-y-6">
        <div className="flex space-x-6">
          <TextArea {...args} helpMessage="Just so you know..." />
          <TextArea {...args} errorMessage="Ooops there has been an error" />
        </div>
        <div className="flex space-x-6">
          <TextArea
            {...args}
            helpMessage="Just so you know..."
            messageIcon={false}
          />
          <TextArea
            {...args}
            errorMessage="Ooops there has been an error"
            messageIcon={false}
          />
        </div>
      </div>
    );
  },
};
