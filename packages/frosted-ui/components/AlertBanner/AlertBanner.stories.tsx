import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  AlertBanner,
  AlertBannerColorSchemes,
  AlertBannerVariants,
} from './AlertBanner';

const meta: Meta<typeof AlertBanner> = {
  title: 'General/AlertBanner',
  component: AlertBanner,
  args: {
    title: 'Title goes here',
    description: 'This is a description',
    variant: 'default',
    colorScheme: 'gray',
    showCta: true,
    icon: faLightbulb,
  },
};
export default meta;
type Story = StoryObj<typeof AlertBanner>;

export const Default: Story = {};

export const Variants: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => {
    const variants = Object.values(AlertBannerVariants);
    return (
      <div className="space-y-6">
        {variants
          .filter((variant) =>
            variant === 'default' ? args.colorScheme !== 'light-gray' : variant,
          )
          .map((variant, i) => (
            <AlertBanner key={i} {...args} variant={variant} />
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
    const colorSchemes = Object.values(AlertBannerColorSchemes);
    return (
      <div className="space-y-6">
        {colorSchemes
          .filter((scheme) =>
            args.variant === 'default' ? scheme !== 'light-gray' : scheme,
          )
          .map((colorScheme, i) => (
            <AlertBanner key={i} {...args} colorScheme={colorScheme} />
          ))}
      </div>
    );
  },
};

export const TextCta: Story = {
  args: {
    ctaText: 'Click me',
  },
};

export const SmallBreakpoint: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
  args: {
    ctaText: 'Click me',
  },
};

export const NoCta: Story = {
  args: {
    showCta: false,
  },
};
