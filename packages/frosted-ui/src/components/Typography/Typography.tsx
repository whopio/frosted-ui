'use client';
import React from 'react';

import { cn } from '../../lib/classnames';
import { fontSize } from '../../lib/font-sizes';

export const typographyClassNames: {
  [K in keyof typeof fontSize]: string;
} = {
  paragraph1: 'text-paragraph1 font-sans',
  paragraph2: 'text-paragraph2 font-sans',
  paragraph3: 'text-paragraph3 font-sans',
  paragraph4: 'text-paragraph4 font-sans',
  text1: 'text-text1 font-sans',
  text2: 'text-text2 font-sans',
  text3: 'text-text3 font-sans',
  text4: 'text-text4 font-sans',
  text5: 'text-text5 font-sans',
  text6: 'text-text6 font-sans',
  text7: 'text-text7 font-sans',
  subtitle1: 'text-subtitle1 font-sans',
  subtitle2: 'text-subtitle2 font-sans',
  subtitle3: 'text-subtitle3 font-sans',
  subtitle4: 'text-subtitle4 font-sans',
  subtitle5: 'text-subtitle5 font-sans',
  subtitle6: 'text-subtitle6 font-sans',
  subtitle7: 'text-subtitle7 font-sans',
  button1: 'text-button1 font-sans',
  button2: 'text-button2 font-sans',
  button3: 'text-button3 font-sans',
  button4: 'text-button4 font-sans',
  button5: 'text-button5 font-sans',
  overline1: 'text-overline1 font-sans',
  overline2: 'text-overline2 font-sans',
  overline3: 'text-overline3 font-sans',
  overline4: 'text-overline4 font-sans',
  header1: 'text-header1 font-sans',
  header2: 'text-header2 font-sans',
  header3: 'text-header3 font-sans',
  header4: 'text-header4 font-sans',
  header5: 'text-header5 font-sans',
  displayL1: 'text-displayL1 font-display',
  displayL2: 'text-displayL2 font-display',
  displayL3: 'text-displayL3 font-display',
  displayL4: 'text-displayL4 font-display',
  display1: 'text-display1 font-display',
  display2: 'text-display2 font-display',
  display3: 'text-display3 font-display',
  display4: 'text-display4 font-display',
  mono1: 'text-mono1 font-mono',
  mono2: 'text-mono2 font-mono',
  mono3: 'text-mono3 font-mono',
  mono4: 'text-mono4 font-mono',
  mono5: 'text-mono5 font-mono',
  mono6: 'text-mono6 font-mono',
};

type TypographyProps<T extends keyof JSX.IntrinsicElements> = {
  variant: keyof typeof typographyClassNames;
  as: T;
  children: React.ReactNode;
} & JSX.IntrinsicElements[T];

export const Typography = React.forwardRef(
  <T extends keyof JSX.IntrinsicElements>(
    {
      variant,
      as,
      children,
      className: classNameProp,
      ...props
    }: TypographyProps<T>,
    ref: React.Ref<HTMLElement>,
  ) => {
    const className = cn(typographyClassNames[variant], classNameProp);

    return React.createElement(as, { className, ref, ...props }, children);
  },
) as <T extends keyof JSX.IntrinsicElements>(
  props: TypographyProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement<T>;
