import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Breadcrumbs, breadcrumbsPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Breadcrumbs',
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
    color: breadcrumbsPropDefs.color.default,
  },
  render: (args) => (
    <Breadcrumbs.Root {...args}>
      <Breadcrumbs.Item render={<a href="#" />} nativeButton={false}>
        Home
      </Breadcrumbs.Item>
      <Breadcrumbs.Item render={<a href="#user-profiles" />} nativeButton={false}>
        User Profiles
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Products</Breadcrumbs.Item>
    </Breadcrumbs.Root>
  ),
};

export const WithOnClick: Story = {
  name: 'With onClick',
  args: {
    color: breadcrumbsPropDefs.color.default,
  },
  render: (args) => (
    <Breadcrumbs.Root {...args}>
      <Breadcrumbs.Item onClick={() => alert('Home')}>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item onClick={() => alert('Products')}>Products</Breadcrumbs.Item>
      <Breadcrumbs.Item onClick={() => alert('Sneaker Bot')}>Sneaker Bot</Breadcrumbs.Item>
    </Breadcrumbs.Root>
  ),
};

export const Truncated: Story = {
  name: 'Truncated',
  args: {
    color: breadcrumbsPropDefs.color.default,
  },
  render: (args) => (
    <Breadcrumbs.Root {...args}>
      <Breadcrumbs.Item render={<a href="#">Home</a>} />
      <Breadcrumbs.Dropdown>
        <Breadcrumbs.DropdownItem render={<a href="#">Products</a>} />
        <Breadcrumbs.DropdownItem render={<a href="#">Categories</a>} />
        <Breadcrumbs.DropdownItem render={<a href="#">Software</a>} />
      </Breadcrumbs.Dropdown>
      <Breadcrumbs.Item render={<a href="#">Bots</a>} />
      <Breadcrumbs.Item>Sneaker Bot</Breadcrumbs.Item>
    </Breadcrumbs.Root>
  ),
};
