'use client';

import * as React from 'react';

const TRIGGER_SELECTOR = '.fui-BaseTabsTrigger';
const ACTIVE_TRIGGER_SELECTOR = '.fui-BaseTabsTrigger:where([data-selected], [data-active])';

// offsetLeft/offsetWidth ignore ancestor transforms, so a list inside a zooming dialog still measures true.
function offsetLeftWithin(element: HTMLElement, container: HTMLElement) {
  let left = 0;
  let node: HTMLElement | null = element;
  while (node && node !== container) {
    left += node.offsetLeft;
    node = node.offsetParent as HTMLElement | null;
  }
  return node === container ? left : null;
}

const BaseTabsIndicator = () => {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useLayoutEffect(() => {
    const indicator = ref.current;
    const list = indicator?.parentElement;
    if (!indicator || !list) return;

    const place = () => {
      const trigger = list.querySelector<HTMLElement>(ACTIVE_TRIGGER_SELECTOR);
      const left = trigger ? offsetLeftWithin(trigger, list) : null;

      if (!trigger || left === null) {
        indicator.removeAttribute('data-visible');
        indicator.removeAttribute('data-animated');
        return;
      }

      indicator.style.setProperty('--tabs-indicator-left', `${left}px`);
      indicator.style.setProperty('--tabs-indicator-width', `${trigger.offsetWidth}`);

      if (!indicator.hasAttribute('data-visible')) {
        indicator.setAttribute('data-visible', '');
        // Flush the first placement before enabling the transition so the bar appears in place instead of sliding in.
        indicator.getBoundingClientRect();
        indicator.setAttribute('data-animated', '');
      }
    };

    const resizeObserver = new ResizeObserver(place);
    const observeTriggers = () => {
      resizeObserver.disconnect();
      resizeObserver.observe(list);
      list.querySelectorAll(TRIGGER_SELECTOR).forEach((trigger) => resizeObserver.observe(trigger));
    };

    const mutationObserver = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.type === 'childList')) observeTriggers();
      place();
    });
    mutationObserver.observe(list, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['data-selected', 'data-active'],
    });

    observeTriggers();
    place();

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return <span ref={ref} aria-hidden className="fui-BaseTabsIndicator" />;
};
BaseTabsIndicator.displayName = 'BaseTabsIndicator';

export { BaseTabsIndicator };
