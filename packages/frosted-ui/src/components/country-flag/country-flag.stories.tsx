import type { Meta, StoryObj } from '@storybook/react';
import { CountryFlag, Text } from '..';
import * as React from 'react';

const meta = {
  title: 'Utilities/CountryFlag',
  component: CountryFlag,
  args: {
    countryCode: 'US',
    alt: 'United States',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CountryFlag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: (args) => <CountryFlag {...args} />,
};

export const Countries: Story = {
  name: 'Countries',
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)' }}>
      {(['US', 'GB', 'DE', 'FR', 'JP', 'BR', 'IN', 'AU', 'CA', 'MX', 'KR', 'IT'] as const).map((countryCode) => (
        <CountryFlag key={countryCode} {...args} countryCode={countryCode} alt={countryCode.toUpperCase()} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)' }}>
      {(['1', '2', '3'] as const).map((size) => (
        <CountryFlag key={size} {...args} countryCode="US" alt="United States" size={size} />
      ))}
    </div>
  ),
};

export const WithText: Story = {
  name: 'With text',
  render: (args) => (
    <Text size="3" style={{ display: 'flex' }}>
      <CountryFlag {...args} countryCode="PL" alt="" style={{ marginRight: 6 }} />
      Poland
    </Text>
  ),
};
