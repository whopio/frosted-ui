import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Code, DataList, Slider, sliderPropDefs, Text } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Slider',
  component: Slider,
  args: {
    size: sliderPropDefs.size.default,
    color: sliderPropDefs.color.default,
    highContrast: sliderPropDefs.highContrast.default,
    disabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: 300 }}>
      <Slider {...args} defaultValue={[50]} />
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: 300 }}>
      <Slider {...args} defaultValue={[25]} size="1" />
      <Slider {...args} defaultValue={[50]} size="2" />
      <Slider {...args} defaultValue={[75]} size="3" />
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: 300 }}>
      <Slider {...args} defaultValue={[20]} color="indigo" />
      <Slider {...args} defaultValue={[40]} color="cyan" />
      <Slider {...args} defaultValue={[60]} color="orange" />
      <Slider {...args} defaultValue={[80]} color="crimson" />
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: 300 }}>
      <Slider {...args} defaultValue={[25]} highContrast={false} />
      <Slider {...args} defaultValue={[50]} highContrast />
    </div>
  ),
};

export const Range: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: 300 }}>
      <Slider {...args} defaultValue={[25, 75]} />
    </div>
  ),
};

export const Orientation: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <span style={{ fontSize: 'var(--font-size-2)', color: 'var(--gray-11)' }}>Horizontal</span>
        <div style={{ width: 200 }}>
          <Slider {...args} defaultValue={[50]} orientation="horizontal" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <span style={{ fontSize: 'var(--font-size-2)', color: 'var(--gray-11)' }}>Vertical</span>
        <div style={{ height: 150 }}>
          <Slider {...args} defaultValue={[50]} orientation="vertical" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <span style={{ fontSize: 'var(--font-size-2)', color: 'var(--gray-11)' }}>Vertical Range</span>
        <div style={{ height: 150 }}>
          <Slider {...args} defaultValue={[25, 75]} orientation="vertical" />
        </div>
      </div>
    </div>
  ),
};

export const ValueCallbacks: Story = {
  name: 'Value Callbacks',
  render: (args) => {
    const [liveValue, setLiveValue] = React.useState(50);
    const [committedValue, setCommittedValue] = React.useState(50);
    const [changeCount, setChangeCount] = React.useState(0);
    const [commitCount, setCommitCount] = React.useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
        <Text>
          <Code>onValueChange</Code> fires continuously while dragging — ideal for live previews.
          <br />
          <Code>onValueCommitted</Code> fires only when dragging ends — ideal for saving or API calls.
        </Text>

        <div style={{ width: 300 }}>
          <Slider
            {...args}
            value={[liveValue]}
            onValueChange={(value) => {
              setLiveValue(Array.isArray(value) ? value[0] : value);
              setChangeCount((c) => c + 1);
            }}
            onValueCommitted={(value) => {
              setCommittedValue(Array.isArray(value) ? value[0] : value);
              setCommitCount((c) => c + 1);
            }}
          />
        </div>

        <DataList.Root>
          <DataList.Item>
            <DataList.Label>Live Value</DataList.Label>
            <DataList.Value>{liveValue}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>onValueChange calls</DataList.Label>
            <DataList.Value>{changeCount}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Committed Value</DataList.Label>
            <DataList.Value>{committedValue}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>onValueCommitted calls</DataList.Label>
            <DataList.Value>{commitCount}</DataList.Value>
          </DataList.Item>
        </DataList.Root>

        <div
          style={{
            height: 60,
            background: `hsl(${liveValue * 3.6}, 70%, 50%)`,
            borderRadius: 'var(--radius-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 50ms',
          }}
        >
          <Text style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            Live color preview (hue: {Math.round(liveValue * 3.6)}°)
          </Text>
        </div>
      </div>
    );
  },
};

export const MinStepsBetweenValues: Story = {
  name: 'Min Steps Between Values',
  render: (args) => {
    const [priceRange, setPriceRange] = React.useState([200, 800]);
    const [timeRange, setTimeRange] = React.useState([9, 17]);

    const formatPrice = (value: number) => `$${value}`;
    const formatTime = (hour: number) => {
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      return `${displayHour}${period}`;
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 400 }}>
        <Text>
          The <Code>minStepsBetweenValues</Code> prop ensures a minimum gap between thumbs in a range slider. Combined
          with <Code>thumbCollisionBehavior="push"</Code>, when one thumb approaches another, it pushes it along rather
          than stopping — creating a smooth, intuitive interaction while maintaining the minimum gap.
        </Text>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Text size="2" weight="medium">
            Price Range Filter (min $100 gap)
          </Text>
          <div style={{ width: '100%' }}>
            <Slider
              {...args}
              value={priceRange}
              onValueChange={(v) => setPriceRange(v as number[])}
              min={0}
              max={1000}
              step={50}
              minStepsBetweenValues={2}
              thumbCollisionBehavior="push"
            />
          </div>
          <Text size="2" color="gray">
            Selected: {formatPrice(priceRange[0])} – {formatPrice(priceRange[1])}
          </Text>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Text size="2" weight="medium">
            Meeting Time Slot (min 2 hour duration)
          </Text>
          <div style={{ width: '100%' }}>
            <Slider
              {...args}
              value={timeRange}
              onValueChange={(v) => setTimeRange(v as number[])}
              min={6}
              max={22}
              step={1}
              minStepsBetweenValues={2}
              thumbCollisionBehavior="push"
            />
          </div>
          <Text size="2" color="gray">
            Available: {formatTime(timeRange[0])} – {formatTime(timeRange[1])} ({timeRange[1] - timeRange[0]} hours)
          </Text>
        </div>

        <DataList.Root size="1">
          <DataList.Item>
            <DataList.Label>thumbCollisionBehavior</DataList.Label>
            <DataList.Value>"push" — thumbs push each other when colliding</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Price minStepsBetweenValues</DataList.Label>
            <DataList.Value>2 steps × $50 = $100 minimum gap</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Time minStepsBetweenValues</DataList.Label>
            <DataList.Value>2 steps × 1hr = 2 hour minimum</DataList.Value>
          </DataList.Item>
        </DataList.Root>
        <Text size="1" color="gray">
          Other collision behaviors: <Code>"swap"</Code> (thumbs swap places) and <Code>"none"</Code> (thumbs block each
          other).
        </Text>
      </div>
    );
  },
};

export const InputRef: Story = {
  name: 'Input Ref',
  render: (args) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [info, setInfo] = React.useState<string>('Click a button to inspect the input');

    const focusInput = () => {
      inputRef.current?.focus();
      setInfo('Input focused programmatically');
    };

    const checkState = () => {
      const input = inputRef.current;
      if (input) {
        setInfo(`Value: ${input.value}, Min: ${input.min}, Max: ${input.max}, Step: ${input.step}`);
      }
    };

    const setToMiddle = () => {
      const input = inputRef.current;
      if (input) {
        const min = parseFloat(input.min) || 0;
        const max = parseFloat(input.max) || 100;
        const middle = (min + max) / 2;
        // Trigger a native input event to update the slider
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
        nativeInputValueSetter?.call(input, middle);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        setInfo(`Set to middle value: ${middle}`);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
        <Text>
          The <Code>inputRef</Code> prop provides direct access to the hidden native{' '}
          <Code>&lt;input type="range"&gt;</Code> element inside the thumb. This is useful for programmatic focus, form
          validation, or integrating with third-party libraries.
        </Text>

        <div style={{ width: 300 }}>
          <Slider {...args} inputRef={inputRef} defaultValue={[25]} min={0} max={100} step={5} />
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <Button size="1" variant="soft" onClick={focusInput} style={{ padding: '4px 12px', cursor: 'pointer' }}>
            Focus Input
          </Button>
          <Button size="1" variant="soft" onClick={checkState} style={{ padding: '4px 12px', cursor: 'pointer' }}>
            Check State
          </Button>
          <Button size="1" variant="soft" onClick={setToMiddle} style={{ padding: '4px 12px', cursor: 'pointer' }}>
            Set to Middle
          </Button>
        </div>

        <Code style={{ padding: 'var(--space-2)', display: 'block' }}>{info}</Code>
      </div>
    );
  },
};
