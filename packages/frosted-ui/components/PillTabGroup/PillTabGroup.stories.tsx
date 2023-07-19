import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { PillTabList } from '../PillTabList';
import { PillTabListItem } from '../PillTabListItem';
import { PillTabPanel } from '../PillTabPanel';
import { PillTabPanelGroup } from '../PillTabPanelGroup';
import { PillTabGroup } from './PillTabGroup';

const meta: Meta<typeof PillTabGroup> = {
  title: 'General/PillTabGroup',
  component: PillTabGroup,
  args: {
    fullWidth: false,
    items: [
      { children: 'Default' },
      { children: 'With badge', badge: true },
      { children: 'With badge & label', badge: true, label: '24' },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof PillTabGroup>;

export const Default: Story = {
  render: (args) => (
    <PillTabGroup {...args}>
      <PillTabPanelGroup>
        <PillTabPanel>Content for item 1</PillTabPanel>
        <PillTabPanel>Content for item 2</PillTabPanel>
        <PillTabPanel>Content for item 3</PillTabPanel>
      </PillTabPanelGroup>
    </PillTabGroup>
  ),
};

export const FullWidth: Story = {
  argTypes: {
    fullWidth: { control: { disable: true } },
  },
  args: {
    fullWidth: true,
  },
  render: (args) => (
    <PillTabGroup {...args}>
      <PillTabPanelGroup>
        <PillTabPanel>Content for item 1</PillTabPanel>
        <PillTabPanel>Content for item 2</PillTabPanel>
        <PillTabPanel>Content for item 3</PillTabPanel>
      </PillTabPanelGroup>
    </PillTabGroup>
  ),
};

export const Controlled: Story = {
  argTypes: {
    selectedIndex: { control: { disable: true } },
    setSelectedIndex: { control: { disable: true } },
  },
  render: (args) => {
    const [tab, setTab] = React.useState(0);
    return (
      <PillTabGroup {...args} selectedIndex={tab} setSelectedIndex={setTab}>
        <PillTabPanelGroup>
          <PillTabPanel>Content for item 1</PillTabPanel>
          <PillTabPanel>Content for item 2</PillTabPanel>
          <PillTabPanel>Content for item 3</PillTabPanel>
        </PillTabPanelGroup>
      </PillTabGroup>
    );
  },
};

export const Composed: Story = {
  argTypes: {
    items: { control: { disable: true } },
  },
  args: {
    items: undefined,
  },
  render: (args) => (
    <PillTabGroup {...args}>
      <PillTabList>
        <PillTabListItem>Default</PillTabListItem>
        <PillTabListItem badge>With badge</PillTabListItem>
        <PillTabListItem badge label="24">
          Badge & label
        </PillTabListItem>
      </PillTabList>
      <PillTabPanelGroup>
        <PillTabPanel>Content for item 1</PillTabPanel>
        <PillTabPanel>Content for item 2</PillTabPanel>
        <PillTabPanel>Content for item 3</PillTabPanel>
      </PillTabPanelGroup>
    </PillTabGroup>
  ),
};
