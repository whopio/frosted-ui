import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';
import { Button, CreditCard, Text } from '..';
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

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const cardStyles = {
  front: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
    height: '100%',
    padding: 24,
    background: '#fff',
    border: '1px solid var(--gray-4)',
    borderRadius: 'inherit',
  },
  back: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%',
    background: '#fff',
    border: '1px solid var(--gray-4)',
    borderRadius: 'inherit',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  backContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-end',
    padding: 24,
    gap: 4,
  },
  fieldLabel: {
    fontSize: 11,
    color: 'var(--gray-9)',
    letterSpacing: '0.02em',
  },
  fieldValue: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'var(--font-mono, monospace)',
    letterSpacing: '0.04em',
  },
  fieldRow: {
    display: 'flex',
    gap: 32,
  },
  copyButton: {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    color: 'var(--gray-8)',
    display: 'flex',
    alignItems: 'center',
  },
};

// ─── Stories ────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <CreditCard.Root defaultFace="front">
      <CreditCard.Content>
        <CreditCard.Front style={cardStyles.front}>
          <div style={cardStyles.topRow}>
            <CreditCard.Logo>
              <WhopLogo />
            </CreditCard.Logo>
            <CreditCard.Brand>
              <Text size="2" color="gray" weight="medium">Visa Platinum</Text>
            </CreditCard.Brand>
          </div>
          <div style={cardStyles.bottomRow}>
            <CreditCard.Label>
              <Text size="3" weight="medium">Claude credits</Text>
            </CreditCard.Label>
            <CreditCard.LastFour>
              <Text size="2" color="gray">&bull;&bull;&bull;&bull; 0991</Text>
            </CreditCard.LastFour>
          </div>
        </CreditCard.Front>

        <CreditCard.Back style={cardStyles.back}>
          <div style={{ paddingTop: 24 }}>
            <CreditCard.Stripe />
          </div>
          <div style={cardStyles.backContent}>
            <div>
              <div style={cardStyles.fieldLabel}>Card number</div>
              <CreditCard.Number style={cardStyles.fieldValue}>
                1838 0008 7261 2332
                <button style={cardStyles.copyButton}><CopyIcon /></button>
              </CreditCard.Number>
            </div>
            <div style={cardStyles.fieldRow}>
              <div>
                <div style={cardStyles.fieldLabel}>Exp</div>
                <CreditCard.Expiry style={cardStyles.fieldValue}>
                  11/27
                  <button style={cardStyles.copyButton}><CopyIcon /></button>
                </CreditCard.Expiry>
              </div>
              <div>
                <div style={cardStyles.fieldLabel}>CVV</div>
                <CreditCard.CVV style={cardStyles.fieldValue}>
                  8177
                  <button style={cardStyles.copyButton}><CopyIcon /></button>
                </CreditCard.CVV>
              </div>
            </div>
          </div>
        </CreditCard.Back>
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
            <CreditCard.Front style={cardStyles.front}>
              <div style={cardStyles.topRow}>
                <CreditCard.Logo>
                  <WhopLogo />
                </CreditCard.Logo>
                <CreditCard.Brand>
                  <Text size="2" color="gray" weight="medium">Visa Platinum</Text>
                </CreditCard.Brand>
              </div>
              <div style={cardStyles.bottomRow}>
                <CreditCard.Label>
                  <Text size="3" weight="medium">Claude credits</Text>
                </CreditCard.Label>
                <CreditCard.LastFour>
                  <Text size="2" color="gray">&bull;&bull;&bull;&bull; 0991</Text>
                </CreditCard.LastFour>
              </div>
            </CreditCard.Front>

            <CreditCard.Back style={cardStyles.back}>
              <div style={{ paddingTop: 24 }}>
                <CreditCard.Stripe />
              </div>
              <div style={cardStyles.backContent}>
                <div>
                  <div style={cardStyles.fieldLabel}>Card number</div>
                  <CreditCard.Number style={cardStyles.fieldValue}>
                    1838 0008 7261 2332
                    <button style={cardStyles.copyButton}><CopyIcon /></button>
                  </CreditCard.Number>
                </div>
                <div style={cardStyles.fieldRow}>
                  <div>
                    <div style={cardStyles.fieldLabel}>Exp</div>
                    <CreditCard.Expiry style={cardStyles.fieldValue}>
                      11/27
                      <button style={cardStyles.copyButton}><CopyIcon /></button>
                    </CreditCard.Expiry>
                  </div>
                  <div>
                    <div style={cardStyles.fieldLabel}>CVV</div>
                    <CreditCard.CVV style={cardStyles.fieldValue}>
                      8177
                      <button style={cardStyles.copyButton}><CopyIcon /></button>
                    </CreditCard.CVV>
                  </div>
                </div>
              </div>
            </CreditCard.Back>
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
        <CreditCard.Front
          style={{
            ...cardStyles.front,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            border: 'none',
          }}
        >
          <div style={cardStyles.topRow}>
            <Text size="3" weight="bold" style={{ color: '#fff' }}>PREMIUM</Text>
            <Text size="1" style={{ color: 'rgba(255,255,255,0.7)' }}>Mastercard</Text>
          </div>
          <div style={cardStyles.bottomRow}>
            <Text size="3" weight="medium" style={{ color: '#fff' }}>John Doe</Text>
            <Text size="2" style={{ color: 'rgba(255,255,255,0.8)' }}>&bull;&bull;&bull;&bull; 4242</Text>
          </div>
        </CreditCard.Front>

        <CreditCard.Back
          style={{
            ...cardStyles.back,
            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
            color: '#fff',
            border: 'none',
          }}
        >
          <div style={{ paddingTop: 24 }}>
            <div style={{ width: '100%', height: 40, background: 'rgba(0,0,0,0.2)' }} />
          </div>
          <div style={{ ...cardStyles.backContent, color: '#fff' }}>
            <div>
              <div style={{ ...cardStyles.fieldLabel, color: 'rgba(255,255,255,0.6)' }}>Card number</div>
              <div style={cardStyles.fieldValue}>4242 4242 4242 4242</div>
            </div>
            <div style={cardStyles.fieldRow}>
              <div>
                <div style={{ ...cardStyles.fieldLabel, color: 'rgba(255,255,255,0.6)' }}>Exp</div>
                <div style={cardStyles.fieldValue}>12/28</div>
              </div>
              <div>
                <div style={{ ...cardStyles.fieldLabel, color: 'rgba(255,255,255,0.6)' }}>CVV</div>
                <div style={cardStyles.fieldValue}>123</div>
              </div>
            </div>
          </div>
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
        <CreditCard.Front style={cardStyles.front}>
          <div style={cardStyles.topRow}>
            <CreditCard.Logo>
              <WhopLogo />
            </CreditCard.Logo>
            <CreditCard.Brand>
              <Text size="2" color="gray" weight="medium">Visa Platinum</Text>
            </CreditCard.Brand>
          </div>
          <div style={cardStyles.bottomRow}>
            <CreditCard.Label>
              <Text size="3" weight="medium">Claude credits</Text>
            </CreditCard.Label>
            <CreditCard.LastFour>
              <Text size="2" color="gray">&bull;&bull;&bull;&bull; 0991</Text>
            </CreditCard.LastFour>
          </div>
        </CreditCard.Front>

        <CreditCard.Back style={cardStyles.back}>
          <div style={{ paddingTop: 24 }}>
            <CreditCard.Stripe />
          </div>
          <div style={cardStyles.backContent}>
            <div>
              <div style={cardStyles.fieldLabel}>Card number</div>
              <CreditCard.Number style={cardStyles.fieldValue}>
                1838 0008 7261 2332
                <button style={cardStyles.copyButton}><CopyIcon /></button>
              </CreditCard.Number>
            </div>
            <div style={cardStyles.fieldRow}>
              <div>
                <div style={cardStyles.fieldLabel}>Exp</div>
                <CreditCard.Expiry style={cardStyles.fieldValue}>
                  11/27
                  <button style={cardStyles.copyButton}><CopyIcon /></button>
                </CreditCard.Expiry>
              </div>
              <div>
                <div style={cardStyles.fieldLabel}>CVV</div>
                <CreditCard.CVV style={cardStyles.fieldValue}>
                  8177
                  <button style={cardStyles.copyButton}><CopyIcon /></button>
                </CreditCard.CVV>
              </div>
            </div>
          </div>
        </CreditCard.Back>
      </CreditCard.Content>

      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
        <CreditCard.Trigger render={<Button variant="surface" size="2" />}>Flip card</CreditCard.Trigger>
      </div>
    </CreditCard.Root>
  ),
};
