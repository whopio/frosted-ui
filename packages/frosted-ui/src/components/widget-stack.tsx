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
import { widgetStackRootPropDefs } from './widget-stack.props';

type WidgetControls = {
  next: () => void;
  prev: () => void;
} | null;

const WidgetStackContext = React.createContext<{
  nextDisabled: boolean;
  setNextDisabled: (disabled: boolean) => void;
  prevDisabled: boolean;
  setPrevDisabled: (disabled: boolean) => void;
  controls: WidgetControls;
  setControls: (controls: WidgetControls) => void;
  index: number;
  setIndex: (index: number) => void;
  orientation?: 'horizontal' | 'vertical';
}>({
  nextDisabled: false,
  setNextDisabled: (disabled: boolean) => null,
  prevDisabled: false,
  setPrevDisabled: (disabled: boolean) => null,
  controls: null,
  setControls: (controls: WidgetControls) => null,
  index: 0,
  setIndex: (index: number) => null,
  orientation: undefined,
});

function useWidgetStack() {
  const context = React.useContext(WidgetStackContext);
  if (context === undefined) {
    throw new Error('WidgetStackContext must be used within a WidgetStackRoot');
  }
  return context;
}

interface WidgetStackRootProps
  extends GetPropDefTypes<typeof widgetStackRootPropDefs> {
  children: React.ReactNode;
}
const WidgetStackRoot: React.FC<WidgetStackRootProps> = ({
  children,
  orientation = widgetStackRootPropDefs.orientation.default,
  ...props
}) => {
  const [controls, setControls] = React.useState<WidgetControls>(null);
  const [index, setIndex] = React.useState(0);
  const [nextDisabled, setNextDisabled] = React.useState(false);
  const [prevDisabled, setPrevDisabled] = React.useState(false);

  return (
    <WidgetStackContext.Provider
      value={{
        controls,
        setControls,
        index,
        setIndex,
        nextDisabled,
        setNextDisabled,
        prevDisabled,
        setPrevDisabled,
        orientation,
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
    index,
    orientation,
    setIndex,
    setControls,
    setNextDisabled,
    setPrevDisabled,
  } = useWidgetStack();
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  const indexRef = React.useRef(index);
  React.useEffect(() => {
    indexRef.current = index;
  }, [index]);

  React.useEffect(() => {
    const scrollAreaElement = scrollAreaRef.current;
    if (!scrollAreaElement) return;
    const items = Array.from(scrollAreaElement.children);

    // ScrollIntoView animation is interrupted in Chrome
    // when you click a prev/next button that triggers the animation and turns disabled.
    // That's why scrollBy method is used instead.
    const dir = orientation === 'vertical' ? 'top' : 'left';
    const next = () => {
      const target = items[indexRef.current + 1];
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
      const target = items[indexRef.current - 1];
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
    setControls({
      next,
      prev,
    });
  }, [orientation]);

  // intersection observer that observes scrollAreaRef children and triggers alert when one of them is intersecting
  React.useEffect(() => {
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
            setIndex(index);
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

function sequence(len: number, max: number) {
  return Array.from({ length: len }, (v, k) =>
    parseFloat(((k * max) / (len - 1)).toFixed(2)),
  );
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
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (forwardedRef) {
      if (typeof forwardedRef === 'function') {
        forwardedRef(ref.current);
      } else if (forwardedRef.current) {
        forwardedRef.current = ref.current;
      }
    }
  }, [forwardedRef]);

  React.useEffect(() => {
    const widgetStackItemElement = ref.current;
    const stackElement = widgetStackItemElement?.parentElement;

    if (!widgetStackItemElement || !stackElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const widgetItemContentElement = contentRef.current;
          if (!widgetItemContentElement) return;
          widgetItemContentElement.style.transform =
            'translateZ(' +
            (-(1 - entry.intersectionRatio) * 500).toFixed(3) +
            'px)';
        });
      },
      {
        root: stackElement,
        rootMargin: '0px',
        // sets breakpoints for every 0.5% [0.00, 0.005, 0.01..., 1.00]
        threshold: sequence(200, 1),
      },
    );
    observer.observe(widgetStackItemElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
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
    >
      <div
        className={classNames('fui-WidgetStackItemContent')}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
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
  const { nextDisabled, controls, setControls, setIndex, index } =
    useWidgetStack();

  return (
    <Slot
      {...props}
      // @ts-ignore --
      disabled={nextDisabled}
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
