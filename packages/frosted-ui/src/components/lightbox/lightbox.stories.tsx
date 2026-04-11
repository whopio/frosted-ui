import type { Meta, StoryObj } from '@storybook/react';

import React, { useRef, useState } from 'react';
import { Badge, Button, Lightbox, Text } from '..';

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
  width: 120,
  background: 'none',
};

const closeStyle: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  border: 'none',
  background: 'rgba(255,255,255,0.15)',
  color: 'white',
  fontSize: 20,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(8px)',
};

const navStyle: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  border: 'none',
  background: 'rgba(255,255,255,0.15)',
  color: 'white',
  fontSize: 18,
  cursor: 'pointer',
  backdropFilter: 'blur(8px)',
};

const counterStyle: React.CSSProperties = {
  fontFamily: 'var(--code-font-family)',
  fontSize: 'var(--font-size-2)',
  color: 'rgba(255,255,255,0.7)',
  minWidth: 60,
  textAlign: 'center',
};

const captionStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.8)',
  fontSize: 'var(--font-size-2)',
  textAlign: 'center',
  paddingBottom: 'var(--space-4)',
  minHeight: 24,
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

export const Default: Story = {
  render: () => (
    <Lightbox.Root viewTransition>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)', maxWidth: 600 }}>
        {images.map((img, i) => (
          <Lightbox.Trigger key={img.id} index={i} style={triggerStyle}>
            <img
              src={img.thumb}
              alt={img.alt}
              style={{  height: 120, width: 120, objectFit: 'cover', display: 'block' }}
            />
          </Lightbox.Trigger>
        ))}
      </div>

      <Lightbox.Content aria-label="Photo gallery">
        <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', zIndex: 1 }}>
          <Lightbox.Close style={closeStyle}>✕</Lightbox.Close>
        </div>

        <Lightbox.ItemGroup>
          {images.map((img, i) => (
            <Lightbox.Item key={img.id} index={i} caption={img.caption}>
              <img
                src={img.src}
                alt={img.alt}
                style={{ maxWidth: '90vw', maxHeight: '75vh', objectFit: 'contain', borderRadius: 'var(--radius-2)' }}
              />
            </Lightbox.Item>
          ))}
        </Lightbox.ItemGroup>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3)', color: 'white' }}>
          <Lightbox.Previous style={navStyle}>←</Lightbox.Previous>
          <Lightbox.Counter style={counterStyle} />
          <Lightbox.Next style={navStyle}>→</Lightbox.Next>
        </div>

        <Lightbox.Caption style={captionStyle} />
      </Lightbox.Content>
    </Lightbox.Root>
  ),
};

export const WithThumbnails: Story = {
  render: () => (
    <Lightbox.Root loop viewTransition>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)', maxWidth: 600 }}>
        {images.map((img, i) => (
          <Lightbox.Trigger key={img.id} index={i} style={triggerStyle}>
            <img
              src={img.thumb}
              alt={img.alt}
              style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block' }}
            />
          </Lightbox.Trigger>
        ))}
      </div>

      <Lightbox.Content aria-label="Photo gallery with thumbnails">
        <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', zIndex: 1 }}>
          <Lightbox.Close style={closeStyle}>✕</Lightbox.Close>
        </div>

        <Lightbox.ItemGroup preload={2}>
          {images.map((img, i) => (
            <Lightbox.Item key={img.id} index={i} caption={img.caption}>
              <img
                src={img.src}
                alt={img.alt}
                style={{ maxWidth: '90vw', maxHeight: '65vh', objectFit: 'contain', borderRadius: 'var(--radius-2)' }}
              />
            </Lightbox.Item>
          ))}
        </Lightbox.ItemGroup>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3)', color: 'white' }}>
          <Lightbox.Previous style={navStyle}>←</Lightbox.Previous>

          <Lightbox.Counter>
            {({ current, total }) => (
              <span style={counterStyle}>
                Image {current} of {total}
              </span>
            )}
          </Lightbox.Counter>

          <Lightbox.Next style={navStyle}>→</Lightbox.Next>
        </div>

        <Lightbox.Caption style={{ ...captionStyle, paddingBottom: 0 }} />

        <Lightbox.ThumbnailGroup
          aria-label="Photo thumbnails"
          style={{ display: 'flex', gap: 'var(--space-2)', padding: 'var(--space-3)' }}
        >
          {images.map((img, i) => (
            <Lightbox.Thumbnail
              key={img.id}
              index={i}
              render={(props, state) => (
                <button
                  {...props}
                  style={{
                    width: 64,
                    height: 64,
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
                  <img
                    src={img.thumb}
                    alt={img.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
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
        <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', alignItems: 'center' }}>
          <Text size="2">
            Active: <Badge size="1">{value}</Badge>
          </Text>
          <Text size="2">
            Open: <Badge size="1" color={open ? 'green' : 'gray'}>{String(open)}</Badge>
          </Text>
        </div>

        <Lightbox.Root open={open} onOpenChange={setOpen} value={value} onValueChange={(v) => setValue(v)} viewTransition>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)', maxWidth: 600 }}>
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
                <img
                  src={img.thumb}
                  alt={img.alt}
                  style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block' }}
                />
              </Lightbox.Trigger>
            ))}
          </div>

          <Lightbox.Content aria-label="Controlled photo gallery">
            <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', zIndex: 1 }}>
              <Lightbox.Close style={closeStyle}>✕</Lightbox.Close>
            </div>

            <Lightbox.ItemGroup>
              {images.map((img, i) => (
                <Lightbox.Item key={img.id} index={i} caption={img.caption}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ maxWidth: '90vw', maxHeight: '75vh', objectFit: 'contain', borderRadius: 'var(--radius-2)' }}
                  />
                </Lightbox.Item>
              ))}
            </Lightbox.ItemGroup>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3)', color: 'white' }}>
              <Lightbox.Previous style={navStyle}>←</Lightbox.Previous>
              <Lightbox.Counter style={counterStyle} />
              <Lightbox.Next style={navStyle}>→</Lightbox.Next>
            </div>

            <Lightbox.Caption style={captionStyle} />
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
        <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
          {images.map((_, i) => (
            <Button key={i} size="1" variant="soft" onClick={() => lightboxRef.current?.open(i)}>
              Open #{i + 1}
            </Button>
          ))}
        </div>

        <Lightbox.Root ref={lightboxRef} loop>
          <Lightbox.Content aria-label="Imperative lightbox">
            <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', zIndex: 1 }}>
              <Lightbox.Close style={closeStyle}>✕</Lightbox.Close>
            </div>

            <Lightbox.ItemGroup>
              {images.map((img, i) => (
                <Lightbox.Item key={img.id} index={i} caption={img.caption}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ maxWidth: '90vw', maxHeight: '75vh', objectFit: 'contain', borderRadius: 'var(--radius-2)' }}
                  />
                </Lightbox.Item>
              ))}
            </Lightbox.ItemGroup>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3)', color: 'white' }}>
              <Lightbox.Previous style={navStyle}>←</Lightbox.Previous>
              <Lightbox.Counter style={counterStyle} />
              <Lightbox.Next style={navStyle}>→</Lightbox.Next>
            </div>

            <Lightbox.Caption style={captionStyle} />
          </Lightbox.Content>
        </Lightbox.Root>
      </div>
    );
  },
};

export const LazyLoading: Story = {
  render: () => (
    <Lightbox.Root>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)', maxWidth: 600 }}>
        {images.map((img, i) => (
          <Lightbox.Trigger key={img.id} index={i} style={triggerStyle}>
            <img src={img.thumb} alt={img.alt} style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block' }} />
          </Lightbox.Trigger>
        ))}
      </div>

      <Lightbox.Content aria-label="Lazy-loaded gallery">
        <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', zIndex: 1 }}>
          <Lightbox.Close style={closeStyle}>✕</Lightbox.Close>
        </div>

        <Lightbox.ItemGroup preload={0}>
          {images.map((img, i) => (
            <Lightbox.Item key={img.id} index={i} caption={`Lazy: ${img.caption}`}>
              {({ active }) =>
                active ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ maxWidth: '90vw', maxHeight: '75vh', objectFit: 'contain', borderRadius: 'var(--radius-2)' }}
                  />
                ) : (
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--font-size-2)' }}>Loading...</div>
                )
              }
            </Lightbox.Item>
          ))}
        </Lightbox.ItemGroup>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3)', color: 'white' }}>
          <Lightbox.Previous style={navStyle}>←</Lightbox.Previous>
          <Lightbox.Counter style={counterStyle} />
          <Lightbox.Next style={navStyle}>→</Lightbox.Next>
        </div>

        <Lightbox.Caption style={captionStyle} />
      </Lightbox.Content>
    </Lightbox.Root>
  ),
};
