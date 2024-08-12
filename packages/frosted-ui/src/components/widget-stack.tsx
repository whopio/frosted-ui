'use client';

import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';

import { Slot } from '@radix-ui/react-slot';
import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';
import { useIsomorphicLayoutEffect } from '../helpers/use-isomorphic-layout-effect';
import { widgetStackRootPropDefs } from './widget-stack.props';

type WidgetControls = {
  next: () => void;
  prev: () => void;
  scrollToIndex: (index: number) => void;
} | null;

const WidgetStackContext = React.createContext<{
  nextDisabled: boolean;
  setNextDisabled: (disabled: boolean) => void;
  prevDisabled: boolean;
  setPrevDisabled: (disabled: boolean) => void;
  controls: WidgetControls;
  setControls: (controls: WidgetControls) => void;
  disableAutoPlay: boolean;
  setDisableAutoPlay: (disabled: boolean) => void;
  currentWidgetIndex: number;
  setCurrentWidgetIndex: (index: number) => void;
  widgetsCount?: number;
  setWidgetsCount: (count: number) => void;
  orientation?: 'horizontal' | 'vertical';
  autoPlay?: number;
}>({
  nextDisabled: false,
  setNextDisabled: (disabled: boolean) => null,
  prevDisabled: false,
  setPrevDisabled: (disabled: boolean) => null,
  controls: null,
  setControls: (controls: WidgetControls) => null,
  disableAutoPlay: false,
  setDisableAutoPlay: (disabled: boolean) => null,
  currentWidgetIndex: 0,
  setCurrentWidgetIndex: (index: number) => null,
  widgetsCount: 0,
  setWidgetsCount: (count: number) => null,
  orientation: undefined,
  autoPlay: undefined,
});

function _useWidgetStack() {
  const context = React.useContext(WidgetStackContext);
  if (context === undefined) {
    throw new Error('WidgetStackContext must be used within a WidgetStackRoot');
  }
  return context;
}

export function useWidgetStack() {
  const context = React.useContext(WidgetStackContext);
  if (context === undefined) {
    throw new Error('WidgetStackContext must be used within a WidgetStackRoot');
  }
  const {
    nextDisabled,
    prevDisabled,
    currentWidgetIndex,
    widgetsCount,
    setDisableAutoPlay,
    controls,
  } = context;

  const widgetStackContext = React.useMemo(() => {
    return {
      nextDisabled: nextDisabled,
      prevDisabled: prevDisabled,
      controls: controls
        ? {
            prev: () => {
              setDisableAutoPlay(true);
              controls?.prev();
            },
            next: () => {
              setDisableAutoPlay(true);
              controls?.next();
            },
            scrollToIndex: (index: number) => {
              setDisableAutoPlay(true);
              controls?.scrollToIndex(index);
            },
          }
        : null,
      currentWidgetIndex: currentWidgetIndex,
      widgetsCount: widgetsCount,
    };
  }, [
    nextDisabled,
    prevDisabled,
    currentWidgetIndex,
    widgetsCount,
    setDisableAutoPlay,
    controls,
  ]);

  return widgetStackContext;
}
interface WidgetStackRootProps
  extends GetPropDefTypes<typeof widgetStackRootPropDefs> {
  children: React.ReactNode;
  autoPlay?: number;
}
const WidgetStackRoot: React.FC<WidgetStackRootProps> = ({
  children,
  orientation = widgetStackRootPropDefs.orientation.default,
  autoPlay,
  ...props
}) => {
  const [controls, setControls] = React.useState<WidgetControls>(null);
  const [currentWidgetIndex, setCurrentWidgetIndex] = React.useState(0);
  const [nextDisabled, setNextDisabled] = React.useState(false);
  const [prevDisabled, setPrevDisabled] = React.useState(false);
  const [disableAutoPlay, setDisableAutoPlay] = React.useState(false);
  const [widgetsCount, setWidgetsCount] = React.useState(0);

  return (
    <WidgetStackContext.Provider
      value={{
        controls,
        setControls,
        disableAutoPlay,
        setDisableAutoPlay,
        currentWidgetIndex,
        setCurrentWidgetIndex,
        nextDisabled,
        setNextDisabled,
        prevDisabled,
        setPrevDisabled,
        orientation,
        widgetsCount,
        setWidgetsCount,
        autoPlay,
      }}
      {...props}
    >
      {children}
    </WidgetStackContext.Provider>
  );
};
WidgetStackRoot.displayName = 'WidgetStackRoot';

type WidgetStackStackElement = React.ElementRef<'div'>;
interface WidgetStackStackProps
  extends PropsWithoutRefOrColor<'div'>,
    MarginProps {
  asChild?: boolean;
}
const WidgetStackStack = React.forwardRef<
  WidgetStackStackElement,
  WidgetStackStackProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, children, ...rootProps } = marginRest;

  const {
    currentWidgetIndex,
    orientation,
    setCurrentWidgetIndex,
    controls,
    setControls,
    setNextDisabled,
    setPrevDisabled,
    autoPlay,
    disableAutoPlay,
    setWidgetsCount,
  } = _useWidgetStack();
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    setWidgetsCount(React.Children.count(children));
  }, [children]);

  const currentWidgetIndexRef = React.useRef(currentWidgetIndex);
  React.useEffect(() => {
    currentWidgetIndexRef.current = currentWidgetIndex;
  }, [currentWidgetIndex]);

  useIsomorphicLayoutEffect(() => {
    const scrollAreaElement = scrollAreaRef.current;
    if (!scrollAreaElement) return;
    const items = Array.from(scrollAreaElement.children);

    // ScrollIntoView animation is interrupted in Chrome
    // when you click a prev/next button that triggers the animation and turns disabled.
    // That's why scrollBy method is used instead.
    const dir = orientation === 'vertical' ? 'top' : 'left';
    const next = () => {
      const target = items[currentWidgetIndexRef.current + 1];
      if (target) {
        // get distance from top of scrollAreaElement to top of target
        const targetRect = target.getBoundingClientRect();
        const scrollAreaRect = scrollAreaElement.getBoundingClientRect();
        const distance = targetRect[dir] - scrollAreaRect[dir];
        scrollAreaElement.scrollBy({
          [dir]: distance,
          behavior: 'smooth',
        });
      }
    };
    const prev = () => {
      const target = items[currentWidgetIndexRef.current - 1];
      if (target) {
        // get distance from top of scrollAreaElement to top of target
        const targetRect = target.getBoundingClientRect();
        const scrollAreaRect = scrollAreaElement.getBoundingClientRect();
        const distance = targetRect[dir] - scrollAreaRect[dir];
        scrollAreaElement.scrollBy({
          [dir]: distance,
          behavior: 'smooth',
        });
      }
    };
    const scrollToIndex = (index: number) => {
      const target = items[index];
      if (target) {
        // get distance from top of scrollAreaElement to top of target
        const targetRect = target.getBoundingClientRect();
        const scrollAreaRect = scrollAreaElement.getBoundingClientRect();
        const distance = targetRect[dir] - scrollAreaRect[dir];
        console.log({ index, distance, target });

        scrollAreaElement.scrollBy({
          [dir]: distance,
          behavior: 'smooth',
        });
      }
    };
    setControls({
      next,
      prev,
      scrollToIndex,
    });
  }, [orientation]);

  const disableAutoPlayRef = React.useRef(disableAutoPlay);
  const directionRef = React.useRef<'forward' | 'backward'>('forward');
  const [isHovering, setIsHovering] = React.useState(false);
  React.useEffect(() => {
    disableAutoPlayRef.current = disableAutoPlay;
    if (!autoPlay || disableAutoPlay || isHovering) return;

    const scrollAreaElement = scrollAreaRef.current;
    if (!scrollAreaElement) return;

    const interval = setInterval(() => {
      if (disableAutoPlayRef.current) return;
      const scrollAreaElement = scrollAreaRef.current;
      if (!scrollAreaElement) return;
      const items = Array.from(scrollAreaElement.children);

      let scrollToIndex =
        directionRef.current === 'forward'
          ? currentWidgetIndexRef.current + 1
          : currentWidgetIndexRef.current - 1;
      if (scrollToIndex < 0) {
        scrollToIndex = 1;
        directionRef.current = 'forward';
      } else if (scrollToIndex >= items.length) {
        scrollToIndex = items.length - 2;
        directionRef.current = 'backward';
      }
      if (directionRef.current === 'forward') {
        controls?.next();
      } else {
        controls?.prev();
      }
    }, autoPlay);

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, controls, isHovering, disableAutoPlay]);

  useIsomorphicLayoutEffect(() => {
    const scrollAreaElement = scrollAreaRef.current;
    if (!scrollAreaElement) return;
    const updateIntersectionRatios = () => {
      // check intersection ratio of each child
      const items = Array.from(scrollAreaElement.children) as HTMLElement[];

      items.forEach((item) => {
        const targetScrollPosition =
          orientation === 'vertical' ? item.offsetTop : item.offsetLeft;

        const itemHeight = item.clientHeight;

        const scrollPosition =
          orientation === 'vertical'
            ? scrollAreaElement.scrollTop
            : scrollAreaElement.scrollLeft;

        const dist = Math.abs(targetScrollPosition - scrollPosition);
        const ratio = 1 - Math.min(dist / itemHeight, 1);

        item.style.setProperty('--intersection-ratio', ratio.toString());
      });
    };

    updateIntersectionRatios();

    scrollAreaElement.addEventListener('scroll', updateIntersectionRatios, {
      passive: true,
    });
    return () => {
      scrollAreaElement.removeEventListener('scroll', updateIntersectionRatios);
    };
  }, [children]);

  // Handle next/prev button states
  useIsomorphicLayoutEffect(() => {
    const scrollAreaElement = scrollAreaRef.current;

    if (!scrollAreaElement) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            const items = Array.from(scrollAreaElement.children);
            const index = items.indexOf(target);
            if (index === 0) {
              setPrevDisabled(true);
              if (items.length > 1) {
                setNextDisabled(false);
              }
            } else if (index === items.length - 1) {
              setNextDisabled(true);
              if (items.length > 1) {
                setPrevDisabled(false);
              }
            } else {
              setNextDisabled(false);
              setPrevDisabled(false);
            }
            setCurrentWidgetIndex(index);
          }
        });
      },
      {
        root: scrollAreaElement,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    Array.from(scrollAreaElement.children).forEach((child) =>
      observer.observe(child),
    );

    return () => {
      observer.disconnect();
    };
  }, [children]);

  return (
    <div
      {...rootProps}
      ref={forwardedRef}
      className={classNames(
        'fui-WidgetStackStack',
        withMarginProps(marginProps),
        className,
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="fui-WidgetStackScrollArea"
        data-orientation={orientation}
        ref={scrollAreaRef}
      >
        {children}
      </div>
    </div>
  );
});
WidgetStackStack.displayName = 'WidgetStackStack';

const WidgetStackItemContext = React.createContext<{
  isFullyVisible: boolean;
}>({
  isFullyVisible: false,
});

export function useWidgetStackItem() {
  const context = React.useContext(WidgetStackItemContext);
  if (context === undefined) {
    throw new Error(
      'WidgetStackItemContext must be used within a WidgetStackItem',
    );
  }
  return context;
}

type WidgetStackItemElement = React.ElementRef<'div'>;
interface WidgetStackItemProps
  extends React.ComponentPropsWithoutRef<'div'>,
    MarginProps {}
const WidgetStackItem = React.forwardRef<
  WidgetStackItemElement,
  WidgetStackItemProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, children, ...rootProps } = marginRest;
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (forwardedRef) {
      if (typeof forwardedRef === 'function') {
        forwardedRef(ref.current);
      } else if (forwardedRef.current) {
        forwardedRef.current = ref.current;
      }
    }
  }, [forwardedRef]);

  const [isFullyVisible, setIsFullyVisible] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    const widgetElement = ref.current;
    const stackElement = widgetElement?.parentElement;

    if (!stackElement || !widgetElement) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFullyVisible(entry.intersectionRatio === 1);
        });
      },
      {
        root: stackElement,
        rootMargin: '0px',
        threshold: [0, 1],
      },
    );

    observer.observe(widgetElement);

    return () => {
      observer.disconnect();
    };
  }, [children]);

  return (
    <WidgetStackItemContext.Provider value={{ isFullyVisible }}>
      <div
        {...rootProps}
        ref={ref}
        className={classNames(
          'fui-WidgetStackItem',
          className,
          withMarginProps(marginProps),
        )}
        role="group"
        aria-roledescription="slide"
        data-fully-visible={isFullyVisible ? 'true' : undefined}
        // Disable focusing widget content when it's not fully visible
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inert={isFullyVisible ? undefined : ''}
      >
        <div className={classNames('fui-WidgetStackItemContent')}>
          {children}
        </div>
      </div>
    </WidgetStackItemContext.Provider>
  );
});

type WidgetStackNextElementNext = React.ElementRef<'button'>;
interface WidgetStackNextProps
  extends Omit<
    React.ComponentPropsWithoutRef<'button'>,
    'asChild' | 'disabled' | 'onClick'
  > {}

const WidgetStackNext = React.forwardRef<
  WidgetStackNextElementNext,
  WidgetStackNextProps
>((props, forwardedRef) => {
  const { nextDisabled, controls } = useWidgetStack();

  return (
    <Slot
      {...props}
      // @ts-ignore --
      disabled={nextDisabled}
      data-disabled={nextDisabled || undefined}
      onClick={controls?.next}
      ref={forwardedRef}
    />
  );
});
WidgetStackNext.displayName = 'WidgetStackNext';

type WidgetStackPrevElement = React.ElementRef<'button'>;
interface WidgetStackPrevProps
  extends Omit<
    React.ComponentPropsWithoutRef<'button'>,
    'asChild' | 'disabled' | 'onClick'
  > {}

const WidgetStackPrev = React.forwardRef<
  WidgetStackPrevElement,
  WidgetStackPrevProps
>((props, forwardedRef) => {
  const { prevDisabled, controls } = useWidgetStack();
  return (
    <Slot
      {...props}
      // @ts-ignore --
      disabled={prevDisabled}
      data-disabled={prevDisabled || undefined}
      onClick={controls?.prev}
      ref={forwardedRef}
    />
  );
});
WidgetStackPrev.displayName = 'WidgetStackPrev';

export {
  WidgetStackItem as Item,
  WidgetStackNext as Next,
  WidgetStackPrev as Prev,
  WidgetStackRoot as Root,
  WidgetStackStack as Stack,
};
export type {
  WidgetStackItemProps as ItemProps,
  WidgetStackNextProps as NextProps,
  WidgetStackPrevProps as PrevProps,
  WidgetStackStackProps as StackProps,
};
