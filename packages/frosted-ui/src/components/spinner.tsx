import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers/index';
import { Flex } from './flex';
import { spinnerPropDefs } from './spinner.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers/index';

type SpinnerOwnProps = GetPropDefTypes<typeof spinnerPropDefs>;
interface SpinnerProps
  extends PropsWithoutRefOrColor<'span'>,
    MarginProps,
    SpinnerOwnProps {}

const Spinner = (props: SpinnerProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);

  const {
    children,
    className,
    loading = spinnerPropDefs.loading.default,
    size = spinnerPropDefs.size.default,
    ...spinnerProps
  } = marginRest;

  if (!loading) return children;

  const spinner = (
    <span
      {...spinnerProps}
      className={classNames(
        'fui-Spinner',
        withBreakpoints(size, 'fui-r-size'),
        withMarginProps(marginProps),
        className,
      )}
    >
      <span className="fui-SpinnerLeaf" />
      <span className="fui-SpinnerLeaf" />
      <span className="fui-SpinnerLeaf" />
      <span className="fui-SpinnerLeaf" />
      <span className="fui-SpinnerLeaf" />
      <span className="fui-SpinnerLeaf" />
      <span className="fui-SpinnerLeaf" />
      <span className="fui-SpinnerLeaf" />
    </span>
  );

  if (children === undefined) return spinner;

  return (
    <Flex asChild position="relative" align="center" justify="center">
      <span>
        {/**
         * `display: contents` removes the content from the accessibility tree in some browsers,
         * so we force remove it with `aria-hidden`
         */}
        <span
          aria-hidden
          style={{ display: 'contents', visibility: 'hidden' }}
          // Workaround to use `inert` until https://github.com/facebook/react/pull/24730 is merged.
          // eslint-disable-next-line no-constant-condition
          {...{ inert: true ? '' : undefined }}
        >
          {children}
        </span>

        <Flex
          asChild
          align="center"
          justify="center"
          position="absolute"
          inset="0"
        >
          <span>{spinner}</span>
        </Flex>
      </span>
    </Flex>
  );
};
Spinner.displayName = 'Spinner';

export { Spinner };
export type { SpinnerProps };
