import type { Meta, StoryObj } from '@storybook/react';

import { DateValue, getLocalTimeZone, parseDate } from '@internationalized/date';
import { useDateFormatter } from '@react-aria/i18n';
import React from 'react';
import {
  Button,
  DateField,
  DateRangePicker,
  Inset,
  Popover,
  RangeCalendar,
  Separator,
  dateRangePickerPropDefs,
} from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DateRangePicker> = {
  title: 'Controls/Dates/DateRangePicker',
  component: DateRangePicker,
  args: {
    size: dateRangePickerPropDefs.size.default,
    color: dateRangePickerPropDefs.color.default,
    defaultValue: {
      start: parseDate('2020-02-03'),
      end: parseDate('2020-02-08'),
    },
    onChange: (date) => console.log(date ? date.start.toString() + ' - ' + date.end.toString() : date),
    'aria-label': 'Birth date',
    isDisabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <DateRangePicker {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <DateRangePicker {...args} size="1" />
      <DateRangePicker {...args} size="2" />
      <DateRangePicker {...args} size="3" />
      <DateRangePicker {...args} size="4" />
    </div>
  ),
};

export const Custom: Story = {
  args: {},
  render: () => {
    const [date, setDate] = React.useState<{
      start: DateValue;
      end: DateValue;
    } | null>(null);
    const [calendarDate, setCalendarDate] = React.useState<{
      start: DateValue | null;
      end: DateValue | null;
    }>(date || { start: null, end: null });

    const [focusedDate, setFocusedDate] = React.useState<DateValue | undefined>();

    const formatter = useDateFormatter({ dateStyle: 'medium' });

    return (
      <div style={{ marginTop: -200 }}>
        <Popover.Root
          defaultOpen
          onOpenChange={(open) => {
            if (!open) {
              setCalendarDate(date || { start: null, end: null });
              setFocusedDate(
                date
                  ? date.start
                  : calendarDate.start
                    ? calendarDate.start
                    : calendarDate.end
                      ? calendarDate.end
                      : undefined,
              );
            }
          }}
        >
          <Popover.Trigger>
            <Button size="3">
              <CalendarIcon />
              Selected date:{' '}
              {date
                ? formatter.formatRange(date.start.toDate(getLocalTimeZone()), date.end.toDate(getLocalTimeZone()))
                : '--'}
            </Button>
          </Popover.Trigger>
          <Popover.Content variant="translucent" alignment="center" style={{ minWidth: 'unset' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  marginBottom: 'var(--space-4)',
                  gap: 'var(--space-3)',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <DateField
                  aria-label="Start date"
                  value={calendarDate.start}
                  onChange={(date) => {
                    setCalendarDate((state) => ({
                      ...state,
                      start: date || null,
                    }));
                    setFocusedDate(date || undefined);
                  }}
                />
                <ArrowRightIcon />
                <DateField
                  aria-label="End date"
                  value={calendarDate.end}
                  onChange={(date) => {
                    setCalendarDate((state) => ({
                      ...state,
                      end: date || null,
                    }));
                    setFocusedDate(date || undefined);
                  }}
                />
              </div>
              <RangeCalendar
                value={
                  calendarDate.start && calendarDate.end ? { start: calendarDate.start, end: calendarDate.end } : null
                }
                onChange={(value) => {
                  if (value === null) {
                    setCalendarDate({ start: null, end: null });
                  } else {
                    setCalendarDate({ start: value.start, end: value.end });
                  }
                }}
                focusedValue={focusedDate}
                onFocusChange={setFocusedDate}
              />
              <div style={{ marginTop: 'var(--space-4)' }}>
                <Inset side="x">
                  <Separator size="4" />
                </Inset>
              </div>
              <div
                style={{
                  display: 'flex',
                  paddingTop: 'var(--space-4)',
                  gap: 'var(--space-2)',
                  justifyContent: 'space-between',
                }}
              >
                <Popover.Close>
                  <Button style={{ flex: 1 }}>Cancel</Button>
                </Popover.Close>
                <Popover.Close>
                  <Button
                    variant="classic"
                    style={{ flex: 1 }}
                    disabled={!calendarDate.start || !calendarDate.end}
                    onClick={() => {
                      if (calendarDate.start && calendarDate.end) {
                        if (calendarDate.start.compare(calendarDate.end) <= 0) {
                          setDate({
                            start: calendarDate.start,
                            end: calendarDate.end,
                          });
                        } else {
                          setDate({
                            start: calendarDate.end,
                            end: calendarDate.start,
                          });
                        }
                      }
                    }}
                  >
                    Set
                  </Button>
                </Popover.Close>
              </div>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    );
  },
};

const ArrowRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.75 6H11.25M11.25 6L7 1.75M11.25 6L7 10.25"
      stroke="var(--gray-a10)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1869_102855)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0C4.41421 0 4.75 0.335786 4.75 0.75V2H11.25V0.75C11.25 0.335786 11.5858 0 12 0C12.4142 0 12.75 0.335786 12.75 0.75V2.03304C14.5847 2.27749 16 3.84846 16 5.75V12.25C16 14.3211 14.3211 16 12.25 16H3.75C1.67893 16 0 14.3211 0 12.25V5.75C0 3.84846 1.41532 2.27749 3.25 2.03304V0.75C3.25 0.335786 3.58579 0 4 0ZM12 3.5H4H3.75C2.50736 3.5 1.5 4.50736 1.5 5.75V6H14.5V5.75C14.5 4.50736 13.4926 3.5 12.25 3.5H12ZM1.5 7.5V12.25C1.5 13.4926 2.50736 14.5 3.75 14.5H12.25C13.4926 14.5 14.5 13.4926 14.5 12.25V7.5H1.5Z"
        fill="var(--gray-10)"
      />
    </g>
    <defs>
      <clipPath id="clip0_1869_102855">
        <rect width="16" height="16" fill="var(--gray-10)" />
      </clipPath>
    </defs>
  </svg>
);
