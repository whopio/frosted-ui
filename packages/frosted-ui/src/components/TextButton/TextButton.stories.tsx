import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { cn } from '../../lib/classnames';
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
      <div className="space-x-6 flex items-center">
        {variants.map((variant) => (
          <div
            className={cn({
              'p-2 bg-whop-fixed-black w-fit inline':
                args.colorScheme === 'white',
            })}
          >
            <TextButton key={variant} {...args} variant={variant} />
          </div>
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
      <div className="space-x-6 flex items-center">
        {colorSchemes.map((colorScheme) => (
          <div
            className={cn({
              'p-2 bg-whop-fixed-black w-fit': colorScheme === 'white',
            })}
          >
            <TextButton key={colorScheme} {...args} colorScheme={colorScheme} />
          </div>
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
