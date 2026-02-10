import { Plus16 } from '@frosted-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm as useTanStackForm } from '@tanstack/react-form';
import * as React from 'react';
import { Controller, useForm as useReactHookForm } from 'react-hook-form';
import { z } from 'zod';
import {
  AlertDialog,
  Button,
  Callout,
  Card,
  Checkbox,
  Code,
  Field,
  Fieldset,
  Form,
  Heading,
  Link,
  Progress,
  Select,
  Separator,
  Spinner,
  Switch,
  Text,
  TextField,
} from '../index';

const meta = {
  title: 'Forms/Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// 1. Getting Started
// ============================================================================

export const GettingStarted: Story = {
  name: 'Getting Started',
  render: function GettingStartedStory() {
    const [loading, setLoading] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Getting Started
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          A minimal form using <Code>{'<Form.Root>'}</Code>, <Code>{'<Field.Root>'}</Code>, and{' '}
          <Code>{'<TextField>'}</Code>. Add validation with HTML attributes like <Code>required</Code> and display
          errors with <Code>{'<Field.Error>'}</Code>.
        </Text>

        <Form.Root
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 500));
            setSubmitted(true);
            setLoading(false);
          }}
        >
          <Field.Root name="email">
            <Field.Label>Email</Field.Label>
            <TextField.Root>
              <TextField.Input type="email" required placeholder="you@example.com" />
            </TextField.Root>
            <Field.Error match="valueMissing">Email is required</Field.Error>
            <Field.Error match="typeMismatch">Please enter a valid email</Field.Error>
          </Field.Root>

          <Field.Root name="message">
            <Field.Label>Message</Field.Label>
            <TextField.Root>
              <TextField.Input required placeholder="How can we help?" />
            </TextField.Root>
            <Field.Description>We'll get back to you within 24 hours</Field.Description>
            <Field.Error match="valueMissing">Message is required</Field.Error>
          </Field.Root>

          <Button type="submit" loading={loading}>
            Send Message
          </Button>
        </Form.Root>

        {submitted && (
          <Callout.Root color="success" size="1" style={{ marginTop: 16 }}>
            <Callout.Text>Message sent successfully!</Callout.Text>
          </Callout.Root>
        )}
      </div>
    );
  },
};

// ============================================================================
// 2. Constraint Validation
// ============================================================================

export const ConstraintValidation: Story = {
  name: 'Constraint Validation',
  render: function ConstraintValidationStory() {
    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Constraint Validation
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Form components support native HTML validation attributes for many validation rules: <Code>required</Code>,{' '}
          <Code>minLength</Code>, <Code>maxLength</Code>, <Code>pattern</Code>, and <Code>step</Code>.
        </Text>

        <Form.Root>
          <Field.Root name="username">
            <Field.Label>Username</Field.Label>
            <TextField.Root>
              <TextField.Input required minLength={3} maxLength={20} placeholder="3-20 characters" />
            </TextField.Root>
            <Field.Error match="valueMissing">Username is required</Field.Error>
            <Field.Error match="tooShort">Username must be at least 3 characters</Field.Error>
            <Field.Error match="tooLong">Username must be at most 20 characters</Field.Error>
          </Field.Root>

          <Field.Root name="email">
            <Field.Label>Email</Field.Label>
            <TextField.Root>
              <TextField.Input type="email" required placeholder="user@example.com" />
            </TextField.Root>
            <Field.Error match="valueMissing">Email is required</Field.Error>
            <Field.Error match="typeMismatch">Please enter a valid email address</Field.Error>
          </Field.Root>

          <Field.Root name="website">
            <Field.Label>Website</Field.Label>
            <TextField.Root>
              <TextField.Input type="url" required pattern="https?://.*" placeholder="https://example.com" />
            </TextField.Root>
            <Field.Error match="valueMissing">Website URL is required</Field.Error>
            <Field.Error match="typeMismatch">Please enter a valid URL</Field.Error>
            <Field.Error match="patternMismatch">URL must start with http:// or https://</Field.Error>
          </Field.Root>

          <Button type="submit">Submit</Button>
        </Form.Root>
      </div>
    );
  },
};

// ============================================================================
// 3. Required Controls (Select, Checkbox, Switch)
// ============================================================================

const countryItems = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
];

export const RequiredControls: Story = {
  name: 'Required Controls',
  render: function RequiredControlsStory() {
    const [loading, setLoading] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubmitted(true);
      setLoading(false);
    };

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Required Controls
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Non-text controls like <Code>{'<Select>'}</Code>, <Code>{'<Checkbox>'}</Code>, and <Code>{'<Switch>'}</Code>{' '}
          support the <Code>required</Code> and <Code>name</Code> props for native form validation. Use{' '}
          <Code>{'match="valueMissing"'}</Code> to show validation errors.
        </Text>

        <Form.Root onSubmit={handleSubmit}>
          {/* Required Select */}
          <Field.Root name="country">
            <Field.Label>Country</Field.Label>
            <Select.Root name="country" required items={countryItems}>
              <Select.Trigger placeholder="Select a country" />
              <Select.Content>
                {countryItems.map((item) => (
                  <Select.Item key={item.value} value={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
            <Field.Error match="valueMissing">Please select a country</Field.Error>
          </Field.Root>

          {/* Required Checkbox */}
          <Field.Root name="terms">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <Checkbox name="terms" required />
              <Field.Label weight="regular" style={{ cursor: 'pointer' }}>
                I accept the terms and conditions
              </Field.Label>
            </div>
            <Field.Error match="valueMissing">You must accept the terms and conditions</Field.Error>
          </Field.Root>

          {/* Required Switch */}
          <Field.Root name="notifications">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <div>
                <Field.Label style={{ marginBottom: 0 }}>Enable Notifications</Field.Label>
                <Field.Description>Required for account updates</Field.Description>
              </div>
              <Switch name="notifications" required />
            </div>
            <Field.Error match="valueMissing">Notifications must be enabled to continue</Field.Error>
          </Field.Root>

          <Button type="submit" loading={loading}>
            Submit
          </Button>
        </Form.Root>

        {submitted && (
          <Callout.Root color="success" size="1" style={{ marginTop: 16 }}>
            <Callout.Text>Form submitted successfully!</Callout.Text>
          </Callout.Root>
        )}
      </div>
    );
  },
};

// ============================================================================
// 4. Displaying Errors
// ============================================================================

export const DisplayingErrors: Story = {
  name: 'Displaying Errors',
  render: function DisplayingErrorsStory() {
    return (
      <div style={{ width: 360 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Displaying Errors
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Use <Code>{'<Field.Error>'}</Code> without children to automatically display the browser's native error
          message. Use the <Code>match</Code> prop to customize messages based on the validity state.
        </Text>

        <Form.Root>
          <Field.Root name="autoMessage">
            <Field.Label>Auto Message (native)</Field.Label>
            <TextField.Root>
              <TextField.Input type="email" required placeholder="you@example.com" />
            </TextField.Root>
            <Field.Description>
              Uses <Code>{'<Field.Error />'}</Code> without children
            </Field.Description>
            <Field.Error />
          </Field.Root>

          <Separator size="4" />

          <Field.Root name="customMessages">
            <Field.Label>Custom Messages</Field.Label>
            <TextField.Root>
              <TextField.Input required minLength={5} placeholder="hello" />
            </TextField.Root>
            <Field.Description>
              Uses <Code>match</Code> prop for specific validity states
            </Field.Description>
            <Field.Error match="valueMissing">This field cannot be empty</Field.Error>
            <Field.Error match="tooShort">Please enter at least 5 characters</Field.Error>
          </Field.Root>

          <Separator size="4" />

          <Field.Root name="alwaysShow">
            <Field.Label>Always Show Error</Field.Label>
            <TextField.Root>
              <TextField.Input required placeholder="abc123" />
            </TextField.Root>
            <Field.Description>
              Uses <Code>{'match={true}'}</Code> to always show when invalid
            </Field.Description>
            <Field.Error match={true}>This field is invalid</Field.Error>
          </Field.Root>

          <Button type="submit">Submit</Button>
        </Form.Root>
      </div>
    );
  },
};

// ============================================================================
// 5. Form Reset
// ============================================================================

export const FormReset: Story = {
  name: 'Form Reset',
  render: function FormResetStory() {
    const formRef = React.useRef<HTMLFormElement>(null);
    const [result, setResult] = React.useState<Record<string, unknown> | null>(null);
    const [loading, setLoading] = React.useState(false);

    const handleReset = () => {
      formRef.current?.reset();
      setResult(null);
    };

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Form Reset
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Use a ref to access the native form element and call <Code>reset()</Code> to clear all fields. The native
          reset restores inputs to their <Code>defaultValue</Code> (empty if not set).
        </Text>

        <Form.Root
          ref={formRef}
          onFormSubmit={async (formValues) => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 500));
            setResult(formValues);
            setLoading(false);
          }}
        >
          <Field.Root name="firstName">
            <Field.Label>First Name</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="Jane" />
            </TextField.Root>
          </Field.Root>

          <Field.Root name="lastName">
            <Field.Label>Last Name</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="Smith" />
            </TextField.Root>
          </Field.Root>

          <Field.Root name="email">
            <Field.Label>Email</Field.Label>
            <TextField.Root>
              <TextField.Input type="email" placeholder="jane@example.com" />
            </TextField.Root>
          </Field.Root>

          <div style={{ display: 'flex', gap: 8 }}>
            <Button type="submit" loading={loading} style={{ flex: 1 }} variant="solid">
              Submit
            </Button>
            <Button type="button" variant="surface" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Form.Root>

        {result && (
          <pre style={{ marginTop: 16, fontSize: 12, color: 'var(--gray-11)' }}>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    );
  },
};

// ============================================================================
// 6. Submit form values as a JavaScript object
// ============================================================================

export const SubmitAsJavaScriptObject: Story = {
  name: 'Submit form values as a JavaScript object',
  render: function SubmitAsObjectStory() {
    const [result, setResult] = React.useState<Record<string, unknown> | null>(null);
    const [loading, setLoading] = React.useState(false);

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Submit form values as a JavaScript object
        </Heading>
        <Text size="2" style={{ marginBottom: 16, display: 'block' }}>
          You can use <Code>onFormSubmit</Code> instead of the native <Code>onSubmit</Code> to access form values as a
          JavaScript object. This is useful when you need to transform the values before submission, or integrate with
          3rd party APIs.
        </Text>
        <Form.Root
          onFormSubmit={async (formValues) => {
            setLoading(true);
            // Mimic an API call
            await new Promise((resolve) => setTimeout(resolve, 500));
            setResult(formValues);
            setLoading(false);
          }}
        >
          <Field.Root name="name">
            <Field.Label>Name</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="Jane Smith" />
            </TextField.Root>
          </Field.Root>
          <Field.Root name="age">
            <Field.Label>Age</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="25" />
            </TextField.Root>
          </Field.Root>
          <Button type="submit" loading={loading}>
            Submit
          </Button>
        </Form.Root>
        {result && (
          <pre style={{ marginTop: 16, fontSize: 12, color: 'var(--gray-11)' }}>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    );
  },
};

// ============================================================================
// 7. Server-side Validation
// ============================================================================

async function submitToServer(formData: { promoCode: string }): Promise<{ success: boolean; errors: Form.Errors }> {
  // Mimic a server response
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate server-side validation
  if (formData.promoCode === 'EXPIRED') {
    return {
      success: false,
      errors: {
        promoCode: 'This promo code has expired',
      },
    };
  }

  if (formData.promoCode === 'INVALID') {
    return {
      success: false,
      errors: {
        promoCode: 'Invalid promo code',
      },
    };
  }

  return { success: true, errors: {} };
}

export const ServerSideValidation: Story = {
  name: 'Server-side Validation',
  render: function ServerSideValidationStory() {
    const [errors, setErrors] = React.useState<Form.Errors>({});
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState<string | null>(null);

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Server-side Validation
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          You can pass errors returned by server-side validation to the <Code>errors</Code> prop, which will be merged
          into the client-side field state for display. Once a field's value changes, the error will be cleared.
        </Text>
        <Form.Root
          errors={errors}
          onSubmit={async (event) => {
            event.preventDefault();
            setLoading(true);
            setResult(null);
            const formData = new FormData(event.currentTarget);
            const response = await submitToServer({
              promoCode: formData.get('promoCode') as string,
            });
            setErrors(response.errors);
            if (response.success) {
              setResult('Promo code applied successfully!');
            }
            setLoading(false);
          }}
        >
          <Field.Root name="promoCode">
            <Field.Label>Promo Code</Field.Label>
            <TextField.Root>
              <TextField.Input required placeholder="SAVE20" />
            </TextField.Root>
            <Field.Description>Try "EXPIRED" or "INVALID" to see server errors</Field.Description>
            <Field.Error />
          </Field.Root>
          <Button type="submit" loading={loading}>
            Apply Code
          </Button>
        </Form.Root>
        {result && (
          <Text size="2" color="success" style={{ marginTop: 16, display: 'block' }}>
            {result}
          </Text>
        )}
      </div>
    );
  },
};

// ============================================================================
// 8. Conditional Fields
// ============================================================================

const accountTypeItems = [
  { value: 'personal', label: 'Personal' },
  { value: 'business', label: 'Business' },
];

const contactMethodItems = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'mail', label: 'Physical Mail' },
];

export const ConditionalFields: Story = {
  name: 'Conditional Fields',
  render: function ConditionalFieldsStory() {
    const [accountType, setAccountType] = React.useState('personal');
    const [contactMethod, setContactMethod] = React.useState('email');
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState<Record<string, unknown> | null>(null);

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Conditional Fields
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Show or hide fields based on user selections. Use controlled state to track selections and conditionally
          render fields.
        </Text>

        <Form.Root
          onFormSubmit={async (formValues) => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 500));
            setResult({ ...formValues, accountType, contactMethod });
            setLoading(false);
          }}
        >
          {/* Account Type Selection */}
          <Field.Root name="accountType">
            <Field.Label>Account Type</Field.Label>
            <Select.Root
              value={accountType}
              onValueChange={(value) => value && setAccountType(value)}
              items={accountTypeItems}
            >
              <Select.Trigger placeholder="Select account type" />
              <Select.Content>
                {accountTypeItems.map((item) => (
                  <Select.Item key={item.value} value={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Field.Root>

          {/* Conditional Business Fields */}
          {accountType === 'business' && (
            <>
              <Field.Root name="companyName">
                <Field.Label>Company Name</Field.Label>
                <TextField.Root>
                  <TextField.Input required placeholder="Acme Inc." />
                </TextField.Root>
                <Field.Error match="valueMissing">Company name is required for business accounts</Field.Error>
              </Field.Root>

              <Field.Root name="taxId">
                <Field.Label>Tax ID</Field.Label>
                <TextField.Root>
                  <TextField.Input placeholder="XX-XXXXXXX" />
                </TextField.Root>
                <Field.Description>Optional for billing purposes</Field.Description>
              </Field.Root>
            </>
          )}

          <Separator size="4" />

          {/* Contact Method Selection */}
          <Field.Root name="contactMethod">
            <Field.Label>Preferred Contact Method</Field.Label>
            <Select.Root
              value={contactMethod}
              onValueChange={(value) => value && setContactMethod(value)}
              items={contactMethodItems}
            >
              <Select.Trigger placeholder="Select contact method" />
              <Select.Content>
                {contactMethodItems.map((item) => (
                  <Select.Item key={item.value} value={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Field.Root>

          {/* Conditional Contact Fields */}
          {contactMethod === 'email' && (
            <Field.Root name="email">
              <Field.Label>Email Address</Field.Label>
              <TextField.Root>
                <TextField.Input type="email" required placeholder="you@example.com" />
              </TextField.Root>
              <Field.Error match="valueMissing">Email is required</Field.Error>
              <Field.Error match="typeMismatch">Please enter a valid email</Field.Error>
            </Field.Root>
          )}

          {contactMethod === 'phone' && (
            <Field.Root name="phone">
              <Field.Label>Phone Number</Field.Label>
              <TextField.Root>
                <TextField.Input type="tel" required placeholder="+1 (555) 000-0000" />
              </TextField.Root>
              <Field.Error match="valueMissing">Phone number is required</Field.Error>
            </Field.Root>
          )}

          {contactMethod === 'mail' && (
            <>
              <Field.Root name="address">
                <Field.Label>Street Address</Field.Label>
                <TextField.Root>
                  <TextField.Input required placeholder="123 Main St" />
                </TextField.Root>
                <Field.Error match="valueMissing">Address is required</Field.Error>
              </Field.Root>

              <div style={{ display: 'flex', gap: 8 }}>
                <Field.Root name="city" style={{ flex: 1 }}>
                  <Field.Label>City</Field.Label>
                  <TextField.Root>
                    <TextField.Input required placeholder="San Francisco" />
                  </TextField.Root>
                </Field.Root>

                <Field.Root name="zip" style={{ width: 100 }}>
                  <Field.Label>ZIP</Field.Label>
                  <TextField.Root>
                    <TextField.Input required placeholder="12345" />
                  </TextField.Root>
                </Field.Root>
              </div>
            </>
          )}

          <Button type="submit" loading={loading} style={{ marginTop: 8 }}>
            Submit
          </Button>
        </Form.Root>

        {result && (
          <pre style={{ marginTop: 16, fontSize: 12, color: 'var(--gray-11)' }}>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    );
  },
};

// ============================================================================
// 8. Dynamic Form Fields
// ============================================================================

type TeamMember = {
  id: string;
  name: string;
  email: string;
};

export const DynamicFormFields: Story = {
  name: 'Dynamic Form Fields',
  render: function DynamicFieldsStory() {
    const [members, setMembers] = React.useState<TeamMember[]>([{ id: '1', name: '', email: '' }]);
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState<TeamMember[] | null>(null);

    const addMember = () => {
      setMembers((prev) => [...prev, { id: crypto.randomUUID(), name: '', email: '' }]);
    };

    const removeMember = (id: string) => {
      setMembers((prev) => prev.filter((m) => m.id !== id));
    };

    const updateMember = (id: string, field: 'name' | 'email', value: string) => {
      setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, [field]: value } : m)));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setResult(members);
      setLoading(false);
    };

    return (
      <div style={{ width: 400 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Dynamic Form Fields
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Add and remove form fields dynamically. Store field data in an array and render fields using{' '}
          <Code>map()</Code>. Use unique IDs as keys for proper React reconciliation.
        </Text>

        <Form.Root onSubmit={handleSubmit}>
          {members.map((member, index) => (
            <Card key={member.id}>
              <Fieldset.Root
                style={{
                  borderRadius: 8,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                  <Fieldset.Legend variant="label" style={{ margin: 0 }}>
                    Member {index + 1}
                  </Fieldset.Legend>
                  {members.length > 1 && (
                    <Button size="1" type="button" variant="soft" color="gray" onClick={() => removeMember(member.id)}>
                      Remove
                    </Button>
                  )}
                </div>
                <Field.Root name={`member-${member.id}-name`}>
                  <TextField.Root size="2">
                    <TextField.Input
                      placeholder="Name"
                      value={member.name}
                      onChange={(e) => updateMember(member.id, 'name', e.target.value)}
                      required
                    />
                  </TextField.Root>
                  <Field.Error match="valueMissing">Name is required</Field.Error>
                </Field.Root>
                <Field.Root name={`member-${member.id}-email`}>
                  <TextField.Root size="2">
                    <TextField.Input
                      type="email"
                      placeholder="Email"
                      value={member.email}
                      onChange={(e) => updateMember(member.id, 'email', e.target.value)}
                      required
                    />
                  </TextField.Root>
                  <Field.Error match="valueMissing">Email is required</Field.Error>
                  <Field.Error match="typeMismatch">Please enter a valid email</Field.Error>
                </Field.Root>
              </Fieldset.Root>
            </Card>
          ))}

          <Button type="button" variant="surface" onClick={addMember} style={{ marginBottom: 16 }}>
            <Plus16 /> Add Team Member
          </Button>

          <Button type="submit" variant="solid" loading={loading} style={{ width: '100%' }}>
            Submit Team
          </Button>
        </Form.Root>

        {result && (
          <pre style={{ marginTop: 16, fontSize: 12, color: 'var(--gray-11)' }}>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    );
  },
};

// ============================================================================
// 10. Dirty State Warning
// ============================================================================

export const DirtyStateWarning: Story = {
  name: 'Dirty State Warning',
  render: function DirtyStateWarningStory() {
    const [formData, setFormData] = React.useState({
      title: '',
      content: '',
    });
    const [savedData, setSavedData] = React.useState({
      title: '',
      content: '',
    });
    const [showWarning, setShowWarning] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [pendingAction, setPendingAction] = React.useState<(() => void) | null>(null);
    const [hasSaved, setHasSaved] = React.useState(false);

    const isDirty = formData.title !== savedData.title || formData.content !== savedData.content;

    const handleSave = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSavedData(formData);
      setHasSaved(true);
      setLoading(false);
    };

    const handleDiscard = () => {
      setFormData(savedData);
    };

    const handleNavigateAway = (action: () => void) => {
      if (isDirty) {
        setPendingAction(() => action);
        setShowWarning(true);
      } else {
        action();
      }
    };

    const confirmDiscard = () => {
      setFormData(savedData);
      setShowWarning(false);
      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }
    };

    return (
      <div style={{ width: 360 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Dirty State Warning
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Track form changes to warn users before they lose unsaved work. Compare current values against saved values to
          determine the <Code>dirty</Code> state.
        </Text>

        {/* Status indicator - only show after first edit or save */}
        {(isDirty || hasSaved) && (
          <Callout.Root color={isDirty ? 'warning' : 'success'} size="1" style={{ marginBottom: 16 }}>
            <Callout.Icon>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'currentColor',
                }}
              />
            </Callout.Icon>
            <Callout.Text>{isDirty ? 'Unsaved changes' : 'All changes saved'}</Callout.Text>
          </Callout.Root>
        )}

        <Form.Root
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <Field.Root name="title">
            <Field.Label>Title</Field.Label>
            <TextField.Root>
              <TextField.Input
                placeholder="My document"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              />
            </TextField.Root>
          </Field.Root>

          <Field.Root name="content">
            <Field.Label>Content</Field.Label>
            <TextField.Root>
              <TextField.Input
                placeholder="Start writing..."
                value={formData.content}
                onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
              />
            </TextField.Root>
          </Field.Root>

          <div style={{ display: 'flex', gap: 8 }}>
            <Button type="submit" loading={loading} disabled={!isDirty} style={{ flex: 1 }} variant="solid">
              Save Changes
            </Button>
            <Button type="button" variant="soft" disabled={!isDirty} onClick={handleDiscard} color="danger">
              Discard
            </Button>
          </div>
        </Form.Root>

        <Separator size="4" style={{ marginTop: 24, marginBottom: 16 }} />

        {/* Simulated navigation */}
        <Text size="2" color="gray" style={{ marginBottom: 12, display: 'block' }}>
          Try navigating away with unsaved changes:
        </Text>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="soft" size="1" onClick={() => handleNavigateAway(() => alert('Navigated to Dashboard'))}>
            Dashboard
          </Button>
          <Button variant="soft" size="1" onClick={() => handleNavigateAway(() => alert('Navigated to Settings'))}>
            Settings
          </Button>
        </div>

        {/* Warning Dialog */}
        <AlertDialog.Root open={showWarning} onOpenChange={setShowWarning}>
          <AlertDialog.Content style={{ maxWidth: 400 }}>
            <AlertDialog.Title>Unsaved Changes</AlertDialog.Title>
            <AlertDialog.Description>
              You have unsaved changes. Are you sure you want to leave? Your changes will be lost.
            </AlertDialog.Description>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  Stay
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button variant="solid" color="danger" onClick={confirmDiscard}>
                  Discard Changes
                </Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    );
  },
};

// ============================================================================
// 10. Auto-save Form
// ============================================================================

export const AutoSaveForm: Story = {
  name: 'Auto-save Form',
  render: function AutoSaveStory() {
    const [formData, setFormData] = React.useState({
      title: '',
      description: '',
    });
    const [saveStatus, setSaveStatus] = React.useState<'idle' | 'saving' | 'saved'>('idle');
    const [lastSaved, setLastSaved] = React.useState<Date | null>(null);
    const saveTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const autoSave = React.useCallback(async () => {
      setSaveStatus('saving');
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSaveStatus('saved');
      setLastSaved(new Date());

      // Reset status after 2 seconds
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, []);

    const handleChange = (field: 'title' | 'description', value: string) => {
      const newData = { ...formData, [field]: value };
      setFormData(newData);

      // Clear existing timeout
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }

      // Set new timeout for auto-save (debounce 1 second)
      saveTimeoutRef.current = setTimeout(() => {
        if (newData.title || newData.description) {
          autoSave();
        }
      }, 1000);
    };

    // Cleanup on unmount
    React.useEffect(() => {
      return () => {
        if (saveTimeoutRef.current) {
          clearTimeout(saveTimeoutRef.current);
        }
      };
    }, []);

    return (
      <div style={{ width: 360 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Auto-save Form
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Automatically save form data after the user stops typing. Use <Code>setTimeout</Code> to debounce saves and
          prevent excessive API calls.
        </Text>

        {/* Save status indicator */}
        <Callout.Root
          color={saveStatus === 'saving' ? 'info' : saveStatus === 'saved' ? 'success' : 'gray'}
          size="1"
          style={{ marginBottom: 16 }}
        >
          <Callout.Icon>
            {saveStatus === 'saving' ? (
              <Spinner />
            ) : (
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'currentColor',
                }}
              />
            )}
          </Callout.Icon>
          <Callout.Text>
            {saveStatus === 'saving' && 'Saving...'}
            {saveStatus === 'saved' && 'All changes saved'}
            {saveStatus === 'idle' &&
              (lastSaved ? `Last saved ${lastSaved.toLocaleTimeString()}` : 'Start typing to auto-save')}
          </Callout.Text>
        </Callout.Root>

        <Form.Root>
          <Field.Root name="title">
            <Field.Label>Title</Field.Label>
            <TextField.Root>
              <TextField.Input
                placeholder="Project name"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
              />
            </TextField.Root>
          </Field.Root>

          <Field.Root name="description">
            <Field.Label>Description</Field.Label>
            <TextField.Root>
              <TextField.Input
                placeholder="What is this project about?"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
              />
            </TextField.Root>
            <Field.Description>Changes are saved automatically after you stop typing</Field.Description>
          </Field.Root>
        </Form.Root>

        {(formData.title || formData.description) && (
          <pre style={{ marginTop: 16, fontSize: 12, color: 'var(--gray-11)' }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        )}
      </div>
    );
  },
};

// ============================================================================
// 12. Multi-step Wizard Form
// ============================================================================

const WIZARD_STEPS = ['Account', 'Profile', 'Review'];

export const MultiStepWizardForm: Story = {
  name: 'Multi-step Wizard Form',
  render: function WizardFormStory() {
    const [currentStep, setCurrentStep] = React.useState(0);
    const [formData, setFormData] = React.useState({
      // Step 1: Account
      email: '',
      password: '',
      // Step 2: Profile
      fullName: '',
      username: '',
      // Step 3: Review (no new fields)
    });
    const [loading, setLoading] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const progress = ((currentStep + 1) / WIZARD_STEPS.length) * 100;

    const handleNext = () => {
      if (currentStep < WIZARD_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };

    const handleBack = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    const handleSubmit = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setLoading(false);
    };

    const updateField = (field: string, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

    if (submitted) {
      return (
        <div style={{ width: 360, textAlign: 'center' }}>
          <Heading size="3" style={{ marginBottom: 8 }}>
            Success!
          </Heading>
          <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
            Your account has been created successfully.
          </Text>
          <pre style={{ fontSize: 12, color: 'var(--gray-11)', textAlign: 'left' }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
          <Button
            style={{ marginTop: 16 }}
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(0);
              setFormData({ email: '', password: '', fullName: '', username: '' });
            }}
          >
            Start Over
          </Button>
        </div>
      );
    }

    return (
      <div style={{ width: 360 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Multi-step Wizard Form
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          Break complex forms into multiple steps. Use <Code>{'<Progress>'}</Code> to show completion status and manage
          form state across steps.
        </Text>

        {/* Progress indicator */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text size="2" weight="medium">
              Step {currentStep + 1} of {WIZARD_STEPS.length}: {WIZARD_STEPS[currentStep]}
            </Text>
            <Text size="2" color="gray">
              {Math.round(progress)}%
            </Text>
          </div>
          <Progress value={progress} max={100} />
        </div>

        <Form.Root
          onSubmit={(e) => {
            e.preventDefault();
            if (currentStep === WIZARD_STEPS.length - 1) {
              handleSubmit();
            } else {
              handleNext();
            }
          }}
        >
          {/* Step 1: Account */}
          {currentStep === 0 && (
            <>
              <Field.Root name="email">
                <Field.Label>Email</Field.Label>
                <TextField.Root>
                  <TextField.Input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </TextField.Root>
                <Field.Error match="valueMissing">Email is required</Field.Error>
                <Field.Error match="typeMismatch">Please enter a valid email</Field.Error>
              </Field.Root>

              <Field.Root name="password">
                <Field.Label>Password</Field.Label>
                <TextField.Root>
                  <TextField.Input
                    type="password"
                    required
                    minLength={8}
                    placeholder="At least 8 characters"
                    value={formData.password}
                    onChange={(e) => updateField('password', e.target.value)}
                  />
                </TextField.Root>
                <Field.Error match="valueMissing">Password is required</Field.Error>
                <Field.Error match="tooShort">Password must be at least 8 characters</Field.Error>
              </Field.Root>
            </>
          )}

          {/* Step 2: Profile */}
          {currentStep === 1 && (
            <>
              <Field.Root name="fullName">
                <Field.Label>Full Name</Field.Label>
                <TextField.Root>
                  <TextField.Input
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                  />
                </TextField.Root>
                <Field.Error match="valueMissing">Full name is required</Field.Error>
              </Field.Root>

              <Field.Root name="username">
                <Field.Label>Username</Field.Label>
                <TextField.Root>
                  <TextField.Input
                    required
                    minLength={3}
                    placeholder="johndoe"
                    value={formData.username}
                    onChange={(e) => updateField('username', e.target.value)}
                  />
                </TextField.Root>
                <Field.Error match="valueMissing">Username is required</Field.Error>
                <Field.Error match="tooShort">Username must be at least 3 characters</Field.Error>
              </Field.Root>
            </>
          )}

          {/* Step 3: Review */}
          {currentStep === 2 && (
            <div
              style={{
                padding: 16,
                borderRadius: 8,
                backgroundColor: 'var(--gray-a3)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <Heading size="2">Review Your Information</Heading>

              <div>
                <Text size="2" color="gray">
                  Email
                </Text>
                <Text size="2" weight="medium" style={{ display: 'block' }}>
                  {formData.email}
                </Text>
              </div>

              <div>
                <Text size="2" color="gray">
                  Password
                </Text>
                <Text size="2" weight="medium" style={{ display: 'block' }}>
                  {'•'.repeat(formData.password.length)}
                </Text>
              </div>

              <div>
                <Text size="2" color="gray">
                  Full Name
                </Text>
                <Text size="2" weight="medium" style={{ display: 'block' }}>
                  {formData.fullName}
                </Text>
              </div>

              <div>
                <Text size="2" color="gray">
                  Username
                </Text>
                <Text size="2" weight="medium" style={{ display: 'block' }}>
                  @{formData.username}
                </Text>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            {currentStep > 0 && (
              <Button type="button" variant="soft" onClick={handleBack} color="gray">
                Back
              </Button>
            )}
            <Button
              type="submit"
              loading={loading}
              style={{ flex: 1 }}
              variant={currentStep === WIZARD_STEPS.length - 1 ? 'solid' : 'soft'}
            >
              {currentStep === WIZARD_STEPS.length - 1 ? 'Create Account' : 'Continue'}
            </Button>
          </div>
        </Form.Root>
      </div>
    );
  },
};

// ============================================================================
// 12. Using with Zod
// ============================================================================

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.coerce.number({ message: 'Age must be a number' }).positive('Age must be a positive number'),
});

async function submitZodForm(formValues: Form.Values) {
  const result = schema.safeParse(formValues);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    errors: {},
  };
}

export const UsingWithZod: Story = {
  name: 'Using with Zod',
  render: function ZodStory() {
    const [errors, setErrors] = React.useState<Form.Errors>({});
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState<Record<string, unknown> | null>(null);

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Using with Zod
        </Heading>
        <Text size="2" style={{ marginBottom: 16, display: 'block' }}>
          When parsing the schema using <Code>schema.safeParse()</Code>, the{' '}
          <Code>result.error.flatten().fieldErrors</Code> data can be used to map the errors to each field's{' '}
          <Code>name</Code>.
        </Text>
        <Form.Root
          errors={errors}
          onFormSubmit={async (formValues) => {
            setLoading(true);
            setResult(null);
            const response = await submitZodForm(formValues);
            setErrors(response.errors);
            if (Object.keys(response.errors).length === 0) {
              setResult(formValues);
            }
            setLoading(false);
          }}
        >
          <Field.Root name="name">
            <Field.Label>Name</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="Jane Smith" />
            </TextField.Root>
            <Field.Error />
          </Field.Root>
          <Field.Root name="age">
            <Field.Label>Age</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="25" />
            </TextField.Root>
            <Field.Error />
          </Field.Root>
          <Button type="submit" loading={loading}>
            Submit
          </Button>
        </Form.Root>
        {result && (
          <pre style={{ marginTop: 16, fontSize: 12, color: 'var(--gray-11)' }}>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    );
  },
};

// ============================================================================
// 14. Submit with a Server Function
// ============================================================================

async function submitUsername(_previousState: { serverErrors?: Form.Errors }, formData: FormData) {
  // Mimic a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const username = formData.get('username') as string | null;

    if (username === 'admin') {
      return { success: false, serverErrors: { username: "'admin' is reserved for system use" } };
    }

    // 50% chance the username is taken
    const success = Math.random() > 0.5;

    if (!success) {
      return {
        serverErrors: { username: `${username} is unavailable` },
      };
    }
  } catch {
    return { serverErrors: { username: 'A server error has occurred' } };
  }

  return {};
}

export const SubmitWithServerFunction: Story = {
  name: 'Submit with a Server Function',
  render: function ServerFunctionStory() {
    const [state, formAction, loading] = React.useActionState<{ serverErrors?: Form.Errors }, FormData>(
      submitUsername,
      {},
    );

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          Submit with a Server Function
        </Heading>
        <Text size="2" style={{ marginBottom: 16, display: 'block' }}>
          Forms using <Code>useActionState</Code> can be submitted with a{' '}
          <Link
            href="https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-function"
            target="_blank"
            underline="always"
          >
            Server Function
          </Link>{' '}
          instead of <Code>onSubmit</Code>.
        </Text>
        <Form.Root errors={state.serverErrors} action={formAction}>
          <Field.Root name="username">
            <Field.Label>Username</Field.Label>
            <TextField.Root>
              <TextField.Input required defaultValue="admin" placeholder="e.g. alice132" />
            </TextField.Root>
            <Field.Error />
          </Field.Root>
          <Button type="submit" loading={loading}>
            Submit
          </Button>
        </Form.Root>
      </div>
    );
  },
};

// ============================================================================
// 15. React Hook Form Integration
// ============================================================================

type ReactHookFormData = {
  firstName: string;
  lastName: string;
  email: string;
};

export const ReactHookFormIntegration: Story = {
  name: 'React Hook Form Integration',
  render: function ReactHookFormStory() {
    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useReactHookForm<ReactHookFormData>({
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
    });

    const [result, setResult] = React.useState<ReactHookFormData | null>(null);

    const onSubmit = async (data: ReactHookFormData) => {
      // Mimic an API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setResult(data);
    };

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          React Hook Form Integration
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 12, display: 'block' }}>
          You can integrate Field components with{' '}
          <Link href="https://react-hook-form.com" target="_blank" underline="always">
            React Hook Form
          </Link>{' '}
          using the <Code>Controller</Code> component.
        </Text>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          The <Code>Controller</Code> wraps your input and provides <Code>field</Code> props (like <Code>onChange</Code>
          , <Code>onBlur</Code>, <Code>value</Code>) that connect it to the form state.
        </Text>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}
        >
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First name is required' }}
            render={({ field }) => (
              <Field.Root name={field.name} invalid={!!errors.firstName}>
                <Field.Label>First Name</Field.Label>
                <TextField.Root>
                  <TextField.Input placeholder="Enter first name" {...field} />
                </TextField.Root>
                {errors.firstName && <Field.Error match={true}>{errors.firstName.message}</Field.Error>}
              </Field.Root>
            )}
          />

          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last name is required' }}
            render={({ field }) => (
              <Field.Root name={field.name} invalid={!!errors.lastName}>
                <Field.Label>Last Name</Field.Label>
                <TextField.Root>
                  <TextField.Input placeholder="Smith" {...field} />
                </TextField.Root>
                {errors.lastName && <Field.Error match={true}>{errors.lastName.message}</Field.Error>}
              </Field.Root>
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <Field.Root name={field.name} invalid={!!errors.email}>
                <Field.Label>Email</Field.Label>
                <TextField.Root>
                  <TextField.Input type="email" placeholder="user@example.com" {...field} />
                </TextField.Root>
                {errors.email && <Field.Error match={true}>{errors.email.message}</Field.Error>}
              </Field.Root>
            )}
          />

          <Button type="submit" loading={isSubmitting}>
            Submit
          </Button>
        </form>

        {result && (
          <pre style={{ marginTop: 16, fontSize: 12, color: 'var(--gray-11)' }}>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    );
  },
};

// ============================================================================
// 16. TanStack Form Integration
// ============================================================================

type TanStackFormData = {
  username: string;
  bio: string;
};

export const TanStackFormIntegration: Story = {
  name: 'TanStack Form Integration',
  render: function TanStackFormStory() {
    const [result, setResult] = React.useState<TanStackFormData | null>(null);

    const form = useTanStackForm({
      defaultValues: {
        username: '',
        bio: '',
      } as TanStackFormData,
      onSubmit: async ({ value }) => {
        // Mimic an API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        setResult(value);
      },
    });

    return (
      <div style={{ width: 320 }}>
        <Heading size="3" style={{ marginBottom: 8 }}>
          TanStack Form Integration
        </Heading>
        <Text size="2" color="gray" style={{ marginBottom: 12, display: 'block' }}>
          You can integrate Field components with{' '}
          <Link href="https://tanstack.com/form" target="_blank" underline="always">
            TanStack Form
          </Link>{' '}
          using the <Code>form.Field</Code> component.
        </Text>
        <Text size="2" color="gray" style={{ marginBottom: 16, display: 'block' }}>
          TanStack Form provides fine-grained reactivity and supports async validation out of the box. Use{' '}
          <Code>field.state.meta</Code> to access validation errors.
        </Text>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}
        >
          <form.Field
            name="username"
            validators={{
              onChange: ({ value }) => {
                if (!value) return 'Username is required';
                if (value.length < 3) return 'Username must be at least 3 characters';
                return undefined;
              },
            }}
          >
            {(field) => (
              <Field.Root name={field.name} invalid={field.state.meta.errors.length > 0}>
                <Field.Label>Username</Field.Label>
                <TextField.Root>
                  <TextField.Input
                    placeholder="johndoe"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </TextField.Root>
                {field.state.meta.errors.length > 0 && (
                  <Field.Error match={true}>{field.state.meta.errors[0]}</Field.Error>
                )}
              </Field.Root>
            )}
          </form.Field>

          <form.Field
            name="bio"
            validators={{
              onChange: ({ value }) => {
                if (value && value.length > 100) return 'Bio must be 100 characters or less';
                return undefined;
              },
            }}
          >
            {(field) => (
              <Field.Root name={field.name} invalid={field.state.meta.errors.length > 0}>
                <Field.Label>Bio</Field.Label>
                <TextField.Root>
                  <TextField.Input
                    placeholder="Developer from NYC"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </TextField.Root>
                <Field.Description>Max 100 characters</Field.Description>
                {field.state.meta.errors.length > 0 && (
                  <Field.Error match={true}>{field.state.meta.errors[0]}</Field.Error>
                )}
              </Field.Root>
            )}
          </form.Field>

          <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => (
              <Button type="submit" loading={isSubmitting}>
                Submit
              </Button>
            )}
          </form.Subscribe>
        </form>

        {result && (
          <pre style={{ marginTop: 16, fontSize: 12, color: 'var(--gray-11)' }}>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    );
  },
};
