import type { Meta, StoryObj } from '@storybook/react';

import { ArrowUpFromBracket16, ChevronLeft16, ChevronRight16, GlobePin16, Heart16, Mail16, MessageBlank16, PlayFilled20, XMark16 } from '@frosted-ui/icons';
import React, { useRef, useState } from 'react';
import { Avatar, Badge, Button, Heading, IconButton, Lightbox, Link, ScrollGallery, Separator, Text } from '..';
import type { LightboxZoomRef } from './lightbox-zoom';

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
  border: 'none',
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
  <img src={src} alt={alt} style={{ width: '100%', height: 120, objectFit: 'cover',  borderRadius: 32, display: 'block' }} />
);

const FullImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} style={{ maxWidth: '90vw', maxHeight: '75vh', objectFit: 'contain', borderRadius: 8 }} />
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
                  border: value === i ? '2px solid var(--accent-9)' : '2px solid transparent',
                  borderRadius: 34,
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

export const WithScrollGallery: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <Lightbox.Root loop viewTransition value={activeIndex} onValueChange={(v) => setActiveIndex(v)}>
        <TriggerGrid>
          {images.map((img, i) => (
            <Lightbox.Trigger key={img.id} index={i} style={triggerStyle}>
              <ThumbnailImage src={img.thumb} alt={img.alt} />
            </Lightbox.Trigger>
          ))}
        </TriggerGrid>

        <Lightbox.Content aria-label="Photo gallery with scroll gallery">
          <CloseButton />

          <ScrollGallery.Root defaultValue={activeIndex} onValueChange={(v) => setActiveIndex(v)}>
            <Lightbox.ItemGroup
              render={<ScrollGallery.Viewport aria-label="Full-size images" />}
              preload={images.length}
              style={{
                overflowX: 'auto',
                overscrollBehaviorX: 'contain',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
              }}
            >
              {images.map((img, i) => (
                <Lightbox.Item
                  key={img.id}
                  index={i}
                  caption={img.caption}
                  render={<ScrollGallery.Item />}
                style={{
                  position: 'relative',
                  inset: 'auto',
                  visibility: 'visible',
                  animation: 'none',
                  scrollSnapAlign: 'center',
                  flexShrink: 0,
                  width: '100vw',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 var(--space-5)',
                  boxSizing: 'border-box',
                }}
                >
                  <FullImage src={img.src} alt={img.alt} />
                </Lightbox.Item>
              ))}
            </Lightbox.ItemGroup>

            <CaptionText />

            <ScrollGallery.ScrollMarkerGroup
              aria-label="Photo thumbnails"
              style={{ display: 'flex', gap: 'var(--space-2)', padding: '0 var(--space-3) var(--space-3)', justifyContent: 'center' }}
            >
              {images.map((img, i) => (
                <ScrollGallery.ScrollMarker
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
            </ScrollGallery.ScrollMarkerGroup>
          </ScrollGallery.Root>
        </Lightbox.Content>
      </Lightbox.Root>
    );
  },
};

const articleImages = [
  {
    id: 'hero',
    src: 'https://picsum.photos/seed/art-hero/1400/700',
    inline: 'https://picsum.photos/seed/art-hero/800/400',
    alt: 'Aerial view of the Lofoten coastline',
    caption: 'The rugged coastline of Lofoten stretches into the Norwegian Sea',
  },
  {
    id: 'village',
    src: 'https://picsum.photos/seed/art-village/1400/900',
    inline: 'https://picsum.photos/seed/art-village/800/500',
    alt: 'Red fishing huts along the waterfront',
    caption: 'Traditional rorbuer (fishing cabins) in Hamnøy, dating back centuries',
  },
  {
    id: 'mountain',
    src: 'https://picsum.photos/seed/art-mountain/1400/900',
    inline: 'https://picsum.photos/seed/art-mountain/800/500',
    alt: 'Snow-capped peak reflected in still water',
    caption: 'Olstinden peak mirrored in Reinefjorden at dawn',
  },
  {
    id: 'beach',
    src: 'https://picsum.photos/seed/art-beach/1400/700',
    inline: 'https://picsum.photos/seed/art-beach/800/400',
    alt: 'Turquoise water on a white sand beach',
    caption: 'Haukland Beach — often called the most beautiful beach above the Arctic Circle',
  },
  {
    id: 'aurora',
    src: 'https://picsum.photos/seed/art-aurora/1400/900',
    inline: 'https://picsum.photos/seed/art-aurora/800/500',
    alt: 'Green northern lights dancing over the sea',
    caption: 'Aurora borealis over Uttakleiv Beach, visible from September to March',
  },
  {
    id: 'boats',
    src: 'https://picsum.photos/seed/art-boats/1400/700',
    inline: 'https://picsum.photos/seed/art-boats/800/400',
    alt: 'Fishing boats moored in a calm harbour',
    caption: 'The harbour at Reine — the heart of Lofoten\'s fishing heritage',
  },
];

const ArticleImage = ({ index, image, float }: { index: number; image: typeof articleImages[number]; float?: 'left' | 'right' }) => {
  const isFloated = !!float;
  return (
    <figure
      style={{
        margin: isFloated ? 'var(--space-2) 0' : 'var(--space-5) 0',
        ...(float === 'left' && { float: 'left', marginRight: 'var(--space-5)', width: '55%' }),
        ...(float === 'right' && { float: 'right', marginLeft: 'var(--space-5)', width: '55%' }),
      }}
    >
      <Lightbox.Trigger index={index} style={{ ...triggerStyle, display: 'block', width: '100%' }}>
        <img
          src={image.inline}
          alt={image.alt}
          style={{ width: '100%', borderRadius: 12, display: 'block' }}
        />
      </Lightbox.Trigger>
      <Text render={<figcaption />} size="1" color="gray" style={{ marginTop: 'var(--space-2)', fontStyle: 'italic' }}>
        {image.caption}
      </Text>
    </figure>
  );
};

export const WithinArticle: Story = {
  name: 'Within Article',
  render: () => (
    <Lightbox.Root viewTransition scrollTriggerIntoView={{ type: 'onChange', behavior: 'smooth' }}>
      <article style={{ maxWidth: 680, margin: '0 auto', lineHeight: 1.7 }}>
        <Heading size="7" style={{ marginBottom: 'var(--space-2)' }}>
          Lofoten: Where the Mountains Meet the Sea
        </Heading>
        <Text size="2" color="gray" style={{ display: 'block', marginBottom: 'var(--space-5)' }}>
          A photographic journey through Norway's most dramatic archipelago
        </Text>

        <Separator size="4" style={{ marginBottom: 'var(--space-5)' }} />

        <Text render={<p />} size="3" style={{ marginBottom: 'var(--space-4)' }}>
          Rising abruptly from the Norwegian Sea, the Lofoten Islands are a study in contrasts.
          Jagged granite peaks soar above sheltered fishing villages, while white-sand beaches
          sit beneath Arctic skies. Despite lying well above the Arctic Circle, Lofoten enjoys
          a remarkably mild climate thanks to the Gulf Stream — winter temperatures rarely
          drop below -5°C, and summer brings the midnight sun for weeks on end.
        </Text>

        <ArticleImage index={0} image={articleImages[0]} />

        <ArticleImage index={1} image={articleImages[1]} float="right" />

        <Text render={<p />} size="3" style={{ marginBottom: 'var(--space-4)' }}>
          The archipelago stretches roughly 200 kilometres from the mainland, connected by a
          series of bridges and tunnels that make it possible to drive the entire chain. Along
          the way, every bend in the road reveals another postcard vista — a red rorbuer
          reflected in glassy water, a dramatic headland catching the last light.
        </Text>

        <Text render={<p />} size="3" style={{ marginBottom: 'var(--space-4)' }}>
          Fishing has shaped these islands for over a thousand years. The annual cod migration —
          the skrei — brought wealth and culture to even the most remote settlements. Today,
          wooden drying racks (hjell) still dominate the landscape from February to June,
          their skeletal frames hung with thousands of split cod destined to become stockfish,
          Norway's oldest export.
        </Text>

        <Heading size="5" style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)', clear: 'both' }}>
          The Mountains
        </Heading>

        <ArticleImage index={2} image={articleImages[2]} float="left" />

        <Text render={<p />} size="3" style={{ marginBottom: 'var(--space-4)' }}>
          Lofoten's peaks are modest by Alpine standards — the highest, Higravstinden, reaches
          just 1,161 metres — but their proximity to the sea makes them feel immense. Ridgelines
          launch almost vertically from the shoreline, and many of the most rewarding hikes
          start at sea level. Reinebringen, perhaps the most famous, climbs 448 metres via a
          recently built Sherpa staircase and rewards hikers with a panorama that frequently
          appears on "best views in the world" lists.
        </Text>

        <Text render={<p />} size="3" style={{ marginBottom: 'var(--space-4)' }}>
          In winter, the mountains take on an entirely different character. Snow softens the
          granite, avalanche paths stripe the slopes, and the low-angle Arctic light paints
          everything in shades of pink and blue. Ski touring is increasingly popular, with
          descents that end at the water's edge — you can literally ski from summit to sea.
        </Text>

        <Heading size="5" style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)', clear: 'both' }}>
          The Beaches
        </Heading>

        <Text render={<p />} size="3" style={{ marginBottom: 'var(--space-4)' }}>
          It seems improbable, but some of the world's most beautiful beaches lie above 68°N.
          Haukland, Uttakleiv, and Kvalvika could be mistaken for the Caribbean if it weren't
          for the snow-dusted mountains framing them. The water's turquoise tint is real — caused
          by the white sand bottom and the clarity of the Arctic Sea — though a swim will quickly
          remind you that this is not, in fact, the tropics.
        </Text>

        <ArticleImage index={3} image={articleImages[3]} />

        <Text render={<p />} size="3" style={{ marginBottom: 'var(--space-4)' }}>
          Surfers have discovered these beaches too. Unstad, on the northern coast, has become
          one of the world's most northerly surf spots, offering consistent swells and a
          backdrop that no other break on the planet can match. In winter, hardy surfers ride
          waves under the northern lights.
        </Text>

        <Heading size="5" style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
          The Light
        </Heading>

        <ArticleImage index={4} image={articleImages[4]} float="right" />

        <Text render={<p />} size="3" style={{ marginBottom: 'var(--space-4)' }}>
          Photographers flock to Lofoten for the light. From late May to mid-July, the sun never
          sets, casting a warm golden glow that rolls around the horizon through the night.
          In the polar night of December and January, the sun never rises, but the twilight
          hours produce extraordinary pastel skies that last for hours. And then there's the aurora.
        </Text>

        <Text render={<p />} size="3" style={{ marginBottom: 'var(--space-4)' }}>
          From September through March, the northern lights dance across Lofoten's skies with
          remarkable frequency. The islands' position within the auroral oval, combined with
          their relatively dry climate and dark skies, makes them one of the best places on
          Earth to witness the phenomenon.
        </Text>

        <Heading size="5" style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)', clear: 'both' }}>
          Looking Ahead
        </Heading>

        <ArticleImage index={5} image={articleImages[5]} float="left" />

        <Text render={<p />} size="3" style={{ marginBottom: 'var(--space-4)' }}>
          Tourism has grown rapidly in recent years, bringing both economic opportunity and
          environmental pressure. The communities of Lofoten are navigating a careful balance:
          welcoming visitors while preserving the pristine landscape and traditional way of life
          that make the islands special. Sustainable tourism initiatives, strict building codes,
          and a deep cultural connection to the sea offer reasons for optimism.
        </Text>

        <Text render={<p />} size="3" style={{ clear: 'both' }}>
          Whether you come for the hiking, the fishing, the surfing, or simply to stand in awe
          of the scenery, Lofoten has a way of resetting your sense of scale. In a world that
          often feels thoroughly mapped and explored, these islands retain a wildness that is
          increasingly rare — and utterly unforgettable.
        </Text>
      </article>

      <Lightbox.Content aria-label="Article photos">
        <CloseButton />

        <Lightbox.ItemGroup>
          {articleImages.map((img, i) => (
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

/* =============================================================================
 * SOCIAL FEED
 * Each post is its own Lightbox.Root with 1-4 image attachments in different
 * grid layouts. Tests multiple independent lightbox instances on one page,
 * varied trigger geometries, and scroll position recovery.
 * ========================================================================== */

interface FeedPost {
  id: string;
  user: { name: string; handle: string; avatar: string; initials: string };
  text: string;
  time: string;
  images: { src: string; thumb: string; alt: string }[];
  stats: { replies: number; likes: number; shares: number };
}

const feedPosts: FeedPost[] = [
  {
    id: 'post-1',
    user: { name: 'Elena Vasquez', handle: '@elenavsq', avatar: 'https://i.pravatar.cc/150?u=elena', initials: 'EV' },
    text: 'Spent the weekend exploring the old quarter. Every alley has a story — and apparently, a very photogenic cat.',
    time: '2h',
    images: [
      { src: 'https://picsum.photos/seed/feed1a/1200/800', thumb: 'https://picsum.photos/seed/feed1a/600/400', alt: 'Narrow alley with hanging laundry' },
    ],
    stats: { replies: 12, likes: 284, shares: 31 },
  },
  {
    id: 'post-2',
    user: { name: 'Marcus Chen', handle: '@marcusc', avatar: 'https://i.pravatar.cc/150?u=marcus', initials: 'MC' },
    text: 'New studio setup is finally complete. Natural light in the morning, controlled lighting at night. Couldn\'t be happier with how these turned out.',
    time: '5h',
    images: [
      { src: 'https://picsum.photos/seed/feed2a/1200/800', thumb: 'https://picsum.photos/seed/feed2a/600/400', alt: 'Bright studio with large windows' },
      { src: 'https://picsum.photos/seed/feed2b/1200/800', thumb: 'https://picsum.photos/seed/feed2b/600/400', alt: 'Studio setup with ring light at night' },
    ],
    stats: { replies: 45, likes: 1203, shares: 89 },
  },
  {
    id: 'post-3',
    user: { name: 'Aisha Patel', handle: '@aishapatel', avatar: 'https://i.pravatar.cc/150?u=aisha', initials: 'AP' },
    text: 'Food market finds from this morning. Everything was so fresh the vendors were still arranging displays when I arrived. Got there at 6am and it was worth every lost minute of sleep.',
    time: '8h',
    images: [
      { src: 'https://picsum.photos/seed/feed3a/1200/900', thumb: 'https://picsum.photos/seed/feed3a/600/450', alt: 'Colourful spice stall' },
      { src: 'https://picsum.photos/seed/feed3b/1200/900', thumb: 'https://picsum.photos/seed/feed3b/600/450', alt: 'Fresh fruit arranged in pyramids' },
      { src: 'https://picsum.photos/seed/feed3c/900/1200', thumb: 'https://picsum.photos/seed/feed3c/450/600', alt: 'Baker pulling bread from a clay oven' },
    ],
    stats: { replies: 28, likes: 892, shares: 67 },
  },
  {
    id: 'post-4',
    user: { name: 'James Okafor', handle: '@jamesokafor', avatar: 'https://i.pravatar.cc/150?u=james', initials: 'JO' },
    text: 'Architecture walk through the brutalist district. Say what you will about the aesthetic — the geometry is unreal in the right light.',
    time: '12h',
    images: [
      { src: 'https://picsum.photos/seed/feed4a/1200/800', thumb: 'https://picsum.photos/seed/feed4a/600/400', alt: 'Concrete building with geometric shadows' },
      { src: 'https://picsum.photos/seed/feed4b/800/1200', thumb: 'https://picsum.photos/seed/feed4b/400/600', alt: 'Spiral staircase viewed from below' },
      { src: 'https://picsum.photos/seed/feed4c/1200/800', thumb: 'https://picsum.photos/seed/feed4c/600/400', alt: 'Repeating balcony pattern on a tower block' },
      { src: 'https://picsum.photos/seed/feed4d/800/1200', thumb: 'https://picsum.photos/seed/feed4d/400/600', alt: 'Sunlight cutting through a concrete overhang' },
    ],
    stats: { replies: 63, likes: 2147, shares: 312 },
  },
  {
    id: 'post-5',
    user: { name: 'Sofia Lindgren', handle: '@sofialind', avatar: 'https://i.pravatar.cc/150?u=sofia', initials: 'SL' },
    text: 'First snowfall of the season, and naturally I had my camera. The way the light hits fresh powder at golden hour is something else entirely.',
    time: '1d',
    images: [
      { src: 'https://picsum.photos/seed/feed5a/1200/800', thumb: 'https://picsum.photos/seed/feed5a/600/400', alt: 'Snow-covered pine forest at sunset' },
      { src: 'https://picsum.photos/seed/feed5b/1200/800', thumb: 'https://picsum.photos/seed/feed5b/600/400', alt: 'Footprints in fresh snow leading to a cabin' },
    ],
    stats: { replies: 34, likes: 1567, shares: 201 },
  },
];

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  return String(n);
}

const feedTriggerBase: React.CSSProperties = {
  padding: 0,
  border: 'none',
  cursor: 'pointer',
  background: 'none',
  display: 'block',
  overflow: 'hidden',
};

function cornerRadius(index: number, count: number, r: number): string {
  // Maps each cell position to the outer corners it occupies in the grid.
  // Inner edges get 0 radius; outer corners get the full radius.
  if (count === 2) {
    return index === 0 ? `${r}px 0 0 ${r}px` : `0 ${r}px ${r}px 0`;
  }
  if (count === 3) {
    if (index === 0) return `${r}px 0 0 ${r}px`;
    if (index === 1) return `0 ${r}px 0 0`;
    return `0 0 ${r}px 0`;
  }
  if (count === 4) {
    const corners = [`${r}px 0 0 0`, `0 ${r}px 0 0`, `0 0 0 ${r}px`, `0 0 ${r}px 0`];
    return corners[index];
  }
  return `${r}px`;
}

function ImageGrid({ imgs }: { imgs: FeedPost['images'] }) {
  const count = imgs.length;
  const r = 12;

  if (count === 1) {
    return (
      <Lightbox.Trigger index={0} style={{ ...feedTriggerBase, width: '100%' }}>
        <img src={imgs[0].thumb} alt={imgs[0].alt} style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block', borderRadius: r }} />
      </Lightbox.Trigger>
    );
  }

  if (count === 2) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        {imgs.map((img, i) => (
          <Lightbox.Trigger key={i} index={i} style={feedTriggerBase}>
            <img src={img.thumb} alt={img.alt} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', borderRadius: cornerRadius(i, 2, r) }} />
          </Lightbox.Trigger>
        ))}
      </div>
    );
  }

  if (count === 3) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 2, aspectRatio: '3/2' }}>
        <Lightbox.Trigger index={0} style={{ ...feedTriggerBase, gridRow: '1 / -1' }}>
          <img src={imgs[0].thumb} alt={imgs[0].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: cornerRadius(0, 3, r) }} />
        </Lightbox.Trigger>
        <Lightbox.Trigger index={1} style={feedTriggerBase}>
          <img src={imgs[1].thumb} alt={imgs[1].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: cornerRadius(1, 3, r) }} />
        </Lightbox.Trigger>
        <Lightbox.Trigger index={2} style={feedTriggerBase}>
          <img src={imgs[2].thumb} alt={imgs[2].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: cornerRadius(2, 3, r) }} />
        </Lightbox.Trigger>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 2, aspectRatio: '3/2' }}>
      {imgs.slice(0, 4).map((img, i) => (
        <Lightbox.Trigger key={i} index={i} style={feedTriggerBase}>
          <img src={img.thumb} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: cornerRadius(i, 4, r) }} />
        </Lightbox.Trigger>
      ))}
    </div>
  );
}

function ActionBar({ stats }: { stats: FeedPost['stats'] }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-1)', marginTop: 'var(--space-3)', marginLeft: 'calc(-1 * var(--space-2))' }}>
      {[
        { icon: <MessageBlank16 />, count: stats.replies },
        { icon: <Heart16 />, count: stats.likes },
        { icon: <ArrowUpFromBracket16 />, count: stats.shares },
      ].map((action, i) => (
        <Button key={i} size="2" variant="ghost" color="gray" >
          {action.icon}
          {formatCount(action.count)}
        </Button>
      ))}
    </div>
  );
}

function FeedPostCard({ post }: { post: FeedPost }) {
  return (
    <Lightbox.Root viewTransition>
      <article style={{ display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-4) 0' }}>
        <div style={{ flexShrink: 0, paddingTop: 2 }}>
          <Avatar
            size="3"
            src={post.user.avatar}
            fallback={post.user.initials}
            shape="circle"
          />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <Text size="2" weight="bold">{post.user.name}</Text>
            <Text size="2" color="gray">{post.user.handle}</Text>
            <Text size="1" color="gray">·</Text>
            <Text size="1" color="gray">{post.time}</Text>
          </div>

          <Text render={<p />} size="2" style={{ margin: 'var(--space-1) 0 var(--space-3)', lineHeight: 1.5 }}>
            {post.text}
          </Text>

          <ImageGrid imgs={post.images} />
          <ActionBar stats={post.stats} />
        </div>
      </article>

      <Lightbox.Content aria-label={`Photos by ${post.user.name}`}>
        <CloseButton />

        <Lightbox.ItemGroup>
          {post.images.map((img, i) => (
            <Lightbox.Item key={i} index={i}>
              <FullImage src={img.src} alt={img.alt} />
            </Lightbox.Item>
          ))}
        </Lightbox.ItemGroup>

        <NavControls />
      </Lightbox.Content>
    </Lightbox.Root>
  );
}

export const SocialFeed: Story = {
  name: 'Social Feed',
  render: () => (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ padding: 'var(--space-4) 0 var(--space-2)', borderBottom: '1px solid var(--gray-a4)' }}>
        <Heading size="5">Home</Heading>
      </div>

      {feedPosts.map((post, i) => (
        <React.Fragment key={post.id}>
          <FeedPostCard post={post} />
          {i < feedPosts.length - 1 && (
            <Separator size="4" />
          )}
        </React.Fragment>
      ))}
    </div>
  ),
};

/* =============================================================================
 * DESIGN FILE INSPECTOR
 * Dense masonry grid of 30+ design screens. Opening the lightbox enters a
 * presentation mode with scroll gallery. Tests: many items, varied trigger
 * sizes, scroll gallery sync, and morphing back to small thumbnails.
 * ========================================================================== */

const screenCategories = ['Dashboard', 'Settings', 'Profile', 'Onboarding', 'Checkout', 'Analytics'] as const;

const designScreens = Array.from({ length: 32 }, (_, i) => {
  const isPortrait = i % 5 === 1 || i % 5 === 3;
  const w = isPortrait ? 800 : 1400;
  const h = isPortrait ? 1200 : 900;
  const category = screenCategories[i % screenCategories.length];
  const variant = Math.floor(i / screenCategories.length) + 1;
  return {
    id: `screen-${i}`,
    src: `https://picsum.photos/seed/design${i}/${w}/${h}`,
    thumb: `https://picsum.photos/seed/design${i}/${Math.round(w / 3)}/${Math.round(h / 3)}`,
    alt: `${category} — variant ${variant}`,
    caption: `${category} v${variant} — ${isPortrait ? 'Mobile' : 'Desktop'}`,
    category,
    isPortrait,
  };
});

function MasonryGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        columns: '220px',
        columnGap: 'var(--space-3)',
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
}

function ScreenCard({ screen, index }: { screen: typeof designScreens[number]; index: number }) {
  return (
    <div style={{ breakInside: 'avoid', marginBottom: 'var(--space-3)' }}>
      <Lightbox.Trigger
        index={index}
        style={{
          ...triggerStyle,
          display: 'block',
          width: '100%',
          borderRadius: 8,
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 0 0 1px var(--gray-a3)',
          transition: 'box-shadow 150ms ease, transform 150ms ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12), 0 0 0 1px var(--gray-a4)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08), 0 0 0 1px var(--gray-a3)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src={screen.thumb}
          alt={screen.alt}
          style={{ width: '100%', display: 'block', borderRadius: 8 }}
          loading="lazy"
        />
      </Lightbox.Trigger>
      <div style={{ padding: 'var(--space-2) var(--space-1)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Text size="1" weight="medium" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {screen.alt}
        </Text>
        <Badge size="1" variant="soft" color="gray" style={{ flexShrink: 0, marginLeft: 'var(--space-2)' }}>
          {screen.isPortrait ? 'Mobile' : 'Desktop'}
        </Badge>
      </div>
    </div>
  );
}

/* =============================================================================
 * REAL ESTATE LISTING
 * Airbnb/Zillow-style property page with hero image grid, listing details,
 * agent card, and amenities. Lightbox opens a scroll gallery of all photos.
 * Tests: mixed trigger geometries in a single layout, scroll gallery sync,
 * scrollTriggerIntoView on a long page, and real-world property listing UX.
 * ========================================================================== */

const propertyPhotos = [
  { id: 'prop-hero', src: 'https://picsum.photos/seed/prop-hero/1400/900', thumb: 'https://picsum.photos/seed/prop-hero/800/500', alt: 'Living room with floor-to-ceiling windows', label: 'Living Room' },
  { id: 'prop-kitchen', src: 'https://picsum.photos/seed/prop-kitchen/1400/900', thumb: 'https://picsum.photos/seed/prop-kitchen/600/400', alt: 'Modern kitchen with marble island', label: 'Kitchen' },
  { id: 'prop-bedroom', src: 'https://picsum.photos/seed/prop-bed/1400/900', thumb: 'https://picsum.photos/seed/prop-bed/600/400', alt: 'Primary bedroom with en-suite balcony', label: 'Primary Bedroom' },
  { id: 'prop-bath', src: 'https://picsum.photos/seed/prop-bath/1400/900', thumb: 'https://picsum.photos/seed/prop-bath/600/400', alt: 'Spa-style bathroom with freestanding tub', label: 'Bathroom' },
  { id: 'prop-terrace', src: 'https://picsum.photos/seed/prop-terrace/1400/900', thumb: 'https://picsum.photos/seed/prop-terrace/600/400', alt: 'Rooftop terrace with city views', label: 'Terrace' },
  { id: 'prop-dining', src: 'https://picsum.photos/seed/prop-dining/1400/900', thumb: 'https://picsum.photos/seed/prop-dining/600/400', alt: 'Dining area with designer lighting', label: 'Dining' },
  { id: 'prop-office', src: 'https://picsum.photos/seed/prop-office/1400/900', thumb: 'https://picsum.photos/seed/prop-office/600/400', alt: 'Home office with built-in shelving', label: 'Office' },
  { id: 'prop-pool', src: 'https://picsum.photos/seed/prop-pool/1400/900', thumb: 'https://picsum.photos/seed/prop-pool/600/400', alt: 'Infinity pool overlooking the valley', label: 'Pool' },
  { id: 'prop-garden', src: 'https://picsum.photos/seed/prop-garden/1400/900', thumb: 'https://picsum.photos/seed/prop-garden/600/400', alt: 'Landscaped garden with mature olive trees', label: 'Garden' },
  { id: 'prop-exterior', src: 'https://picsum.photos/seed/prop-ext/1400/900', thumb: 'https://picsum.photos/seed/prop-ext/600/400', alt: 'Front elevation at dusk with warm lighting', label: 'Exterior' },
];

const amenities = [
  'Central Air Conditioning', 'Heated Floors', 'Smart Home System', 'Wine Cellar',
  'EV Charger', 'Security System', 'Elevator Access', 'Guest Suite',
  'Outdoor Kitchen', 'Fire Pit', 'Sauna', 'Fiber Internet',
];

function heroCornerRadius(index: number, r: number): string {
  // 5-cell grid: index 0 = full left column, 1 = top-middle, 2 = top-right, 3 = bottom-middle, 4 = bottom-right
  const map: Record<number, string> = {
    0: `${r}px 0 0 ${r}px`,
    1: '0',
    2: `0 ${r}px 0 0`,
    3: '0',
    4: `0 0 ${r}px 0`,
  };
  return map[index] ?? '0';
}

function HeroGrid() {
  const heroR = 12;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: 4,
        aspectRatio: '2.2 / 1',
      }}
    >
      <Lightbox.Trigger index={0} style={{ ...triggerStyle, gridRow: '1 / -1', display: 'block' }}>
        <img src={propertyPhotos[0].thumb} alt={propertyPhotos[0].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: heroCornerRadius(0, heroR) }} />
      </Lightbox.Trigger>
      {propertyPhotos.slice(1, 5).map((photo, i) => (
        <Lightbox.Trigger key={photo.id} index={i + 1} style={{ ...triggerStyle, display: 'block' }}>
          <img src={photo.thumb} alt={photo.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: heroCornerRadius(i + 1, heroR) }} />
        </Lightbox.Trigger>
      ))}
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Text size="6" weight="bold" style={{ display: 'block', lineHeight: 1 }}>{value}</Text>
      <Text size="2" color="gray" style={{ display: 'block', marginTop: 'var(--space-1)' }}>{label}</Text>
    </div>
  );
}

function RemainingPhotosGrid() {
  return (
    <div>
      <Heading size="4" style={{ marginBottom: 'var(--space-4)' }}>All Photos</Heading>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-3)',
        }}
      >
        {propertyPhotos.slice(5).map((photo, i) => (
          <Lightbox.Trigger
            key={photo.id}
            index={i + 5}
            style={{ ...triggerStyle, display: 'block' }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={photo.thumb}
                alt={photo.alt}
                style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block', borderRadius: 8 }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 'var(--space-4) var(--space-3) var(--space-2)',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                borderRadius: '0 0 8px 8px',
              }}>
                <Text size="1" weight="medium" style={{ color: 'white' }}>{photo.label}</Text>
              </div>
            </div>
          </Lightbox.Trigger>
        ))}
      </div>
    </div>
  );
}

export const RealEstateListing: Story = {
  name: 'Real Estate Listing',
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <Lightbox.Root
        viewTransition
        loop
        value={activeIndex}
        onValueChange={(v) => setActiveIndex(v)}
        scrollTriggerIntoView={{ type: 'onClose', behavior: 'instant' }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto', padding: 'var(--space-4) 0 var(--space-8)' }}>
          <HeroGrid />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 'var(--space-5)', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 320 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                <Badge size="1" variant="soft" color="green">Active</Badge>
                <Text size="1" color="gray">Listed 3 days ago</Text>
              </div>

              <Heading size="7" style={{ marginBottom: 'var(--space-1)' }}>
                The Olive Grove Residence
              </Heading>
              <Text size="3" color="gray" style={{ display: 'block', marginBottom: 'var(--space-4)' }}>
                742 Hillcrest Drive, Montecito, CA 93108
              </Text>

              <div style={{ display: 'flex', gap: 'var(--space-6)', padding: 'var(--space-4) 0', borderTop: '1px solid var(--gray-a4)', borderBottom: '1px solid var(--gray-a4)' }}>
                <StatItem value="5" label="Bedrooms" />
                <StatItem value="4.5" label="Bathrooms" />
                <StatItem value="4,850" label="Sq Ft" />
                <StatItem value="0.8" label="Acres" />
              </div>
            </div>

            <div style={{
              flexShrink: 0,
              width: 280,
              padding: 'var(--space-4)',
              borderRadius: 12,
              border: '1px solid var(--gray-a4)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
            }}>
              <Text size="7" weight="bold" style={{ display: 'block', lineHeight: 1 }}>$4,250,000</Text>
              <Text size="2" color="gray" style={{ display: 'block' }}>
                Est. $18,420/mo with 20% down
              </Text>
              <Separator size="4" />
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Avatar size="3" src="https://i.pravatar.cc/150?u=agent-claire" fallback="CR" shape="circle" />
                <div>
                  <Text size="2" weight="bold" style={{ display: 'block' }}>Claire Rousseau</Text>
                  <Text size="1" color="gray">Montecito Luxury Realty</Text>
                </div>
              </div>
              <Button size="2" variant="solid">Contact Agent</Button>
              <Button size="2" variant="surface">Schedule Tour</Button>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <Heading size="4" style={{ marginBottom: 'var(--space-3)' }}>About This Property</Heading>
            <Text render={<p />} size="3" style={{ lineHeight: 1.7, marginBottom: 'var(--space-3)' }}>
              Perched on a sun-drenched hillside with unobstructed ocean and mountain views,
              The Olive Grove Residence is a masterful blend of contemporary architecture and
              Mediterranean warmth. Designed by acclaimed architect Rafael Mendes, the home
              flows seamlessly between indoor and outdoor living through walls of retractable
              glass that frame the Santa Ynez Mountains to the north and the Pacific to the south.
            </Text>
            <Text render={<p />} size="3" style={{ lineHeight: 1.7, marginBottom: 'var(--space-3)' }}>
              The open-plan living and dining area features 12-foot ceilings, white oak floors,
              and a sculptural fireplace that anchors the space. The chef's kitchen is outfitted
              with Gaggenau appliances, a waterfall marble island, and a butler's pantry with
              wine refrigeration. Five bedroom suites are spread across two levels, with the
              primary occupying the entire upper wing — complete with a private terrace, dual
              walk-in closets, and a spa bathroom with soaking tub overlooking the garden.
            </Text>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <Heading size="4" style={{ marginBottom: 'var(--space-3)' }}>Features &amp; Amenities</Heading>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2) var(--space-4)' }}>
              {amenities.map((a) => (
                <Text key={a} size="2" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-9)', flexShrink: 0 }} />
                  {a}
                </Text>
              ))}
            </div>
          </div>

          <Separator size="4" style={{ margin: 'var(--space-6) 0' }} />

          <RemainingPhotosGrid />

          <div style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
            <Text size="2" color="gray">
              {propertyPhotos.length} photos · Listing courtesy of Montecito Luxury Realty ·{' '}
              <Link href="#" size="2">Report this listing</Link>
            </Text>
          </div>
        </div>

        <Lightbox.Content aria-label="Property photos">
          <CloseButton />

          <div style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)', zIndex: 1 }}>
            <Lightbox.Counter>
              {({ current, total }) => (
                <Text size="2" style={{ color: 'rgba(255,255,255,0.7)', fontVariantNumeric: 'tabular-nums' }}>
                  {current} / {total}
                </Text>
              )}
            </Lightbox.Counter>
          </div>

          <ScrollGallery.Root defaultValue={activeIndex} onValueChange={(v) => setActiveIndex(v)}>
            <Lightbox.ItemGroup
              render={<ScrollGallery.Viewport aria-label="Property photos" />}
              preload={propertyPhotos.length}
              style={{
                overflowX: 'auto',
                overscrollBehaviorX: 'contain',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
              }}
            >
              {propertyPhotos.map((photo, i) => (
                <Lightbox.Item
                  key={photo.id}
                  index={i}
                  caption={`${photo.label} — The Olive Grove Residence`}
                  render={<ScrollGallery.Item />}
                  style={{
                    position: 'relative',
                    inset: 'auto',
                    visibility: 'visible',
                    animation: 'none',
                    scrollSnapAlign: 'center',
                    flexShrink: 0,
                    width: '85vw',
                    maxWidth: 900,
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: 8 }}
                  />
                </Lightbox.Item>
              ))}
            </Lightbox.ItemGroup>

            <CaptionText />

            <ScrollGallery.ScrollMarkerGroup
              aria-label="Property photo thumbnails"
              style={{
                display: 'flex',
                gap: 'var(--space-2)',
                padding: '0 var(--space-3) var(--space-3)',
                justifyContent: 'center',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                maxWidth: '100vw',
              }}
            >
              {propertyPhotos.map((photo, i) => (
                <ScrollGallery.ScrollMarker
                  key={photo.id}
                  index={i}
                  render={(props, state) => (
                    <button
                      {...props}
                      style={{
                        width: 56,
                        height: 38,
                        borderRadius: 4,
                        overflow: 'hidden',
                        border: state.active ? '2px solid white' : '2px solid transparent',
                        padding: 0,
                        cursor: 'pointer',
                        opacity: state.active ? 1 : 0.4,
                        transition: 'opacity 150ms, border-color 150ms',
                        background: 'none',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={photo.thumb}
                        alt={photo.alt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </button>
                  )}
                />
              ))}
            </ScrollGallery.ScrollMarkerGroup>
          </ScrollGallery.Root>
        </Lightbox.Content>
      </Lightbox.Root>
    );
  },
};

/* =============================================================================
 * COLOR PALETTE
 * Flat color swatches with no images visible — clicking a swatch morphs the
 * solid rectangle into a full photograph dominated by that hue. Demonstrates
 * non-image triggers morphing into images via view transitions.
 * ========================================================================== */

const colorPalette = [
  { id: 'cerulean', name: 'Cerulean', hex: '#2a7ab5', family: 'Blue', src: 'https://picsum.photos/seed/color-cerulean/1400/900', alt: 'Clear blue sky over a calm ocean' },
  { id: 'ochre', name: 'Ochre', hex: '#c58b2c', family: 'Yellow', src: 'https://picsum.photos/seed/color-ochre/1400/900', alt: 'Golden wheat field at sunset' },
  { id: 'vermillion', name: 'Vermillion', hex: '#c93c20', family: 'Red', src: 'https://picsum.photos/seed/color-vermillion/1400/900', alt: 'Red autumn leaves on dark branches' },
  { id: 'sage', name: 'Sage', hex: '#7a9a6d', family: 'Green', src: 'https://picsum.photos/seed/color-sage/1400/900', alt: 'Morning mist in a dense forest' },
  { id: 'slate', name: 'Slate', hex: '#5e6b7a', family: 'Gray', src: 'https://picsum.photos/seed/color-slate/1400/900', alt: 'Wet stone wall in the rain' },
  { id: 'plum', name: 'Plum', hex: '#7b3f72', family: 'Purple', src: 'https://picsum.photos/seed/color-plum/1400/900', alt: 'Lavender field stretching to the horizon' },
  { id: 'coral', name: 'Coral', hex: '#e07555', family: 'Orange', src: 'https://picsum.photos/seed/color-coral/1400/900', alt: 'Desert canyon glowing at golden hour' },
  { id: 'midnight', name: 'Midnight', hex: '#1e2a3a', family: 'Navy', src: 'https://picsum.photos/seed/color-midnight/1400/900', alt: 'Starry night sky over silhouetted mountains' },
  { id: 'blush', name: 'Blush', hex: '#d4918b', family: 'Pink', src: 'https://picsum.photos/seed/color-blush/1400/900', alt: 'Cherry blossoms against a soft pink sky' },
  { id: 'sienna', name: 'Sienna', hex: '#8b5e3c', family: 'Brown', src: 'https://picsum.photos/seed/color-sienna/1400/900', alt: 'Rustic wooden dock on a still lake' },
  { id: 'teal', name: 'Teal', hex: '#2a8a8a', family: 'Teal', src: 'https://picsum.photos/seed/color-teal/1400/900', alt: 'Tropical lagoon with turquoise water' },
  { id: 'ivory', name: 'Ivory', hex: '#d6cdb7', family: 'Cream', src: 'https://picsum.photos/seed/color-ivory/1400/900', alt: 'Soft morning light on white sand dunes' },
];

function SwatchCard({ color, index }: { color: typeof colorPalette[number]; index: number }) {
  return (
    <Lightbox.Trigger
      index={index}
      style={{
        ...triggerStyle,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        width: '100%',
      }}
    >
      <div
        data-lightbox-morph
        style={{
          background: color.hex,
          aspectRatio: '3 / 2',
          borderRadius: 12,
          width: '100%',
        }}
      />
      <div style={{ padding: 'var(--space-2) var(--space-1)' }}>
        <Text size="2" weight="medium" style={{ display: 'block' }}>{color.name}</Text>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text size="1" color="gray">{color.family}</Text>
          <Text size="1" color="gray" style={{ fontFamily: 'var(--code-font-family)' }}>{color.hex}</Text>
        </div>
      </div>
    </Lightbox.Trigger>
  );
}

export const ColorPalette: Story = {
  name: 'Color Palette',
  render: () => (
    <Lightbox.Root viewTransition loop>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: 'var(--space-4) 0' }}>
        <div style={{ marginBottom: 'var(--space-5)' }}>
          <Heading size="6" style={{ marginBottom: 'var(--space-1)' }}>Chromatic</Heading>
          <Text size="3" color="gray" style={{ display: 'block' }}>
            A curated palette of colors found in nature. Click any swatch to reveal its photograph.
          </Text>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-4)',
          }}
        >
          {colorPalette.map((color, i) => (
            <SwatchCard key={color.id} color={color} index={i} />
          ))}
        </div>
      </div>

      <Lightbox.Content aria-label="Color photographs">
        <CloseButton />

        <Lightbox.ItemGroup>
          {colorPalette.map((color, i) => (
            <Lightbox.Item key={color.id} index={i} caption={`${color.name} — ${color.alt}`}>
              <img
                src={color.src}
                alt={color.alt}
                style={{
                  maxWidth: '90vw',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: 8,
                }}
              />
            </Lightbox.Item>
          ))}
        </Lightbox.ItemGroup>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-4)',
          padding: 'var(--space-3)',
        }}>
          <Lightbox.Previous render={<IconButton size="2" variant="ghost" color="gray" highContrast style={{ color: 'white' }} />}>
            <ChevronLeft16 />
          </Lightbox.Previous>

          <Lightbox.Counter>
            {({ current, total }) => {
              const color = colorPalette[current - 1];
              return (
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', minWidth: 180, justifyContent: 'center' }}>
                  <div style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: color?.hex,
                    border: '2px solid rgba(255,255,255,0.3)',
                    flexShrink: 0,
                  }} />
                  <Text size="2" weight="medium" style={{ color: 'white' }}>
                    {color?.name}
                  </Text>
                  <Text size="2" style={{ color: 'rgba(255,255,255,0.5)', fontVariantNumeric: 'tabular-nums' }}>
                    {current} / {total}
                  </Text>
                </div>
              );
            }}
          </Lightbox.Counter>

          <Lightbox.Next render={<IconButton size="2" variant="ghost" color="gray" highContrast style={{ color: 'white' }} />}>
            <ChevronRight16 />
          </Lightbox.Next>
        </div>

        <CaptionText />
      </Lightbox.Content>
    </Lightbox.Root>
  ),
};

export const DesignFileInspector: Story = {
  name: 'Design File Inspector',
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <Lightbox.Root viewTransition value={activeIndex} onValueChange={(v) => setActiveIndex(v)} loop scrollTriggerIntoView={{ type: 'onClose', behavior: 'instant' }}>
        <div style={{ padding: 'var(--space-4) 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto var(--space-5)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <div>
              <Heading size="6">Design System — App Screens</Heading>
              <Text size="2" color="gray" style={{ display: 'block', marginTop: 'var(--space-1)' }}>
                {designScreens.length} screens across {screenCategories.length} categories
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              {screenCategories.map((cat) => (
                <Badge key={cat} size="1" variant="surface" color="gray">{cat}</Badge>
              ))}
            </div>
          </div>

          <MasonryGrid>
            {designScreens.map((screen, i) => (
              <ScreenCard key={screen.id} screen={screen} index={i} />
            ))}
          </MasonryGrid>
        </div>

        <Lightbox.Content aria-label="Design screen inspector">
          <CloseButton />

          <div style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)', zIndex: 1 }}>
            <Lightbox.Counter>
              {({ current, total }) => (
                <Text size="2" style={{ color: 'rgba(255,255,255,0.7)', fontVariantNumeric: 'tabular-nums' }}>
                  {current} / {total}
                </Text>
              )}
            </Lightbox.Counter>
          </div>

          <ScrollGallery.Root defaultValue={activeIndex} onValueChange={(v) => setActiveIndex(v)} orientation="vertical">
            <div style={{ display: 'flex', flex: 1, minHeight: 0, width: '100%' }}>
              {/* Main vertical scroll area */}
              <Lightbox.ItemGroup
                render={<ScrollGallery.Viewport aria-label="Design screens" />}
                preload={designScreens.length}
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  overscrollBehaviorY: 'contain',
                  scrollSnapType: 'y mandatory',
                  scrollbarWidth: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {designScreens.map((screen, i) => (
                  <Lightbox.Item
                    key={screen.id}
                    index={i}
                    caption={screen.caption}
                    render={<ScrollGallery.Item />}
                    style={{
                      position: 'relative',
                      inset: 'auto',
                      visibility: 'visible',
                      animation: 'none',
                      scrollSnapAlign: 'center',
                      flexShrink: 0,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 'var(--space-4)',
                      boxSizing: 'border-box',
                    }}
                  >
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 8 }}
                    />
                  </Lightbox.Item>
                ))}
              </Lightbox.ItemGroup>

              {/* Right sidebar: vertical thumbnails */}
              <ScrollGallery.ScrollMarkerGroup
                aria-label="Screen thumbnails"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  padding: 'var(--space-3)',
                  overflowY: 'auto',
                  scrollbarWidth: 'none',
                  width: 64,
                  flexShrink: 0,
                  alignItems: 'center',
                }}
              >
                {designScreens.map((screen, i) => (
                  <ScrollGallery.ScrollMarker
                    key={screen.id}
                    index={i}
                    render={(props, state) => (
                      <button
                        {...props}
                        style={{
                          width: screen.isPortrait ? 32 : 48,
                          height: screen.isPortrait ? 48 : 32,
                          borderRadius: 4,
                          overflow: 'hidden',
                          border: state.active ? '2px solid white' : '2px solid transparent',
                          padding: 0,
                          cursor: 'pointer',
                          opacity: state.active ? 1 : 0.4,
                          transition: 'opacity 150ms, border-color 150ms',
                          background: 'none',
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={screen.thumb}
                          alt={screen.alt}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          loading="lazy"
                        />
                      </button>
                    )}
                  />
                ))}
              </ScrollGallery.ScrollMarkerGroup>
            </div>

            <div style={{ padding: 'var(--space-2) var(--space-5)', textAlign: 'center' }}>
              <Lightbox.Caption render={<Text size="2" color="gray" />} />
            </div>
          </ScrollGallery.Root>
        </Lightbox.Content>
      </Lightbox.Root>
    );
  },
};

/* =============================================================================
 * FILM TRAILERS
 * Movie poster grid where each poster morphs into a fullscreen video player.
 * Tests: video elements in lightbox items, auto-play on active, poster-to-video
 * morph, and pause on navigate.
 * ========================================================================== */

const films = [
  {
    id: 'bbb',
    title: 'Big Buck Bunny',
    year: 2008,
    genre: 'Animation',
    duration: '9 min',
    poster: 'https://picsum.photos/seed/film-bbb/400/600',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    synopsis: 'A giant rabbit deals with three bullying rodents in this landmark open-source animated short.',
  },
  {
    id: 'ed',
    title: 'Elephant Dream',
    year: 2006,
    genre: 'Sci-Fi',
    duration: '11 min',
    poster: 'https://picsum.photos/seed/film-ed/400/600',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    synopsis: 'Two characters explore a strange mechanical world, questioning reality and their relationship.',
  },
  {
    id: 'sintel',
    title: 'Sintel',
    year: 2010,
    genre: 'Fantasy',
    duration: '15 min',
    poster: 'https://picsum.photos/seed/film-sin/400/600',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    synopsis: 'A lone warrior searches for a baby dragon she befriended, facing dangerous adversaries along the way.',
  },
  {
    id: 'tos',
    title: 'Tears of Steel',
    year: 2012,
    genre: 'Sci-Fi',
    duration: '12 min',
    poster: 'https://picsum.photos/seed/film-tos/400/600',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    synopsis: 'In a dystopian future, a group of warriors and scientists attempt to reverse an apocalyptic event.',
  },
  {
    id: 'subaru',
    title: 'On Street & Dirt',
    year: 2020,
    genre: 'Documentary',
    duration: '1 min',
    poster: 'https://picsum.photos/seed/film-sub/400/600',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    synopsis: 'A short film showcasing the versatility of driving through diverse landscapes and terrain.',
  },
  {
    id: 'fbj',
    title: 'For Bigger Joyrides',
    year: 2014,
    genre: 'Action',
    duration: '1 min',
    poster: 'https://picsum.photos/seed/film-fbj/400/600',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    synopsis: 'A high-octane teaser that puts you behind the wheel for an adrenaline-pumping ride.',
  },
];

function FilmCard({ film, index }: { film: (typeof films)[number]; index: number }) {
  return (
    <Lightbox.Trigger
      index={index}
      style={{ display: 'block', textDecoration: 'none', border: 'none', background: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
    >
      <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
        <img
          data-lightbox-morph
          src={film.poster}
          alt={film.title}
          style={{
            display: 'block',
            width: '100%',
            aspectRatio: '2 / 3',
            objectFit: 'cover',
            borderRadius: 12,
          }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.25)',
            opacity: 0,
            transition: 'opacity 200ms ease',
            borderRadius: 12,
          }}
          className="film-card-overlay"
        >
          <div style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
          }}>
            <PlayFilled20 />
          </div>
        </div>
      </div>
      <div style={{ padding: '10px 2px 0' }}>
        <Text size="2" weight="medium" style={{ display: 'block', lineHeight: 1.3 }}>
          {film.title}
        </Text>
        <Text size="1" color="gray">
          {film.year} · {film.genre}
        </Text>
      </div>
    </Lightbox.Trigger>
  );
}

function LightboxVideo({ src, poster, active }: { src: string; poster: string; active: boolean }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (active) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [active]);

  return (
    <video
      ref={videoRef}
      data-lightbox-morph
      src={src}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      style={{
        width: '100%',
        maxHeight: '80vh',
        borderRadius: 8,
        background: '#000',
        objectFit: 'contain',
      }}
    />
  );
}

export const FilmTrailers: Story = {
  name: 'Film Trailers',
  render: () => {
    return (
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ padding: 'var(--space-5) 0 var(--space-4)' }}>
          <Text size="1" weight="medium" color="gray" style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Now Streaming
          </Text>
          <Heading size="6" style={{ marginTop: 4 }}>
            Short Film Festival
          </Heading>
          <Text size="2" color="gray" style={{ marginTop: 8, display: 'block', maxWidth: 480 }}>
            A curated collection of award-winning open-source short films. Click any poster to watch the trailer.
          </Text>
        </div>

        <style>{`
          .film-card-overlay { opacity: 0 !important; }
          button:hover .film-card-overlay { opacity: 1 !important; }
        `}</style>

        <Lightbox.Root viewTransition>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
            }}
          >
            {films.map((film, i) => (
              <FilmCard key={film.id} film={film} index={i} />
            ))}
          </div>

          <Lightbox.Content>
            <div style={{
              position: 'absolute',
              top: 'var(--space-4)',
              right: 'var(--space-4)',
              zIndex: 10,
            }}>
              <Lightbox.Close render={<IconButton variant="ghost" color="gray" size="3" aria-label="Close" />}>
                <XMark16 />
              </Lightbox.Close>
            </div>

            <div style={{
              position: 'absolute',
              left: 'var(--space-4)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}>
              <Lightbox.Previous render={<IconButton variant="ghost" color="gray" size="3" aria-label="Previous" />}>
                <ChevronLeft16 />
              </Lightbox.Previous>
            </div>

            <div style={{
              position: 'absolute',
              right: 'var(--space-4)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}>
              <Lightbox.Next render={<IconButton variant="ghost" color="gray" size="3" aria-label="Next" />}>
                <ChevronRight16 />
              </Lightbox.Next>
            </div>

            <Lightbox.ItemGroup style={{ padding: '0 64px' }}>
              {films.map((film, i) => (
                <Lightbox.Item
                  key={film.id}
                  index={i}
                  caption={
                    <span>
                      <strong>{film.title}</strong> ({film.year}) — {film.synopsis}
                    </span>
                  }
                >
                  {({ active }) => (
                    <LightboxVideo src={film.video} poster={film.poster} active={active} />
                  )}
                </Lightbox.Item>
              ))}
            </Lightbox.ItemGroup>

            <div style={{ padding: 'var(--space-3) var(--space-5)', textAlign: 'center' }}>
              <Lightbox.Caption render={<Text size="2" color="gray" />} />
            </div>

            <div style={{ paddingBottom: 'var(--space-4)' }}>
              <Lightbox.Counter render={<Text size="1" color="gray" />} />
            </div>
          </Lightbox.Content>
        </Lightbox.Root>
      </div>
    );
  },
};

/* =============================================================================
 * TEAM DIRECTORY
 * Circular avatars morph into profile cards. Tests: non-rectangular triggers,
 * mixed content (photo + text + stats) in lightbox items, circle-to-rect morph.
 * ========================================================================== */

const teamMembers = [
  {
    id: 'sarah',
    name: 'Sarah Chen',
    role: 'Engineering Lead',
    location: 'San Francisco, CA',
    email: 'sarah@acme.dev',
    avatar: 'https://i.pravatar.cc/400?img=1',
    cover: 'https://picsum.photos/seed/team-sarah/1200/500',
    bio: 'Building distributed systems for the past decade. Previously at Stripe and Google. Passionate about developer tools and open source.',
    stats: { commits: '2,847', reviews: '1,203', projects: '14' },
    tags: ['Systems', 'Rust', 'Go'],
  },
  {
    id: 'marcus',
    name: 'Marcus Johnson',
    role: 'Senior Designer',
    location: 'Brooklyn, NY',
    email: 'marcus@acme.dev',
    avatar: 'https://i.pravatar.cc/400?img=3',
    cover: 'https://picsum.photos/seed/team-marcus/1200/500',
    bio: 'Design systems thinker with a love for motion and micro-interactions. Former lead designer at Figma. Believes every pixel tells a story.',
    stats: { commits: '982', reviews: '567', projects: '8' },
    tags: ['Design Systems', 'Motion', 'Figma'],
  },
  {
    id: 'priya',
    name: 'Priya Patel',
    role: 'Product Manager',
    location: 'London, UK',
    email: 'priya@acme.dev',
    avatar: 'https://i.pravatar.cc/400?img=5',
    cover: 'https://picsum.photos/seed/team-priya/1200/500',
    bio: 'Bridging the gap between users and code. 8 years in product across fintech and dev tools. Data-informed, user-obsessed.',
    stats: { commits: '341', reviews: '892', projects: '11' },
    tags: ['Product', 'Analytics', 'Strategy'],
  },
  {
    id: 'alex',
    name: 'Alex Rivera',
    role: 'Frontend Engineer',
    location: 'Austin, TX',
    email: 'alex@acme.dev',
    avatar: 'https://i.pravatar.cc/400?img=8',
    cover: 'https://picsum.photos/seed/team-alex/1200/500',
    bio: 'React nerd and accessibility advocate. Contributor to Radix UI and MDN. Believes the web should work for everyone.',
    stats: { commits: '3,102', reviews: '1,456', projects: '9' },
    tags: ['React', 'A11y', 'TypeScript'],
  },
  {
    id: 'yuki',
    name: 'Yuki Tanaka',
    role: 'Infrastructure',
    location: 'Tokyo, Japan',
    email: 'yuki@acme.dev',
    avatar: 'https://i.pravatar.cc/400?img=9',
    cover: 'https://picsum.photos/seed/team-yuki/1200/500',
    bio: 'Keeping the lights on and the deploys fast. Kubernetes whisperer. Automates everything, including the coffee machine.',
    stats: { commits: '1,678', reviews: '723', projects: '6' },
    tags: ['Kubernetes', 'Terraform', 'SRE'],
  },
  {
    id: 'elena',
    name: 'Elena Volkov',
    role: 'Staff Engineer',
    location: 'Berlin, Germany',
    email: 'elena@acme.dev',
    avatar: 'https://i.pravatar.cc/400?img=10',
    cover: 'https://picsum.photos/seed/team-elena/1200/500',
    bio: 'Compiler nerd turned web performance expert. Runs the perf guild and mentors junior engineers. Speaks at conferences about Core Web Vitals.',
    stats: { commits: '2,214', reviews: '1,890', projects: '12' },
    tags: ['Performance', 'WebAssembly', 'Mentorship'],
  },
  {
    id: 'omar',
    name: 'Omar Hassan',
    role: 'Backend Engineer',
    location: 'Toronto, Canada',
    email: 'omar@acme.dev',
    avatar: 'https://i.pravatar.cc/400?img=11',
    cover: 'https://picsum.photos/seed/team-omar/1200/500',
    bio: 'API architect who dreams in GraphQL schemas. Previously built real-time systems at Shopify. Dog dad and amateur chef.',
    stats: { commits: '1,956', reviews: '1,102', projects: '7' },
    tags: ['GraphQL', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'mei',
    name: 'Mei Lin',
    role: 'Data Engineer',
    location: 'Singapore',
    email: 'mei@acme.dev',
    avatar: 'https://i.pravatar.cc/400?img=16',
    cover: 'https://picsum.photos/seed/team-mei/1200/500',
    bio: 'Turning messy data into clean pipelines. Spark and Flink expert. Organizes the local PyData meetup and loves teaching workshops.',
    stats: { commits: '1,423', reviews: '645', projects: '5' },
    tags: ['Python', 'Spark', 'Data'],
  },
];

function ProfileCard({ member }: { member: (typeof teamMembers)[number] }) {
  return (
    <div
      data-lightbox-morph
      style={{
        background: 'var(--color-surface)',
        borderRadius: 16,
        overflow: 'hidden',
        maxWidth: 420,
        width: '90vw',
        boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
      }}
    >
      <div style={{ position: 'relative', height: 140, overflow: 'hidden' }}>
        <img
          src={member.cover}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, var(--color-surface) 0%, transparent 60%)',
        }} />
      </div>

      <div style={{
        marginTop: -48,
        padding: '0 var(--space-5) var(--space-5)',
        position: 'relative',
      }}>
        <img
          src={member.avatar}
          alt={member.name}
          style={{
            width: 80,
            height: 80,
            borderRadius: 16,
            objectFit: 'cover',
            border: '3px solid var(--color-surface)',
            display: 'block',
          }}
        />

        <div style={{ marginTop: 'var(--space-3)' }}>
          <Heading size="4">{member.name}</Heading>
          <Text size="2" color="gray" style={{ display: 'block', marginTop: 2 }}>
            {member.role}
          </Text>
        </div>

        <Text size="2" style={{ display: 'block', marginTop: 'var(--space-3)', lineHeight: 1.6 }}>
          {member.bio}
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-3)', flexWrap: 'wrap' }}>
          {member.tags.map((tag) => (
            <Badge key={tag} size="1" variant="surface" color="gray">{tag}</Badge>
          ))}
        </div>

        <Separator size="4" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }} />

        <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          {Object.entries(member.stats).map(([label, value]) => (
            <div key={label}>
              <Text size="4" weight="bold" style={{ display: 'block' }}>{value}</Text>
              <Text size="1" color="gray" style={{ textTransform: 'capitalize' }}>{label}</Text>
            </div>
          ))}
        </div>

        <Separator size="4" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <GlobePin16 style={{ color: 'var(--gray-a10)' }} />
            <Text size="2" color="gray">{member.location}</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Mail16 style={{ color: 'var(--gray-a10)' }} />
            <Text size="2" color="gray">{member.email}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export const TeamDirectory: Story = {
  name: 'Team Directory',
  render: () => {
    return (
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ padding: 'var(--space-5) 0 var(--space-4)' }}>
          <Text size="1" weight="medium" color="gray" style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            About Us
          </Text>
          <Heading size="6" style={{ marginTop: 4 }}>
            Meet the Team
          </Heading>
          <Text size="2" color="gray" style={{ marginTop: 8, display: 'block', maxWidth: 440 }}>
            The people behind Acme Dev Tools. Click anyone to learn more about them.
          </Text>
        </div>

        <Lightbox.Root viewTransition>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
            padding: 'var(--space-4) 0',
          }}>
            {teamMembers.map((member, i) => (
              <Lightbox.Trigger
                key={member.id}
                index={i}
                style={{
                  border: '1px solid var(--gray-a4)',
                  background: 'var(--color-surface)',
                  borderRadius: 16,
                  padding: 14,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  textAlign: 'left',
                  transition: 'background 150ms ease, border-color 150ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gray-a6)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--gray-a4)'; }}
              >
                <div data-lightbox-morph style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  overflow: 'hidden',
                  flexShrink: 0,
                  background: 'var(--gray-a3)',
                }}>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ minWidth: 0 }}>
                  <Text size="2" weight="medium" style={{ display: 'block', lineHeight: 1.3 }}>
                    {member.name}
                  </Text>
                  <Text size="1" color="gray">{member.role}</Text>
                </div>
              </Lightbox.Trigger>
            ))}
          </div>

          <Lightbox.Content>
            <div style={{
              position: 'absolute',
              top: 'var(--space-4)',
              right: 'var(--space-4)',
              zIndex: 10,
            }}>
              <Lightbox.Close render={<IconButton variant="ghost" color="gray" size="3" aria-label="Close" />}>
                <XMark16 />
              </Lightbox.Close>
            </div>

            <div style={{
              position: 'absolute',
              left: 'var(--space-4)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}>
              <Lightbox.Previous render={<IconButton variant="ghost" color="gray" size="3" aria-label="Previous" />}>
                <ChevronLeft16 />
              </Lightbox.Previous>
            </div>

            <div style={{
              position: 'absolute',
              right: 'var(--space-4)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}>
              <Lightbox.Next render={<IconButton variant="ghost" color="gray" size="3" aria-label="Next" />}>
                <ChevronRight16 />
              </Lightbox.Next>
            </div>

            <Lightbox.ItemGroup>
              {teamMembers.map((member, i) => (
                <Lightbox.Item key={member.id} index={i}>
                  <ProfileCard member={member} />
                </Lightbox.Item>
              ))}
            </Lightbox.ItemGroup>

            <div style={{ paddingBottom: 'var(--space-4)' }}>
              <Lightbox.Counter render={<Text size="1" color="gray" />} />
            </div>
          </Lightbox.Content>
        </Lightbox.Root>
      </div>
    );
  },
};

/* =============================================================================
 * LIFECYCLE CALLBACKS
 * Demonstrates onOpenChange vs onOpenChangeComplete timing.
 * ========================================================================== */

interface LogEntry {
  id: number;
  label: string;
  time: number;
  type: 'change' | 'complete';
}

export const LifecycleCallbacks: Story = {
  name: 'Lifecycle Callbacks',
  render: () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const startRef = useRef(0);
    const idRef = useRef(0);

    const addLog = (label: string, type: LogEntry['type']) => {
      const time = Math.round(performance.now() - startRef.current);
      setLogs((prev) => [...prev, { id: ++idRef.current, label, time, type }]);
    };

    return (
      <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <Lightbox.Root
          viewTransition
          onOpenChange={(open) => {
            if (open) startRef.current = performance.now();
            addLog(open ? 'onOpenChange(true)' : 'onOpenChange(false)', 'change');
          }}
          onOpenChangeComplete={(open) => {
            addLog(open ? 'onOpenChangeComplete(true)' : 'onOpenChangeComplete(false)', 'complete');
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <Heading size="4">Click an image</Heading>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              {images.slice(0, 3).map((img, i) => (
                <Lightbox.Trigger key={img.id} index={i} style={triggerStyle}>
                  <img
                    src={img.thumb}
                    alt={img.alt}
                    style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 8, display: 'block' }}
                  />
                </Lightbox.Trigger>
              ))}
            </div>
            <Button variant="soft" color="gray" size="1" style={{ alignSelf: 'flex-start' }} onClick={() => setLogs([])}>
              Clear log
            </Button>
          </div>

          <Lightbox.Content aria-label="Lifecycle demo">
            <CloseButton />
            <Lightbox.ItemGroup>
              {images.slice(0, 3).map((img, i) => (
                <Lightbox.Item key={img.id} index={i}>
                  <img src={img.src} alt={img.alt} style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain' }} />
                </Lightbox.Item>
              ))}
            </Lightbox.ItemGroup>
            <NavControls />
          </Lightbox.Content>
        </Lightbox.Root>

        <div style={{
          minWidth: 320,
          background: 'var(--color-panel)',
          border: '1px solid var(--gray-a5)',
          borderRadius: 8,
          padding: 'var(--space-3)',
          fontFamily: 'var(--code-font-family)',
          fontSize: 'var(--font-size-1)',
          lineHeight: 'var(--line-height-3)',
          maxHeight: 300,
          overflowY: 'auto',
        }}>
          <Text size="2" weight="medium" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Event log</Text>
          {logs.length === 0 && <Text size="1" color="gray">No events yet. Open and close the lightbox.</Text>}
          {logs.map((log) => (
            <div key={log.id} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'baseline' }}>
              <Text size="1" color="gray" style={{ minWidth: 48, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                +{log.time}ms
              </Text>
              <Text size="1" style={{ color: log.type === 'change' ? 'var(--blue-11)' : 'var(--green-11)' }}>
                {log.label}
              </Text>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// Zoom
// ---------------------------------------------------------------------------

const zoomImages = [
  {
    src: 'https://picsum.photos/seed/zoom1/4000/2667',
    thumb: 'https://picsum.photos/seed/zoom1/400/267',
    alt: 'High-resolution landscape for zoom demo',
    caption: 'Pinch, scroll, double-click, or Cmd+/- to zoom',
  },
  {
    src: 'https://picsum.photos/seed/zoom2/4000/2667',
    thumb: 'https://picsum.photos/seed/zoom2/400/267',
    alt: 'High-resolution architecture for zoom demo',
    caption: 'Pan by dragging when zoomed in',
  },
  {
    src: 'https://picsum.photos/seed/zoom3/4000/2667',
    thumb: 'https://picsum.photos/seed/zoom3/400/267',
    alt: 'High-resolution nature for zoom demo',
    caption: 'Double-click to zoom in, double-click again to reset',
  },
];

export const WithZoom: Story = {
  name: 'With Zoom',
  render: () => {
    const zoomRef = useRef<LightboxZoomRef>(null);

    return (
      <Lightbox.Root viewTransition>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          {zoomImages.map((img, i) => (
            <Lightbox.Trigger key={img.src} index={i}>
              <img
                src={img.thumb}
                alt={img.alt}
                style={{ width: 200, height: 133, objectFit: 'cover', borderRadius: 8 }}
              />
            </Lightbox.Trigger>
          ))}
        </div>

        <Lightbox.Content aria-label="Zoom demo" style={{ padding: 'var(--space-4)' }}>
          <Lightbox.ItemGroup>
            {zoomImages.map((img, i) => (
              <Lightbox.Item key={img.src} index={i} caption={img.caption}>
                <Lightbox.Zoom
                  ref={i === 0 ? zoomRef : undefined}
                  maxZoom={6}
                  overlay={
                    <div style={{ position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)', zIndex: 10, display: 'flex', gap: 'var(--space-2)', pointerEvents: 'auto' }}>
                      <Lightbox.ZoomOut render={<IconButton variant="ghost" color="gray" size="2" />}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      </Lightbox.ZoomOut>
                      <Lightbox.ZoomIn render={<IconButton variant="ghost" color="gray" size="2" />}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      </Lightbox.ZoomIn>
                      <Lightbox.Close render={<IconButton variant="ghost" color="gray" size="2" />}>
                        <XMark16 />
                      </Lightbox.Close>
                    </div>
                  }
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </Lightbox.Zoom>
              </Lightbox.Item>
            ))}
          </Lightbox.ItemGroup>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3)' }}>
            <Lightbox.Previous render={<IconButton variant="ghost" color="gray" size="2" />}>
              <ChevronLeft16 />
            </Lightbox.Previous>
            <Lightbox.Counter />
            <Lightbox.Next render={<IconButton variant="ghost" color="gray" size="2" />}>
              <ChevronRight16 />
            </Lightbox.Next>
          </div>

          <Lightbox.Caption />
        </Lightbox.Content>
      </Lightbox.Root>
    );
  },
};
