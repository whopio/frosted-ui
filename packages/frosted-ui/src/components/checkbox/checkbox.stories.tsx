import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Checkbox, Code, Text, checkboxPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: checkboxPropDefs.size.default,
    color: checkboxPropDefs.color.default,
    highContrast: checkboxPropDefs.highContrast.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
      <Checkbox checked {...args}>
        Checked
      </Checkbox>
      <Checkbox checked disabled {...args}>
        Checked disabled
      </Checkbox>
      <Checkbox checked={false} {...args}>
        Unchecked
      </Checkbox>
      <Checkbox checked={false} disabled {...args}>
        Unchecked disabled
      </Checkbox>
      <Checkbox indeterminate {...args}>
        Indeterminate
      </Checkbox>
      <Checkbox indeterminate disabled {...args}>
        Indeterminate disabled
      </Checkbox>
    </div>
  ),
};

export const Composed: Story = {
  args: {
    size: checkboxPropDefs.size.default,
    color: checkboxPropDefs.color.default,
    highContrast: checkboxPropDefs.highContrast.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
      <Text render={<label />} size="2">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Checkbox defaultChecked {...args} />
          Default
        </div>
      </Text>
      <Text render={<label />} size="2">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Checkbox defaultChecked={true} disabled {...args} />
          Disabled checked
        </div>
      </Text>
      <Text render={<label />} size="2">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Checkbox defaultChecked={false} disabled {...args} />
          Disabled unchecked
        </div>
      </Text>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <Checkbox defaultChecked {...args} size="1" />
      <Checkbox defaultChecked {...args} size="2" />
      <Checkbox defaultChecked {...args} size="3" />
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <Checkbox {...args} color="indigo" defaultChecked />
      <Checkbox {...args} color="cyan" defaultChecked />
      <Checkbox {...args} color="orange" defaultChecked />
      <Checkbox {...args} color="crimson" defaultChecked />
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div
      style={{
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '8px',
      }}
    >
      <Checkbox {...args} color="indigo" defaultChecked />
      <Checkbox {...args} color="indigo" defaultChecked highContrast />
      <Checkbox {...args} color="cyan" defaultChecked />
      <Checkbox {...args} color="cyan" defaultChecked highContrast />
      <Checkbox {...args} color="orange" defaultChecked />
      <Checkbox {...args} color="orange" defaultChecked highContrast />
      <Checkbox {...args} color="crimson" defaultChecked />
      <Checkbox {...args} color="crimson" defaultChecked highContrast />
    </div>
  ),
};

export const Alignment: Story = {
  name: 'Alignment with text',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Text style={{ marginBottom: 12 }}>
        Composing <Code>Checkbox</Code> within <Code>Text</Code> automatically centers it with the first line of text.
      </Text>
      <Text render={<label />} size="3">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Checkbox {...args} size="1" defaultChecked /> Agree to Terms and Conditions
        </div>
      </Text>

      <Text render={<label />} size="4">
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Checkbox {...args} size="2" defaultChecked /> Agree to Terms and Conditions
        </div>
      </Text>

      <Text render={<label />} size="5">
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Checkbox {...args} size="3" defaultChecked /> Agree to Terms and Conditions
        </div>
      </Text>

      <div style={{ maxWidth: 300 }}>
        <Text render={<label />} size="4">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Checkbox defaultChecked /> It is automatically well-aligned with multi-line text too.
          </div>
        </Text>
      </div>
    </div>
  ),
};

export const FormValues: Story = {
  name: 'Form with value & uncheckedValue',
  render: (args) => {
    const [formData, setFormData] = React.useState<Record<string, FormDataEntryValue>>({});
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.currentTarget).entries());
      setFormData(data);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 550 }}>
        <Text>
          Base UI's Checkbox provides <Code>value</Code> and <Code>uncheckedValue</Code> props for form submissions. By
          default, a checked checkbox submits <Code>"on"</Code> and an unchecked checkbox submits nothing (standard HTML
          behavior). These props let you customize both values.
        </Text>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Text render={<label />} size="2">
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Checkbox {...args} name="newsletter" defaultChecked value="subscribed" uncheckedValue="unsubscribed" />
              Subscribe to newsletter
            </div>
          </Text>
          <Text render={<label />} size="2">
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Checkbox {...args} name="terms" value="accepted" uncheckedValue="declined" />
              Accept terms and conditions
            </div>
          </Text>
          <Text render={<label />} size="2">
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Checkbox {...args} name="marketing" defaultChecked />
              Marketing emails (no custom values)
            </div>
          </Text>
          <Button variant="solid" type="submit" style={{ marginTop: 'var(--space-2)', alignSelf: 'flex-start' }}>
            Submit Form
          </Button>
        </form>
        <div>
          <Text size="2" weight="medium">
            Submitted Data:
          </Text>
          <Code style={{ display: 'block', marginTop: 'var(--space-2)', whiteSpace: 'pre' }}>
            {JSON.stringify(formData, null, 2)}
          </Code>
        </div>
      </div>
    );
  },
};

export const ReadOnly: Story = {
  name: 'Read Only',
  render: (args) => {
    const [isPremium] = React.useState(true);
    const [preferences] = React.useState({
      emailDigest: true,
      smsAlerts: false,
      pushNotifications: true,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
        <Text>
          The <Code>readOnly</Code> prop prevents users from changing a checkbox while still showing its current state.
          Unlike <Code>disabled</Code>, read-only checkboxes remain focusable and their values are submitted with forms.
          This is useful for displaying user preferences they cannot modify, or showing computed/derived states.
        </Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Text size="2" weight="medium">
            Your Subscription Features (Premium Plan)
          </Text>
          <Text render={<label />} size="2">
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Checkbox {...args} checked={isPremium} readOnly /> Unlimited storage
            </div>
          </Text>
          <Text render={<label />} size="2">
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Checkbox {...args} checked={isPremium} readOnly /> Priority support
            </div>
          </Text>
          <Text render={<label />} size="2">
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Checkbox {...args} checked={isPremium} readOnly /> Advanced analytics
            </div>
          </Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Text size="2" weight="medium">
            Notification Settings (set by admin)
          </Text>
          <Text render={<label />} size="2">
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Checkbox {...args} checked={preferences.emailDigest} readOnly /> Daily email digest
            </div>
          </Text>
          <Text render={<label />} size="2">
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Checkbox {...args} checked={preferences.smsAlerts} readOnly /> SMS alerts
            </div>
          </Text>
          <Text render={<label />} size="2">
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Checkbox {...args} checked={preferences.pushNotifications} readOnly /> Push notifications
            </div>
          </Text>
        </div>
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

    const checkValidity = () => {
      const input = inputRef.current;
      if (input) {
        const isValid = input.validity.valid;
        const isChecked = input.checked;
        setInfo(`Checked: ${isChecked}, Valid: ${isValid}`);
      }
    };

    const toggleChecked = () => {
      const input = inputRef.current;
      if (input) {
        input.click();
        setInfo(`Toggled via native click. New state: ${!input.checked}`);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
        <Text>
          The <Code>inputRef</Code> prop provides direct access to the hidden native <Code>&lt;input&gt;</Code> element.
          This is useful for programmatic focus management, form validation, or integrating with third-party libraries
          that need direct DOM access.
        </Text>
        <form>
          <Text render={<label />} size="2">
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              <Checkbox {...args} inputRef={inputRef} name="agreement" required /> I agree to the terms (required)
            </div>
          </Text>
        </form>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button variant="soft" size="1" onClick={focusInput}>
            Focus Input
          </Button>
          <Button variant="soft" size="1" onClick={checkValidity}>
            Check Validity
          </Button>
          <Button variant="soft" size="1" onClick={toggleChecked}>
            Toggle via Ref
          </Button>
        </div>
        <Code style={{ padding: 'var(--space-2)' }}>{info}</Code>
      </div>
    );
  },
};
