import { faFire, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from '../Badge';
import { HorizontalTabList } from '../HorizontalTabList';
import {
  HorizontalTabListItem,
  HorizontalTabSize,
} from '../HorizontalTabListItem';
import { HorizontalTabPanel } from '../HorizontalTabPanel';
import { HorizontalTabPanelGroup } from '../HorizontalTabPanelGroup';
import { HorizontalTabGroup, HorizontalTabSizes } from './HorizontalTabGroup';

const meta: Meta<typeof HorizontalTabGroup> = {
  title: 'General/HorizontalTabGroup',
  component: HorizontalTabGroup,
  args: {
    defaultTab: 0,
    size: 'md',
    items: [
      { children: 'Top charts', icon: faTrophy },
      { children: 'Top trending', icon: faFire },
      {
        children: 'Top rated',
        icon: faStar,
        rightElement: <Badge size="sm" text="New!" />,
      },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof HorizontalTabGroup>;

export const Default: Story = {
  render: (args) => (
    <HorizontalTabGroup {...args}>
      <HorizontalTabPanelGroup>
        <HorizontalTabPanel>
          <div className="bg-whop-tag-blue-background text-whop-tag-blue mt-4 flex items-center justify-center rounded-md py-12">
            Content for item 1
          </div>
        </HorizontalTabPanel>
        <HorizontalTabPanel>
          <div className="bg-whop-tag-green-background text-whop-tag-green mt-4 flex items-center justify-center rounded-md py-12">
            Content for item 2
          </div>
        </HorizontalTabPanel>
        <HorizontalTabPanel>
          <div className="bg-whop-tag-purple-background text-whop-tag-purple mt-4 flex items-center justify-center rounded-md py-12">
            Content for item 3
          </div>
        </HorizontalTabPanel>
      </HorizontalTabPanelGroup>
    </HorizontalTabGroup>
  ),
};

export const Animations: Story = {
  render: (args) => {
    const [selectedIndex, setSelectedIndex] = React.useState(
      args.defaultTab || 0,
    );
    return (
      <HorizontalTabGroup
        {...args}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        <HorizontalTabPanelGroup>
          <HorizontalTabPanel>
            <div className="bg-whop-tag-blue-background text-whop-tag-blue mt-4 flex items-center justify-center rounded-md py-12">
              Content for item 1
            </div>
          </HorizontalTabPanel>
          <HorizontalTabPanel>
            <div className="bg-whop-tag-green-background text-whop-tag-green mt-4 flex items-center justify-center rounded-md py-12">
              Content for item 2
            </div>
          </HorizontalTabPanel>
          <HorizontalTabPanel>
            <div className="bg-whop-tag-purple-background text-whop-tag-purple mt-4 flex items-center justify-center rounded-md py-12">
              Content for item 3
            </div>
          </HorizontalTabPanel>
        </HorizontalTabPanelGroup>
      </HorizontalTabGroup>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const sizes = Object.values(HorizontalTabSizes);
    const [selectedIndex, setSelectedIndex] = React.useState(
      args.defaultTab || 0,
    );
    return (
      <div className="space-y-12">
        {sizes.map((size) => (
          <HorizontalTabGroup
            key={size}
            {...args}
            size={size as HorizontalTabSize}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          >
            <HorizontalTabPanelGroup>
              <HorizontalTabPanel>
                <div className="bg-whop-tag-blue-background text-whop-tag-blue mt-4 flex items-center justify-center rounded-md py-12">
                  Content for item 1
                </div>
              </HorizontalTabPanel>
              <HorizontalTabPanel>
                <div className="bg-whop-tag-green-background text-whop-tag-green mt-4 flex items-center justify-center rounded-md py-12">
                  Content for item 2
                </div>
              </HorizontalTabPanel>
              <HorizontalTabPanel>
                <div className="bg-whop-tag-purple-background text-whop-tag-purple mt-4 flex items-center justify-center rounded-md py-12">
                  Content for item 3
                </div>
              </HorizontalTabPanel>
            </HorizontalTabPanelGroup>
          </HorizontalTabGroup>
        ))}
      </div>
    );
  },
};

export const Composed: Story = {
  render: (args) => {
    const [selectedIndex, setSelectedIndex] = React.useState(
      args.defaultTab || 0,
    );
    return (
      <HorizontalTabGroup
        {...args}
        items={undefined}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        <HorizontalTabList>
          <HorizontalTabListItem>Default</HorizontalTabListItem>
          <HorizontalTabListItem rightElement={<Badge size="sm" text="New!" />}>
            With badge
          </HorizontalTabListItem>
          <HorizontalTabListItem
            rightElement={
              <div className="bg-whop-field-highlight h-2 w-2 rounded-full" />
            }
            icon={faStar}
          >
            Icon &amp; Dot
          </HorizontalTabListItem>
        </HorizontalTabList>
        <HorizontalTabPanelGroup>
          <HorizontalTabPanel>
            <div className="bg-whop-tag-blue-background text-whop-tag-blue mt-4 flex items-center justify-center rounded-md py-12">
              Content for item 1
            </div>
          </HorizontalTabPanel>
          <HorizontalTabPanel>
            <div className="bg-whop-tag-green-background text-whop-tag-green mt-4 flex items-center justify-center rounded-md py-12">
              Content for item 2
            </div>
          </HorizontalTabPanel>
          <HorizontalTabPanel>
            <div className="bg-whop-tag-purple-background text-whop-tag-purple mt-4 flex items-center justify-center rounded-md py-12">
              Content for item 3
            </div>
          </HorizontalTabPanel>
        </HorizontalTabPanelGroup>
      </HorizontalTabGroup>
    );
  },
};
