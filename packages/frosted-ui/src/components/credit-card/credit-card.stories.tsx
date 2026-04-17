import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';
import { Button, Callout, CreditCard, Form, Text } from '..';
import './credit-card.css';

const meta = {
  title: 'Components/CreditCard',
  component: CreditCard.Root,
  args: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CreditCard.Root>;

export default meta;
type Story = StoryObj;

const WhopLogo = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
    <path
      d="M8.5 4L4 12L8.5 20M23.5 4L28 12L23.5 20M12 4L16 20M20 4L16 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.4"
    />
  </svg>
);

function CardFront() {
  return (
    <CreditCard.Front>
      <CreditCard.FrontHeader>
        <CreditCard.Logo><WhopLogo /></CreditCard.Logo>
        <CreditCard.Brand>Visa Platinum</CreditCard.Brand>
      </CreditCard.FrontHeader>
      <CreditCard.FrontFooter>
        <CreditCard.Title>Claude credits</CreditCard.Title>
        <CreditCard.LastFour>&bull;&bull;&bull;&bull; 0991</CreditCard.LastFour>
      </CreditCard.FrontFooter>
    </CreditCard.Front>
  );
}

function CardBack() {
  return (
    <CreditCard.Back>
      <CreditCard.MagStripe />
      <CreditCard.BackContent>
        <CreditCard.Fieldset aria-label="Card details">
          <CreditCard.Field>
            <CreditCard.FieldLabel>Card number</CreditCard.FieldLabel>
            <CreditCard.Number readOnly defaultValue="1838 0008 7261 2332" />
          </CreditCard.Field>
          <CreditCard.FieldGroup>
            <CreditCard.Field>
              <CreditCard.FieldLabel>Exp</CreditCard.FieldLabel>
              <CreditCard.Expiry readOnly defaultValue="11/27" />
            </CreditCard.Field>
            <CreditCard.Field>
              <CreditCard.FieldLabel>CVV</CreditCard.FieldLabel>
              <CreditCard.CVV readOnly defaultValue="8177" />
            </CreditCard.Field>
          </CreditCard.FieldGroup>
        </CreditCard.Fieldset>
      </CreditCard.BackContent>
    </CreditCard.Back>
  );
}

// ─── Stories ────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <CreditCard.Root defaultFace="front">
      <CreditCard.Content>
        <CardFront />
        <CardBack />
      </CreditCard.Content>
      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
        <CreditCard.Trigger render={<Button variant="surface" size="2" />}>Flip card</CreditCard.Trigger>
      </div>
    </CreditCard.Root>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [face, setFace] = useState<'front' | 'back'>('front');

    return (
      <div>
        <CreditCard.Root face={face} onFaceChange={setFace}>
          <CreditCard.Content>
            <CardFront />
            <CardBack />
          </CreditCard.Content>
        </CreditCard.Root>
        <div style={{ marginTop: 16, display: 'flex', gap: 8, justifyContent: 'center' }}>
          <Button variant={face === 'front' ? 'solid' : 'surface'} size="2" onClick={() => setFace('front')}>
            Front
          </Button>
          <Button variant={face === 'back' ? 'solid' : 'surface'} size="2" onClick={() => setFace('back')}>
            Back
          </Button>
        </div>
      </div>
    );
  },
};

export const CustomContent: Story = {
  name: 'Custom Content',
  render: () => (
    <CreditCard.Root defaultFace="front">
      <CreditCard.Content>
        <CreditCard.Front style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', borderColor: 'transparent' }}>
          <CreditCard.FrontHeader>
            <CreditCard.Logo>PREMIUM</CreditCard.Logo>
            <CreditCard.Brand style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Mastercard</CreditCard.Brand>
          </CreditCard.FrontHeader>
          <CreditCard.FrontFooter>
            <CreditCard.Title>John Doe</CreditCard.Title>
            <CreditCard.LastFour style={{ color: 'rgba(255, 255, 255, 0.8)' }}>&bull;&bull;&bull;&bull; 4242</CreditCard.LastFour>
          </CreditCard.FrontFooter>
        </CreditCard.Front>

        <CreditCard.Back style={{ background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)', color: '#fff', borderColor: 'transparent' }}>
          <CreditCard.MagStripe style={{ background: 'rgba(0, 0, 0, 0.2)' }} />
          <CreditCard.BackContent>
            <CreditCard.Fieldset aria-label="Card details">
              <CreditCard.Field>
                <CreditCard.FieldLabel style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Card number</CreditCard.FieldLabel>
                <CreditCard.Number readOnly defaultValue="4242 4242 4242 4242" />
              </CreditCard.Field>
              <CreditCard.FieldGroup>
                <CreditCard.Field>
                  <CreditCard.FieldLabel style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Exp</CreditCard.FieldLabel>
                  <CreditCard.Expiry readOnly defaultValue="12/28" />
                </CreditCard.Field>
                <CreditCard.Field>
                  <CreditCard.FieldLabel style={{ color: 'rgba(255, 255, 255, 0.6)' }}>CVV</CreditCard.FieldLabel>
                  <CreditCard.CVV readOnly defaultValue="123" />
                </CreditCard.Field>
              </CreditCard.FieldGroup>
            </CreditCard.Fieldset>
          </CreditCard.BackContent>
        </CreditCard.Back>
      </CreditCard.Content>

      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
        <CreditCard.Trigger render={<Button variant="surface" size="2" />}>Flip card</CreditCard.Trigger>
      </div>
    </CreditCard.Root>
  ),
};

export const BackFaceDefault: Story = {
  name: 'Initial Back Face',
  render: () => (
    <CreditCard.Root defaultFace="back">
      <CreditCard.Content>
        <CardFront />
        <CardBack />
      </CreditCard.Content>
      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
        <CreditCard.Trigger render={<Button variant="surface" size="2" />}>Flip card</CreditCard.Trigger>
      </div>
    </CreditCard.Root>
  ),
};

export const InputStates: Story = {
  name: 'Input States',
  render: () => {
    function BackFields({ state }: { state: 'editable' | 'disabled' | 'readonly' }) {
      const inputProps = state === 'readonly'
        ? { readOnly: true, defaultValue: '1838 0008 7261 2332' }
        : state === 'disabled'
          ? { disabled: true, defaultValue: '1838 0008 7261 2332' }
          : {};
      const expiryProps = state === 'readonly'
        ? { readOnly: true, defaultValue: '11/27' }
        : state === 'disabled'
          ? { disabled: true, defaultValue: '11/27' }
          : {};
      const cvvProps = state === 'readonly'
        ? { readOnly: true, defaultValue: '8177' }
        : state === 'disabled'
          ? { disabled: true, defaultValue: '8177' }
          : {};

      return (
        <CreditCard.Back>
          <CreditCard.MagStripe />
          <CreditCard.BackContent>
            <CreditCard.Fieldset aria-label="Card details">
              <CreditCard.Field>
                <CreditCard.FieldLabel>Card number</CreditCard.FieldLabel>
                <CreditCard.Number {...inputProps} />
              </CreditCard.Field>
              <CreditCard.FieldGroup>
                <CreditCard.Field>
                  <CreditCard.FieldLabel>Exp</CreditCard.FieldLabel>
                  <CreditCard.Expiry {...expiryProps} />
                </CreditCard.Field>
                <CreditCard.Field>
                  <CreditCard.FieldLabel>CVV</CreditCard.FieldLabel>
                  <CreditCard.CVV {...cvvProps} />
                </CreditCard.Field>
              </CreditCard.FieldGroup>
            </CreditCard.Fieldset>
          </CreditCard.BackContent>
        </CreditCard.Back>
      );
    }

    return (
      <div style={{ display: 'flex', gap: 24, alignItems: 'start' }}>
        <div style={{ textAlign: 'center' }}>
          <CreditCard.Root defaultFace="back">
            <CreditCard.Content>
              <CardFront />
              <BackFields state="editable" />
            </CreditCard.Content>
          </CreditCard.Root>
          <p style={{ marginTop: 8, fontSize: 13, color: 'var(--gray-9)' }}>Editable</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <CreditCard.Root defaultFace="back">
            <CreditCard.Content>
              <CardFront />
              <BackFields state="disabled" />
            </CreditCard.Content>
          </CreditCard.Root>
          <p style={{ marginTop: 8, fontSize: 13, color: 'var(--gray-9)' }}>Disabled</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <CreditCard.Root defaultFace="back">
            <CreditCard.Content>
              <CardFront />
              <BackFields state="readonly" />
            </CreditCard.Content>
          </CreditCard.Root>
          <p style={{ marginTop: 8, fontSize: 13, color: 'var(--gray-9)' }}>Read-only</p>
        </div>
      </div>
    );
  },
};

export const FormIntegration: Story = {
  name: 'Form Integration',
  render: function FormIntegrationStory() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    return (
      <div style={{ width: 360 }}>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            await new Promise((r) => setTimeout(r, 800));
            setSubmitted(true);
            setLoading(false);
          }}
        >
          <CreditCard.Root defaultFace="back">
            <CreditCard.Content>
              <CardFront />
              <CreditCard.Back>
                <CreditCard.MagStripe />
                <CreditCard.BackContent>
                  <CreditCard.Fieldset aria-label="Card details">
                    <CreditCard.Field name="cardNumber">
                      <CreditCard.FieldLabel>Card number</CreditCard.FieldLabel>
                      <CreditCard.Number required />
                      <CreditCard.FieldError match="valueMissing">Card number is required</CreditCard.FieldError>
                      <CreditCard.FieldError match="patternMismatch">Enter a valid card number</CreditCard.FieldError>
                    </CreditCard.Field>
                    <CreditCard.FieldGroup>
                      <CreditCard.Field name="expiry">
                        <CreditCard.FieldLabel>Exp</CreditCard.FieldLabel>
                        <CreditCard.Expiry required pattern="\d{2}/\d{2}" />
                        <CreditCard.FieldError match="valueMissing">Required</CreditCard.FieldError>
                        <CreditCard.FieldError match="patternMismatch">MM/YY</CreditCard.FieldError>
                      </CreditCard.Field>
                      <CreditCard.Field name="cvv">
                        <CreditCard.FieldLabel>CVV</CreditCard.FieldLabel>
                        <CreditCard.CVV required />
                        <CreditCard.FieldError match="valueMissing">Required</CreditCard.FieldError>
                      </CreditCard.Field>
                    </CreditCard.FieldGroup>
                  </CreditCard.Fieldset>
                </CreditCard.BackContent>
              </CreditCard.Back>
            </CreditCard.Content>
          </CreditCard.Root>

          <div style={{ marginTop: 16 }}>
            <Button type="submit" loading={loading} size="3" variant="solid" style={{ width: '100%' }}>
              Save card
            </Button>
          </div>
        </Form>

        {submitted && (
          <Callout.Root color="success" size="1" style={{ marginTop: 12 }}>
            <Callout.Text>Card saved successfully!</Callout.Text>
          </Callout.Root>
        )}

        <Text size="1" color="gray" style={{ display: 'block', marginTop: 12 }}>
          Submit with empty fields to see validation errors.
        </Text>
      </div>
    );
  },
};
