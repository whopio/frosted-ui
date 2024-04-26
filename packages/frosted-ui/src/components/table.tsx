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
  },
);
TableRoot.displayName = 'TableRoot';

type TableTableElement = React.ElementRef<'table'>;
type TableTableOwnProps = GetPropDefTypes<typeof tableRootPropDefs>;
interface TableTableProps
  extends React.ComponentPropsWithoutRef<'table'>,
    TableTableOwnProps {}
const TableTable = React.forwardRef<TableTableElement, TableTableProps>(
  (props, forwardedRef) => {
    const { className, ...otherProps } = props;

    return (
      <table
        ref={forwardedRef}
        {...otherProps}
        className={classNames('fui-TableTable', className)}
      />
    );
  },
);
TableTable.displayName = 'TableTable';

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

type TableFooterElement = React.ElementRef<'tfoot'>;
interface TableFooterProps extends React.ComponentPropsWithoutRef<'tfoot'> {}
const TableFooter = React.forwardRef<TableFooterElement, TableFooterProps>(
  (props, forwardedRef) => (
    <tfoot
      {...props}
      ref={forwardedRef}
      className={classNames('fui-TableFooter', props.className)}
    />
  ),
);
TableFooter.displayName = 'TableFooter';

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

type TableBottomBarElement = React.ElementRef<'div'>;
interface TableBottomBarProps extends React.ComponentPropsWithoutRef<'div'> {}
const TableBottomBar = React.forwardRef<
  TableBottomBarElement,
  TableBottomBarProps
>((props, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      {...props}
      className={classNames('fui-TableBottomBar', props.className)}
    />
  );
});
TableBottomBar.displayName = 'TableBottomBar';

type TableColumnHeaderCellButtonElement = React.ElementRef<typeof Button>;
interface TableColumnHeaderCellButtonProps
  extends Omit<
    React.ComponentProps<typeof Button>,
    'highContrast' | 'color' | 'variant' | 'size'
  > {
  sortDirection?: 'asc' | 'desc' | false;
  isSortable?: boolean;
}
const TableColumnHeaderCellButton = React.forwardRef<
  TableColumnHeaderCellButtonElement,
  TableColumnHeaderCellButtonProps
>((props, forwardedRef) => {
  const { className, children, sortDirection, isSortable, ...otherProps } =
    props;

  let icon: React.ReactNode = null;

  if (isSortable) {
    if (sortDirection === 'asc') {
      icon = (
        <svg
          fill="none"
          height="12"
          viewBox="0 0 12 12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2L2.5 5.5M6 2L9.5 5.5M6 2V10"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );
    } else if (sortDirection === 'desc') {
      icon = (
        <svg
          fill="none"
          height="12"
          viewBox="0 0 12 12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 10V2M6 10L2.5 6.5M6 10L9.5 6.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );
    } else {
      icon = (
        <svg
          fill="none"
          height="12"
          viewBox="0 0 12 12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8L6 11L9 8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M3 4L6 1L9 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );
    }
  }

  return (
    <Button
      ref={forwardedRef}
      className={classNames('fui-TableColumnHeaderCellButton', className)}
      variant="ghost"
      color="gray"
      size="1"
      highContrast
      {...otherProps}
    >
      {children}
      {icon}
    </Button>
  );
});
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
