import type { Meta, StoryObj } from '@storybook/react';

import { DateValue, getLocalTimeZone, isWeekend, parseDate, today } from '@internationalized/date';
import { useLocale } from '@react-aria/i18n';
import React from 'react';
import { Calendar } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Dates/Calendar',
  component: Calendar,
  args: {
    isDisabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => (
    <div>
      <Calendar
        {...args}
        minValue={parseDate('1900-02-03')}
        defaultValue={parseDate('2020-02-03')}
        onChange={(date) => console.log(date.toString())}
      />
    </div>
  ),
};
export const Disabled: Story = {
  args: {},
  render: (args) => (
    <div>
      <Calendar
        {...args}
        isDisabled
        defaultValue={parseDate('2020-02-03')}
        onChange={(date) => console.log(date.toString())}
      />
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
      disabledRanges.some((interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0);

    return (
      <div style={{ width: 300 }}>
        <Calendar
          {...args}
          aria-label="Appointment date"
          minValue={today(getLocalTimeZone())}
          isDateUnavailable={isDateUnavailable}
        />
      </div>
    );
  },
};
