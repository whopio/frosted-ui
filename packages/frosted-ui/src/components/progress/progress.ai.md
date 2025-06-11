# Frosted UI Progress Component

A visual indicator that shows the completion progress of a task or operation.

## Overview

The Progress component displays the progress of a task or operation through a filled bar. It supports different sizes, visual variants, colors, and accessibility features. Commonly used for loading states, file uploads, form completion, and other time-based operations. Built on Radix UI primitives with Frosted UI styling and design tokens.

## Basic Usage

```jsx
import { Progress } from '@frosted-ui/core';

function App() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} />;
}
```

## Props

### Required Props

None - all props are optional with sensible defaults.

### Optional Props

| Prop           | Type                               | Default     | Description                                       |
| -------------- | ---------------------------------- | ----------- | ------------------------------------------------- |
| `size`         | `'1' \| '2' \| '3'`                | `'3'`       | The size of the progress bar                      |
| `variant`      | `'classic' \| 'surface' \| 'soft'` | `'soft'`    | The visual style variant                          |
| `color`        | `string`                           | `undefined` | The accent color - supports all Frosted UI colors |
| `highContrast` | `boolean`                          | `false`     | Whether to use high contrast styling              |
| `value`        | `number`                           | `0`         | The current progress value                        |
| `max`          | `number`                           | `100`       | The maximum value                                 |

## Examples

### Basic Progress

```jsx
function BasicExample() {
  const [uploadProgress, setUploadProgress] = React.useState(0);

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="space-y-4 w-full max-w-[400px]">
      <div className="flex items-center justify-between">
        <Text size="2" weight="medium">
          File Upload
        </Text>
        <Text size="2" color="gray">
          {uploadProgress}%
        </Text>
      </div>
      <Progress value={uploadProgress} />
      <Button onClick={simulateUpload} size="2" className="w-full">
        Start Upload
      </Button>
    </div>
  );
}
```

### Different Sizes

```jsx
function SizesExample() {
  const progress = 65;

  return (
    <div className="space-y-6 w-full max-w-[400px]">
      <div className="space-y-2">
        <Text size="1" color="gray">
          Size 1 (Small)
        </Text>
        <Progress size="1" value={progress} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Size 2 (Medium)
        </Text>
        <Progress size="2" value={progress} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Size 3 (Large - Default)
        </Text>
        <Progress size="3" value={progress} />
      </div>
    </div>
  );
}
```

### Style Variants

```jsx
function VariantsExample() {
  const progress = 45;

  return (
    <div className="space-y-4 w-full max-w-[400px]">
      <div className="space-y-2">
        <Text size="2" color="gray">
          Soft (Default)
        </Text>
        <Progress variant="soft" value={progress} color="blue" />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Surface
        </Text>
        <Progress variant="surface" value={progress} color="blue" />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Classic
        </Text>
        <Progress variant="classic" value={progress} color="blue" />
      </div>
    </div>
  );
}
```

### Color Variants

```jsx
function ColorExample() {
  return (
    <div className="space-y-4 w-full max-w-[400px]">
      <div className="space-y-2">
        <Text size="2" color="blue">
          Blue
        </Text>
        <Progress color="blue" value={30} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="green">
          Green (Success)
        </Text>
        <Progress color="green" value={80} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="orange">
          Orange (Warning)
        </Text>
        <Progress color="orange" value={60} />
      </div>

      <div className="space-y-2">
        <Text size="2" color="red">
          Red (Error)
        </Text>
        <Progress color="red" value={25} />
      </div>
    </div>
  );
}
```

### High Contrast

```jsx
function HighContrastExample() {
  return (
    <div className="space-y-4 w-full max-w-[400px]">
      <div className="space-y-2">
        <Text size="2" color="gray">
          Normal Contrast
        </Text>
        <Progress value={70} color="blue" />
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          High Contrast
        </Text>
        <Progress value={70} color="blue" highContrast />
      </div>
    </div>
  );
}
```

### Loading States

```jsx
function LoadingExample() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const startProcess = async () => {
    setIsLoading(true);
    setProgress(0);

    // Simulate a process with progress updates
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setProgress(i);
    }

    setIsLoading(false);
  };

  return (
    <div className="space-y-4 w-full max-w-[400px]">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Text size="2" weight="medium">
            Processing Data
          </Text>
          {isLoading && <Spinner size="1" />}
        </div>

        <Progress value={progress} color={progress === 100 ? 'green' : 'blue'} />

        <Text size="1" color="gray">
          {isLoading ? `Processing... ${progress}%` : progress === 100 ? 'Complete!' : 'Ready to start'}
        </Text>
      </div>

      <Button onClick={startProcess} disabled={isLoading} className="w-full">
        {isLoading ? 'Processing...' : 'Start Process'}
      </Button>
    </div>
  );
}
```

### Multi-Step Progress

```jsx
function MultiStepExample() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const steps = ['Account Details', 'Personal Information', 'Preferences', 'Confirmation'];

  return (
    <div className="space-y-6 w-full max-w-[500px]">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Text size="3" weight="medium">
            Setup Progress
          </Text>
          <Text size="2" color="gray">
            Step {currentStep} of {totalSteps}
          </Text>
        </div>

        <Progress value={progress} color="blue" />

        <Text size="2" color="gray">
          {steps[currentStep - 1]}
        </Text>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          Previous
        </Button>

        <Button
          onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
          disabled={currentStep === totalSteps}
          className="flex-1"
        >
          {currentStep === totalSteps ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
```

### Progress with Status

```jsx
function StatusExample() {
  const tasks = [
    { name: 'Database Setup', progress: 100, status: 'complete' },
    { name: 'API Configuration', progress: 75, status: 'in-progress' },
    { name: 'Frontend Build', progress: 30, status: 'in-progress' },
    { name: 'Testing', progress: 0, status: 'pending' }
  ];

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'complete': return 'green';
      case 'in-progress': return 'blue';
      case 'pending': return 'gray';
      default: return 'gray';
    }
  };

  return (
    <div className="space-y-4 w-full max-w-[500px]">
      <Heading size="3">Deployment Progress</Heading>

      {tasks.map((task, index) => (
        <div key={task.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <Text size="2" weight="medium">{task.name}</Text>
            <div className="flex items-center gap-2">
              <Text size="1" color="gray">{task.progress}%</Text>
              <Badge
                variant="soft"
                color={getProgressColor(task.status)}
                size="1"
              >
                {task.status}
              </Badge>
            </div>
          </div>
          <Progress
            value={task.progress}
            color={getProgressColor(task.status)}
            size="2"
          />
        </div>
      ))}
    </div>
  );
}
```

### Animated Progress

```jsx
function AnimatedExample() {
  const [progress, setProgress] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const animateProgress = () => {
    setIsAnimating(true);
    setProgress(0);

    const targetProgress = Math.floor(Math.random() * 100) + 1;
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 fps
    const increment = targetProgress / steps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= targetProgress) {
        setProgress(targetProgress);
        setIsAnimating(false);
        clearInterval(interval);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, duration / steps);
  };

  return (
    <div className="space-y-4 w-full max-w-[400px]">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Text size="2" weight="medium">
            Animated Progress
          </Text>
          <Text size="2" color="gray">
            {Math.floor(progress)}%
          </Text>
        </div>

        <Progress value={progress} color="purple" style={{ transition: 'all 0.1s ease-in-out' }} />
      </div>

      <Button onClick={animateProgress} disabled={isAnimating} className="w-full">
        {isAnimating ? 'Animating...' : 'Animate Progress'}
      </Button>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
function IntegrationExample() {
  return (
    <div className="w-full max-w-[600px] space-y-6">
      {/* Using Frosted UI spacing tokens */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Heading size="3" weight="medium">
            Project Status
          </Heading>
          <Badge variant="soft" color="blue">
            Active
          </Badge>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Text size="2" color="gray">
                Overall Progress
              </Text>
              <Text size="2" weight="medium">
                68%
              </Text>
            </div>
            <Progress value={68} color="blue" />
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Text size="1" color="gray">
                Design
              </Text>
              <Progress value={100} color="green" size="2" />
            </div>
            <div className="space-y-2">
              <Text size="1" color="gray">
                Development
              </Text>
              <Progress value={45} color="blue" size="2" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors including `danger`, `warning`, `success`, and `info`. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The Progress component includes comprehensive accessibility features:

- **ARIA Labels**: Proper `progressbar` role and value communication
- **Screen Reader Support**: Current value and max value are announced
- **Keyboard Navigation**: Focusable when interactive
- **Value Updates**: Progress changes are announced to assistive technology
- **Label Association**: Supports label association for context

### Accessibility Guidelines

```jsx
// Good: Descriptive labeling
<div className="space-y-2">
  <Text size="2" id="upload-label" weight="medium">
    File Upload Progress
  </Text>
  <Progress
    value={45}
    aria-labelledby="upload-label"
    aria-describedby="upload-description"
  />
  <Text size="1" id="upload-description" color="gray">
    Uploading document.pdf (45% complete)
  </Text>
</div>

// Good: Status communication
<Progress
  value={progress}
  aria-label={`Download progress: ${progress}% complete`}
  color={progress === 100 ? 'green' : 'blue'}
/>
```

## Advanced Usage

### Custom Progress Indicators

```jsx
function CustomIndicatorExample() {
  const [progress, setProgress] = React.useState(35);

  const getProgressStatus = (value: number) => {
    if (value === 0) return { label: 'Not Started', color: 'gray' };
    if (value < 50) return { label: 'In Progress', color: 'blue' };
    if (value < 100) return { label: 'Almost Done', color: 'orange' };
    return { label: 'Complete', color: 'green' };
  };

  const status = getProgressStatus(progress);

  return (
    <div className="space-y-4 w-full max-w-[400px]">
      <div className="flex items-center justify-between">
        <Text size="2" weight="medium">Task Progress</Text>
        <Badge variant="soft" color={status.color}>
          {status.label}
        </Badge>
      </div>

      <Progress value={progress} color={status.color} />

      <div className="flex justify-between text-1 text-gray-10">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>

      <div className="flex gap-2">
        <Button
          size="1"
          variant="outline"
          onClick={() => setProgress(Math.max(0, progress - 10))}
        >
          -10%
        </Button>
        <Button
          size="1"
          variant="outline"
          onClick={() => setProgress(Math.min(100, progress + 10))}
        >
          +10%
        </Button>
      </div>
    </div>
  );
}
```

### Progress with Time Estimates

```jsx
function TimeEstimateExample() {
  const [progress, setProgress] = React.useState(30);
  const [startTime] = React.useState(Date.now());

  const getTimeEstimate = (currentProgress: number) => {
    if (currentProgress === 0) return 'Calculating...';

    const elapsed = Date.now() - startTime;
    const rate = currentProgress / elapsed;
    const remaining = (100 - currentProgress) / rate;

    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    if (minutes > 0) {
      return `${minutes}m ${seconds}s remaining`;
    }
    return `${seconds}s remaining`;
  };

  return (
    <div className="space-y-3 w-full max-w-[400px]">
      <div className="flex items-center justify-between">
        <Text size="2" weight="medium">Processing</Text>
        <Text size="2" color="gray">{progress}%</Text>
      </div>

      <Progress value={progress} color="blue" />

      <Text size="1" color="gray">
        {progress === 100 ? 'Complete!' : getTimeEstimate(progress)}
      </Text>
    </div>
  );
}
```

### Segmented Progress

```jsx
function SegmentedExample() {
  const segments = [
    { label: 'Planning', progress: 100, color: 'green' },
    { label: 'Design', progress: 80, color: 'blue' },
    { label: 'Development', progress: 40, color: 'orange' },
    { label: 'Testing', progress: 0, color: 'gray' },
  ];

  const totalProgress = segments.reduce((sum, seg) => sum + seg.progress, 0) / segments.length;

  return (
    <div className="space-y-4 w-full max-w-[500px]">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Text size="3" weight="medium">
            Project Progress
          </Text>
          <Text size="2" color="gray">
            {Math.round(totalProgress)}% Complete
          </Text>
        </div>
        <Progress value={totalProgress} color="blue" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {segments.map((segment) => (
          <div key={segment.label} className="space-y-1">
            <div className="flex items-center justify-between">
              <Text size="1" weight="medium">
                {segment.label}
              </Text>
              <Text size="1" color="gray">
                {segment.progress}%
              </Text>
            </div>
            <Progress value={segment.progress} color={segment.color} size="1" />
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Best Practices

### Do's

- Provide clear labels indicating what's being measured
- Show percentage or descriptive status text
- Use appropriate colors that match the context (green for success, red for errors)
- Include time estimates when possible for long operations
- Make progress updates smooth and frequent enough to feel responsive

### Don'ts

- Don't use progress bars for indefinite operations (use spinner instead)
- Avoid progress bars that go backwards unexpectedly
- Don't use progress bars without context or labels
- Avoid using progress bars for very quick operations (< 1 second)
- Don't make progress bars too small to see clearly

### Progress Communication

```jsx
// Good: Clear context and status
<div className="space-y-2">
  <div className="flex justify-between">
    <Text weight="medium">Uploading photos</Text>
    <Text color="gray">3 of 10 files</Text>
  </div>
  <Progress value={30} color="blue" />
  <Text size="1" color="gray">
    Uploading photo-003.jpg (30% complete)
  </Text>
</div>

// Good: Semantic colors
<Progress
  value={85}
  color={progress < 50 ? 'orange' : progress < 100 ? 'blue' : 'green'}
/>

// Avoid: Progress without context
<Progress value={42} />
```

## Related Components

- **[Spinner](../spinner/spinner.ai.md)** - For indefinite loading states
- **[Text](../text/text.ai.md)** - For progress labels and status text
- **[Badge](../badge/badge.ai.md)** - For status indicators alongside progress
- **[Card](../card/card.ai.md)** - For containing progress information
- **[Button](../button/button.ai.md)** - For controls that trigger progress operations
