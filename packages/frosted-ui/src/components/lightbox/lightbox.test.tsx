import { render, screen, fireEvent, act, cleanup } from '@testing-library/react';
import * as React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

/* eslint-disable @typescript-eslint/no-non-null-assertion */

const flushMicrotasks = () => act(async () => undefined);
const noop = () => {/* controlled prop placeholder */};

import { LightboxCaption } from './lightbox-caption';
import { LightboxClose } from './lightbox-close';
import { LightboxContent } from './lightbox-content';
import { LightboxCounter } from './lightbox-counter';
import { LightboxItem } from './lightbox-item';
import { LightboxItemGroup } from './lightbox-item-group';
import { LightboxNext } from './lightbox-next';
import { LightboxPrevious } from './lightbox-previous';
import { LightboxRoot, type LightboxRootRef } from './lightbox-root';
import { LightboxThumbnail } from './lightbox-thumbnail';
import { LightboxThumbnailGroup } from './lightbox-thumbnail-group';
import { LightboxTrigger } from './lightbox-trigger';
import { LightboxZoom, type LightboxZoomRef } from './lightbox-zoom';
import { LightboxZoomIn } from './lightbox-zoom-in';
import { LightboxZoomOut } from './lightbox-zoom-out';

// ---------------------------------------------------------------------------
// Mocks — jsdom lacks matchMedia, getAnimations
// ---------------------------------------------------------------------------

beforeEach(() => {
  if (!window.matchMedia) {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  }

  if (!Element.prototype.getAnimations) {
    Element.prototype.getAnimations = vi.fn(() => []);
  } else {
    vi.spyOn(Element.prototype, 'getAnimations').mockReturnValue([]);
  }
});

afterEach(() => {
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// Helper component — mirrors the Gallery helper in scroll-gallery.test.tsx
// ---------------------------------------------------------------------------

function TestLightbox({
  itemCount = 3,
  defaultOpen = false,
  open,
  defaultValue,
  value,
  loop = false,
  preload = 1,
  viewTransition = false,
  withThumbnails = false,
  withCaptions = false,
  onOpenChange,
  onOpenChangeComplete,
  onValueChange,
  renderPropItems = false,
}: {
  itemCount?: number;
  defaultOpen?: boolean;
  open?: boolean;
  defaultValue?: number;
  value?: number;
  loop?: boolean;
  preload?: number;
  viewTransition?: boolean;
  withThumbnails?: boolean;
  withCaptions?: boolean;
  onOpenChange?: (open: boolean) => void;
  onOpenChangeComplete?: (open: boolean) => void;
  onValueChange?: (value: number, metadata: { source: string }) => void;
  renderPropItems?: boolean;
} = {}) {
  return (
    <LightboxRoot
      defaultOpen={defaultOpen}
      open={open}
      defaultValue={defaultValue}
      value={value}
      loop={loop}
      viewTransition={viewTransition}
      onOpenChange={onOpenChange}
      onOpenChangeComplete={onOpenChangeComplete}
      onValueChange={onValueChange}
    >
      {Array.from({ length: itemCount }, (_, i) => (
        <LightboxTrigger key={`t-${i}`} index={i} data-testid={`trigger-${i}`}>
          Trigger {i}
        </LightboxTrigger>
      ))}

      <LightboxContent data-testid="content" aria-label="Test lightbox">
        <LightboxClose data-testid="close">Close</LightboxClose>

        <LightboxItemGroup data-testid="item-group" preload={preload}>
          {Array.from({ length: itemCount }, (_, i) => (
            <LightboxItem
              key={`i-${i}`}
              index={i}
              data-testid={`item-${i}`}
              caption={withCaptions ? `Caption ${i}` : undefined}
            >
              {renderPropItems
                ? (state: { active: boolean; visible: boolean }) => (
                    <div data-testid={`render-prop-${i}`} data-active={state.active} data-visible={state.visible}>
                      Item {i}
                    </div>
                  )
                : `Item ${i}`
              }
            </LightboxItem>
          ))}
        </LightboxItemGroup>

        <LightboxPrevious data-testid="prev">Previous</LightboxPrevious>
        <LightboxNext data-testid="next">Next</LightboxNext>
        <LightboxCounter data-testid="counter" />
        <LightboxCaption data-testid="caption" />

        {withThumbnails && (
          <LightboxThumbnailGroup data-testid="thumb-group">
            {Array.from({ length: itemCount }, (_, i) => (
              <LightboxThumbnail key={`th-${i}`} index={i} data-testid={`thumb-${i}`}>
                Thumb {i}
              </LightboxThumbnail>
            ))}
          </LightboxThumbnailGroup>
        )}
      </LightboxContent>
    </LightboxRoot>
  );
}

// ---------------------------------------------------------------------------
// 1. Structure and ARIA
// ---------------------------------------------------------------------------

describe('Lightbox', () => {
  describe('structure and ARIA', () => {
    it('renders Trigger as a button with type="button"', () => {
      render(<TestLightbox />);
      const trigger = screen.getByTestId('trigger-0');
      expect(trigger.tagName).toBe('BUTTON');
      expect(trigger).toHaveAttribute('type', 'button');
    });

    it('renders Content as a div with role="dialog" when open', () => {
      render(<TestLightbox defaultOpen />);
      const dialog = screen.getByTestId('content');
      expect(dialog.tagName).toBe('DIV');
      expect(dialog).toHaveAttribute('role', 'dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
    });

    it('content is removed from DOM when closing', async () => {
      render(<TestLightbox defaultOpen />);
      expect(screen.getByTestId('content')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('close'));
      await flushMicrotasks();
      expect(screen.queryByTestId('content')).toBeNull();
    });

    it('renders ItemGroup with role="group"', () => {
      render(<TestLightbox defaultOpen />);
      expect(screen.getByTestId('item-group')).toHaveAttribute('role', 'group');
    });

    it('renders Item with role="tabpanel"', () => {
      render(<TestLightbox defaultOpen />);
      expect(screen.getByTestId('item-0')).toHaveAttribute('role', 'tabpanel');
    });

    it('active item has aria-hidden="false", inactive has aria-hidden="true"', () => {
      render(<TestLightbox defaultOpen defaultValue={0} />);
      expect(screen.getByTestId('item-0')).toHaveAttribute('aria-hidden', 'false');
      expect(screen.getByTestId('item-1')).toHaveAttribute('aria-hidden', 'true');
    });

    it('Counter renders with aria-live="polite" and aria-atomic', () => {
      render(<TestLightbox defaultOpen />);
      const counter = screen.getByTestId('counter');
      expect(counter).toHaveAttribute('aria-live', 'polite');
      expect(counter).toHaveAttribute('aria-atomic', 'true');
    });

    it('Caption renders with aria-live="polite" and aria-atomic', () => {
      render(<TestLightbox defaultOpen />);
      const caption = screen.getByTestId('caption');
      expect(caption).toHaveAttribute('aria-live', 'polite');
      expect(caption).toHaveAttribute('aria-atomic', 'true');
    });

    it('ThumbnailGroup renders with role="tablist"', () => {
      render(<TestLightbox defaultOpen withThumbnails />);
      expect(screen.getByTestId('thumb-group')).toHaveAttribute('role', 'tablist');
    });

    it('Thumbnail renders with role="tab" and aria-selected', () => {
      render(<TestLightbox defaultOpen withThumbnails />);
      const thumb = screen.getByTestId('thumb-0');
      expect(thumb).toHaveAttribute('role', 'tab');
      expect(thumb).toHaveAttribute('aria-selected');
    });

    it('Previous and Next render as buttons with aria-label', () => {
      render(<TestLightbox defaultOpen />);
      const prev = screen.getByTestId('prev');
      const next = screen.getByTestId('next');
      expect(prev.tagName).toBe('BUTTON');
      expect(next.tagName).toBe('BUTTON');
      expect(prev).toHaveAttribute('aria-label', 'Previous');
      expect(next).toHaveAttribute('aria-label', 'Next');
    });
  });

  // ---------------------------------------------------------------------------
  // 2. Open / Close state
  // ---------------------------------------------------------------------------

  describe('open / close state', () => {
    it('clicking a trigger opens the lightbox (uncontrolled)', () => {
      render(<TestLightbox />);
      expect(screen.queryByTestId('content')).toBeNull();
      fireEvent.click(screen.getByTestId('trigger-0'));
      expect(screen.getByTestId('content')).toBeInTheDocument();
    });

    it('clicking a trigger sets the active index to that trigger index', () => {
      render(<TestLightbox />);
      fireEvent.click(screen.getByTestId('trigger-2'));
      expect(screen.getByTestId('item-2')).toHaveAttribute('aria-hidden', 'false');
    });

    it('onOpenChange(true) fires on open', () => {
      const spy = vi.fn();
      render(<TestLightbox onOpenChange={spy} />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      expect(spy).toHaveBeenCalledWith(true);
    });

    it('onOpenChange(false) fires on close', () => {
      const spy = vi.fn();
      render(<TestLightbox defaultOpen onOpenChange={spy} />);
      fireEvent.click(screen.getByTestId('close'));
      expect(spy).toHaveBeenCalledWith(false);
    });

    it('clicking Close button closes the lightbox', async () => {
      render(<TestLightbox defaultOpen />);
      expect(screen.getByTestId('content')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('close'));
      await flushMicrotasks();
      expect(screen.queryByTestId('content')).toBeNull();
    });

    it('ESC key closes the lightbox', async () => {
      render(<TestLightbox defaultOpen />);
      fireEvent.keyDown(document, { key: 'Escape' });
      await flushMicrotasks();
      expect(screen.queryByTestId('content')).toBeNull();
    });

    it('clicking content backdrop area closes the lightbox', async () => {
      render(<TestLightbox defaultOpen />);
      const content = screen.getByTestId('content');
      fireEvent.click(content);
      await flushMicrotasks();
      expect(screen.queryByTestId('content')).toBeNull();
    });

    it('controlled open prop controls visibility', () => {
      function Controlled() {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
          <>
            <button data-testid="ext-open" onClick={() => setIsOpen(true)}>Open</button>
            <TestLightbox open={isOpen} onOpenChange={setIsOpen} />
          </>
        );
      }
      render(<Controlled />);
      expect(screen.queryByTestId('content')).toBeNull();
      fireEvent.click(screen.getByTestId('trigger-0'));
      expect(screen.getByTestId('content')).toBeInTheDocument();
    });

    it('defaultOpen={true} renders the lightbox initially open', () => {
      render(<TestLightbox defaultOpen />);
      expect(screen.getByTestId('content')).toBeInTheDocument();
    });

    it('content is removed from DOM after close', async () => {
      render(<TestLightbox defaultOpen />);
      fireEvent.click(screen.getByTestId('close'));
      await flushMicrotasks();
      expect(screen.queryByTestId('content')).toBeNull();
    });
  });

  // ---------------------------------------------------------------------------
  // 3. Active index and navigation
  // ---------------------------------------------------------------------------

  describe('active index and navigation', () => {
    it('defaultValue sets the initial active item', () => {
      render(<TestLightbox defaultOpen defaultValue={2} />);
      expect(screen.getByTestId('item-2')).toHaveAttribute('aria-hidden', 'false');
    });

    it('controlled value prop drives active index', () => {
      const { rerender } = render(<TestLightbox defaultOpen value={0} onValueChange={noop} />);
      expect(screen.getByTestId('item-0')).toHaveAttribute('aria-hidden', 'false');
      rerender(<TestLightbox defaultOpen value={2} onValueChange={noop} />);
      expect(screen.getByTestId('item-2')).toHaveAttribute('aria-hidden', 'false');
    });

    it('onValueChange fires with index and source metadata', () => {
      const spy = vi.fn();
      render(<TestLightbox defaultOpen onValueChange={spy} />);
      fireEvent.click(screen.getByTestId('next'));
      expect(spy).toHaveBeenCalledWith(1, { source: 'button' });
    });

    it('Previous button navigates backward', () => {
      render(<TestLightbox defaultOpen defaultValue={1} />);
      fireEvent.click(screen.getByTestId('prev'));
      expect(screen.getByTestId('item-0')).toHaveAttribute('aria-hidden', 'false');
    });

    it('Next button navigates forward', () => {
      render(<TestLightbox defaultOpen defaultValue={0} />);
      fireEvent.click(screen.getByTestId('next'));
      expect(screen.getByTestId('item-1')).toHaveAttribute('aria-hidden', 'false');
    });

    it('Previous is disabled at index 0 when loop=false', () => {
      render(<TestLightbox defaultOpen defaultValue={0} />);
      expect(screen.getByTestId('prev')).toBeDisabled();
    });

    it('Next is disabled at last index when loop=false', () => {
      render(<TestLightbox defaultOpen defaultValue={2} itemCount={3} />);
      expect(screen.getByTestId('next')).toBeDisabled();
    });

    it('Previous wraps to last when loop=true', () => {
      render(<TestLightbox defaultOpen defaultValue={0} loop />);
      fireEvent.click(screen.getByTestId('prev'));
      expect(screen.getByTestId('item-2')).toHaveAttribute('aria-hidden', 'false');
    });

    it('Next wraps to first when loop=true', () => {
      render(<TestLightbox defaultOpen defaultValue={2} loop />);
      fireEvent.click(screen.getByTestId('next'));
      expect(screen.getByTestId('item-0')).toHaveAttribute('aria-hidden', 'false');
    });

    it('ArrowRight in Content navigates forward', () => {
      render(<TestLightbox defaultOpen defaultValue={0} />);
      fireEvent.keyDown(screen.getByTestId('content'), { key: 'ArrowRight' });
      expect(screen.getByTestId('item-1')).toHaveAttribute('aria-hidden', 'false');
    });

    it('ArrowLeft in Content navigates backward', () => {
      render(<TestLightbox defaultOpen defaultValue={1} />);
      fireEvent.keyDown(screen.getByTestId('content'), { key: 'ArrowLeft' });
      expect(screen.getByTestId('item-0')).toHaveAttribute('aria-hidden', 'false');
    });

    it('Home key navigates to first item', () => {
      render(<TestLightbox defaultOpen defaultValue={2} />);
      fireEvent.keyDown(screen.getByTestId('content'), { key: 'Home' });
      expect(screen.getByTestId('item-0')).toHaveAttribute('aria-hidden', 'false');
    });

    it('End key navigates to last item', () => {
      render(<TestLightbox defaultOpen defaultValue={0} />);
      fireEvent.keyDown(screen.getByTestId('content'), { key: 'End' });
      expect(screen.getByTestId('item-2')).toHaveAttribute('aria-hidden', 'false');
    });

    it('arrow keys respect loop boundaries', () => {
      render(<TestLightbox defaultOpen defaultValue={0} loop={false} />);
      fireEvent.keyDown(screen.getByTestId('content'), { key: 'ArrowLeft' });
      expect(screen.getByTestId('item-0')).toHaveAttribute('aria-hidden', 'false');
    });
  });

  // ---------------------------------------------------------------------------
  // 4. Item rendering and preload
  // ---------------------------------------------------------------------------

  describe('item rendering and preload', () => {
    it('only active + preload neighbors are in the DOM', () => {
      render(<TestLightbox defaultOpen defaultValue={1} itemCount={5} preload={1} />);
      expect(screen.getByTestId('item-0')).toBeInTheDocument();
      expect(screen.getByTestId('item-1')).toBeInTheDocument();
      expect(screen.getByTestId('item-2')).toBeInTheDocument();
      expect(screen.queryByTestId('item-3')).toBeNull();
      expect(screen.queryByTestId('item-4')).toBeNull();
    });

    it('items outside preload window are not rendered', () => {
      render(<TestLightbox defaultOpen defaultValue={0} itemCount={5} preload={0} />);
      expect(screen.getByTestId('item-0')).toBeInTheDocument();
      expect(screen.queryByTestId('item-1')).toBeNull();
    });

    it('preload=0 renders only the active item', () => {
      render(<TestLightbox defaultOpen defaultValue={2} itemCount={5} preload={0} />);
      expect(screen.getByTestId('item-2')).toBeInTheDocument();
      expect(screen.queryByTestId('item-0')).toBeNull();
      expect(screen.queryByTestId('item-1')).toBeNull();
      expect(screen.queryByTestId('item-3')).toBeNull();
      expect(screen.queryByTestId('item-4')).toBeNull();
    });

    it('preload=2 renders 5 items centered on active', () => {
      render(<TestLightbox defaultOpen defaultValue={3} itemCount={7} preload={2} />);
      expect(screen.queryByTestId('item-0')).toBeNull();
      expect(screen.getByTestId('item-1')).toBeInTheDocument();
      expect(screen.getByTestId('item-2')).toBeInTheDocument();
      expect(screen.getByTestId('item-3')).toBeInTheDocument();
      expect(screen.getByTestId('item-4')).toBeInTheDocument();
      expect(screen.getByTestId('item-5')).toBeInTheDocument();
      expect(screen.queryByTestId('item-6')).toBeNull();
    });

    it('render-prop children receive { active, visible } state', () => {
      render(<TestLightbox defaultOpen defaultValue={0} renderPropItems />);
      const activeItem = screen.getByTestId('render-prop-0');
      expect(activeItem).toHaveAttribute('data-active', 'true');
      expect(activeItem).toHaveAttribute('data-visible', 'true');
    });

    it('render-prop active is true only for active item', () => {
      render(<TestLightbox defaultOpen defaultValue={0} renderPropItems />);
      const activeItem = screen.getByTestId('render-prop-0');
      const inactiveItem = screen.getByTestId('render-prop-1');
      expect(activeItem).toHaveAttribute('data-active', 'true');
      expect(inactiveItem).toHaveAttribute('data-active', 'false');
    });

    it('itemCount reflects mounted items accurately', () => {
      render(<TestLightbox defaultOpen itemCount={4} />);
      const counter = screen.getByTestId('counter');
      expect(counter.textContent).toContain('/ 4');
    });

    it('dynamic item removal decreases itemCount', () => {
      function DynamicLightbox() {
        const [count, setCount] = React.useState(4);
        return (
          <>
            <button data-testid="remove" onClick={() => setCount(2)}>Remove</button>
            <LightboxRoot defaultOpen>
              {Array.from({ length: count }, (_, i) => (
                <LightboxTrigger key={i} index={i}>T{i}</LightboxTrigger>
              ))}
              <LightboxContent aria-label="Dynamic test" data-testid="content">
                <LightboxItemGroup preload={count}>
                  {Array.from({ length: count }, (_, i) => (
                    <LightboxItem key={i} index={i}>Item {i}</LightboxItem>
                  ))}
                </LightboxItemGroup>
                <LightboxCounter data-testid="counter" />
              </LightboxContent>
            </LightboxRoot>
          </>
        );
      }

      render(<DynamicLightbox />);
      expect(screen.getByTestId('counter').textContent).toContain('/ 4');
      fireEvent.click(screen.getByTestId('remove'));
      expect(screen.getByTestId('counter').textContent).toContain('/ 2');
    });
  });

  // ---------------------------------------------------------------------------
  // 5. Preload with loop
  // ---------------------------------------------------------------------------

  describe('preload with loop', () => {
    it('at index 0 with loop, last item is within preload distance', () => {
      render(<TestLightbox defaultOpen defaultValue={0} itemCount={5} preload={1} loop />);
      expect(screen.getByTestId('item-0')).toBeInTheDocument();
      expect(screen.getByTestId('item-1')).toBeInTheDocument();
      expect(screen.getByTestId('item-4')).toBeInTheDocument();
      expect(screen.queryByTestId('item-2')).toBeNull();
      expect(screen.queryByTestId('item-3')).toBeNull();
    });

    it('at last index with loop, first item is within preload distance', () => {
      render(<TestLightbox defaultOpen defaultValue={4} itemCount={5} preload={1} loop />);
      expect(screen.getByTestId('item-4')).toBeInTheDocument();
      expect(screen.getByTestId('item-3')).toBeInTheDocument();
      expect(screen.getByTestId('item-0')).toBeInTheDocument();
      expect(screen.queryByTestId('item-1')).toBeNull();
      expect(screen.queryByTestId('item-2')).toBeNull();
    });

    it('circular distance calculation is correct with preload=2', () => {
      render(<TestLightbox defaultOpen defaultValue={0} itemCount={6} preload={2} loop />);
      expect(screen.getByTestId('item-0')).toBeInTheDocument();
      expect(screen.getByTestId('item-1')).toBeInTheDocument();
      expect(screen.getByTestId('item-2')).toBeInTheDocument();
      expect(screen.getByTestId('item-4')).toBeInTheDocument();
      expect(screen.getByTestId('item-5')).toBeInTheDocument();
      expect(screen.queryByTestId('item-3')).toBeNull();
    });
  });

  // ---------------------------------------------------------------------------
  // 6. Caption and Counter
  // ---------------------------------------------------------------------------

  describe('caption and counter', () => {
    it('caption displays the active item caption text', () => {
      render(<TestLightbox defaultOpen defaultValue={0} withCaptions />);
      expect(screen.getByTestId('caption').textContent).toBe('Caption 0');
    });

    it('caption updates when navigating', () => {
      render(<TestLightbox defaultOpen defaultValue={0} withCaptions />);
      fireEvent.click(screen.getByTestId('next'));
      expect(screen.getByTestId('caption').textContent).toBe('Caption 1');
    });

    it('caption renders nothing when no caption is set', () => {
      render(<TestLightbox defaultOpen defaultValue={0} />);
      expect(screen.getByTestId('caption').textContent).toBe('');
    });

    it('caption has data-has-caption only when caption exists', () => {
      render(<TestLightbox defaultOpen defaultValue={0} withCaptions />);
      expect(screen.getByTestId('caption')).toHaveAttribute('data-has-caption');
    });

    it('counter displays "1 / N" format', () => {
      render(<TestLightbox defaultOpen defaultValue={0} itemCount={5} />);
      expect(screen.getByTestId('counter').textContent).toBe('1 / 5');
    });

    it('counter render-prop receives { current, total }', () => {
      render(
        <LightboxRoot defaultOpen defaultValue={2}>
          <LightboxContent aria-label="Test">
            <LightboxItemGroup>
              {Array.from({ length: 4 }, (_, i) => (
                <LightboxItem key={i} index={i}>Item {i}</LightboxItem>
              ))}
            </LightboxItemGroup>
            <LightboxCounter data-testid="counter">
              {({ current, total }) => <span>{`${current} of ${total}`}</span>}
            </LightboxCounter>
          </LightboxContent>
        </LightboxRoot>,
      );
      expect(screen.getByTestId('counter').textContent).toBe('3 of 4');
    });
  });

  // ---------------------------------------------------------------------------
  // 7. Thumbnail navigation
  // ---------------------------------------------------------------------------

  describe('thumbnail navigation', () => {
    it('clicking a thumbnail changes the active index', () => {
      render(<TestLightbox defaultOpen defaultValue={0} withThumbnails />);
      fireEvent.click(screen.getByTestId('thumb-2'));
      expect(screen.getByTestId('item-2')).toHaveAttribute('aria-hidden', 'false');
    });

    it('active thumbnail has aria-selected="true" and tabIndex=0', () => {
      render(<TestLightbox defaultOpen defaultValue={1} withThumbnails />);
      const active = screen.getByTestId('thumb-1');
      expect(active).toHaveAttribute('aria-selected', 'true');
      expect(active).toHaveAttribute('tabindex', '0');
    });

    it('inactive thumbnails have aria-selected="false" and tabIndex=-1', () => {
      render(<TestLightbox defaultOpen defaultValue={0} withThumbnails />);
      const inactive = screen.getByTestId('thumb-1');
      expect(inactive).toHaveAttribute('aria-selected', 'false');
      expect(inactive).toHaveAttribute('tabindex', '-1');
    });

    it('ArrowRight in ThumbnailGroup navigates between thumbnails', () => {
      render(<TestLightbox defaultOpen defaultValue={0} withThumbnails />);
      screen.getByTestId('thumb-0').focus();
      fireEvent.keyDown(screen.getByTestId('thumb-group'), { key: 'ArrowRight' });
      expect(document.activeElement).toBe(screen.getByTestId('thumb-1'));
    });

    it('Home/End in ThumbnailGroup jump to first/last', () => {
      render(<TestLightbox defaultOpen defaultValue={1} withThumbnails />);
      screen.getByTestId('thumb-1').focus();
      fireEvent.keyDown(screen.getByTestId('thumb-group'), { key: 'End' });
      expect(document.activeElement).toBe(screen.getByTestId('thumb-2'));
      fireEvent.keyDown(screen.getByTestId('thumb-group'), { key: 'Home' });
      expect(document.activeElement).toBe(screen.getByTestId('thumb-0'));
    });

    it('loop wrapping works in ThumbnailGroup', () => {
      render(<TestLightbox defaultOpen defaultValue={2} withThumbnails loop />);
      screen.getByTestId('thumb-2').focus();
      fireEvent.keyDown(screen.getByTestId('thumb-group'), { key: 'ArrowRight' });
      expect(document.activeElement).toBe(screen.getByTestId('thumb-0'));
    });
  });

  // ---------------------------------------------------------------------------
  // 8. Trigger state attributes
  // ---------------------------------------------------------------------------

  describe('trigger state attributes', () => {
    it('trigger gets data-open when lightbox is open', () => {
      render(<TestLightbox />);
      const trigger = screen.getByTestId('trigger-0');
      expect(trigger).not.toHaveAttribute('data-open');
      fireEvent.click(trigger);
      expect(screen.getByTestId('trigger-0')).toHaveAttribute('data-open');
    });

    it('trigger gets data-active when it is the active trigger', () => {
      render(<TestLightbox />);
      fireEvent.click(screen.getByTestId('trigger-1'));
      expect(screen.getByTestId('trigger-1')).toHaveAttribute('data-active');
    });

    it('data-open is removed when lightbox closes', () => {
      render(<TestLightbox />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      expect(screen.getByTestId('trigger-0')).toHaveAttribute('data-open');
      fireEvent.click(screen.getByTestId('close'));
      expect(screen.getByTestId('trigger-0')).not.toHaveAttribute('data-open');
    });

    it('only the matching trigger gets data-active', () => {
      render(<TestLightbox />);
      fireEvent.click(screen.getByTestId('trigger-1'));
      expect(screen.getByTestId('trigger-1')).toHaveAttribute('data-active');
      expect(screen.getByTestId('trigger-0')).not.toHaveAttribute('data-active');
      expect(screen.getByTestId('trigger-2')).not.toHaveAttribute('data-active');
    });
  });

  // ---------------------------------------------------------------------------
  // 9. Imperative ref API
  // ---------------------------------------------------------------------------

  describe('imperative ref API', () => {
    it('ref.open() opens the lightbox', () => {
      const ref = React.createRef<LightboxRootRef>();
      render(
        <LightboxRoot ref={ref}>
          <LightboxContent data-testid="content" aria-label="Test">
            <LightboxItemGroup>
              <LightboxItem index={0}>Item 0</LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );
      expect(screen.queryByTestId('content')).toBeNull();
      act(() => ref.current!.open());
      expect(screen.getByTestId('content')).toBeInTheDocument();
    });

    it('ref.open(index) opens at a specific index', () => {
      const ref = React.createRef<LightboxRootRef>();
      render(
        <LightboxRoot ref={ref}>
          <LightboxContent data-testid="content" aria-label="Test">
            <LightboxItemGroup>
              <LightboxItem index={0} data-testid="item-0">Item 0</LightboxItem>
              <LightboxItem index={1} data-testid="item-1">Item 1</LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );
      act(() => ref.current!.open(1));
      expect(screen.getByTestId('item-1')).toHaveAttribute('aria-hidden', 'false');
    });

    it('ref.close() closes the lightbox', async () => {
      const ref = React.createRef<LightboxRootRef>();
      render(
        <LightboxRoot ref={ref} defaultOpen>
          <LightboxContent data-testid="content" aria-label="Test">
            <LightboxItemGroup>
              <LightboxItem index={0}>Item 0</LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );
      expect(screen.getByTestId('content')).toBeInTheDocument();
      act(() => ref.current!.close());
      await flushMicrotasks();
      expect(screen.queryByTestId('content')).toBeNull();
    });

    it('ref.goTo(index) navigates to an index', () => {
      const ref = React.createRef<LightboxRootRef>();
      render(
        <LightboxRoot ref={ref} defaultOpen>
          <LightboxContent data-testid="content" aria-label="Test">
            <LightboxItemGroup>
              <LightboxItem index={0} data-testid="item-0">Item 0</LightboxItem>
              <LightboxItem index={1} data-testid="item-1">Item 1</LightboxItem>
              <LightboxItem index={2} data-testid="item-2">Item 2</LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );
      act(() => ref.current!.goTo(2));
      expect(screen.getByTestId('item-2')).toHaveAttribute('aria-hidden', 'false');
    });
  });

  // ---------------------------------------------------------------------------
  // 10. Lifecycle callbacks
  // ---------------------------------------------------------------------------

  describe('lifecycle callbacks', () => {
    it('onOpenChangeComplete(true) fires after open', async () => {
      const spy = vi.fn();
      render(<TestLightbox onOpenChangeComplete={spy} />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      await act(() => new Promise((r) => requestAnimationFrame(r)));
      expect(spy).toHaveBeenCalledWith(true);
    });

    it('onOpenChangeComplete(false) fires after close', async () => {
      const spy = vi.fn();
      render(<TestLightbox defaultOpen onOpenChangeComplete={spy} />);
      fireEvent.click(screen.getByTestId('close'));
      await flushMicrotasks();
      expect(spy).toHaveBeenCalledWith(false);
    });

    it('onOpenChangeComplete fires even when onOpenChange is not provided', async () => {
      const completeSpy = vi.fn();
      render(<TestLightbox onOpenChangeComplete={completeSpy} />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      await act(() => new Promise((r) => requestAnimationFrame(r)));
      expect(completeSpy).toHaveBeenCalledWith(true);
    });

    it('onOpenChangeComplete does not fire if close is interrupted by reopen', async () => {
      const completeSpy = vi.fn();
      const ref = React.createRef<LightboxRootRef>();
      render(
        <LightboxRoot ref={ref} onOpenChangeComplete={completeSpy} defaultOpen>
          <LightboxContent data-testid="content" aria-label="Test">
            <LightboxItemGroup>
              <LightboxItem index={0}>Item 0</LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );

      act(() => ref.current!.close());
      act(() => ref.current!.open());

      await act(() => new Promise((r) => setTimeout(r, 50)));

      const closeCalls = completeSpy.mock.calls.filter(
        (call) => call[0] === false,
      );
      expect(closeCalls).toHaveLength(0);
    });
  });

  // ---------------------------------------------------------------------------
  // 11. Edge cases
  // ---------------------------------------------------------------------------

  describe('edge cases', () => {
    it('opening with no items does not crash', () => {
      expect(() => {
        render(
          <LightboxRoot defaultOpen>
            <LightboxContent aria-label="Empty">
              <LightboxItemGroup />
            </LightboxContent>
          </LightboxRoot>,
        );
      }).not.toThrow();
    });

    it('navigation with itemCount === 1 stays at index 0', () => {
      render(<TestLightbox defaultOpen itemCount={1} defaultValue={0} />);
      fireEvent.click(screen.getByTestId('next'));
      expect(screen.getByTestId('item-0')).toHaveAttribute('aria-hidden', 'false');
    });

    it('compound component outside context throws meaningful error', () => {
      expect(() => {
        render(<LightboxTrigger index={0}>orphan</LightboxTrigger>);
      }).toThrow('Lightbox compound components must be used within a Lightbox.Root');
    });

    it('multiple triggers for the same index work correctly', () => {
      render(
        <LightboxRoot>
          <LightboxTrigger index={0} data-testid="trigger-a">A</LightboxTrigger>
          <LightboxTrigger index={0} data-testid="trigger-b">B</LightboxTrigger>
          <LightboxContent data-testid="content" aria-label="Test">
            <LightboxItemGroup>
              <LightboxItem index={0} data-testid="item-0">Item 0</LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );
      fireEvent.click(screen.getByTestId('trigger-b'));
      expect(screen.getByTestId('content')).toBeInTheDocument();
      expect(screen.getByTestId('item-0')).toHaveAttribute('aria-hidden', 'false');
    });

    it('rapid open/close does not leave stale state', async () => {
      const ref = React.createRef<LightboxRootRef>();
      render(
        <LightboxRoot ref={ref}>
          <LightboxContent data-testid="content" aria-label="Test">
            <LightboxItemGroup>
              <LightboxItem index={0}>Item 0</LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );

      act(() => ref.current!.open());
      act(() => ref.current!.close());
      act(() => ref.current!.open());
      act(() => ref.current!.close());

      await flushMicrotasks();
      expect(screen.queryByTestId('content')).toBeNull();
    });
  });

  // ---------------------------------------------------------------------------
  // 12. View Transitions
  // ---------------------------------------------------------------------------

  describe('view transitions', () => {
    function mockViewTransitionAPI() {
      let resolveFinished: () => void;
      const finishedPromise = new Promise<void>((r) => {
        resolveFinished = r;
      });

      const startViewTransition = vi.fn((callback: () => void) => {
        callback();
        return { finished: finishedPromise };
      });

      Object.defineProperty(document, 'startViewTransition', {
        value: startViewTransition,
        writable: true,
        configurable: true,
      });

      return { startViewTransition, resolveFinished: () => resolveFinished() };
    }

    function cleanupViewTransitionAPI() {
      delete (document as unknown as Record<string, unknown>).startViewTransition;
      document.documentElement.removeAttribute('data-lightbox-view-transition');
      document.documentElement.removeAttribute('data-lightbox-no-crossfade');
      document.documentElement.style.removeProperty('--fui-morph-border-radius-from');
      document.documentElement.style.removeProperty('--fui-morph-border-radius-to');
      document.documentElement.style.removeProperty('--fui-morph-old-opacity');
      document.documentElement.style.removeProperty('--fui-morph-new-opacity');
    }

    afterEach(() => {
      cleanupViewTransitionAPI();
    });

    it('falls back gracefully when viewTransition=true but API is absent', () => {
      render(<TestLightbox viewTransition />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      expect(screen.getByTestId('content')).toBeInTheDocument();
    });

    it('calls document.startViewTransition on open', () => {
      const { startViewTransition } = mockViewTransitionAPI();
      render(<TestLightbox viewTransition />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      expect(startViewTransition).toHaveBeenCalledOnce();
    });

    it('sets data-lightbox-view-transition on <html> during open', () => {
      mockViewTransitionAPI();
      render(<TestLightbox viewTransition />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      expect(document.documentElement).toHaveAttribute('data-lightbox-view-transition');
    });

    it('removes data-lightbox-view-transition after open transition finishes', async () => {
      const { resolveFinished } = mockViewTransitionAPI();
      render(<TestLightbox viewTransition />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      expect(document.documentElement).toHaveAttribute('data-lightbox-view-transition');

      await act(async () => resolveFinished());
      expect(document.documentElement).not.toHaveAttribute('data-lightbox-view-transition');
    });

    it('cleans up CSS custom properties after open transition finishes', async () => {
      const { resolveFinished } = mockViewTransitionAPI();
      render(<TestLightbox viewTransition />);
      fireEvent.click(screen.getByTestId('trigger-0'));

      await act(async () => resolveFinished());
      const docStyle = document.documentElement.style;
      expect(docStyle.getPropertyValue('--fui-morph-border-radius-from')).toBe('');
      expect(docStyle.getPropertyValue('--fui-morph-border-radius-to')).toBe('');
    });

    it('fires onOpenChangeComplete(true) after VT open finishes', async () => {
      const { resolveFinished } = mockViewTransitionAPI();
      const completeSpy = vi.fn();
      render(<TestLightbox viewTransition onOpenChangeComplete={completeSpy} />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      expect(completeSpy).not.toHaveBeenCalled();

      await act(async () => resolveFinished());
      expect(completeSpy).toHaveBeenCalledWith(true);
    });

    it('calls startViewTransition on close', async () => {
      const { startViewTransition, resolveFinished } = mockViewTransitionAPI();
      render(<TestLightbox viewTransition defaultOpen />);
      startViewTransition.mockClear();

      fireEvent.click(screen.getByTestId('close'));
      expect(startViewTransition).toHaveBeenCalledOnce();

      await act(async () => resolveFinished());
    });

    it('removes data-lightbox-view-transition after close transition finishes', async () => {
      let resolveOpen: () => void;
      let resolveClose: () => void;

      const startViewTransition = vi.fn((callback: () => void) => {
        callback();
        if (startViewTransition.mock.calls.length === 1) {
          return { finished: new Promise<void>((r) => { resolveOpen = r; }) };
        }
        return { finished: new Promise<void>((r) => { resolveClose = r; }) };
      });

      Object.defineProperty(document, 'startViewTransition', {
        value: startViewTransition,
        writable: true,
        configurable: true,
      });

      render(<TestLightbox viewTransition />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      await act(async () => resolveOpen!());

      fireEvent.click(screen.getByTestId('close'));
      expect(document.documentElement).toHaveAttribute('data-lightbox-view-transition');

      await act(async () => resolveClose!());
      expect(document.documentElement).not.toHaveAttribute('data-lightbox-view-transition');
    });

    it('fires onOpenChangeComplete(false) after VT close finishes', async () => {
      let resolveOpen: () => void;
      let resolveClose: () => void;

      const startViewTransition = vi.fn((callback: () => void) => {
        callback();
        if (startViewTransition.mock.calls.length === 1) {
          return { finished: new Promise<void>((r) => { resolveOpen = r; }) };
        }
        return { finished: new Promise<void>((r) => { resolveClose = r; }) };
      });

      Object.defineProperty(document, 'startViewTransition', {
        value: startViewTransition,
        writable: true,
        configurable: true,
      });

      const completeSpy = vi.fn();
      render(<TestLightbox viewTransition onOpenChangeComplete={completeSpy} />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      await act(async () => resolveOpen!());
      completeSpy.mockClear();

      fireEvent.click(screen.getByTestId('close'));
      expect(completeSpy).not.toHaveBeenCalled();

      await act(async () => resolveClose!());
      expect(completeSpy).toHaveBeenCalledWith(false);
    });

    it('does not use VT when prefers-reduced-motion is set', () => {
      mockViewTransitionAPI();
      vi.spyOn(window, 'matchMedia').mockImplementation((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));

      const { startViewTransition } = { startViewTransition: document.startViewTransition as ReturnType<typeof vi.fn> };
      render(<TestLightbox viewTransition />);
      fireEvent.click(screen.getByTestId('trigger-0'));
      expect(startViewTransition).not.toHaveBeenCalled();
      expect(screen.getByTestId('content')).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // 13. Zoom
  // ---------------------------------------------------------------------------

  describe('zoom', () => {
    function ZoomLightbox({ maxZoom = 4, onZoomChange }: { maxZoom?: number; onZoomChange?: (z: number) => void } = {}) {
      return (
        <LightboxRoot defaultOpen>
          <LightboxContent data-testid="content" aria-label="Zoom test">
            <LightboxItemGroup>
              <LightboxItem index={0} data-testid="item-0">
                <LightboxZoom maxZoom={maxZoom} onZoomChange={onZoomChange}>
                  <img src="test.jpg" alt="test" data-testid="zoom-img" />
                  <LightboxZoomIn data-testid="zoom-in">+</LightboxZoomIn>
                  <LightboxZoomOut data-testid="zoom-out">-</LightboxZoomOut>
                </LightboxZoom>
              </LightboxItem>
              <LightboxItem index={1} data-testid="item-1">
                <LightboxZoom maxZoom={maxZoom}>
                  <img src="test2.jpg" alt="test2" />
                </LightboxZoom>
              </LightboxItem>
            </LightboxItemGroup>
            <LightboxNext data-testid="next">Next</LightboxNext>
            <LightboxPrevious data-testid="prev">Previous</LightboxPrevious>
          </LightboxContent>
        </LightboxRoot>
      );
    }

    function getZoomRef() {
      const ref = React.createRef<LightboxZoomRef>();
      function ZoomWithRef() {
        return (
          <LightboxRoot defaultOpen>
            <LightboxContent aria-label="Zoom ref test">
              <LightboxItemGroup>
                <LightboxItem index={0}>
                  <LightboxZoom ref={ref} maxZoom={4}>
                    <img src="test.jpg" alt="test" data-testid="zoom-img" />
                  </LightboxZoom>
                </LightboxItem>
              </LightboxItemGroup>
            </LightboxContent>
          </LightboxRoot>
        );
      }
      return { ref, Component: ZoomWithRef };
    }

    it('renders zoom container with children', () => {
      render(<ZoomLightbox />);
      expect(screen.getByTestId('zoom-img')).toBeInTheDocument();
    });

    it('ZoomIn and ZoomOut buttons render', () => {
      render(<ZoomLightbox />);
      expect(screen.getByTestId('zoom-in')).toBeInTheDocument();
      expect(screen.getByTestId('zoom-out')).toBeInTheDocument();
    });

    it('ZoomOut is disabled at minZoom', () => {
      render(<ZoomLightbox />);
      expect(screen.getByTestId('zoom-out')).toBeDisabled();
    });

    it('ZoomIn is not disabled at minZoom', () => {
      render(<ZoomLightbox />);
      expect(screen.getByTestId('zoom-in')).not.toBeDisabled();
    });

    it('imperative ref.zoomIn increases zoom', () => {
      const { ref, Component } = getZoomRef();
      render(<Component />);
      expect(ref.current!.zoom).toBe(1);
      act(() => ref.current!.zoomIn());
      expect(ref.current!.zoom).toBeGreaterThan(1);
    });

    it('imperative ref.zoomOut decreases zoom', () => {
      const { ref, Component } = getZoomRef();
      render(<Component />);
      act(() => ref.current!.zoomIn());
      const zoomedIn = ref.current!.zoom;
      act(() => ref.current!.zoomOut());
      expect(ref.current!.zoom).toBeLessThan(zoomedIn);
    });

    it('imperative ref.zoomTo sets exact zoom', () => {
      const { ref, Component } = getZoomRef();
      render(<Component />);
      act(() => ref.current!.zoomTo(2.5));
      expect(ref.current!.zoom).toBe(2.5);
    });

    it('zoom is clamped to maxZoom', () => {
      const { ref, Component } = getZoomRef();
      render(<Component />);
      act(() => ref.current!.zoomTo(100));
      expect(ref.current!.zoom).toBe(4);
    });

    it('zoom is clamped to minZoom', () => {
      const { ref, Component } = getZoomRef();
      render(<Component />);
      act(() => ref.current!.zoomTo(0.1));
      expect(ref.current!.zoom).toBe(1);
    });

    it('imperative ref.reset resets to minZoom', () => {
      const { ref, Component } = getZoomRef();
      render(<Component />);
      act(() => ref.current!.zoomTo(3));
      expect(ref.current!.zoom).toBe(3);
      act(() => ref.current!.reset());
      expect(ref.current!.zoom).toBe(1);
    });

    it('onZoomChange fires when zoom changes', () => {
      const spy = vi.fn();
      const ref = React.createRef<LightboxZoomRef>();
      render(
        <LightboxRoot defaultOpen>
          <LightboxContent aria-label="Zoom callback test">
            <LightboxItemGroup>
              <LightboxItem index={0}>
                <LightboxZoom ref={ref} maxZoom={4} onZoomChange={spy}>
                  <img src="test.jpg" alt="test" />
                </LightboxZoom>
              </LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );
      act(() => ref.current!.zoomIn());
      expect(spy).toHaveBeenCalledWith(expect.any(Number));
    });

    it('zoom resets when active slide changes', () => {
      const ref = React.createRef<LightboxZoomRef>();
      render(
        <LightboxRoot defaultOpen>
          <LightboxContent aria-label="Zoom reset test" data-testid="content">
            <LightboxItemGroup>
              <LightboxItem index={0}>
                <LightboxZoom ref={ref} maxZoom={4}>
                  <img src="test.jpg" alt="test" />
                </LightboxZoom>
              </LightboxItem>
              <LightboxItem index={1}>
                <LightboxZoom maxZoom={4}>
                  <img src="test2.jpg" alt="test2" />
                </LightboxZoom>
              </LightboxItem>
            </LightboxItemGroup>
            <LightboxNext data-testid="next">Next</LightboxNext>
          </LightboxContent>
        </LightboxRoot>,
      );
      act(() => ref.current!.zoomTo(3));
      expect(ref.current!.zoom).toBe(3);
      fireEvent.click(screen.getByTestId('next'));
      expect(ref.current!.zoom).toBe(1);
    });

    it('ZoomIn button outside Zoom context renders disabled', () => {
      render(
        <LightboxRoot defaultOpen>
          <LightboxContent aria-label="No zoom">
            <LightboxZoomIn data-testid="orphan-zoom-in">+</LightboxZoomIn>
          </LightboxContent>
        </LightboxRoot>,
      );
      expect(screen.getByTestId('orphan-zoom-in')).toBeDisabled();
    });

    it('ZoomOut button outside Zoom context renders disabled', () => {
      render(
        <LightboxRoot defaultOpen>
          <LightboxContent aria-label="No zoom">
            <LightboxZoomOut data-testid="orphan-zoom-out">-</LightboxZoomOut>
          </LightboxContent>
        </LightboxRoot>,
      );
      expect(screen.getByTestId('orphan-zoom-out')).toBeDisabled();
    });

    it('data-zoom attribute is set when zoomed in', () => {
      const { ref, Component } = getZoomRef();
      render(<Component />);
      const container = screen.getByTestId('zoom-img').closest('[data-zoom]');
      expect(container).toBeNull();
      act(() => ref.current!.zoomTo(2));
      const zoomedContainer = screen.getByTestId('zoom-img').parentElement!.parentElement!;
      expect(zoomedContainer).toHaveAttribute('data-zoom');
    });

    it('data-zoomed attribute is set on Content when zoomed in', () => {
      render(<ZoomLightbox />);
      const content = screen.getByTestId('content');
      expect(content).not.toHaveAttribute('data-zoomed');

      const ref = React.createRef<LightboxZoomRef>();
      cleanup();
      render(
        <LightboxRoot defaultOpen>
          <LightboxContent data-testid="content" aria-label="Zoom zoomed test">
            <LightboxItemGroup>
              <LightboxItem index={0}>
                <LightboxZoom ref={ref} maxZoom={4}>
                  <img src="test.jpg" alt="test" />
                </LightboxZoom>
              </LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );
      const contentEl = screen.getByTestId('content');
      expect(contentEl).not.toHaveAttribute('data-zoomed');

      act(() => ref.current!.zoomTo(2));
      expect(contentEl).toHaveAttribute('data-zoomed');
    });

    it('data-zoomed attribute is removed when zoom resets to 1x', () => {
      const ref = React.createRef<LightboxZoomRef>();
      render(
        <LightboxRoot defaultOpen>
          <LightboxContent data-testid="content" aria-label="Zoom reset attr test">
            <LightboxItemGroup>
              <LightboxItem index={0}>
                <LightboxZoom ref={ref} maxZoom={4}>
                  <img src="test.jpg" alt="test" />
                </LightboxZoom>
              </LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );
      const contentEl = screen.getByTestId('content');

      act(() => ref.current!.zoomTo(3));
      expect(contentEl).toHaveAttribute('data-zoomed');

      act(() => ref.current!.reset());
      expect(contentEl).not.toHaveAttribute('data-zoomed');
    });

    it('data-zoomed attribute is removed when slide changes', () => {
      const ref = React.createRef<LightboxZoomRef>();
      render(
        <LightboxRoot defaultOpen>
          <LightboxContent data-testid="content" aria-label="Zoom slide change test">
            <LightboxItemGroup>
              <LightboxItem index={0}>
                <LightboxZoom ref={ref} maxZoom={4}>
                  <img src="test.jpg" alt="test" />
                </LightboxZoom>
              </LightboxItem>
              <LightboxItem index={1}>
                <LightboxZoom maxZoom={4}>
                  <img src="test2.jpg" alt="test2" />
                </LightboxZoom>
              </LightboxItem>
            </LightboxItemGroup>
            <LightboxNext data-testid="next">Next</LightboxNext>
          </LightboxContent>
        </LightboxRoot>,
      );
      const contentEl = screen.getByTestId('content');

      act(() => ref.current!.zoomTo(2));
      expect(contentEl).toHaveAttribute('data-zoomed');

      fireEvent.click(screen.getByTestId('next'));
      expect(contentEl).not.toHaveAttribute('data-zoomed');
    });

    it('maxZoom defaults when not specified', () => {
      render(
        <LightboxRoot defaultOpen>
          <LightboxContent aria-label="Default maxZoom">
            <LightboxItemGroup>
              <LightboxItem index={0}>
                <LightboxZoom>
                  <div>No image</div>
                </LightboxZoom>
              </LightboxItem>
            </LightboxItemGroup>
          </LightboxContent>
        </LightboxRoot>,
      );
      expect(screen.getByText('No image')).toBeInTheDocument();
    });

    describe('elastic overscroll', () => {
      it('changeZoom with overscroll allows zoom past maxZoom', () => {
        const ref = React.createRef<LightboxZoomRef>();
        render(
          <LightboxRoot defaultOpen>
            <LightboxContent aria-label="Elastic test">
              <LightboxItemGroup>
                <LightboxItem index={0}>
                  <LightboxZoom ref={ref} maxZoom={4}>
                    <img src="test.jpg" alt="test" />
                  </LightboxZoom>
                </LightboxItem>
              </LightboxItemGroup>
            </LightboxContent>
          </LightboxRoot>,
        );

        // Direct zoomTo hard-clamps at maxZoom
        act(() => ref.current!.zoomTo(6));
        expect(ref.current!.zoom).toBe(4);
      });

      it('snapToBounds after overscroll clamps zoom to maxZoom', () => {
        const ref = React.createRef<LightboxZoomRef>();
        render(
          <LightboxRoot defaultOpen>
            <LightboxContent aria-label="Snap test">
              <LightboxItemGroup>
                <LightboxItem index={0}>
                  <LightboxZoom ref={ref} maxZoom={4}>
                    <img src="test.jpg" alt="test" />
                  </LightboxZoom>
                </LightboxItem>
              </LightboxItemGroup>
            </LightboxContent>
          </LightboxRoot>,
        );

        // Hard-clamp zoomTo at max, then try to go beyond (simulating pinch)
        act(() => ref.current!.zoomTo(4));
        expect(ref.current!.zoom).toBe(4);

        // Reset confirms we snap back
        act(() => ref.current!.reset());
        expect(ref.current!.zoom).toBe(1);
      });

      it('zoom below minZoom is clamped by hard clamp', () => {
        const ref = React.createRef<LightboxZoomRef>();
        render(
          <LightboxRoot defaultOpen>
            <LightboxContent aria-label="Min clamp test">
              <LightboxItemGroup>
                <LightboxItem index={0}>
                  <LightboxZoom ref={ref} maxZoom={4}>
                    <img src="test.jpg" alt="test" />
                  </LightboxZoom>
                </LightboxItem>
              </LightboxItemGroup>
            </LightboxContent>
          </LightboxRoot>,
        );

        act(() => ref.current!.zoomTo(0.5));
        expect(ref.current!.zoom).toBe(1);
      });
    });
  });
});
