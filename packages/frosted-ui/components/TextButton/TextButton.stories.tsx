import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  TextButton,
  TextButtonColorSchemes,
  TextButtonSizes,
  TextButtonVariants,
} from './TextButton';

const meta: Meta<typeof TextButton> = {
  title: 'General/TextButton',
  component: TextButton,
  args: {
    variant: 'arrow',
    colorScheme: 'dark-gray',
    size: 'md',
    children: 'Click me',
    onClick: () => alert('Clicked!'),
  },
};
export default meta;
type Story = StoryObj<typeof TextButton>;

export const Default: Story = {};

export const CustomIcon: Story = {
  args: {
    icon: faHandPointRight,
  },
};

export const Variants: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => {
    const variants = Object.values(TextButtonVariants);
    return (
      <div className="space-x-6">
        {variants.map((variant) => (
          <TextButton key={variant} {...args} variant={variant} />
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
    const colorSchemes = Object.values(TextButtonColorSchemes);
    return (
      <div className="space-x-6">
        {colorSchemes.map((colorScheme) => (
          <TextButton key={colorScheme} {...args} colorScheme={colorScheme} />
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
    const sizes = Object.values(TextButtonSizes);
    return (
      <div className="space-x-6">
        {sizes.map((size) => (
          <TextButton key={size} {...args} size={size} />
        ))}
      </div>
    );
  },
};
