import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '../button';
import { IconButton } from '../icon-button';
import { Text } from '../text';
import { VisuallyHidden } from './visually-hidden';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  name: 'Default',
  render: () => (
    <div>
      <Text render={<p />} style={{ marginBottom: 16 }}>
        The text below is visually hidden but accessible to screen readers:
      </Text>
      <VisuallyHidden>
        This text is hidden visually but will be read by screen readers.
      </VisuallyHidden>
      <Text render={<p />} color="gray" size="2">
        (Inspect the DOM to see the hidden content)
      </Text>
    </div>
  ),
};

export const IconButtonWithLabel: Story = {
  name: 'Icon Button with Label',
  render: () => (
    <div>
      <Text render={<p />} style={{ marginBottom: 16 }}>
        Icon buttons should have accessible labels for screen readers:
      </Text>
      <div style={{ display: 'flex', gap: 8 }}>
        <IconButton aria-label="Close">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </IconButton>

        <IconButton>
          <VisuallyHidden>Settings</VisuallyHidden>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75765 13.6881L8.99565 12.6383C9.3747 12.5765 9.73608 12.3887 10.0748 12.1648L10.986 12.7393C11.3218 12.951 11.7595 12.902 12.0403 12.6213L12.6464 12.0152C12.9271 11.7344 12.9761 11.2967 12.7644 10.9609L12.1902 10.0498C12.3766 9.71082 12.5275 9.3494 12.6377 8.97058L13.6879 8.73248C14.0751 8.6447 14.35 8.30056 14.35 7.90352V7.04638C14.35 6.64934 14.0751 6.3052 13.6879 6.21741L12.6381 5.97938C12.528 5.60063 12.3771 5.23916 12.1908 4.9002L12.7653 3.98917C12.977 3.6533 12.928 3.2156 12.6473 2.93486L12.0412 2.32876C11.7604 2.04802 11.3227 1.99902 10.9869 2.21075L10.076 2.78493C9.73676 2.59847 9.3753 2.44754 8.99627 2.33722L8.75765 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28356 3.06816C8.94243 3.18387 9.5519 3.44302 10.0787 3.81218L11.4765 2.97661L12.0226 3.52269L11.1873 4.92088C11.5564 5.44748 11.8156 6.0568 11.9314 6.71551L13.5 7.07138V7.92852L11.9316 8.28447C11.8159 8.94339 11.5567 9.55292 11.1876 10.0797L12.0234 11.4779L11.4773 12.024L10.0791 11.1886C9.55222 11.5576 8.94285 11.8166 8.28402 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.52267 12.024L2.97659 11.4779L3.81213 10.0794C3.4432 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92852V7.07138L3.06818 6.71554C3.18388 6.05671 3.44305 5.44728 3.81224 4.92058L2.97706 3.52269L3.52313 2.97661L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </IconButton>
      </div>
      <Text render={<p />} color="gray" size="2" style={{ marginTop: 12 }}>
        First button uses aria-label, second uses VisuallyHidden text inside.
      </Text>
    </div>
  ),
};

export const SkipLink: Story = {
  name: 'Skip Link',
  render: () => (
    <div>
      <Text render={<p />} style={{ marginBottom: 16 }}>
        Skip links help keyboard users bypass navigation. Focus the button below, then press Tab to
        reveal the skip link:
      </Text>
      <Button style={{ marginBottom: 16 }}>Focus me first</Button>

      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: -9999,
          zIndex: 999,
          padding: '1em',
          backgroundColor: 'var(--accent-9)',
          color: 'var(--accent-contrast)',
          textDecoration: 'none',
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = '10px';
          e.currentTarget.style.top = '10px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-9999px';
        }}
      >
        Skip to main content
      </a>

      <div id="main-content" style={{ padding: 16, border: '1px solid var(--gray-6)' }}>
        <Text>Main content area</Text>
      </div>
    </div>
  ),
};

export const FormLabels: Story = {
  name: 'Form Labels',
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Text render={<p />} style={{ marginBottom: 16 }}>
        Sometimes you need labels for screen readers but not visually:
      </Text>

      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <VisuallyHidden render={<label htmlFor="search" />}>Search</VisuallyHidden>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: 'var(--radius-2)',
              border: '1px solid var(--gray-6)',
              backgroundColor: 'var(--color-surface)',
            }}
          />
        </div>
        <Button>Go</Button>
      </div>
    </div>
  ),
};

export const WithRenderProp: Story = {
  name: 'With Render Prop',
  render: () => (
    <div>
      <Text render={<p />} style={{ marginBottom: 16 }}>
        Use the <code>render</code> prop to change the element type:
      </Text>

      <div style={{ display: 'flex', gap: 16 }}>
        <div>
          <Text size="2" weight="medium">
            As label:
          </Text>
          <VisuallyHidden render={<label htmlFor="hidden-label-input" />}>
            Hidden label
          </VisuallyHidden>
          <input
            id="hidden-label-input"
            placeholder="Has hidden label"
            style={{
              padding: '8px 12px',
              borderRadius: 'var(--radius-2)',
              border: '1px solid var(--gray-6)',
            }}
          />
        </div>

        <div>
          <Text size="2" weight="medium">
            As heading:
          </Text>
          <VisuallyHidden render={<h2 />}>Section heading for screen readers</VisuallyHidden>
          <Text render={<p />} color="gray" size="2">
            This section has a hidden h2
          </Text>
        </div>
      </div>
    </div>
  ),
};
