import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '../../lib/classnames';
import { Chip, ChipColorSchemes, ChipSizes, ChipVariants } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'General/Chip',
  component: Chip,
  args: {
    variant: 'light-anchor',
    colorScheme: 'purple',
    size: 'md',
    children: 'Click me!',
    isDisabled: false,
    isLoading: false,
  },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const LeftIcon: Story = {
  render: (args) => {
    return (
      <div
        className={cn('space-y-6', {
          'bg-black w-fit p-2': args.colorScheme === 'white',
        })}
      >
        <Chip {...args} leftIcon={faStar} />
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
        <Chip {...args} rightIcon={faArrowRight} />
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
    const variants = Object.values(ChipVariants);
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
          // remove the light anchor variants that aren't purple
          .filter((variant) =>
            variant === 'light-anchor'
              ? args.colorScheme === 'purple'
              : variant,
          )
          // remove secondary variants that aren't black or white
          .filter((variant) =>
            variant === 'secondary'
              ? args.colorScheme === 'black' || args.colorScheme === 'white'
              : variant,
          )
          .map((variant, i) => (
            <Chip key={i} {...args} variant={variant} />
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
    const colorSchemes = Object.values(ChipColorSchemes);
    return (
      <div className="space-y-6">
        {colorSchemes
          // Remove white colorScheme
          .filter((scheme) => scheme !== 'white')
          // remove all but purple colorScheme for light anchor variant
          .filter((scheme) =>
            args.variant === 'light-anchor' ? scheme === 'purple' : scheme,
          )
          // Only show the black colorScheme for the secondary variant
          .filter((scheme) =>
            args.variant === 'secondary' ? scheme === 'black' : scheme,
          )
          .map((colorScheme, i) => (
            <Chip key={i} {...args} colorScheme={colorScheme} />
          ))}
        {args.variant !== 'elevated' && args.variant !== 'light-anchor' && (
          <div className="bg-whop-black w-fit p-2">
            <Chip {...args} colorScheme="white" />
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
    const sizes = Object.values(ChipSizes);
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
          .map((size, i) => (
            <Chip key={i} {...args} size={size} />
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
        <Chip {...args} isLoading />
        <Chip {...args} isDisabled />
      </div>
    );
  },
};
