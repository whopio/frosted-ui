# Frosted UI Calendar Component

A comprehensive calendar component for date selection with full internationalization support. Built on `@internationalized/date` for proper date handling across all locales and calendar systems.

## Overview

The Calendar component provides both single date selection and date range selection with complete internationalization support. It uses `@internationalized/date` for all date operations, ensuring proper handling of timezones, calendar systems, and locales.

**Important: This component requires `@internationalized/date` for all date values and operations. Do not use native JavaScript Date objects.**

## Basic Usage

### Single Date Selection

```jsx
import { Calendar } from '@frosted-ui/core';
import { CalendarDate } from '@internationalized/date';

function BasicCalendar() {
  const [value, setValue] = React.useState(new CalendarDate(2024, 1, 15));

  return <Calendar value={value} onChange={setValue} aria-label="Select a date" />;
}
```

### Date Range Selection

```jsx
import { RangeCalendar } from '@frosted-ui/core';
import { CalendarDate } from '@internationalized/date';

function DateRangePicker() {
  const [value, setValue] = React.useState({
    start: new CalendarDate(2024, 1, 15),
    end: new CalendarDate(2024, 1, 22),
  });

  return <RangeCalendar value={value} onChange={setValue} aria-label="Select date range" />;
}
```

## Props

### Calendar Props

| Prop                | Type                                                | Default     | Description                                                 |
| ------------------- | --------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| `value`             | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The current selected date (**use @internationalized/date**) |
| `defaultValue`      | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The default selected date when uncontrolled                 |
| `onChange`          | `(value: DateValue) => void`                        | `undefined` | Handler called when the date changes                        |
| `minValue`          | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The minimum allowed date                                    |
| `maxValue`          | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The maximum allowed date                                    |
| `isDisabled`        | `boolean`                                           | `false`     | Whether the calendar is disabled                            |
| `isReadOnly`        | `boolean`                                           | `false`     | Whether the calendar is read-only                           |
| `isDateUnavailable` | `(date: DateValue) => boolean`                      | `undefined` | Function to determine if a date is unavailable              |
| `focusedValue`      | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The currently focused date                                  |
| `onFocusChange`     | `(date: DateValue) => void`                         | `undefined` | Handler called when the focused date changes                |

### RangeCalendar Props

| Prop                        | Type                                                | Default     | Description                                                       |
| --------------------------- | --------------------------------------------------- | ----------- | ----------------------------------------------------------------- |
| `value`                     | `{start: DateValue, end: DateValue}`                | `undefined` | The current selected date range (**use @internationalized/date**) |
| `defaultValue`              | `{start: DateValue, end: DateValue}`                | `undefined` | The default selected range when uncontrolled                      |
| `onChange`                  | `(value: RangeValue<DateValue>) => void`            | `undefined` | Handler called when the date range changes                        |
| `minValue`                  | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The minimum allowed date                                          |
| `maxValue`                  | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The maximum allowed date                                          |
| `isDisabled`                | `boolean`                                           | `false`     | Whether the calendar is disabled                                  |
| `isReadOnly`                | `boolean`                                           | `false`     | Whether the calendar is read-only                                 |
| `isDateUnavailable`         | `(date: DateValue) => boolean`                      | `undefined` | Function to determine if a date is unavailable                    |
| `allowsNonContiguousRanges` | `boolean`                                           | `false`     | Whether non-contiguous ranges are allowed                         |

## Examples

### Event Booking Calendar

```jsx
import { Calendar, Heading, Text, Badge } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function EventBookingCalendar() {
  const [selectedDate, setSelectedDate] = React.useState(today(getLocalTimeZone()));

  // Example: Block past dates and weekends
  const isDateUnavailable = (date) => {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    return date.compare(today(getLocalTimeZone())) < 0 || dayOfWeek === 0 || dayOfWeek === 6;
  };

  return (
    <div className="space-y-4">
      <div>
        <Heading size="4" className="mb-2">
          Select Event Date
        </Heading>
        <Text color="gray" size="2">
          Choose a weekday for your event booking
        </Text>
      </div>

      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        isDateUnavailable={isDateUnavailable}
        minValue={today(getLocalTimeZone())}
        aria-label="Event booking calendar"
      />

      <div className="p-4 bg-blue-2 rounded-3">
        <Text weight="medium">Selected Date:</Text>
        <Text>{selectedDate.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
      </div>
    </div>
  );
}
```

### Hotel Reservation Range Picker

```jsx
import { RangeCalendar, Heading, Text, Badge } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function HotelReservationCalendar() {
  const [dateRange, setDateRange] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ days: 3 }),
  });

  const blockedDates = [
    new CalendarDate(2024, 2, 14), // Valentine's Day - fully booked
    new CalendarDate(2024, 2, 15),
    new CalendarDate(2024, 3, 17), // St. Patrick's Day - fully booked
  ];

  const isDateUnavailable = (date) => {
    return (
      blockedDates.some((blockedDate) => blockedDate.compare(date) === 0) || date.compare(today(getLocalTimeZone())) < 0
    );
  };

  const calculateNights = () => {
    if (dateRange?.start && dateRange?.end) {
      return dateRange.end.toDate(getLocalTimeZone()).getTime() - dateRange.start.toDate(getLocalTimeZone()).getTime();
    }
    return 0;
  };

  const nights = Math.ceil(calculateNights() / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-4">
      <div>
        <Heading size="4" className="mb-2">
          Select Stay Dates
        </Heading>
        <Text color="gray" size="2">
          Choose your check-in and check-out dates
        </Text>
      </div>

      <RangeCalendar
        value={dateRange}
        onChange={setDateRange}
        isDateUnavailable={isDateUnavailable}
        minValue={today(getLocalTimeZone())}
        aria-label="Hotel reservation dates"
      />

      {dateRange?.start && dateRange?.end && (
        <div className="p-4 bg-green-2 rounded-3 space-y-2">
          <div className="flex items-center gap-2">
            <Text weight="medium">Reservation Summary</Text>
            <Badge color="green" variant="soft">
              {nights} nights
            </Badge>
          </div>
          <Text size="2">Check-in: {dateRange.start.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
          <Text size="2">Check-out: {dateRange.end.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
        </div>
      )}
    </div>
  );
}
```

### Task Deadline Calendar

```jsx
import { Calendar, Heading, Text, Card } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function TaskDeadlineCalendar() {
  const [deadline, setDeadline] = React.useState(today(getLocalTimeZone()).add({ days: 7 }));

  const urgentThreshold = today(getLocalTimeZone()).add({ days: 3 });
  const isUrgent = deadline.compare(urgentThreshold) <= 0;

  return (
    <Card className="p-6 space-y-4">
      <div>
        <Heading size="4" className="mb-2">
          Set Task Deadline
        </Heading>
        <Text color="gray" size="2">
          Choose when this task should be completed
        </Text>
      </div>

      <Calendar
        value={deadline}
        onChange={setDeadline}
        minValue={today(getLocalTimeZone())}
        aria-label="Task deadline calendar"
      />

      <div className={`p-3 rounded-3 ${isUrgent ? 'bg-red-2' : 'bg-blue-2'}`}>
        <div className="flex items-center gap-2">
          <Text weight="medium" color={isUrgent ? 'red' : 'blue'}>
            {isUrgent ? '⚠️ Urgent Deadline' : '📅 Deadline Set'}
          </Text>
        </div>
        <Text size="2">Due: {deadline.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
        {isUrgent && (
          <Text size="1" color="red">
            This deadline is within 3 days!
          </Text>
        )}
      </div>
    </Card>
  );
}
```

### Availability Calendar with Time Zones

```jsx
import { Calendar, Heading, Text, Select } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone, toTimeZone } from '@internationalized/date';

function AvailabilityCalendar() {
  const [selectedDate, setSelectedDate] = React.useState(today(getLocalTimeZone()));
  const [timeZone, setTimeZone] = React.useState(getLocalTimeZone());

  const timeZones = [
    { value: 'America/New_York', label: 'Eastern Time' },
    { value: 'America/Chicago', label: 'Central Time' },
    { value: 'America/Denver', label: 'Mountain Time' },
    { value: 'America/Los_Angeles', label: 'Pacific Time' },
    { value: 'Europe/London', label: 'London Time' },
    { value: 'Asia/Tokyo', label: 'Tokyo Time' },
  ];

  // Convert selected date to chosen timezone
  const dateInTimeZone = selectedDate.toDate(timeZone);

  return (
    <div className="space-y-4">
      <div>
        <Heading size="4" className="mb-2">
          Check Availability
        </Heading>
        <Text color="gray" size="2">
          Select date and timezone to check availability
        </Text>
      </div>

      <div className="space-y-3">
        <div>
          <Text weight="medium" className="mb-2">
            Time Zone
          </Text>
          <Select.Root value={timeZone} onValueChange={setTimeZone}>
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {timeZones.map((tz) => (
                <Select.Item key={tz.value} value={tz.value}>
                  {tz.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>

        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          minValue={today(getLocalTimeZone())}
          aria-label="Availability calendar"
        />
      </div>

      <div className="p-4 bg-purple-2 rounded-3">
        <Text weight="medium">Selected Date & Time</Text>
        <Text size="2">
          {dateInTimeZone.toLocaleDateString()} in {timeZones.find((tz) => tz.value === timeZone)?.label}
        </Text>
      </div>
    </div>
  );
}
```

### Recurring Event Calendar

```jsx
import { Calendar, Heading, Text, Badge, Switch } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function RecurringEventCalendar() {
  const [startDate, setStartDate] = React.useState(today(getLocalTimeZone()).add({ days: 1 }));
  const [isRecurring, setIsRecurring] = React.useState(false);

  // Generate recurring dates (weekly for example)
  const getRecurringDates = (start, weeks = 8) => {
    const dates = [];
    for (let i = 0; i < weeks; i++) {
      dates.push(start.add({ weeks: i }));
    }
    return dates;
  };

  const recurringDates = isRecurring ? getRecurringDates(startDate) : [startDate];

  const isDateHighlighted = (date) => {
    return recurringDates.some((recurringDate) => recurringDate.compare(date) === 0);
  };

  return (
    <div className="space-y-4">
      <div>
        <Heading size="4" className="mb-2">
          Schedule Event
        </Heading>
        <Text color="gray" size="2">
          Set up a one-time or recurring event
        </Text>
      </div>

      <div className="flex items-center gap-3">
        <Switch checked={isRecurring} onCheckedChange={setIsRecurring} />
        <Text>Repeat weekly</Text>
      </div>

      <Calendar
        value={startDate}
        onChange={setStartDate}
        minValue={today(getLocalTimeZone())}
        aria-label="Event scheduling calendar"
      />

      <div className="space-y-3">
        <Text weight="medium">Event Schedule:</Text>
        {recurringDates.slice(0, 4).map((date, index) => (
          <div key={index} className="flex items-center gap-2">
            <Badge variant="soft" color="blue">
              {date.toDate(getLocalTimeZone()).toLocaleDateString()}
            </Badge>
            {index === 0 && (
              <Text size="1" color="gray">
                (First occurrence)
              </Text>
            )}
          </div>
        ))}
        {recurringDates.length > 4 && (
          <Text size="1" color="gray">
            ...and {recurringDates.length - 4} more occurrences
          </Text>
        )}
      </div>
    </div>
  );
}
```

### International Calendar

```jsx
import { Calendar, Heading, Text, Select } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function InternationalCalendar() {
  const [selectedDate, setSelectedDate] = React.useState(today(getLocalTimeZone()));
  const [locale, setLocale] = React.useState('en-US');

  const locales = [
    { value: 'en-US', label: 'English (US)' },
    { value: 'en-GB', label: 'English (UK)' },
    { value: 'es-ES', label: 'Español' },
    { value: 'fr-FR', label: 'Français' },
    { value: 'de-DE', label: 'Deutsch' },
    { value: 'ja-JP', label: '日本語' },
    { value: 'ar-SA', label: 'العربية' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <Heading size="4" className="mb-2">
          International Date Picker
        </Heading>
        <Text color="gray" size="2">
          Powered by @internationalized/date for proper locale support
        </Text>
      </div>

      <div>
        <Text weight="medium" className="mb-2">
          Language & Region
        </Text>
        <Select.Root value={locale} onValueChange={setLocale}>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            {locales.map((loc) => (
              <Select.Item key={loc.value} value={loc.value}>
                {loc.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>

      <Calendar value={selectedDate} onChange={setSelectedDate} aria-label="International calendar" />

      <div className="p-4 bg-green-2 rounded-3">
        <Text weight="medium">Selected Date (Localized):</Text>
        <Text>
          {selectedDate.toDate(getLocalTimeZone()).toLocaleDateString(locale, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </div>
    </div>
  );
}
```

## @internationalized/date Integration

### Why Use @internationalized/date

**Critical**: This component requires `@internationalized/date` for all date operations. Benefits include:

- **Proper Internationalization**: Supports all calendar systems and locales
- **Timezone Safety**: Handles timezone conversions correctly
- **Immutable Dates**: Prevents common date mutation bugs
- **Type Safety**: TypeScript support for different date types
- **Performance**: Optimized for date calculations

### Common Date Types

```jsx
import {
  CalendarDate, // Date only (no time)
  CalendarDateTime, // Date with time (no timezone)
  ZonedDateTime, // Date with time and timezone
  today,
  getLocalTimeZone,
} from '@internationalized/date';

// Date only (most common for calendars)
const dateOnly = new CalendarDate(2024, 1, 15);

// Date with time
const dateTime = new CalendarDateTime(2024, 1, 15, 14, 30);

// Date with timezone
const zonedDate = new ZonedDateTime(2024, 1, 15, 'America/New_York', -5, 14, 30);

// Today in local timezone
const today = today(getLocalTimeZone());
```

### Date Operations

```jsx
import { CalendarDate } from '@internationalized/date';

const date = new CalendarDate(2024, 1, 15);

// Add/subtract time
const nextWeek = date.add({ weeks: 1 });
const lastMonth = date.subtract({ months: 1 });

// Compare dates
const isAfter = date.compare(otherDate) > 0;
const isSame = date.compare(otherDate) === 0;

// Format for display
const formatted = date.toDate(getLocalTimeZone()).toLocaleDateString();
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
// Use Frosted UI spacing tokens for calendar layouts
<div className="space-y-4"> {/* Uses --space-4 */}
  <Heading size="4">Select Date</Heading>
  <Calendar value={date} onChange={setDate} />
</div>

// Integrate with Cards and other components
<Card className="p-6">
  <Calendar value={date} onChange={setDate} />
</Card>
```

### Color System Integration

The Calendar component automatically inherits accent colors from the theme context and uses proper color contrast tokens for different states.

## Accessibility

The Calendar component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with arrow keys
- **ARIA Labels**: Proper labeling for screen readers
- **Focus Management**: Clear focus indicators and logical tab order
- **Date Announcements**: Screen reader announcements for date changes
- **Locale Support**: Proper formatting for different languages

### Keyboard Shortcuts

- `←` / `→`: Navigate days
- `↑` / `↓`: Navigate weeks
- `Page Up` / `Page Down`: Navigate months
- `Home` / `End`: Navigate to start/end of week
- `Enter` / `Space`: Select focused date

## Best Practices

### Date Handling

- **Always use @internationalized/date**: Never mix with native Date objects
- **Consider timezones**: Use appropriate date types for your use case
- **Validate ranges**: Set proper min/max values for date constraints
- **Handle unavailable dates**: Implement isDateUnavailable for business rules

### User Experience

- **Clear labels**: Always provide aria-label for accessibility
- **Visual feedback**: Show selected dates and ranges clearly
- **Reasonable defaults**: Set sensible default dates
- **Context awareness**: Disable past dates for future events

### Performance

- **Memoize callbacks**: Use useCallback for date validation functions
- **Efficient comparisons**: Use CalendarDate.compare() for date comparisons
- **Limit ranges**: Set reasonable min/max values to improve performance

## Advanced Usage

### Custom Date Validation

```jsx
function CustomValidationCalendar() {
  const [date, setDate] = React.useState(today(getLocalTimeZone()));

  const isDateUnavailable = React.useCallback((date) => {
    // Block weekends
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return true;

    // Block holidays
    const holidays = [
      new CalendarDate(2024, 1, 1), // New Year
      new CalendarDate(2024, 7, 4), // July 4th
      new CalendarDate(2024, 12, 25), // Christmas
    ];

    return holidays.some((holiday) => holiday.compare(date) === 0);
  }, []);

  return (
    <Calendar
      value={date}
      onChange={setDate}
      isDateUnavailable={isDateUnavailable}
      minValue={today(getLocalTimeZone())}
    />
  );
}
```

## Related Components

- **[DatePicker](../date-picker/date-picker.ai.md)** - For date input with calendar popup
- **[TextField](../text-field/text-field.ai.md)** - For manual date entry
- **[Select](../select/select.ai.md)** - For month/year selection in calendar header
- **[Button](../button/button.ai.md)** - For calendar navigation buttons
- **[Card](../card/card.ai.md)** - For containing calendar interfaces
