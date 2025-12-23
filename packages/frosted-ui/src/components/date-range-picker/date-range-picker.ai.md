# Frosted UI DateRangePicker Component

A date range picker component that allows users to select start and end dates using **@internationalized/date** objects for proper internationalization, localization, and timezone handling. Combines date input fields with a calendar popup for intuitive range selection.

## Overview

The DateRangePicker component provides an elegant interface for selecting date ranges. It combines two DateField components with a calendar popup, using **@internationalized/date** objects to handle complex date scenarios including:

- **Proper timezone support** across date ranges
- **International calendar systems** (Gregory, Hebrew, Buddhist, etc.)
- **Locale-aware formatting** (MM/DD/YYYY vs DD/MM/YYYY)
- **Accessible keyboard navigation** between date fields
- **Visual range selection** in calendar popup
- **Automatic end date adjustment** when start date changes

## Basic Usage

```jsx
import { DateRangePicker } from '@frosted-ui/core';
import { CalendarDate } from '@internationalized/date';

function DateRangeExample() {
  const [range, setRange] = React.useState({
    start: new CalendarDate(2024, 1, 15),
    end: new CalendarDate(2024, 1, 22),
  });

  return <DateRangePicker value={range} onChange={setRange} aria-label="Select date range" />;
}
```

## Props

### Required Props

| Prop    | Type                                         | Description                                              |
| ------- | -------------------------------------------- | -------------------------------------------------------- |
| `value` | `{start: DateValue, end: DateValue} \| null` | The current date range (**use @internationalized/date**) |

### Optional Props

| Prop                        | Type                                                | Default     | Description                                          |
| --------------------------- | --------------------------------------------------- | ----------- | ---------------------------------------------------- |
| `onChange`                  | `(value: RangeValue \| null) => void`               | `undefined` | Handler called when the date range changes           |
| `defaultValue`              | `{start: DateValue, end: DateValue} \| null`        | `undefined` | The default date range when uncontrolled             |
| `size`                      | `'1' \| '2' \| '3'`                                 | `'2'`       | The size of the date picker inputs                   |
| `color`                     | `string`                                            | `undefined` | The accent color - supports all Frosted UI colors    |
| `minValue`                  | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The minimum allowed date                             |
| `maxValue`                  | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | The maximum allowed date                             |
| `isDisabled`                | `boolean`                                           | `false`     | Whether the date range picker is disabled            |
| `isReadOnly`                | `boolean`                                           | `false`     | Whether the date range picker is read-only           |
| `isRequired`                | `boolean`                                           | `false`     | Whether the date range picker is required            |
| `isInvalid`                 | `boolean`                                           | `false`     | Whether the date range picker has a validation error |
| `isDateUnavailable`         | `(date: DateValue) => boolean`                      | `undefined` | Function to determine if a date is unavailable       |
| `allowsNonContiguousRanges` | `boolean`                                           | `false`     | Whether non-contiguous ranges are allowed            |
| `placeholderValue`          | `CalendarDate \| CalendarDateTime \| ZonedDateTime` | `undefined` | A placeholder date that influences the format shown  |

## Examples

### Basic Date Range Selection

```jsx
import { DateRangePicker } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function BasicRangeExample() {
  const [dateRange, setDateRange] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ days: 7 }),
  });

  return (
    <div className="space-y-3">
      <Heading size="3">Select Date Range</Heading>
      <DateRangePicker value={dateRange} onChange={setDateRange} aria-label="Date range selection" />
      {dateRange && (
        <Text size="2" color="gray">
          {dateRange.end.toDate(getLocalTimeZone()).getTime() - dateRange.start.toDate(getLocalTimeZone()).getTime()}{' '}
          days selected
        </Text>
      )}
    </div>
  );
}
```

### Hotel Booking Interface

```jsx
import { DateRangePicker } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function HotelBooking() {
  const [stayDates, setStayDates] = React.useState(null);
  const [guests, setGuests] = React.useState(2);

  const minDate = today(getLocalTimeZone());
  const maxDate = today(getLocalTimeZone()).add({ months: 12 });

  const calculateNights = () => {
    if (stayDates?.start && stayDates?.end) {
      const start = stayDates.start.toDate(getLocalTimeZone());
      const end = stayDates.end.toDate(getLocalTimeZone());
      return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const nights = calculateNights();

  return (
    <Card className="p-6 max-w-[600px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Hotel Reservation
        </Heading>
        <Text color="gray" size="2">
          Select your check-in and check-out dates
        </Text>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Text weight="medium" className="mb-2">
            Stay Dates
          </Text>
          <DateRangePicker
            value={stayDates}
            onChange={setStayDates}
            minValue={minDate}
            maxValue={maxDate}
            color="blue"
            aria-label="Hotel stay dates"
          />
        </div>

        <div>
          <Text weight="medium" className="mb-2">
            Guests
          </Text>
          <Select.Root value={guests.toString()} onValueChange={(value) => setGuests(parseInt(value))}>
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Select.Item key={num} value={num.toString()}>
                  {num} Guest{num !== 1 ? 's' : ''}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      {stayDates && (
        <div className="p-4 bg-blue-2 rounded-3">
          <div className="flex items-center gap-2 mb-2">
            <Badge color="blue" variant="soft">
              {nights} nights
            </Badge>
            <Text weight="medium">Reservation Summary</Text>
          </div>
          <Text size="2">Check-in: {stayDates.start.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
          <Text size="2">Check-out: {stayDates.end.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
          <Text size="2">
            {guests} guest{guests !== 1 ? 's' : ''}
          </Text>
        </div>
      )}

      <div className="flex gap-3">
        <Button variant="soft" onClick={() => setStayDates(null)}>
          Clear
        </Button>
        <Button disabled={!stayDates} color="blue">
          Search Hotels
        </Button>
      </div>
    </Card>
  );
}
```

### Project Timeline Planning

```jsx
import { DateRangePicker } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function ProjectTimeline() {
  const [phases, setPhases] = React.useState([
    { id: 1, name: 'Planning', dates: null, color: 'blue' },
    { id: 2, name: 'Development', dates: null, color: 'green' },
    { id: 3, name: 'Testing', dates: null, color: 'orange' },
    { id: 4, name: 'Deployment', dates: null, color: 'purple' },
  ]);

  const updatePhase = (id, dates) => {
    setPhases((prev) => prev.map((phase) => (phase.id === id ? { ...phase, dates } : phase)));
  };

  const minDate = today(getLocalTimeZone());

  return (
    <div className="max-w-[700px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Project Timeline
        </Heading>
        <Text color="gray" size="2">
          Define date ranges for each project phase
        </Text>
      </div>

      <div className="space-y-4">
        {phases.map((phase) => (
          <Card key={phase.id} className="p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Badge color={phase.color} variant="soft">
                {phase.name}
              </Badge>
              <Text weight="medium">Phase {phase.id}</Text>
            </div>

            <DateRangePicker
              value={phase.dates}
              onChange={(dates) => updatePhase(phase.id, dates)}
              minValue={minDate}
              color={phase.color}
              aria-label={`${phase.name} phase dates`}
            />

            {phase.dates && (
              <div className="text-2 space-y-1">
                <Text size="2" color="gray">
                  Start: {phase.dates.start.toDate(getLocalTimeZone()).toLocaleDateString()}
                </Text>
                <Text size="2" color="gray">
                  End: {phase.dates.end.toDate(getLocalTimeZone()).toLocaleDateString()}
                </Text>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="flex gap-3">
        <Button variant="soft">Save Draft</Button>
        <Button disabled={phases.some((p) => !p.dates)}>Create Timeline</Button>
      </div>
    </div>
  );
}
```

### Vacation Request Form

```jsx
import { DateRangePicker } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function VacationRequest() {
  const [vacationDates, setVacationDates] = React.useState(null);
  const [reason, setReason] = React.useState('');

  const isWeekend = (date) => {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const getBusinessDays = () => {
    if (!vacationDates?.start || !vacationDates?.end) return 0;

    let count = 0;
    let current = vacationDates.start;
    while (current.compare(vacationDates.end) <= 0) {
      if (!isWeekend(current)) count++;
      current = current.add({ days: 1 });
    }
    return count;
  };

  const businessDays = getBusinessDays();
  const minDate = today(getLocalTimeZone()).add({ days: 14 }); // 2 weeks notice

  return (
    <Card className="p-6 max-w-[500px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Request Time Off
        </Heading>
        <Text color="gray" size="2">
          Submit your vacation request
        </Text>
      </div>

      <form className="space-y-4">
        <div>
          <Text weight="medium" className="mb-2">
            Vacation Dates *
          </Text>
          <DateRangePicker
            value={vacationDates}
            onChange={setVacationDates}
            minValue={minDate}
            color="green"
            aria-label="Vacation dates"
          />
          <Text size="1" color="gray" className="mt-1">
            Minimum 2 weeks advance notice required
          </Text>
        </div>

        <div>
          <Text weight="medium" className="mb-2">
            Reason (Optional)
          </Text>
          <TextArea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Briefly describe the reason for your time off..."
            rows={3}
          />
        </div>

        {vacationDates && (
          <div className="p-4 bg-green-2 rounded-3 space-y-2">
            <Text weight="medium">Request Summary</Text>
            <Text size="2">Business Days: {businessDays}</Text>
            <Text size="2">From: {vacationDates.start.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
            <Text size="2">To: {vacationDates.end.toDate(getLocalTimeZone()).toLocaleDateString()}</Text>
          </div>
        )}

        <div className="flex gap-3">
          <Button variant="soft">Cancel</Button>
          <Button disabled={!vacationDates} color="green">
            Submit Request
          </Button>
        </div>
      </form>
    </Card>
  );
}
```

### Different Sizes

```jsx
import { DateRangePicker } from '@frosted-ui/core';
import { CalendarDate } from '@internationalized/date';

function SizeExample() {
  const [range1, setRange1] = React.useState(null);
  const [range2, setRange2] = React.useState(null);
  const [range3, setRange3] = React.useState(null);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Size 1 (Small)</Heading>
        <DateRangePicker size="1" value={range1} onChange={setRange1} aria-label="Small date range picker" />
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 2 (Default)</Heading>
        <DateRangePicker size="2" value={range2} onChange={setRange2} aria-label="Default date range picker" />
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 3 (Large)</Heading>
        <DateRangePicker size="3" value={range3} onChange={setRange3} aria-label="Large date range picker" />
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
<div className="space-y-4">
  <div className="grid grid-cols-2 gap-4">
    <DateRangePicker value={range} onChange={setRange} />
    <Button size="2">Apply Range</Button>
  </div>
</div>
```

### Typography Integration

```jsx
<div className="space-y-2">
  <Text weight="medium" size="2">
    Date Range
  </Text>
  <DateRangePicker value={range} onChange={setRange} />
  <Text size="1" color="gray">
    Select start and end dates
  </Text>
</div>
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The DateRangePicker component includes comprehensive accessibility features:

### Keyboard Navigation

- **Tab** - Navigate between start date, end date, and calendar button
- **Enter/Space** - Open calendar popup when focused on button
- **Escape** - Close calendar popup
- **Arrow Keys** - Navigate within date fields and calendar
- **Date field shortcuts** - All DateField keyboard shortcuts apply

### Screen Reader Support

- Proper labeling of start and end date fields
- Calendar popup is announced when opened
- Range selection is clearly communicated
- Invalid states and constraints are announced

### Focus Management

- Clear focus indicators on all interactive elements
- Focus returns to trigger after calendar closes
- Logical tab order through date fields

## Advanced Usage

### International Date Range Handling

```jsx
import { DateRangePicker } from '@frosted-ui/core';
import { CalendarDate, getLocalTimeZone } from '@internationalized/date';

// **@internationalized/date** automatically handles:
// - Different calendar systems for both start and end dates
// - Locale-specific formatting across the range
// - Proper timezone calculations for range duration
// - Right-to-left text direction support

function InternationalRangeExample() {
  const [range, setRange] = React.useState(null);

  return (
    <div className="space-y-3">
      <Text weight="medium">Using @internationalized/date for proper locale support</Text>
      <DateRangePicker value={range} onChange={setRange} aria-label="International date range" />
      <Text size="2" color="gray">
        Range format automatically adapts to user's locale
      </Text>
    </div>
  );
}
```

### Working with Date Range Validation

```jsx
import { DateRangePicker } from '@frosted-ui/core';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

function ValidatedRangeExample() {
  const [range, setRange] = React.useState(null);

  const isDateUnavailable = (date) => {
    // Block weekends
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return true;

    // Block holidays
    const holidays = [
      new CalendarDate(2024, 1, 1), // New Year
      new CalendarDate(2024, 7, 4), // Independence Day
      new CalendarDate(2024, 12, 25), // Christmas
    ];
    return holidays.some((holiday) => holiday.compare(date) === 0);
  };

  return (
    <DateRangePicker
      value={range}
      onChange={setRange}
      isDateUnavailable={isDateUnavailable}
      aria-label="Business days only"
    />
  );
}
```

## Best Practices

### Range Value Management

- **Always use @internationalized/date objects** for both start and end dates
- **Validate range logic** (end date should be after start date)
- **Handle null ranges** gracefully in your application
- **Use proper comparison methods** for range validation

### User Experience

- **Provide clear labels** for start and end date purposes
- **Show range duration** or business day calculations when relevant
- **Use appropriate constraints** (min/max dates) for business logic
- **Consider timezone implications** for multi-day ranges

### Form Integration

- **Combine with validation libraries** that support complex objects
- **Provide meaningful error messages** for invalid ranges
- **Use consistent sizing** with other form components
- **Handle incomplete ranges** (only start or end date selected)

## Related Components

- **[DatePicker](../date-picker/date-picker.ai.md)** - Single date selection with calendar
- **[DateField](../date-field/date-field.ai.md)** - Date input field component
- **[Calendar](../calendar/calendar.ai.md)** - Full calendar interface
- **[RangeCalendar](../calendar/calendar.ai.md#rangecalendar)** - Calendar for range selection
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For labels and helper text
