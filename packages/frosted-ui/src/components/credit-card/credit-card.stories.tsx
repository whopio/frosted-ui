import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';
import { Button, CreditCard, Field } from '..';
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
        <CreditCard.BackFields>
          <div>
            <CreditCard.FieldLabel>Card number</CreditCard.FieldLabel>
            <CreditCard.Number readOnly defaultValue="1838 0008 7261 2332" size="1" />
          </div>
          <CreditCard.BackFieldGroup>
            <div>
              <CreditCard.FieldLabel>Exp</CreditCard.FieldLabel>
              <CreditCard.Expiry readOnly defaultValue="11/27" size="1" />
            </div>
            <div>
              <CreditCard.FieldLabel>CVV</CreditCard.FieldLabel>
              <CreditCard.CVV readOnly defaultValue="8177" size="1" />
            </div>
          </CreditCard.BackFieldGroup>
        </CreditCard.BackFields>
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
            <CreditCard.BackFields>
              <div>
                <CreditCard.FieldLabel style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Card number</CreditCard.FieldLabel>
                <CreditCard.Number readOnly defaultValue="4242 4242 4242 4242" size="1" />
              </div>
              <CreditCard.BackFieldGroup>
                <div>
                  <CreditCard.FieldLabel style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Exp</CreditCard.FieldLabel>
                  <CreditCard.Expiry readOnly defaultValue="12/28" size="1" />
                </div>
                <div>
                  <CreditCard.FieldLabel style={{ color: 'rgba(255, 255, 255, 0.6)' }}>CVV</CreditCard.FieldLabel>
                  <CreditCard.CVV readOnly defaultValue="123" size="1" />
                </div>
              </CreditCard.BackFieldGroup>
            </CreditCard.BackFields>
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

export const Editable: Story = {
  name: 'Editable',
  render: () => (
    <CreditCard.Root defaultFace="back">
      <CreditCard.Content>
        <CardFront />
        <CreditCard.Back>
          <CreditCard.MagStripe />
          <CreditCard.BackContent>
            <CreditCard.BackFields>
              <Field.Root>
                <CreditCard.FieldLabel render={<Field.Label />}>Card number</CreditCard.FieldLabel>
                <CreditCard.Number size="1" />
              </Field.Root>
              <CreditCard.BackFieldGroup>
                <Field.Root>
                  <CreditCard.FieldLabel render={<Field.Label />}>Exp</CreditCard.FieldLabel>
                  <CreditCard.Expiry size="1" />
                </Field.Root>
                <Field.Root>
                  <CreditCard.FieldLabel render={<Field.Label />}>CVV</CreditCard.FieldLabel>
                  <CreditCard.CVV size="1" />
                </Field.Root>
              </CreditCard.BackFieldGroup>
            </CreditCard.BackFields>
          </CreditCard.BackContent>
        </CreditCard.Back>
      </CreditCard.Content>
      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
        <CreditCard.Trigger render={<Button variant="surface" size="2" />}>Flip card</CreditCard.Trigger>
      </div>
    </CreditCard.Root>
  ),
};
