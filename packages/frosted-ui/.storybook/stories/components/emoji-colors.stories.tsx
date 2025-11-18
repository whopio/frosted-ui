import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Badge, StackedHorizontalBarChart, Text, TextField } from '../../../src/components';
import { emojiColorMap, getColorForEmoji, type ColorScale } from '../../../src/helpers/emoji-colors';

const meta = {
  title: 'Utilities/Emoji Colors',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function EmojiGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState<ColorScale | 'all'>('all');

  // Get all unique colors from the map
  const allColors = Array.from(new Set(Object.values(emojiColorMap))).sort();

  // Get color distribution stats
  const colorStats = Object.values(emojiColorMap).reduce(
    (acc, color) => {
      acc[color] = (acc[color] || 0) + 1;
      return acc;
    },
    {} as Record<ColorScale, number>,
  );

  // Filter emojis based on search and color filter
  const filteredEmojis = Object.entries(emojiColorMap).filter(([emoji, color]) => {
    const matchesSearch = searchQuery === '' || emoji.includes(searchQuery);
    const matchesColor = selectedColor === 'all' || color === selectedColor;
    return matchesSearch && matchesColor;
  });

  return (
    <div style={{ padding: 'var(--space-6)', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Text size="8" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          🎨 Emoji Color System
        </Text>
        <Text size="3" color="gray" style={{ display: 'block', marginBottom: 'var(--space-4)' }}>
          All {Object.keys(emojiColorMap).length} emojis automatically mapped to Frosted UI color scales based on their
          dominant color.
        </Text>

        {/* Filters */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-4)',
            flexWrap: 'wrap',
          }}
        >
          <TextField.Input
            placeholder="Search emojis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ minWidth: '200px' }}
          />
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <Badge
              variant={selectedColor === 'all' ? 'solid' : 'soft'}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedColor('all')}
            >
              All ({Object.keys(emojiColorMap).length})
            </Badge>
            {allColors.map((color) => (
              <Badge
                key={color}
                color={color}
                variant={selectedColor === color ? 'solid' : 'soft'}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedColor(color)}
              >
                {color} ({colorStats[color]})
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Emoji Grid */}
      {filteredEmojis.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: 'var(--space-3)',
          }}
        >
          {filteredEmojis.map(([emoji, color]) => (
            <EmojiCard key={emoji} emoji={emoji} color={color} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: 'var(--space-9)' }}>
          <Text size="3" color="gray">
            No emojis found matching your filters
          </Text>
        </div>
      )}

      {/* Stats Footer */}
      <div
        style={{
          marginTop: 'var(--space-8)',
          padding: 'var(--space-4)',
          background: 'var(--gray-3)',
          borderRadius: 'var(--radius-4)',
        }}
      >
        <Text size="2" weight="bold" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>
          Color Distribution
        </Text>

        {/* Visualization */}
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <StackedHorizontalBarChart
            data={Object.entries(colorStats)
              .sort(([, a], [, b]) => b - a)
              .map(([color, count]) => ({
                label: (value: number, percent: string) => `${color}: ${value} (${percent})`,
                value: count,
                color: color as ColorScale,
              }))}
          />
        </div>

        {/* Detailed Stats */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          {Object.entries(colorStats)
            .sort(([, a], [, b]) => b - a)
            .map(([color, count]) => (
              <Text key={color} size="1" style={{ display: 'block' }}>
                <Badge color={color as ColorScale} size="1" variant="soft">
                  {color}
                </Badge>{' '}
                {count} ({((count / Object.keys(emojiColorMap).length) * 100).toFixed(1)}%)
              </Text>
            ))}
        </div>
      </div>
    </div>
  );
}

function EmojiCard({ emoji, color }: { emoji: string; color: ColorScale | undefined }) {
  const displayColor = color ?? 'gray';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: 'var(--space-3)',

        borderRadius: 'var(--radius-3)',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--gray-3)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--gray-2)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      title={`${emoji} → ${displayColor}`}
    >
      <span style={{ fontSize: '32px', lineHeight: 1 }}>{emoji}</span>
      <Badge color={displayColor} size="1" variant="soft">
        {displayColor}
      </Badge>
    </div>
  );
}

export const AllEmojis: Story = {
  render: () => <EmojiGrid />,
};

function InteractiveDemo() {
  const [inputEmoji, setInputEmoji] = useState('❤️');
  const color = getColorForEmoji(inputEmoji);
  const displayColor = color ?? 'gray';

  const examples = [
    { emoji: '❤️', label: 'Heart' },
    { emoji: '🔥', label: 'Fire' },
    { emoji: '🌎', label: 'Earth' },
    { emoji: '🌟', label: 'Star' },
    { emoji: '🍋', label: 'Lemon' },
    { emoji: '🌱', label: 'Seedling' },
    { emoji: '💙', label: 'Blue Heart' },
    { emoji: '🎨', label: 'Palette' },
    { emoji: '🚀', label: 'Rocket' },
    { emoji: '🍕', label: 'Pizza' },
  ];

  return (
    <div style={{ padding: 'var(--space-6)', maxWidth: '800px', margin: '0 auto' }}>
      <Text size="7" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
        Interactive Demo
      </Text>
      <Text size="3" color="gray" style={{ display: 'block', marginBottom: 'var(--space-5)' }}>
        Try the <code>getColorForEmoji</code> function with different emojis
      </Text>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
          padding: 'var(--space-5)',
          background: 'var(--gray-2)',
          borderRadius: 'var(--radius-4)',
        }}
      >
        <div>
          <Text size="2" weight="bold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
            Enter an emoji:
          </Text>
          <TextField.Input
            value={inputEmoji}
            onChange={(e) => setInputEmoji(e.target.value)}
            placeholder="Type or paste an emoji..."
            size="3"
            style={{ fontSize: '24px' }}
          />
        </div>

        <div>
          <Text size="2" weight="bold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
            Detected color:
          </Text>
          <Badge color={displayColor} size="2" variant="solid" style={{ fontSize: '18px' }}>
            {inputEmoji} → {color || 'undefined (not found)'}
          </Badge>
        </div>

        <div>
          <Text size="2" weight="bold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
            Quick examples:
          </Text>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {examples.map(({ emoji, label }) => (
              <Badge
                key={emoji}
                color={getColorForEmoji(emoji) ?? 'gray'}
                variant="soft"
                style={{ cursor: 'pointer', fontSize: '16px' }}
                onClick={() => setInputEmoji(emoji)}
                title={label}
              >
                {emoji}
              </Badge>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 'var(--space-3)',
            padding: 'var(--space-3)',
            background: 'var(--gray-1)',
            borderRadius: 'var(--radius-3)',
            fontFamily: 'monospace',
            fontSize: '14px',
          }}
        >
          <Text size="1" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
            Usage:
          </Text>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
            {`import { useColorForEmoji } from 'frosted-ui';

const color = useColorForEmoji('${inputEmoji}');
// Returns: '${color}'`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
};
