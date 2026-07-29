import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { CountryFlag, Text } from '..';

const meta = {
  title: 'Utilities/CountryFlag',
  component: CountryFlag,
  args: {
    country: 'us',
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
      {['us', 'gb', 'de', 'fr', 'jp', 'br', 'in', 'au', 'ca', 'mx', 'kr', 'it'].map((country) => (
        <CountryFlag key={country} {...args} country={country} alt={country.toUpperCase()} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)' }}>
      {(['1', '2', '3'] as const).map((size) => (
        <CountryFlag key={size} {...args} country="us" alt="United States" size={size} />
      ))}
    </div>
  ),
};

export const WithText: Story = {
  name: 'With text',
  render: (args) => (
    <Text size="3">
      <CountryFlag {...args} country="pl" alt="" style={{ width: 20, marginRight: 6 }} />
      Poland
    </Text>
  ),
};
