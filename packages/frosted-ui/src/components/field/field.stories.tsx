import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';
import {
  Autocomplete,
  Button,
  Checkbox,
  Field,
  NumberField,
  RadioGroup,
  ScrollArea,
  Select,
  Slider,
  Switch,
  Text,
  TextField,
} from '../index';

const meta = {
  title: 'Forms/Field',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// Default
// ============================================================================

export const Default: Story = {
  name: 'Default',
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <Field.Root name="username">
          <Field.Label>
            <Text size="2" weight="medium">
              Username
            </Text>
          </Field.Label>
          <TextField.Root>
            <Field.Control render={<TextField.Input />} placeholder="Enter your username" required minLength={3} />
          </TextField.Root>
          <Field.Description>
            <Text size="1" color="gray">
              Must be at least 3 characters
            </Text>
          </Field.Description>
          <Field.Error match="valueMissing">
            <Text size="1" color="red">
              Username is required
            </Text>
          </Field.Error>
          <Field.Error match="tooShort">
            <Text size="1" color="red">
              Username must be at least 3 characters
            </Text>
          </Field.Error>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// With TextField
// ============================================================================

export const WithTextField: Story = {
  name: 'With TextField',
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: 320 }}>
        <Field.Root name="email">
          <Field.Label>
            <Text size="2" weight="medium">
              Email
            </Text>
          </Field.Label>
          <TextField.Root>
            <Field.Control render={<TextField.Input />} type="email" placeholder="you@example.com" required />
          </TextField.Root>
          <Field.Error match="valueMissing">
            <Text size="1" color="red">
              Email is required
            </Text>
          </Field.Error>
          <Field.Error match="typeMismatch">
            <Text size="1" color="red">
              Please enter a valid email address
            </Text>
          </Field.Error>
        </Field.Root>

        <Field.Root name="password">
          <Field.Label>
            <Text size="2" weight="medium">
              Password
            </Text>
          </Field.Label>
          <TextField.Root>
            <Field.Control render={<TextField.Input />} type="password" placeholder="••••••••" required minLength={8} />
          </TextField.Root>
          <Field.Description>
            <Text size="1" color="gray">
              Must be at least 8 characters
            </Text>
          </Field.Description>
          <Field.Error match="valueMissing">
            <Text size="1" color="red">
              Password is required
            </Text>
          </Field.Error>
          <Field.Error match="tooShort">
            <Text size="1" color="red">
              Password must be at least 8 characters
            </Text>
          </Field.Error>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// With Select
// ============================================================================

const countries = [
  { value: '', label: 'Select a country' },
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
];

export const WithSelect: Story = {
  name: 'With Select',
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <Field.Root name="country">
          <Field.Label>
            <Text size="2" weight="medium">
              Country
            </Text>
          </Field.Label>
          <Select.Root items={countries} required defaultValue="">
            <Select.Trigger placeholder="Select a country" style={{ width: '100%' }} />
            <Select.Content>
              <ScrollArea type="auto" style={{ maxHeight: 200 }}>
                {countries.map((country) => (
                  <Select.Item key={country.value} value={country.value} disabled={country.value === ''}>
                    {country.label}
                  </Select.Item>
                ))}
              </ScrollArea>
            </Select.Content>
          </Select.Root>
          <Field.Description>
            <Text size="1" color="gray">
              Choose your country of residence
            </Text>
          </Field.Description>
          <Field.Error match="valueMissing">
            <Text size="1" color="red">
              Please select a country
            </Text>
          </Field.Error>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// With Autocomplete
// ============================================================================

interface Image {
  url: string;
  name: string;
}

const containerImages: Image[] = [
  { url: 'docker.io/library/nginx:1.29-alpine', name: 'nginx:1.29-alpine' },
  { url: 'docker.io/library/node:22-slim', name: 'node:22-slim' },
  { url: 'docker.io/library/postgres:18', name: 'postgres:18' },
  { url: 'docker.io/library/redis:8.2.2-alpine', name: 'redis:8.2.2-alpine' },
  { url: 'docker.io/library/python:3.12-slim', name: 'python:3.12-slim' },
  { url: 'docker.io/library/golang:1.22-alpine', name: 'golang:1.22-alpine' },
];

export const WithAutocomplete: Story = {
  name: 'With Autocomplete',
  render: () => {
    return (
      <div style={{ width: 400 }}>
        <Field.Root name="containerImage">
          <Autocomplete.Root items={containerImages} mode="both" itemToStringValue={(item) => (item as Image).url}>
            <Field.Label>
              <Text size="2" weight="medium">
                Container image
              </Text>
            </Field.Label>
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="e.g. docker.io/library/node:latest" />} />
            </TextField.Root>
            <Field.Description>
              <Text size="1" color="gray">
                Enter a registry URL with optional tags
              </Text>
            </Field.Description>
            <Autocomplete.Content>
              <ScrollArea type="auto" style={{ maxHeight: 200 }}>
                <Autocomplete.List>
                  {(image: Image) => (
                    <Autocomplete.Item key={image.url} value={image}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Text size="2">{image.name}</Text>
                        <Text size="1" color="gray" style={{ fontFamily: 'monospace' }}>
                          {image.url}
                        </Text>
                      </div>
                    </Autocomplete.Item>
                  )}
                </Autocomplete.List>
              </ScrollArea>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// With NumberField
// ============================================================================

export const WithNumberField: Story = {
  name: 'With NumberField',
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <Field.Root name="quantity">
          <Field.Label>
            <Text size="2" weight="medium">
              Number of instances
            </Text>
          </Field.Label>
          <NumberField.Root defaultValue={1} min={1} max={64}>
            <NumberField.Input />
          </NumberField.Root>
          <Field.Description>
            <Text size="1" color="gray">
              Choose between 1 and 64 instances
            </Text>
          </Field.Description>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// With Switch
// ============================================================================

export const WithSwitch: Story = {
  name: 'With Switch',
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 320 }}>
        <Field.Root name="notifications">
          <Field.Label>
            <Text
              size="2"
              weight="medium"
              render={
                <label
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                />
              }
            >
              Enable notifications
              <Switch name="notifications" defaultChecked />
            </Text>
          </Field.Label>
          <Field.Description>
            <Text size="1" color="gray">
              Receive updates about your account
            </Text>
          </Field.Description>
        </Field.Root>

        <Field.Root name="marketing">
          <Field.Label>
            <Text
              size="2"
              weight="medium"
              render={
                <label
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                />
              }
            >
              Marketing emails
              <Switch name="marketing" />
            </Text>
          </Field.Label>
          <Field.Description>
            <Text size="1" color="gray">
              Receive promotional content and offers
            </Text>
          </Field.Description>
        </Field.Root>

        <Field.Root name="analytics">
          <Field.Label>
            <Text
              size="2"
              weight="medium"
              render={
                <label
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                />
              }
            >
              Usage analytics
              <Switch name="analytics" defaultChecked />
            </Text>
          </Field.Label>
          <Field.Description>
            <Text size="1" color="gray">
              Help improve the product with anonymous usage data
            </Text>
          </Field.Description>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// With RadioGroup
// ============================================================================

export const WithRadioGroup: Story = {
  name: 'With RadioGroup',
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <Field.Root name="storageType">
          <Field.Label>
            <Text size="2" weight="medium">
              Storage type
            </Text>
          </Field.Label>
          <RadioGroup.Root
            defaultValue="ssd"
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}
          >
            <Field.Item>
              <RadioGroup.Item value="ssd">SSD (Recommended)</RadioGroup.Item>
            </Field.Item>
            <Field.Item>
              <RadioGroup.Item value="hdd">HDD</RadioGroup.Item>
            </Field.Item>
            <Field.Item>
              <RadioGroup.Item value="nvme">NVMe (Premium)</RadioGroup.Item>
            </Field.Item>
          </RadioGroup.Root>
          <Field.Description>
            <Text size="1" color="gray">
              Select the storage type for your server
            </Text>
          </Field.Description>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// With Checkbox
// ============================================================================

export const WithCheckbox: Story = {
  name: 'With Checkbox',
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <Field.Root name="terms">
          <Field.Label>
            <Text size="2" weight="medium">
              Terms and Conditions
            </Text>
          </Field.Label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
            <Field.Item>
              <Checkbox name="terms" required>
                <Text size="2">
                  I agree to the{' '}
                  <Text color="blue" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                    Terms of Service
                  </Text>
                </Text>
              </Checkbox>
            </Field.Item>
            <Field.Item>
              <Checkbox name="privacy" required>
                <Text size="2">
                  I have read the{' '}
                  <Text color="blue" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                    Privacy Policy
                  </Text>
                </Text>
              </Checkbox>
            </Field.Item>
            <Field.Item>
              <Checkbox name="updates">
                <Text size="2">Send me product updates (optional)</Text>
              </Checkbox>
            </Field.Item>
          </div>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// With Slider
// ============================================================================

export const WithSlider: Story = {
  name: 'With Slider',
  render: () => {
    const [value, setValue] = React.useState([50]);

    return (
      <div style={{ width: 320 }}>
        <Field.Root name="volume">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Field.Label>
              <Text size="2" weight="medium">
                CPU allocation
              </Text>
            </Field.Label>
            <Text size="2" color="gray">
              {value[0]}%
            </Text>
          </div>
          <div style={{ marginTop: 'var(--space-2)' }}>
            <Slider value={value} onValueChange={(v) => setValue(v as number[])} min={0} max={100} step={5} />
          </div>
          <Field.Description>
            <Text size="1" color="gray">
              Allocate CPU resources for your application
            </Text>
          </Field.Description>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// Custom Validation
// ============================================================================

export const CustomValidation: Story = {
  name: 'Custom Validation',
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <Field.Root
          name="username"
          validate={(value) => {
            const str = value as string;
            if (!str) return 'Username is required';
            if (str.length < 3) return 'Username must be at least 3 characters';
            if (!/^[a-z0-9_]+$/.test(str))
              return 'Username can only contain lowercase letters, numbers, and underscores';
            if (str === 'admin') return 'This username is reserved';
            return null;
          }}
          validationMode="onChange"
          validationDebounceTime={300}
        >
          <Field.Label>
            <Text size="2" weight="medium">
              Username
            </Text>
          </Field.Label>
          <TextField.Root>
            <Field.Control render={<TextField.Input />} placeholder="e.g. john_doe" />
          </TextField.Root>
          <Field.Description>
            <Text size="1" color="gray">
              Lowercase letters, numbers, and underscores only
            </Text>
          </Field.Description>
          <Field.Error match="customError">
            {/* The custom error message from validate() will be shown */}
            <Text size="1" color="red">
              Invalid username
            </Text>
          </Field.Error>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// Form Example
// ============================================================================

export const FormExample: Story = {
  name: 'Complete Form Example',
  render: () => {
    const [formData, setFormData] = React.useState<Record<string, unknown> | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const result = Object.fromEntries(data.entries());
      setFormData(result);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: 400 }}>
        <Text size="4" weight="bold">
          Create Account
        </Text>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Field.Root name="fullName">
            <Field.Label>
              <Text size="2" weight="medium">
                Full name
              </Text>
            </Field.Label>
            <TextField.Root>
              <Field.Control render={<TextField.Input />} placeholder="John Doe" required />
            </TextField.Root>
            <Field.Error match="valueMissing">
              <Text size="1" color="red">
                Full name is required
              </Text>
            </Field.Error>
          </Field.Root>

          <Field.Root name="email">
            <Field.Label>
              <Text size="2" weight="medium">
                Email
              </Text>
            </Field.Label>
            <TextField.Root>
              <Field.Control render={<TextField.Input />} type="email" placeholder="you@example.com" required />
            </TextField.Root>
            <Field.Error match="valueMissing">
              <Text size="1" color="red">
                Email is required
              </Text>
            </Field.Error>
            <Field.Error match="typeMismatch">
              <Text size="1" color="red">
                Please enter a valid email
              </Text>
            </Field.Error>
          </Field.Root>

          <Field.Root name="plan">
            <Field.Label>
              <Text size="2" weight="medium">
                Plan
              </Text>
            </Field.Label>
            <Select.Root
              items={[
                { value: 'free', label: 'Free' },
                { value: 'pro', label: 'Pro - $9/mo' },
                { value: 'enterprise', label: 'Enterprise - $29/mo' },
              ]}
              defaultValue="free"
            >
              <Select.Trigger style={{ width: '100%' }} />
              <Select.Content>
                <Select.Item value="free">Free</Select.Item>
                <Select.Item value="pro">Pro - $9/mo</Select.Item>
                <Select.Item value="enterprise">Enterprise - $29/mo</Select.Item>
              </Select.Content>
            </Select.Root>
          </Field.Root>

          <Field.Root name="teamSize">
            <Field.Label>
              <Text size="2" weight="medium">
                Team size
              </Text>
            </Field.Label>
            <NumberField.Root defaultValue={1} min={1} max={100} name="teamSize">
              <NumberField.Input />
            </NumberField.Root>
            <Field.Description>
              <Text size="1" color="gray">
                Number of team members (1-100)
              </Text>
            </Field.Description>
          </Field.Root>

          <Field.Root name="notifications">
            <Field.Label>
              <Text
                size="2"
                weight="medium"
                render={
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                    }}
                  />
                }
              >
                Email notifications
                <Switch name="notifications" defaultChecked />
              </Text>
            </Field.Label>
          </Field.Root>

          <Field.Root name="terms">
            <Field.Item>
              <Checkbox name="terms" required>
                <Text size="2">I agree to the Terms of Service</Text>
              </Checkbox>
            </Field.Item>
          </Field.Root>

          <Button type="submit" variant="solid" style={{ marginTop: 'var(--space-2)' }}>
            Create Account
          </Button>
        </form>

        {formData && (
          <div
            style={{
              padding: 'var(--space-3)',
              background: 'var(--green-a3)',
              borderRadius: 'var(--radius-2)',
            }}
          >
            <Text size="2" weight="medium" color="green">
              Form submitted successfully!
            </Text>
            <pre
              style={{
                marginTop: 'var(--space-2)',
                fontSize: 'var(--font-size-1)',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
              }}
            >
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  },
};

// ============================================================================
// Validity Render Prop
// ============================================================================

export const ValidityRenderProp: Story = {
  name: 'Validity Render Prop',
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <Field.Root name="password" validationMode="onChange">
          <Field.Label>
            <Text size="2" weight="medium">
              Password
            </Text>
          </Field.Label>
          <TextField.Root>
            <Field.Control
              render={<TextField.Input />}
              type="password"
              placeholder="Enter a strong password"
              required
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </TextField.Root>
          <Field.Validity>
            {(state) => (
              <ul
                style={{
                  margin: 0,
                  marginTop: 'var(--space-2)',
                  paddingLeft: 'var(--space-4)',
                  fontSize: 'var(--font-size-1)',
                }}
              >
                <li style={{ color: state.validity.valueMissing ? 'var(--red-11)' : 'var(--green-11)' }}>
                  {state.validity.valueMissing ? '✗' : '✓'} Required
                </li>
                <li style={{ color: state.validity.tooShort ? 'var(--red-11)' : 'var(--green-11)' }}>
                  {state.validity.tooShort ? '✗' : '✓'} At least 8 characters
                </li>
                <li style={{ color: state.validity.patternMismatch ? 'var(--red-11)' : 'var(--green-11)' }}>
                  {state.validity.patternMismatch ? '✗' : '✓'} Contains uppercase, lowercase, and number
                </li>
              </ul>
            )}
          </Field.Validity>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// Disabled State
// ============================================================================

export const DisabledState: Story = {
  name: 'Disabled State',
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: 320 }}>
        <Field.Root name="readonlyField" disabled>
          <Field.Label>
            <Text size="2" weight="medium">
              Account ID (read-only)
            </Text>
          </Field.Label>
          <TextField.Root>
            <Field.Control render={<TextField.Input />} defaultValue="ACC-123456" />
          </TextField.Root>
          <Field.Description>
            <Text size="1" color="gray">
              This field cannot be modified
            </Text>
          </Field.Description>
        </Field.Root>

        <Field.Root name="lockedPlan" disabled>
          <Field.Label>
            <Text size="2" weight="medium">
              Current Plan
            </Text>
          </Field.Label>
          <Select.Root defaultValue="enterprise" disabled>
            <Select.Trigger style={{ width: '100%' }} />
            <Select.Content>
              <Select.Item value="free">Free</Select.Item>
              <Select.Item value="pro">Pro</Select.Item>
              <Select.Item value="enterprise">Enterprise</Select.Item>
            </Select.Content>
          </Select.Root>
          <Field.Description>
            <Text size="1" color="gray">
              Contact support to change your plan
            </Text>
          </Field.Description>
        </Field.Root>
      </div>
    );
  },
};
