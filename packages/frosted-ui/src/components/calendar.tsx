'use client';

import {
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
  createCalendar,
  getDayOfWeek,
  getWeeksInMonth,
  isSameDay,
} from '@internationalized/date';
import {
  AriaCalendarCellProps,
  useCalendar,
  useCalendarCell,
  useCalendarGrid,
  useRangeCalendar,
} from '@react-aria/calendar';
import { useFocusRing } from '@react-aria/focus';
import { useDateFormatter, useLocale } from '@react-aria/i18n';
import { mergeProps } from '@react-aria/utils';
import {
  CalendarState,
  CalendarStateOptions,
  RangeCalendarState,
  RangeCalendarStateOptions,
  useCalendarState,
  useRangeCalendarState,
} from '@react-stately/calendar';
import classNames from 'classnames';
import React, { useRef } from 'react';

import { Select } from '../';
import { IconButton } from './icon-button';

export type MappedDateValue<T> = T extends ZonedDateTime
  ? ZonedDateTime
  : T extends CalendarDateTime
    ? CalendarDateTime
    : T extends CalendarDate
      ? CalendarDate
      : never;

type CalendarProps = Omit<CalendarStateOptions, 'locale' | 'createCalendar'> & {
  className?: string;
};

function Calendar({ className, ...props }: CalendarProps) {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  // Destructuring props to remap/omit React Aria button props to avoid warnings
  const {
    calendarProps,
    prevButtonProps: {
      onPress: prevOnPress,
      isDisabled: prevIsDisabled,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onFocusChange: prevOnFocusChange,
      ...otherPrevButtonProps
    },
    nextButtonProps: {
      onPress: nextOnPress,
      isDisabled: nextIsDisabled,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onFocusChange: nextOnFocusChange,
      ...otherNextVuttonProps
    },
  } = useCalendar(props, state);

  return (
    <div {...calendarProps} className={classNames('fui-CalendarRoot', className)}>
      <div className={'fui-CalendarHeader'}>
        <IconButton
          {...otherPrevButtonProps}
          disabled={prevIsDisabled}
          // @ts-expect-error fix mismatching onPress and onClick types
          onClick={prevOnPress}
          size="1"
          // Default button type is "submit" so we need to explicitly set it to "button"
          // to prevent form submission
          type="button"
        >
          <CalendaChevronLeftIcon />
        </IconButton>
        <div className={'fui-CalendarDropdowns'}>
          <MonthDropdown state={state} />
          <YearDropdown state={state} />
        </div>
        <IconButton
          {...otherNextVuttonProps}
          disabled={nextIsDisabled}
          // @ts-expect-error fix mismatching onPress and onClick types
          onClick={nextOnPress}
          size="1"
          // Default button type is "submit" so we need to explicitly set it to "button"
          // to prevent form submission
          type="button"
        >
          <CalendaChevronLeftIcon style={{ transform: 'rotate(180deg)' }} />
        </IconButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}

type RangeCalendarProps = Omit<RangeCalendarStateOptions, 'locale' | 'createCalendar'> & {
  className?: string;
};

function RangeCalendar({ className, ...props }: RangeCalendarProps) {
  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar,
  });
  const ref = useRef<HTMLDivElement>(null);

  // Destructuring props to remap/omit React Aria button props to avoid warnings
  const {
    calendarProps,
    prevButtonProps: {
      onPress: prevOnPress,
      isDisabled: prevIsDisabled,
      // Omit "onFocusChange" because it's not recognized by FUI button (plus we don't really need it)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onFocusChange: prevOnFocusChange,
      ...otherPrevButtonProps
    },
    nextButtonProps: {
      onPress: nextOnPress,
      isDisabled: nextIsDisabled,
      // Omit "onFocusChange" because it's not recognized by FUI button (plus we don't really need it)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onFocusChange: nextOnFocusChange,
      ...otherNextVuttonProps
    },
  } = useRangeCalendar(props, state, ref);

  return (
    <div
      {...calendarProps}
      // https://github.com/adobe/react-spectrum/blob/2137076772a8c7b59bc5ff6705355c21a1be750c/packages/%40react-aria/calendar/src/useRangeCalendar.ts#L67
      onBlur={undefined}
      className={classNames('fui-CalendarRoot', className)}
      ref={ref}
    >
      <div className={'fui-CalendarHeader'}>
        <IconButton
          {...otherPrevButtonProps}
          disabled={prevIsDisabled}
          // @ts-expect-error fix mismatching onPress and onClick types
          onClick={prevOnPress}
          size="1"
          type="button"
        >
          <CalendaChevronLeftIcon />
        </IconButton>
        <div className={'fui-CalendarDropdowns'}>
          <MonthDropdown state={state} />
          <YearDropdown state={state} />
        </div>
        <IconButton
          {...otherNextVuttonProps}
          disabled={nextIsDisabled}
          // @ts-expect-error fix mismatching onPress and onClick types
          onClick={nextOnPress}
          size="1"
          type="button"
        >
          <CalendaChevronLeftIcon style={{ transform: 'rotate(180deg)' }} />
        </IconButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}

function MonthDropdown({ state }: { state: CalendarState | RangeCalendarState }) {
  const months: Array<string> = [];
  const formatter = useDateFormatter({
    month: 'long',
    timeZone: state.timeZone,
  });

  // Format the name of each month in the year according to the
  // current locale and calendar system. Note that in some calendar
  // systems, such as the Hebrew, the number of months may differ
  // between years.
  const numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate);
  for (let i = 1; i <= numMonths; i++) {
    const date = state.focusedDate.set({ month: i });
    months.push(formatter.format(date.toDate(state.timeZone)));
  }

  const onChange = (newValue: string) => {
    const value = Number(newValue);
    const date = state.focusedDate.set({ month: value });
    state.setFocusedDate(date);
    state.setFocused(false);
  };

  return (
    <Select.Root
      aria-label="Month"
      onValueChange={onChange}
      value={state.focusedDate.month.toString()}
      disabled={state.isDisabled}
      size="1"
    >
      <Select.Trigger variant="classic" />
      <Select.Content>
        {months.map((month, i) => (
          <Select.Item key={i} value={(i + 1).toString()}>
            {month}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

type YearItem = {
  value: CalendarDate;
  formatted: string;
};

function YearDropdown({ state }: { state: CalendarState | RangeCalendarState }) {
  const years: Array<YearItem> = [];
  const formatter = useDateFormatter({
    year: 'numeric',
    timeZone: state.timeZone,
  });

  // Format 20 years on each side of the current year according
  // to the current locale and calendar system.
  for (let i = -20; i <= 20; i++) {
    const date = state.focusedDate.add({ years: i });
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    });
  }

  const onChange = (newValue: string) => {
    const index = Number(newValue);
    const date = years[index].value;
    state.setFocusedDate(date);
    state.setFocused(false);
  };

  return (
    <Select.Root
      aria-label="Year"
      value={(20).toString()}
      onValueChange={onChange}
      disabled={state.isDisabled}
      size="1"
    >
      <Select.Trigger variant="classic" onClick={(e) => e.stopPropagation()} />
      <Select.Content>
        {years.map((year, i) => (
          <Select.Item key={i} value={i.toString()}>
            {year.formatted}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

function CalendarGrid({ state, ...props }: { state: CalendarState | RangeCalendarState }) {
  const { locale } = useLocale();

  const { gridProps, headerProps, weekDays } = useCalendarGrid({ ...props, weekdayStyle: 'narrow' }, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);
  const placeholderWeeks = Math.max(0, 6 - weeksInMonth);
  return (
    <table {...gridProps} cellPadding="0" className="fui-CalendarGrid">
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) => (date ? <CalendarCell key={i} state={state} date={date} /> : <td key={i} />))}
          </tr>
        ))}
        {[...new Array(placeholderWeeks).keys()].map((_, index) => (
          <tr key={`filler-${index}`}>
            {[...new Array(7).keys()].map((_, i) => (
              <td key={i}>
                <div aria-hidden className="fui-CalendarGridCellInner fui-CalendarGridCellInnerPlaceholder">
                  0
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CalendarCell({
  state,
  ...props
}: AriaCalendarCellProps & {
  state: CalendarState | RangeCalendarState;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { cellProps, buttonProps, formattedDate, isSelected, isOutsideVisibleRange, isUnavailable } = useCalendarCell(
    props,
    state,
    ref,
  );

  const { focusProps, isFocused, isFocusVisible } = useFocusRing();

  // The start and end date of the selected range will have
  // an emphasized appearance.
  const isSelectionStart =
    'highlightedRange' in state && state.highlightedRange
      ? isSameDay(props.date, state.highlightedRange.start)
      : isSelected;
  const isSelectionEnd =
    'highlightedRange' in state && state.highlightedRange
      ? isSameDay(props.date, state.highlightedRange.end)
      : isSelected;

  let isHighlighted = false;

  if ('highlightedRange' in state && state.highlightedRange) {
    const { highlightedRange } = state;
    const { start, end } = highlightedRange;
    if (start && end) {
      isHighlighted = props.date.compare(start) >= 0 && props.date.compare(end) <= 0;
    }
  }

  let isSingleDateSelected = false;
  if (!('highlightedRange' in state)) {
    isSingleDateSelected = state.value !== null && props.date.compare(state.value) === 0;
  }

  const { locale } = useLocale();

  const dayOfWeek = getDayOfWeek(props.date, locale);
  const isRoundedLeft = isSelected && (isSelectionStart || dayOfWeek === 0 || props.date.day === 1);
  const isRoundedRight =
    isSelected &&
    (isSelectionEnd || dayOfWeek === 6 || props.date.day === props.date.calendar.getDaysInMonth(props.date));

  return (
    <td {...cellProps} className="fui-CalendarGridCell">
      <div
        ref={ref}
        hidden={isOutsideVisibleRange}
        {...mergeProps(buttonProps, focusProps)}
        data-selection-state={
          (isSelectionStart && isSelectionEnd) || isSingleDateSelected
            ? 'selected'
            : isSelectionStart
              ? 'start'
              : isSelectionEnd
                ? 'end'
                : !(isSelectionStart || isSelectionEnd) && isSelected
                  ? 'range'
                  : isHighlighted
                    ? 'range'
                    : undefined
        }
        data-rounded={isRoundedLeft ? 'left' : isRoundedRight ? 'right' : undefined}
        className={classNames('fui-CalendarGridCellInner', {
          ['fui-CalendarGridCell-selected']: isSelectionStart || isSelectionEnd || isSingleDateSelected,
          ['fui-CalendarGridCell-focusRing']: isFocused && isFocusVisible,
          ['fui-CalendarGridCell-unavailable']: isUnavailable,
        })}
      >
        {formattedDate}
      </div>
    </td>
  );
}

const CalendaChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.5 3.5L5.35355 7.64645C5.15829 7.84171 5.15829 8.15829 5.35355 8.35355L9.5 12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export { Calendar, RangeCalendar };
export type { CalendarProps, RangeCalendarProps };
