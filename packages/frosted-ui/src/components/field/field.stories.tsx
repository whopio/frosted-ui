import { Checkmark12, XMarkSmall12 } from '@frosted-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';
import {
  Autocomplete,
  Button,
  Callout,
  Checkbox,
  Code,
  Field,
  Fieldset,
  Form,
  Heading,
  Link,
  NumberField,
  RadioGroup,
  ScrollArea,
  Select,
  Separator,
  Slider,
  Spinner,
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
          <Field.Label>Username</Field.Label>
          <TextField.Root>
            <TextField.Input placeholder="Enter your username" required minLength={3} />
          </TextField.Root>
          <Field.Description>Must be at least 3 characters</Field.Description>
          <Field.Error match="valueMissing">Username is required</Field.Error>
          <Field.Error match="tooShort">Username must be at least 3 characters</Field.Error>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// With Fieldset
// ============================================================================

const fieldsetCountryItems = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
];

export const WithFieldset: Story = {
  name: 'With Fieldset',
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', width: 360 }}>
        <Text size="2">
          The Fieldset component groups related fields together using a native <Code>{'<fieldset>'}</Code> element. This
          provides semantic structure to forms and improves accessibility by associating a legend with a group of
          related controls.
        </Text>

        <Fieldset.Root>
          <Fieldset.Legend>Billing Details</Fieldset.Legend>

          <Field.Root name="company">
            <Field.Label>Company</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="Acme Inc." />
            </TextField.Root>
          </Field.Root>

          <Field.Root name="taxId">
            <Field.Label>Tax ID</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="XX-XXXXXXX" />
            </TextField.Root>
            <Field.Description>Your company's tax identification number</Field.Description>
          </Field.Root>
        </Fieldset.Root>
        <Separator size="4" />
        <Fieldset.Root>
          <Fieldset.Legend>Shipping Address</Fieldset.Legend>

          <Field.Root name="street">
            <Field.Label>Street address</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="123 Main St" required />
            </TextField.Root>
            <Field.Error match="valueMissing">Street address is required</Field.Error>
          </Field.Root>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field.Root name="city">
              <Field.Label>City</Field.Label>
              <TextField.Root>
                <TextField.Input placeholder="San Francisco" required />
              </TextField.Root>
            </Field.Root>

            <Field.Root name="zipCode">
              <Field.Label>ZIP code</Field.Label>
              <TextField.Root>
                <TextField.Input placeholder="94102" required />
              </TextField.Root>
            </Field.Root>
          </div>

          <Field.Root name="country">
            <Field.Label>Country</Field.Label>
            <Select.Root items={fieldsetCountryItems} defaultValue="us">
              <Select.Trigger style={{ width: '100%' }} />
              <Select.Content>
                {fieldsetCountryItems.map((item) => (
                  <Select.Item key={item.value} value={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Field.Root>
        </Fieldset.Root>
      </div>
    );
  },
};

// ============================================================================
// Fieldset Disabled
// ============================================================================

const addressCountryItems = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
];

export const FieldsetDisabled: Story = {
  name: 'Fieldset Disabled',
  render: function FieldsetDisabledStory() {
    const [sameAsShipping, setSameAsShipping] = React.useState(false);
    const [shippingAddress, setShippingAddress] = React.useState({
      street: '',
      city: '',
      zip: '',
      country: 'us',
    });
    const [billingAddress, setBillingAddress] = React.useState({
      street: '',
      city: '',
      zip: '',
      country: 'us',
    });

    // When "same as shipping" is checked, sync billing with shipping
    const displayedBilling = sameAsShipping ? shippingAddress : billingAddress;

    return (
      <div style={{ width: 400 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Fieldset Disabled
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Use <Code>{'disabled'}</Code> on <Code>{'<Fieldset.Root>'}</Code> to disable an entire group of fields at
          once. This is useful for conditional sections like billing addresses that can be skipped.
        </Text>

        <Form.Root>
          {/* Shipping Address */}
          <Fieldset.Root>
            <Fieldset.Legend>Shipping Address</Fieldset.Legend>

            <Field.Root name="shippingStreet">
              <Field.Label>Street address</Field.Label>
              <TextField.Root>
                <TextField.Input
                  placeholder="123 Main St"
                  value={shippingAddress.street}
                  onChange={(e) => setShippingAddress((prev) => ({ ...prev, street: e.target.value }))}
                  required
                />
              </TextField.Root>
              <Field.Error match="valueMissing">Street address is required</Field.Error>
            </Field.Root>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
              <Field.Root name="shippingCity">
                <Field.Label>City</Field.Label>
                <TextField.Root>
                  <TextField.Input
                    placeholder="San Francisco"
                    value={shippingAddress.city}
                    onChange={(e) => setShippingAddress((prev) => ({ ...prev, city: e.target.value }))}
                    required
                  />
                </TextField.Root>
              </Field.Root>

              <Field.Root name="shippingZip">
                <Field.Label>ZIP</Field.Label>
                <TextField.Root>
                  <TextField.Input
                    placeholder="94102"
                    value={shippingAddress.zip}
                    onChange={(e) => setShippingAddress((prev) => ({ ...prev, zip: e.target.value }))}
                    required
                  />
                </TextField.Root>
              </Field.Root>
            </div>

            <Field.Root name="shippingCountry">
              <Field.Label>Country</Field.Label>
              <Select.Root
                items={addressCountryItems}
                value={shippingAddress.country}
                onValueChange={(value) => value && setShippingAddress((prev) => ({ ...prev, country: value }))}
              >
                <Select.Trigger style={{ width: '100%' }} />
                <Select.Content>
                  {addressCountryItems.map((item) => (
                    <Select.Item key={item.value} value={item.value}>
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Field.Root>
          </Fieldset.Root>

          {/* Same as Shipping checkbox */}
          <Field.Root name="sameAsShipping" style={{ margin: 'var(--space-4) 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Checkbox
                name="sameAsShipping"
                checked={sameAsShipping}
                onCheckedChange={(checked) => setSameAsShipping(checked === true)}
              />
              <Field.Label weight="regular" style={{ margin: 0, cursor: 'pointer' }}>
                Billing address same as shipping
              </Field.Label>
            </div>
          </Field.Root>

          {/* Billing Address - disabled when same as shipping */}
          <Fieldset.Root disabled={sameAsShipping}>
            <Fieldset.Legend>Billing Address</Fieldset.Legend>

            {sameAsShipping && (
              <Callout.Root color="info" size="1" style={{ marginBottom: 12 }}>
                <Callout.Text>Using shipping address for billing</Callout.Text>
              </Callout.Root>
            )}

            <Field.Root name="billingStreet">
              <Field.Label>Street address</Field.Label>
              <TextField.Root>
                <TextField.Input
                  placeholder="123 Main St"
                  value={displayedBilling.street}
                  onChange={(e) => setBillingAddress((prev) => ({ ...prev, street: e.target.value }))}
                  required={!sameAsShipping}
                />
              </TextField.Root>
              <Field.Error match="valueMissing">Street address is required</Field.Error>
            </Field.Root>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
              <Field.Root name="billingCity">
                <Field.Label>City</Field.Label>
                <TextField.Root>
                  <TextField.Input
                    placeholder="San Francisco"
                    value={displayedBilling.city}
                    onChange={(e) => setBillingAddress((prev) => ({ ...prev, city: e.target.value }))}
                    required={!sameAsShipping}
                  />
                </TextField.Root>
              </Field.Root>

              <Field.Root name="billingZip">
                <Field.Label>ZIP</Field.Label>
                <TextField.Root>
                  <TextField.Input
                    placeholder="94102"
                    value={displayedBilling.zip}
                    onChange={(e) => setBillingAddress((prev) => ({ ...prev, zip: e.target.value }))}
                    required={!sameAsShipping}
                  />
                </TextField.Root>
              </Field.Root>
            </div>

            <Field.Root name="billingCountry">
              <Field.Label>Country</Field.Label>
              <Select.Root
                items={addressCountryItems}
                value={displayedBilling.country}
                onValueChange={(value) => value && setBillingAddress((prev) => ({ ...prev, country: value }))}
              >
                <Select.Trigger style={{ width: '100%' }} />
                <Select.Content>
                  {addressCountryItems.map((item) => (
                    <Select.Item key={item.value} value={item.value}>
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Field.Root>
          </Fieldset.Root>

          <Button type="submit" style={{ width: '100%', marginTop: 20 }} variant="solid">
            Continue to Payment
          </Button>
        </Form.Root>
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
          <Field.Label>Email</Field.Label>
          <TextField.Root>
            <TextField.Input type="email" placeholder="you@example.com" required />
          </TextField.Root>
          <Field.Error match="valueMissing">Email is required</Field.Error>
          <Field.Error match="typeMismatch">Please enter a valid email address</Field.Error>
        </Field.Root>

        <Field.Root name="password">
          <Field.Label>Password</Field.Label>
          <TextField.Root>
            <TextField.Input type="password" placeholder="••••••••" required minLength={8} />
          </TextField.Root>
          <Field.Description>Must be at least 8 characters</Field.Description>
          <Field.Error match="valueMissing">Password is required</Field.Error>
          <Field.Error match="tooShort">Password must be at least 8 characters</Field.Error>
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
          <Field.Label>Country</Field.Label>
          <Select.Root items={countries} required defaultValue="">
            <Select.Trigger placeholder="Select a country" style={{ width: '100%' }} />
            <Select.Content>
              {countries.map((country) => (
                <Select.Item key={country.value} value={country.value} disabled={country.value === ''}>
                  {country.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <Field.Description>Choose your country of residence</Field.Description>
          <Field.Error match="valueMissing">Please select a country</Field.Error>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// With Slider (Range Validation)
// ============================================================================

export const WithSliderRangeValidation: Story = {
  name: 'With Slider (Range Validation)',
  render: function WithSliderRangeValidationStory() {
    const [priceRange, setPriceRange] = React.useState([200, 500]);
    const [error, setError] = React.useState<string | null>(null);
    const minRange = 100; // Minimum $100 difference required

    const validateRange = (values: number[]) => {
      const [min, max] = values;
      if (max - min < minRange) {
        return `Price range must be at least $${minRange}`;
      }
      return null;
    };

    const handleValueChange = (value: number | readonly number[]) => {
      const newValues = Array.isArray(value) ? [...value] : [value];
      setPriceRange(newValues);
      setError(validateRange(newValues));
    };

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Slider with Validation
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Range sliders can be validated using controlled state. Check the range difference, bounds, or any custom
          criteria and display errors using <Code>{'<Field.Error>'}</Code> with <Code>{'match={true}'}</Code>.
        </Text>

        <Field.Root name="priceRange" invalid={!!error}>
          <Field.Label>Price Range</Field.Label>
          <div style={{ padding: '8px 0 16px' }}>
            <Slider value={priceRange} onValueChange={handleValueChange} min={0} max={1000} step={50} />
          </div>
          <Field.Description>
            ${priceRange[0]} – ${priceRange[1]} (${priceRange[1] - priceRange[0]} range)
          </Field.Description>
          {error && <Field.Error match={true}>{error}</Field.Error>}
        </Field.Root>

        <Text size="1" color="gray" style={{ marginTop: 16, display: 'block' }}>
          Try narrowing the range below ${minRange} to see the validation error.
        </Text>
      </div>
    );
  },
};

// ============================================================================
// With Slider (Budget Allocation)
// ============================================================================

export const WithSliderBudget: Story = {
  name: 'With Slider (Budget)',
  render: function WithSliderBudgetStory() {
    const [budget, setBudget] = React.useState(5000);
    const [submitted, setSubmitted] = React.useState(false);
    const minBudget = 1000;
    const maxBudget = 50000;

    const getError = () => {
      if (budget < minBudget) return `Minimum budget is $${minBudget.toLocaleString()}`;
      if (budget > maxBudget) return `Maximum budget is $${maxBudget.toLocaleString()}`;
      return null;
    };

    const error = getError();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!error) {
        setSubmitted(true);
      }
    };

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Budget Allocation
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Single-value sliders can also be validated. This example enforces minimum and maximum budget constraints.
        </Text>

        <form onSubmit={handleSubmit}>
          <Field.Root name="budget" invalid={!!error}>
            <Field.Label>Monthly Budget</Field.Label>
            <div style={{ padding: '8px 0 4px' }}>
              <Slider
                value={[budget]}
                onValueChange={(v) => {
                  setBudget(Array.isArray(v) ? v[0] : (v as number));
                  setSubmitted(false);
                }}
                min={0}
                max={60000}
                step={500}
              />
            </div>
            <Field.Description>${budget.toLocaleString()} / month</Field.Description>
            {error && <Field.Error match={true}>{error}</Field.Error>}
          </Field.Root>

          <Button type="submit" disabled={!!error} style={{ marginTop: 16, width: '100%' }}>
            Set Budget
          </Button>
        </form>

        {submitted && (
          <Callout.Root color="success" size="1" style={{ marginTop: 16 }}>
            <Callout.Text>Budget set to ${budget.toLocaleString()}/month</Callout.Text>
          </Callout.Root>
        )}
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
            <Field.Label>Container image</Field.Label>
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="e.g. docker.io/library/node:latest" />} />
            </TextField.Root>
            <Field.Description>Enter a registry URL with optional tags</Field.Description>
            <Autocomplete.Content size="3">
              <ScrollArea type="auto" style={{ maxHeight: 200 }}>
                <Autocomplete.List>
                  {(image: Image) => (
                    <Autocomplete.Item key={image.url} value={image} style={{ height: 'auto', padding: '8px 12px' }}>
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
          <Field.Label>Number of instances</Field.Label>
          <NumberField.Root defaultValue={1} min={1} max={64}>
            <NumberField.Input />
          </NumberField.Root>
          <Field.Description>Choose between 1 and 64 instances</Field.Description>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: 320 }}>
        <Field.Root name="notifications">
          <Field.Label size="3" style={{ display: 'flex', justifyContent: 'space-between' }}>
            Enable notifications
            <Switch name="notifications" />
          </Field.Label>
          <Field.Description>Receive updates about your account</Field.Description>
        </Field.Root>

        <Field.Root name="marketing">
          <Field.Label size="3" style={{ display: 'flex', justifyContent: 'space-between' }}>
            Marketing emails
            <Switch name="marketing" defaultChecked />
          </Field.Label>
          <Field.Description>Receive promotional content and offers</Field.Description>
        </Field.Root>

        <Field.Root name="analytics">
          <Field.Label size="3" style={{ display: 'flex', justifyContent: 'space-between' }}>
            Usage analytics
            <Switch name="analytics" defaultChecked />
          </Field.Label>
          <Field.Description>Help improve the product with anonymous usage data</Field.Description>
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
          <Fieldset.Root>
            <Fieldset.Legend variant="label">Storage type</Fieldset.Legend>
            <Field.Description>Select the storage type for your server</Field.Description>
            <RadioGroup.Root defaultValue="ssd">
              <Field.Item>
                <Field.Label weight="regular">
                  <RadioGroup.Item value="ssd" />
                  SSD (Recommended)
                </Field.Label>
              </Field.Item>
              <Field.Item>
                <Field.Label weight="regular">
                  <RadioGroup.Item value="hdd" />
                  HDD
                </Field.Label>
              </Field.Item>
              <Field.Item>
                <Field.Label weight="regular">
                  <RadioGroup.Item value="nvme" />
                  NVMe (Premium)
                </Field.Label>
              </Field.Item>
            </RadioGroup.Root>
          </Fieldset.Root>
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
        <Field.Root name="agreements">
          <Fieldset.Root>
            <Fieldset.Legend variant="label">Terms and Conditions</Fieldset.Legend>
            <Field.Item>
              <Field.Label weight="regular">
                <Checkbox size="2" value="terms" />I agree to the Terms of Service
              </Field.Label>
            </Field.Item>
            <Field.Item>
              <Field.Label weight="regular">
                <Checkbox size="2" value="privacy" />I have read the Privacy Policy
              </Field.Label>
            </Field.Item>
            <Field.Item>
              <Field.Label weight="regular">
                <Checkbox size="2" value="updates" />
                Send me product updates (optional)
              </Field.Label>
            </Field.Item>
          </Fieldset.Root>
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
    const [value, setValue] = React.useState(50);

    return (
      <div style={{ width: 320 }}>
        <Field.Root name="volume">
          <Field.Label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            CPU allocation
            <Text size="2" color="gray">
              {value}%
            </Text>
          </Field.Label>

          <Slider value={value} onValueChange={(v) => setValue(v as number)} min={0} max={100} step={5} />

          <Field.Description>Allocate CPU resources for your application</Field.Description>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// Custom Validation
// ============================================================================

// Simulated taken usernames
const TAKEN_USERNAMES = ['admin', 'root', 'system', 'moderator', 'support', 'help', 'john_doe'];

// Simulated async check
const checkUsernameAvailability = (username: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(!TAKEN_USERNAMES.includes(username.toLowerCase()));
    }, 800); // Simulate network delay
  });
};

// Validation rules
const usernameRules = {
  minLength: (value: string) => value.length >= 3,
  maxLength: (value: string) => value.length <= 20,
  validChars: (value: string) => /^[a-z0-9_]*$/.test(value),
  startsWithLetter: (value: string) => /^[a-z]/.test(value),
  noConsecutiveUnderscores: (value: string) => !/__/.test(value),
};

export const CustomValidation: Story = {
  name: 'Custom Validation',
  render: () => {
    const [username, setUsername] = React.useState('');
    const [isChecking, setIsChecking] = React.useState(false);
    const [isAvailable, setIsAvailable] = React.useState<boolean | null>(null);
    const [validationState, setValidationState] = React.useState({
      minLength: false,
      maxLength: true,
      validChars: true,
      startsWithLetter: false,
      noConsecutiveUnderscores: true,
    });

    // Debounced availability check
    React.useEffect(() => {
      setIsAvailable(null);

      if (!username || username.length < 3) {
        setIsChecking(false);
        return;
      }

      // Check all rules pass before checking availability
      const allRulesPass = Object.values(validationState).every(Boolean);
      if (!allRulesPass) {
        setIsChecking(false);
        return;
      }

      setIsChecking(true);
      const timeoutId = setTimeout(async () => {
        const available = await checkUsernameAvailability(username);
        setIsAvailable(available);
        setIsChecking(false);
      }, 500);

      return () => clearTimeout(timeoutId);
    }, [username, validationState]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '');
      setUsername(value);
      setValidationState({
        minLength: usernameRules.minLength(value),
        maxLength: usernameRules.maxLength(value),
        validChars: usernameRules.validChars(value),
        startsWithLetter: usernameRules.startsWithLetter(value),
        noConsecutiveUnderscores: usernameRules.noConsecutiveUnderscores(value),
      });
    };

    const allRulesPass = Object.values(validationState).every(Boolean);
    const isValid = allRulesPass && isAvailable === true;
    const showError = username.length > 0 && (!allRulesPass || isAvailable === false);

    const RuleItem = ({ passed, children }: { passed: boolean; children: React.ReactNode }) => (
      <Text
        render={<div />}
        size="1"
        color={passed ? 'success' : 'gray'}
        style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
      >
        {passed ? <Checkmark12 /> : <XMarkSmall12 />}
        {children}
      </Text>
    );

    return (
      <div style={{ width: 360 }}>
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <Text size="3" weight="bold">
            Choose your username
          </Text>
          <Text size="2" color="gray" style={{ display: 'block', marginTop: 'var(--space-1)' }}>
            This will be your unique identifier on the platform
          </Text>
        </div>

        <Field.Root name="username">
          <Field.Label>Username</Field.Label>

          <div style={{ position: 'relative' }}>
            <TextField.Root color={showError ? 'danger' : isValid ? 'success' : undefined}>
              <TextField.Slot style={{ paddingLeft: 12 }}>
                <Text size="2" color="gray">
                  yoursite.com/
                </Text>
              </TextField.Slot>
              <TextField.Input
                value={username}
                onChange={handleChange}
                placeholder="your_username"
                style={{ paddingLeft: 0 }}
              />
              <TextField.Slot style={{ paddingRight: 12 }}>
                {isChecking && <Spinner size="1" />}
                {!isChecking && isValid && (
                  <Text color="success">
                    <Checkmark12 />
                  </Text>
                )}
                {!isChecking && showError && (
                  <Text color="danger">
                    <XMarkSmall12 />
                  </Text>
                )}
              </TextField.Slot>
            </TextField.Root>
          </div>

          {/* Validation Rules */}
          <div
            style={{
              marginTop: 12,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-1)',
            }}
          >
            <RuleItem passed={validationState.minLength}>At least 3 characters</RuleItem>
            <RuleItem passed={validationState.maxLength}>No more than 20 characters</RuleItem>
            <RuleItem passed={validationState.startsWithLetter}>Starts with a letter</RuleItem>
            <RuleItem passed={validationState.noConsecutiveUnderscores}>No consecutive underscores</RuleItem>
          </div>

          {/* Availability Status */}
          {allRulesPass && username.length >= 3 && (
            <Callout.Root
              size="1"
              color={isChecking ? 'gray' : isAvailable ? 'success' : 'danger'}
              style={{ marginTop: 12 }}
            >
              <Callout.Icon>
                {isChecking ? <Spinner size="1" /> : isAvailable ? <Checkmark12 /> : <XMarkSmall12 />}
              </Callout.Icon>
              <Callout.Text>
                {isChecking
                  ? 'Checking availability...'
                  : isAvailable
                    ? 'Username is available!'
                    : 'Username is already taken'}
              </Callout.Text>
            </Callout.Root>
          )}

          {/* Suggestions when taken */}
          {isAvailable === false && (
            <div style={{ marginTop: 'var(--space-2)' }}>
              <Text size="1" color="gray">
                Try one of these:
              </Text>
              <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-1)', flexWrap: 'wrap' }}>
                {[`${username}_dev`, `${username}123`, `the_${username}`].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="soft"
                    size="1"
                    onClick={() => {
                      setUsername(suggestion);
                      setValidationState({
                        minLength: usernameRules.minLength(suggestion),
                        maxLength: usernameRules.maxLength(suggestion),
                        validChars: usernameRules.validChars(suggestion),
                        startsWithLetter: usernameRules.startsWithLetter(suggestion),
                        noConsecutiveUnderscores: usernameRules.noConsecutiveUnderscores(suggestion),
                      });
                    }}
                  >
                    @{suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </Field.Root>

        {/* Submit button */}
        <Button variant="solid" disabled={!isValid} style={{ width: '100%', marginTop: 'var(--space-4)' }}>
          {isChecking ? 'Checking...' : isValid ? 'Continue' : 'Choose a username'}
        </Button>
      </div>
    );
  },
};

// ============================================================================
// Form Example
// ============================================================================

const planItems = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro - $9/mo' },
  { value: 'enterprise', label: 'Enterprise - $29/mo' },
];

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

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <Fieldset.Root>
            <Fieldset.Legend>Account Information</Fieldset.Legend>

            <Field.Root name="fullName">
              <Field.Label>Full name</Field.Label>
              <TextField.Root>
                <TextField.Input placeholder="John Doe" required />
              </TextField.Root>
              <Field.Error match="valueMissing">Full name is required</Field.Error>
            </Field.Root>

            <Field.Root name="email">
              <Field.Label>Email</Field.Label>
              <TextField.Root>
                <TextField.Input type="email" placeholder="you@example.com" required />
              </TextField.Root>
              <Field.Error match="valueMissing">Email is required</Field.Error>
              <Field.Error match="typeMismatch">Please enter a valid email</Field.Error>
            </Field.Root>
          </Fieldset.Root>

          <Fieldset.Root>
            <Fieldset.Legend>Plan Details</Fieldset.Legend>

            <Field.Root name="plan">
              <Field.Label>Plan</Field.Label>
              <Select.Root items={planItems} defaultValue="free">
                <Select.Trigger style={{ width: '100%' }} />
                <Select.Content>
                  {planItems.map((item) => (
                    <Select.Item key={item.value} value={item.value}>
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Field.Root>

            <Field.Root name="teamSize">
              <Field.Label>Team size</Field.Label>
              <NumberField.Root defaultValue={1} min={1} max={100} name="teamSize">
                <NumberField.Input />
              </NumberField.Root>
              <Field.Description>Number of team members (1-100)</Field.Description>
            </Field.Root>
          </Fieldset.Root>

          <Fieldset.Root>
            <Fieldset.Legend>Preferences</Fieldset.Legend>

            <Field.Root name="notifications">
              <Field.Label style={{ justifyContent: 'space-between' }}>
                Email notifications
                <Switch name="notifications" defaultChecked />
              </Field.Label>
            </Field.Root>

            <Field.Root name="terms">
              <Field.Label weight="regular">
                <Checkbox name="terms" required />I agree to the Terms of Service
              </Field.Label>
            </Field.Root>
          </Fieldset.Root>

          <Button type="submit" variant="solid">
            Create Account
          </Button>
        </form>

        {formData && (
          <Callout.Root color="success">
            <Callout.Icon>
              <Checkmark12 />
            </Callout.Icon>
            <Callout.Text>
              Form submitted successfully!
              <pre
                style={{
                  marginTop: 'var(--space-2)',
                  fontSize: 'var(--font-size-1)',
                  fontFamily: 'monospace',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                  fontWeight: 'normal',
                }}
              >
                {JSON.stringify(formData, null, 2)}
              </pre>
            </Callout.Text>
          </Callout.Root>
        )}
      </div>
    );
  },
};

// ============================================================================
// Field Custom Validation
// ============================================================================

// Simulated username check
async function checkUsername(username: string): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const taken = ['admin', 'root', 'system', 'moderator', 'support'];
  return !taken.includes(username.toLowerCase());
}

export const FieldCustomValidation: Story = {
  name: 'Field Custom Validation',
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Custom Validation
        </Heading>
        <Text size="2" style={{ marginBottom: 12, display: 'block' }}>
          You can add custom validation logic by passing a synchronous or asynchronous validation function to the{' '}
          <Code>validate</Code> prop, which runs after native validations have passed.
        </Text>
        <Text size="2" style={{ marginBottom: 12, display: 'block' }}>
          Use the <Code>validationMode</Code> prop to configure when validation is performed:
        </Text>
        <ul style={{ margin: 0, marginBottom: 12, paddingLeft: 20 }}>
          <Text size="2" render={<li />} style={{ marginBottom: 4 }}>
            1. <Code>onSubmit</Code> (default) validates all fields when the containing <Code>{'<Form>'}</Code> is
            submitted, afterwards invalid fields revalidate when their value changes.
          </Text>
          <Text size="2" render={<li />} style={{ marginBottom: 4 }}>
            2. <Code>onBlur</Code> validates the field when focus moves away.
          </Text>
          <Text size="2" render={<li />}>
            3. <Code>onChange</Code> validates the field when the value changes.
          </Text>
        </ul>
        <Text size="2" style={{ marginBottom: 16, display: 'block' }}>
          <Code>validationDebounceTime</Code> can be used to debounce the function in use cases such as asynchronous
          requests or text fields that validate <Code>onChange</Code>.
        </Text>

        <Field.Root
          name="username"
          validationMode="onChange"
          validationDebounceTime={300}
          validate={async (value) => {
            const username = value as string;
            if (!username || username.length < 3) {
              return null; // Let native validation handle this
            }
            if (username === 'admin') {
              return 'Reserved for system use.';
            }
            const isAvailable = await checkUsername(username);
            if (!isAvailable) {
              return `${username} is unavailable.`;
            }
            return null;
          }}
        >
          <Field.Label>Username</Field.Label>
          <TextField.Root>
            <TextField.Input required minLength={3} placeholder="Enter username" />
          </TextField.Root>
          <Field.Description>Try "admin", "root", or "system" to see validation errors</Field.Description>
          <Field.Error match="valueMissing">Username is required</Field.Error>
          <Field.Error match="tooShort">Username must be at least 3 characters</Field.Error>
          <Field.Error match="customError" />
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// Validity
// ============================================================================

export const Validity: Story = {
  name: 'Validity',
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Validity
        </Heading>
        <Text size="2" style={{ marginBottom: 16, display: 'block' }}>
          Used to display a custom message based on the field's validity. Requires children to be a function that
          accepts field validity state as an argument.
        </Text>

        <Field.Root name="password" validationMode="onChange">
          <Field.Label>Password</Field.Label>
          <TextField.Root>
            <TextField.Input
              type="password"
              placeholder="Enter a strong password"
              required
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </TextField.Root>
          <Field.Validity>
            {(state) => {
              const value = (state.value as string) || '';
              const hasMinLength = value.length >= 8;
              const hasUppercase = /[A-Z]/.test(value);
              const hasLowercase = /[a-z]/.test(value);
              const hasNumber = /\d/.test(value);

              return (
                <ul
                  style={{
                    margin: 0,
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  <Text size="2" render={<li />} color={hasMinLength ? 'success' : 'danger'}>
                    {hasMinLength ? '✓' : '✗'} At least 8 characters
                  </Text>
                  <Text size="2" render={<li />} color={hasUppercase ? 'success' : 'danger'}>
                    {hasUppercase ? '✓' : '✗'} One uppercase letter
                  </Text>
                  <Text size="2" render={<li />} color={hasLowercase ? 'success' : 'danger'}>
                    {hasLowercase ? '✓' : '✗'} One lowercase letter
                  </Text>
                  <Text size="2" render={<li />} color={hasNumber ? 'success' : 'danger'}>
                    {hasNumber ? '✓' : '✗'} One number
                  </Text>
                </ul>
              );
            }}
          </Field.Validity>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// Disabled State
// ============================================================================

const disabledPlanItems = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise' },
];

export const DisabledState: Story = {
  name: 'Disabled State',
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: 320 }}>
        <Field.Root name="readonlyField">
          <Field.Label>Account ID (read-only)</Field.Label>
          <TextField.Root>
            <TextField.Input defaultValue="ACC-123456" readOnly />
          </TextField.Root>
          <Field.Description>This field cannot be modified</Field.Description>
        </Field.Root>

        <Field.Root name="lockedPlan">
          <Field.Label>Current Plan</Field.Label>
          <Select.Root defaultValue="enterprise" disabled items={disabledPlanItems}>
            <Select.Trigger style={{ width: '100%' }} />
            <Select.Content>
              {disabledPlanItems.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <Field.Description>Contact support to change your plan</Field.Description>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// All Validity States
// ============================================================================

export const AllValidityStates: Story = {
  name: 'All Validity States',
  render: function AllValidityStatesStory() {
    return (
      <div style={{ width: 480 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          ValidityState Reference
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          The{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank">
            ValidityState
          </Link>{' '}
          interface represents the validity states that an element can be in. Use the <Code>match</Code> prop on{' '}
          <Code>{'<Field.Error>'}</Code> to display errors for specific validity states.
        </Text>

        <Form.Root>
          {/* valueMissing */}
          <Fieldset.Root>
            <Fieldset.Legend>
              <Code>valueMissing</Code>
            </Fieldset.Legend>
            <Text size="1" color="gray" style={{ marginBottom: 8, display: 'block' }}>
              Returns <Code>true</Code> if the element has a <Code>required</Code> attribute, but no value.
            </Text>
            <Field.Root name="valueMissing">
              <Field.Label>Required Field</Field.Label>
              <TextField.Root>
                <TextField.Input required placeholder="This field is required" />
              </TextField.Root>
              <Field.Error match="valueMissing">This field is required</Field.Error>
            </Field.Root>
          </Fieldset.Root>

          <Separator size="4" />

          {/* typeMismatch */}
          <Fieldset.Root>
            <Fieldset.Legend>
              <Code>typeMismatch</Code>
            </Fieldset.Legend>
            <Text size="1" color="gray" style={{ marginBottom: 8, display: 'block' }}>
              Returns <Code>true</Code> if the value is not in the required syntax (when <Code>type</Code> is{' '}
              <Code>email</Code> or <Code>url</Code>).
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Field.Root name="typeMismatchEmail">
                <Field.Label>Email</Field.Label>
                <TextField.Root>
                  <TextField.Input type="email" placeholder="user@example.com" defaultValue="not-an-email" />
                </TextField.Root>
                <Field.Error match="typeMismatch">Please enter a valid email address</Field.Error>
              </Field.Root>
              <Field.Root name="typeMismatchUrl">
                <Field.Label>URL</Field.Label>
                <TextField.Root>
                  <TextField.Input type="url" placeholder="https://example.com" defaultValue="not-a-url" />
                </TextField.Root>
                <Field.Error match="typeMismatch">Please enter a valid URL</Field.Error>
              </Field.Root>
            </div>
          </Fieldset.Root>

          <Separator size="4" />

          {/* tooShort */}
          <Fieldset.Root>
            <Fieldset.Legend>
              <Code>tooShort</Code>
            </Fieldset.Legend>
            <Text size="1" color="gray" style={{ marginBottom: 8, display: 'block' }}>
              Returns <Code>true</Code> if the value fails to meet the specified <Code>minLength</Code>. Type 1-2
              characters and submit to see the error.
            </Text>
            <Field.Root name="tooShort">
              <Field.Label>Username (min 3 characters)</Field.Label>
              <TextField.Root>
                <TextField.Input minLength={3} required placeholder="Enter username" />
              </TextField.Root>
              <Field.Error match="tooShort">Username must be at least 3 characters</Field.Error>
              <Field.Error match="valueMissing">Username is required</Field.Error>
            </Field.Root>
          </Fieldset.Root>

          <Separator size="4" />

          {/* tooLong */}
          <Fieldset.Root>
            <Fieldset.Legend>
              <Code>tooLong</Code>
            </Fieldset.Legend>
            <Text size="1" color="gray" style={{ marginBottom: 8, display: 'block' }}>
              Returns <Code>true</Code> if the value exceeds the specified <Code>maxLength</Code>. Note: Browsers
              typically prevent typing beyond <Code>maxLength</Code>, so this state is rarely triggered in practice.
            </Text>
            <Field.Root name="tooLong">
              <Field.Label>Comment (max 20 characters)</Field.Label>
              <TextField.Root>
                <TextField.Input maxLength={20} placeholder="Type here..." />
              </TextField.Root>
              <Field.Description>
                Browsers prevent typing beyond maxLength, so this error rarely appears
              </Field.Description>
              <Field.Error match="tooLong">Comment must not exceed 20 characters</Field.Error>
            </Field.Root>
          </Fieldset.Root>

          <Separator size="4" />

          {/* patternMismatch */}
          <Fieldset.Root>
            <Fieldset.Legend>
              <Code>patternMismatch</Code>
            </Fieldset.Legend>
            <Text size="1" color="gray" style={{ marginBottom: 8, display: 'block' }}>
              Returns <Code>true</Code> if the value does not match the specified <Code>pattern</Code> regex.
            </Text>
            <Field.Root name="patternMismatch">
              <Field.Label>Phone Number</Field.Label>
              <TextField.Root>
                <TextField.Input
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  defaultValue="invalid"
                />
              </TextField.Root>
              <Field.Description>Format: 123-456-7890</Field.Description>
              <Field.Error match="patternMismatch">Please use the format: 123-456-7890</Field.Error>
            </Field.Root>
          </Fieldset.Root>

          <Separator size="4" />

          {/* rangeUnderflow / rangeOverflow */}
          <Fieldset.Root>
            <Fieldset.Legend>
              <Code>rangeUnderflow</Code> / <Code>rangeOverflow</Code>
            </Fieldset.Legend>
            <Text size="1" color="gray" style={{ marginBottom: 8, display: 'block' }}>
              <Code>rangeUnderflow</Code>: Returns <Code>true</Code> if the value is less than the <Code>min</Code>{' '}
              attribute.
              <br />
              <Code>rangeOverflow</Code>: Returns <Code>true</Code> if the value is greater than the <Code>max</Code>{' '}
              attribute.
            </Text>
            <Field.Root name="rangeValidation">
              <Field.Label>Quantity (1-100)</Field.Label>
              <NumberField.Root min={1} max={100} defaultValue={150}>
                <NumberField.Input placeholder="Enter quantity" />
              </NumberField.Root>
              <Field.Error match="rangeUnderflow">Quantity must be at least 1</Field.Error>
              <Field.Error match="rangeOverflow">Quantity must not exceed 100</Field.Error>
            </Field.Root>
          </Fieldset.Root>

          <Separator size="4" />

          {/* stepMismatch */}
          <Fieldset.Root>
            <Fieldset.Legend>
              <Code>stepMismatch</Code>
            </Fieldset.Legend>
            <Text size="1" color="gray" style={{ marginBottom: 8, display: 'block' }}>
              Returns <Code>true</Code> if the value does not fit the rules determined by the <Code>step</Code>{' '}
              attribute (not evenly divisible by the step value).
            </Text>
            <Field.Root name="stepMismatch">
              <Field.Label>Price (increments of $0.50)</Field.Label>
              <NumberField.Root step={0.5} min={0} defaultValue={1.25}>
                <NumberField.Input placeholder="0.00" />
              </NumberField.Root>
              <Field.Error match="stepMismatch">Price must be in increments of $0.50</Field.Error>
            </Field.Root>
          </Fieldset.Root>

          <Separator size="4" />

          {/* badInput */}
          <Fieldset.Root>
            <Fieldset.Legend>
              <Code>badInput</Code>
            </Fieldset.Legend>
            <Text size="1" color="gray" style={{ marginBottom: 8, display: 'block' }}>
              Returns <Code>true</Code> if the user has provided input that the browser is unable to convert. This
              commonly occurs with date, time, or number inputs when partial or malformed values are entered.
            </Text>
            <Field.Root name="badInput">
              <Field.Label>Event Date</Field.Label>
              <TextField.Root>
                <TextField.Input type="date" />
              </TextField.Root>
              <Field.Description>
                Enter an incomplete date (e.g., clear part of the date) to trigger badInput
              </Field.Description>
              <Field.Error match="badInput">Please enter a valid date</Field.Error>
            </Field.Root>
          </Fieldset.Root>

          <Separator size="4" />

          {/* customError - using Field's validate prop */}
          <Fieldset.Root>
            <Fieldset.Legend>
              <Code>customError</Code>
            </Fieldset.Legend>
            <Text size="1" color="gray" style={{ marginBottom: 8, display: 'block' }}>
              Returns <Code>true</Code> when the element's custom validity message has been set to a non-empty string.
              Use the <Code>validate</Code> prop on <Code>{'<Field.Root>'}</Code> to set custom validation.
            </Text>
            <Field.Root
              name="customError"
              validate={(value) => {
                const str = value as string;
                if (str && str.toLowerCase().includes('password')) {
                  return 'Value cannot contain the word "password"';
                }
                return null;
              }}
            >
              <Field.Label>Security Question Answer</Field.Label>
              <TextField.Root>
                <TextField.Input placeholder="Enter your answer" />
              </TextField.Root>
              <Field.Description>Try typing "password" to trigger custom validation</Field.Description>
              <Field.Error />
            </Field.Root>
          </Fieldset.Root>

          <Separator size="4" />

          {/* Submit to test all */}
          <Callout.Root color="info" size="1">
            <Callout.Text>
              Submit the form to see validation errors. Each field demonstrates a different <Code>ValidityState</Code>{' '}
              property.
            </Callout.Text>
          </Callout.Root>

          <Button type="submit" style={{ width: '100%' }}>
            Validate All Fields
          </Button>
        </Form.Root>
      </div>
    );
  },
};
