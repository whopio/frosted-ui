import type { Meta, StoryObj } from '@storybook/react';

import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import React from 'react';
import {
  OTPFieldGroup,
  OTPFieldRoot,
  OTPFieldSeparator,
  OTPFieldSlot,
  Text,
} from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Lab/OTPField',
  component: OTPFieldRoot,
  args: {} as React.ComponentProps<typeof OTPFieldRoot>,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof OTPFieldRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <div>
      <OTPFieldRoot
        {...args}
        maxLength={6}
        render={({ slots }) => (
          <>
            <OTPFieldGroup>
              {slots.slice(0, 3).map((slot, index) => (
                <OTPFieldSlot key={index} {...slot} />
              ))}{' '}
            </OTPFieldGroup>
            <OTPFieldSeparator />
            <OTPFieldGroup>
              {slots.slice(3).map((slot, index) => (
                <OTPFieldSlot key={index} {...slot} />
              ))}
            </OTPFieldGroup>
          </>
        )}
      />
    </div>
  ),
};

export const Pattern: Story = {
  render: (args) => (
    <div>
      <OTPFieldRoot
        {...args}
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        render={({ slots }) => (
          <OTPFieldGroup>
            {slots.map((slot, index) => (
              <OTPFieldSlot key={index} {...slot} />
            ))}{' '}
          </OTPFieldGroup>
        )}
      />
    </div>
  ),
};

export const Separator: Story = {
  render: (args) => (
    <div>
      <OTPFieldRoot
        {...args}
        maxLength={6}
        render={({ slots }) => (
          <OTPFieldGroup style={{ gap: 4 }}>
            {slots.map((slot, index) => (
              <React.Fragment key={index}>
                <OTPFieldSlot style={{ borderRadius: 10 }} {...slot} />
                {index !== slots.length - 1 && <OTPFieldSeparator />}
              </React.Fragment>
            ))}{' '}
          </OTPFieldGroup>
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
          <OTPFieldRoot
            {...args}
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
            render={({ slots }) => (
              <OTPFieldGroup>
                {slots.map((slot, index) => (
                  <OTPFieldSlot key={index} {...slot} />
                ))}{' '}
              </OTPFieldGroup>
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
