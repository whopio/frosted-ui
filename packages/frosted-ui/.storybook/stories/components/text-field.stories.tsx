import type { Meta, StoryObj } from '@storybook/react';

import {
  MagnifyingGlass12,
  MagnifyingGlass16,
  MagnifyingGlass20,
  ThreeDotsHorizontal16,
  ThreeDotsHorizontal20,
} from '@frosted-ui/icons';
import React from 'react';
import { Button, Flex, IconButton, TextField } from '../../../src/components';
import { textFieldPropDefs } from '../../../src/components/text-field.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/TextField',
  component: TextField.Root,
  args: {
    size: textFieldPropDefs.size.default,
    variant: textFieldPropDefs.variant.default,
    color: textFieldPropDefs.color.default,
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
          {/* @ts-expect-error -- TODO: fix frosted-icons types issue */}
          <MagnifyingGlass16 />
        </TextField.Slot>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
      <Flex align="center" gap="2">
        <TextField.Root {...args}>
          <TextField.Slot>
            {/* @ts-expect-error -- TODO: fix frosted-icons types issue */}
            <MagnifyingGlass12 />
          </TextField.Slot>
          <TextField.Input placeholder="Search the docs…" size="1" />
        </TextField.Root>
        <Button size="1" variant={args.variant}>
          Search
        </Button>
      </Flex>

      <Flex align="center" gap="2">
        <TextField.Root {...args}>
          <TextField.Slot>
            {/* @ts-expect-error -- TODO: fix frosted-icons types issue */}
            <MagnifyingGlass16 />
          </TextField.Slot>
          <TextField.Input placeholder="Search the docs…" size="2" />
          <TextField.Slot>
            <IconButton color="gray" size="1" variant="ghost">
              {/* @ts-expect-error -- TODO: fix frosted-icons types issue */}
              <ThreeDotsHorizontal16 />
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
        <Button size="2" variant={args.variant}>
          Search
        </Button>
      </Flex>

      <Flex align="center" gap="2">
        <TextField.Root {...args}>
          <TextField.Slot>
            {/* @ts-expect-error -- TODO: fix frosted-icons types issue */}
            <MagnifyingGlass20 />
          </TextField.Slot>
          <TextField.Input placeholder="Search the docs…" size="3" />
          <TextField.Slot pr="3">
            <IconButton color="gray" size="2" variant="ghost">
              {/* @ts-expect-error -- TODO: fix frosted-icons types issue */}
              <ThreeDotsHorizontal20 />
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
        <Button size="3" variant={args.variant}>
          Search
        </Button>
      </Flex>
    </Flex>
  ),
};

export const Variant: Story = {
  render: ({ ref, ...args }) => (
    <Flex direction="row" gap="5">
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
      <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
        <TextField.Input
          disabled
          placeholder="Search the docs…"
          {...args}
          variant="surface"
        />
        <TextField.Input
          disabled
          placeholder="Search the docs…"
          {...args}
          variant="classic"
        />
        <TextField.Input
          disabled
          placeholder="Search the docs…"
          {...args}
          variant="soft"
        />
      </Flex>
    </Flex>
  ),
};

export const Color: Story = {
  render: ({ ref, ...args }) => (
    <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
      <TextField.Input
        {...args}
        placeholder="Search the docs…"
        color="indigo"
      />
      <TextField.Input {...args} placeholder="Search the docs…" color="green" />
      <TextField.Input {...args} placeholder="Search the docs…" color="red" />
    </Flex>
  ),
};
