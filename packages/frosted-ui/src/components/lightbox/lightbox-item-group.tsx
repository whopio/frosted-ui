'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useLightboxContext } from './lightbox-context';

interface LightboxItemGroupState extends Record<string, unknown> {
  activeIndex: number;
  direction: 'forward' | 'backward';
}

interface LightboxItemGroupProps extends useRender.ComponentProps<'div', LightboxItemGroupState> {
  /**
   * How many adjacent items to keep rendered on each side of the active item
   * for preloading. Set to 0 to only render the active item.
   * @default 1
   */
  preload?: number;
}

const itemGroupStateAttributesMapping = {
  activeIndex: (value: unknown) => ({ 'data-active-index': String(value) }),
  direction: (value: unknown) => ({ 'data-direction': String(value) }),
};

/**
 * Provides the item group context that tracks which items should render.
 * Only mounts active item + `preload` adjacent items (swap-based rendering).
 */

interface LightboxItemGroupContextValue {
  activeIndex: number;
  preload: number;
  direction: 'forward' | 'backward';
}

const LightboxItemGroupContext = React.createContext<LightboxItemGroupContextValue>({
  activeIndex: 0,
  preload: 1,
  direction: 'forward',
});

function useLightboxItemGroupContext(): LightboxItemGroupContextValue {
  return React.useContext(LightboxItemGroupContext);
}

const LightboxItemGroup = React.forwardRef<HTMLDivElement, LightboxItemGroupProps>(
  function LightboxItemGroup(props, forwardedRef) {
    const { render, preload = 1, ...elementProps } = props;
    const { activeIndex } = useLightboxContext();

    const prevIndexRef = React.useRef(activeIndex);
    const [direction, setDirection] = React.useState<'forward' | 'backward'>('forward');

    React.useEffect(() => {
      if (activeIndex !== prevIndexRef.current) {
        setDirection(activeIndex > prevIndexRef.current ? 'forward' : 'backward');
        prevIndexRef.current = activeIndex;
      }
    }, [activeIndex]);

    const state = React.useMemo<LightboxItemGroupState>(
      () => ({ activeIndex, direction }),
      [activeIndex, direction],
    );

    const groupContext = React.useMemo<LightboxItemGroupContextValue>(
      () => ({ activeIndex, preload, direction }),
      [activeIndex, preload, direction],
    );

    return (
      <LightboxItemGroupContext.Provider value={groupContext}>
        {useRender({
          render,
          ref: forwardedRef,
          state,
          stateAttributesMapping: itemGroupStateAttributesMapping,
          props: mergeProps<'div'>(
            {
              className: 'fui-LightboxItemGroup',
              role: 'group',
            } as React.ComponentPropsWithRef<'div'>,
            elementProps as React.ComponentPropsWithRef<'div'>,
          ),
          defaultTagName: 'div',
        })}
      </LightboxItemGroupContext.Provider>
    );
  },
);

LightboxItemGroup.displayName = 'LightboxItemGroup';

export { LightboxItemGroup, LightboxItemGroupContext, useLightboxItemGroupContext };
export type { LightboxItemGroupProps, LightboxItemGroupState, LightboxItemGroupContextValue };
