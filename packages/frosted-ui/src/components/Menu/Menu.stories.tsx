import {
  faEllipsis,
  faPencil,
  faStar,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { IconButton } from '../IconButton';
import { CheckedState, MenuCheckboxItem } from '../MenuCheckboxItem';
import { MenuGroup } from '../MenuGroup';
import { MenuItem } from '../MenuItem';
import { MenuLabel } from '../MenuLabel';
import { MenuRadioGroup } from '../MenuRadioGroup';
import { MenuRadioItem } from '../MenuRadioItem';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'General/Menu',
  component: Menu,
  args: {
    trigger: (
      <IconButton
        size="sm"
        icon={faEllipsis}
        colorScheme="black"
        variant="outline"
      />
    ),
    items: [
      { children: 'Edit', icon: faPencil },
      {
        children: 'Delete',
        icon: faTrash,
        onClick: () => alert('Delete clicked'),
      },
    ],
    rootProps: { defaultOpen: true },
    contentProps: { align: 'start' },
  },
};
export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {};

export const ChangeAlignment: Story = {
  args: {
    triggerProps: { className: 'mx-auto' },
    contentProps: { align: 'center' },
  },
};

export const Composable: Story = {
  args: {
    items: undefined,
  },
  render: (args) => {
    const [bookmarksChecked, setBookmarksChecked] =
      React.useState<CheckedState>(true);
    const [urlsChecked, setUrlsChecked] = React.useState<CheckedState>(false);
    const [item, setItem] = React.useState('item1');

    return (
      <Menu {...args}>
        <MenuItem>New tab</MenuItem>
        <MenuItem icon={faStar}>New tab</MenuItem>
        <MenuGroup>
          <MenuLabel>Windows</MenuLabel>
          <MenuItem icon={faStar} onClick={() => alert('Delete clicked')}>
            New window
          </MenuItem>
          <MenuItem>New private window</MenuItem>
        </MenuGroup>
        <MenuGroup label="Checkbox group">
          <MenuCheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            Show bookmarks
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            Show full urls
          </MenuCheckboxItem>
        </MenuGroup>
        <MenuRadioGroup
          label="Radio group"
          value={item}
          onValueChange={setItem}
        >
          <MenuRadioItem value="item1">RadioItem</MenuRadioItem>
          <MenuRadioItem value="item2">RadioItem</MenuRadioItem>
        </MenuRadioGroup>
      </Menu>
    );
  },
};
