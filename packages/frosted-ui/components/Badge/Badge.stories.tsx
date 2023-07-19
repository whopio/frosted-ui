import type { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeColorSchemes, BadgeSizes, BadgeVariants } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'General/Badge',
  component: Badge,
  args: {
    text: 'Free pizza',
    size: 'md',
    colorScheme: 'brand',
    variant: 'default',
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Variants: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => {
    const variants = Object.values(BadgeVariants);
    return (
      <div className="space-x-3">
        {variants.map((variant, i) => (
          <Badge key={i} {...args} variant={variant} />
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
    const colorSchemes = Object.values(BadgeColorSchemes);
    return (
      <div className="space-x-3">
        {colorSchemes.map((colorScheme, i) => (
          <Badge key={i} {...args} colorScheme={colorScheme} />
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
    const sizes = Object.values(BadgeSizes);
    return (
      <div className="space-x-3">
        {sizes.map((size, i) => (
          <Badge key={i} {...args} size={size} />
        ))}
      </div>
    );
  },
};
