import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Code, Text, TextField } from '../index';
import * as Autocomplete from './autocomplete';

const meta: Meta<typeof Autocomplete.Root> = {
  title: 'Controls/Autocomplete',
  component: Autocomplete.Root,
};

export default meta;
type Story = StoryObj<typeof Autocomplete.Root>;

// Sample data
interface Tag {
  id: string;
  value: string;
}

const tags: Tag[] = [
  { id: 't1', value: 'feature' },
  { id: 't2', value: 'fix' },
  { id: 't3', value: 'bug' },
  { id: 't4', value: 'docs' },
  { id: 't5', value: 'internal' },
  { id: 't6', value: 'mobile' },
  { id: 't7', value: 'desktop' },
  { id: 't8', value: 'web' },
  { id: 't9', value: 'performance' },
  { id: 't10', value: 'accessibility' },
];

const countries = [
  'Argentina',
  'Australia',
  'Austria',
  'Belgium',
  'Brazil',
  'Canada',
  'Chile',
  'China',
  'Colombia',
  'Denmark',
  'Egypt',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'India',
  'Indonesia',
  'Ireland',
  'Italy',
  'Japan',
  'Mexico',
  'Netherlands',
  'New Zealand',
  'Norway',
  'Poland',
  'Portugal',
  'Russia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sweden',
  'Switzerland',
  'Thailand',
  'Turkey',
  'United Kingdom',
  'United States',
  'Vietnam',
];

// ============================================================================
// Default Story
// ============================================================================

export const Default: Story = {
  render: () => (
    <Autocomplete.Root items={tags} itemToStringValue={(item) => (item as Tag).value}>
      <TextField.Root>
        <Autocomplete.Input render={<TextField.Input placeholder="Search tags..." />} />
      </TextField.Root>
      <Autocomplete.Content>
        <Autocomplete.Empty>No tags found.</Autocomplete.Empty>
        <Autocomplete.List>
          {(tag) => {
            const item = tag as Tag;
            return (
              <Autocomplete.Item key={item.id} value={item}>
                {item.value}
              </Autocomplete.Item>
            );
          }}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
  ),
};

// ============================================================================
// Sizes
// ============================================================================

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 300 }}>
      {(['1', '2', '3', '4'] as const).map((size) => (
        <Autocomplete.Root key={size} items={countries}>
          <TextField.Root size={size}>
            <Autocomplete.Input render={<TextField.Input placeholder={`Size ${size}`} />} />
          </TextField.Root>
          <Autocomplete.Content size={size === '4' ? '3' : (size as '1' | '2' | '3')}>
            <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            <Autocomplete.List>
              {(country) => (
                <Autocomplete.Item key={country as string} value={country}>
                  {country as string}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
      ))}
    </div>
  ),
};

// ============================================================================
// Field Variants
// ============================================================================

export const FieldVariants: Story = {
  name: 'Field Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 300 }}>
      <div>
        <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
          Surface (default)
        </Text>
        <Autocomplete.Root items={countries}>
          <TextField.Root variant="surface">
            <Autocomplete.Input render={<TextField.Input placeholder="Search countries..." />} />
          </TextField.Root>
          <Autocomplete.Content>
            <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            <Autocomplete.List>
              {(country) => (
                <Autocomplete.Item key={country as string} value={country}>
                  {country as string}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>

      <div>
        <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
          Soft
        </Text>
        <Autocomplete.Root items={countries}>
          <TextField.Root variant="soft">
            <Autocomplete.Input render={<TextField.Input placeholder="Search countries..." />} />
          </TextField.Root>
          <Autocomplete.Content>
            <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            <Autocomplete.List>
              {(country) => (
                <Autocomplete.Item key={country as string} value={country}>
                  {country as string}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    </div>
  ),
};

// ============================================================================
// Field Colors
// ============================================================================

const fieldColors = ['gray', 'blue', 'green', 'red', 'orange', 'purple', 'pink'] as const;

export const FieldColors: Story = {
  name: 'Field Colors',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 300 }}>
      {fieldColors.map((color) => (
        <Autocomplete.Root key={color} items={countries}>
          <TextField.Root variant="soft" color={color}>
            <Autocomplete.Input render={<TextField.Input placeholder={`Color: ${color}`} />} />
          </TextField.Root>
          <Autocomplete.Content>
            <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            <Autocomplete.List>
              {(country) => (
                <Autocomplete.Item key={country as string} value={country}>
                  {country as string}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
      ))}
    </div>
  ),
};

// ============================================================================
// With Slot
// ============================================================================

function SearchIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'var(--gray-a10)' }}
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const WithSlot: Story = {
  name: 'With Slot',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 300 }}>
      <div>
        <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
          Leading slot (search icon)
        </Text>
        <Autocomplete.Root items={countries}>
          <TextField.Root>
            <TextField.Slot>
              <SearchIcon />
            </TextField.Slot>
            <Autocomplete.Input render={<TextField.Input placeholder="Search countries..." />} />
          </TextField.Root>
          <Autocomplete.Content>
            <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            <Autocomplete.List>
              {(country) => (
                <Autocomplete.Item key={country as string} value={country}>
                  {country as string}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    </div>
  ),
};

// ============================================================================
// Grouped
// ============================================================================

const produceGroups = [
  {
    category: 'Fruits',
    items: ['Apple', 'Banana', 'Blueberry', 'Cherry', 'Grape', 'Mango', 'Orange', 'Peach', 'Strawberry'],
  },
  {
    category: 'Vegetables',
    items: ['Carrot', 'Broccoli', 'Spinach', 'Tomato', 'Cucumber', 'Pepper', 'Onion', 'Potato'],
  },
];

// Flatten produce items for the autocomplete
const allProduce = produceGroups.flatMap((g) => g.items);

export const Grouped: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
        Search produce
      </Text>
      <Autocomplete.Root items={allProduce}>
        <TextField.Root>
          <Autocomplete.Input render={<TextField.Input placeholder="Search fruits & vegetables..." />} />
        </TextField.Root>
        <Autocomplete.Content>
          <Autocomplete.Empty>No produce found.</Autocomplete.Empty>
          <Autocomplete.List>
            {(item) => (
              <Autocomplete.Item key={item as string} value={item}>
                {item as string}
              </Autocomplete.Item>
            )}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    </div>
  ),
};

// ============================================================================
// Empty State
// ============================================================================

export const EmptyState: Story = {
  name: 'Empty State',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', maxWidth: 300 }}>
      <Text size="2" weight="bold">
        Empty State
      </Text>
      <Text size="1" color="gray">
        Type something that doesn&apos;t match any items to see the empty state.
      </Text>
      <Autocomplete.Root items={tags} itemToStringValue={(item) => (item as Tag).value}>
        <TextField.Root>
          <Autocomplete.Input render={<TextField.Input placeholder="Try typing 'xyz'..." />} />
        </TextField.Root>
        <Autocomplete.Content>
          <Autocomplete.Empty>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span>🔍</span>
              <span>No matching tags found</span>
            </div>
          </Autocomplete.Empty>
          <Autocomplete.List>
            {(tag) => {
              const t = tag as Tag;
              return (
                <Autocomplete.Item key={t.id} value={t}>
                  {t.value}
                </Autocomplete.Item>
              );
            }}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    </div>
  ),
};

// ============================================================================
// With Clear Button
// ============================================================================

function ClearIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const WithClearButton: Story = {
  name: 'With Clear Button',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', maxWidth: 300 }}>
      <Text size="2" weight="bold">
        With Clear Button
      </Text>
      <Text size="1" color="gray">
        Use <Code size="1">Autocomplete.Clear</Code> to add a button that clears the input value.
      </Text>
      <Autocomplete.Root items={countries}>
        <TextField.Root>
          <TextField.Slot>
            <SearchIcon />
          </TextField.Slot>
          <Autocomplete.Input render={<TextField.Input placeholder="Search countries..." />} />
          <TextField.Slot>
            <Autocomplete.Clear>
              <ClearIcon />
            </Autocomplete.Clear>
          </TextField.Slot>
        </TextField.Root>
        <Autocomplete.Content>
          <Autocomplete.Empty>No results found.</Autocomplete.Empty>
          <Autocomplete.List>
            {(country) => (
              <Autocomplete.Item key={country as string} value={country}>
                {country as string}
              </Autocomplete.Item>
            )}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    </div>
  ),
};

// ============================================================================
// Controlled
// ============================================================================

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 300 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <Text size="2" weight="bold">
            Controlled Autocomplete
          </Text>
          <Text size="1" color="gray">
            The selected value is controlled externally.
          </Text>
        </div>

        <Autocomplete.Root
          items={countries}
          value={value}
          onValueChange={(newValue) => setValue(newValue as string | undefined)}
        >
          <TextField.Root>
            <Autocomplete.Input render={<TextField.Input placeholder="Search countries..." />} />
          </TextField.Root>
          <Autocomplete.Content>
            <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            <Autocomplete.List>
              {(country) => (
                <Autocomplete.Item key={country as string} value={country}>
                  {country as string}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>

        <div
          style={{
            padding: 'var(--space-3)',
            backgroundColor: 'var(--gray-a3)',
            borderRadius: 'var(--radius-2)',
          }}
        >
          <Text size="1" color="gray">
            Selected value: <Code size="1">{value ?? '(none)'}</Code>
          </Text>
        </div>
      </div>
    );
  },
};

// ============================================================================
// Colored Items
// ============================================================================

const coloredTags = [
  { id: '1', value: 'Bug', color: 'red' as const },
  { id: '2', value: 'Feature', color: 'blue' as const },
  { id: '3', value: 'Documentation', color: 'purple' as const },
  { id: '4', value: 'Performance', color: 'orange' as const },
  { id: '5', value: 'Security', color: 'pink' as const },
  { id: '6', value: 'Accessibility', color: 'green' as const },
];

export const ColoredItems: Story = {
  name: 'Colored Items',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', maxWidth: 300 }}>
      <Text size="2" weight="bold">
        Colored Items
      </Text>
      <Text size="1" color="gray">
        Items can have individual accent colors.
      </Text>
      <Autocomplete.Root items={coloredTags} itemToStringValue={(item) => (item as (typeof coloredTags)[number]).value}>
        <TextField.Root>
          <Autocomplete.Input render={<TextField.Input placeholder="Search tags..." />} />
        </TextField.Root>
        <Autocomplete.Content>
          <Autocomplete.Empty>No tags found.</Autocomplete.Empty>
          <Autocomplete.List>
            {(tag) => {
              const t = tag as (typeof coloredTags)[number];
              return (
                <Autocomplete.Item key={t.id} value={t} color={t.color}>
                  {t.value}
                </Autocomplete.Item>
              );
            }}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    </div>
  ),
};

// ============================================================================
// Many Items (with scroll)
// ============================================================================

const manyCountries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

export const ManyItems: Story = {
  name: 'Many Items',
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
        {manyCountries.length} countries with scroll
      </Text>
      <Autocomplete.Root items={manyCountries}>
        <TextField.Root>
          <Autocomplete.Input render={<TextField.Input placeholder="Search countries..." />} />
        </TextField.Root>
        <Autocomplete.Content>
          <Autocomplete.Empty>No countries found.</Autocomplete.Empty>
          <Autocomplete.List>
            {(country) => (
              <Autocomplete.Item key={country as string} value={country}>
                {country as string}
              </Autocomplete.Item>
            )}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    </div>
  ),
};

// ============================================================================
// Grid Layout (Emoji Picker)
// ============================================================================

interface Emoji {
  emoji: string;
  label: string;
}

const emojis: Emoji[] = [
  { emoji: '😀', label: 'grinning face' },
  { emoji: '😃', label: 'grinning face with big eyes' },
  { emoji: '😄', label: 'grinning face with smiling eyes' },
  { emoji: '😁', label: 'beaming face with smiling eyes' },
  { emoji: '😆', label: 'grinning squinting face' },
  { emoji: '😅', label: 'grinning face with sweat' },
  { emoji: '🤣', label: 'rolling on the floor laughing' },
  { emoji: '😂', label: 'face with tears of joy' },
  { emoji: '🙂', label: 'slightly smiling face' },
  { emoji: '🙃', label: 'upside-down face' },
  { emoji: '😉', label: 'winking face' },
  { emoji: '😊', label: 'smiling face with smiling eyes' },
  { emoji: '😇', label: 'smiling face with halo' },
  { emoji: '🥰', label: 'smiling face with hearts' },
  { emoji: '😍', label: 'smiling face with heart-eyes' },
  { emoji: '🤩', label: 'star-struck' },
  { emoji: '😘', label: 'face blowing a kiss' },
  { emoji: '😗', label: 'kissing face' },
  { emoji: '😚', label: 'kissing face with closed eyes' },
  { emoji: '😙', label: 'kissing face with smiling eyes' },
  { emoji: '🥲', label: 'smiling face with tear' },
  { emoji: '😋', label: 'face savoring food' },
  { emoji: '😛', label: 'face with tongue' },
  { emoji: '😜', label: 'winking face with tongue' },
  { emoji: '🤪', label: 'zany face' },
  { emoji: '😝', label: 'squinting face with tongue' },
  { emoji: '🤑', label: 'money-mouth face' },
  { emoji: '🤗', label: 'smiling face with open hands' },
  { emoji: '🤭', label: 'face with hand over mouth' },
  { emoji: '🤫', label: 'shushing face' },
  { emoji: '🤔', label: 'thinking face' },
  { emoji: '🤐', label: 'zipper-mouth face' },
  { emoji: '🤨', label: 'face with raised eyebrow' },
  { emoji: '😐', label: 'neutral face' },
  { emoji: '😑', label: 'expressionless face' },
  { emoji: '😶', label: 'face without mouth' },
  { emoji: '😏', label: 'smirking face' },
  { emoji: '😒', label: 'unamused face' },
  { emoji: '🙄', label: 'face with rolling eyes' },
  { emoji: '😬', label: 'grimacing face' },
  { emoji: '🤥', label: 'lying face' },
  { emoji: '😌', label: 'relieved face' },
  { emoji: '😔', label: 'pensive face' },
  { emoji: '😪', label: 'sleepy face' },
  { emoji: '🤤', label: 'drooling face' },
  { emoji: '😴', label: 'sleeping face' },
  { emoji: '😷', label: 'face with medical mask' },
  { emoji: '🤒', label: 'face with thermometer' },
  { emoji: '🤕', label: 'face with head-bandage' },
  { emoji: '🤢', label: 'nauseated face' },
  { emoji: '🤮', label: 'face vomiting' },
  { emoji: '🤧', label: 'sneezing face' },
  { emoji: '🥵', label: 'hot face' },
  { emoji: '🥶', label: 'cold face' },
  { emoji: '🥴', label: 'woozy face' },
  { emoji: '😵', label: 'face with crossed-out eyes' },
  { emoji: '🤯', label: 'exploding head' },
  { emoji: '🤠', label: 'cowboy hat face' },
  { emoji: '🥳', label: 'partying face' },
  { emoji: '🥸', label: 'disguised face' },
  { emoji: '😎', label: 'smiling face with sunglasses' },
  { emoji: '🤓', label: 'nerd face' },
  { emoji: '🧐', label: 'face with monocle' },
  { emoji: '❤️', label: 'red heart' },
  { emoji: '🧡', label: 'orange heart' },
  { emoji: '💛', label: 'yellow heart' },
  { emoji: '💚', label: 'green heart' },
  { emoji: '💙', label: 'blue heart' },
  { emoji: '💜', label: 'purple heart' },
  { emoji: '🖤', label: 'black heart' },
  { emoji: '🤍', label: 'white heart' },
  { emoji: '💔', label: 'broken heart' },
  { emoji: '💕', label: 'two hearts' },
  { emoji: '💞', label: 'revolving hearts' },
  { emoji: '💓', label: 'beating heart' },
  { emoji: '💗', label: 'growing heart' },
  { emoji: '💖', label: 'sparkling heart' },
  { emoji: '💘', label: 'heart with arrow' },
  { emoji: '💝', label: 'heart with ribbon' },
  { emoji: '👍', label: 'thumbs up' },
  { emoji: '👎', label: 'thumbs down' },
  { emoji: '👏', label: 'clapping hands' },
  { emoji: '🙌', label: 'raising hands' },
  { emoji: '👐', label: 'open hands' },
  { emoji: '🤲', label: 'palms up together' },
  { emoji: '🤝', label: 'handshake' },
  { emoji: '🙏', label: 'folded hands' },
  { emoji: '✍️', label: 'writing hand' },
  { emoji: '💪', label: 'flexed biceps' },
  { emoji: '🦾', label: 'mechanical arm' },
  { emoji: '🔥', label: 'fire' },
  { emoji: '⭐', label: 'star' },
  { emoji: '🌟', label: 'glowing star' },
  { emoji: '✨', label: 'sparkles' },
  { emoji: '💫', label: 'dizzy' },
  { emoji: '🎉', label: 'party popper' },
  { emoji: '🎊', label: 'confetti ball' },
];

const gridItemStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  fontSize: 22,
  borderRadius: 'var(--radius-2)',
  cursor: 'pointer',
  transition: 'background-color 100ms',
};

const gridListStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gap: 2,
  padding: 'var(--space-2)',
};

const emojiTriggerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  fontSize: 20,
  borderRadius: 'var(--radius-2)',
  border: '1px solid var(--gray-a6)',
  backgroundColor: 'var(--color-surface)',
  cursor: 'pointer',
  transition: 'background-color 100ms, border-color 100ms',
};

const emojiSearchInputStyles: React.CSSProperties = {
  width: '100%',
  padding: 'var(--space-2) var(--space-3)',
  fontSize: 'var(--font-size-2)',
  border: 'none',
  borderBottom: '1px solid var(--gray-a5)',
  backgroundColor: 'transparent',
  outline: 'none',
  color: 'inherit',
};

export const GridLayout: Story = {
  name: 'Grid Layout',
  render: () => {
    const [selectedEmoji, setSelectedEmoji] = React.useState<string>('😀');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Text size="2" weight="bold">
          Emoji Picker
        </Text>
        <Text size="1" color="gray">
          Click the button to open the emoji picker with search inside the popup.
        </Text>
        <Autocomplete.Root
          items={emojis}
          itemToStringValue={(item) => (item as Emoji).label}
          onValueChange={(value) => {
            const emoji = value as unknown as Emoji | null;
            if (emoji) {
              setSelectedEmoji(emoji.emoji);
            }
          }}
        >
          <Autocomplete.Trigger style={emojiTriggerStyles}>{selectedEmoji}</Autocomplete.Trigger>
          <Autocomplete.Content align="start" style={{ width: 340 }}>
            <Autocomplete.Input placeholder="Search emojis..." style={emojiSearchInputStyles} />
            <Autocomplete.Empty style={{ padding: 'var(--space-4)', textAlign: 'center', color: 'var(--gray-a10)' }}>
              No emojis found.
            </Autocomplete.Empty>
            <Autocomplete.List style={gridListStyles}>
              {(item) => {
                const emoji = item as Emoji;
                return (
                  <Autocomplete.Item key={emoji.label} value={emoji} style={gridItemStyles} title={emoji.label}>
                    {emoji.emoji}
                  </Autocomplete.Item>
                );
              }}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    );
  },
};
