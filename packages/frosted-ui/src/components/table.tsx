import classNames from 'classnames';
import * as React from 'react';
import type { GetPropDefTypes, MarginProps, PaddingProps } from '../helpers';
import {
  extractMarginProps,
  extractPaddingProps,
  withBreakpoints,
  withMarginProps,
  withPaddingProps,
} from '../helpers';
import { ScrollArea } from './scroll-area';
import {
  tableCellPropDefs,
  tableRootPropDefs,
  tableRowPropDefs,
} from './table.props';

type TableRootElement = React.ElementRef<'div'>;
type TableRootOwnProps = GetPropDefTypes<typeof tableRootPropDefs>;
interface TableRootProps
  extends React.ComponentPropsWithoutRef<'div'>,
    MarginProps,
    TableRootOwnProps {}
const TableRoot = React.forwardRef<TableRootElement, TableRootProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      className,
      children,
      size = tableRootPropDefs.size.default,
      variant = tableRootPropDefs.variant.default,
      ...rootProps
    } = marginRest;
    return (
      <div
        ref={forwardedRef}
        className={classNames(
          'fui-TableRoot',
          className,
          `fui-variant-${variant}`,
          withBreakpoints(size, 'fui-r-size'),
          withMarginProps(marginProps),
        )}
        {...rootProps}
      >
        <ScrollArea>
          <table className="fui-TableRootTable">{children}</table>
        </ScrollArea>
      </div>
    );
  },
);
TableRoot.displayName = 'Table';

type TableHeaderElement = React.ElementRef<'thead'>;
interface TableHeaderProps extends React.ComponentPropsWithoutRef<'thead'> {}
const TableHeader = React.forwardRef<TableHeaderElement, TableHeaderProps>(
  (props, forwardedRef) => (
    <thead
      {...props}
      ref={forwardedRef}
      className={classNames('fui-TableHeader', props.className)}
    />
  ),
);
TableHeader.displayName = 'TableHeader';

type TableBodyElement = React.ElementRef<'tbody'>;
interface TableBodyProps extends React.ComponentPropsWithoutRef<'tbody'> {}
const TableBody = React.forwardRef<TableBodyElement, TableBodyProps>(
  (props, forwardedRef) => (
    <tbody
      {...props}
      ref={forwardedRef}
      className={classNames('fui-TableBody', props.className)}
    />
  ),
);
TableBody.displayName = 'TableBody';

type TableRowElement = React.ElementRef<'tr'>;
type TableRowOwnProps = GetPropDefTypes<typeof tableRowPropDefs>;
interface TableRowProps
  extends Omit<React.ComponentPropsWithoutRef<'tr'>, keyof TableRowOwnProps>,
    TableRowOwnProps {}
const TableRow = React.forwardRef<TableRowElement, TableRowProps>(
  (props, forwardedRef) => {
    const {
      className,
      align = tableRowPropDefs.align.default,
      ...rowProps
    } = props;
    return (
      <tr
        {...rowProps}
        ref={forwardedRef}
        className={classNames(
          'fui-TableRow',
          className,
          withBreakpoints(align, 'fui-r-va', {
            baseline: 'baseline',
            start: 'top',
            center: 'middle',
            end: 'bottom',
          }),
        )}
      />
    );
  },
);
TableRow.displayName = 'TableRow';

type TableCellImplElement = React.ElementRef<'td'>;
type TableCellImplOwnProps = GetPropDefTypes<typeof tableCellPropDefs>;
interface TableCellImplProps
  extends Omit<
      React.ComponentPropsWithoutRef<'td'>,
      keyof TableCellImplOwnProps
    >,
    PaddingProps,
    TableCellImplOwnProps {
  tag?: 'td' | 'th';
}
const TableCellImpl = React.forwardRef<
  TableCellImplElement,
  TableCellImplProps
>((props, forwardedRef) => {
  const { rest: paddingRest, ...paddingProps } = extractPaddingProps(props);
  const {
    tag: Tag = 'td',
    className,
    style,
    justify = tableCellPropDefs.justify.default,
    width = tableCellPropDefs.width.default,
    ...cellProps
  } = paddingRest;
  return (
    <Tag
      {...cellProps}
      ref={forwardedRef}
      className={classNames(
        'fui-TableCell',
        className,
        withPaddingProps(paddingProps),
        withBreakpoints(justify, 'fui-r-ta', {
          start: 'left',
          center: 'center',
          end: 'right',
        }),
      )}
      style={{ width, ...style }}
    />
  );
});
TableCellImpl.displayName = 'TableCellImpl';

type TableCellElement = React.ElementRef<typeof TableCellImpl>;
interface TableCellProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TableCellImpl>, 'tag'> {}
const TableCell = React.forwardRef<TableCellElement, TableCellProps>(
  (props, forwardedRef) => (
    <TableCellImpl {...props} tag="td" ref={forwardedRef} />
  ),
);
TableCell.displayName = 'TableCell';

type TableColumnHeaderCellElement = React.ElementRef<'th'>;
interface TableColumnHeaderCellProps
  extends Omit<
      React.ComponentPropsWithoutRef<'th'>,
      keyof TableCellImplOwnProps
    >,
    PaddingProps,
    TableCellImplOwnProps {}
const TableColumnHeaderCell = React.forwardRef<
  TableColumnHeaderCellElement,
  TableColumnHeaderCellProps
>((props, forwardedRef) => (
  <TableCellImpl
    scope="col"
    {...props}
    tag="th"
    ref={forwardedRef}
    className={classNames('fui-TableColumnHeaderCell', props.className)}
  />
));
TableColumnHeaderCell.displayName = 'TableColumnHeaderCell';

type TableRowHeaderCellElement = React.ElementRef<'th'>;
interface TableRowHeaderCellProps
  extends Omit<
      React.ComponentPropsWithoutRef<'th'>,
      keyof TableCellImplOwnProps
    >,
    PaddingProps,
    TableCellImplOwnProps {}
const TableRowHeaderCell = React.forwardRef<
  TableRowHeaderCellElement,
  TableRowHeaderCellProps
>((props, forwardedRef) => (
  <TableCellImpl
    scope="row"
    {...props}
    tag="th"
    ref={forwardedRef}
    className={classNames('fui-TableRowHeaderCell', props.className)}
  />
));
TableRowHeaderCell.displayName = 'TableRowHeaderCell';

const Table = Object.assign(
  {},
  {
    Root: TableRoot,
    Header: TableHeader,
    Body: TableBody,
    Row: TableRow,
    Cell: TableCell,
    ColumnHeaderCell: TableColumnHeaderCell,
    RowHeaderCell: TableRowHeaderCell,
  },
);

export {
  Table,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
  TableRowHeaderCell,
};

export type {
  TableBodyProps,
  TableCellProps,
  TableColumnHeaderCellProps,
  TableHeaderProps,
  TableRootProps,
  TableRowHeaderCellProps,
  TableRowProps,
};
