import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '@frosted-ui/icons';
import React from 'react';
import { Tabs, Text } from '../../../src';
import { Tooltip } from '../../../src/components/tooltip';

// Helper type for icon components with category
type IconComponent = React.FC<{ style?: React.CSSProperties }> & {
  category?: string;
};

// Group icons by category
function groupIconsByCategory(): Record<string, Array<[string, IconComponent]>> {
  const grouped: Record<string, Array<[string, IconComponent]>> = {};

  Object.entries(Icons).forEach(([name, Icon]) => {
    const icon = Icon as IconComponent;
    const category = icon.category || 'Uncategorized';

    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push([name, icon]);
  });

  // Sort categories alphabetically, but keep "Uncategorized" at the end
  const sortedCategories = Object.keys(grouped).sort((a, b) => {
    if (a === 'Uncategorized') return 1;
    if (b === 'Uncategorized') return -1;
    return a.localeCompare(b);
  });

  const sortedGrouped: Record<string, Array<[string, IconComponent]>> = {};
  sortedCategories.forEach((cat) => {
    sortedGrouped[cat] = grouped[cat];
  });

  return sortedGrouped;
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Utilities/Icons',
  // @ts-ignore
  component: Icons.SparkleRectangle20,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Icons.SparkleRectangle20>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', width: 400, flexWrap: 'wrap' }}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <div style={{ width: '20%', padding: 8 }}>
          <Tooltip key={name} content={name} delay={0}>
            {/* @ts-ignore */}
            <Icon
              style={{
                color: 'var(--gray-a10)',
              }}
            />
          </Tooltip>
        </div>
      ))}
    </div>
  ),
};

export const ByCategory: Story = {
  name: 'By Category',
  render: () => {
    const groupedIcons = groupIconsByCategory();
    const categories = Object.keys(groupedIcons);

    return (
      <div style={{ width: 800 }}>
        <Tabs.Root defaultValue={categories[0]}>
          <Tabs.List style={{ flexWrap: 'wrap', height: 'auto', gap: 4, paddingBottom: 8 }}>
            {categories.map((category) => (
              <Tabs.Trigger key={category} value={category}>
                {category} ({groupedIcons[category].length})
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {categories.map((category) => (
            <Tabs.Content key={category} value={category} style={{ paddingTop: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 4 }}>
                {groupedIcons[category].map(([name, Icon]) => (
                  <Tooltip key={name} content={name} delay={0}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 'var(--radius-2)',
                        background: 'var(--gray-a2)',
                      }}
                    >
                      {/* @ts-ignore */}
                      <Icon style={{ color: 'var(--gray-a11)' }} />
                    </div>
                  </Tooltip>
                ))}
              </div>
              <Text size="1" color="gray" style={{ marginTop: 12, display: 'block' }}>
                {groupedIcons[category].length} icons in this category
              </Text>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    );
  },
};
