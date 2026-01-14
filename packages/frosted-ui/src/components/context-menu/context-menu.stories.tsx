import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Code, ContextMenu, contextMenuContentPropDefs, Dialog, Text, TextArea, TextField } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/ContextMenu',
  component: ContextMenu.Content,
  args: {
    size: contextMenuContentPropDefs.size.default,
    variant: contextMenuContentPropDefs.variant.default,
  },
  argTypes: {
    size: {
      control: 'select',
      options: contextMenuContentPropDefs.size.values,
    },
    variant: {
      control: 'select',
      options: contextMenuContentPropDefs.variant.values,
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  render: (args) => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div
          style={{
            background: 'var(--gray-a2)',
            borderRadius: 'var(--radius-3)',
            width: 200,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Right-click here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content {...args}>
        <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Move to project…</ContextMenu.Item>
            <ContextMenu.Item>Move to folder…</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Advanced options…</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />
        <ContextMenu.Item>Share</ContextMenu.Item>
        <ContextMenu.Item>Add to favorites</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item shortcut="⌘ ⌫" color="danger">
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};

export const WithCheckboxAndRadio: Story = {
  name: 'Checkbox and Radio Items',
  render: function Render(args) {
    const [showGrid, setShowGrid] = React.useState(true);
    const [showRulers, setShowRulers] = React.useState(false);
    const [view, setView] = React.useState<string>('list');

    return (
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div
            style={{
              background: 'var(--gray-a2)',
              borderRadius: 'var(--radius-3)',
              width: 200,
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Right-click here
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content {...args}>
          <ContextMenu.CheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
            Show Grid
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem checked={showRulers} onCheckedChange={setShowRulers}>
            Show Rulers
          </ContextMenu.CheckboxItem>
          <ContextMenu.Separator />
          <ContextMenu.RadioGroup value={view} onValueChange={setView}>
            <ContextMenu.RadioItem value="list">List View</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="grid">Grid View</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="gallery">Gallery View</ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu.Root>
    );
  },
};

export const NestedMenu: Story = {
  name: 'Nested Menu',
  render: (args) => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div
          style={{
            background: 'var(--gray-a2)',
            borderRadius: 'var(--radius-3)',
            width: 200,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Right-click here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content {...args}>
        <ContextMenu.Item>Add to Library</ContextMenu.Item>

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Add to Playlist</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Get Up!</ContextMenu.Item>
            <ContextMenu.Item>Inside Out</ContextMenu.Item>
            <ContextMenu.Item>Night Beats</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>New playlist…</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />
        <ContextMenu.Group>
          <ContextMenu.GroupLabel>Actions</ContextMenu.GroupLabel>
          <ContextMenu.Item>Play Next</ContextMenu.Item>
          <ContextMenu.Item>Play Last</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>Favorite</ContextMenu.Item>
          <ContextMenu.Item>Share</ContextMenu.Item>
        </ContextMenu.Group>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};

export const ItemAsLink: Story = {
  name: 'Item as Link',
  render: (args) => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div
          style={{
            background: 'var(--gray-a2)',
            borderRadius: 'var(--radius-3)',
            width: 200,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Right-click here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content {...args}>
        <ContextMenu.Item render={<a href="#home" />}>Home</ContextMenu.Item>
        <ContextMenu.Item render={<a href="#projects" />}>Projects</ContextMenu.Item>
        <ContextMenu.Item render={<a href="#settings" />}>Settings</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item render={<a href="https://github.com" target="_blank" rel="noopener noreferrer" />}>
          GitHub ↗
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};

export const DialogFromContextMenu: Story = {
  name: 'Dialog from Context Menu',
  render: function Render(args) {
    const [editDialogOpen, setEditDialogOpen] = React.useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text as="div" style={{ maxWidth: 500, textAlign: 'center' }}>
          Open a dialog from a context menu using controlled state. The dialog is controlled via <Code>open</Code> and{' '}
          <Code>onOpenChange</Code> props, and opened imperatively via <Code>onClick</Code> on the menu item.
        </Text>

        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div
              style={{
                background: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                width: 200,
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Right-click here
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content {...args}>
            <ContextMenu.Item>View Details</ContextMenu.Item>
            <ContextMenu.Item>Duplicate</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item onClick={() => setEditDialogOpen(true)}>Edit...</ContextMenu.Item>
            <ContextMenu.Item color="danger" onClick={() => setDeleteDialogOpen(true)}>
              Delete...
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>

        {/* Edit Dialog - rendered outside the menu */}
        <Dialog.Root open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Edit Item</Dialog.Title>
            <Dialog.Description>Make changes to your item here.</Dialog.Description>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-3)',
              }}
            >
              <label>
                <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
                  Name
                </Text>
                <TextField.Input defaultValue="My Item" placeholder="Enter name" />
              </label>
              <label>
                <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
                  Description
                </Text>
                <TextArea defaultValue="A sample item description" placeholder="Enter description" />
              </label>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-4)',
                justifyContent: 'flex-end',
              }}
            >
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button variant="classic">Save Changes</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>

        {/* Delete Dialog - rendered outside the menu */}
        <Dialog.Root open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <Dialog.Content style={{ maxWidth: 400 }}>
            <Dialog.Title>Delete Item</Dialog.Title>
            <Dialog.Description>
              Are you sure you want to delete this item? This action cannot be undone.
            </Dialog.Description>

            <div
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-4)',
                justifyContent: 'flex-end',
              }}
            >
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button variant="classic" color="red">
                  Delete
                </Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    );
  },
};

export const SideAndAlign: Story = {
  name: 'Side and Align',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 500, textAlign: 'center' }}>
        Control where the menu appears relative to the click position using <Code>side</Code> and <Code>align</Code>{' '}
        props. Try right-clicking each box.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div
              style={{
                background: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                width: 140,
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-1)',
              }}
            >
              Bottom Start
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content {...args} side="bottom" align="start">
            <ContextMenu.Item>Item 1</ContextMenu.Item>
            <ContextMenu.Item>Item 2</ContextMenu.Item>
            <ContextMenu.Item>Item 3</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>

        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div
              style={{
                background: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                width: 140,
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-1)',
              }}
            >
              Right Start
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content {...args} side="right" align="start">
            <ContextMenu.Item>Item 1</ContextMenu.Item>
            <ContextMenu.Item>Item 2</ContextMenu.Item>
            <ContextMenu.Item>Item 3</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>

        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div
              style={{
                background: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                width: 140,
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-1)',
              }}
            >
              Top End
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content {...args} side="top" align="end">
            <ContextMenu.Item>Item 1</ContextMenu.Item>
            <ContextMenu.Item>Item 2</ContextMenu.Item>
            <ContextMenu.Item>Item 3</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>

        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div
              style={{
                background: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                width: 140,
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-1)',
              }}
            >
              Left Center
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content {...args} side="left" align="center">
            <ContextMenu.Item>Item 1</ContextMenu.Item>
            <ContextMenu.Item>Item 2</ContextMenu.Item>
            <ContextMenu.Item>Item 3</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>
      </div>
    </div>
  ),
};

export const SideOffsetAndAlignOffset: Story = {
  name: 'Side Offset and Align Offset',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 500, textAlign: 'center' }}>
        Fine-tune menu positioning with <Code>sideOffset</Code> (distance from click) and <Code>alignOffset</Code>{' '}
        (shift along the alignment axis). Right-click each box.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div
              style={{
                background: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                width: 140,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-1)',
              }}
            >
              Default
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content {...args}>
            <ContextMenu.Item>Item 1</ContextMenu.Item>
            <ContextMenu.Item>Item 2</ContextMenu.Item>
            <ContextMenu.Item>Item 3</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>

        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div
              style={{
                background: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                width: 140,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-1)',
              }}
            >
              sideOffset: 20
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content {...args} sideOffset={20}>
            <ContextMenu.Item>Item 1</ContextMenu.Item>
            <ContextMenu.Item>Item 2</ContextMenu.Item>
            <ContextMenu.Item>Item 3</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>

        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div
              style={{
                background: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                width: 140,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-1)',
              }}
            >
              alignOffset: 30
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content {...args} alignOffset={30}>
            <ContextMenu.Item>Item 1</ContextMenu.Item>
            <ContextMenu.Item>Item 2</ContextMenu.Item>
            <ContextMenu.Item>Item 3</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>

        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div
              style={{
                background: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                width: 140,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-1)',
                textAlign: 'center',
              }}
            >
              Both: 20, 20
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content {...args} sideOffset={20} alignOffset={20}>
            <ContextMenu.Item>Item 1</ContextMenu.Item>
            <ContextMenu.Item>Item 2</ContextMenu.Item>
            <ContextMenu.Item>Item 3</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>
      </div>
    </div>
  ),
};
