import { faCheck } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tag, TagColorSchemes, TagSizes } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'General/Tag',
  component: Tag,
  args: {
    text: 'Label',
    size: 'sm',
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

export const Sizes: Story = {
  argTypes: {
    size: {
      control: false,
    },
  },
  render: (args) => {
    const sizes = Object.values(TagSizes);
    return (
      <div className="space-x-3">
        {sizes.map((size, i) => (
          <Tag key={i} {...args} size={size} />
        ))}
      </div>
    );
  },
};
