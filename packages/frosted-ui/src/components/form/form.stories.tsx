import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { z } from 'zod';
import { Button, Code, Field, Form, Heading, Link, Text, TextField } from '../index';

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
          <Button type="submit" disabled={loading}>
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
            // Mimic an API call
            await new Promise((resolve) => setTimeout(resolve, 500));
            setResult(formValues);
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
          <Button type="submit">Submit</Button>
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
            const response = await submitZodForm(formValues);
            setErrors(response.errors);
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
          <Button type="submit">Submit</Button>
        </Form.Root>
      </div>
    );
  },
};
