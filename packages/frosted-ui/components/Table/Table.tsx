/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  faCaretDown,
  faCaretUp,
  faSort,
} from '@fortawesome/free-solid-svg-icons';
import {
  ColumnDef,
  PaginationState,
  RowData,
  SortingState,
  Table as TableInstance,
  TableOptions,
  TableState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React, { useMemo, useRef } from 'react';
import { useVirtual } from 'react-virtual';
import { cn } from '../../lib/classnames';
import { EmptyState, EmptyStateProps } from '../EmptyState';
import { Icon } from '../Icon';
import { TableLoading } from '../TableLoading';

/**This is a custom typing / context for our table based on these docs https://tanstack.com/table/v8/docs/api/core/table#meta */
declare module '@tanstack/table-core' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> {
    totalRowCount: number | undefined;
  }
}

export interface TableProps<Data extends object>
  extends Omit<TableOptions<Data>, 'getCoreRowModel' | 'pageCount'> {
  isLoading?: boolean;
  children?: React.ReactNode;
  empty?: EmptyStateProps;
  /**This replaces pageCount in Tanstack table to make pagination controlled.*/
  totalRowCount?: number;
  showHeader?: boolean;
}

interface TableContextValue<Data extends object> {
  instance: TableInstance<Data>;
  state: TableState;
}

const TableContext = React.createContext<TableContextValue<any> | null>(null);

export interface TableProviderProps<Data extends object> {
  instance: TableInstance<Data>;
  children: React.ReactNode;
}

export const TableProvider = <Data extends object>(
  props: TableProviderProps<Data>,
) => {
  const { instance, children } = props;

  const context: TableContextValue<Data> = {
    state: instance.getState(),
    instance,
  };

  return (
    <TableContext.Provider value={context}>{children}</TableContext.Provider>
  );
};

export const useTableContext = <Data extends object>() => {
  return React.useContext(TableContext) as TableContextValue<Data>;
};

type UseColumns = <Data extends object>(
  factory: () => Array<ColumnDef<Data>>,
  deps: React.DependencyList,
) => Array<ColumnDef<Data>>;

export const useColumns: UseColumns = (factory, deps) =>
  React.useMemo(() => factory(), [...deps]);

export const Table = <Data extends object>({
  isLoading,
  children,
  empty,
  data = [],
  columns,
  initialState,
  totalRowCount,
  showHeader = true,
}: TableProps<Data>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const dataMemo = useMemo(() => data, [data]);
  const columnsMemo = useMemo(() => columns, [columns]);

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: initialState?.pagination?.pageIndex || 0,
      pageSize: initialState?.pagination?.pageSize || 10,
    });

  const pageCount = totalRowCount
    ? Math.ceil(totalRowCount / pageSize)
    : undefined;

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );

  const instance = useReactTable<Data>({
    data: dataMemo,
    columns: columnsMemo,
    initialState: useMemo(() => initialState, [initialState]),
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: pageCount !== undefined,
    pageCount,
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      totalRowCount: totalRowCount,
    },
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { rows } = instance.getRowModel();
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  });
  const { virtualItems: virtualRows } = rowVirtualizer;

  return (
    <TableProvider<Data> instance={instance}>
      {instance.getCoreRowModel().rows.length > 0 || isLoading ? (
        <div className="flex min-h-0 flex-col">
          <div ref={tableContainerRef} className="flex-1 overflow-x-auto">
            <table
              cellPadding={8}
              className="w-full table-auto overflow-hidden"
            >
              {showHeader ? (
                <thead className="border-whop-stroke border-b">
                  {instance.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          {...{
                            colSpan: header.colSpan,
                            style: {
                              width: header.getSize(),
                            },
                          }}
                          key={header.id}
                          className={cn(
                            'text-overline4 group whitespace-nowrap py-[11px] text-left uppercase',
                          )}
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              {...{
                                className: cn(
                                  'flex items-center text-whop-black',
                                  header.column.getCanSort() &&
                                    'cursor-pointer select-none',
                                  (
                                    header.column.columnDef.meta as any
                                  )?.classNames.join(' '),
                                ),
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                              {header.column.getCanSort() &&
                                !header.column.getIsSorted() && (
                                  <Icon
                                    icon={faSort}
                                    className="text-whop-gray/40 group-hover:text-whop-gray h-2.5 w-2.5 transition-all"
                                  />
                                )}
                              {{
                                asc: (
                                  <Icon
                                    icon={faCaretUp}
                                    className="h-2.5 w-2.5"
                                  />
                                ),
                                desc: (
                                  <Icon
                                    icon={faCaretDown}
                                    className="h-2.5 w-2.5"
                                  />
                                ),
                              }[header.column.getIsSorted() as string] ?? null}
                            </div>
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
              ) : (
                <thead className="h-1" />
              )}
              <tbody
                className={cn({ 'border-whop-stroke border-t': !showHeader })}
              >
                {!isLoading &&
                  virtualRows.map((virtualRow) => {
                    const row = rows[virtualRow.index];
                    return (
                      <tr key={row.id} className="border-whop-stroke !border-b">
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <td
                              key={cell.id}
                              style={{ width: cell.column.getSize() }}
                              className="text-text3 text-whop-black overflow-hidden whitespace-nowrap"
                              align={(cell.column.columnDef.meta as any)?.align}
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
              </tbody>
              <tfoot>
                {instance.getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext(),
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </tfoot>
            </table>
          </div>
          {isLoading ? <TableLoading /> : children}
        </div>
      ) : (
        <EmptyState {...empty} />
      )}
    </TableProvider>
  );
};
