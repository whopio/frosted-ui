import type { Meta, StoryObj } from '@storybook/react';

import {
  DateValue,
  getLocalTimeZone,
  isWeekend,
  parseDate,
  today,
} from '@internationalized/date';
import { useLocale } from '@react-aria/i18n';
import React from 'react';
import { RangeCalendar } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Dates/RangeCalendar',
  component: RangeCalendar,
  args: {
    defaultValue: {
      start: parseDate('2020-02-03'),
      end: parseDate('2020-02-08'),
    },
    onChange: (dateRange) =>
      console.log(
        dateRange
          ? dateRange.start.toString() + ' - ' + dateRange.end.toString()
          : dateRange,
      ),
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RangeCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => (
    <div>
      <RangeCalendar {...args} minValue={parseDate('1900-02-03')} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {},
  render: (args) => (
    <div>
      <RangeCalendar {...args} isDisabled />
    </div>
  ),
};

export const UnavailableDates: Story = {
  name: 'Unavailable Dates',
  args: {},
  render: (args) => {
    const now = today(getLocalTimeZone());
    const disabledRanges = [
      [now, now.add({ days: 5 })],
      [now.add({ days: 14 }), now.add({ days: 16 })],
      [now.add({ days: 23 }), now.add({ days: 24 })],
    ];

    const { locale } = useLocale();
    const isDateUnavailable = (date: DateValue) =>
      isWeekend(date, locale) ||
      disabledRanges.some(
        (interval) =>
          date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
      );

    return (
      <div style={{ width: 300 }}>
        <RangeCalendar
          {...args}
          minValue={today(getLocalTimeZone())}
          isDateUnavailable={isDateUnavailable}
        />
      </div>
    );
  },
};
