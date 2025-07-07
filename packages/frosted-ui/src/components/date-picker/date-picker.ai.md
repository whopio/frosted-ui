# Frosted UI DatePicker Component

A date input component that combines a text field with a calendar popup for intuitive date selection. Built with full internationalization support using `@internationalized/date` for proper date handling across all locales and calendar systems.

## Overview

The DatePicker component provides an accessible and user-friendly way to select dates through both keyboard input and visual calendar selection. It uses `@internationalized/date` for all date operations, ensuring proper handling of timezones, calendar systems, and locales.

**Critical: This component requires `@internationalized/date` for all date values and operations. Do not use native JavaScript Date objects.**

The component automatically handles date formatting, validation, and accessibility features while providing a seamless user experience across different input methods.

## Basic Usage

```jsx
import { DatePicker } from '@frosted-ui/core';
import { CalendarDate } from '@internationalized/date';

function BasicDatePicker() {
  const [value, setValue] = React.useState(new CalendarDate(2024, 1, 15));

  return <DatePicker value={value} onChange={setValue} aria-label="Select date" />;
}
```

## Props

### DatePicker Props

| Prop                | Type                                                | Default     | Description                                                 |
| ------------------- | --------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| `value`             | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The current selected date (**use @internationalized/date**) |
| `defaultValue`      | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The default selected date when uncontrolled                 |
| `onChange`          | `(value: DateValue \| undefined) => void`           | `undefined` | Handler called when the date changes                        |
| `size`              | `'1' \| '2' \| '3'`                                 | `'2'`       | The size of the date picker input                           |
| `color`             | `string`                                            | `undefined` | The accent color - supports all Frosted UI colors           |
| `minValue`          | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The minimum allowed date                                    |
| `maxValue`          | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The maximum allowed date                                    |
| `isDisabled`        | `boolean`                                           | `false`     | Whether the date picker is disabled                         |
| `isReadOnly`        | `boolean`                                           | `false`     | Whether the date picker is read-only                        |
| `isRequired`        | `boolean`                                           | `false`     | Whether the date picker is required                         |
| `isInvalid`         | `boolean`                                           | `false`     | Whether the date picker has a validation error              |
| `isDateUnavailable` | `(date: DateValue) => boolean`                      | `undefined` | Function to determine if a date is unavailable              |
| `placeholderValue`  | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | A placeholder date that influences the format shown         |

## Examples

### Form Date Input

```jsx
import { DatePicker, Heading, Text, Button } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function FormDateInput() {
  const [birthDate, setBirthDate] = React.useState();
  const [startDate, setStartDate] = React.useState(today(getLocalTimeZone()));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Birth Date:', birthDate?.toString());
    console.log('Start Date:', startDate?.toString());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Heading size="4" className="mb-4">
          Personal Information
        </Heading>

        <div className="space-y-4">
          <div>
            <Text weight="medium" className="mb-2">
              Birth Date
            </Text>
            <DatePicker
              value={birthDate}
              onChange={setBirthDate}
              maxValue={today(getLocalTimeZone())}
              isRequired
              aria-label="Birth date"
            />
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              Employment Start Date
            </Text>
            <DatePicker
              value={startDate}
              onChange={setStartDate}
              minValue={today(getLocalTimeZone())}
              aria-label="Employment start date"
            />
          </div>
        </div>
      </div>

      <Button type="submit" disabled={!birthDate}>
        Submit Application
      </Button>
    </form>
  );
}
```

### Event Registration

```jsx
import { DatePicker, Heading, Text, Badge, Card } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function EventRegistration() {
  const [eventDate, setEventDate] = React.useState();

  const eventDates = [
    new CalendarDate(2024, 3, 15),
    new CalendarDate(2024, 3, 22),
    new CalendarDate(2024, 3, 29),
    new CalendarDate(2024, 4, 5),
  ];

  const isDateUnavailable = (date) => {
    // Only allow specific event dates
    return !eventDates.some((eventDate) => eventDate.compare(date) === 0);
  };

  const getEventInfo = (date) => {
    const eventIndex = eventDates.findIndex((eventDate) => eventDate.compare(date) === 0);
    const sessions = ['Beginner Workshop', 'Intermediate Session', 'Advanced Masterclass', 'Expert Q&A'];
    return sessions[eventIndex];
  };

  return (
    <Card className="p-6 space-y-4">
      <div>
        <Heading size="4" className="mb-2">
          Workshop Registration
        </Heading>
        <Text color="gray" size="2">
          Select from available workshop dates
        </Text>
      </div>

      <div>
        <Text weight="medium" className="mb-2">
          Available Dates
        </Text>
        <DatePicker
          value={eventDate}
          onChange={setEventDate}
          isDateUnavailable={isDateUnavailable}
          minValue={today(getLocalTimeZone())}
          aria-label="Workshop date selection"
          color="blue"
        />
      </div>

      {eventDate && (
        <div className="p-4 bg-blue-2 rounded-3">
          <div className="flex items-center gap-2 mb-2">
            <Badge color="blue" variant="soft">
              Selected
            </Badge>
            <Text weight="medium">{getEventInfo(eventDate)}</Text>
          </div>
          <Text size="2">Date: {eventDate.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
        </div>
      )}

      <div className="space-y-2">
        <Text weight="medium" size="2">
          Available Sessions:
        </Text>
        {eventDates.map((date, index) => (
          <div key={index} className="flex items-center gap-2">
            <Badge variant="outline" size="1">
              {date.toDate(getLocalTimeZone()).toLocaleDateString()}
            </Badge>
            <Text size="2" color="gray">
              {getEventInfo(date)}
            </Text>
          </div>
        ))}
      </div>
    </Card>
  );
}
```

### Appointment Booking

```jsx
import { DatePicker, Heading, Text, Badge } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function AppointmentBooking() {
  const [appointmentDate, setAppointmentDate] = React.useState();

  const isDateUnavailable = (date) => {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    // Block weekends and past dates
    return dayOfWeek === 0 || dayOfWeek === 6 || date.compare(today(getLocalTimeZone())) < 0;
  };

  const getNextAvailableDate = () => {
    let date = today(getLocalTimeZone()).add({ days: 1 });
    while (isDateUnavailable(date)) {
      date = date.add({ days: 1 });
    }
    return date;
  };

  const nextAvailable = getNextAvailableDate();

  return (
    <div className="space-y-4">
      <div>
        <Heading size="4" className="mb-2">
          Book Appointment
        </Heading>
        <Text color="gray" size="2">
          Available Monday through Friday
        </Text>
      </div>

      <DatePicker
        value={appointmentDate}
        onChange={setAppointmentDate}
        isDateUnavailable={isDateUnavailable}
        placeholderValue={nextAvailable}
        aria-label="Appointment date"
        color="green"
      />

      <div className="flex items-center gap-2">
        <Badge color="green" variant="soft">
          Next Available
        </Badge>
        <Text size="2">{nextAvailable.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
      </div>

      {appointmentDate && (
        <div className="p-4 bg-green-2 rounded-3">
          <Text weight="medium">Appointment Scheduled</Text>
          <Text size="2">
            {appointmentDate.toDate(getLocalTimeZone()).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </div>
      )}
    </div>
  );
}
```

### Task Due Date Picker

```jsx
import { DatePicker, Heading, Text, Select, Badge } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function TaskDueDatePicker() {
  const [dueDate, setDueDate] = React.useState();
  const [priority, setPriority] = React.useState('medium');

  const quickDates = [
    { label: 'Today', value: today(getLocalTimeZone()) },
    { label: 'Tomorrow', value: today(getLocalTimeZone()).add({ days: 1 }) },
    { label: 'This Week', value: today(getLocalTimeZone()).add({ days: 7 }) },
    { label: 'Next Week', value: today(getLocalTimeZone()).add({ days: 14 }) },
  ];

  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'gray';
    }
  };

  const isUrgent = dueDate && dueDate.compare(today(getLocalTimeZone()).add({ days: 2 })) <= 0;

  return (
    <div className="space-y-4">
      <div>
        <Heading size="4" className="mb-2">
          Set Task Deadline
        </Heading>
        <Text color="gray" size="2">
          Choose when this task should be completed
        </Text>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Text weight="medium" className="mb-2">
            Due Date
          </Text>
          <DatePicker
            value={dueDate}
            onChange={setDueDate}
            minValue={today(getLocalTimeZone())}
            aria-label="Task due date"
            color={isUrgent ? 'red' : 'blue'}
          />
        </div>

        <div>
          <Text weight="medium" className="mb-2">
            Priority
          </Text>
          <Select.Root value={priority} onValueChange={setPriority}>
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="low">Low Priority</Select.Item>
              <Select.Item value="medium">Medium Priority</Select.Item>
              <Select.Item value="high">High Priority</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <div>
        <Text weight="medium" className="mb-2">
          Quick Select
        </Text>
        <div className="flex flex-wrap gap-2">
          {quickDates.map((quick) => (
            <button
              key={quick.label}
              onClick={() => setDueDate(quick.value)}
              className="px-3 py-1 text-sm border border-gray-6 rounded-2 hover:bg-gray-2"
            >
              {quick.label}
            </button>
          ))}
        </div>
      </div>

      {dueDate && (
        <div className={`p-4 rounded-3 ${isUrgent ? 'bg-red-2' : 'bg-blue-2'}`}>
          <div className="flex items-center gap-2 mb-2">
            <Badge color={getPriorityColor()} variant="soft">
              {priority} priority
            </Badge>
            {isUrgent && (
              <Badge color="red" variant="soft">
                ⚠️ Urgent
              </Badge>
            )}
          </div>
          <Text weight="medium">Due: {dueDate.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
          {isUrgent && (
            <Text size="2" color="red">
              This task is due very soon!
            </Text>
          )}
        </div>
      )}
    </div>
  );
}
```

### Vacation Request Form

```jsx
import { DatePicker, Heading, Text, Button, Card } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function VacationRequestForm() {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();

  const calculateBusinessDays = (start, end) => {
    if (!start || !end) return 0;

    let count = 0;
    let current = start;

    while (current.compare(end) <= 0) {
      const dayOfWeek = current.toDate(getLocalTimeZone()).getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Not weekend
        count++;
      }
      current = current.add({ days: 1 });
    }

    return count;
  };

  const businessDays = calculateBusinessDays(startDate, endDate);

  const isDateUnavailable = (date) => {
    // Block past dates and company holidays
    const holidays = [
      new CalendarDate(2024, 1, 1), // New Year
      new CalendarDate(2024, 7, 4), // Independence Day
      new CalendarDate(2024, 12, 25), // Christmas
    ];

    return date.compare(today(getLocalTimeZone())) < 0 || holidays.some((holiday) => holiday.compare(date) === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate && endDate) {
      console.log('Vacation request:', { startDate, endDate, businessDays });
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Heading size="4" className="mb-2">
            Request Time Off
          </Heading>
          <Text color="gray" size="2">
            Select your vacation dates
          </Text>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Text weight="medium" className="mb-2">
              Start Date
            </Text>
            <DatePicker
              value={startDate}
              onChange={(date) => {
                setStartDate(date);
                // Clear end date if it's before new start date
                if (endDate && date && endDate.compare(date) < 0) {
                  setEndDate(undefined);
                }
              }}
              isDateUnavailable={isDateUnavailable}
              aria-label="Vacation start date"
              color="purple"
            />
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              End Date
            </Text>
            <DatePicker
              value={endDate}
              onChange={setEndDate}
              minValue={startDate}
              isDateUnavailable={isDateUnavailable}
              isDisabled={!startDate}
              aria-label="Vacation end date"
              color="purple"
            />
          </div>
        </div>

        {startDate && endDate && (
          <div className="p-4 bg-purple-2 rounded-3">
            <div className="space-y-2">
              <Text weight="medium">Vacation Summary</Text>
              <Text size="2">From: {startDate.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
              <Text size="2">To: {endDate.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
              <Text size="2">Business Days: {businessDays}</Text>
            </div>
          </div>
        )}

        <Button type="submit" disabled={!startDate || !endDate} color="purple">
          Submit Request
        </Button>
      </form>
    </Card>
  );
}
```

### Size Variants

```jsx
import { DatePicker, Heading, Text } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function SizeVariants() {
  const [date1, setDate1] = React.useState(today(getLocalTimeZone()));
  const [date2, setDate2] = React.useState(today(getLocalTimeZone()));
  const [date3, setDate3] = React.useState(today(getLocalTimeZone()));

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Size 1 (Small)</Heading>
        <DatePicker size="1" value={date1} onChange={setDate1} aria-label="Small date picker" />
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 2 (Default)</Heading>
        <DatePicker size="2" value={date2} onChange={setDate2} aria-label="Default date picker" />
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 3 (Large)</Heading>
        <DatePicker size="3" value={date3} onChange={setDate3} aria-label="Large date picker" />
      </div>
    </div>
  );
}
```

## @internationalized/date Integration

### Why Use @internationalized/date

**Essential**: This component requires `@internationalized/date` for all date operations. Benefits include:

- **Proper Internationalization**: Supports all calendar systems and locales automatically
- **Timezone Safety**: Handles timezone conversions without bugs
- **Immutable Operations**: Prevents common date mutation issues
- **Type Safety**: Full TypeScript support for different date types
- **Performance**: Optimized for calendar calculations and formatting

### Date Value Types

```jsx
import {
  CalendarDate, // Date only (recommended for most use cases)
  CalendarDateTime, // Date with time
  ZonedDateTime, // Date with timezone
  today,
  getLocalTimeZone,
} from '@internationalized/date';

// Most common: Date only
const date = new CalendarDate(2024, 1, 15);

// With time (24-hour format)
const dateTime = new CalendarDateTime(2024, 1, 15, 14, 30);

// With timezone
const zonedDate = new ZonedDateTime(2024, 1, 15, 'America/New_York', -5, 14, 30);

// Dynamic dates
const todayLocal = today(getLocalTimeZone());
```

### Common Operations

```jsx
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

const date = new CalendarDate(2024, 1, 15);

// Date arithmetic
const nextWeek = date.add({ weeks: 1 });
const lastMonth = date.subtract({ months: 1 });
const nextYear = date.add({ years: 1 });

// Comparisons
const isAfter = date.compare(today(getLocalTimeZone())) > 0;
const isSame = date.compare(today(getLocalTimeZone())) === 0;
const isBefore = date.compare(today(getLocalTimeZone())) < 0;

// Convert for display (only when needed)
const jsDate = date.toDate(getLocalTimeZone());
const formatted = jsDate.toLocaleDateString();
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
// Use Frosted UI spacing tokens for consistent layouts
<div className="space-y-4"> {/* Uses --space-4 */}
  <Text weight="medium">Select Date</Text>
  <DatePicker value={date} onChange={setDate} />
</div>

// Grid layouts with proper spacing
<div className="grid grid-cols-2 gap-4">
  <DatePicker value={startDate} onChange={setStartDate} />
  <DatePicker value={endDate} onChange={setEndDate} />
</div>
```

### Color System Integration

```jsx
// Use semantic colors for different contexts
<DatePicker color="red" />    // Error or urgent dates
<DatePicker color="green" />  // Success or approved dates
<DatePicker color="blue" />   // Primary actions
<DatePicker color="purple" /> // Special events
```

## Accessibility

The DatePicker component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support for text input and calendar
- **ARIA Labels**: Proper labeling for screen readers
- **Focus Management**: Clear focus indicators and logical tab order
- **Date Announcements**: Screen reader announcements for date changes
- **Validation States**: Proper error state announcements
- **Locale Support**: Automatic date formatting for user's locale

### Keyboard Shortcuts

**Text Field:**

- Standard text editing shortcuts
- `↑` / `↓`: Increment/decrement date segments
- `Tab`: Move between date segments

**Calendar Popup:**

- `Space` or `Enter`: Open calendar
- `Escape`: Close calendar
- `Arrow keys`: Navigate calendar
- `Enter` / `Space`: Select date

## Best Practices

### Date Handling

- **Always use @internationalized/date**: Never mix with native Date objects
- **Choose appropriate type**: Use CalendarDate for most cases, CalendarDateTime when time matters
- **Handle validation**: Set proper min/max values and implement isDateUnavailable
- **Consider locale**: Let the component handle formatting automatically

### User Experience

- **Clear labels**: Always provide descriptive aria-label
- **Reasonable defaults**: Use placeholderValue to guide formatting
- **Progressive enhancement**: Support both keyboard and mouse input
- **Error handling**: Show clear validation messages for invalid dates

### Form Integration

- **Validation**: Use isInvalid prop for form validation feedback
- **Required fields**: Mark required fields clearly
- **Related dates**: Update related date pickers when constraints change

## Advanced Usage

### Complex Validation

```jsx
function ComplexValidationDatePicker() {
  const [date, setDate] = React.useState();

  const isDateUnavailable = React.useCallback((date) => {
    // Multiple validation rules
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();

    // Block weekends
    if (dayOfWeek === 0 || dayOfWeek === 6) return true;

    // Block holidays
    const holidays = [new CalendarDate(2024, 1, 1), new CalendarDate(2024, 7, 4), new CalendarDate(2024, 12, 25)];
    if (holidays.some((holiday) => holiday.compare(date) === 0)) return true;

    // Block dates too far in future
    const maxFuture = today(getLocalTimeZone()).add({ months: 6 });
    if (date.compare(maxFuture) > 0) return true;

    return false;
  }, []);

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      isDateUnavailable={isDateUnavailable}
      minValue={today(getLocalTimeZone())}
    />
  );
}
```

### Timezone Handling

```jsx
import { ZonedDateTime, parseZonedDateTime } from '@internationalized/date';

function TimezoneAwareDatePicker() {
  const [date, setDate] = React.useState();
  const [timezone, setTimezone] = React.useState('America/New_York');

  const handleDateChange = (newDate) => {
    if (newDate) {
      // Convert to specific timezone
      const zonedDate = newDate.toZoned(timezone);
      setDate(zonedDate);
    } else {
      setDate(undefined);
    }
  };

  return <DatePicker value={date} onChange={handleDateChange} aria-label="Timezone-aware date picker" />;
}
```

## Related Components

- **[Calendar](../calendar/calendar.ai.md)** - For calendar grid display without input
- **[TextField](../text-field/text-field.ai.md)** - For manual date text entry
- **[Popover](../popover/popover.ai.md)** - Used internally for calendar popup
- **[Select](../select/select.ai.md)** - For date part selection in some layouts
- **[Button](../button/button.ai.md)** - For calendar trigger button
