import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Avatar, Button, Card, Code, RadioButtonGroup, Text, Tooltip, radioGroupPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/RadioButtonGroup',
  component: RadioButtonGroup.Root,
  args: {
    disabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButtonGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    color: radioGroupPropDefs.color.default,
    highContrast: radioGroupPropDefs.highContrast.default,
  },
  render: (args) => (
    <RadioButtonGroup.Root defaultValue="1" {...args}>
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
        <RadioButtonGroup.Item value="1">
          <div
            style={{
              display: 'flex',
              padding: '8px 40px 8px 24px',
              borderRadius: 8,
              border: '1px solid var(--gray-a7)',
              gap: 'var(--space-2)',
              alignItems: 'center',
            }}
          >
            <RadioButtonGroup.Icon style={{ marginLeft: -12 }} />
            <Text>One</Text>
          </div>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="2">
          <div
            style={{
              display: 'flex',
              padding: '8px 40px 8px 24px',
              borderRadius: 8,
              border: '1px solid var(--gray-a7)',
              gap: 'var(--space-2)',
              alignItems: 'center',
            }}
          >
            <RadioButtonGroup.Icon style={{ marginLeft: -12 }} />
            <Text>Two</Text>
          </div>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="3">
          <div
            style={{
              display: 'flex',
              padding: '8px 40px 8px 24px',
              borderRadius: 8,
              border: '1px solid var(--gray-a7)',
              gap: 'var(--space-2)',
              alignItems: 'center',
            }}
          >
            <RadioButtonGroup.Icon style={{ marginLeft: -12 }} />
            <Text>Three</Text>
          </div>
        </RadioButtonGroup.Item>
      </div>
    </RadioButtonGroup.Root>
  ),
};

export const HighContrast: Story = {
  args: {
    color: radioGroupPropDefs.color.default,
    highContrast: true,
  },
  render: (args) => (
    <RadioButtonGroup.Root defaultValue="1" {...args}>
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
        <Tooltip content="Lime">
          <div>
            <RadioButtonGroup.Item value="1">
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  background: 'var(--lime-9)',
                }}
              />
            </RadioButtonGroup.Item>
          </div>
        </Tooltip>
        <Tooltip content="Teal">
          <div>
            <RadioButtonGroup.Item value="2">
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  background: 'var(--teal-9)',
                }}
              />
            </RadioButtonGroup.Item>
          </div>
        </Tooltip>
        <Tooltip content="Gold">
          <div>
            <RadioButtonGroup.Item value="3">
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  background: 'var(--gold-9)',
                }}
              />
            </RadioButtonGroup.Item>
          </div>
        </Tooltip>
      </div>
    </RadioButtonGroup.Root>
  ),
};

export const WithCard: Story = {
  args: {
    color: radioGroupPropDefs.color.default,
    highContrast: radioGroupPropDefs.highContrast.default,
  },
  render: (args) => (
    <RadioButtonGroup.Root defaultValue="1" {...args}>
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
        <RadioButtonGroup.Item value="1">
          <Card size="2" variant="classic">
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
              <Avatar size="3" fallback="AB" color="lime" />
              <div>
                <Text render={<div />} size="2" weight="bold">
                  Artur Bień
                </Text>
                <Text render={<div />} size="2" color="gray">
                  UI engineer
                </Text>
              </div>
            </div>
          </Card>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="2">
          <Card size="2" variant="classic">
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
              <Avatar size="3" fallback="IM" color="sky" />
              <div>
                <Text render={<div />} size="2" weight="bold">
                  Ilya Miskov
                </Text>
                <Text render={<div />} size="2" color="gray">
                  Designer
                </Text>
              </div>
            </div>
          </Card>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="3">
          <Card size="2" variant="classic">
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
              <Avatar size="3" fallback="SS" color="orange" />
              <div>
                <Text render={<div />} size="2" weight="bold">
                  Steven Schwartz
                </Text>
                <Text render={<div />} size="2" color="gray">
                  CEO
                </Text>
              </div>
            </div>
          </Card>
        </RadioButtonGroup.Item>
      </div>
    </RadioButtonGroup.Root>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
      {(['indigo', 'cyan', 'orange', 'lime'] as const).map((color) => (
        <RadioButtonGroup.Root {...args} color={color} key={color} defaultValue="1">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            {['1', '2', '3'].map((value) => (
              <RadioButtonGroup.Item value={value} key={value}>
                <Card
                  size="3"
                  variant="classic"
                  style={
                    {
                      width: 100,
                      height: 100,
                      '--card-border-radius': '20px',
                    } as React.CSSProperties
                  }
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    {value}
                  </div>

                  <RadioButtonGroup.Icon
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                    }}
                  />
                </Card>
              </RadioButtonGroup.Item>
            ))}
          </div>
        </RadioButtonGroup.Root>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled (Group)',
  render: (args) => (
    <RadioButtonGroup.Root {...args} defaultValue="1" disabled>
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
        <RadioButtonGroup.Item value="1">
          <Card size="2" variant="classic">
            <Text>Option 1</Text>
          </Card>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="2">
          <Card size="2" variant="classic">
            <Text>Option 2</Text>
          </Card>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="3">
          <Card size="2" variant="classic">
            <Text>Option 3</Text>
          </Card>
        </RadioButtonGroup.Item>
      </div>
    </RadioButtonGroup.Root>
  ),
};

export const DisabledItem: Story = {
  name: 'Disabled (Single Item)',
  render: (args) => (
    <RadioButtonGroup.Root {...args} defaultValue="1">
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
        <RadioButtonGroup.Item value="1">
          <Card size="2" variant="classic">
            <Text>Option 1</Text>
          </Card>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="2" disabled>
          <Card size="2" variant="classic">
            <Text color="gray">Option 2 (disabled)</Text>
          </Card>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="3">
          <Card size="2" variant="classic">
            <Text>Option 3</Text>
          </Card>
        </RadioButtonGroup.Item>
      </div>
    </RadioButtonGroup.Root>
  ),
};

type PlanType = 'starter' | 'pro' | 'enterprise';

const planPrices: Record<PlanType, number> = {
  starter: 0,
  pro: 29,
  enterprise: 99,
};

export const OnValueChange: Story = {
  name: 'onValueChange (TypeScript)',
  render: function Render(args) {
    const [selected, setSelected] = React.useState<PlanType>('starter');

    const handleChange = (value: unknown) => {
      setSelected(value as PlanType);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text render={<div />} size="2">
          Accept <Code>unknown</Code> and cast inside the handler. Use <Code>RadioButtonGroup.ChangeEventDetails</Code>{' '}
          for the second parameter if needed.
        </Text>

        <RadioButtonGroup.Root {...args} value={selected} onValueChange={handleChange}>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
            <RadioButtonGroup.Item value="starter">
              <Card size="2" variant="classic" style={{ width: 140 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <Text weight="bold">Starter</Text>
                  <Text size="1" color="gray">
                    Free forever
                  </Text>
                </div>
              </Card>
            </RadioButtonGroup.Item>
            <RadioButtonGroup.Item value="pro">
              <Card size="2" variant="classic" style={{ width: 140 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <Text weight="bold">Pro</Text>
                  <Text size="1" color="gray">
                    $29/month
                  </Text>
                </div>
              </Card>
            </RadioButtonGroup.Item>
            <RadioButtonGroup.Item value="enterprise">
              <Card size="2" variant="classic" style={{ width: 140 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <Text weight="bold">Enterprise</Text>
                  <Text size="1" color="gray">
                    $99/month
                  </Text>
                </div>
              </Card>
            </RadioButtonGroup.Item>
          </div>
        </RadioButtonGroup.Root>

        <div
          style={{
            padding: 'var(--space-3)',
            background: 'var(--gray-3)',
            borderRadius: 'var(--radius-2)',
          }}
        >
          <Text render={<div />} size="2">
            Selected: <Code>{selected}</Code>
          </Text>
          <Text render={<div />} size="2">
            Price: <strong>${planPrices[selected]}/mo</strong>
          </Text>
        </div>
      </div>
    );
  },
};

export const OnValueChangeEvent: Story = {
  name: 'onValueChange (Event Details)',
  render: function Render(args) {
    const [selected, setSelected] = React.useState<string>('free');
    const [lastEvent, setLastEvent] = React.useState<{
      type: string;
      value: string;
      wasCanceled: boolean;
    } | null>(null);

    const handleChange = (value: unknown, eventDetails: RadioButtonGroup.ChangeEventDetails) => {
      // Premium tier requires confirmation
      if (value === 'premium') {
        const confirmed = window.confirm('Premium tier costs $99/month. Continue?');
        if (!confirmed) {
          eventDetails.cancel();
          setLastEvent({
            type: eventDetails.event.type,
            value: value as string,
            wasCanceled: true,
          });
          return;
        }
      }

      setSelected(value as string);
      setLastEvent({
        type: eventDetails.event.type,
        value: value as string,
        wasCanceled: false,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text render={<div />} size="2">
          The <Code>eventDetails</Code> parameter provides <Code>cancel()</Code> to prevent changes. Try selecting
          Premium.
        </Text>

        <RadioButtonGroup.Root {...args} value={selected} onValueChange={handleChange}>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
            <RadioButtonGroup.Item value="free">
              <Card size="2" variant="classic" style={{ width: 120 }}>
                <Text weight="bold">Free</Text>
              </Card>
            </RadioButtonGroup.Item>
            <RadioButtonGroup.Item value="pro">
              <Card size="2" variant="classic" style={{ width: 120 }}>
                <Text weight="bold">Pro</Text>
              </Card>
            </RadioButtonGroup.Item>
            <RadioButtonGroup.Item value="premium">
              <Card size="2" variant="classic" style={{ width: 120 }}>
                <Text weight="bold">Premium ⚠️</Text>
              </Card>
            </RadioButtonGroup.Item>
          </div>
        </RadioButtonGroup.Root>

        <div
          style={{
            padding: 'var(--space-3)',
            background: 'var(--gray-3)',
            borderRadius: 'var(--radius-2)',
          }}
        >
          <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-2)' }}>
            Current: <Code>{selected}</Code>
          </Text>
          {lastEvent && (
            <>
              <Text render={<div />} size="1" color="gray">
                Last event: {lastEvent.type}
              </Text>
              <Text render={<div />} size="1" color="gray">
                Attempted value: {lastEvent.value}
              </Text>
              <Text render={<div />} size="1" color={lastEvent.wasCanceled ? 'red' : 'green'}>
                {lastEvent.wasCanceled ? '✗ Change was canceled' : '✓ Change was applied'}
              </Text>
            </>
          )}
        </div>
      </div>
    );
  },
};

export const FormName: Story = {
  name: 'Form Name',
  render: function Render(args) {
    const INITIAL_PLAN = 'monthly';
    const INITIAL_PAYMENT = 'card';

    const [plan, setPlan] = React.useState(INITIAL_PLAN);
    const [payment, setPayment] = React.useState(INITIAL_PAYMENT);
    const [formData, setFormData] = React.useState<Record<string, string> | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const entries: Record<string, string> = {};
      data.forEach((value, key) => {
        entries[key] = value as string;
      });
      setFormData(entries);
    };

    const handleReset = () => {
      setPlan(INITIAL_PLAN);
      setPayment(INITIAL_PAYMENT);
      setFormData(null);
    };

    return (
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
      >
        <Text render={<div />} size="2">
          Use the <Code>name</Code> prop to include the RadioButtonGroup value in form submissions. Listen to the form's{' '}
          <Code>onReset</Code> event to reset controlled state when using <Code>type="reset"</Code> buttons.
        </Text>

        <div>
          <Text render={<div />} size="2" weight="medium" style={{ marginBottom: 'var(--space-2)' }}>
            Subscription Plan
          </Text>
          <RadioButtonGroup.Root {...args} name="plan" value={plan} onValueChange={(v) => setPlan(v as string)}>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
              <RadioButtonGroup.Item value="monthly">
                <Card size="2" variant="classic">
                  <Text>Monthly</Text>
                </Card>
              </RadioButtonGroup.Item>
              <RadioButtonGroup.Item value="yearly">
                <Card size="2" variant="classic">
                  <Text>Yearly</Text>
                </Card>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
        </div>

        <div>
          <Text render={<div />} size="2" weight="medium" style={{ marginBottom: 'var(--space-2)' }}>
            Payment Method
          </Text>
          <RadioButtonGroup.Root
            {...args}
            name="payment"
            value={payment}
            onValueChange={(v) => setPayment(v as string)}
          >
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
              <RadioButtonGroup.Item value="card">
                <Card size="2" variant="classic">
                  <Text>Card</Text>
                </Card>
              </RadioButtonGroup.Item>
              <RadioButtonGroup.Item value="paypal">
                <Card size="2" variant="classic">
                  <Text>PayPal</Text>
                </Card>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
          <Button size="1" type="submit">
            Submit
          </Button>
          <Button size="1" type="reset" variant="soft">
            Reset
          </Button>
        </div>

        {formData && (
          <Code
            style={{
              padding: 'var(--space-3)',
              background: 'var(--gray-3)',
              borderRadius: 'var(--radius-2)',
              display: 'block',
              whiteSpace: 'pre',
            }}
          >
            {JSON.stringify(formData, null, 2)}
          </Code>
        )}
      </form>
    );
  },
};

export const InputRefGroup: Story = {
  name: 'Input Ref (Group)',
  render: function Render(args) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [error, setError] = React.useState<string | null>(null);
    const [submitted, setSubmitted] = React.useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const input = inputRef.current;
      if (!input) return;

      if (!input.validity.valid) {
        setError('Please select a plan');
        setSubmitted(null);
        input.focus();
      } else {
        setError(null);
        setSubmitted(`Selected: ${input.value}`);
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text render={<div />} size="2">
          Use <Code>inputRef</Code> for form validation. Try submitting without selecting an option.
        </Text>

        <div>
          <Text render={<div />} size="2" weight="medium" style={{ marginBottom: 'var(--space-2)' }}>
            Select a Plan
          </Text>
          <RadioButtonGroup.Root
            {...args}
            name="plan"
            required
            inputRef={inputRef}
            onValueChange={() => setError(null)}
          >
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'row' }}>
              <RadioButtonGroup.Item value="basic">
                <Card size="2" variant="classic">
                  <Text>Basic</Text>
                </Card>
              </RadioButtonGroup.Item>
              <RadioButtonGroup.Item value="pro">
                <Card size="2" variant="classic">
                  <Text>Pro</Text>
                </Card>
              </RadioButtonGroup.Item>
              <RadioButtonGroup.Item value="enterprise">
                <Card size="2" variant="classic">
                  <Text>Enterprise</Text>
                </Card>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
          {error && (
            <Text render={<div />} size="1" color="red" style={{ marginTop: 'var(--space-2)' }}>
              {error}
            </Text>
          )}
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Button size="1" type="submit">
            Submit
          </Button>
          {submitted && (
            <Text render={<span />} size="2" color="green">
              ✓ {submitted}
            </Text>
          )}
        </div>
      </form>
    );
  },
};
