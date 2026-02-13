# Frosted UI CircularProgress Component

A circular progress indicator component for showing completion status or loading states. Built on Radix UI Progress for accessibility and semantic markup while providing a circular visual representation.

## Overview

The CircularProgress component displays progress as a circular indicator, perfect for showing completion percentages, loading states, or progress tracking. It supports:

- **Determinate progress** with specific percentage values
- **Indeterminate loading** states
- **Multiple sizes** for different interface contexts
- **Color customization** to match your design system
- **High contrast modes** for accessibility

## Basic Usage

```jsx
import { CircularProgress } from '@frosted-ui/core';

function ProgressExample() {
  const [progress, setProgress] = React.useState(65);

  return (
    <div className="flex items-center gap-4">
      <CircularProgress value={progress} max={100} />
      <div>
        <Text weight="medium">{progress}% Complete</Text>
        <Text size="2" color="gray">
          Upload in progress...
        </Text>
      </div>
    </div>
  );
}
```

## Props

| Prop           | Type                                                          | Default     | Description                                       |
| -------------- | ------------------------------------------------------------- | ----------- | ------------------------------------------------- |
| `value`        | `number`                                                      | `0`         | The current progress value                        |
| `max`          | `number`                                                      | `100`       | The maximum value for progress calculation        |
| `size`         | `'1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'` | `'3'`       | The size of the circular progress indicator       |
| `color`        | `string`                                                      | `undefined` | The accent color - supports all Frosted UI colors |
| `highContrast` | `boolean`                                                     | `false`     | Whether to use high contrast styling              |

## Examples

### File Upload Progress

```jsx
import { CircularProgress } from '@frosted-ui/core';

function FileUpload() {
  const [uploads, setUploads] = React.useState([
    { id: 1, name: 'document.pdf', progress: 100, status: 'complete' },
    { id: 2, name: 'image.jpg', progress: 75, status: 'uploading' },
    { id: 3, name: 'video.mp4', progress: 23, status: 'uploading' },
    { id: 4, name: 'presentation.pptx', progress: 0, status: 'pending' },
  ]);

  const getStatusColor = (status, progress) => {
    if (status === 'complete') return 'green';
    if (status === 'uploading' && progress > 50) return 'blue';
    if (status === 'uploading') return 'orange';
    return 'gray';
  };

  const getStatusText = (status, progress) => {
    if (status === 'complete') return 'Complete';
    if (status === 'uploading') return `${progress}% uploaded`;
    return 'Pending';
  };

  return (
    <Card className="p-6 max-w-[500px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          File Uploads
        </Heading>
        <Text color="gray" size="2">
          Track your upload progress
        </Text>
      </div>

      <div className="space-y-4">
        {uploads.map((upload) => (
          <div key={upload.id} className="flex items-center gap-4 p-3 border border-gray-6 rounded-3">
            <CircularProgress
              value={upload.progress}
              max={100}
              size="4"
              color={getStatusColor(upload.status, upload.progress)}
            />

            <div className="flex-1 min-w-0">
              <Text weight="medium" className="truncate">
                {upload.name}
              </Text>
              <Text size="2" color="gray">
                {getStatusText(upload.status, upload.progress)}
              </Text>
            </div>

            {upload.status === 'uploading' && (
              <Button size="1" variant="soft" color="red">
                Cancel
              </Button>
            )}

            {upload.status === 'complete' && (
              <div className="text-green-11">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <Button className="w-full">Upload More Files</Button>
    </Card>
  );
}
```

### Dashboard Metrics

```jsx
import { CircularProgress } from '@frosted-ui/core';

function MetricsDashboard() {
  const metrics = [
    {
      title: 'Goal Completion',
      value: 85,
      max: 100,
      color: 'green',
      subtitle: '17 of 20 goals',
      trend: '+12% from last month',
    },
    {
      title: 'Storage Used',
      value: 67,
      max: 100,
      color: 'blue',
      subtitle: '6.7 GB of 10 GB',
      trend: '+2.3 GB this month',
    },
    {
      title: 'Team Activity',
      value: 92,
      max: 100,
      color: 'purple',
      subtitle: '23 of 25 members',
      trend: '+3 members active',
    },
    {
      title: 'Project Progress',
      value: 45,
      max: 100,
      color: 'orange',
      subtitle: '9 of 20 tasks',
      trend: '3 tasks completed today',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 max-w-[800px]">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6 text-center space-y-4">
          <div className="flex justify-center">
            <CircularProgress value={metric.value} max={metric.max} size="6" color={metric.color} />
          </div>

          <div className="space-y-2">
            <div>
              <Text weight="bold" size="5">
                {metric.value}%
              </Text>
              <Text weight="medium" size="3" className="block">
                {metric.title}
              </Text>
            </div>

            <Text size="2" color="gray">
              {metric.subtitle}
            </Text>

            <div className="flex items-center justify-center gap-1">
              <div className="w-1 h-1 bg-green-9 rounded-full"></div>
              <Text size="1" color="green">
                {metric.trend}
              </Text>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

### Skill Assessment

```jsx
import { CircularProgress } from '@frosted-ui/core';

function SkillAssessment() {
  const skills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Languages' },
    { name: 'Node.js', level: 70, category: 'Backend' },
    { name: 'Design Systems', level: 80, category: 'Design' },
    { name: 'Testing', level: 65, category: 'Quality' },
    { name: 'DevOps', level: 45, category: 'Operations' },
  ];

  const getSkillColor = (level) => {
    if (level >= 80) return 'green';
    if (level >= 60) return 'blue';
    if (level >= 40) return 'orange';
    return 'red';
  };

  const getSkillLabel = (level) => {
    if (level >= 80) return 'Expert';
    if (level >= 60) return 'Proficient';
    if (level >= 40) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <Card className="p-6 max-w-[600px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Skill Assessment
        </Heading>
        <Text color="gray" size="2">
          Your current skill levels and expertise
        </Text>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-4">
            <CircularProgress value={skill.level} max={100} size="5" color={getSkillColor(skill.level)} />

            <div className="flex-1">
              <Text weight="medium">{skill.name}</Text>
              <Text size="2" color="gray">
                {skill.category}
              </Text>
              <div className="flex items-center gap-2 mt-1">
                <Text size="1" weight="medium">
                  {skill.level}%
                </Text>
                <Badge size="1" variant="soft" color={getSkillColor(skill.level)}>
                  {getSkillLabel(skill.level)}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3">
        <Button variant="soft">Update Skills</Button>
        <Button>Take Assessment</Button>
      </div>
    </Card>
  );
}
```

### Loading States

```jsx
import { CircularProgress } from '@frosted-ui/core';

function LoadingStates() {
  const [loadingStates, setLoadingStates] = React.useState({
    data: { progress: 0, isLoading: false },
    sync: { progress: 0, isLoading: false },
    backup: { progress: 0, isLoading: false },
  });

  const startProcess = (process) => {
    setLoadingStates((prev) => ({
      ...prev,
      [process]: { progress: 0, isLoading: true },
    }));

    // Simulate progress
    const interval = setInterval(() => {
      setLoadingStates((prev) => {
        const currentProgress = prev[process].progress;
        const newProgress = Math.min(currentProgress + Math.random() * 20, 100);

        if (newProgress >= 100) {
          clearInterval(interval);
          return {
            ...prev,
            [process]: { progress: 100, isLoading: false },
          };
        }

        return {
          ...prev,
          [process]: { ...prev[process], progress: newProgress },
        };
      });
    }, 500);
  };

  const processes = [
    {
      key: 'data',
      title: 'Data Processing',
      description: 'Processing user data and analytics',
      color: 'blue',
    },
    {
      key: 'sync',
      title: 'Cloud Sync',
      description: 'Syncing files to cloud storage',
      color: 'green',
    },
    {
      key: 'backup',
      title: 'System Backup',
      description: 'Creating system backup snapshot',
      color: 'purple',
    },
  ];

  return (
    <div className="max-w-[500px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          System Operations
        </Heading>
        <Text color="gray" size="2">
          Monitor and control system processes
        </Text>
      </div>

      <div className="space-y-4">
        {processes.map((process) => {
          const state = loadingStates[process.key];
          const isComplete = state.progress >= 100 && !state.isLoading;

          return (
            <Card key={process.key} className="p-4">
              <div className="flex items-center gap-4">
                <CircularProgress
                  value={state.progress}
                  max={100}
                  size="4"
                  color={isComplete ? 'green' : process.color}
                />

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Text weight="medium">{process.title}</Text>
                    {state.isLoading && (
                      <Badge size="1" color={process.color}>
                        Loading
                      </Badge>
                    )}
                    {isComplete && (
                      <Badge size="1" color="green">
                        Complete
                      </Badge>
                    )}
                  </div>
                  <Text size="2" color="gray">
                    {process.description}
                  </Text>
                  {state.isLoading || isComplete ? (
                    <Text size="1" color="gray" className="mt-1">
                      {Math.round(state.progress)}% complete
                    </Text>
                  ) : null}
                </div>

                <Button size="2" variant="soft" onClick={() => startProcess(process.key)} disabled={state.isLoading}>
                  {state.isLoading ? 'Running...' : isComplete ? 'Restart' : 'Start'}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
```

### Different Sizes

```jsx
import { CircularProgress } from '@frosted-ui/core';

function SizeExample() {
  const progress = 75;
  const sizes = [
    { size: '1', label: 'Size 1 (Tiny)' },
    { size: '2', label: 'Size 2 (Small)' },
    { size: '3', label: 'Size 3 (Default)' },
    { size: '4', label: 'Size 4 (Medium)' },
    { size: '5', label: 'Size 5 (Large)' },
    { size: '6', label: 'Size 6 (XL)' },
    { size: '7', label: 'Size 7 (XXL)' },
    { size: '8', label: 'Size 8 (XXXL)' },
    { size: '9', label: 'Size 9 (Huge)' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          CircularProgress Sizes
        </Heading>
        <Text color="gray" size="2">
          All sizes showing {progress}% progress
        </Text>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {sizes.map(({ size, label }) => (
          <div key={size} className="text-center space-y-3">
            <div className="flex justify-center">
              <CircularProgress value={progress} max={100} size={size} color="blue" />
            </div>
            <div>
              <Text weight="medium" size="2">
                {label}
              </Text>
              <Text size="1" color="gray">
                75%
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Color Variations

```jsx
import { CircularProgress } from '@frosted-ui/core';

function ColorExample() {
  const colors = [
    { color: 'blue', label: 'Blue', value: 85 },
    { color: 'green', label: 'Green', value: 92 },
    { color: 'red', label: 'Red', value: 34 },
    { color: 'orange', label: 'Orange', value: 67 },
    { color: 'purple', label: 'Purple', value: 78 },
    { color: 'gray', label: 'Gray', value: 45 },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Normal Contrast</Heading>
        <div className="flex flex-wrap gap-6">
          {colors.map(({ color, label, value }) => (
            <div key={`normal-${color}`} className="text-center space-y-2">
              <CircularProgress value={value} max={100} size="5" color={color} />
              <div>
                <Text weight="medium" size="2">
                  {label}
                </Text>
                <Text size="1" color="gray">
                  {value}%
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Heading size="3">High Contrast</Heading>
        <div className="flex flex-wrap gap-6">
          {colors.map(({ color, label, value }) => (
            <div key={`high-${color}`} className="text-center space-y-2">
              <CircularProgress value={value} max={100} size="5" color={color} highContrast />
              <div>
                <Text weight="medium" size="2">
                  {label}
                </Text>
                <Text size="1" color="gray">
                  {value}%
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
<div className="flex items-center gap-4">
  <CircularProgress value={progress} size="4" color="blue" />
  <div className="space-y-1">
    <Text weight="medium">Loading...</Text>
    <Text size="2" color="gray">
      {progress}% complete
    </Text>
  </div>
</div>
```

### Typography Integration

```jsx
<div className="text-center space-y-3">
  <CircularProgress value={85} size="6" color="green" />
  <div>
    <Heading size="4">85% Complete</Heading>
    <Text color="gray">Almost there!</Text>
  </div>
</div>
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The CircularProgress component includes comprehensive accessibility features:

### Screen Reader Support

- Uses proper `progressbar` role
- Provides `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes
- Announces progress changes to assistive technology
- Supports `aria-label` and `aria-describedby` for additional context

### Visual Accessibility

- High contrast mode for better visibility
- Sufficient color contrast ratios
- Clear visual progress indication
- Scalable sizes for different viewing needs

### Focus Management

- Not focusable by default (as it's informational)
- Can be made focusable when interactive
- Proper focus indicators when needed

## Advanced Usage

### Animated Progress Updates

```jsx
import { CircularProgress } from '@frosted-ui/core';

function AnimatedProgress() {
  const [progress, setProgress] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const animateProgress = (targetValue) => {
    setIsAnimating(true);
    const startValue = progress;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progressRatio, 3);
      const currentValue = startValue + (targetValue - startValue) * easeOutCubic;

      setProgress(Math.round(currentValue));

      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <Card className="p-6 text-center space-y-6">
      <div>
        <CircularProgress value={progress} max={100} size="6" color="blue" />
      </div>

      <div>
        <Text size="5" weight="bold">
          {progress}%
        </Text>
        <Text size="2" color="gray" className="block">
          {isAnimating ? 'Updating...' : 'Progress'}
        </Text>
      </div>

      <div className="flex justify-center gap-2">
        <Button size="2" onClick={() => animateProgress(25)} disabled={isAnimating}>
          25%
        </Button>
        <Button size="2" onClick={() => animateProgress(50)} disabled={isAnimating}>
          50%
        </Button>
        <Button size="2" onClick={() => animateProgress(75)} disabled={isAnimating}>
          75%
        </Button>
        <Button size="2" onClick={() => animateProgress(100)} disabled={isAnimating}>
          100%
        </Button>
      </div>
    </Card>
  );
}
```

### Progress with Custom Labels

```jsx
import { CircularProgress } from '@frosted-ui/core';

function CustomLabelProgress({ value, max, label, size = '5' }) {
  const percentage = Math.round((value / max) * 100);

  return (
    <div className="relative inline-block">
      <CircularProgress value={value} max={max} size={size} color="blue" />

      {/* Custom label overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <Text size="3" weight="bold">
            {percentage}%
          </Text>
          {label && (
            <Text size="1" color="gray" className="block">
              {label}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}
```

## Best Practices

### Visual Design

- **Use appropriate sizes** for the context and available space
- **Choose meaningful colors** that align with the progress type
- **Provide text labels** alongside visual progress when possible
- **Consider high contrast mode** for accessibility compliance

### User Experience

- **Show progress for operations** that take more than a few seconds
- **Provide context** about what's being loaded or processed
- **Use consistent styling** across your application
- **Consider animation** for smooth progress updates

### Performance

- **Throttle progress updates** to avoid excessive re-renders
- **Use reasonable update intervals** (not more than 60fps)
- **Consider using CSS animations** for smoother visual updates
- **Optimize for mobile devices** with appropriate sizes

## Related Components

- **[Progress](../progress/progress.ai.md)** - Linear progress bar variant
- **[Spinner](../spinner/spinner.ai.md)** - For indeterminate loading states
- **[Badge](../badge/badge.ai.md)** - For displaying completion status
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For progress labels and descriptions

```

```
