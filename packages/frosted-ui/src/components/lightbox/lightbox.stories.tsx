import type { Meta, StoryObj } from '@storybook/react';

import { ArrowUpFromBracket16, ChevronLeft16, ChevronRight16, Heart16, MessageBlank16, XMark16 } from '@frosted-ui/icons';
import React, { useRef, useState } from 'react';
import { Avatar, Badge, Button, Heading, IconButton, Lightbox, ScrollGallery, Separator, Text } from '..';

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
                  width: '90vw',
                  maxWidth: 900,
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
    <Lightbox.Root viewTransition>
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

function ImageGrid({ imgs }: { imgs: FeedPost['images'] }) {
  const count = imgs.length;
  const radius = 12;

  if (count === 1) {
    return (
      <Lightbox.Trigger index={0} style={{ ...feedTriggerBase, borderRadius: radius, width: '100%' }}>
        <img src={imgs[0].thumb} alt={imgs[0].alt} style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }} />
      </Lightbox.Trigger>
    );
  }

  if (count === 2) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, borderRadius: radius, overflow: 'hidden' }}>
        {imgs.map((img, i) => (
          <Lightbox.Trigger key={i} index={i} style={feedTriggerBase}>
            <img src={img.thumb} alt={img.alt} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }} />
          </Lightbox.Trigger>
        ))}
      </div>
    );
  }

  if (count === 3) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 2, borderRadius: radius, overflow: 'hidden', aspectRatio: '3/2' }}>
        <Lightbox.Trigger index={0} style={{ ...feedTriggerBase, gridRow: '1 / -1' }}>
          <img src={imgs[0].thumb} alt={imgs[0].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </Lightbox.Trigger>
        <Lightbox.Trigger index={1} style={feedTriggerBase}>
          <img src={imgs[1].thumb} alt={imgs[1].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </Lightbox.Trigger>
        <Lightbox.Trigger index={2} style={feedTriggerBase}>
          <img src={imgs[2].thumb} alt={imgs[2].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </Lightbox.Trigger>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 2, borderRadius: radius, overflow: 'hidden', aspectRatio: '3/2' }}>
      {imgs.slice(0, 4).map((img, i) => (
        <Lightbox.Trigger key={i} index={i} style={feedTriggerBase}>
          <img src={img.thumb} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </Lightbox.Trigger>
      ))}
    </div>
  );
}

function ActionBar({ stats }: { stats: FeedPost['stats'] }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-1)', marginTop: 'var(--space-3)' }}>
      {[
        { icon: <MessageBlank16 />, count: stats.replies, color: undefined },
        { icon: <Heart16 />, count: stats.likes, color: undefined },
        { icon: <ArrowUpFromBracket16 />, count: stats.shares, color: undefined },
      ].map((action, i) => (
        <button
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
            padding: 'var(--space-1) var(--space-2)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            borderRadius: 'var(--radius-2)',
            color: 'var(--gray-a11)',
            fontSize: 'var(--font-size-1)',
            lineHeight: 1,
            transition: 'background 120ms ease',
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gray-a3)'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'none'; }}
        >
          {action.icon}
          <span>{formatCount(action.count)}</span>
        </button>
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
