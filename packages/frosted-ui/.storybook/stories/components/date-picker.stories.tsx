import type { Meta, StoryObj } from '@storybook/react';

import { DateValue, parseDate } from '@internationalized/date';
import React from 'react';
import {
  Button,
  Calendar,
  DatePicker,
  Flex,
  Popover,
  datePickerPropDefs,
} from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Dates/DatePicker',
  component: DatePicker,
  args: {
    size: datePickerPropDefs.size.default,
    color: datePickerPropDefs.color.default,
    defaultValue: parseDate('2020-02-03'),
    onChange: (date) => console.log(date?.toString()),
    'aria-label': 'Birth date',
    isDisabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="column" gap="5">
      <DatePicker {...args} />
    </Flex>
  ),
};

export const Sizes: Story = {
  args: {},
  render: (args) => (
    <Flex direction="column" gap="5">
      <DatePicker {...args} size="1" />
      <DatePicker {...args} size="2" />
      <DatePicker {...args} size="3" />
    </Flex>
  ),
};

export const Custom: Story = {
  args: {},
  render: () => {
    const [date, setDate] = React.useState<DateValue>(parseDate('2020-02-03'));
    const [open, setOpen] = React.useState(true);
    return (
      <div style={{ marginTop: -200 }}>
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger>
            <Button size="3">
              {' '}
              <CalendarIcon /> {date.toString()}
            </Button>
          </Popover.Trigger>
          <Popover.Content
            variant="translucent"
            align="center"
            style={{ width: 'unset' }}
          >
            <Calendar
              minValue={parseDate('2020-01-03')}
              defaultValue={date}
              maxValue={parseDate('2020-03-03')}
              onChange={(value) => {
                setDate(value);
                setOpen(false);
              }}
            />
          </Popover.Content>
        </Popover.Root>
      </div>
    );
  },
};

const CalendarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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
