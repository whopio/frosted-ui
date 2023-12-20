import {
  AriaDateRangePickerProps,
  DateValue,
  useDateRangePicker,
} from '@react-aria/datepicker';

import classNames from 'classnames';
import React, { useRef } from 'react';
import { useDateRangePickerState } from 'react-stately';
import {
  GetPropDefTypes,
  MarginProps,
  extractMarginProps,
  withMarginProps,
} from '../helpers';
import { MappedDateValue, RangeCalendar } from './calendar';
import { DateField } from './date-field';
import { datePickerPropDefs } from './date-picker.props';
import { Flex } from './flex';
import { IconButton } from './icon-button';
import { Popover } from './popover';

interface RangeValue<T> {
  /** The start value of the range. */
  start: T;
  /** The end value of the range. */
  end: T;
}

type DateRangePickerFUIProps = GetPropDefTypes<typeof datePickerPropDefs>;

interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T>,
    DateRangePickerFUIProps,
    MarginProps {
  className?: string;
  onChange?: (value: RangeValue<MappedDateValue<T>> | null) => void;
}

export function DateRangePicker<T extends DateValue>(
  props: DateRangePickerProps<T>,
) {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, ...otherProps } = marginRest;

  const {
    color = datePickerPropDefs.color.default,
    size = datePickerPropDefs.size.default,
    ...datePickerProps
  } = otherProps;
  datePickerProps.onChange;
  const state = useDateRangePickerState({
    ...datePickerProps,
    // shouldCloseOnSelect: false,
  });

  const ref = useRef<HTMLDivElement>(null);
  const {
    groupProps,
    startFieldProps: { onChange: onStartChange, ...startFieldProps },
    endFieldProps: { onChange: onEndChange, ...endFieldProps },
    buttonProps: {
      isDisabled: isButtonDisabled,
      onPress: onButtonClick,
      ...otherButtonProps
    },
    calendarProps,
  } = useDateRangePicker(props, state, ref);

  return (
    <Flex
      align="center"
      direction="row"
      gap="1"
      {...groupProps}
      ref={ref}
      className={classNames(
        'fui-DateRangePickerRoot',
        className,
        withMarginProps(marginProps),
      )}
    >
      <DateField
        {...startFieldProps}
        color={color}
        size={size}
        // @ts-expect-error TODO: Aria onChange types exclude NULL which is wrong
        onChange={onStartChange}
      />
      <DateField
        {...endFieldProps}
        color={color}
        size={size}
        // @ts-expect-error TODO: Aria onChange types exclude NULL which is wrong
        onChange={onEndChange}
      />
      <Popover.Root
        open={state.isOpen}
        onOpenChange={(open) => state.setOpen(open)}
      >
        <Popover.Trigger>
          <IconButton
            {...otherButtonProps}
            disabled={isButtonDisabled}
            // @ts-expect-error fix mismatching onPress and onClick types
            onClick={onButtonClick}
            onKeyDown={(e) => {
              // Radix and Aria keyboard event handlers are clashing
              // when pressing space or enter on the button.
              // Stop propagation to avoid that.
              if (e.code === 'Space' || e.code === 'Enter') {
                e.stopPropagation();
              }
            }}
            size={size}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 0C4.41421 0 4.75 0.335786 4.75 0.75V2H11.25V0.75C11.25 0.335786 11.5858 0 12 0C12.4142 0 12.75 0.335786 12.75 0.75V2.03304C14.5847 2.27749 16 3.84846 16 5.75V12.25C16 14.3211 14.3211 16 12.25 16H3.75C1.67893 16 0 14.3211 0 12.25V5.75C0 3.84846 1.41532 2.27749 3.25 2.03304V0.75C3.25 0.335786 3.58579 0 4 0ZM12 3.5H4H3.75C2.50736 3.5 1.5 4.50736 1.5 5.75V6H14.5V5.75C14.5 4.50736 13.4926 3.5 12.25 3.5H12ZM1.5 7.5V12.25C1.5 13.4926 2.50736 14.5 3.75 14.5H12.25C13.4926 14.5 14.5 13.4926 14.5 12.25V7.5H1.5Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </IconButton>
        </Popover.Trigger>
        <Popover.Content variant="translucent" align="center">
          <RangeCalendar {...calendarProps} />
        </Popover.Content>
      </Popover.Root>
    </Flex>
  );
}
