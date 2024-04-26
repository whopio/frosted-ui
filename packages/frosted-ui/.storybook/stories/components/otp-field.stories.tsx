import type { Meta, StoryObj } from '@storybook/react';

import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import React from 'react';
import { OTPField, Text } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Lab/OTPField',
  component: OTPField.Root,
  args: {} as React.ComponentProps<typeof OTPField.Root>,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof OTPField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <div>
      <OTPField.Root
        {...args}
        maxLength={6}
        render={({ slots }) => (
          <>
            <OTPField.Group>
              {slots.slice(0, 3).map((slot, index) => (
                <OTPField.Slot key={index} {...slot} />
              ))}{' '}
            </OTPField.Group>
            <OTPField.Separator />
            <OTPField.Group>
              {slots.slice(3).map((slot, index) => (
                <OTPField.Slot key={index} {...slot} />
              ))}
            </OTPField.Group>
          </>
        )}
      />
    </div>
  ),
};

export const Pattern: Story = {
  render: (args) => (
    <div>
      <OTPField.Root
        {...args}
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        render={({ slots }) => (
          <OTPField.Group>
            {slots.map((slot, index) => (
              <OTPField.Slot key={index} {...slot} />
            ))}{' '}
          </OTPField.Group>
        )}
      />
    </div>
  ),
};

export const Separator: Story = {
  render: (args) => (
    <div>
      <OTPField.Root
        {...args}
        maxLength={6}
        render={({ slots }) => (
          <OTPField.Group style={{ gap: 4 }}>
            {slots.map((slot, index) => (
              <React.Fragment key={index}>
                <OTPField.Slot style={{ borderRadius: 10 }} {...slot} />
                {index !== slots.length - 1 && <OTPField.Separator />}
              </React.Fragment>
            ))}{' '}
          </OTPField.Group>
        )}
      />
    </div>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('');

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <OTPField.Root
            {...args}
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
            render={({ slots }) => (
              <OTPField.Group>
                {slots.map((slot, index) => (
                  <OTPField.Slot key={index} {...slot} />
                ))}{' '}
              </OTPField.Group>
            )}
          />
        </div>
        <Text align="center" color="gray" size="2" as="div">
          {value === '' ? (
            <>Enter your one-time password.</>
          ) : (
            <>You entered: {value}</>
          )}
        </Text>
      </div>
    );
  },
};
