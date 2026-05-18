import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '@frosted-ui/icons';
import * as React from 'react';
import { Card, Text } from '../../../src';

// Pictograms expose a `variant` prop which selects the background tuning the
// asset was designed for. Render each variant against a tile coloured to match
// that intended background so the artwork reads correctly. The `auto` tile
// uses a theme-aware background so it visibly flips when the storybook theme
// switches between light and dark.
type PictogramVariant = 'auto' | 'light' | 'dark' | 'orange';

const VARIANT_BACKGROUNDS: Record<PictogramVariant, string> = {
  auto: 'transparent',
  light: 'white',
  dark: 'black',
  orange: 'var(--orange-9)',
};

const VARIANTS: PictogramVariant[] = ['auto', 'light', 'dark', 'orange'];

type PictogramComponent = React.FC<{
  variant?: PictogramVariant;
  style?: React.CSSProperties;
}> & {
  category?: string;
};

interface PictogramEntry {
  name: string;
  Component: PictogramComponent;
}

// Pictograms are exported alongside icons from `@frosted-ui/icons`. They're
// distinguished by the `Pictogram` suffix and a `category` of `'Pictograms'`.
function getAllPictograms(): PictogramEntry[] {
  return Object.entries(Icons)
    .filter(([name, value]) => {
      if (typeof value !== 'function') return false;
      if (!name.endsWith('Pictogram')) return false;
      const cat = (value as PictogramComponent).category;
      return cat === undefined || cat === 'Pictograms';
    })
    .map(([name, Component]) => ({ name, Component: Component as PictogramComponent }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

const PICTOGRAM_TILE_SIZE = 140;

const meta = {
  title: 'Utilities/Pictograms',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const AllPictogramsComponent = () => {
  const pictograms = React.useMemo(() => getAllPictograms(), []);

  return (
    <div
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Text size="5" weight="bold">
          Pictograms
        </Text>
        <Text size="2" color="gray">
          {pictograms.length} pictograms. The <code>auto</code> tile (default) uses CSS{' '}
          <code>light-dark()</code> to follow the page color scheme. Toggle Storybook's theme
          between light and dark to watch it flip.
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {pictograms.map(({ name, Component }) => (
          <Card
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              padding: 16,
            }}
          >
            <Text size="2" weight="medium" style={{ fontFamily: 'var(--code-font-family, monospace)' }}>
              {name}
            </Text>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {VARIANTS.map((variant) => (
                <div
                  key={variant}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: PICTOGRAM_TILE_SIZE,
                      height: PICTOGRAM_TILE_SIZE,
                      borderRadius: 'var(--radius-2)',
                      background: VARIANT_BACKGROUNDS[variant],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <Component
                      variant={variant}
                      style={{ width: '100%', height: '100%', display: 'block' }}
                    />
                  </div>
                  <Text size="1" color="gray">
                    {variant}
                  </Text>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const AllPictograms: Story = {
  name: 'All Pictograms',
  render: () => <AllPictogramsComponent />,
};
