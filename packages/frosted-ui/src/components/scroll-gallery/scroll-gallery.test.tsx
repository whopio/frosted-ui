import { render, screen, fireEvent, act } from '@testing-library/react';
import * as React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { ScrollGalleryItem } from './scroll-gallery-item';
import { ScrollGalleryNext } from './scroll-gallery-next';
import { ScrollGalleryPrevious } from './scroll-gallery-previous';
import { ScrollGalleryRoot, type ScrollGalleryRootRef } from './scroll-gallery-root';
import { ScrollGalleryScrollMarker } from './scroll-gallery-scroll-marker';
import { ScrollGalleryScrollMarkerGroup } from './scroll-gallery-scroll-marker-group';
import { ScrollGalleryViewport } from './scroll-gallery-viewport';

let intersectionCallbacks: IntersectionObserverCallback[] = [];
let resizeCallbacks: ResizeObserverCallback[] = [];

beforeEach(() => {
  intersectionCallbacks = [];
  resizeCallbacks = [];

  // jsdom doesn't implement scrollBy — mock it globally so the mount effect
  // in ScrollGalleryRoot (which calls scrollTo → viewport.scrollBy) doesn't throw.
  if (!HTMLElement.prototype.scrollBy) {
    HTMLElement.prototype.scrollBy = vi.fn();
  }

  // jsdom doesn't implement matchMedia — mock it so getScrollBehavior() works.
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

  vi.stubGlobal(
    'IntersectionObserver',
    class MockIntersectionObserver {
      constructor(cb: IntersectionObserverCallback) {
        intersectionCallbacks.push(cb);
      }
      observe() { /* noop */ }
      unobserve() { /* noop */ }
      disconnect() { /* noop */ }
    },
  );

  vi.stubGlobal(
    'ResizeObserver',
    class MockResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        resizeCallbacks.push(cb);
      }
      observe() { /* noop */ }
      unobserve() { /* noop */ }
      disconnect() { /* noop */ }
    },
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

function mockViewportScroll(
  viewport: HTMLElement,
  opts: { scrollLeft?: number; scrollWidth?: number; clientWidth?: number },
) {
  Object.defineProperty(viewport, 'scrollLeft', { value: opts.scrollLeft ?? 0, configurable: true });
  Object.defineProperty(viewport, 'scrollWidth', { value: opts.scrollWidth ?? 1000, configurable: true });
  Object.defineProperty(viewport, 'clientWidth', { value: opts.clientWidth ?? 400, configurable: true });
}

function Gallery({
  itemCount = 5,
  defaultValue = 0,
  loop = false,
  orientation = 'horizontal',
  withMarkers = false,
  step,
}: {
  itemCount?: number;
  defaultValue?: number;
  loop?: boolean;
  orientation?: 'horizontal' | 'vertical';
  withMarkers?: boolean;
  step?: number;
} = {}) {
  return (
    <ScrollGalleryRoot defaultValue={defaultValue} loop={loop} orientation={orientation}>
      <ScrollGalleryViewport data-testid="viewport" style={{ overflow: 'auto' }}>
        {Array.from({ length: itemCount }, (_, i) => (
          <ScrollGalleryItem key={i} data-testid={`item-${i}`}>
            Item {i}
          </ScrollGalleryItem>
        ))}
      </ScrollGalleryViewport>
      <ScrollGalleryPrevious data-testid="prev" step={step}>Previous</ScrollGalleryPrevious>
      <ScrollGalleryNext data-testid="next" step={step}>Next</ScrollGalleryNext>
      {withMarkers && (
        <ScrollGalleryScrollMarkerGroup data-testid="marker-group">
          {Array.from({ length: itemCount }, (_, i) => (
            <ScrollGalleryScrollMarker key={i} index={i} data-testid={`marker-${i}`} />
          ))}
        </ScrollGalleryScrollMarkerGroup>
      )}
    </ScrollGalleryRoot>
  );
}

describe('ScrollGallery', () => {
  describe('structure and ARIA', () => {
    it('renders Previous as a button with type="button"', () => {
      render(<Gallery />);
      const prev = screen.getByTestId('prev');
      expect(prev.tagName).toBe('BUTTON');
      expect(prev).toHaveAttribute('type', 'button');
    });

    it('renders Next as a button with type="button"', () => {
      render(<Gallery />);
      const next = screen.getByTestId('next');
      expect(next.tagName).toBe('BUTTON');
      expect(next).toHaveAttribute('type', 'button');
    });

    it('renders Viewport with data-orientation', () => {
      render(<Gallery orientation="horizontal" />);
      expect(screen.getByTestId('viewport')).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('renders vertical orientation', () => {
      render(<Gallery orientation="vertical" />);
      expect(screen.getByTestId('viewport')).toHaveAttribute('data-orientation', 'vertical');
    });

    it('renders all items', () => {
      render(<Gallery itemCount={3} />);
      expect(screen.getByTestId('item-0')).toBeInTheDocument();
      expect(screen.getByTestId('item-1')).toBeInTheDocument();
      expect(screen.getByTestId('item-2')).toBeInTheDocument();
    });
  });

  describe('ScrollMarkerGroup ARIA', () => {
    it('renders with role="tablist"', () => {
      render(<Gallery withMarkers />);
      expect(screen.getByTestId('marker-group')).toHaveAttribute('role', 'tablist');
    });

    it('renders markers with role="tab"', () => {
      render(<Gallery withMarkers />);
      for (let i = 0; i < 5; i++) {
        expect(screen.getByTestId(`marker-${i}`)).toHaveAttribute('role', 'tab');
      }
    });

    it('sets aria-selected="true" and tabIndex=0 on active marker', () => {
      render(<Gallery withMarkers defaultValue={0} />);
      const active = screen.getByTestId('marker-0');
      expect(active).toHaveAttribute('aria-selected', 'true');
      expect(active).toHaveAttribute('tabindex', '0');
    });

    it('sets aria-selected="false" and tabIndex=-1 on inactive markers', () => {
      render(<Gallery withMarkers defaultValue={0} />);
      for (let i = 1; i < 5; i++) {
        const marker = screen.getByTestId(`marker-${i}`);
        expect(marker).toHaveAttribute('aria-selected', 'false');
        expect(marker).toHaveAttribute('tabindex', '-1');
      }
    });

    it('sets data-active on the active marker only', () => {
      render(<Gallery withMarkers defaultValue={2} />);
      expect(screen.getByTestId('marker-2')).toHaveAttribute('data-active');
      expect(screen.getByTestId('marker-0')).not.toHaveAttribute('data-active');
      expect(screen.getByTestId('marker-4')).not.toHaveAttribute('data-active');
    });
  });

  describe('ScrollMarkerGroup keyboard navigation (horizontal)', () => {
    it('ArrowRight moves focus to next marker', () => {
      render(<Gallery withMarkers />);
      screen.getByTestId('viewport').scrollBy = vi.fn();
      screen.getByTestId('marker-0').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowRight' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-1'));
    });

    it('ArrowLeft moves focus to previous marker', () => {
      render(<Gallery withMarkers />);
      screen.getByTestId('viewport').scrollBy = vi.fn();
      screen.getByTestId('marker-2').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowLeft' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-1'));
    });

    it('ArrowRight clamps at last marker (loop=false)', () => {
      render(<Gallery withMarkers />);
      screen.getByTestId('viewport').scrollBy = vi.fn();
      screen.getByTestId('marker-4').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowRight' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-4'));
    });

    it('ArrowLeft clamps at first marker (loop=false)', () => {
      render(<Gallery withMarkers />);
      screen.getByTestId('viewport').scrollBy = vi.fn();
      screen.getByTestId('marker-0').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowLeft' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-0'));
    });

    it('ArrowRight wraps from last to first (loop=true)', () => {
      render(<Gallery withMarkers loop />);
      screen.getByTestId('viewport').scrollBy = vi.fn();
      screen.getByTestId('marker-4').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowRight' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-0'));
    });

    it('ArrowLeft wraps from first to last (loop=true)', () => {
      render(<Gallery withMarkers loop />);
      screen.getByTestId('viewport').scrollBy = vi.fn();
      screen.getByTestId('marker-0').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowLeft' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-4'));
    });

    it('Home moves focus to first marker', () => {
      render(<Gallery withMarkers />);
      screen.getByTestId('viewport').scrollBy = vi.fn();
      screen.getByTestId('marker-3').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'Home' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-0'));
    });

    it('End moves focus to last marker', () => {
      render(<Gallery withMarkers />);
      screen.getByTestId('viewport').scrollBy = vi.fn();
      screen.getByTestId('marker-0').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'End' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-4'));
    });

    it('ignores irrelevant keys', () => {
      render(<Gallery withMarkers />);
      const marker1 = screen.getByTestId('marker-1');
      marker1.focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'Tab' });
      expect(document.activeElement).toBe(marker1);
    });

    it('arrow key activates the marker (automatic activation)', () => {
      render(<Gallery withMarkers itemCount={8} />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();

      screen.getByTestId('marker-0').focus();
      expect(screen.getByTestId('marker-0')).toHaveAttribute('aria-selected', 'true');

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowRight' });

      expect(document.activeElement).toBe(screen.getByTestId('marker-1'));
      expect(screen.getByTestId('marker-1')).toHaveAttribute('aria-selected', 'true');
      expect(viewport.scrollBy).toHaveBeenCalled();
    });

    it('Home key activates the first marker', () => {
      render(<Gallery withMarkers itemCount={8} />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();

      screen.getByTestId('marker-3').focus();
      fireEvent.click(screen.getByTestId('marker-3'));
      expect(screen.getByTestId('marker-3')).toHaveAttribute('aria-selected', 'true');

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'Home' });

      expect(document.activeElement).toBe(screen.getByTestId('marker-0'));
      expect(screen.getByTestId('marker-0')).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('ScrollMarkerGroup keyboard navigation (vertical)', () => {
    it('ArrowDown moves focus to next marker', () => {
      render(<Gallery withMarkers orientation="vertical" />);
      screen.getByTestId('viewport').scrollBy = vi.fn();
      screen.getByTestId('marker-0').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowDown' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-1'));
    });

    it('ArrowUp moves focus to previous marker', () => {
      render(<Gallery withMarkers orientation="vertical" />);
      screen.getByTestId('viewport').scrollBy = vi.fn();
      screen.getByTestId('marker-2').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowUp' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-1'));
    });

    it('ArrowRight does nothing in vertical orientation', () => {
      render(<Gallery withMarkers orientation="vertical" />);
      const marker0 = screen.getByTestId('marker-0');
      marker0.focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowRight' });
      expect(document.activeElement).toBe(marker0);
    });
  });

  describe('scroll button navigation', () => {
    it('Previous button is disabled at scroll start', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('prev')).toBeDisabled();
    });

    it('Next button is enabled when content overflows', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('next')).not.toBeDisabled();
    });

    it('Previous button is enabled after scrolling forward', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 200, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('prev')).not.toBeDisabled();
    });

    it('Next button is disabled at scroll end', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 600, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('next')).toBeDisabled();
    });

    it('Previous button has data-disabled when disabled', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('prev')).toHaveAttribute('data-disabled');
    });

    it('Next button has data-disabled when disabled', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 600, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('next')).toHaveAttribute('data-disabled');
    });

    it('clicking Next calls scrollBy with 85% of viewport width', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1000, clientWidth: 400 });
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      act(() => {
        fireEvent.scroll(viewport);
      });

      fireEvent.click(screen.getByTestId('next'));

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 400 * 0.85,
        behavior: 'smooth',
      });
    });

    it('clicking Previous calls scrollBy with negative 85% of viewport width', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 300, scrollWidth: 1000, clientWidth: 400 });
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      act(() => {
        fireEvent.scroll(viewport);
      });

      fireEvent.click(screen.getByTestId('prev'));

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: -(400 * 0.85),
        behavior: 'smooth',
      });
    });

    it('clicking disabled Previous does not call scrollBy', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1000, clientWidth: 400 });
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      act(() => {
        fireEvent.scroll(viewport);
      });

      fireEvent.click(screen.getByTestId('prev'));
      expect(scrollBySpy).not.toHaveBeenCalled();
    });

    it('both buttons disabled when content does not overflow', () => {
      render(<Gallery itemCount={1} />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 400, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('prev')).toBeDisabled();
      expect(screen.getByTestId('next')).toBeDisabled();
    });
  });

  describe('step button navigation', () => {
    function mockItemRects(itemCount: number, scrollLeft: number, itemWidth = 200, gap = 10) {
      const viewport = screen.getByTestId('viewport');
      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      for (let i = 0; i < itemCount; i++) {
        const absLeft = i * (itemWidth + gap);
        const visualLeft = absLeft - scrollLeft;
        const item = screen.getByTestId(`item-${i}`);
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + itemWidth, bottom: 100, width: itemWidth, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }
    }

    it('Next step={1} scrolls to the next item position', () => {
      render(<Gallery itemCount={8} step={1} />);
      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1680, clientWidth: 400 });
      mockItemRects(8, 0);

      act(() => { fireEvent.scroll(viewport); });

      fireEvent.click(screen.getByTestId('next'));

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 210,
        behavior: 'smooth',
      });
    });

    it('Previous step={1} scrolls to the previous item position', () => {
      render(<Gallery itemCount={8} step={1} />);
      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      mockViewportScroll(viewport, { scrollLeft: 210, scrollWidth: 1680, clientWidth: 400 });
      mockItemRects(8, 210);

      act(() => { fireEvent.scroll(viewport); });

      fireEvent.click(screen.getByTestId('prev'));

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: -210,
        behavior: 'smooth',
      });
    });

    it('Next step={2} skips two items ahead', () => {
      render(<Gallery itemCount={8} step={2} />);
      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1680, clientWidth: 400 });
      mockItemRects(8, 0);

      act(() => { fireEvent.scroll(viewport); });

      fireEvent.click(screen.getByTestId('next'));

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 420,
        behavior: 'smooth',
      });
    });

    it('Next step={1} from mid-scroll targets the next item', () => {
      render(<Gallery itemCount={8} step={1} />);
      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      // At scrollLeft=630, item 3 is at visual left 0 (anchor), Next targets item 4
      mockViewportScroll(viewport, { scrollLeft: 630, scrollWidth: 1680, clientWidth: 400 });
      mockItemRects(8, 630);

      act(() => { fireEvent.scroll(viewport); });

      fireEvent.click(screen.getByTestId('next'));

      // Item 4 visual left = 4*210 - 630 = 210
      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 210,
        behavior: 'smooth',
      });
    });

    it('Previous step={1} from mid-scroll targets the previous item', () => {
      render(<Gallery itemCount={8} step={1} />);
      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      // At scrollLeft=630, item 3 is at visual left 0 (anchor), Previous targets item 2
      mockViewportScroll(viewport, { scrollLeft: 630, scrollWidth: 1680, clientWidth: 400 });
      mockItemRects(8, 630);

      act(() => { fireEvent.scroll(viewport); });

      fireEvent.click(screen.getByTestId('prev'));

      // Item 2 visual left = 2*210 - 630 = -210
      expect(scrollBySpy).toHaveBeenCalledWith({
        left: -210,
        behavior: 'smooth',
      });
    });

    it('Previous step={1} scrolls backward from maxScroll (anchor-based, not activeIndex)', () => {
      vi.useFakeTimers();

      render(<Gallery itemCount={8} withMarkers step={1} />);
      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      // At maxScroll: the anchor item is the one nearest the viewport start,
      // NOT the redistributed activeIndex (which would be 7).
      // Items at absolute positions: 0, 210, 420, 630, 840, 1050, 1260, 1470
      // maxScroll = 1680 - 400 = 1280
      // Visual positions at scrollLeft=1280:
      //   item 6: 1260 - 1280 = -20  (closest to 0)
      //   item 7: 1470 - 1280 = 190
      // Anchor = item 6, target = max(0, 6-1) = 5
      // Item 5 visual left = 1050 - 1280 = -230
      mockViewportScroll(viewport, { scrollLeft: 1280, scrollWidth: 1680, clientWidth: 400 });
      mockItemRects(8, 1280);

      act(() => {
        fireEvent.scroll(viewport);
        vi.advanceTimersByTime(150);
      });

      scrollBySpy.mockClear();
      fireEvent.click(screen.getByTestId('prev'));

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: -230,
        behavior: 'smooth',
      });

      vi.useRealTimers();
    });

    it('step buttons allow real-time marker updates during scroll (no scrollingRef lock)', () => {
      vi.useFakeTimers();

      render(<Gallery itemCount={8} withMarkers step={1} />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();

      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1680, clientWidth: 400 });
      mockItemRects(8, 0);
      act(() => { fireEvent.scroll(viewport); });

      // Click next — should NOT lock scrollingRef
      fireEvent.click(screen.getByTestId('next'));

      // Simulate mid-animation scroll at item 1 position
      mockViewportScroll(viewport, { scrollLeft: 105, scrollWidth: 1680, clientWidth: 400 });
      mockItemRects(8, 105);
      act(() => { fireEvent.scroll(viewport); });

      // Marker should update in real-time (not locked)
      // At scrollLeft=105, nearest item is item 0 (dist=105) or item 1 (dist=105)
      // — tied, so item 0 wins (first in loop). Advance a bit past midpoint:
      mockViewportScroll(viewport, { scrollLeft: 120, scrollWidth: 1680, clientWidth: 400 });
      mockItemRects(8, 120);
      act(() => { fireEvent.scroll(viewport); });

      // At scrollLeft=120, item 1 at pos 210 has dist=90, item 0 at pos 0 has dist=120
      // → item 1 is nearest → marker 1 should be active
      expect(screen.getByTestId('marker-1')).toHaveAttribute('aria-selected', 'true');

      vi.useRealTimers();
    });
  });

  describe('scroll marker click behavior', () => {
    it('clicking a marker calls scrollBy to bring target item to its snap position', () => {
      render(<Gallery withMarkers />);
      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      const itemRect = { left: 600, top: 0, right: 800, bottom: 100, width: 200, height: 100, x: 600, y: 0, toJSON: () => ({}) };

      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);
      const item3 = screen.getByTestId('item-3');
      vi.spyOn(item3, 'getBoundingClientRect').mockReturnValue(itemRect);

      fireEvent.click(screen.getByTestId('marker-3'));

      // No scroll-snap-align on items → defaults to start: item left (600) - viewport left (0)
      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 600,
        behavior: 'smooth',
      });
    });

    it('active marker stays locked during smooth scroll animation from marker click', () => {
      vi.useFakeTimers();

      render(<Gallery withMarkers itemCount={8} />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();

      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1600, clientWidth: 400 });

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      const lastItem = screen.getByTestId('item-7');
      vi.spyOn(lastItem, 'getBoundingClientRect').mockReturnValue(
        { left: 1400, top: 0, right: 1600, bottom: 100, width: 200, height: 100, x: 1400, y: 0, toJSON: () => ({}) },
      );

      fireEvent.click(screen.getByTestId('marker-7'));
      expect(screen.getByTestId('marker-7')).toHaveAttribute('aria-selected', 'true');

      // Simulate intermediate scroll position during animation
      mockViewportScroll(viewport, { scrollLeft: 600, scrollWidth: 1600, clientWidth: 400 });
      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        const visualLeft = i * 200 - 600;
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }

      act(() => {
        fireEvent.scroll(viewport);
      });

      // Marker 7 stays active despite intermediate scroll position
      expect(screen.getByTestId('marker-7')).toHaveAttribute('aria-selected', 'true');

      vi.useRealTimers();
    });

    it('clicking the last marker keeps it active after scroll settles', () => {
      vi.useFakeTimers();

      render(<Gallery withMarkers itemCount={8} />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();

      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1600, clientWidth: 400 });

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      const lastItem = screen.getByTestId('item-7');
      vi.spyOn(lastItem, 'getBoundingClientRect').mockReturnValue(
        { left: 1400, top: 0, right: 1600, bottom: 100, width: 200, height: 100, x: 1400, y: 0, toJSON: () => ({}) },
      );

      fireEvent.click(screen.getByTestId('marker-7'));
      expect(screen.getByTestId('marker-7')).toHaveAttribute('aria-selected', 'true');

      // Final scroll position (max scroll)
      mockViewportScroll(viewport, { scrollLeft: 1200, scrollWidth: 1600, clientWidth: 400 });

      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        const visualLeft = i * 200 - 1200;
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }

      // Scroll events fire during animation, then settle
      act(() => {
        fireEvent.scroll(viewport);
        vi.advanceTimersByTime(150);
      });

      // scrollTarget is still set, so marker 7 stays active
      expect(screen.getByTestId('marker-7')).toHaveAttribute('aria-selected', 'true');

      vi.useRealTimers();
    });

    it('manual scroll after marker click clears scroll target and recomputes', () => {
      vi.useFakeTimers();

      render(<Gallery withMarkers itemCount={8} />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();

      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1600, clientWidth: 400 });

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      const lastItem = screen.getByTestId('item-7');
      vi.spyOn(lastItem, 'getBoundingClientRect').mockReturnValue(
        { left: 1400, top: 0, right: 1600, bottom: 100, width: 200, height: 100, x: 1400, y: 0, toJSON: () => ({}) },
      );

      // Click last marker — locks scrollTarget=7
      fireEvent.click(screen.getByTestId('marker-7'));

      // Smooth scroll animation fires events and settles
      mockViewportScroll(viewport, { scrollLeft: 1200, scrollWidth: 1600, clientWidth: 400 });
      act(() => {
        fireEvent.scroll(viewport);
        vi.advanceTimersByTime(150);
      });

      expect(screen.getByTestId('marker-7')).toHaveAttribute('aria-selected', 'true');

      // User scrolls manually — wheel event clears scrollingRef, then
      // the scroll event enters Case 4 and recomputes the active index.
      // In a real browser, user-initiated scrolling always fires a wheel
      // (or touch/pointer) event before the scroll events.
      mockViewportScroll(viewport, { scrollLeft: 400, scrollWidth: 1600, clientWidth: 400 });
      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        const visualLeft = i * 200 - 400;
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }

      act(() => {
        fireEvent.wheel(viewport);
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('marker-2')).toHaveAttribute('aria-selected', 'true');

      vi.useRealTimers();
    });

    it('user scroll updates active marker immediately without debounce', () => {
      render(<Gallery withMarkers itemCount={8} />);
      const viewport = screen.getByTestId('viewport');

      mockViewportScroll(viewport, { scrollLeft: 400, scrollWidth: 1600, clientWidth: 400 });

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        const visualLeft = i * 200 - 400;
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }

      // No marker click beforehand, pure user scroll — should update immediately
      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('marker-2')).toHaveAttribute('aria-selected', 'true');
    });

    it('scroll button updates markers in real time during animation (like trackpad)', () => {
      render(<Gallery withMarkers itemCount={8} />);
      const viewport = screen.getByTestId('viewport');

      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1600, clientWidth: 400 });

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        const visualLeft = i * 200;
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }

      // Fire initial scroll to update boundaries so the button is enabled
      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('next')).not.toBeDisabled();
      expect(screen.getByTestId('marker-0')).toHaveAttribute('aria-selected', 'true');

      viewport.scrollBy = vi.fn();

      // Click next button — does NOT set scrollingRef (unlike marker clicks)
      fireEvent.click(screen.getByTestId('next'));

      // Intermediate scroll position during animation: scrollLeft=170
      // Nearest item: item 1 (pos=200, dist=30) beats item 0 (pos=0, dist=170)
      mockViewportScroll(viewport, { scrollLeft: 170, scrollWidth: 1600, clientWidth: 400 });
      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        const visualLeft = i * 200 - 170;
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }

      act(() => {
        fireEvent.scroll(viewport);
      });

      // Marker updates in real time — not suppressed like marker clicks
      expect(screen.getByTestId('marker-1')).toHaveAttribute('aria-selected', 'true');

      // Final position: scrollLeft=340 (85% of 400)
      // Nearest item: item 2 (pos=400, dist=60) beats item 1 (pos=200, dist=140)
      mockViewportScroll(viewport, { scrollLeft: 340, scrollWidth: 1600, clientWidth: 400 });
      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        const visualLeft = i * 200 - 340;
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('marker-2')).toHaveAttribute('aria-selected', 'true');
    });

    it('active marker transitions at the midpoint between two items (nearest snap target)', () => {
      render(<Gallery withMarkers itemCount={8} />);
      const viewport = screen.getByTestId('viewport');

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      // Items at 200px intervals, midpoint between item 1 (200) and item 2 (400) is at 300
      const setupItemsAtScroll = (scrollLeft: number) => {
        mockViewportScroll(viewport, { scrollLeft, scrollWidth: 1600, clientWidth: 400 });
        for (let i = 0; i < 8; i++) {
          const item = screen.getByTestId(`item-${i}`);
          const visualLeft = i * 200 - scrollLeft;
          vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
            { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
          );
        }
      };

      // Just before midpoint — item 1 is nearest (distance 99 vs 101)
      setupItemsAtScroll(299);
      act(() => { fireEvent.scroll(viewport); });
      expect(screen.getByTestId('marker-1')).toHaveAttribute('aria-selected', 'true');

      // Just after midpoint — item 2 is nearest (distance 99 vs 101)
      setupItemsAtScroll(301);
      act(() => { fireEvent.scroll(viewport); });
      expect(screen.getByTestId('marker-2')).toHaveAttribute('aria-selected', 'true');
    });

    it('user input during marker scroll animation cancels the lock', () => {
      vi.useFakeTimers();

      render(<Gallery withMarkers itemCount={8} />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();

      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1600, clientWidth: 400 });

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      const lastItem = screen.getByTestId('item-7');
      vi.spyOn(lastItem, 'getBoundingClientRect').mockReturnValue(
        { left: 1400, top: 0, right: 1600, bottom: 100, width: 200, height: 100, x: 1400, y: 0, toJSON: () => ({}) },
      );

      // Click last marker — scrollTarget=7, scrolling=true
      fireEvent.click(screen.getByTestId('marker-7'));
      expect(screen.getByTestId('marker-7')).toHaveAttribute('aria-selected', 'true');

      // User physically swipes (wheel event) during the animation
      fireEvent.wheel(viewport);

      // Now scroll position is back at the start (user swiped left)
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1600, clientWidth: 400 });
      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        const visualLeft = i * 200;
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }

      // Scroll events from user's swipe — should compute immediately since lock was cancelled
      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('marker-0')).toHaveAttribute('aria-selected', 'true');

      vi.useRealTimers();
    });

    it('scroll button after marker click clears scroll target and recomputes', () => {
      vi.useFakeTimers();

      render(<Gallery withMarkers itemCount={8} />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();

      // Initial state: enable the next button
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1600, clientWidth: 400 });
      act(() => {
        fireEvent.scroll(viewport);
      });

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      // Set up item rects for marker click
      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: i * 200, top: 0, right: i * 200 + 200, bottom: 100, width: 200, height: 100, x: i * 200, y: 0, toJSON: () => ({}) },
        );
      }

      // Click marker 5 — locks scrollTarget=5, sets scrollingRef=true
      fireEvent.click(screen.getByTestId('marker-5'));
      expect(screen.getByTestId('marker-5')).toHaveAttribute('aria-selected', 'true');

      // Let the marker scroll settle
      mockViewportScroll(viewport, { scrollLeft: 1000, scrollWidth: 1600, clientWidth: 400 });
      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        const visualLeft = i * 200 - 1000;
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }
      act(() => {
        fireEvent.scroll(viewport);
        vi.advanceTimersByTime(150);
      });

      // Marker 5 is still active (computeActiveIndex at scrollLeft=1000 → item 5)
      expect(screen.getByTestId('marker-5')).toHaveAttribute('aria-selected', 'true');

      // Now click the next button — should scroll further
      fireEvent.click(screen.getByTestId('next'));

      // Simulate the button's scroll animation landing at scrollLeft=1200
      mockViewportScroll(viewport, { scrollLeft: 1200, scrollWidth: 1600, clientWidth: 400 });
      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        const visualLeft = i * 200 - 1200;
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: visualLeft, top: 0, right: visualLeft + 200, bottom: 100, width: 200, height: 100, x: visualLeft, y: 0, toJSON: () => ({}) },
        );
      }

      act(() => {
        fireEvent.scroll(viewport);
        vi.advanceTimersByTime(150);
      });

      // Active marker should have updated — no longer stuck on marker 5.
      // At scrollLeft=1200 (max scroll), redistribution maps item 7 to pos 1200,
      // making it the nearest — so marker 7 is active.
      expect(screen.getByTestId('marker-7')).toHaveAttribute('aria-selected', 'true');

      vi.useRealTimers();
    });
  });

  describe('scroll-snap-align awareness', () => {
    // Helper: mock getComputedStyle to return a specific scrollSnapAlign for item elements.
    function mockSnapAlign(align: string) {
      const original = window.getComputedStyle;
      vi.spyOn(window, 'getComputedStyle').mockImplementation((el: Element) => {
        const style = original(el);
        if ((el as HTMLElement).dataset.testid?.startsWith('item-')) {
          return { ...style, scrollSnapAlign: align } as CSSStyleDeclaration;
        }
        return style;
      });
    }

    function mockItemRectsForSnap(
      itemCount: number,
      scrollLeft: number,
      itemWidth = 200,
      gap = 10,
    ) {
      const viewport = screen.getByTestId('viewport');
      const viewportRect = {
        left: 0, top: 0, right: 400, bottom: 300,
        width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}),
      };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      for (let i = 0; i < itemCount; i++) {
        const absLeft = i * (itemWidth + gap);
        const visualLeft = absLeft - scrollLeft;
        const item = screen.getByTestId(`item-${i}`);
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue({
          left: visualLeft, top: 0, right: visualLeft + itemWidth, bottom: 100,
          width: itemWidth, height: 100, x: visualLeft, y: 0, toJSON: () => ({}),
        });
      }
    }

    it('marker click uses start-to-start when scroll-snap-align is "start"', () => {
      render(<Gallery withMarkers itemCount={5} />);
      mockSnapAlign('start');

      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      const viewportRect = {
        left: 0, top: 0, right: 400, bottom: 300,
        width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}),
      };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);
      vi.spyOn(screen.getByTestId('item-2'), 'getBoundingClientRect').mockReturnValue({
        left: 420, top: 0, right: 620, bottom: 100,
        width: 200, height: 100, x: 420, y: 0, toJSON: () => ({}),
      });

      fireEvent.click(screen.getByTestId('marker-2'));

      // start: item left (420) - viewport left (0) = 420
      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 420,
        behavior: 'smooth',
      });
    });

    it('marker click uses center-to-center when scroll-snap-align is "center"', () => {
      render(<Gallery withMarkers itemCount={5} />);
      mockSnapAlign('center');

      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      const viewportRect = {
        left: 0, top: 0, right: 400, bottom: 300,
        width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}),
      };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);
      vi.spyOn(screen.getByTestId('item-2'), 'getBoundingClientRect').mockReturnValue({
        left: 420, top: 0, right: 620, bottom: 100,
        width: 200, height: 100, x: 420, y: 0, toJSON: () => ({}),
      });

      fireEvent.click(screen.getByTestId('marker-2'));

      // center: item center (520) - viewport center (200) = 320
      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 320,
        behavior: 'smooth',
      });
    });

    it('computeActiveIndex picks correct item for scroll-snap-align: start', () => {
      vi.useFakeTimers();
      render(<Gallery withMarkers itemCount={5} />);
      mockSnapAlign('start');

      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();

      // scrollLeft=210: item 1 start at viewport start → item 1 active
      mockViewportScroll(viewport, { scrollLeft: 210, scrollWidth: 1050, clientWidth: 400 });
      mockItemRectsForSnap(5, 210);

      act(() => { fireEvent.scroll(viewport); });

      expect(screen.getByTestId('marker-1')).toHaveAttribute('aria-selected', 'true');
      vi.useRealTimers();
    });

    it('computeActiveIndex picks correct item for scroll-snap-align: center', () => {
      vi.useFakeTimers();
      render(<Gallery withMarkers itemCount={5} />);
      mockSnapAlign('center');

      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();

      // For center snap, when item 2 is centered:
      // item 2 center = 2*210 + 100 = 520. viewport center = 200.
      // scrollLeft where item 2 center = viewport center: 520 - 200 = 320
      mockViewportScroll(viewport, { scrollLeft: 320, scrollWidth: 1050, clientWidth: 400 });
      mockItemRectsForSnap(5, 320);

      act(() => { fireEvent.scroll(viewport); });

      expect(screen.getByTestId('marker-2')).toHaveAttribute('aria-selected', 'true');
      vi.useRealTimers();
    });

    it('step button uses correct alignment for scroll-snap-align: center', () => {
      render(<Gallery withMarkers itemCount={5} step={1} />);
      mockSnapAlign('center');

      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      // Item 1 is centered: scrollLeft=110, item 1 center at viewport center
      mockViewportScroll(viewport, { scrollLeft: 110, scrollWidth: 1050, clientWidth: 400 });
      mockItemRectsForSnap(5, 110);

      act(() => { fireEvent.scroll(viewport); });

      fireEvent.click(screen.getByTestId('next'));

      // Anchor = item 1 (center=100, closest to viewport center=200)
      // Target = item 2, center = 2*210+100 - 110 = 410, viewport center = 200
      // Distance = 410 - 200 = 210
      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 210,
        behavior: 'smooth',
      });
    });

    it('marker click uses end-to-end when scroll-snap-align is "end"', () => {
      render(<Gallery withMarkers itemCount={5} />);
      mockSnapAlign('end');

      const viewport = screen.getByTestId('viewport');
      const scrollBySpy = vi.fn();
      viewport.scrollBy = scrollBySpy;

      const viewportRect = {
        left: 0, top: 0, right: 400, bottom: 300,
        width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}),
      };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);
      vi.spyOn(screen.getByTestId('item-2'), 'getBoundingClientRect').mockReturnValue({
        left: 420, top: 0, right: 620, bottom: 100,
        width: 200, height: 100, x: 420, y: 0, toJSON: () => ({}),
      });

      fireEvent.click(screen.getByTestId('marker-2'));

      // end: item right (620) - viewport right (400) = 220
      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 220,
        behavior: 'smooth',
      });
    });
  });

  describe('imperative scrollTo', () => {
    function GalleryWithRef({
      refObj,
      itemCount = 8,
    }: {
      refObj: React.RefObject<ScrollGalleryRootRef | null>;
      itemCount?: number;
    }) {
      return (
        <ScrollGalleryRoot ref={refObj}>
          <ScrollGalleryViewport data-testid="viewport" style={{ overflow: 'auto' }}>
            {Array.from({ length: itemCount }, (_, i) => (
              <ScrollGalleryItem key={i} data-testid={`item-${i}`}>
                Item {i}
              </ScrollGalleryItem>
            ))}
          </ScrollGalleryViewport>
          <ScrollGalleryScrollMarkerGroup data-testid="marker-group">
            {Array.from({ length: itemCount }, (_, i) => (
              <ScrollGalleryScrollMarker key={i} index={i} data-testid={`marker-${i}`} />
            ))}
          </ScrollGalleryScrollMarkerGroup>
        </ScrollGalleryRoot>
      );
    }

    it('scrollTo scrolls the viewport and sets the active marker immediately', () => {
      const ref = React.createRef<ScrollGalleryRootRef>();
      render(<GalleryWithRef refObj={ref} />);
      const viewport = screen.getByTestId('viewport');

      viewport.scrollBy = vi.fn();

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: i * 200, top: 0, right: i * 200 + 200, bottom: 100, width: 200, height: 100, x: i * 200, y: 0, toJSON: () => ({}) },
        );
      }

      act(() => {
        ref.current!.scrollTo(3);
      });

      // No snap-align → start: item 3 left (600) - viewport left (0)
      expect(viewport.scrollBy).toHaveBeenCalledWith({
        left: 600,
        behavior: 'smooth',
      });
      expect(screen.getByTestId('marker-3')).toHaveAttribute('aria-selected', 'true');
    });

    it('scrollTo with behavior "instant" passes it through', () => {
      const ref = React.createRef<ScrollGalleryRootRef>();
      render(<GalleryWithRef refObj={ref} />);
      const viewport = screen.getByTestId('viewport');

      viewport.scrollBy = vi.fn();

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      for (let i = 0; i < 8; i++) {
        const item = screen.getByTestId(`item-${i}`);
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: i * 200, top: 0, right: i * 200 + 200, bottom: 100, width: 200, height: 100, x: i * 200, y: 0, toJSON: () => ({}) },
        );
      }

      act(() => {
        ref.current!.scrollTo(5, 'instant');
      });

      // No snap-align → start: item 5 left (1000) - viewport left (0)
      expect(viewport.scrollBy).toHaveBeenCalledWith({
        left: 1000,
        behavior: 'instant',
      });
      expect(screen.getByTestId('marker-5')).toHaveAttribute('aria-selected', 'true');
    });

    it('scrollTo fires onValueChange with source "indicator"', () => {
      const onValueChange = vi.fn();
      const ref = React.createRef<ScrollGalleryRootRef>();

      function GalleryWithCallback() {
        return (
          <ScrollGalleryRoot ref={ref} onValueChange={onValueChange}>
            <ScrollGalleryViewport data-testid="viewport" style={{ overflow: 'auto' }}>
              {Array.from({ length: 5 }, (_, i) => (
                <ScrollGalleryItem key={i} data-testid={`item-${i}`}>
                  Item {i}
                </ScrollGalleryItem>
              ))}
            </ScrollGalleryViewport>
          </ScrollGalleryRoot>
        );
      }

      render(<GalleryWithCallback />);
      const viewport = screen.getByTestId('viewport');

      viewport.scrollBy = vi.fn();

      const viewportRect = { left: 0, top: 0, right: 400, bottom: 300, width: 400, height: 300, x: 0, y: 0, toJSON: () => ({}) };
      vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(viewportRect);

      for (let i = 0; i < 5; i++) {
        const item = screen.getByTestId(`item-${i}`);
        vi.spyOn(item, 'getBoundingClientRect').mockReturnValue(
          { left: i * 200, top: 0, right: i * 200 + 200, bottom: 100, width: 200, height: 100, x: i * 200, y: 0, toJSON: () => ({}) },
        );
      }

      act(() => {
        ref.current!.scrollTo(2);
      });

      expect(onValueChange).toHaveBeenCalledWith(2, { source: 'indicator' });
    });

    it('scrollTo does nothing for an out-of-range index', () => {
      const ref = React.createRef<ScrollGalleryRootRef>();
      render(<GalleryWithRef refObj={ref} itemCount={3} />);
      const viewport = screen.getByTestId('viewport');

      viewport.scrollBy = vi.fn();

      act(() => {
        ref.current!.scrollTo(10);
      });

      expect(viewport.scrollBy).not.toHaveBeenCalled();
      expect(screen.getByTestId('marker-0')).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('data attributes', () => {
    it('ScrollMarker renders data-index', () => {
      render(<Gallery withMarkers itemCount={3} />);
      expect(screen.getByTestId('marker-0')).toHaveAttribute('data-index', '0');
      expect(screen.getByTestId('marker-1')).toHaveAttribute('data-index', '1');
      expect(screen.getByTestId('marker-2')).toHaveAttribute('data-index', '2');
    });

    it('ScrollGalleryItem renders data-index', () => {
      render(<Gallery itemCount={3} />);
      expect(screen.getByTestId('item-0')).toHaveAttribute('data-index');
      expect(screen.getByTestId('item-1')).toHaveAttribute('data-index');
      expect(screen.getByTestId('item-2')).toHaveAttribute('data-index');
    });

    it('Viewport renders data-can-scroll-next when content overflows', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(viewport).toHaveAttribute('data-can-scroll-next');
      expect(viewport).not.toHaveAttribute('data-can-scroll-prev');
    });

    it('Viewport renders data-can-scroll-prev after scrolling forward', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 200, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(viewport).toHaveAttribute('data-can-scroll-prev');
      expect(viewport).toHaveAttribute('data-can-scroll-next');
    });

    it('Viewport removes both scroll attributes at ends', () => {
      render(<Gallery itemCount={1} />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 400, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(viewport).not.toHaveAttribute('data-can-scroll-prev');
      expect(viewport).not.toHaveAttribute('data-can-scroll-next');
    });

    it('Viewport renders data-scrolling during scroll and removes it after settle', () => {
      vi.useFakeTimers();

      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 100, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(viewport).toHaveAttribute('data-scrolling');

      act(() => {
        vi.advanceTimersByTime(150);
      });

      expect(viewport).not.toHaveAttribute('data-scrolling');

      vi.useRealTimers();
    });

    it('ScrollMarkerGroup renders data-focus-within when a child marker is focused', () => {
      render(<Gallery withMarkers />);
      const group = screen.getByTestId('marker-group');
      const marker = screen.getByTestId('marker-0');

      expect(group).not.toHaveAttribute('data-focus-within');

      act(() => {
        marker.focus();
        fireEvent.focus(group);
      });

      expect(group).toHaveAttribute('data-focus-within');
    });

    it('ScrollMarkerGroup removes data-focus-within when focus leaves', () => {
      render(
        <div>
          <Gallery withMarkers />
          <button data-testid="outside">Outside</button>
        </div>,
      );
      const group = screen.getByTestId('marker-group');
      const marker = screen.getByTestId('marker-0');
      const outside = screen.getByTestId('outside');

      act(() => {
        marker.focus();
      });

      expect(group).toHaveAttribute('data-focus-within');

      act(() => {
        outside.focus();
      });

      expect(group).not.toHaveAttribute('data-focus-within');
    });
  });

  describe('loop', () => {
    it('Previous button is not disabled at scroll start when loop=true', () => {
      render(<Gallery loop />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('prev')).not.toBeDisabled();
    });

    it('Next button is not disabled at scroll end when loop=true', () => {
      render(<Gallery loop />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 600, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('next')).not.toBeDisabled();
    });

    it('Next button scrolls to first item when at the end with loop=true', () => {
      render(<Gallery loop withMarkers />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();
      mockViewportScroll(viewport, { scrollLeft: 600, scrollWidth: 1000, clientWidth: 400 });

      const items = screen.getAllByText(/^Item \d+$/);
      items.forEach((item, i) => {
        vi.spyOn(item.closest('[data-testid]')!, 'getBoundingClientRect').mockReturnValue({
          left: i * 200 - 600,
          top: 0,
          right: (i + 1) * 200 - 600,
          bottom: 100,
          width: 200,
          height: 100,
          x: i * 200 - 600,
          y: 0,
          toJSON: () => ({}),
        });
      });

      act(() => {
        fireEvent.scroll(viewport);
      });

      fireEvent.click(screen.getByTestId('next'));

      expect(viewport.scrollBy).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: 'smooth' }),
      );
    });

    it('Previous button scrolls to last item when at the start with loop=true', () => {
      render(<Gallery loop withMarkers />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1000, clientWidth: 400 });

      const items = screen.getAllByText(/^Item \d+$/);
      items.forEach((item, i) => {
        vi.spyOn(item.closest('[data-testid]')!, 'getBoundingClientRect').mockReturnValue({
          left: i * 200,
          top: 0,
          right: (i + 1) * 200,
          bottom: 100,
          width: 200,
          height: 100,
          x: i * 200,
          y: 0,
          toJSON: () => ({}),
        });
      });

      act(() => {
        fireEvent.scroll(viewport);
      });

      fireEvent.click(screen.getByTestId('prev'));

      expect(viewport.scrollBy).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: 'smooth' }),
      );
    });

    it('Next loop click immediately sets active index to 0', () => {
      render(<Gallery loop withMarkers />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();
      mockViewportScroll(viewport, { scrollLeft: 600, scrollWidth: 1000, clientWidth: 400 });

      const items = screen.getAllByText(/^Item \d+$/);
      items.forEach((item, i) => {
        vi.spyOn(item.closest('[data-testid]')!, 'getBoundingClientRect').mockReturnValue({
          left: i * 200 - 600,
          top: 0,
          right: (i + 1) * 200 - 600,
          bottom: 100,
          width: 200,
          height: 100,
          x: i * 200 - 600,
          y: 0,
          toJSON: () => ({}),
        });
      });

      act(() => {
        fireEvent.scroll(viewport);
      });

      fireEvent.click(screen.getByTestId('next'));

      expect(screen.getByTestId('marker-0')).toHaveAttribute('aria-selected', 'true');
    });

    it('Previous loop click immediately sets active index to last item', () => {
      render(<Gallery loop withMarkers />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1000, clientWidth: 400 });

      const items = screen.getAllByText(/^Item \d+$/);
      items.forEach((item, i) => {
        vi.spyOn(item.closest('[data-testid]')!, 'getBoundingClientRect').mockReturnValue({
          left: i * 200,
          top: 0,
          right: (i + 1) * 200,
          bottom: 100,
          width: 200,
          height: 100,
          x: i * 200,
          y: 0,
          toJSON: () => ({}),
        });
      });

      act(() => {
        fireEvent.scroll(viewport);
      });

      fireEvent.click(screen.getByTestId('prev'));

      expect(screen.getByTestId('marker-4')).toHaveAttribute('aria-selected', 'true');
    });

    it('buttons still disable normally when loop=false (default)', () => {
      render(<Gallery />);
      const viewport = screen.getByTestId('viewport');
      mockViewportScroll(viewport, { scrollLeft: 0, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('prev')).toBeDisabled();
      expect(screen.getByTestId('next')).not.toBeDisabled();

      mockViewportScroll(viewport, { scrollLeft: 600, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      expect(screen.getByTestId('prev')).not.toBeDisabled();
      expect(screen.getByTestId('next')).toBeDisabled();
    });

    it('normal scroll (not at boundary) works normally with loop=true', () => {
      render(<Gallery loop />);
      const viewport = screen.getByTestId('viewport');
      viewport.scrollBy = vi.fn();
      mockViewportScroll(viewport, { scrollLeft: 200, scrollWidth: 1000, clientWidth: 400 });

      act(() => {
        fireEvent.scroll(viewport);
      });

      fireEvent.click(screen.getByTestId('next'));

      expect(viewport.scrollBy).toHaveBeenCalledWith(
        expect.objectContaining({
          left: 400 * 0.85,
          behavior: 'smooth',
        }),
      );
    });
  });
});
