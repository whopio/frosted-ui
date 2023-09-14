import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Banner, BannerColorSchemes } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'General/Banner',
  component: Banner,
  args: {
    showIcon: true,
    title: 'Some callout here',
    ctaText: 'Learn more',
    colorScheme: 'purple',
    allowDismiss: false,
  },
};
export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {};

export const Dismissable: Story = {
  args: {
    allowDismiss: true,
  },
};

export const ColorSchemes: Story = {
  argTypes: {
    colorScheme: {
      control: false,
    },
  },
  render: (args) => {
    const colorSchemes = Object.values(BannerColorSchemes);
    return (
      <div className="flex flex-col gap-6">
        {colorSchemes.map((colorScheme, i) => (
          <Banner key={i} {...args} colorScheme={colorScheme} />
        ))}
      </div>
    );
  },
};
