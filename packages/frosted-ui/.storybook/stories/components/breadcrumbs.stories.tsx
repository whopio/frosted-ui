import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Breadcrumbs, breadcrumbsPropDefs } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Lab/Breadcrumbs',
  component: Breadcrumbs.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLinks: Story = {
  name: 'With links',
  args: {
    size: breadcrumbsPropDefs.size.default,
    color: breadcrumbsPropDefs.color.default,
    highContrast: breadcrumbsPropDefs.highContrast.default,
  },
  render: (args) => (
    <Breadcrumbs.Root {...args}>
      <Breadcrumbs.Item asChild>
        <a href="#">Home</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item asChild>
        <a href="#">User Profiles</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Products</Breadcrumbs.Item>
    </Breadcrumbs.Root>
  ),
};

export const WithOnClick: Story = {
  name: 'With onClick',
  args: {
    size: breadcrumbsPropDefs.size.default,
    color: breadcrumbsPropDefs.color.default,
    highContrast: breadcrumbsPropDefs.highContrast.default,
  },
  render: (args) => (
    <Breadcrumbs.Root {...args}>
      <Breadcrumbs.Item onClick={() => alert('Home')}>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item onClick={() => alert('Products')}>
        Products
      </Breadcrumbs.Item>
      <Breadcrumbs.Item onClick={() => alert('Sneaker Bot')}>
        Sneaker Bot
      </Breadcrumbs.Item>
    </Breadcrumbs.Root>
  ),
};

export const Truncated: Story = {
  name: 'Truncated',
  args: {
    size: breadcrumbsPropDefs.size.default,
    color: breadcrumbsPropDefs.color.default,
    highContrast: breadcrumbsPropDefs.highContrast.default,
  },
  render: (args) => (
    <Breadcrumbs.Root {...args}>
      <Breadcrumbs.Item asChild>
        <a href="#">Home</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Dropdown>
        <Breadcrumbs.DropdownItem asChild>
          <a href="#">Products</a>
        </Breadcrumbs.DropdownItem>
        <Breadcrumbs.DropdownItem asChild>
          <a href="#">Categories</a>
        </Breadcrumbs.DropdownItem>
        <Breadcrumbs.DropdownItem asChild>
          <a href="#">Software</a>
        </Breadcrumbs.DropdownItem>
      </Breadcrumbs.Dropdown>
      <Breadcrumbs.Item asChild>
        <a href="#">Bots</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Sneaker Bot</Breadcrumbs.Item>
    </Breadcrumbs.Root>
  ),
};
