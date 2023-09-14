import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { cn } from '../../lib/classnames';
import {
  IconButton,
  IconButtonColorSchemes,
  IconButtonSizes,
  IconButtonVariants,
} from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'General/IconButton',
  component: IconButton,
  args: {
    shape: 'default',
    size: 'md',
    variant: 'primary',
    colorScheme: 'brand',
    isDisabled: false,
    isLoading: false,
    icon: faEllipsisVertical,
  },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Variants: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => {
    const variants = Object.values(IconButtonVariants);
    return (
      <div
        className={cn('flex flex-col space-y-6', {
          'w-fit bg-black p-2': args.colorScheme === 'white',
        })}
      >
        {variants // Remove the elevated white IconButton
          .filter((variant) =>
            args.colorScheme === 'white' ? variant !== 'elevated' : variant,
          )
          // remove secondary variants that aren't black or white
          .filter((variant) =>
            variant === 'secondary'
              ? args.colorScheme === 'black' || args.colorScheme === 'white'
              : variant,
          )
          .map((variant, i) => (
            <IconButton key={i} {...args} variant={variant} />
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
    const colorSchemes = Object.values(IconButtonColorSchemes);
    return (
      <div className="space-y-6">
        {colorSchemes // Remove white colorScheme
          .filter((scheme) => scheme !== 'white')
          // Only show the black colorScheme for the secondary variant
          .filter((scheme) =>
            args.variant === 'secondary' ? scheme === 'black' : scheme,
          )
          .map((colorScheme, i) => (
            <IconButton key={i} {...args} colorScheme={colorScheme} />
          ))}
        {args.variant !== 'elevated' && (
          <div className="bg-whop-black w-fit p-2">
            <IconButton {...args} colorScheme="white" />
          </div>
        )}
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
    const sizes = Object.values(IconButtonSizes);
    return (
      <div
        className={cn('space-y-6', {
          'bg-whop-black w-fit p-2': args.colorScheme === 'white',
        })}
      >
        {sizes.map((size, i) => (
          <IconButton key={i} {...args} size={size} />
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
    isLoading: {
      control: false,
    },
  },
  render: (args) => {
    return (
      <div
        className={cn('space-y-6', {
          'bg-whop-black w-fit p-2': args.colorScheme === 'white',
        })}
      >
        <IconButton {...args} isLoading />
        <IconButton {...args} isDisabled />
      </div>
    );
  },
};
