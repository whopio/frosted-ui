'use client';

import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../helpers/use-isomorphic-layout-effect';

interface IndicatorPosition {
  left: number;
  width: number;
  animate: boolean;
}

const BaseTabsIndicator = () => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [position, setPosition] = React.useState<IndicatorPosition | null>(null);

  useIsomorphicLayoutEffect(() => {
    const indicator = ref.current;
    const list = indicator?.parentElement;
    if (!indicator || !list) return;

    const measure = () => {
      const active = list.querySelector<HTMLElement>(
        '.fui-BaseTabsTrigger[data-selected], .fui-BaseTabsTrigger[data-active], .fui-BaseTabsTrigger[aria-current="page"]',
      );
      const label = active?.querySelector<HTMLElement>('.fui-BaseTabsTriggerInner');
      if (!label) {
        setPosition(null);
        return;
      }

      const listRect = list.getBoundingClientRect();
      const labelRect = label.getBoundingClientRect();
      const padding = getComputedStyle(label);
      const leftPadding = parseFloat(padding.paddingLeft) || 0;
      const rightPadding = parseFloat(padding.paddingRight) || 0;
      const left = labelRect.left - listRect.left - list.clientLeft + list.scrollLeft + leftPadding;
      const width = labelRect.width - leftPadding - rightPadding;

      setPosition((current) =>
        current?.left === left && current.width === width ? current : { left, width, animate: current !== null },
      );
    };

    const resizeObserver = new ResizeObserver(measure);
    const observeLabels = () => {
      resizeObserver.disconnect();
      resizeObserver.observe(list);
      list.querySelectorAll('.fui-BaseTabsTriggerInner').forEach((label) => resizeObserver.observe(label));
      measure();
    };
    const mutationObserver = new MutationObserver(observeLabels);
    mutationObserver.observe(list, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['data-selected', 'data-active', 'aria-current', 'dir', 'class', 'style'],
    });
    const ancestorObserver = new MutationObserver(measure);
    for (let ancestor = list.parentElement; ancestor; ancestor = ancestor.parentElement) {
      ancestorObserver.observe(ancestor, { attributes: true, attributeFilter: ['dir', 'class', 'style'] });
    }
    observeLabels();

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      ancestorObserver.disconnect();
    };
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="fui-BaseTabsIndicator"
      data-ready={position ? '' : undefined}
      data-animated={position?.animate ? '' : undefined}
      style={position ? { translate: `${position.left}px 0`, scale: `${position.width} 1` } : undefined}
    />
  );
};

export { BaseTabsIndicator };
