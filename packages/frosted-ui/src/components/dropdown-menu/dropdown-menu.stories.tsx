import { XCircleFilled16 } from '@frosted-ui/icons';
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
            <DropdownMenu.GroupLabel>Swag</DropdownMenu.GroupLabel>
            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ D" disabled onClick={() => alert('Duplicate')}>
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
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>Features</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
              <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>Options</DropdownMenu.SubTrigger>
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
        <Text render={<div />} style={{ maxWidth: 540, textAlign: 'center' }}>
          A menu can be opened by a trigger that lives either inside or outside the{' '}
          <Code>&lt;DropdownMenu.Root&gt;</Code>. When the trigger and menu content need to live in different parts of
          the tree, create a handle with <Code>DropdownMenu.createHandle()</Code> and pass it to both the trigger and
          the root.
        </Text>
        <Text render={<div />} size="2" color="gray" style={{ maxWidth: 540, textAlign: 'center' }}>
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
        <Text render={<div />} style={{ maxWidth: 540, textAlign: 'center' }}>
          One menu can be opened by several triggers. You can either render multiple{' '}
          <Code>&lt;DropdownMenu.Trigger&gt;</Code> components inside the same <Code>&lt;DropdownMenu.Root&gt;</Code>,
          or attach several detached triggers to the same handle.
        </Text>

        <Text render={<div />} size="2" weight="bold" style={{ marginTop: 'var(--space-2)' }}>
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

        <Text render={<div />} size="2" weight="bold" style={{ marginTop: 'var(--space-4)' }}>
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

const itemGroups = {
  library: [
    { label: 'Add to library', onClick: () => console.log('Adding to library') },
    { label: 'Add to favorites', onClick: () => console.log('Adding to favorites') },
  ],
  playback: [
    { label: 'Play', onClick: () => console.log('Playing') },
    { label: 'Add to queue', onClick: () => console.log('Adding to queue') },
  ],
  share: [
    { label: 'Share', onClick: () => console.log('Sharing') },
    { label: 'Copy link', onClick: () => console.log('Copying link') },
  ],
} as const;

type MenuKey = keyof typeof itemGroups;

export const ControlledWithMultipleTriggers: Story = {
  name: 'Controlled Mode with Multiple Triggers',
  render: function Render(args) {
    const menuHandle = React.useMemo(() => DropdownMenu.createHandle<MenuKey>(), []);
    const [open, setOpen] = React.useState(false);
    const [activeTrigger, setActiveTrigger] = React.useState<string | null>(null);

    const handleOpenChange: React.ComponentProps<typeof DropdownMenu.Root>['onOpenChange'] = (isOpen, eventDetails) => {
      setOpen(isOpen);
      if (isOpen && eventDetails?.trigger) {
        setActiveTrigger(eventDetails.trigger.id ?? null);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text render={<div />} style={{ maxWidth: 600, textAlign: 'center' }}>
          Control a menu's open state externally with the <Code>open</Code> and <Code>onOpenChange</Code> props. When
          more than one trigger can open the menu, track the active trigger with <Code>triggerId</Code> on{' '}
          <Code>&lt;DropdownMenu.Root&gt;</Code> and matching <Code>id</Code> props on each trigger.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <DropdownMenu.Trigger handle={menuHandle} id="menu-trigger-library" payload="library">
            <Button variant="soft">Library</Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Trigger handle={menuHandle} id="menu-trigger-playback" payload="playback">
            <Button variant="soft">Playback</Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Trigger handle={menuHandle} id="menu-trigger-share" payload="share">
            <Button variant="soft">Share</Button>
          </DropdownMenu.Trigger>

          <Button
            variant="surface"
            onClick={() => {
              setActiveTrigger('menu-trigger-playback');
              setOpen(true);
            }}
          >
            Open Playback (controlled)
          </Button>
        </div>

        <DropdownMenu.Root handle={menuHandle} open={open} triggerId={activeTrigger} onOpenChange={handleOpenChange}>
          {({ payload }) => (
            <DropdownMenu.Content {...args}>
              {payload &&
                itemGroups[payload].map((item, index) => (
                  <DropdownMenu.Item key={index} onClick={item.onClick}>
                    {item.label}
                  </DropdownMenu.Item>
                ))}
            </DropdownMenu.Content>
          )}
        </DropdownMenu.Root>
      </div>
    );
  },
};

export const SideAndAlign: Story = {
  name: 'Side and Align',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center' }}>
      <Text render={<div />} style={{ maxWidth: 500, textAlign: 'center' }}>
        Control where the menu appears relative to the trigger using <Code>side</Code> and <Code>align</Code> props.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Bottom Start</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} side="bottom" align="start">
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Bottom Center</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} side="bottom" align="center">
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Bottom End</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} side="bottom" align="end">
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Top Start</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} side="top" align="start">
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Right Start</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} side="right" align="start">
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Left Start</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} side="left" align="start">
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  ),
};

export const SideOffsetAndAlignOffset: Story = {
  name: 'Side Offset and Align Offset',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center' }}>
      <Text render={<div />} style={{ maxWidth: 500, textAlign: 'center' }}>
        Fine-tune menu positioning with <Code>sideOffset</Code> (distance from trigger) and <Code>alignOffset</Code>{' '}
        (shift along the alignment axis).
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Default (sideOffset: 4)</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args}>
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">sideOffset: 16</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} sideOffset={16}>
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">sideOffset: 0</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} sideOffset={0}>
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">alignOffset: 0</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} align="start" alignOffset={0}>
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">alignOffset: 20</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} align="start" alignOffset={20}>
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">alignOffset: -20</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} align="start" alignOffset={-20}>
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  ),
};

export const ManyAdjacentSubmenus: Story = {
  name: 'Many Adjacent Submenus',
  render: (args) => {
    const handleItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
      console.log(`${event.currentTarget.textContent} clicked`);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text render={<div />} style={{ maxWidth: 500, textAlign: 'center' }}>
          Stress test with many adjacent submenus. The menu contains 50 submenus, each with 12 nested submenus, each
          containing 8 items.
        </Text>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Open Menu</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content {...args} style={{ maxHeight: 400, overflowY: 'auto' }}>
            {Array.from({ length: 50 }).map((_, submenuIndex) => (
              <DropdownMenu.Sub key={submenuIndex}>
                <DropdownMenu.SubTrigger>Submenu {submenuIndex + 1}</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  {Array.from({ length: 12 }).map((__, itemIndex) => (
                    <DropdownMenu.Sub key={itemIndex}>
                      <DropdownMenu.SubTrigger>
                        Submenu {submenuIndex + 1} - Item {itemIndex + 1}
                      </DropdownMenu.SubTrigger>
                      <DropdownMenu.SubContent>
                        {Array.from({ length: 8 }).map((___, nestedIndex) => (
                          <DropdownMenu.Item key={nestedIndex} onClick={handleItemClick}>
                            Nested {submenuIndex + 1}.{itemIndex + 1} - Item {nestedIndex + 1}
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>
                  ))}
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    );
  },
};

const folderOptions = ['Desktop', 'Documents', 'Downloads', 'Projects', 'Archive', 'Shared', 'Trash'];
const exportOptions = ['PDF document', 'Word document', 'Plain text', 'Rich text', 'Markdown', 'HTML page', 'Image'];
const sharingOptions = ['Email', 'Messages', 'AirDrop', 'Copy link', 'Invite collaborators', 'Publish to web'];

function FilterClear() {
  return (
    <DropdownMenu.Clear>
      <button type="button" aria-label="Clear">
        <XCircleFilled16 className="fui-BaseMenuClearIcon fui-DropdownMenuClearIcon" />
      </button>
    </DropdownMenu.Clear>
  );
}

function FilterableSubmenu({ label, options }: { label: string; options: readonly string[] }) {
  return (
    <DropdownMenu.FilterProvider autoHighlight>
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>{label}</DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.InputRoot>
            <DropdownMenu.Input aria-label={`Filter ${label}`} placeholder="Filter" />
            <FilterClear />
          </DropdownMenu.InputRoot>
          <DropdownMenu.Empty>No matches.</DropdownMenu.Empty>
          <DropdownMenu.List>
            {options.map((option) => (
              <DropdownMenu.Item key={option}>{option}</DropdownMenu.Item>
            ))}
          </DropdownMenu.List>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
    </DropdownMenu.FilterProvider>
  );
}

export const Filtering: Story = {
  name: 'Filtering',
  render: (args) => {
    const [order, setOrder] = React.useState('date');
    const [showDetails, setShowDetails] = React.useState(true);
    const [showSidebar, setShowSidebar] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text render={<div />} style={{ maxWidth: 560, textAlign: 'center' }}>
          Wrap the menu in <Code>DropdownMenu.FilterProvider</Code>, put a search field in{' '}
          <Code>DropdownMenu.InputRoot</Code>, and place the items in <Code>DropdownMenu.List</Code>. Type to narrow
          the actions. Arrow keys move through matches while the field keeps focus. Give each searchable submenu its
          own provider. Submenus without one stay unfiltered.
        </Text>

        <DropdownMenu.FilterProvider autoHighlight>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft">Actions</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content {...args}>
              <DropdownMenu.InputRoot>
                <DropdownMenu.Input aria-label="Filter actions" placeholder="Filter actions" />
                <FilterClear />
              </DropdownMenu.InputRoot>
              <DropdownMenu.Empty>No actions found.</DropdownMenu.Empty>
              <DropdownMenu.List>
                <DropdownMenu.Group>
                  <DropdownMenu.GroupLabel>File</DropdownMenu.GroupLabel>
                  <DropdownMenu.Item>New file</DropdownMenu.Item>
                  <DropdownMenu.Item>Open file</DropdownMenu.Item>
                  <DropdownMenu.Item>Save</DropdownMenu.Item>
                  <DropdownMenu.Item>Save as</DropdownMenu.Item>
                  <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                  <DropdownMenu.Item label="Move to folder">Move</DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Group>
                  <DropdownMenu.Separator />
                  <DropdownMenu.GroupLabel>Organize</DropdownMenu.GroupLabel>
                  <FilterableSubmenu label="Move to folder" options={folderOptions} />
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
                    <DropdownMenu.SubContent>
                      {sharingOptions.map((option) => (
                        <DropdownMenu.Item key={option}>{option}</DropdownMenu.Item>
                      ))}
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Sub>
                  <FilterableSubmenu label="Export" options={exportOptions} />
                  <DropdownMenu.Item>Download a copy</DropdownMenu.Item>
                  <DropdownMenu.Item color="danger">Delete</DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.RadioGroup value={order} onValueChange={setOrder}>
                  <DropdownMenu.Separator />
                  <DropdownMenu.GroupLabel>Sort by</DropdownMenu.GroupLabel>
                  <DropdownMenu.RadioItem value="date">Date modified</DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem value="name">Name</DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem value="size">Size</DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
                <DropdownMenu.Group>
                  <DropdownMenu.Separator />
                  <DropdownMenu.GroupLabel>View</DropdownMenu.GroupLabel>
                  <DropdownMenu.CheckboxItem checked={showDetails} onCheckedChange={setShowDetails}>
                    Show details
                  </DropdownMenu.CheckboxItem>
                  <DropdownMenu.CheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
                    Show sidebar
                  </DropdownMenu.CheckboxItem>
                </DropdownMenu.Group>
              </DropdownMenu.List>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </DropdownMenu.FilterProvider>
      </div>
    );
  },
};

export const CustomFilter: Story = {
  name: 'Custom Filter',
  render: (args) => {
    const { startsWith } = DropdownMenu.useFilter();
    const [highlighted, setHighlighted] = React.useState('None');
    const [reason, setReason] = React.useState('none');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text render={<div />} style={{ maxWidth: 560, textAlign: 'center' }}>
          Pass <Code>filter</Code> to replace the default &quot;contains&quot; match. <Code>DropdownMenu.useFilter()</Code>{' '}
          returns locale-aware <Code>startsWith</Code>, <Code>endsWith</Code>, and <Code>contains</Code> helpers. Pass{' '}
          <Code>filter={'{null}'}</Code> when you filter the items yourself. <Code>onItemHighlighted</Code> reports the
          highlighted item’s label and why it changed.
        </Text>
        <Text render={<div />} size="2" color="gray">
          Highlighted: <Code>{highlighted}</Code> ({reason})
        </Text>

        <DropdownMenu.FilterProvider autoHighlight filter={startsWith}>
          <DropdownMenu.Root
            onItemHighlighted={(_item, details) => {
              setHighlighted(details.label ?? 'None');
              setReason(details.reason);
            }}
          >
            <DropdownMenu.Trigger>
              <Button variant="soft">Commands</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content {...args}>
              <DropdownMenu.InputRoot>
                <DropdownMenu.Input aria-label="Filter commands" placeholder="Starts with…" />
                <FilterClear />
              </DropdownMenu.InputRoot>
              <DropdownMenu.Empty>No commands found.</DropdownMenu.Empty>
              <DropdownMenu.List>
                <DropdownMenu.Item>Copy link</DropdownMenu.Item>
                <DropdownMenu.Item>Copy title</DropdownMenu.Item>
                <DropdownMenu.Item>Create page</DropdownMenu.Item>
                <DropdownMenu.Item>Create folder</DropdownMenu.Item>
                <DropdownMenu.Item>Rename</DropdownMenu.Item>
                <DropdownMenu.Item>Replace</DropdownMenu.Item>
              </DropdownMenu.List>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </DropdownMenu.FilterProvider>
      </div>
    );
  },
};
