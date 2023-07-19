import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../Tag';
import { Tooltip } from '../Tooltip';
import {
  RadioCardColorSchemes,
  RadioCardGroup,
  RadioCardSizes,
  RadioCardVariants,
} from './RadioCardGroup';

const meta: Meta<typeof RadioCardGroup> = {
  title: 'Forms/RadioCardGroup',
  component: RadioCardGroup,
  args: {
    colorScheme: 'brand',
    defaultValue: 'hello',
    size: 'md',
    variant: 'radio',
    isDisabled: false,
    isRequired: false,
    items: [
      {
        label: 'Hello item 1',
        description: 'This is the description.',
        value: 'hello',
      },
      {
        label: 'World item 2',
        description: 'This is the description.',
        value: 'world',
      },
      {
        label: 'NYC item 2',
        description: 'This is the description.',
        value: 'nyc',
      },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof RadioCardGroup>;

export const Default: Story = {};

export const HorizontalGroup: Story = {
  args: {
    className: 'flex space-x-6',
  },
};

export const Disabled: Story = {
  argTypes: {
    isDisabled: {
      control: false,
    },
  },
  args: {
    isDisabled: true,
  },
};

export const Variants: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => {
    const variants = Object.values(RadioCardVariants);
    return (
      <div className="space-y-6">
        {variants.map((variant) => (
          <RadioCardGroup key={variant} {...args} variant={variant} />
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
    const sizes = Object.values(RadioCardSizes);
    return (
      <div className="space-y-6">
        {sizes.map((size) => (
          <RadioCardGroup key={size} {...args} size={size} />
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
    const colorSchemes = Object.values(RadioCardColorSchemes);
    return (
      <div className="space-y-6">
        {colorSchemes.map((colorScheme) => (
          <RadioCardGroup
            key={colorScheme}
            {...args}
            colorScheme={colorScheme}
          />
        ))}
      </div>
    );
  },
};

export const NoDescription: Story = {
  args: {
    items: [
      {
        label: 'Hello item 1',
        value: 'hello',
      },
      {
        label: 'World item 2',
        value: 'world',
      },
      {
        label: 'NYC item 3',
        value: 'nyc',
      },
    ],
  },
};

export const Freestyle: Story = {
  args: {
    size: 'sm',
    items: [
      {
        label: (
          <div className="space-y-1">
            <div className="flex gap-1.5">
              <p className="text-subtitle1 text-whop-black">$25.00</p>
              <p className="text-text1 text-whop-dark-gray">/ 3 months</p>
            </div>
            <Tag text="7d free trial" colorScheme="success-green" />
            <div className="flex items-baseline gap-1">
              <p className="text-text5">+ $100.00 initial fee</p>
              <Tooltip
                description="This is a description"
                buttonClassName="h-3 w-3 text-whop-dark-gray"
              />
            </div>
          </div>
        ),
        value: 'hello',
      },
      {
        label: (
          <div className="space-y-1">
            <div className="flex gap-1.5">
              <p className="text-subtitle1 text-whop-black">$25.00</p>
              <p className="text-text1 text-whop-dark-gray">/ 3 months</p>
            </div>
            <Tag text="7d free trial" colorScheme="success-green" />
            <div className="flex items-baseline gap-1">
              <p className="text-text5">+ $100.00 initial fee</p>
              <Tooltip
                description="This is a description"
                buttonClassName="h-3 w-3 text-whop-dark-gray"
              />
            </div>
          </div>
        ),
        value: 'world',
      },
      {
        label: (
          <div className="space-y-1">
            <div className="flex gap-1.5">
              <p className="text-subtitle1 text-whop-black">$25.00</p>
              <p className="text-text1 text-whop-dark-gray">/ 3 months</p>
            </div>
            <Tag text="7d free trial" colorScheme="success-green" />
            <div className="flex items-baseline gap-1">
              <p className="text-text5">+ $100.00 initial fee</p>
              <Tooltip
                description="This is a description"
                buttonClassName="h-3 w-3 text-whop-dark-gray"
              />
            </div>
          </div>
        ),
        value: 'nyc',
      },
    ],
  },
};
