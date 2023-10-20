import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Flex, IconButton, TextField } from '../../../src/components';
import { textFieldPropDefs } from '../../../src/components/text-field.props';

const MagnifyingGlassIcon = ({ size = 16 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const DotsHorizontalIcon = ({ size = 16 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/TextField',
  component: TextField.Root,
  args: {
    size: textFieldPropDefs.size.default,
    variant: textFieldPropDefs.variant.default,
    color: textFieldPropDefs.color.default,
    radius: textFieldPropDefs.radius.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TextField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <TextField.Root {...args}>
        <TextField.Slot>
          <MagnifyingGlassIcon size={16} />
        </TextField.Slot>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
      <TextField.Root {...args}>
        <TextField.Slot>
          <MagnifyingGlassIcon size={16} />
        </TextField.Slot>
        <TextField.Input placeholder="Search the docs…" size="1" />
      </TextField.Root>

      <TextField.Root {...args}>
        <TextField.Slot>
          <MagnifyingGlassIcon size={16} />
        </TextField.Slot>
        <TextField.Input placeholder="Search the docs…" size="2" />
        <TextField.Slot>
          <IconButton size="1" variant="ghost">
            <DotsHorizontalIcon size={14} />
          </IconButton>
        </TextField.Slot>
      </TextField.Root>

      <TextField.Root {...args}>
        <TextField.Slot>
          <MagnifyingGlassIcon size={16} />
        </TextField.Slot>
        <TextField.Input placeholder="Search the docs…" size="3" />
        <TextField.Slot pr="3">
          <IconButton size="2" variant="ghost">
            <DotsHorizontalIcon size={16} />
          </IconButton>
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  ),
};

export const Variant: Story = {
  render: ({ ref, ...args }) => (
    <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
      <TextField.Input
        placeholder="Search the docs…"
        {...args}
        variant="surface"
      />
      <TextField.Input
        placeholder="Search the docs…"
        {...args}
        variant="classic"
      />
      <TextField.Input
        placeholder="Search the docs…"
        {...args}
        variant="soft"
      />
    </Flex>
  ),
};

export const Color: Story = {
  render: ({ ref, ...args }) => (
    <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
      <TextField.Input
        {...args}
        variant="soft"
        placeholder="Search the docs…"
        color="indigo"
      />
      <TextField.Input
        {...args}
        variant="soft"
        placeholder="Search the docs…"
        color="green"
      />
      <TextField.Input
        {...args}
        variant="soft"
        placeholder="Search the docs…"
        color="red"
      />
    </Flex>
  ),
};
export const Radius: Story = {
  render: ({ ref, ...args }) => (
    <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
      <TextField.Input placeholder="Search the docs…" {...args} radius="none" />
      <TextField.Input
        placeholder="Search the docs…"
        {...args}
        radius="large"
      />
      <TextField.Input placeholder="Search the docs…" {...args} radius="full" />
    </Flex>
  ),
};
