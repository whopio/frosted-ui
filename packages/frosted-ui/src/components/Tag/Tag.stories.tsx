import { faCheck } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tag, TagColorSchemes } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'General/Tag',
  component: Tag,
  args: {
    text: 'Label',
    colorScheme: 'purple',
  },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: faCheck,
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: faCheck,
  },
};

export const ColorSchemes: Story = {
  argTypes: {
    colorScheme: {
      control: false,
    },
  },
  render: (args) => {
    const colorSchemes = Object.values(TagColorSchemes);
    return (
      <div className="space-x-3">
        {colorSchemes.map((colorScheme, i) => (
          <Tag key={i} {...args} colorScheme={colorScheme} />
        ))}
      </div>
    );
  },
};
