import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '@frosted-ui/icons';
import { MagnifyingGlass20, XCircleFilled16 } from '@frosted-ui/icons';
import { default as React, useDeferredValue, useMemo, useState } from 'react';
import { IconButton, ScrollArea, Select, Text, TextField } from '../../../src';
import { Tooltip } from '../../../src/components/tooltip';

// Helper type for icon components with category
type IconComponent = React.FC<{ style?: React.CSSProperties }> & {
  category?: string;
};

// Available icon sizes
const ICON_SIZES = ['12', '16', '20', '24', '32'] as const;
type IconSize = (typeof ICON_SIZES)[number];

// Parsed icon info
interface ParsedIcon {
  fullName: string;
  baseName: string;
  size: IconSize;
  component: IconComponent;
  category: string;
}

// Parse icon name to extract base name and size
function parseIconName(name: string): { baseName: string; size: IconSize } | null {
  const match = name.match(/^(.+?)(12|16|20|24|32)$/);
  if (!match) return null;
  return { baseName: match[1], size: match[2] as IconSize };
}

// Get all parsed icons
function getAllParsedIcons(): ParsedIcon[] {
  const icons: ParsedIcon[] = [];

  Object.entries(Icons).forEach(([name, Icon]) => {
    const parsed = parseIconName(name);
    if (!parsed) return;

    const icon = Icon as IconComponent;
    icons.push({
      fullName: name,
      baseName: parsed.baseName,
      size: parsed.size,
      component: icon,
      category: icon.category || 'Uncategorized',
    });
  });

  return icons;
}

// Group icons by category, counting unique base names
function groupIconsByCategory(icons: ParsedIcon[]): Record<string, ParsedIcon[]> {
  const grouped: Record<string, ParsedIcon[]> = {};

  icons.forEach((icon) => {
    if (!grouped[icon.category]) {
      grouped[icon.category] = [];
    }
    grouped[icon.category].push(icon);
  });

  // Sort categories alphabetically, but keep "Uncategorized" at the end
  const sortedCategories = Object.keys(grouped).sort((a, b) => {
    if (a === 'Uncategorized') return 1;
    if (b === 'Uncategorized') return -1;
    return a.localeCompare(b);
  });

  const sortedGrouped: Record<string, ParsedIcon[]> = {};
  sortedCategories.forEach((cat) => {
    sortedGrouped[cat] = grouped[cat];
  });

  return sortedGrouped;
}

// Count unique base names in a list of icons
function countUniqueIcons(icons: ParsedIcon[]): number {
  const uniqueNames = new Set(icons.map((i) => i.baseName));
  return uniqueNames.size;
}

// Split camelCase/PascalCase into words
// "ArrowUpRight" -> ["arrow", "up", "right"]
// "GitHubLogo" -> ["git", "hub", "logo"]
// "XCircleFilled" -> ["x", "circle", "filled"]
function splitCamelCase(str: string): string[] {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before uppercase letters
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') // Handle consecutive uppercase (e.g., "GitHub" -> "Git Hub")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

// Smart search function
// Matches if ALL query terms are found in either:
// - The icon's base name (split into words)
// - The icon's category
// - Common variants like "filled", "outline"
function matchesSearch(icon: ParsedIcon, query: string): boolean {
  if (!query.trim()) return true;

  const queryTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const nameWords = splitCamelCase(icon.baseName);
  const categoryWords = icon.category
    .toLowerCase()
    .split(/[\s&]+/)
    .filter(Boolean);

  // Combine all searchable words
  const allSearchableWords = [...nameWords, ...categoryWords];
  const searchableText = allSearchableWords.join(' ');

  // Each query term must match at least one word (partial match allowed)
  return queryTerms.every((term) => {
    // Check if term matches any word as a prefix or substring
    return allSearchableWords.some((word) => word.includes(term)) || searchableText.includes(term);
  });
}

// Calculate search relevance score (higher = better match)
function getSearchScore(icon: ParsedIcon, query: string): number {
  if (!query.trim()) return 0;

  const queryTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const nameWords = splitCamelCase(icon.baseName);
  const baseName = icon.baseName.toLowerCase();

  let score = 0;

  for (const term of queryTerms) {
    // Exact match on full base name (highest priority)
    if (baseName === term) {
      score += 100;
    }
    // Base name starts with term
    else if (baseName.startsWith(term)) {
      score += 50;
    }
    // Exact word match in name
    else if (nameWords.includes(term)) {
      score += 30;
    }
    // Word starts with term
    else if (nameWords.some((w) => w.startsWith(term))) {
      score += 20;
    }
    // Partial match in name
    else if (nameWords.some((w) => w.includes(term))) {
      score += 10;
    }
    // Category match
    else if (icon.category.toLowerCase().includes(term)) {
      score += 5;
    }
  }

  return score;
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Utilities/Icons',
  // @ts-ignore
  component: Icons.SparkleRectangle20,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Icons.SparkleRectangle20>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', width: 400, flexWrap: 'wrap', padding: 24, margin: '0 auto' }}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <div key={name} style={{ width: '20%', padding: 8 }}>
          <Tooltip disableHoverablePopup content={name} delay={0} closeDelay={0}>
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

const IconBrowserComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<IconSize>('20');
  const [searchQuery, setSearchQuery] = useState('');

  // Use deferred value for expensive filtering operations
  // This keeps the input responsive while filtering happens in the background
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const deferredCategory = useDeferredValue(selectedCategory);
  const isStale = deferredSearchQuery !== searchQuery || deferredCategory !== selectedCategory;

  const allParsedIcons = useMemo(() => getAllParsedIcons(), []);

  // Filter by selected size first
  const iconsForSize = useMemo(() => {
    return allParsedIcons.filter((icon) => icon.size === selectedSize);
  }, [allParsedIcons, selectedSize]);

  const groupedIcons = useMemo(() => groupIconsByCategory(iconsForSize), [iconsForSize]);
  const categories = Object.keys(groupedIcons);
  const totalIconCount = countUniqueIcons(iconsForSize);

  // Filter icons based on search and category (using deferred values for responsiveness)
  const displayedIcons = useMemo(() => {
    let icons = deferredCategory ? groupedIcons[deferredCategory] || [] : iconsForSize;

    if (deferredSearchQuery.trim()) {
      // Filter using smart search
      icons = icons.filter((icon) => matchesSearch(icon, deferredSearchQuery));

      // Sort by relevance score (best matches first)
      icons = [...icons].sort((a, b) => {
        return getSearchScore(b, deferredSearchQuery) - getSearchScore(a, deferredSearchQuery);
      });
    }

    return icons;
  }, [deferredCategory, deferredSearchQuery, groupedIcons, iconsForSize]);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        background: 'var(--color-background)',
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 260,
          borderRight: '1px solid var(--gray-a5)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
        }}
      >
        <ScrollArea style={{ flex: 1 }}>
          <div style={{ padding: '16px 0' }}>
            {/* All category */}
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '8px 20px',
                background: selectedCategory === null ? 'var(--gray-a3)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                color: selectedCategory === null ? 'var(--accent-11)' : 'var(--gray-12)',
                fontWeight: selectedCategory === null ? 600 : 400,
                fontSize: 14,
              }}
            >
              <span>All</span>
              <span style={{ color: 'var(--gray-10)', fontSize: 13 }}>{totalIconCount}</span>
            </button>

            {/* Categories header */}
            <div
              style={{
                padding: '16px 20px 8px',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--gray-11)',
              }}
            >
              Categories
            </div>

            {/* Category list */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '8px 20px',
                  background: selectedCategory === category ? 'var(--gray-a3)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: selectedCategory === category ? 'var(--accent-11)' : 'var(--gray-12)',
                  fontWeight: selectedCategory === category ? 600 : 400,
                  fontSize: 14,
                }}
              >
                <span>{category}</span>
                <span style={{ color: 'var(--gray-10)', fontSize: 13 }}>
                  {countUniqueIcons(groupedIcons[category] || [])}
                </span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Search header */}
        <div
          style={{
            padding: '24px 32px',
            borderBottom: '1px solid var(--gray-a5)',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div style={{ flex: 1, maxWidth: 480 }}>
            <TextField.Root size="3">
              <TextField.Slot>
                <MagnifyingGlass20 />
              </TextField.Slot>
              <TextField.Input
                placeholder={`Search icons (try "arrow up", "filled")...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setSearchQuery('');
                  }
                }}
              />
              {searchQuery && (
                <TextField.Slot>
                  <IconButton
                    size="2"
                    variant="ghost"
                    color="gray"
                    style={{ borderRadius: '50%' }}
                    onClick={() => setSearchQuery('')}
                  >
                    <XCircleFilled16 />
                  </IconButton>
                </TextField.Slot>
              )}
            </TextField.Root>
          </div>
          <Select.Root value={selectedSize} onValueChange={(value) => setSelectedSize(value as IconSize)} size="3">
            <Select.Trigger style={{ width: 100 }} />
            <Select.Content alignItemWithTrigger={false}>
              {ICON_SIZES.map((size) => (
                <Select.Item key={size} value={size}>
                  {size}px
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>

        {/* Icons grid */}
        <ScrollArea style={{ flex: 1 }}>
          <div
            style={{
              padding: '24px 32px',
              opacity: isStale ? 0.6 : 1,
              transition: 'opacity 0.1s ease',
            }}
          >
            {displayedIcons.length === 0 ? (
              <Text color="gray">No icons found</Text>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))',
                  gap: 8,
                }}
              >
                {displayedIcons.map((icon) => (
                  <Tooltip disableHoverablePopup key={icon.fullName} content={icon.fullName} delay={0} closeDelay={0}>
                    <div
                      style={{
                        aspectRatio: '1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 'var(--radius-2)',
                        border: '1px solid var(--gray-a5)',
                        background: 'var(--gray-a2)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gray-a8)';
                        e.currentTarget.style.background = 'var(--gray-a3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gray-a5)';
                        e.currentTarget.style.background = 'var(--gray-a2)';
                      }}
                    >
                      <icon.component style={{ color: 'var(--gray-12)' }} />
                    </div>
                  </Tooltip>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export const IconBrowser: Story = {
  name: 'Icon Browser',
  render: () => <IconBrowserComponent />,
};
