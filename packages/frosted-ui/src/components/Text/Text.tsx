'use client';
import React from 'react';

import { cn } from '../../lib/classnames';
import { fontSize } from '../../lib/font-sizes';

export const typographyClassNames: {
  [K in keyof typeof fontSize]: string;
} = {
  body1: 'text-body1 font-sans',
  body2: 'text-body2 font-sans',
  button1: 'text-button1 font-sans',
  button2: 'text-button2 font-sans',
  button3: 'text-button3 font-sans',
  overline1: 'text-overline1 font-sans',
  h1: 'text-h1 font-sans',
  h2: 'text-h2 font-sans',
  h3: 'text-h3 font-sans',
  display1: 'text-display1 font-display',
  display2: 'text-display2 font-display',
  mono1: 'text-mono1 font-mono',
};

type TextProps<T extends keyof JSX.IntrinsicElements> = {
  variant: keyof typeof typographyClassNames;
  as: T;
  children: React.ReactNode;
} & JSX.IntrinsicElements[T];

export const Text = React.forwardRef(
  <T extends keyof JSX.IntrinsicElements>(
    { variant, as, children, className: classNameProp, ...props }: TextProps<T>,
    ref: React.Ref<HTMLElement>,
  ) => {
    const className = cn(typographyClassNames[variant], classNameProp);

    return React.createElement(as, { className, ref, ...props }, children);
  },
) as <T extends keyof JSX.IntrinsicElements>(
  props: TextProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement<T>;
