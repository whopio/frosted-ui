import classNames from 'classnames';
import * as React from 'react';
import type { GetPropDefTypes } from '../../helpers';
import { Button } from '../button';
import { tableCellPropDefs, tableRootPropDefs, tableRowPropDefs } from './table.props';

type TableRootOwnProps = GetPropDefTypes<typeof tableRootPropDefs>;
interface TableRootProps extends React.ComponentProps<'div'>, TableRootOwnProps {}
const TableRoot = (props: TableRootProps) => {
  const {
    className,
    children,
    size = tableRootPropDefs.size.default,
    variant = tableRootPropDefs.variant.default,
    ...rootProps
  } = props;
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
        `fui-r-size-${size}`,
      )}
    >
      {children}
    </div>
  );
};
TableRoot.displayName = 'TableRoot';

type TableTableOwnProps = GetPropDefTypes<typeof tableRootPropDefs>;
interface TableTableProps extends React.ComponentProps<'table'>, TableTableOwnProps {}
const TableTable = (props: TableTableProps) => {
  const { className, ...otherProps } = props;

  return <table {...otherProps} className={classNames('fui-TableTable', className)} />;
};
TableTable.displayName = 'TableTable';

interface TableHeaderProps extends React.ComponentProps<'thead'> {}
const TableHeader = (props: TableHeaderProps) => (
  <thead {...props} className={classNames('fui-TableHeader', props.className)} />
);
TableHeader.displayName = 'TableHeader';

interface TableBodyProps extends React.ComponentProps<'tbody'> {}
const TableBody = (props: TableBodyProps) => (
  <tbody {...props} className={classNames('fui-TableBody', props.className)} />
);
TableBody.displayName = 'TableBody';

interface TableFooterProps extends React.ComponentProps<'tfoot'> {}
const TableFooter = (props: TableFooterProps) => (
  <tfoot {...props} className={classNames('fui-TableFooter', props.className)} />
);
TableFooter.displayName = 'TableFooter';

const alignMap = {
  baseline: 'baseline',
  start: 'top',
  center: 'middle',
  end: 'bottom',
} as const;

type TableRowOwnProps = GetPropDefTypes<typeof tableRowPropDefs>;
interface TableRowProps extends Omit<React.ComponentProps<'tr'>, keyof TableRowOwnProps>, TableRowOwnProps {}
const TableRow = (props: TableRowProps) => {
  const { className, align = tableRowPropDefs.align.default, ...rowProps } = props;
  return (
    <tr
      {...rowProps}
      className={classNames('fui-TableRow', className, align ? `fui-r-va-${alignMap[align]}` : undefined)}
    />
  );
};
TableRow.displayName = 'TableRow';

const justifyMap = {
  start: 'left',
  center: 'center',
  end: 'right',
} as const;

type TableCellImplOwnProps = GetPropDefTypes<typeof tableCellPropDefs>;
interface TableCellImplProps
  extends Omit<React.ComponentProps<'td'>, keyof TableCellImplOwnProps>,
    TableCellImplOwnProps {
  tag?: 'td' | 'th';
}
const TableCellImpl = (props: TableCellImplProps) => {
  const {
    tag: Tag = 'td',
    className,
    style,
    justify = tableCellPropDefs.justify.default,
    width = tableCellPropDefs.width.default,
    ...cellProps
  } = props;
  return (
    <Tag
      {...cellProps}
      className={classNames('fui-TableCell', className, justify ? `fui-r-ta-${justifyMap[justify]}` : undefined)}
      style={{ width, ...style }}
    />
  );
};
TableCellImpl.displayName = 'TableCellImpl';

interface TableCellProps extends Omit<React.ComponentProps<typeof TableCellImpl>, 'tag'> {}
const TableCell = (props: TableCellProps) => <TableCellImpl {...props} tag="td" />;
TableCell.displayName = 'TableCell';

interface TableColumnHeaderCellProps
  extends Omit<React.ComponentProps<'th'>, keyof TableCellImplOwnProps>,
    TableCellImplOwnProps {}
const TableColumnHeaderCell = (props: TableColumnHeaderCellProps) => (
  <TableCellImpl scope="col" {...props} tag="th" className={classNames('fui-TableColumnHeaderCell', props.className)} />
);
TableColumnHeaderCell.displayName = 'TableColumnHeaderCell';

interface TableRowHeaderCellProps
  extends Omit<React.ComponentProps<'th'>, keyof TableCellImplOwnProps>,
    TableCellImplOwnProps {}
const TableRowHeaderCell = (props: TableRowHeaderCellProps) => (
  <TableCellImpl scope="row" {...props} tag="th" className={classNames('fui-TableRowHeaderCell', props.className)} />
);
TableRowHeaderCell.displayName = 'TableRowHeaderCell';

interface TableBottomBarProps extends React.ComponentProps<'div'> {}
const TableBottomBar = (props: TableBottomBarProps) => (
  <div {...props} className={classNames('fui-TableBottomBar', props.className)} />
);
TableBottomBar.displayName = 'TableBottomBar';

interface TableColumnHeaderCellButtonProps
  extends Omit<React.ComponentProps<typeof Button>, 'highContrast' | 'color' | 'variant' | 'size'> {
  sortDirection?: 'asc' | 'desc' | false;
  isSortable?: boolean;
}
const TableColumnHeaderCellButton = (props: TableColumnHeaderCellButtonProps) => {
  const { children, className, sortDirection, isSortable = false, ...buttonProps } = props;
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
