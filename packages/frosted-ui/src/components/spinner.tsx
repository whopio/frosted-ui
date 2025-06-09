import classNames from 'classnames';
import * as React from 'react';

import { spinnerPropDefs } from './spinner.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../helpers/index';

type SpinnerOwnProps = GetPropDefTypes<typeof spinnerPropDefs>;
interface SpinnerProps extends PropsWithoutColor<'span'>, SpinnerOwnProps {}

const Spinner = (props: SpinnerProps) => {
  const {
    children,
    className,
    loading = spinnerPropDefs.loading.default,
    size = spinnerPropDefs.size.default,
    ...spinnerProps
  } = props;

  if (!loading) return children;

  const spinner = (
    <span {...spinnerProps} className={classNames('fui-Spinner', `fui-r-size-${size}`, className)}>
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
    <span
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/**
       * `display: contents` removes the content from the accessibility tree in some browsers,
       * so we force remove it with `aria-hidden`
       */}
      <span aria-hidden style={{ display: 'contents', visibility: 'hidden' }} inert>
        {children}
      </span>

      <span
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          inset: '0',
        }}
      >
        {spinner}
      </span>
    </span>
  );
};
Spinner.displayName = 'Spinner';

export { Spinner };
export type { SpinnerProps };
