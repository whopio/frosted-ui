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
import { Button } from './button';
import {
  tableCellPropDefs,
  tableRootPropDefs,
  tableRowPropDefs,
} from './table.props';

type TableRootOwnProps = GetPropDefTypes<typeof tableRootPropDefs>;
interface TableRootProps
  extends React.ComponentPropsWithoutRef<'div'>,
    MarginProps,
    TableRootOwnProps {}
const TableRoot = (props: TableRootProps) => {
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
      {...rootProps}
      className={classNames(
        'fui-TableRoot',
        // This class name applies size related variables to a table.
        // This class name will allow us to implement things like
        // column cells Drag and Drop with DragOverlay. (dnd-kit)
        'fui-TableRoot-vars',
        className,
        `fui-variant-${variant}`,
        withBreakpoints(size, 'fui-r-size'),
        withMarginProps(marginProps),
      )}
    >
      {children}
    </div>
  );
};
TableRoot.displayName = 'TableRoot';

type TableTableOwnProps = GetPropDefTypes<typeof tableRootPropDefs>;
interface TableTableProps
  extends React.ComponentPropsWithoutRef<'table'>,
    TableTableOwnProps {}
const TableTable = (props: TableTableProps) => {
  const { className, ...otherProps } = props;

  return (
    <table
      {...otherProps}
      className={classNames('fui-TableTable', className)}
    />
  );
};
TableTable.displayName = 'TableTable';

interface TableHeaderProps extends React.ComponentPropsWithoutRef<'thead'> {}
const TableHeader = (props: TableHeaderProps) => (
  <thead
    {...props}
    className={classNames('fui-TableHeader', props.className)}
  />
);
TableHeader.displayName = 'TableHeader';

interface TableBodyProps extends React.ComponentPropsWithoutRef<'tbody'> {}
const TableBody = (props: TableBodyProps) => (
  <tbody {...props} className={classNames('fui-TableBody', props.className)} />
);
TableBody.displayName = 'TableBody';

interface TableFooterProps extends React.ComponentPropsWithoutRef<'tfoot'> {}
const TableFooter = (props: TableFooterProps) => (
  <tfoot
    {...props}
    className={classNames('fui-TableFooter', props.className)}
  />
);
TableFooter.displayName = 'TableFooter';

type TableRowOwnProps = GetPropDefTypes<typeof tableRowPropDefs>;
interface TableRowProps
  extends Omit<React.ComponentPropsWithoutRef<'tr'>, keyof TableRowOwnProps>,
    TableRowOwnProps {}
const TableRow = (props: TableRowProps) => {
  const {
    className,
    align = tableRowPropDefs.align.default,
    ...rowProps
  } = props;
  return (
    <tr
      {...rowProps}
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
};
TableRow.displayName = 'TableRow';

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
const TableCellImpl = (props: TableCellImplProps) => {
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
};
TableCellImpl.displayName = 'TableCellImpl';

interface TableCellProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TableCellImpl>, 'tag'> {}
const TableCell = (props: TableCellProps) => (
  <TableCellImpl {...props} tag="td" />
);
TableCell.displayName = 'TableCell';

interface TableColumnHeaderCellProps
  extends Omit<
      React.ComponentPropsWithoutRef<'th'>,
      keyof TableCellImplOwnProps
    >,
    PaddingProps,
    TableCellImplOwnProps {}
const TableColumnHeaderCell = (props: TableColumnHeaderCellProps) => (
  <TableCellImpl
    scope="col"
    {...props}
    tag="th"
    className={classNames('fui-TableColumnHeaderCell', props.className)}
  />
);
TableColumnHeaderCell.displayName = 'TableColumnHeaderCell';

interface TableRowHeaderCellProps
  extends Omit<
      React.ComponentPropsWithoutRef<'th'>,
      keyof TableCellImplOwnProps
    >,
    PaddingProps,
    TableCellImplOwnProps {}
const TableRowHeaderCell = (props: TableRowHeaderCellProps) => (
  <TableCellImpl
    scope="row"
    {...props}
    tag="th"
    className={classNames('fui-TableRowHeaderCell', props.className)}
  />
);
TableRowHeaderCell.displayName = 'TableRowHeaderCell';

interface TableBottomBarProps extends React.ComponentPropsWithoutRef<'div'> {}
const TableBottomBar = (props: TableBottomBarProps) => (
  <div
    {...props}
    className={classNames('fui-TableBottomBar', props.className)}
  />
);
TableBottomBar.displayName = 'TableBottomBar';

interface TableColumnHeaderCellButtonProps
  extends Omit<
    React.ComponentProps<typeof Button>,
    'highContrast' | 'color' | 'variant' | 'size'
  > {
  sortDirection?: 'asc' | 'desc' | false;
  isSortable?: boolean;
}
const TableColumnHeaderCellButton = (
  props: TableColumnHeaderCellButtonProps,
) => {
  const {
    children,
    className,
    sortDirection,
    isSortable = false,
    ...buttonProps
  } = props;
  return (
    <Button
      variant="ghost"
      color="gray"
      highContrast
      {...buttonProps}
      className={classNames(
        'fui-TableColumnHeaderCellButton',
        {
          'fui-sortable': isSortable,
          'fui-active': sortDirection,
          'fui-asc': sortDirection === 'asc',
          'fui-desc': sortDirection === 'desc',
        },
        className,
      )}
    >
      {children}
    </Button>
  );
};
TableColumnHeaderCellButton.displayName = 'TableColumnHeaderCellButton';

export {
  TableBody as Body,
  TableBottomBar as BottomBar,
  TableCell as Cell,
  TableColumnHeaderCell as ColumnHeaderCell,
  TableColumnHeaderCellButton as ColumnHeaderCellButton,
  TableFooter as Footer,
  TableHeader as Header,
  TableRoot as Root,
  TableRow as Row,
  TableRowHeaderCell as RowHeaderCell,
  TableTable as Table,
};

export type {
  TableBodyProps as BodyProps,
  TableBottomBarProps as BottomBarProps,
  TableCellProps as CellProps,
  TableColumnHeaderCellButtonProps as ColumnHeaderCellButtonProps,
  TableColumnHeaderCellProps as ColumnHeaderCellProps,
  TableFooterProps as FooterProps,
  TableHeaderProps as HeaderProps,
  TableRootProps as RootProps,
  TableRowHeaderCellProps as RowHeaderCellProps,
  TableRowProps as RowProps,
  TableTableProps as TableProps,
};
