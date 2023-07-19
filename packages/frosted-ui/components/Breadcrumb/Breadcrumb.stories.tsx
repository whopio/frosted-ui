import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbItem } from '../BreadcrumbItem';
import { BreadcrumbSeparator } from '../BreadcrumbSeparator';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'General/Breadcrumb',
  component: Breadcrumb,
  args: {},
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: (args) => {
    return (
      <Breadcrumb {...args}>
        <a href="/">
          <BreadcrumbItem>Home</BreadcrumbItem>
        </a>
        <BreadcrumbSeparator />
        <a href="/settings">
          <BreadcrumbItem>Settings</BreadcrumbItem>
        </a>
        <BreadcrumbSeparator />
        <BreadcrumbItem isLastItem>Personal</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};

// TODO: Add the avatar example when the component is ready

export const Truncated: Story = {
  render: (args) => {
    return (
      <Breadcrumb {...args}>
        <a href="/">
          <BreadcrumbItem>Home</BreadcrumbItem>
        </a>
        <BreadcrumbSeparator />
        <a href="/page-one">
          <BreadcrumbItem>Page 1</BreadcrumbItem>
        </a>
        <BreadcrumbSeparator />
        <a href="/page-two">
          <BreadcrumbItem>Page 2</BreadcrumbItem>
        </a>
        <BreadcrumbSeparator />
        <a href="/page-three">
          <BreadcrumbItem>Page 3</BreadcrumbItem>
        </a>
        <BreadcrumbSeparator />
        <a href="/page-four">
          <BreadcrumbItem>Page 4</BreadcrumbItem>
        </a>
        <BreadcrumbSeparator />
        <a href="/page-five">
          <BreadcrumbItem>Page 5</BreadcrumbItem>
        </a>
        <BreadcrumbSeparator />
        <BreadcrumbItem isLastItem>Last page</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};
