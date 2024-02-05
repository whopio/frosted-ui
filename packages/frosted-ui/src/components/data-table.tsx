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
  dataTableCellPropDefs,
  dataTableRootPropDefs,
  dataTableRowPropDefs,
} from './data-table.props';

type DataTableRootElement = React.ElementRef<'div'>;
type DataTableRootOwnProps = GetPropDefTypes<typeof dataTableRootPropDefs>;
interface DataTableRootProps
  extends React.ComponentPropsWithoutRef<'div'>,
    MarginProps,
    DataTableRootOwnProps {}
const DataTableRoot = React.forwardRef<
  DataTableRootElement,
  DataTableRootProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    children,
    size = dataTableRootPropDefs.size.default,
    variant = dataTableRootPropDefs.variant.default,
    ...rootProps
  } = marginRest;
  return (
    <div
      ref={forwardedRef}
      className={classNames(
        'fui-DataTableRoot',
        // This class name applies size related variables to a table.
        // This class name will allow us to implement things like
        // column cells Drag and Drop with DragOverlay. (dnd-kit)
        'fui-DataTableRoot-vars',
        className,
        `fui-variant-${variant}`,
        withBreakpoints(size, 'fui-r-size'),
        withMarginProps(marginProps),
      )}
      {...rootProps}
    >
      {children}
    </div>
  );
});
DataTableRoot.displayName = 'DataTableRoot';

type DataTableTableElement = React.ElementRef<'table'>;
type DataTableTableOwnProps = GetPropDefTypes<typeof dataTableRootPropDefs>;
interface DataTableTableProps
  extends React.ComponentPropsWithoutRef<'table'>,
    DataTableTableOwnProps {}
const DataTableTable = React.forwardRef<
  DataTableTableElement,
  DataTableTableProps
>((props, forwardedRef) => {
  const { className, ...otherProps } = props;

  return (
    <table
      ref={forwardedRef}
      className={classNames('fui-DataTableTable', className)}
      {...otherProps}
    />
  );
});
DataTableTable.displayName = 'DataTableTable';

type DataTableHeaderElement = React.ElementRef<'thead'>;
interface DataTableHeaderProps
  extends React.ComponentPropsWithoutRef<'thead'> {}
const DataTableHeader = React.forwardRef<
  DataTableHeaderElement,
  DataTableHeaderProps
>((props, forwardedRef) => (
  <thead
    {...props}
    ref={forwardedRef}
    className={classNames('fui-DataTableHeader', props.className)}
  />
));
DataTableHeader.displayName = 'DataTableHeader';

type DataTableBodyElement = React.ElementRef<'tbody'>;
interface DataTableBodyProps extends React.ComponentPropsWithoutRef<'tbody'> {}
const DataTableBody = React.forwardRef<
  DataTableBodyElement,
  DataTableBodyProps
>((props, forwardedRef) => (
  <tbody
    {...props}
    ref={forwardedRef}
    className={classNames('fui-DataTableBody', props.className)}
  />
));
DataTableBody.displayName = 'DataTableBody';

type DataTableFooterElement = React.ElementRef<'tfoot'>;
interface DataTableFooterProps
  extends React.ComponentPropsWithoutRef<'tfoot'> {}
const DataTableFooter = React.forwardRef<
  DataTableFooterElement,
  DataTableFooterProps
>((props, forwardedRef) => (
  <tfoot
    {...props}
    ref={forwardedRef}
    className={classNames('fui-DataTableFooter', props.className)}
  />
));
DataTableFooter.displayName = 'DataTableFooter';

type DataTableRowElement = React.ElementRef<'tr'>;
type DataTableRowOwnProps = GetPropDefTypes<typeof dataTableRowPropDefs>;
interface DataTableRowProps
  extends Omit<
      React.ComponentPropsWithoutRef<'tr'>,
      keyof DataTableRowOwnProps
    >,
    DataTableRowOwnProps {}
const DataTableRow = React.forwardRef<DataTableRowElement, DataTableRowProps>(
  (props, forwardedRef) => {
    const {
      className,
      align = dataTableRowPropDefs.align.default,
      ...rowProps
    } = props;
    return (
      <tr
        {...rowProps}
        ref={forwardedRef}
        className={classNames(
          'fui-DataTableRow',
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
DataTableRow.displayName = 'DataTableRow';

type DataTableCellImplElement = React.ElementRef<'td'>;
type DataTableCellImplOwnProps = GetPropDefTypes<typeof dataTableCellPropDefs>;
interface DataTableCellImplProps
  extends Omit<
      React.ComponentPropsWithoutRef<'td'>,
      keyof DataTableCellImplOwnProps
    >,
    PaddingProps,
    DataTableCellImplOwnProps {
  tag?: 'td' | 'th';
}
const DataTableCellImpl = React.forwardRef<
  DataTableCellImplElement,
  DataTableCellImplProps
>((props, forwardedRef) => {
  const { rest: paddingRest, ...paddingProps } = extractPaddingProps(props);
  const {
    tag: Tag = 'td',
    className,
    style,
    justify = dataTableCellPropDefs.justify.default,
    width = dataTableCellPropDefs.width.default,
    ...cellProps
  } = paddingRest;
  return (
    <Tag
      {...cellProps}
      ref={forwardedRef}
      className={classNames(
        'fui-DataTableCell',
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
DataTableCellImpl.displayName = 'DataTableCellImpl';

type DataTableCellElement = React.ElementRef<typeof DataTableCellImpl>;
interface DataTableCellProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DataTableCellImpl>,
    'tag'
  > {}
const DataTableCell = React.forwardRef<
  DataTableCellElement,
  DataTableCellProps
>((props, forwardedRef) => (
  <DataTableCellImpl {...props} tag="td" ref={forwardedRef} />
));
DataTableCell.displayName = 'DataTableCell';

type DataTableColumnHeaderCellElement = React.ElementRef<'th'>;
interface DataTableColumnHeaderCellProps
  extends Omit<
      React.ComponentPropsWithoutRef<'th'>,
      keyof DataTableCellImplOwnProps
    >,
    PaddingProps,
    DataTableCellImplOwnProps {}
const DataTableColumnHeaderCell = React.forwardRef<
  DataTableColumnHeaderCellElement,
  DataTableColumnHeaderCellProps
>((props, forwardedRef) => (
  <DataTableCellImpl
    scope="col"
    {...props}
    tag="th"
    ref={forwardedRef}
    className={classNames('fui-DataTableColumnHeaderCell', props.className)}
  />
));
DataTableColumnHeaderCell.displayName = 'DataTableColumnHeaderCell';

type DataTableRowHeaderCellElement = React.ElementRef<'th'>;
interface DataTableRowHeaderCellProps
  extends Omit<
      React.ComponentPropsWithoutRef<'th'>,
      keyof DataTableCellImplOwnProps
    >,
    PaddingProps,
    DataTableCellImplOwnProps {}
const DataTableRowHeaderCell = React.forwardRef<
  DataTableRowHeaderCellElement,
  DataTableRowHeaderCellProps
>((props, forwardedRef) => (
  <DataTableCellImpl
    scope="row"
    {...props}
    tag="th"
    ref={forwardedRef}
    className={classNames('fui-DataTableRowHeaderCell', props.className)}
  />
));
DataTableRowHeaderCell.displayName = 'DataTableRowHeaderCell';

type DataTableBottomBarElement = React.ElementRef<'div'>;
interface DataTableBottomBarProps
  extends React.ComponentPropsWithoutRef<'div'> {}
const DataTableBottomBar = React.forwardRef<
  DataTableBottomBarElement,
  DataTableBottomBarProps
>((props, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className={classNames('fui-DataTableBottomBar', props.className)}
      {...props}
    />
  );
});
DataTableBottomBar.displayName = 'DataTableBottomBar';

type DataTableColumnHeaderCellButtonElement = React.ElementRef<typeof Button>;
interface DataTableColumnHeaderCellButtonProps
  extends Omit<
    React.ComponentProps<typeof Button>,
    'highContrast' | 'color' | 'variant' | 'size'
  > {
  sortDirection?: 'asc' | 'desc' | false;
  isSortable?: boolean;
}
const DataTableColumnHeaderCellButton = React.forwardRef<
  DataTableColumnHeaderCellButtonElement,
  DataTableColumnHeaderCellButtonProps
>((props, forwardedRef) => {
  const { children, sortDirection, isSortable, ...otherProps } = props;

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
      className={classNames(
        'fui-DataTableColumnHeaderCellButton',
        props.className,
      )}
      variant="ghost"
      color="gray"
      size="2"
      highContrast
      {...otherProps}
    >
      {children}
      {icon}
    </Button>
  );
});
DataTableColumnHeaderCellButton.displayName = 'DataTableColumnHeaderCellButton';

const DataTable = Object.assign(
  {},
  {
    Root: DataTableRoot,
    Header: DataTableHeader,
    Body: DataTableBody,
    Row: DataTableRow,
    Cell: DataTableCell,
    ColumnHeaderCell: DataTableColumnHeaderCell,
    RowHeaderCell: DataTableRowHeaderCell,
    Table: DataTableTable,
    BottomBar: DataTableBottomBar,
    Footer: DataTableFooter,
    ColumnHeaderCellButton: DataTableColumnHeaderCellButton,
  },
);

export {
  DataTable,
  DataTableBody,
  DataTableBottomBar,
  DataTableCell,
  DataTableColumnHeaderCell,
  DataTableColumnHeaderCellButton,
  DataTableFooter,
  DataTableHeader,
  DataTableRoot,
  DataTableRow,
  DataTableRowHeaderCell,
  DataTableTable,
};

export type {
  DataTableBodyProps,
  DataTableBottomBarProps,
  DataTableCellProps,
  DataTableColumnHeaderCellButtonProps,
  DataTableColumnHeaderCellProps,
  DataTableFooterProps,
  DataTableHeaderProps,
  DataTableRootProps,
  DataTableRowHeaderCellProps,
  DataTableRowProps,
  DataTableTableProps,
};
