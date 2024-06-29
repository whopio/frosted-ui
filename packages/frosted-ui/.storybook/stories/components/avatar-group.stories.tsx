import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button } from 'react-aria-components';
import { colorProp } from '../../../src';
import { AvatarGroup, Flex } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const availableUsers: Array<{
  name: string;
  color: (typeof colorProp.values)[number];
  src: string;
}> = [
  {
    name: 'Artur Bień',
    color: 'blue',
    src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
  },
  {
    name: 'Cameron Zoub',
    color: 'green',
    src: '',
  },
  {
    name: 'Carlos Whitt',
    color: 'pink',
    src: '',
  },
  {
    name: 'Ilya Miskov',
    color: 'yellow',
    src: '',
  },
  {
    name: 'Guillermo',
    color: 'bronze',
    src: '',
  },
  {
    name: 'Steven Schwartz',
    color: 'lime',
    src: '',
  },
  {
    name: 'FJ',
    color: 'tomato',
    src: '',
  },
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => {
    const [users, setUsers] = React.useState(availableUsers);

    return (
      <Flex gap="2">
        <AvatarGroup.Root {...args} size="3">
          {users.map((user) => (
            <AvatarGroup.Avatar
              fallback={user.name}
              color={user.color}
              key={user.name}
              src={user.src}
            />
          ))}
        </AvatarGroup.Root>
        <AvatarGroup.Root {...args} size="9">
          {users.map((user) => (
            <AvatarGroup.Avatar
              fallback={user.name}
              color={user.color}
              key={user.name}
              src={user.src}
            />
          ))}
        </AvatarGroup.Root>
        <Flex direction="column" gap="2">
          {availableUsers.map((user) => (
            <Button
              key={user.name}
              onPress={() => {
                setUsers((prev) =>
                  prev.map((a) => a.name).includes(user.name)
                    ? prev.filter((u) => u.name !== user.name)
                    : [...prev, user],
                );
              }}
            >
              Toggle {user.name}
            </Button>
          ))}
        </Flex>
      </Flex>
    );
  },
};

export const Size: Story = {
  args: {},
  render: (args) => (
    <Flex align="center" gap="4">
      <AvatarGroup.Root {...args} size="1">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root {...args} size="2">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root {...args} size="3">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root {...args} size="4">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root {...args} size="5">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root {...args} size="6">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root {...args} size="7">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root {...args} size="8">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root {...args} size="9">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
    </Flex>
  ),
};

export const Color: Story = {
  args: {},
  render: (args) => (
    <Flex gap="2">
      <AvatarGroup.Root size="5" {...args} color="indigo">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root size="5" {...args} color="cyan">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root size="5" {...args} color="orange">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
      <AvatarGroup.Root size="5" {...args} color="gold">
        {availableUsers.map((user) => (
          <AvatarGroup.Avatar
            fallback={user.name}
            color={user.color}
            key={user.name}
            src={user.src}
          />
        ))}
      </AvatarGroup.Root>
    </Flex>
  ),
};
