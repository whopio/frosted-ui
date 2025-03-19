import classNames from 'classnames';
import * as React from 'react';
import {
  extractLayoutProps,
  extractMarginProps,
  hasOwnProperty,
  isBreakpointsObject,
  withBreakpoints,
  withLayoutProps,
  withMarginProps,
} from '../helpers';
import { gridPropDefs } from './grid.props';
import { Slot } from './slot';

import type { GetPropDefTypes, LayoutProps, MarginProps } from '../helpers';

type GridOwnProps = GetPropDefTypes<typeof gridPropDefs>;
interface GridProps extends React.ComponentProps<'div'>, MarginProps, LayoutProps, GridOwnProps {
  asChild?: boolean;
}

const Grid = (props: GridProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);
  const {
    className,
    asChild,
    columns = gridPropDefs.columns.default,
    rows = gridPropDefs.rows.default,
    flow = gridPropDefs.flow.default,
    align = gridPropDefs.align.default,
    justify = gridPropDefs.justify.default,
    gap = gridPropDefs.gap.default,
    gapX = gridPropDefs.gapX.default,
    gapY = gridPropDefs.gapY.default,
    style: propStyle,
    ...gridProps
  } = layoutRest;
  const Comp = asChild ? Slot : 'div';

  let style: React.CSSProperties | Record<string, string | undefined> = {
    ...propStyle,
  };

  if (typeof columns === 'string') {
    style = {
      '--grid-template-columns-initial': parseGridValue(columns),
      ...style,
    };
  }

  if (typeof rows === 'string') {
    style = {
      '--grid-template-rows-initial': parseGridValue(rows),
      ...style,
    };
  }

  if (isBreakpointsObject(columns)) {
    for (const breakpoint in columns) {
      if (hasOwnProperty(columns, breakpoint)) {
        const customProperty = `--grid-template-columns-${breakpoint}`;

        style = {
          [customProperty]: parseGridValue(columns[breakpoint]),
          ...style,
        };
      }
    }
  }

  if (isBreakpointsObject(rows)) {
    for (const breakpoint in rows) {
      if (hasOwnProperty(rows, breakpoint)) {
        const customProperty = `--grid-template-rows-${breakpoint}`;

        style = {
          [customProperty]: parseGridValue(rows[breakpoint]),
          ...style,
        };
      }
    }
  }

  return (
    <Comp
      {...gridProps}
      className={classNames(
        'fui-Grid',
        className,
        withBreakpoints(flow, 'fui-r-gaf'),
        withBreakpoints(align, 'fui-r-ai'),
        withBreakpoints(justify, 'fui-r-jc', { between: 'space-between' }),
        withBreakpoints(gap, 'fui-r-gap'),
        withBreakpoints(gapX, 'fui-r-cg'),
        withBreakpoints(gapY, 'fui-r-rg'),
        withLayoutProps(layoutProps),
        withMarginProps(marginProps),
      )}
      style={Object.keys(style).length ? style : undefined}
    />
  );
};
Grid.displayName = 'Grid';

function parseGridValue(value: string | undefined) {
  return value?.match(/^\d+$/) ? `repeat(${value}, minmax(0, 1fr))` : value;
}

export { Grid };
export type { GridProps };
