import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { z } from 'zod';
import { Button, Code, Field, Form, Heading, Link, Separator, Text, TextField } from '../index';

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
// Submit with a Server Function
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
// Submit form values as a JavaScript object
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
              <TextField.Input placeholder="Enter name" />
            </TextField.Root>
          </Field.Root>
          <Field.Root name="age">
            <Field.Label>Age</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="Enter age" />
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
// Using with Zod
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
              <TextField.Input placeholder="Enter name" />
            </TextField.Root>
            <Field.Error />
          </Field.Root>
          <Field.Root name="age">
            <Field.Label>Age</Field.Label>
            <TextField.Root>
              <TextField.Input placeholder="Enter age" />
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
// Server-side Validation
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
              <TextField.Input required placeholder="Enter promo code" />
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
// Constraint Validation
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
// Displaying Errors
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
              <TextField.Input type="email" required placeholder="Leave empty and submit" />
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
              <TextField.Input required minLength={5} placeholder="Type less than 5 chars" />
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
              <TextField.Input required placeholder="Required field" />
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
