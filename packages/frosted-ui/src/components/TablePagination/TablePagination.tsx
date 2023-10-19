'use client';

import {
  faChevronLeft,
  faChevronRight,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import React, {
  ButtonHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { cn } from '../../lib/classnames';
import { Icon } from '../Icon';
import { useTableContext } from '../Table';

const PaginationButton = ({
  children,
  className,
  isActive,
  ...rest
}: { isActive?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        'text-whop-black flex h-8 w-8 items-center justify-center rounded-md',
        // This is a manual replacement for subtitle3 as the native button styles override it
        'text-sm font-medium leading-[17px] tracking-[-0.01em]',
        'hover:bg-whop-hover active:bg-whop-hover-press outline-none transition',
        {
          'border-whop-black border-2': isActive,
          'cursor-not-allowed opacity-40': rest.disabled,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export type TablePaginationProps = {
  onChange?(props: { pageIndex: number; pageSize: number }): void;
  page?: number | string | null;
  className?: string;
};

export const TablePagination = ({
  onChange,
  className,
  // Provide this page prop to make the table pagination a controlled component.
  page,
}: TablePaginationProps) => {
  const { instance } = useTableContext();

  const state = instance.getState();

  const controlledPageIndex = useMemo(() => {
    const num = typeof page === 'string' ? parseInt(page, 10) : page ?? null;
    if (num === null || isNaN(num)) return null;
    return num;
  }, [page]);

  const {
    pagination: { pageIndex, pageSize },
  } = state;

  const {
    nextPage,
    previousPage,
    getCanPreviousPage,
    getCanNextPage,
    setPageIndex,
    getPageCount,
    getCoreRowModel,
    getRowModel,
    options,
  } = instance;

  const controlledTotalRowCount = options?.meta?.totalRowCount;
  const totalRowCount =
    controlledTotalRowCount || getCoreRowModel().rows.length;
  const pageRowCount = getRowModel().rows.length;
  const pageCount = getPageCount();
  const currentPageStart = pageIndex * pageSize + 1;
  const currentPageEnd =
    pageRowCount === pageSize
      ? (pageIndex + 1) * pageSize
      : pageIndex * pageSize + pageRowCount;

  const renderFrom = Math.max(0, Math.min(pageIndex - 1, pageCount - 3));

  const goToFirstPage = useCallback(() => {
    if (pageIndex !== 0) setPageIndex(0);
  }, [setPageIndex, pageIndex]);

  const goToLastPage = useCallback(() => {
    if (pageIndex !== pageCount - 1) setPageIndex(pageCount - 1);
  }, [setPageIndex, pageIndex, pageCount]);

  const currentPagePlusMinusOne = useMemo(
    () =>
      Array(Math.min(3, pageCount))
        .fill(0)
        .map((_, i) => () => {
          if (pageIndex !== renderFrom + i) setPageIndex(renderFrom + i);
        }),
    [pageCount, renderFrom, pageIndex, setPageIndex],
  );

  useEffect(() => {
    onChange?.({ pageIndex, pageSize });
  }, [pageIndex, pageSize]);

  useEffect(() => {
    if (controlledPageIndex !== null) {
      setPageIndex(controlledPageIndex);
    }
  }, [controlledPageIndex, setPageIndex]);

  return (
    <div className={cn('flex w-full justify-between', className)}>
      {/* pagination number group */}
      <div className="flex items-center gap-x-2">
        {/* Add the first button with ellipsis if expansion is necessary  */}
        {renderFrom > 0 ? (
          <>
            <PaginationButton onClick={goToFirstPage}>1</PaginationButton>
            {renderFrom > 1 && (
              <Icon icon={faEllipsis} className="text-whop-gray" />
            )}
          </>
        ) : null}

        {/* Add the current page button with one before and one after if expanded  */}
        {currentPagePlusMinusOne.map((onClick, i) => {
          return (
            <PaginationButton
              key={i}
              onClick={onClick}
              isActive={pageIndex === renderFrom + i}
            >
              {renderFrom + i + 1}
            </PaginationButton>
          );
        })}

        {/* Add the last button with ellipsis if expansion is necessary  */}
        {renderFrom < pageCount - 3 ? (
          <>
            {renderFrom < pageCount - 4 && (
              <Icon icon={faEllipsis} className="text-whop-gray" />
            )}
            <PaginationButton onClick={goToLastPage}>
              {pageCount}
            </PaginationButton>
          </>
        ) : null}
      </div>
      {/* Pagination count and arrows group */}
      <div className="flex items-center gap-x-[10px]">
        <p className="text-text4 text-whop-gray hidden whitespace-nowrap sm:block">
          Showing {currentPageStart} - {currentPageEnd} of {totalRowCount}
        </p>

        <div className="flex gap-x-2">
          <PaginationButton
            onClick={previousPage}
            disabled={!getCanPreviousPage()}
            className="text-[14px]"
          >
            <Icon icon={faChevronLeft} />
          </PaginationButton>
          <PaginationButton
            onClick={nextPage}
            disabled={!getCanNextPage()}
            className="text-[14px]"
          >
            <Icon icon={faChevronRight} />
          </PaginationButton>
        </div>
      </div>
    </div>
  );
};
