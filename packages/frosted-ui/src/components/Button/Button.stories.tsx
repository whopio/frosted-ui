import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { cn } from '../../lib/classnames';
import {
  Button,
  ButtonColorSchemes,
  ButtonSizes,
  ButtonVariants,
} from './Button';

const meta: Meta<typeof Button> = {
  title: 'Forms/Button',
  component: Button,
  args: {
    children: 'Click me!',
    size: 'md',
    variant: 'primary',
    colorScheme: 'brand',
    isDisabled: false,
    isLoading: false,
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Polymorphic: Story = {
  args: {
    asComponent: 'a',
    href: 'https://www.google.com',
    target: '_blank',
  },
};

export const LeftIcon: Story = {
  render: (args) => {
    return (
      <div
        className={cn('space-y-6', {
          'bg-black w-fit p-2': args.colorScheme === 'white',
        })}
      >
        <Button {...args} leftIcon={faStar} />
      </div>
    );
  },
};

export const RightIcon: Story = {
  render: (args) => {
    return (
      <div
        className={cn('space-y-6', {
          'bg-black w-fit p-2': args.colorScheme === 'white',
        })}
      >
        <Button {...args} rightIcon={faArrowRight} />
      </div>
    );
  },
};

export const Variants: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => {
    const variants = Object.values(ButtonVariants);
    return (
      <div
        className={cn('space-y-6', {
          'w-fit bg-black p-2': args.colorScheme === 'white',
        })}
      >
        {variants
          // Remove the elevated white button
          .filter((variant) =>
            args.colorScheme === 'white' ? variant !== 'elevated' : variant,
          )
          // remove secondary variants that aren't black or white
          .filter((variant) =>
            variant === 'secondary'
              ? args.colorScheme === 'black' || args.colorScheme === 'white'
              : variant,
          )
          // Remove all but the primary variant if the colorScheme is gold-gradient
          .filter((variant) =>
            args.colorScheme === 'gold-gradient'
              ? variant === 'primary'
              : variant,
          )
          .map((variant, i) => (
            <Button key={i} {...args} variant={variant} />
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
    const colorSchemes = Object.values(ButtonColorSchemes);
    return (
      <div className="space-y-6">
        {colorSchemes
          // Remove white colorScheme
          .filter((scheme) => scheme !== 'white')
          // Only show the black colorScheme for the secondary variant
          .filter((scheme) =>
            args.variant === 'secondary' ? scheme === 'black' : scheme,
          )
          // Remove all but the primary variant if the colorScheme is gold-gradient
          .filter((scheme) =>
            scheme === 'gold-gradient'
              ? args.variant === 'primary'
              : args.variant,
          )
          .map((colorScheme, i) => (
            <Button key={i} {...args} colorScheme={colorScheme} />
          ))}
        {args.variant !== 'elevated' && (
          <div className="bg-black w-fit p-2">
            <Button {...args} colorScheme="white" />
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
    const sizes = Object.values(ButtonSizes);
    return (
      <div
        className={cn('space-y-6', {
          'bg-black w-fit p-2': args.colorScheme === 'white',
        })}
      >
        {sizes
          // Remove white colorScheme
          .filter(() =>
            args.colorScheme === 'white'
              ? args.variant !== 'elevated'
              : args.variant,
          )
          // Only show the black colorScheme for the secondary variant
          .filter(() =>
            args.variant === 'secondary'
              ? args.colorScheme === 'black' || args.colorScheme === 'white'
              : args.colorScheme,
          )
          // Remove all but the primary variant if the colorScheme is gold-gradient
          .filter(() =>
            args.colorScheme === 'gold-gradient'
              ? args.variant === 'primary'
              : args.variant,
          )
          .map((size, i) => (
            <Button key={i} {...args} size={size} />
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
          'bg-black w-fit p-2': args.colorScheme === 'white',
        })}
      >
        <Button {...args} isLoading />
        <Button {...args} isDisabled />
      </div>
    );
  },
};
