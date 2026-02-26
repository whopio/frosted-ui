import { render, screen, fireEvent, act } from '@testing-library/react';
import * as React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { ScrollGalleryItem } from './scroll-gallery-item';
import { ScrollGalleryNext } from './scroll-gallery-next';
import { ScrollGalleryPrevious } from './scroll-gallery-previous';
import { ScrollGalleryRoot } from './scroll-gallery-root';
import { ScrollGalleryScrollMarker } from './scroll-gallery-scroll-marker';
import { ScrollGalleryScrollMarkerGroup } from './scroll-gallery-scroll-marker-group';
import { ScrollGalleryViewport } from './scroll-gallery-viewport';

let intersectionCallbacks: IntersectionObserverCallback[] = [];
let resizeCallbacks: ResizeObserverCallback[] = [];

beforeEach(() => {
  intersectionCallbacks = [];
  resizeCallbacks = [];

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
  orientation = 'horizontal',
  withMarkers = false,
}: {
  itemCount?: number;
  defaultValue?: number;
  orientation?: 'horizontal' | 'vertical';
  withMarkers?: boolean;
} = {}) {
  return (
    <ScrollGalleryRoot defaultValue={defaultValue} orientation={orientation}>
      <ScrollGalleryViewport data-testid="viewport" style={{ overflow: 'auto' }}>
        {Array.from({ length: itemCount }, (_, i) => (
          <ScrollGalleryItem key={i} data-testid={`item-${i}`}>
            Item {i}
          </ScrollGalleryItem>
        ))}
      </ScrollGalleryViewport>
      <ScrollGalleryPrevious data-testid="prev">Previous</ScrollGalleryPrevious>
      <ScrollGalleryNext data-testid="next">Next</ScrollGalleryNext>
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
      const marker0 = screen.getByTestId('marker-0');
      marker0.focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowRight' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-1'));
    });

    it('ArrowLeft moves focus to previous marker', () => {
      render(<Gallery withMarkers />);
      const marker2 = screen.getByTestId('marker-2');
      marker2.focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowLeft' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-1'));
    });

    it('ArrowRight wraps from last to first', () => {
      render(<Gallery withMarkers />);
      screen.getByTestId('marker-4').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowRight' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-0'));
    });

    it('ArrowLeft wraps from first to last', () => {
      render(<Gallery withMarkers />);
      screen.getByTestId('marker-0').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowLeft' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-4'));
    });

    it('Home moves focus to first marker', () => {
      render(<Gallery withMarkers />);
      screen.getByTestId('marker-3').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'Home' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-0'));
    });

    it('End moves focus to last marker', () => {
      render(<Gallery withMarkers />);
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
  });

  describe('ScrollMarkerGroup keyboard navigation (vertical)', () => {
    it('ArrowDown moves focus to next marker', () => {
      render(<Gallery withMarkers orientation="vertical" />);
      screen.getByTestId('marker-0').focus();

      fireEvent.keyDown(screen.getByTestId('marker-group'), { key: 'ArrowDown' });
      expect(document.activeElement).toBe(screen.getByTestId('marker-1'));
    });

    it('ArrowUp moves focus to previous marker', () => {
      render(<Gallery withMarkers orientation="vertical" />);
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

  describe('scroll marker click behavior', () => {
    it('clicking a marker calls scrollBy to bring target item to viewport start', () => {
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

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 600,
        behavior: 'smooth',
      });
    });
  });
});
