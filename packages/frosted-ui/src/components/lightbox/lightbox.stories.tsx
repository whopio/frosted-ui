import type { Meta, StoryObj } from '@storybook/react';

import { ChevronLeft16, ChevronRight16, XMark16 } from '@frosted-ui/icons';
import React, { useRef, useState } from 'react';
import { Badge, Button, Heading, IconButton, Lightbox, Text } from '..';

const images = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/lb1/1200/800',
    thumb: 'https://picsum.photos/seed/lb1/200/200',
    alt: 'Mountain landscape at sunrise',
    caption: 'Mountain landscape at sunrise — Dolomites, Italy',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/lb2/1200/800',
    thumb: 'https://picsum.photos/seed/lb2/200/200',
    alt: 'Ocean waves crashing on rocks',
    caption: 'Ocean waves crashing on coastal rocks — Big Sur, California',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/lb3/1200/800',
    thumb: 'https://picsum.photos/seed/lb3/200/200',
    alt: 'Forest path in autumn',
    caption: 'Autumn forest path — Black Forest, Germany',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/lb4/1200/800',
    thumb: 'https://picsum.photos/seed/lb4/200/200',
    alt: 'City skyline at night',
    caption: 'City skyline at night — Tokyo, Japan',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/lb5/1200/800',
    thumb: 'https://picsum.photos/seed/lb5/200/200',
    alt: 'Desert sand dunes',
    caption: 'Sand dunes at golden hour — Sahara Desert',
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/lb6/1200/800',
    thumb: 'https://picsum.photos/seed/lb6/200/200',
    alt: 'Northern lights over a lake',
    caption: 'Aurora borealis — Lofoten, Norway',
  },
];

const triggerStyle: React.CSSProperties = {
  padding: 0,
  border: '2px solid transparent',
  borderRadius: 'var(--radius-2)',
  overflow: 'hidden',
  cursor: 'pointer',
  background: 'none',
};

const meta = {
  title: 'Components/Lightbox',
  component: Lightbox.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Lightbox.Root>;

export default meta;
type Story = StoryObj;

const CloseButton = () => (
  <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', zIndex: 1 }}>
    <Lightbox.Close render={<IconButton size="2" variant="ghost" color="gray" highContrast style={{ color: 'white' }} />}>
      <XMark16 />
    </Lightbox.Close>
  </div>
);

const NavControls = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3)' }}>
    <Lightbox.Previous render={<IconButton size="2" variant="ghost" color="gray" highContrast style={{ color: 'white' }} />}>
      <ChevronLeft16 />
    </Lightbox.Previous>

    <Lightbox.Counter>
      {({ current, total }) => (
        <Text size="2" style={{ color: 'rgba(255,255,255,0.7)', minWidth: 60, textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>
          {current} / {total}
        </Text>
      )}
    </Lightbox.Counter>

    <Lightbox.Next render={<IconButton size="2" variant="ghost" color="gray" highContrast style={{ color: 'white' }} />}>
      <ChevronRight16 />
    </Lightbox.Next>
  </div>
);

const CaptionText = () => (
  <Lightbox.Caption
    render={
      <Text
        size="2"
        style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', paddingBottom: 'var(--space-4)', minHeight: 24, display: 'block' }}
      />
    }
  />
);

const TriggerGrid = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)', maxWidth: 420 }}>
    {children}
  </div>
);

const ThumbnailImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block' }} />
);

const FullImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} style={{ maxWidth: '90vw', maxHeight: '75vh', objectFit: 'contain', borderRadius: 'var(--radius-2)' }} />
);

export const Default: Story = {
  render: () => (
    <Lightbox.Root viewTransition>
      <TriggerGrid>
        {images.map((img, i) => (
          <Lightbox.Trigger key={img.id} index={i} style={triggerStyle}>
            <ThumbnailImage src={img.thumb} alt={img.alt} />
          </Lightbox.Trigger>
        ))}
      </TriggerGrid>

      <Lightbox.Content aria-label="Photo gallery">
        <CloseButton />

        <Lightbox.ItemGroup>
          {images.map((img, i) => (
            <Lightbox.Item key={img.id} index={i} caption={img.caption}>
              <FullImage src={img.src} alt={img.alt} />
            </Lightbox.Item>
          ))}
        </Lightbox.ItemGroup>

        <NavControls />
        <CaptionText />
      </Lightbox.Content>
    </Lightbox.Root>
  ),
};

export const WithThumbnails: Story = {
  render: () => (
    <Lightbox.Root loop viewTransition>
      <TriggerGrid>
        {images.map((img, i) => (
          <Lightbox.Trigger key={img.id} index={i} style={triggerStyle}>
            <ThumbnailImage src={img.thumb} alt={img.alt} />
          </Lightbox.Trigger>
        ))}
      </TriggerGrid>

      <Lightbox.Content aria-label="Photo gallery with thumbnails">
        <CloseButton />

        <Lightbox.ItemGroup preload={2}>
          {images.map((img, i) => (
            <Lightbox.Item key={img.id} index={i} caption={img.caption}>
              <FullImage src={img.src} alt={img.alt} />
            </Lightbox.Item>
          ))}
        </Lightbox.ItemGroup>

        <NavControls />
        <CaptionText />

        <Lightbox.ThumbnailGroup
          aria-label="Photo thumbnails"
          style={{ display: 'flex', gap: 'var(--space-2)', padding: 'var(--space-3)', paddingTop: 0 }}
        >
          {images.map((img, i) => (
            <Lightbox.Thumbnail
              key={img.id}
              index={i}
              render={(props, state) => (
                <button
                  {...props}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 'var(--radius-2)',
                    overflow: 'hidden',
                    border: state.active ? '2px solid white' : '2px solid transparent',
                    padding: 0,
                    cursor: 'pointer',
                    opacity: state.active ? 1 : 0.5,
                    transition: 'opacity 150ms, border-color 150ms',
                    background: 'none',
                  }}
                >
                  <img src={img.thumb} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </button>
              )}
            />
          ))}
        </Lightbox.ThumbnailGroup>
      </Lightbox.Content>
    </Lightbox.Root>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    return (
      <div>
        <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-4)', alignItems: 'center' }}>
          <Text size="2">
            Active: <Badge size="1">{value}</Badge>
          </Text>
          <Text size="2">
            Open: <Badge size="1" color={open ? 'green' : 'gray'}>{String(open)}</Badge>
          </Text>
        </div>

        <Lightbox.Root open={open} onOpenChange={setOpen} value={value} onValueChange={(v) => setValue(v)} viewTransition>
          <TriggerGrid>
            {images.map((img, i) => (
              <Lightbox.Trigger
                key={img.id}
                index={i}
                style={{
                  ...triggerStyle,
                  borderColor: value === i ? 'var(--accent-9)' : 'transparent',
                  transition: 'border-color 150ms',
                }}
              >
                <ThumbnailImage src={img.thumb} alt={img.alt} />
              </Lightbox.Trigger>
            ))}
          </TriggerGrid>

          <Lightbox.Content aria-label="Controlled photo gallery">
            <CloseButton />

            <Lightbox.ItemGroup>
              {images.map((img, i) => (
                <Lightbox.Item key={img.id} index={i} caption={img.caption}>
                  <FullImage src={img.src} alt={img.alt} />
                </Lightbox.Item>
              ))}
            </Lightbox.ItemGroup>

            <NavControls />
            <CaptionText />
          </Lightbox.Content>
        </Lightbox.Root>
      </div>
    );
  },
};

export const ImperativeAPI: Story = {
  render: () => {
    const lightboxRef = useRef<Lightbox.LightboxRootRef>(null);

    return (
      <div>
        <Heading size="3" style={{ marginBottom: 'var(--space-3)' }}>Open by index</Heading>

        <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', flexWrap: 'wrap' }}>
          {images.map((_, i) => (
            <Button key={i} size="1" variant="soft" onClick={() => lightboxRef.current?.open(i)}>
              Photo {i + 1}
            </Button>
          ))}
        </div>

        <Lightbox.Root ref={lightboxRef} loop>
          <Lightbox.Content aria-label="Imperative lightbox">
            <CloseButton />

            <Lightbox.ItemGroup>
              {images.map((img, i) => (
                <Lightbox.Item key={img.id} index={i} caption={img.caption}>
                  <FullImage src={img.src} alt={img.alt} />
                </Lightbox.Item>
              ))}
            </Lightbox.ItemGroup>

            <NavControls />
            <CaptionText />
          </Lightbox.Content>
        </Lightbox.Root>
      </div>
    );
  },
};

export const LazyLoading: Story = {
  render: () => (
    <Lightbox.Root>
      <TriggerGrid>
        {images.map((img, i) => (
          <Lightbox.Trigger key={img.id} index={i} style={triggerStyle}>
            <ThumbnailImage src={img.thumb} alt={img.alt} />
          </Lightbox.Trigger>
        ))}
      </TriggerGrid>

      <Lightbox.Content aria-label="Lazy-loaded gallery">
        <CloseButton />

        <Lightbox.ItemGroup preload={0}>
          {images.map((img, i) => (
            <Lightbox.Item key={img.id} index={i} caption={`Lazy: ${img.caption}`}>
              {({ active }) =>
                active ? (
                  <FullImage src={img.src} alt={img.alt} />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 200, height: 150 }}>
                    <Text size="2" style={{ color: 'rgba(255,255,255,0.5)' }}>Loading…</Text>
                  </div>
                )
              }
            </Lightbox.Item>
          ))}
        </Lightbox.ItemGroup>

        <NavControls />
        <CaptionText />
      </Lightbox.Content>
    </Lightbox.Root>
  ),
};
