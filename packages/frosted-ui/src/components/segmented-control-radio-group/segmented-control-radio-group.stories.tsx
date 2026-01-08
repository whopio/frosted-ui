import type { Meta, StoryObj } from '@storybook/react';

import { Monitor20, Moon20, Sun20 } from '@frosted-ui/icons';
import React from 'react';
import { Button, Code, SegmentedControlRadioGroup, Text } from '..';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/SegmentedControlRadioGroup',
  component: SegmentedControlRadioGroup.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControlRadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <SegmentedControlRadioGroup.Root
      defaultValue="system"
      {...args}
      onValueChange={(value) => console.log('🟢 onValueChange ', value)}
    >
      <SegmentedControlRadioGroup.Item value="system">
        <Monitor20 />
      </SegmentedControlRadioGroup.Item>
      <SegmentedControlRadioGroup.Item value="light-mode">
        <Sun20 />
      </SegmentedControlRadioGroup.Item>
      <SegmentedControlRadioGroup.Item value="dark-mode">
        <Moon20 />
      </SegmentedControlRadioGroup.Item>
    </SegmentedControlRadioGroup.Root>
  ),
};

export const InputRef: Story = {
  name: 'Input Ref',
  render: (args) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleFocus = () => {
      inputRef.current?.focus();
    };

    const handleReportValidity = () => {
      const isValid = inputRef.current?.reportValidity();
      console.log('Validity:', isValid);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
        <Text>
          The <Code>inputRef</Code> prop provides access to the underlying hidden input element, enabling programmatic
          control for focus management, form validation, and integration with form libraries.
        </Text>

        <SegmentedControlRadioGroup.Root {...args} name="theme-preference" required inputRef={inputRef}>
          <SegmentedControlRadioGroup.Item value="system">
            <Monitor20 />
          </SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="light-mode">
            <Sun20 />
          </SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="dark-mode">
            <Moon20 />
          </SegmentedControlRadioGroup.Item>
        </SegmentedControlRadioGroup.Root>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button size="1" variant="soft" onClick={handleFocus}>
            Focus Input
          </Button>
          <Button size="1" variant="soft" onClick={handleReportValidity}>
            Check Validity
          </Button>
        </div>

        <Text size="1" color="gray">
          Click &quot;Check Validity&quot; without selecting an option to see the browser&apos;s native validation
          message in the console (the group has <Code>required</Code> set).
        </Text>
      </div>
    );
  },
};
