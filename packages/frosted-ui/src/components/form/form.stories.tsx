import type { Meta, StoryObj } from '@storybook/react';
import { useForm as useTanStackForm } from '@tanstack/react-form';
import * as React from 'react';
import { Controller, useForm as useReactHookForm } from 'react-hook-form';
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

// ============================================================================
// React Hook Form Integration
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
                  <TextField.Input placeholder="Enter last name" {...field} />
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
// TanStack Form Integration
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
                    placeholder="Enter username"
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
                    placeholder="Tell us about yourself (optional)"
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
