import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip, TooltipVariants } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'General/Tooltip',
  component: Tooltip,
  args: {
    description: 'Welcome to the new tooltip component!',
    variant: 'default',
    placement: 'bottom-start',
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};

export const Variants: Story = {
  args: {
    title: 'Tooltip title',
    description: 'Description',
    linkProps: { children: 'Link' },
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => {
    const variants = Object.values(TooltipVariants);
    return (
      <div>
        <Tooltip {...args} variant={variants[0]} />
        <div className="w-12 h-12" />
        <Tooltip {...args} variant={variants[1]} />
      </div>
    );
  },
};

export const Placement: Story = {
  argTypes: {
    placement: {
      control: false,
    },
  },
  args: {
    placement: 'top-center',
  },
  render: (args) => (
    <div className="p-32">
      <Tooltip {...args} />
    </div>
  ),
};

export const WithLinkButton: Story = {
  args: {
    linkProps: {
      children: 'Click me to navigate',
      asComponent: 'a',
      href: 'https://www.google.com',
      target: '_blank',
    },
  },
};

export const VeryLongTooltip: Story = {
  args: {
    description:
      'This is a very long tooltip that should wrap as necessary, evenifithasaveryobscenelylongwordthatneedstobebroken.',
  },
};

export const InTable: Story = {
  render: (args) => {
    return (
      <table>
        <tbody>
          <tr>
            <td className="whitespace-nowrap">
              <Tooltip {...args}>Hello world</Tooltip>
            </td>
          </tr>
        </tbody>
      </table>
    );
  },
};
