import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, DropdownMenu, dropdownMenuContentPropDefs } from '..';

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
          <DropdownMenu.Label>Swag</DropdownMenu.Label>
          <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
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

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)' }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft">Options</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content {...args}>
          <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft" highContrast>
            Options
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content {...args} highContrast>
          <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
};
