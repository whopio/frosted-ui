# Frosted UI Slider Component

An input control that allows users to select a single value or range of values by dragging along a track.

## Overview

The Slider component provides an intuitive way for users to select numeric values within a defined range. It supports both single-value and range selection, with customizable appearance through size, color, and variant options. Built on Radix UI primitives with Frosted UI styling and design tokens.

## Basic Usage

```jsx
import { Slider } from '@frosted-ui/core';

function App() {
  const [value, setValue] = React.useState([50]);

  return <Slider value={value} onValueChange={setValue} min={0} max={100} step={1} />;
}
```

## Props

### Required Props

None - all props are optional with sensible defaults.

### Optional Props

| Prop            | Type                               | Default        | Description                                       |
| --------------- | ---------------------------------- | -------------- | ------------------------------------------------- |
| `size`          | `'1' \| '2' \| '3'`                | `'2'`          | The size of the slider                            |
| `variant`       | `'classic' \| 'surface' \| 'soft'` | `'surface'`    | The visual style variant                          |
| `color`         | `string`                           | `'gray'`       | The accent color - supports all Frosted UI colors |
| `highContrast`  | `boolean`                          | `false`        | Whether to use high contrast styling              |
| `value`         | `number[]`                         | `undefined`    | The controlled value(s) of the slider             |
| `defaultValue`  | `number[]`                         | `[0]`          | The default value(s) when uncontrolled            |
| `onValueChange` | `(value: number[]) => void`        | `undefined`    | Callback fired when the value changes             |
| `min`           | `number`                           | `0`            | The minimum value                                 |
| `max`           | `number`                           | `100`          | The maximum value                                 |
| `step`          | `number`                           | `1`            | The stepping interval                             |
| `orientation`   | `'horizontal' \| 'vertical'`       | `'horizontal'` | The orientation of the slider                     |
| `disabled`      | `boolean`                          | `false`        | Whether the slider is disabled                    |
| `inverted`      | `boolean`                          | `false`        | Whether to invert the slider visually             |
| `name`          | `string`                           | `undefined`    | The name of the slider for form submission        |

## Examples

### Basic Slider

```jsx
function BasicExample() {
  const [volume, setVolume] = React.useState([50]);

  return (
    <div className="space-y-4 w-full max-w-[300px]">
      <div className="flex items-center justify-between">
        <Text size="2" weight="medium">
          Volume
        </Text>
        <Text size="2" color="gray">
          {volume[0]}%
        </Text>
      </div>
      <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
    </div>
  );
}
```

### Range Slider

```jsx
function RangeExample() {
  const [priceRange, setPriceRange] = React.useState([20, 80]);

  return (
    <div className="space-y-4 w-full max-w-[300px]">
      <div className="flex items-center justify-between">
        <Text size="2" weight="medium">
          Price Range
        </Text>
        <Text size="2" color="gray">
          ${priceRange[0]} - ${priceRange[1]}
        </Text>
      </div>
      <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={100} step={5} />
    </div>
  );
}
```

### Different Sizes

```jsx
function SizesExample() {
  return (
    <div className="space-y-6 w-full max-w-[300px]">
      <div className="space-y-2">
        <Text size="1" color="gray">
          Size 1 (Small)
        </Text>
        <Slider size="1" defaultValue={[25]} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Size 2 (Default)
        </Text>
        <Slider size="2" defaultValue={[50]} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Size 3 (Large)
        </Text>
        <Slider size="3" defaultValue={[75]} />
      </div>
    </div>
  );
}
```

### Color Variants

```jsx
function ColorExample() {
  return (
    <div className="space-y-4 w-full max-w-[300px]">
      <div className="space-y-2">
        <Text size="2" color="gray">
          Blue
        </Text>
        <Slider color="blue" defaultValue={[30]} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Green
        </Text>
        <Slider color="green" defaultValue={[50]} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Red
        </Text>
        <Slider color="red" defaultValue={[70]} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Orange
        </Text>
        <Slider color="orange" defaultValue={[90]} />
      </div>
    </div>
  );
}
```

### Style Variants

```jsx
function VariantsExample() {
  return (
    <div className="space-y-4 w-full max-w-[300px]">
      <div className="space-y-2">
        <Text size="2" color="gray">
          Surface (Default)
        </Text>
        <Slider variant="surface" defaultValue={[33]} color="blue" />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Classic
        </Text>
        <Slider variant="classic" defaultValue={[66]} color="blue" />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Soft
        </Text>
        <Slider variant="soft" defaultValue={[90]} color="blue" />
      </div>
    </div>
  );
}
```

### High Contrast

```jsx
function HighContrastExample() {
  return (
    <div className="space-y-4 w-full max-w-[300px]">
      <div className="space-y-2">
        <Text size="2" color="gray">
          Normal
        </Text>
        <Slider defaultValue={[40]} color="blue" />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          High Contrast
        </Text>
        <Slider defaultValue={[60]} color="blue" highContrast />
      </div>
    </div>
  );
}
```

### Disabled State

```jsx
function DisabledExample() {
  return (
    <div className="space-y-4 w-full max-w-[300px]">
      <div className="space-y-2">
        <Text size="2" color="gray">
          Enabled
        </Text>
        <Slider defaultValue={[45]} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Disabled
        </Text>
        <Slider defaultValue={[75]} disabled />
      </div>
    </div>
  );
}
```

### Custom Steps

```jsx
function StepsExample() {
  const [temperature, setTemperature] = React.useState([20]);

  return (
    <div className="space-y-4 w-full max-w-[300px]">
      <div className="flex items-center justify-between">
        <Text size="2" weight="medium">
          Temperature
        </Text>
        <Text size="2" color="gray">
          {temperature[0]}°C
        </Text>
      </div>
      <Slider value={temperature} onValueChange={setTemperature} min={10} max={30} step={0.5} color="orange" />
      <div className="flex justify-between text-1 text-gray-10">
        <span>10°C</span>
        <span>20°C</span>
        <span>30°C</span>
      </div>
    </div>
  );
}
```

### Form Integration

```jsx
function FormExample() {
  const [settings, setSettings] = React.useState({
    brightness: [75],
    contrast: [50],
    saturation: [60],
  });

  return (
    <form className="space-y-6 w-full max-w-[400px]">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Text size="2" weight="medium">
            Brightness
          </Text>
          <Text size="2" color="gray">
            {settings.brightness[0]}%
          </Text>
        </div>
        <Slider
          name="brightness"
          value={settings.brightness}
          onValueChange={(value) => setSettings((prev) => ({ ...prev, brightness: value }))}
          color="yellow"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Text size="2" weight="medium">
            Contrast
          </Text>
          <Text size="2" color="gray">
            {settings.contrast[0]}%
          </Text>
        </div>
        <Slider
          name="contrast"
          value={settings.contrast}
          onValueChange={(value) => setSettings((prev) => ({ ...prev, contrast: value }))}
          color="blue"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Text size="2" weight="medium">
            Saturation
          </Text>
          <Text size="2" color="gray">
            {settings.saturation[0]}%
          </Text>
        </div>
        <Slider
          name="saturation"
          value={settings.saturation}
          onValueChange={(value) => setSettings((prev) => ({ ...prev, saturation: value }))}
          color="purple"
        />
      </div>

      <Button type="submit" className="w-full">
        Apply Settings
      </Button>
    </form>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
function IntegrationExample() {
  return (
    <div className="w-full max-w-[500px] space-y-6">
      {/* Using Frosted UI spacing tokens */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Heading size="3" weight="medium">
            Audio Settings
          </Heading>
          <Badge variant="soft" color="blue">
            Pro
          </Badge>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Text size="2" color="gray">
              Master Volume
            </Text>
            <Slider defaultValue={[80]} color="blue" />
          </div>

          <div className="space-y-2">
            <Text size="2" color="gray">
              Bass
            </Text>
            <Slider defaultValue={[30]} color="green" />
          </div>

          <div className="space-y-2">
            <Text size="2" color="gray">
              Treble
            </Text>
            <Slider defaultValue={[60]} color="orange" />
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors including `danger`, `warning`, `success`, and `info`. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The Slider component includes comprehensive accessibility features:

- **Keyboard Navigation**: Arrow keys adjust values, Home/End go to min/max
- **Screen Reader Support**: Proper ARIA labels and value announcements
- **Focus Management**: Clear focus indicators and proper tab navigation
- **Value Communication**: Current values are announced to screen readers
- **Range Support**: Multiple thumbs for range selection with proper labeling

### Accessibility Guidelines

```jsx
// Good: Descriptive labeling
<div className="space-y-2">
  <label htmlFor="volume-slider">
    <Text size="2" weight="medium">Volume Level</Text>
  </label>
  <Slider
    id="volume-slider"
    aria-label="Adjust volume level"
    defaultValue={[50]}
    min={0}
    max={100}
  />
</div>

// Good: Range with clear labels
<div className="space-y-2">
  <Text size="2" weight="medium">Price Range ($10 - $100)</Text>
  <Slider
    aria-label="Select price range"
    defaultValue={[20, 80]}
    min={10}
    max={100}
  />
</div>
```

## Advanced Usage

### Vertical Orientation

```jsx
function VerticalExample() {
  const [value, setValue] = React.useState([60]);

  return (
    <div className="flex items-center gap-4 h-[200px]">
      <Text size="2" weight="medium" className="writing-mode-vertical">
        Level
      </Text>
      <Slider orientation="vertical" value={value} onValueChange={setValue} className="h-full" />
      <Text size="2" color="gray">
        {value[0]}%
      </Text>
    </div>
  );
}
```

### Multiple Range Sliders

```jsx
function MultiRangeExample() {
  const [timeSlots, setTimeSlots] = React.useState([
    [9, 12], // Morning
    [14, 17], // Afternoon
    [19, 22], // Evening
  ]);

  return (
    <div className="space-y-6 w-full max-w-[400px]">
      <Heading size="3">Available Time Slots</Heading>

      {[
        { label: 'Morning', color: 'yellow', index: 0 },
        { label: 'Afternoon', color: 'blue', index: 1 },
        { label: 'Evening', color: 'purple', index: 2 },
      ].map(({ label, color, index }) => (
        <div key={label} className="space-y-2">
          <div className="flex items-center justify-between">
            <Text size="2" weight="medium">
              {label}
            </Text>
            <Text size="2" color="gray">
              {timeSlots[index][0]}:00 - {timeSlots[index][1]}:00
            </Text>
          </div>
          <Slider
            value={timeSlots[index]}
            onValueChange={(value) => {
              const newSlots = [...timeSlots];
              newSlots[index] = value;
              setTimeSlots(newSlots);
            }}
            min={6}
            max={24}
            step={1}
            color={color}
          />
        </div>
      ))}
    </div>
  );
}
```

### Custom Markers

```jsx
function MarkedSliderExample() {
  const [rating, setRating] = React.useState([7]);
  const marks = [
    { value: 0, label: 'Poor' },
    { value: 5, label: 'Fair' },
    { value: 10, label: 'Excellent' },
  ];

  return (
    <div className="space-y-4 w-full max-w-[400px]">
      <div className="flex items-center justify-between">
        <Text size="2" weight="medium">
          Rating
        </Text>
        <Badge variant="soft" color="blue">
          {rating[0]}/10
        </Badge>
      </div>

      <div className="space-y-2">
        <Slider value={rating} onValueChange={setRating} min={0} max={10} step={1} color="blue" />

        <div className="flex justify-between">
          {marks.map((mark) => (
            <div key={mark.value} className="flex flex-col items-center">
              <div className="w-1 h-2 bg-gray-6"></div>
              <Text size="1" color="gray" className="mt-1">
                {mark.label}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## Best Practices

### Do's

- Provide clear labels and current value indicators
- Use appropriate step sizes for the data type
- Include min/max value indicators when helpful
- Use semantic colors that match the content (e.g., red for danger levels)
- Provide keyboard navigation support

### Don'ts

- Don't use sliders for discrete choices (use radio buttons instead)
- Avoid too many precise decimal places
- Don't make the slider track too narrow for touch interaction
- Avoid using sliders when exact values are critical
- Don't nest sliders or place them in constrained spaces

### Value Communication

```jsx
// Good: Clear value display
<div className="space-y-2">
  <div className="flex justify-between">
    <Text weight="medium">Volume</Text>
    <Text color="gray">{value}%</Text>
  </div>
  <Slider value={[value]} onValueChange={setValue} />
</div>

// Good: Range with formatted values
<div className="space-y-2">
  <Text weight="medium">
    Budget: ${range[0]} - ${range[1]}
  </Text>
  <Slider value={range} onValueChange={setRange} />
</div>
```

## Related Components

- **[Text](../text/text.ai.md)** - For labels and value displays with sliders
- **[Badge](../badge/badge.ai.md)** - For displaying current values or status
- **[Button](../button/button.ai.md)** - For actions related to slider settings
- **[Card](../card/card.ai.md)** - For grouping related sliders and controls
- **[Heading](../heading/heading.ai.md)** - For section headers in slider groups
