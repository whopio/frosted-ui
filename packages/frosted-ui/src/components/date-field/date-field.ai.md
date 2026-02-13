# Frosted UI DateField Component

A date input field component that accepts **@internationalized/date** objects for proper internationalization, localization, and timezone handling. Built with React Aria for comprehensive accessibility support.

## Overview

The DateField component provides a segmented date input that allows users to edit dates using individual date segments (month, day, year, etc.). Unlike HTML date inputs, it uses **@internationalized/date** objects to handle complex date scenarios including:

- **Proper timezone support**
- **International calendar systems** (Gregory, Hebrew, Buddhist, etc.)
- **Locale-aware formatting** (MM/DD/YYYY vs DD/MM/YYYY)
- **Date-only, date-time, and zoned date-time values**
- **Accessible keyboard navigation** between segments

## Basic Usage

```jsx
import { DateField } from '@frosted-ui/core';
import { CalendarDate } from '@internationalized/date';

function DateExample() {
  const [date, setDate] = React.useState(new CalendarDate(2024, 1, 15));

  return <DateField value={date} onChange={setDate} aria-label="Select date" />;
}
```

## Props

### Required Props

| Prop    | Type                                                | Description                                              |
| ------- | --------------------------------------------------- | -------------------------------------------------------- |
| `value` | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | The current date value (**use @internationalized/date**) |

### Optional Props

| Prop               | Type                                                | Default     | Description                                         |
| ------------------ | --------------------------------------------------- | ----------- | --------------------------------------------------- |
| `onChange`         | `(value: DateValue \| undefined) => void`           | `undefined` | Handler called when the date value changes          |
| `defaultValue`     | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The default date value when uncontrolled            |
| `size`             | `'1' \| '2' \| '3'`                                 | `'2'`       | The size of the date field                          |
| `color`            | `string`                                            | `undefined` | The accent color - supports all Frosted UI colors   |
| `minValue`         | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The minimum allowed date                            |
| `maxValue`         | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The maximum allowed date                            |
| `isDisabled`       | `boolean`                                           | `false`     | Whether the date field is disabled                  |
| `isReadOnly`       | `boolean`                                           | `false`     | Whether the date field is read-only                 |
| `isRequired`       | `boolean`                                           | `false`     | Whether the date field is required                  |
| `isInvalid`        | `boolean`                                           | `false`     | Whether the date field has a validation error       |
| `granularity`      | `'day' \| 'hour' \| 'minute' \| 'second'`           | `'day'`     | The smallest unit that can be edited                |
| `hideTimeZone`     | `boolean`                                           | `false`     | Whether to hide the timezone segment                |
| `hourCycle`        | `12 \| 24`                                          | `undefined` | Whether to use 12 or 24 hour time format            |
| `placeholderValue` | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | A placeholder date that influences the format shown |

## Examples

### Basic Date Input

```jsx
import { DateField } from '@frosted-ui/core';
import { CalendarDate } from '@internationalized/date';

function BasicExample() {
  const [birthDate, setBirthDate] = React.useState(new CalendarDate(1990, 6, 15));

  return (
    <div className="space-y-3">
      <Heading size="3">Personal Information</Heading>
      <div>
        <Text weight="medium" className="mb-2">
          Birth Date
        </Text>
        <DateField value={birthDate} onChange={setBirthDate} aria-label="Birth date" />
      </div>
    </div>
  );
}
```

### Date with Time

```jsx
import { DateField } from '@frosted-ui/core';
import { ZonedDateTime, parseZonedDateTime } from '@internationalized/date';

function DateTimeExample() {
  const [meetingTime, setMeetingTime] = React.useState(parseZonedDateTime('2024-03-15T14:30[America/New_York]'));

  return (
    <div className="space-y-3">
      <Heading size="3">Schedule Meeting</Heading>
      <div>
        <Text weight="medium" className="mb-2">
          Meeting Time
        </Text>
        <DateField value={meetingTime} onChange={setMeetingTime} granularity="minute" aria-label="Meeting time" />
        <Text size="2" color="gray" className="mt-1">
          Time will be shown in {meetingTime.timeZone}
        </Text>
      </div>
    </div>
  );
}
```

### Validation and Constraints

```jsx
import { DateField } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function ValidationExample() {
  const [eventDate, setEventDate] = React.useState(null);
  const minDate = today(getLocalTimeZone());
  const maxDate = today(getLocalTimeZone()).add({ months: 6 });

  const isInvalid = eventDate && eventDate.compare(minDate) < 0;

  return (
    <div className="space-y-4">
      <div>
        <Heading size="4" className="mb-2">
          Event Registration
        </Heading>
        <Text color="gray" size="2">
          Select a future event date within 6 months
        </Text>
      </div>

      <div>
        <Text weight="medium" className="mb-2">
          Event Date *
        </Text>
        <DateField
          value={eventDate}
          onChange={setEventDate}
          minValue={minDate}
          maxValue={maxDate}
          isRequired
          isInvalid={isInvalid}
          color={isInvalid ? 'red' : 'blue'}
          aria-label="Event date"
          aria-describedby={isInvalid ? 'date-error' : undefined}
        />
        {isInvalid && (
          <Text id="date-error" size="2" color="red" className="mt-1">
            Event date must be in the future
          </Text>
        )}
      </div>

      <div className="text-1 text-gray-11">
        <Text size="2" color="gray">
          Available range: {minDate.toDate(getLocalTimeZone()).toLocaleDateString()} -{' '}
          {maxDate.toDate(getLocalTimeZone()).toLocaleDateString()}
        </Text>
      </div>
    </div>
  );
}
```

### Different Sizes

```jsx
import { DateField } from '@frosted-ui/core';
import { CalendarDate } from '@internationalized/date';

function SizeExample() {
  const [date1, setDate1] = React.useState(new CalendarDate(2024, 1, 15));
  const [date2, setDate2] = React.useState(new CalendarDate(2024, 1, 15));
  const [date3, setDate3] = React.useState(new CalendarDate(2024, 1, 15));

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Size 1 (Small)</Heading>
        <DateField size="1" value={date1} onChange={setDate1} aria-label="Small date field" />
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 2 (Default)</Heading>
        <DateField size="2" value={date2} onChange={setDate2} aria-label="Default date field" />
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 3 (Large)</Heading>
        <DateField size="3" value={date3} onChange={setDate3} aria-label="Large date field" />
      </div>
    </div>
  );
}
```

### User Profile Form

```jsx
import { DateField } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function ProfileForm() {
  const [formData, setFormData] = React.useState({
    birthDate: null,
    joinDate: new CalendarDate(2024, 1, 1),
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const maxBirthDate = today(getLocalTimeZone()).subtract({ years: 13 });

  return (
    <Card className="p-6 max-w-[500px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Profile Information
        </Heading>
        <Text color="gray" size="2">
          Update your personal details
        </Text>
      </div>

      <div className="space-y-4">
        <div>
          <Text weight="medium" className="mb-2">
            Birth Date *
          </Text>
          <DateField
            value={formData.birthDate}
            onChange={(value) => updateField('birthDate', value)}
            maxValue={maxBirthDate}
            isRequired
            color="blue"
            aria-label="Birth date"
          />
          <Text size="1" color="gray" className="mt-1">
            Must be 13 years or older
          </Text>
        </div>

        <div>
          <Text weight="medium" className="mb-2">
            Join Date
          </Text>
          <DateField
            value={formData.joinDate}
            onChange={(value) => updateField('joinDate', value)}
            isReadOnly
            color="gray"
            aria-label="Join date"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="soft">Cancel</Button>
        <Button disabled={!formData.birthDate}>Save Changes</Button>
      </div>
    </Card>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
<div className="space-y-4">
  <div className="flex items-center gap-3">
    <DateField size="2" value={date} onChange={setDate} className="flex-1" />
    <Button size="2">Submit</Button>
  </div>
</div>
```

### Typography Integration

```jsx
<div className="space-y-2">
  <Text weight="medium" size="2">
    Event Date
  </Text>
  <DateField value={date} onChange={setDate} />
  <Text size="1" color="gray">
    Select a date for the event
  </Text>
</div>
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The DateField component includes comprehensive accessibility features:

### Keyboard Navigation

- **Tab** - Focus the first/next date segment
- **Shift + Tab** - Focus the previous date segment
- **Arrow Keys** - Navigate between date segments
- **Number Keys** - Enter values in focused segment
- **Backspace/Delete** - Clear focused segment
- **Home/End** - Navigate to first/last segment

### Screen Reader Support

- Each date segment is properly labeled
- Invalid states are announced
- Required fields are indicated
- Constraints (min/max dates) are communicated

### Focus Management

- Clear focus indicators on each segment
- Logical tab order through date components
- Focus remains within component during editing

## Advanced Usage

### International Date Handling

```jsx
import { DateField } from '@frosted-ui/core';
import { CalendarDate, getLocalTimeZone } from '@internationalized/date';

// **@internationalized/date** automatically handles:
// - Different calendar systems (Gregory, Hebrew, Buddhist, etc.)
// - Locale-specific formatting (MM/DD/YYYY vs DD/MM/YYYY)
// - Right-to-left text direction for Arabic dates
// - Proper leap year calculations across calendar systems

function InternationalExample() {
  const [date, setDate] = React.useState(new CalendarDate(2024, 1, 15));

  return (
    <div className="space-y-3">
      <Text weight="medium">Using @internationalized/date for proper locale support</Text>
      <DateField value={date} onChange={setDate} aria-label="International date" />
      <Text size="2" color="gray">
        Format automatically adapts to user's locale
      </Text>
    </div>
  );
}
```

### Working with Different Date Types

```jsx
import {
  CalendarDate, // Date only (no time)
  CalendarDateTime, // Date with time (no timezone)
  ZonedDateTime, // Date with time and timezone
  parseDate,
  parseDateTime,
  parseZonedDateTime,
} from '@internationalized/date';

// Date only - recommended for most use cases
const dateOnly = new CalendarDate(2024, 3, 15);

// Date with time (no timezone)
const dateTime = new CalendarDateTime(2024, 3, 15, 14, 30);

// Date with timezone - for scheduling across timezones
const zonedDate = parseZonedDateTime('2024-03-15T14:30[America/New_York]');
```

## Best Practices

### Date Value Management

- **Always use @internationalized/date objects** instead of JavaScript Date objects
- **Use CalendarDate** for date-only scenarios (birthdays, events)
- **Use ZonedDateTime** for scheduling across timezones
- **Validate date ranges** using proper comparison methods

### User Experience

- **Provide clear labels** and helper text for date constraints
- **Show validation errors** immediately after user input
- **Use appropriate granularity** (day vs minute) based on use case
- **Consider timezone implications** for global applications

### Form Integration

- **Combine with validation libraries** that support custom objects
- **Handle null/undefined states** gracefully
- **Provide accessible error messages** linked to fields
- **Use consistent sizing** with other form components

## Related Components

- **[DatePicker](../date-picker/date-picker.ai.md)** - Date input with calendar popup
- **[DateRangePicker](../date-range-picker/date-range-picker.ai.md)** - Date range selection
- **[Calendar](../calendar/calendar.ai.md)** - Full calendar interface
- **[TextField](../text-field/text-field.ai.md)** - Basic text input
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For labels and helper text
