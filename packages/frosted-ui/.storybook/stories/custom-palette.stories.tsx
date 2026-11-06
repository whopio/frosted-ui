import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CustomPalettePage } from '../custom-palette/custom-palette';

const meta = {
  title: 'Guides/Custom palette',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (_args, context) => (
    <CustomPalettePage initialAppearance={context.globals.theme === 'dark' ? 'dark' : 'light'} />
  ),
};
