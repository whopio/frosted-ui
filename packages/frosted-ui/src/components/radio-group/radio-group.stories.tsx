import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Code, RadioGroup, Text, radioGroupPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/RadioGroup',
  component: RadioGroup.Root,
  args: {
    disabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: radioGroupPropDefs.size.default,
    color: radioGroupPropDefs.color.default,
    highContrast: radioGroupPropDefs.highContrast.default,
  },
  render: (args) => (
    <RadioGroup.Root defaultValue="1" {...args}>
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
        <RadioGroup.Item value="1">Default</RadioGroup.Item>
        <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
        <RadioGroup.Item value="3">Compact</RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  ),
};

export const Composed: Story = {
  args: {
    size: radioGroupPropDefs.size.default,
    color: radioGroupPropDefs.color.default,
    highContrast: radioGroupPropDefs.highContrast.default,
  },
  render: (args) => (
    <RadioGroup.Root defaultValue="1" {...args}>
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
        <Text as="label" size="2">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="1" /> Default
          </div>
        </Text>
        <Text as="label" size="2">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="2" /> Comfortable
          </div>
        </Text>
        <Text as="label" size="2">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="3" /> Compact
          </div>
        </Text>
      </div>
    </RadioGroup.Root>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <RadioGroup.Root {...args} size="1" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} size="2" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} size="3" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <RadioGroup.Root {...args} color="indigo" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="cyan" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="orange" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="crimson" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div
      style={{
        display: 'inline-grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: 'var(--space-2)',
        gridAutoFlow: 'column',
      }}
    >
      <RadioGroup.Root {...args} color="indigo" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="indigo" defaultValue="1" highContrast>
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="cyan" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="cyan" defaultValue="1" highContrast>
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="orange" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="orange" defaultValue="1" highContrast>
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="crimson" defaultValue="1">
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>

      <RadioGroup.Root {...args} color="crimson" defaultValue="1" highContrast>
        <RadioGroup.Item value="1" />
      </RadioGroup.Root>
    </div>
  ),
};

export const Alignment: Story = {
  name: 'Alignment with text',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Text style={{ marginBottom: 12 }}>
        Composing <Code>RadioGroup</Code> within <Code>Text</Code> automatically centers it with the first line of text.
      </Text>
      <RadioGroup.Root {...args} size="1" defaultValue="1">
        <Text as="label" size="2">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="1" /> Default
          </div>
        </Text>

        <Text as="label" size="2">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="2" /> Compact
          </div>
        </Text>
      </RadioGroup.Root>

      <RadioGroup.Root
        {...args}
        size="2"
        defaultValue="1"
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}
      >
        <Text as="label" size="3">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="1" /> Default
          </div>
        </Text>

        <Text as="label" size="3">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="2" /> Compact
          </div>
        </Text>
      </RadioGroup.Root>

      <RadioGroup.Root
        {...args}
        size="3"
        defaultValue="1"
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}
      >
        <Text as="label" size="4">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="1" /> Default
          </div>
        </Text>

        <Text as="label" size="4">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <RadioGroup.Item value="2" /> Compact
          </div>
        </Text>
      </RadioGroup.Root>
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled (Group)',
  render: (args) => (
    <RadioGroup.Root {...args} defaultValue="1" disabled>
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
        <RadioGroup.Item value="1">Default</RadioGroup.Item>
        <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
        <RadioGroup.Item value="3">Compact</RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  ),
};

export const DisabledItem: Story = {
  name: 'Disabled (Single Item)',
  render: (args) => (
    <RadioGroup.Root {...args} defaultValue="1">
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
        <RadioGroup.Item value="1">Default</RadioGroup.Item>
        <RadioGroup.Item value="2" disabled>
          Comfortable (disabled)
        </RadioGroup.Item>
        <RadioGroup.Item value="3">Compact</RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  ),
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
        setError('Please select a shipping method');
        setSubmitted(null);
        input.focus();
      } else {
        setError(null);
        setSubmitted(`Selected: ${input.value}`);
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text as="div" size="2">
          Use <Code>inputRef</Code> for form validation. Try submitting without selecting an option.
        </Text>

        <div>
          <Text as="div" size="2" weight="medium" style={{ marginBottom: 'var(--space-2)' }}>
            Shipping Method
          </Text>
          <RadioGroup.Root {...args} name="shipping" required inputRef={inputRef} onValueChange={() => setError(null)}>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
              <RadioGroup.Item value="standard">Standard (5-7 days)</RadioGroup.Item>
              <RadioGroup.Item value="express">Express (2-3 days)</RadioGroup.Item>
              <RadioGroup.Item value="overnight">Overnight</RadioGroup.Item>
            </div>
          </RadioGroup.Root>
          {error && (
            <Text as="div" size="1" color="red" style={{ marginTop: 'var(--space-2)' }}>
              {error}
            </Text>
          )}
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Button size="1" type="submit">
            Submit
          </Button>
          {submitted && (
            <Text as="span" size="2" color="green">
              ✓ {submitted}
            </Text>
          )}
        </div>
      </form>
    );
  },
};

export const InputRefItem: Story = {
  name: 'Input Ref (Item)',
  render: function Render(args) {
    const standardRef = React.useRef<HTMLInputElement>(null);
    const expressRef = React.useRef<HTMLInputElement>(null);
    const overnightRef = React.useRef<HTMLInputElement>(null);
    const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

    const getCheckedStates = () => ({
      standard: standardRef.current?.checked ?? false,
      express: expressRef.current?.checked ?? false,
      overnight: overnightRef.current?.checked ?? false,
    });

    const states = getCheckedStates();

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text as="div" size="2">
          Use <Code>inputRef</Code> on individual items to read their native <Code>checked</Code> state.
        </Text>

        <RadioGroup.Root {...args} defaultValue="standard" onValueChange={() => forceUpdate()}>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
            <RadioGroup.Item value="standard" inputRef={standardRef}>
              Standard (5-7 days)
            </RadioGroup.Item>
            <RadioGroup.Item value="express" inputRef={expressRef}>
              Express (2-3 days)
            </RadioGroup.Item>
            <RadioGroup.Item value="overnight" inputRef={overnightRef}>
              Overnight
            </RadioGroup.Item>
          </div>
        </RadioGroup.Root>

        <Code style={{ padding: 'var(--space-2)', background: 'var(--gray-3)', borderRadius: 'var(--radius-2)' }}>
          {JSON.stringify(states, null, 2)}
        </Code>
      </div>
    );
  },
};

type ShippingMethod = 'standard' | 'express' | 'overnight';

const shippingPrices: Record<ShippingMethod, number> = {
  standard: 5.99,
  express: 12.99,
  overnight: 24.99,
};

export const OnValueChange: Story = {
  name: 'onValueChange (TypeScript)',
  render: function Render(args) {
    const [selected, setSelected] = React.useState<ShippingMethod>('standard');

    const handleChange = (value: unknown) => {
      setSelected(value as ShippingMethod);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text as="div" size="2">
          Accept <Code>unknown</Code> and cast inside the handler. Use <Code>RadioGroup.ChangeEventDetails</Code> for
          the second parameter if needed.
        </Text>

        <RadioGroup.Root {...args} value={selected} onValueChange={handleChange}>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
            <RadioGroup.Item value="standard">Standard (5-7 days) — $5.99</RadioGroup.Item>
            <RadioGroup.Item value="express">Express (2-3 days) — $12.99</RadioGroup.Item>
            <RadioGroup.Item value="overnight">Overnight — $24.99</RadioGroup.Item>
          </div>
        </RadioGroup.Root>

        <div
          style={{
            padding: 'var(--space-3)',
            background: 'var(--gray-3)',
            borderRadius: 'var(--radius-2)',
          }}
        >
          <Text as="div" size="2">
            Selected: <Code>{selected}</Code>
          </Text>
          <Text as="div" size="2">
            Price: <strong>${shippingPrices[selected].toFixed(2)}</strong>
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

    const handleChange = (value: unknown, eventDetails: RadioGroup.ChangeEventDetails) => {
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
        <Text as="div" size="2">
          The <Code>eventDetails</Code> parameter provides <Code>cancel()</Code> to prevent changes and{' '}
          <Code>event</Code> for the native event. Try selecting Premium tier.
        </Text>

        <RadioGroup.Root {...args} value={selected} onValueChange={handleChange}>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
            <RadioGroup.Item value="free">Free — $0/month</RadioGroup.Item>
            <RadioGroup.Item value="pro">Pro — $19/month</RadioGroup.Item>
            <RadioGroup.Item value="premium">Premium — $99/month (requires confirmation)</RadioGroup.Item>
          </div>
        </RadioGroup.Root>

        <div
          style={{
            padding: 'var(--space-3)',
            background: 'var(--gray-3)',
            borderRadius: 'var(--radius-2)',
            fontFamily: 'monospace',
            fontSize: 'var(--font-size-1)',
          }}
        >
          <Text as="div" size="2" style={{ marginBottom: 'var(--space-2)' }}>
            Current: <Code>{selected}</Code>
          </Text>
          {lastEvent && (
            <>
              <Text as="div" size="1" color="gray">
                Last event: {lastEvent.type}
              </Text>
              <Text as="div" size="1" color="gray">
                Attempted value: {lastEvent.value}
              </Text>
              <Text as="div" size="1" color={lastEvent.wasCanceled ? 'red' : 'green'}>
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
        <Text as="div" size="2">
          Use the <Code>name</Code> prop to include the RadioGroup value in form submissions. Listen to the form's{' '}
          <Code>onReset</Code> event to reset controlled state when using <Code>type="reset"</Code> buttons.
        </Text>

        <div>
          <Text as="div" size="2" weight="medium" style={{ marginBottom: 'var(--space-2)' }}>
            Subscription Plan
          </Text>
          <RadioGroup.Root {...args} name="plan" value={plan} onValueChange={(v) => setPlan(v as string)}>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
              <RadioGroup.Item value="monthly">Monthly — $9/mo</RadioGroup.Item>
              <RadioGroup.Item value="yearly">Yearly — $99/yr (save 8%)</RadioGroup.Item>
              <RadioGroup.Item value="lifetime">Lifetime — $299 one-time</RadioGroup.Item>
            </div>
          </RadioGroup.Root>
        </div>

        <div>
          <Text as="div" size="2" weight="medium" style={{ marginBottom: 'var(--space-2)' }}>
            Payment Method
          </Text>
          <RadioGroup.Root {...args} name="payment" value={payment} onValueChange={(v) => setPayment(v as string)}>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
              <RadioGroup.Item value="card">Credit Card</RadioGroup.Item>
              <RadioGroup.Item value="paypal">PayPal</RadioGroup.Item>
              <RadioGroup.Item value="crypto">Cryptocurrency</RadioGroup.Item>
            </div>
          </RadioGroup.Root>
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

interface Product {
  id: string;
  name: string;
  price: number;
  features: string[];
}

const products: Product[] = [
  { id: 'basic', name: 'Basic', price: 9, features: ['5 projects', '1 GB storage'] },
  { id: 'pro', name: 'Pro', price: 29, features: ['Unlimited projects', '10 GB storage', 'Priority support'] },
  { id: 'enterprise', name: 'Enterprise', price: 99, features: ['Everything in Pro', 'SSO', 'Dedicated support'] },
];

export const ObjectValues: Story = {
  name: 'Object Values',
  render: function Render(args) {
    const [selected, setSelected] = React.useState<Product>(products[0]);

    const handleChange = (value: unknown) => {
      // Parse the JSON string back to object
      setSelected(JSON.parse(value as string) as Product);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text as="div" size="2">
          For object values, serialize with <Code>JSON.stringify()</Code> and parse in <Code>onValueChange</Code>.
        </Text>

        <RadioGroup.Root {...args} value={JSON.stringify(selected)} onValueChange={handleChange}>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
            {products.map((product) => (
              <RadioGroup.Item key={product.id} value={JSON.stringify(product)}>
                {product.name} — ${product.price}/mo
              </RadioGroup.Item>
            ))}
          </div>
        </RadioGroup.Root>

        <div
          style={{
            padding: 'var(--space-3)',
            background: 'var(--gray-3)',
            borderRadius: 'var(--radius-2)',
          }}
        >
          <Text as="div" size="2" weight="medium" style={{ marginBottom: 'var(--space-2)' }}>
            Selected: {selected.name}
          </Text>
          <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }}>
            Price: <strong>${selected.price}/mo</strong>
          </Text>
          <Text as="div" size="2">
            Features:
          </Text>
          <ul style={{ margin: 0, paddingLeft: 'var(--space-4)' }}>
            {selected.features.map((feature) => (
              <li key={feature}>
                <Text size="2">{feature}</Text>
              </li>
            ))}
          </ul>
        </div>

        <Code
          style={{
            padding: 'var(--space-2)',
            background: 'var(--gray-3)',
            borderRadius: 'var(--radius-2)',
            display: 'block',
            whiteSpace: 'pre',
            fontSize: 'var(--font-size-1)',
          }}
        >
          {JSON.stringify(selected, null, 2)}
        </Code>
      </div>
    );
  },
};
