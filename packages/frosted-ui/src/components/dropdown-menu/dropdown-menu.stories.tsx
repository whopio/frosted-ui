import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Code, DropdownMenu, dropdownMenuContentPropDefs, Text } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/DropdownMenu',
  component: DropdownMenu.Content,
  args: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: dropdownMenuContentPropDefs.size.default,
    variant: dropdownMenuContentPropDefs.variant.default,
  },
  render: (args) => {
    type Order = 'ascending' | 'descending';
    const [order, setOrder] = React.useState<Order>('ascending');
    const [showHiddenFiles, setShowHiddenFiles] = React.useState(true);

    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft">Options</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content {...args}>
          <DropdownMenu.Group>
            <DropdownMenu.Label>Swag</DropdownMenu.Label>
            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ D" disabled>
              Duplicate
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
              <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.RadioGroup value={order} onValueChange={(value) => setOrder(value as Order)}>
            <DropdownMenu.RadioItem value="ascending">Ascending</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="descending">Descending</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Separator />

          <DropdownMenu.CheckboxItem checked={showHiddenFiles} onCheckedChange={setShowHiddenFiles} shortcut="S+ H">
            Show hidden files
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator />

          <DropdownMenu.Item shortcut="⌘ ⌫" color="danger">
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  },
};

export const Size: Story = {
  args: {
    variant: dropdownMenuContentPropDefs.variant.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft" size="3">
            Large
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content {...args} size="3">
          <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ ⌫" color="danger">
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft" size="2">
            Default
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content {...args} size="2">
          <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ ⌫" color="danger">
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft" size="1">
            Small
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content {...args} size="1">
          <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ ⌫" color="danger">
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft" color="gray">
            Options
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content {...args}>
          <DropdownMenu.Item shortcut="⌘ E" color="info">
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D" color="success">
            Duplicate
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N" color="danger">
            Archive
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
};

export const OpenOnHover: Story = {
  name: 'Open on Hover',
  render: (args) => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger openOnHover delay={100}>
        <Button variant="soft">Add to playlist</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content {...args}>
        <DropdownMenu.Item>Favorites</DropdownMenu.Item>
        <DropdownMenu.Item>Recently Played</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Workout</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Warm Up</DropdownMenu.Item>
            <DropdownMenu.Item>Cardio</DropdownMenu.Item>
            <DropdownMenu.Item>Cool Down</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Focus</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Deep Work</DropdownMenu.Item>
            <DropdownMenu.Item>Lo-fi Beats</DropdownMenu.Item>
            <DropdownMenu.Item>Classical</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Create New Playlist...</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const ItemAsLink: Story = {
  name: 'Item as Link',
  render: (args) => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">Navigation</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content {...args}>
        <DropdownMenu.Item render={<a href="#home" />}>Home</DropdownMenu.Item>
        <DropdownMenu.Item render={<a href="#projects" />}>Projects</DropdownMenu.Item>
        <DropdownMenu.Item render={<a href="#settings" />}>Settings</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item render={<a href="https://github.com" target="_blank" rel="noopener noreferrer" />}>
          GitHub ↗
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const DetachedTriggers: Story = {
  name: 'Detached Triggers',
  render: function Render(args) {
    const menuHandle = React.useMemo(() => DropdownMenu.createHandle(), []);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text as="div" style={{ maxWidth: 540, textAlign: 'center' }}>
          A menu can be opened by a trigger that lives either inside or outside the{' '}
          <Code>&lt;DropdownMenu.Root&gt;</Code>. When the trigger and menu content need to live in different parts of
          the tree, create a handle with <Code>DropdownMenu.createHandle()</Code> and pass it to both the trigger and
          the root.
        </Text>
        <Text as="div" size="2" color="gray" style={{ maxWidth: 540, textAlign: 'center' }}>
          Note: Only top-level menus can have detached triggers. Submenus must have their triggers defined within the
          SubmenuRoot part.
        </Text>

        {/* Trigger is outside the Root */}
        <DropdownMenu.Trigger handle={menuHandle}>
          <Button variant="soft">Open Menu (Detached Trigger)</Button>
        </DropdownMenu.Trigger>

        {/* Root with handle, no trigger inside */}
        <DropdownMenu.Root handle={menuHandle}>
          <DropdownMenu.Content {...args}>
            <DropdownMenu.Item>Edit</DropdownMenu.Item>
            <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Archive</DropdownMenu.Item>
            <DropdownMenu.Item color="danger">Delete</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    );
  },
};

export const MultipleTriggers: Story = {
  name: 'Multiple Triggers',
  render: function Render(args) {
    const menuHandle = React.useMemo(() => DropdownMenu.createHandle(), []);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text as="div" style={{ maxWidth: 540, textAlign: 'center' }}>
          One menu can be opened by several triggers. You can either render multiple{' '}
          <Code>&lt;DropdownMenu.Trigger&gt;</Code> components inside the same <Code>&lt;DropdownMenu.Root&gt;</Code>,
          or attach several detached triggers to the same handle.
        </Text>

        <Text as="div" size="2" weight="bold" style={{ marginTop: 'var(--space-2)' }}>
          Multiple triggers inside Root:
        </Text>
        <DropdownMenu.Root>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <DropdownMenu.Trigger>
              <Button variant="soft">Trigger A</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Trigger>
              <Button variant="soft">Trigger B</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Trigger>
              <Button variant="soft">Trigger C</Button>
            </DropdownMenu.Trigger>
          </div>
          <DropdownMenu.Content {...args}>
            <DropdownMenu.Item>Action 1</DropdownMenu.Item>
            <DropdownMenu.Item>Action 2</DropdownMenu.Item>
            <DropdownMenu.Item>Action 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <Text as="div" size="2" weight="bold" style={{ marginTop: 'var(--space-4)' }}>
          Detached triggers with shared handle:
        </Text>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <DropdownMenu.Trigger handle={menuHandle}>
            <Button variant="surface">Detached A</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Trigger handle={menuHandle}>
            <Button variant="surface">Detached B</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Trigger handle={menuHandle}>
            <Button variant="surface">Detached C</Button>
          </DropdownMenu.Trigger>
        </div>

        <DropdownMenu.Root handle={menuHandle}>
          <DropdownMenu.Content {...args}>
            <DropdownMenu.Item>Shared Action 1</DropdownMenu.Item>
            <DropdownMenu.Item>Shared Action 2</DropdownMenu.Item>
            <DropdownMenu.Item>Shared Action 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    );
  },
};
