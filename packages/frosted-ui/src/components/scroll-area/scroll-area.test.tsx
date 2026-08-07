import { render } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it } from 'vitest';

import { ScrollArea } from './scroll-area';

function getContentElement(container: HTMLElement) {
  return container.querySelector('.fui-ScrollAreaViewport > [role="presentation"]') as HTMLElement | null;
}

describe('ScrollArea', () => {
  it('renders root/viewport classes used for flex-rail overflow fixes', () => {
    const { container } = render(
      <ScrollArea scrollbars="vertical" style={{ flex: 1 }}>
        <div style={{ height: 1200 }}>Tall content</div>
      </ScrollArea>,
    );

    expect(container.querySelector('.fui-ScrollAreaRoot')).toBeTruthy();
    expect(container.querySelector('.fui-ScrollAreaViewport')).toBeTruthy();
  });

  it('overrides Base UI Content minWidth for vertical scrolling', () => {
    const { container } = render(
      <ScrollArea scrollbars="vertical" style={{ height: 100, width: 100 }}>
        <div style={{ height: 300 }}>Tall</div>
      </ScrollArea>,
    );

    const content = getContentElement(container);
    expect(content).toBeTruthy();
    expect(content?.style.minWidth).toBe('0px');
    expect(content?.style.width).toBe('100%');
  });

  it('overrides Base UI Content minWidth when scrollbars is both (default)', () => {
    const { container } = render(
      <ScrollArea scrollbars="both" style={{ height: 100, width: 100 }}>
        <div style={{ height: 300, width: 300 }}>Tall and wide</div>
      </ScrollArea>,
    );

    const content = getContentElement(container);
    expect(content).toBeTruthy();
    expect(content?.style.minWidth).toBe('0px');
    expect(content?.style.width).toBe('100%');
  });

  it('keeps Base UI Content minWidth fit-content for horizontal-only scrolling', () => {
    const { container } = render(
      <ScrollArea scrollbars="horizontal" style={{ height: 100, width: 100 }}>
        <div style={{ width: 300 }}>Wide</div>
      </ScrollArea>,
    );

    const content = getContentElement(container);
    expect(content).toBeTruthy();
    // Frosted does not override; Base UI's default remains.
    expect(content?.style.minWidth).not.toBe('0px');
    expect(content?.style.width).not.toBe('100%');
  });
});
