import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Code, IconButton, ScrollArea, Spinner, Text, TextField } from '../index';
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
        <ScrollArea type="auto">
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
        </ScrollArea>
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
            <ScrollArea type="auto">
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(country) => (
                  <Autocomplete.Item key={country as string} value={country}>
                    {country as string}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </ScrollArea>
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
            <ScrollArea type="auto">
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(country) => (
                  <Autocomplete.Item key={country as string} value={country}>
                    {country as string}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </ScrollArea>
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
            <ScrollArea type="auto">
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(country) => (
                  <Autocomplete.Item key={country as string} value={country}>
                    {country as string}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </ScrollArea>
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
            <ScrollArea type="auto">
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(country) => (
                  <Autocomplete.Item key={country as string} value={country}>
                    {country as string}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </ScrollArea>
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
  render: () => {
    const textFieldRef = React.useRef<HTMLDivElement>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 300 }}>
        <div>
          <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            With Slot
          </Text>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
            Use <Code size="1">TextField.Slot</Code> for leading or trailing icons. When using slots, pass the{' '}
            <Code size="1">anchor</Code> prop to <Code size="1">Autocomplete.Content</Code> to position the popup
            against the entire <Code size="1">TextField.Root</Code> rather than just the input.
          </Text>
        </div>
        <Autocomplete.Root items={countries}>
          <TextField.Root ref={textFieldRef}>
            <TextField.Slot>
              <SearchIcon />
            </TextField.Slot>
            <Autocomplete.Input render={<TextField.Input placeholder="Search countries..." />} />
          </TextField.Root>
          <Autocomplete.Content anchor={textFieldRef}>
            <ScrollArea type="auto">
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(country) => (
                  <Autocomplete.Item key={country as string} value={country}>
                    {country as string}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </ScrollArea>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    );
  },
};

// ============================================================================
// Grouped
// ============================================================================

interface ProduceGroup {
  label: string;
  items: string[];
}

const produceGroups: ProduceGroup[] = [
  {
    label: 'Fruits',
    items: [
      'Apple',
      'Apricot',
      'Banana',
      'Blueberry',
      'Cherry',
      'Grape',
      'Kiwi',
      'Lemon',
      'Mango',
      'Orange',
      'Peach',
      'Pear',
      'Pineapple',
      'Raspberry',
      'Strawberry',
      'Watermelon',
    ],
  },
  {
    label: 'Vegetables',
    items: [
      'Asparagus',
      'Broccoli',
      'Cabbage',
      'Carrot',
      'Celery',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Lettuce',
      'Onion',
      'Pepper',
      'Potato',
      'Spinach',
      'Tomato',
      'Zucchini',
    ],
  },
  {
    label: 'Herbs',
    items: ['Basil', 'Chives', 'Cilantro', 'Dill', 'Mint', 'Oregano', 'Parsley', 'Rosemary', 'Sage', 'Thyme'],
  },
];

export const Grouped: Story = {
  render: () => (
    <div style={{ maxWidth: 350 }}>
      <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
        Grouped
      </Text>
      <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
        Organize related options with <Code size="2">Autocomplete.Group</Code> and{' '}
        <Code size="2">Autocomplete.GroupLabel</Code> to add section headings inside the popup.
      </Text>
      <Text size="1" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
        Groups are represented by an array of objects with an <Code size="1">items</Code> property, which itself is an
        array of individual items for each group. An extra property, such as <Code size="1">label</Code>, can be
        provided for the heading text when rendering the group label.
      </Text>
      <Autocomplete.Root items={produceGroups}>
        <TextField.Root>
          <Autocomplete.Input render={<TextField.Input placeholder="Search produce..." />} />
        </TextField.Root>
        <Autocomplete.Content>
          <ScrollArea type="auto" style={{ maxHeight: 300 }}>
            <Autocomplete.Empty>No produce found.</Autocomplete.Empty>
            <Autocomplete.List>
              {(group) => {
                const g = group as ProduceGroup;
                return (
                  <Autocomplete.Group key={g.label} items={g.items}>
                    <Autocomplete.GroupLabel>{g.label}</Autocomplete.GroupLabel>
                    {g.items.map((item) => (
                      <Autocomplete.Item key={item} value={item}>
                        {item}
                      </Autocomplete.Item>
                    ))}
                  </Autocomplete.Group>
                );
              }}
            </Autocomplete.List>
          </ScrollArea>
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
          <ScrollArea type="auto">
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
          </ScrollArea>
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
  render: () => {
    const textFieldRef = React.useRef<HTMLDivElement>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', maxWidth: 300 }}>
        <Text size="2" weight="bold">
          With Clear Button
        </Text>
        <Text size="1" color="gray">
          Use <Code size="1">Autocomplete.Clear</Code> to add a button that clears the input value.
        </Text>
        <Autocomplete.Root items={countries}>
          <TextField.Root ref={textFieldRef}>
            <TextField.Slot>
              <SearchIcon />
            </TextField.Slot>
            <Autocomplete.Input render={<TextField.Input placeholder="Search countries..." />} />
            <TextField.Slot>
              <Autocomplete.Clear>
                <IconButton variant="ghost" color="gray" size="1">
                  <ClearIcon />
                </IconButton>
              </Autocomplete.Clear>
            </TextField.Slot>
          </TextField.Root>
          <Autocomplete.Content anchor={textFieldRef}>
            <ScrollArea type="auto">
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(country) => (
                  <Autocomplete.Item key={country as string} value={country}>
                    {country as string}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </ScrollArea>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    );
  },
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
            <ScrollArea type="auto">
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(country) => (
                  <Autocomplete.Item key={country as string} value={country}>
                    {country as string}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </ScrollArea>
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
          <ScrollArea type="auto">
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
          </ScrollArea>
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
        <Autocomplete.Content style={{ maxHeight: 300 }}>
          <ScrollArea type="auto">
            <Autocomplete.Empty>No countries found.</Autocomplete.Empty>
            <Autocomplete.List>
              {(country) => (
                <Autocomplete.Item key={country as string} value={country}>
                  {country as string}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </ScrollArea>
        </Autocomplete.Content>
      </Autocomplete.Root>
    </div>
  ),
};

// ============================================================================
// Grid Layout (Emoji Picker)
// ============================================================================

interface EmojiItem {
  emoji: string;
  value: string;
  name: string;
}

interface EmojiGroup {
  value: string;
  label: string;
  items: EmojiItem[];
}

const emojiCategories = [
  {
    label: 'Smileys & Emotion',
    emojis: [
      { emoji: '😀', name: 'grinning face' },
      { emoji: '😃', name: 'grinning face with big eyes' },
      { emoji: '😄', name: 'grinning face with smiling eyes' },
      { emoji: '😁', name: 'beaming face with smiling eyes' },
      { emoji: '😆', name: 'grinning squinting face' },
      { emoji: '😅', name: 'grinning face with sweat' },
      { emoji: '🤣', name: 'rolling on the floor laughing' },
      { emoji: '😂', name: 'face with tears of joy' },
      { emoji: '🙂', name: 'slightly smiling face' },
      { emoji: '😊', name: 'smiling face with smiling eyes' },
      { emoji: '😇', name: 'smiling face with halo' },
      { emoji: '🥰', name: 'smiling face with hearts' },
      { emoji: '😍', name: 'smiling face with heart-eyes' },
      { emoji: '🤩', name: 'star-struck' },
      { emoji: '😘', name: 'face blowing a kiss' },
    ],
  },
  {
    label: 'Animals & Nature',
    emojis: [
      { emoji: '🐶', name: 'dog face' },
      { emoji: '🐱', name: 'cat face' },
      { emoji: '🐭', name: 'mouse face' },
      { emoji: '🐹', name: 'hamster' },
      { emoji: '🐰', name: 'rabbit face' },
      { emoji: '🦊', name: 'fox' },
      { emoji: '🐻', name: 'bear' },
      { emoji: '🐼', name: 'panda' },
      { emoji: '🐨', name: 'koala' },
      { emoji: '🐯', name: 'tiger face' },
    ],
  },
  {
    label: 'Food & Drink',
    emojis: [
      { emoji: '🍎', name: 'red apple' },
      { emoji: '🍊', name: 'tangerine' },
      { emoji: '🍋', name: 'lemon' },
      { emoji: '🍌', name: 'banana' },
      { emoji: '🍉', name: 'watermelon' },
      { emoji: '🍇', name: 'grapes' },
      { emoji: '🍓', name: 'strawberry' },
      { emoji: '🍒', name: 'cherries' },
      { emoji: '🍑', name: 'peach' },
      { emoji: '🥭', name: 'mango' },
    ],
  },
];

const emojiGroups: EmojiGroup[] = emojiCategories.map((category) => ({
  value: category.label,
  label: category.label,
  items: category.emojis.map((emoji) => ({
    ...emoji,
    value: emoji.name.toLowerCase(),
  })),
}));

const COLUMNS = 5;

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export const GridLayout: Story = {
  name: 'Grid Layout',
  render: () => {
    const [pickerOpen, setPickerOpen] = React.useState(false);
    const [textValue, setTextValue] = React.useState('');
    const [searchValue, setSearchValue] = React.useState('');
    const textInputRef = React.useRef<HTMLInputElement | null>(null);

    function handleInsertEmoji(emoji: string) {
      if (!textInputRef.current) return;

      const start = textInputRef.current.selectionStart ?? textInputRef.current.value.length;
      const end = textInputRef.current.selectionEnd ?? textInputRef.current.value.length;

      setTextValue((prev) => prev.slice(0, start) + emoji + prev.slice(end));
      setPickerOpen(false);

      const input = textInputRef.current;
      requestAnimationFrame(() => {
        input.focus();
        const caretPos = start + emoji.length;
        input.setSelectionRange(caretPos, caretPos);
      });
    }

    return (
      <div style={{ width: 300 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <TextField.Root size="3" style={{ flex: 1 }}>
            <TextField.Input
              ref={textInputRef}
              placeholder="iMessage"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
          </TextField.Root>

          <Autocomplete.Root
            grid
            items={emojiGroups}
            open={pickerOpen}
            onOpenChange={setPickerOpen}
            onOpenChangeComplete={() => setSearchValue('')}
            value={searchValue}
            onValueChange={(value, details) => {
              if (details.reason !== 'item-press') {
                setSearchValue(value as string);
              }
            }}
          >
            <Autocomplete.Trigger>
              <IconButton size="3" variant="surface">
                😀
              </IconButton>
            </Autocomplete.Trigger>
            <Autocomplete.Content
              align="end"
              sideOffset={4}
              style={{
                maxHeight: 328,
                padding: 0,
              }}
            >
              <div style={{ padding: 8, borderBottom: '1px solid var(--color-stroke)' }}>
                <TextField.Root size="3" variant="soft" color="gray">
                  <Autocomplete.Input render={<TextField.Input placeholder="Search emojis…" />} />
                </TextField.Root>
              </div>
              <Autocomplete.Empty
                style={{
                  color: 'var(--gray-a10)',
                }}
              >
                No emojis found
              </Autocomplete.Empty>
              <ScrollArea
                type="auto"
                style={{
                  maxHeight: 272,
                }}
              >
                <Autocomplete.List
                  style={
                    {
                      '--cols': COLUMNS,
                    } as React.CSSProperties
                  }
                >
                  {(group) => {
                    const g = group as EmojiGroup;
                    return (
                      <Autocomplete.Group key={g.value} items={g.items}>
                        <Autocomplete.GroupLabel
                          style={{
                            padding: 8,
                            fontSize: 12,
                            fontWeight: 600,
                            color: 'var(--gray-a10)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.025em',
                            backgroundColor: 'var(--color-panel)',
                          }}
                        >
                          {g.label}
                        </Autocomplete.GroupLabel>

                        {chunkArray(g.items, COLUMNS).map((row, rowIdx) => (
                          <Autocomplete.Row
                            key={rowIdx}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: `repeat(var(--cols, ${COLUMNS}), 1fr)`,
                            }}
                          >
                            {row.map((item) => (
                              <Autocomplete.Item
                                key={item.emoji}
                                value={item}
                                onClick={() => handleInsertEmoji(item.emoji)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  height: 40,
                                  width: 40,
                                  fontSize: 24,
                                  borderRadius: 6,
                                  cursor: 'pointer',
                                }}
                              >
                                {item.emoji}
                              </Autocomplete.Item>
                            ))}
                          </Autocomplete.Row>
                        ))}
                      </Autocomplete.Group>
                    );
                  }}
                </Autocomplete.List>
              </ScrollArea>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </div>
      </div>
    );
  },
};

// ============================================================================
// Async Search
// ============================================================================

interface Movie {
  id: number;
  title: string;
  year: number;
}

// Simulated movie database
const movieDatabase: Movie[] = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994 },
  { id: 2, title: 'The Godfather', year: 1972 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
  { id: 4, title: 'The Godfather Part II', year: 1974 },
  { id: 5, title: '12 Angry Men', year: 1957 },
  { id: 6, title: "Schindler's List", year: 1993 },
  { id: 7, title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { id: 8, title: 'Pulp Fiction', year: 1994 },
  { id: 9, title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { id: 10, title: 'Forrest Gump', year: 1994 },
  { id: 11, title: 'Inception', year: 2010 },
  { id: 12, title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { id: 13, title: 'Fight Club', year: 1999 },
  { id: 14, title: 'The Matrix', year: 1999 },
  { id: 15, title: 'Goodfellas', year: 1990 },
  { id: 16, title: 'Star Wars: Episode V', year: 1980 },
  { id: 17, title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { id: 18, title: 'Interstellar', year: 2014 },
  { id: 19, title: 'City of God', year: 2002 },
  { id: 20, title: 'Spirited Away', year: 2001 },
  { id: 21, title: 'Saving Private Ryan', year: 1998 },
  { id: 22, title: 'The Green Mile', year: 1999 },
  { id: 23, title: 'Parasite', year: 2019 },
  { id: 24, title: 'Léon: The Professional', year: 1994 },
  { id: 25, title: 'The Silence of the Lambs', year: 1991 },
  { id: 26, title: 'Gladiator', year: 2000 },
  { id: 27, title: 'The Departed', year: 2006 },
  { id: 28, title: 'The Prestige', year: 2006 },
  { id: 29, title: 'Whiplash', year: 2014 },
  { id: 30, title: 'The Intouchables', year: 2011 },
];

// Simulated async search function
async function searchMovies(query: string): Promise<Movie[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!query.trim()) {
    return [];
  }

  const lowerQuery = query.toLowerCase();
  return movieDatabase.filter(
    (movie) => movie.title.toLowerCase().includes(lowerQuery) || movie.year.toString().includes(query),
  );
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export const AsyncSearch: Story = {
  name: 'Async Search',
  render: () => {
    const [inputValue, setInputValue] = React.useState('');
    const [movies, setMovies] = React.useState<Movie[]>([]);
    const [isFetching, setIsFetching] = React.useState(false);
    const [hasSearched, setHasSearched] = React.useState(false);

    const debouncedQuery = useDebounce(inputValue, 300);

    // Show loading state when input has value but debounce hasn't caught up yet,
    // or when we're actively fetching
    const isLoading = isFetching || (inputValue.trim() !== '' && inputValue !== debouncedQuery);

    React.useEffect(() => {
      if (!debouncedQuery.trim()) {
        setMovies([]);
        setHasSearched(false);
        return;
      }

      let cancelled = false;
      setIsFetching(true);

      searchMovies(debouncedQuery).then((results) => {
        if (!cancelled) {
          setMovies(results);
          setIsFetching(false);
          setHasSearched(true);
        }
      });

      return () => {
        cancelled = true;
      };
    }, [debouncedQuery]);

    return (
      <div style={{ maxWidth: 400 }}>
        <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          Async Search
        </Text>
        <Text size="1" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          Searches are performed asynchronously with a debounced input. Try searching for movies by name or year.
        </Text>
        <Autocomplete.Root
          items={movies}
          itemToStringValue={(item) => (item as Movie).title}
          value={inputValue}
          onValueChange={(value) => setInputValue(value as string)}
        >
          <TextField.Root>
            <Autocomplete.Input render={<TextField.Input placeholder="Search movies by name or year..." />} />
          </TextField.Root>
          <Autocomplete.Content>
            <ScrollArea type="auto" style={{ maxHeight: 300 }}>
              {isLoading ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-4)',
                    gap: 'var(--space-2)',
                  }}
                >
                  <Spinner size="2" />
                  <Text size="2" color="gray">
                    Searching...
                  </Text>
                </div>
              ) : hasSearched && movies.length === 0 ? (
                <Autocomplete.Empty>No movies found.</Autocomplete.Empty>
              ) : (
                <Autocomplete.List>
                  {(movie) => {
                    const m = movie as Movie;
                    return (
                      <Autocomplete.Item key={m.id} value={m}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                          <span>{m.title}</span>
                          <Text size="1" color="gray">
                            {m.year}
                          </Text>
                        </div>
                      </Autocomplete.Item>
                    );
                  }}
                </Autocomplete.List>
              )}
            </ScrollArea>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    );
  },
};

// ============================================================================
// Inline Autocomplete
// ============================================================================

const programmingLanguages = [
  'Assembly',
  'Bash',
  'C',
  'C#',
  'C++',
  'Clojure',
  'COBOL',
  'CoffeeScript',
  'Crystal',
  'CSS',
  'Dart',
  'Elixir',
  'Elm',
  'Erlang',
  'F#',
  'Fortran',
  'Go',
  'GraphQL',
  'Groovy',
  'Haskell',
  'HTML',
  'Java',
  'JavaScript',
  'Julia',
  'Kotlin',
  'Lisp',
  'Lua',
  'MATLAB',
  'Nim',
  'Objective-C',
  'OCaml',
  'Pascal',
  'Perl',
  'PHP',
  'PowerShell',
  'Prolog',
  'Python',
  'R',
  'Ruby',
  'Rust',
  'Scala',
  'Scheme',
  'Shell',
  'SQL',
  'Swift',
  'TypeScript',
  'VBA',
  'Zig',
];

export const InlineAutocomplete: Story = {
  name: 'Inline Autocomplete',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 400 }}>
      <div>
        <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          Inline Autocomplete
        </Text>
        <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          Autofill the input with the highlighted item while navigating with arrow keys using the{' '}
          <Code size="2">mode</Code> prop. Accepts <Code size="2">aria-autocomplete</Code> values{' '}
          <Code size="2">list</Code>, <Code size="2">both</Code>, <Code size="2">inline</Code>, or{' '}
          <Code size="2">none</Code>.
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            <Code size="1">mode="list"</Code> (default) — Shows matching suggestions in a list
          </Text>
          <Autocomplete.Root items={programmingLanguages} mode="list">
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="Search languages..." />} />
            </TextField.Root>
            <Autocomplete.Content>
              <ScrollArea type="auto">
                <Autocomplete.Empty>No languages found.</Autocomplete.Empty>
                <Autocomplete.List>
                  {(lang) => (
                    <Autocomplete.Item key={lang as string} value={lang}>
                      {lang as string}
                    </Autocomplete.Item>
                  )}
                </Autocomplete.List>
              </ScrollArea>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </div>

        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            <Code size="1">mode="inline"</Code> — Autofills the input as you navigate with arrow keys
          </Text>
          <Autocomplete.Root items={programmingLanguages} mode="inline">
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="Search languages..." />} />
            </TextField.Root>
            <Autocomplete.Content>
              <ScrollArea type="auto">
                <Autocomplete.Empty>No languages found.</Autocomplete.Empty>
                <Autocomplete.List>
                  {(lang) => (
                    <Autocomplete.Item key={lang as string} value={lang}>
                      {lang as string}
                    </Autocomplete.Item>
                  )}
                </Autocomplete.List>
              </ScrollArea>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </div>

        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            <Code size="1">mode="both"</Code> — Combines list filtering with inline completion
          </Text>
          <Autocomplete.Root items={programmingLanguages} mode="both">
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="Search languages..." />} />
            </TextField.Root>
            <Autocomplete.Content>
              <ScrollArea type="auto">
                <Autocomplete.Empty>No languages found.</Autocomplete.Empty>
                <Autocomplete.List>
                  {(lang) => (
                    <Autocomplete.Item key={lang as string} value={lang}>
                      {lang as string}
                    </Autocomplete.Item>
                  )}
                </Autocomplete.List>
              </ScrollArea>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </div>

        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            <Code size="1">mode="none"</Code> — No automatic filtering, useful for custom filtering logic
          </Text>
          <Autocomplete.Root items={programmingLanguages} mode="none">
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="Search languages..." />} />
            </TextField.Root>
            <Autocomplete.Content>
              <ScrollArea type="auto">
                <Autocomplete.Empty>No languages found.</Autocomplete.Empty>
                <Autocomplete.List>
                  {(lang) => (
                    <Autocomplete.Item key={lang as string} value={lang}>
                      {lang as string}
                    </Autocomplete.Item>
                  )}
                </Autocomplete.List>
              </ScrollArea>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </div>
      </div>
    </div>
  ),
};

// ============================================================================
// Fuzzy Matching
// ============================================================================

// Simple fuzzy matching function that returns a score
function fuzzyMatch(text: string, query: string): { match: boolean; score: number } {
  if (!query) return { match: true, score: 0 };

  const textLower = text.toLowerCase();
  const queryLower = query.toLowerCase();

  // Check for exact substring match first (highest priority)
  if (textLower.includes(queryLower)) {
    return { match: true, score: 1000 - textLower.indexOf(queryLower) };
  }

  // Fuzzy matching: check if all query characters appear in order
  let queryIndex = 0;
  let score = 0;
  let lastMatchIndex = -1;

  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      // Bonus for consecutive matches
      if (lastMatchIndex === i - 1) {
        score += 10;
      }
      // Bonus for matching at word boundaries
      if (i === 0 || text[i - 1] === ' ' || text[i - 1] === '-' || text[i - 1] === '_') {
        score += 5;
      }
      score += 1;
      lastMatchIndex = i;
      queryIndex++;
    }
  }

  // All query characters must be found
  if (queryIndex === queryLower.length) {
    return { match: true, score };
  }

  return { match: false, score: 0 };
}

const fileNames = [
  'package.json',
  'tsconfig.json',
  'README.md',
  'index.ts',
  'App.tsx',
  'main.ts',
  'vite.config.ts',
  'eslint.config.js',
  'prettier.config.js',
  'tailwind.config.ts',
  'postcss.config.js',
  'components/Button.tsx',
  'components/Input.tsx',
  'components/Modal.tsx',
  'components/Dropdown.tsx',
  'components/Tooltip.tsx',
  'hooks/useDebounce.ts',
  'hooks/useLocalStorage.ts',
  'hooks/useMediaQuery.ts',
  'utils/formatDate.ts',
  'utils/parseJSON.ts',
  'utils/cn.ts',
  'styles/globals.css',
  'styles/variables.css',
  'types/index.d.ts',
  'api/auth.ts',
  'api/users.ts',
  'api/posts.ts',
];

export const FuzzyMatching: Story = {
  name: 'Fuzzy Matching',
  render: () => {
    const [query, setQuery] = React.useState('');

    // Filter and sort items based on fuzzy match score
    const filteredFiles = React.useMemo(() => {
      if (!query) return fileNames;

      return fileNames
        .map((file) => ({ file, ...fuzzyMatch(file, query) }))
        .filter((item) => item.match)
        .sort((a, b) => b.score - a.score)
        .map((item) => item.file);
    }, [query]);

    return (
      <div style={{ maxWidth: 400 }}>
        <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          Fuzzy Matching
        </Text>
        <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          Implement custom fuzzy matching to find items even when the query doesn&apos;t exactly match. Try typing{' '}
          <Code size="2">btn</Code> to find <Code size="2">Button.tsx</Code>, or <Code size="2">pcfg</Code> to find
          config files.
        </Text>
        <Text size="1" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          Use <Code size="1">mode="none"</Code> to disable built-in filtering and implement your own matching logic with
          controlled <Code size="1">items</Code>.
        </Text>
        <Autocomplete.Root
          items={filteredFiles}
          mode="none"
          value={query}
          onValueChange={(value) => setQuery(value as string)}
        >
          <TextField.Root>
            <Autocomplete.Input render={<TextField.Input placeholder="Search files..." />} />
          </TextField.Root>
          <Autocomplete.Content>
            <ScrollArea type="auto" style={{ maxHeight: 300 }}>
              <Autocomplete.Empty>No files found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(file) => (
                  <Autocomplete.Item key={file as string} value={file}>
                    <span style={{ fontFamily: 'var(--code-font-family)', fontSize: 'var(--font-size-1)' }}>
                      {file as string}
                    </span>
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </ScrollArea>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    );
  },
};

// ============================================================================
// Limit Results
// ============================================================================

// Large list of city names for demonstration
const allCities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
  'Fort Worth',
  'Columbus',
  'Charlotte',
  'San Francisco',
  'Indianapolis',
  'Seattle',
  'Denver',
  'Washington',
  'Boston',
  'El Paso',
  'Nashville',
  'Detroit',
  'Oklahoma City',
  'Portland',
  'Las Vegas',
  'Memphis',
  'Louisville',
  'Baltimore',
  'Milwaukee',
  'Albuquerque',
  'Tucson',
  'Fresno',
  'Sacramento',
  'Mesa',
  'Kansas City',
  'Atlanta',
  'Long Beach',
  'Colorado Springs',
  'Raleigh',
  'Miami',
  'Virginia Beach',
  'Omaha',
  'Oakland',
  'Minneapolis',
  'Tulsa',
  'Arlington',
  'New Orleans',
  'Wichita',
  'Cleveland',
  'Tampa',
  'Bakersfield',
  'Aurora',
  'Anaheim',
  'Honolulu',
  'Santa Ana',
  'Riverside',
  'Corpus Christi',
  'Lexington',
  'Stockton',
  'Henderson',
  'Saint Paul',
  'St. Louis',
  'Cincinnati',
  'Pittsburgh',
  'Greensboro',
  'Anchorage',
  'Plano',
  'Lincoln',
  'Orlando',
  'Irvine',
  'Newark',
  'Toledo',
  'Durham',
  'Chula Vista',
  'Fort Wayne',
  'Jersey City',
  'St. Petersburg',
  'Laredo',
  'Madison',
  'Chandler',
  'Buffalo',
  'Lubbock',
  'Scottsdale',
  'Reno',
  'Glendale',
  'Gilbert',
  'Winston-Salem',
  'North Las Vegas',
  'Norfolk',
  'Chesapeake',
  'Garland',
  'Irving',
  'Hialeah',
  'Fremont',
  'Boise',
  'Richmond',
  'Baton Rouge',
];

const MAX_RESULTS = 8;

export const LimitResults: Story = {
  name: 'Limit Results',
  render: () => {
    const [query, setQuery] = React.useState('');
    const { contains } = Autocomplete.useFilter();

    // Filter items and limit to MAX_RESULTS
    const limitedCities = React.useMemo(() => {
      if (!query) {
        return allCities.slice(0, MAX_RESULTS);
      }

      const filtered = allCities.filter((city) => contains(city, query));
      return filtered.slice(0, MAX_RESULTS);
    }, [query, contains]);

    const totalMatches = React.useMemo(() => {
      if (!query) return allCities.length;
      return allCities.filter((city) => contains(city, query)).length;
    }, [query, contains]);

    const hasMore = totalMatches > MAX_RESULTS;

    return (
      <div style={{ maxWidth: 350 }}>
        <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          Limit Results
        </Text>
        <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          Improve performance with large datasets by limiting the number of displayed results. Use{' '}
          <Code size="2">mode="none"</Code> and slice the filtered items array.
        </Text>
        <Text size="1" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          This example limits results to {MAX_RESULTS} items from a list of {allCities.length} US cities.
        </Text>
        <Autocomplete.Root
          items={limitedCities}
          mode="none"
          value={query}
          onValueChange={(value) => setQuery(value as string)}
        >
          <TextField.Root>
            <Autocomplete.Input render={<TextField.Input placeholder="Search cities..." />} />
          </TextField.Root>
          <Autocomplete.Content>
            <ScrollArea type="auto">
              <Autocomplete.Empty>No cities found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(city) => (
                  <Autocomplete.Item key={city as string} value={city}>
                    {city as string}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
              {hasMore && (
                <Text
                  size="1"
                  color="gray"
                  style={{
                    padding: 'var(--space-2) var(--space-3)',
                    borderTop: '1px solid var(--gray-a4)',
                    display: 'block',
                  }}
                >
                  Showing {MAX_RESULTS} of {totalMatches} results
                </Text>
              )}
            </ScrollArea>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    );
  },
};

// ============================================================================
// Auto Highlight
// ============================================================================

const browsers = [
  'Google Chrome',
  'Mozilla Firefox',
  'Microsoft Edge',
  'Apple Safari',
  'Opera',
  'Brave',
  'Vivaldi',
  'Arc',
  'Chromium',
  'Tor Browser',
  'DuckDuckGo',
  'Samsung Internet',
  'UC Browser',
  'Maxthon',
  'Pale Moon',
  'Waterfox',
  'Midori',
  'Lynx',
  'Konqueror',
  'Epiphany',
];

export const Highlight: Story = {
  name: 'Highlight',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 350 }}>
      <div>
        <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          Highlight
        </Text>
        <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          Control how items are highlighted using <Code size="2">autoHighlight</Code>,{' '}
          <Code size="2">keepHighlight</Code>, and <Code size="2">highlightItemOnHover</Code> props.
        </Text>
      </div>

      {/* autoHighlight */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <div>
          <Text size="2" weight="medium" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            autoHighlight
          </Text>
          <Text size="1" color="gray" style={{ display: 'block' }}>
            Automatically highlight the first matching item when the popup opens or when the filtered results change.
            Allows users to quickly select the top result by pressing <Code size="1">Enter</Code>.
          </Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              <Code size="1">autoHighlight={'{false}'}</Code> (default)
            </Text>
            <Autocomplete.Root items={browsers} autoHighlight={false}>
              <TextField.Root>
                <Autocomplete.Input render={<TextField.Input placeholder="No auto highlight..." />} />
              </TextField.Root>
              <Autocomplete.Content>
                <ScrollArea type="auto">
                  <Autocomplete.Empty>No browsers found.</Autocomplete.Empty>
                  <Autocomplete.List>
                    {(browser) => (
                      <Autocomplete.Item key={browser as string} value={browser}>
                        {browser as string}
                      </Autocomplete.Item>
                    )}
                  </Autocomplete.List>
                </ScrollArea>
              </Autocomplete.Content>
            </Autocomplete.Root>
          </div>
          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              <Code size="1">autoHighlight={'{true}'}</Code>
            </Text>
            <Autocomplete.Root items={browsers} autoHighlight>
              <TextField.Root>
                <Autocomplete.Input render={<TextField.Input placeholder="First item auto-highlighted..." />} />
              </TextField.Root>
              <Autocomplete.Content>
                <ScrollArea type="auto">
                  <Autocomplete.Empty>No browsers found.</Autocomplete.Empty>
                  <Autocomplete.List>
                    {(browser) => (
                      <Autocomplete.Item key={browser as string} value={browser}>
                        {browser as string}
                      </Autocomplete.Item>
                    )}
                  </Autocomplete.List>
                </ScrollArea>
              </Autocomplete.Content>
            </Autocomplete.Root>
          </div>
        </div>
      </div>

      {/* keepHighlight */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <div>
          <Text size="2" weight="medium" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            keepHighlight
          </Text>
          <Text size="1" color="gray" style={{ display: 'block' }}>
            Whether the highlighted item should be preserved when the pointer leaves the list.
          </Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              <Code size="1">keepHighlight={'{false}'}</Code> (default) — Highlight clears on pointer leave
            </Text>
            <Autocomplete.Root items={browsers} keepHighlight={false}>
              <TextField.Root>
                <Autocomplete.Input render={<TextField.Input placeholder="Hover then move away..." />} />
              </TextField.Root>
              <Autocomplete.Content>
                <ScrollArea type="auto">
                  <Autocomplete.Empty>No browsers found.</Autocomplete.Empty>
                  <Autocomplete.List>
                    {(browser) => (
                      <Autocomplete.Item key={browser as string} value={browser}>
                        {browser as string}
                      </Autocomplete.Item>
                    )}
                  </Autocomplete.List>
                </ScrollArea>
              </Autocomplete.Content>
            </Autocomplete.Root>
          </div>
          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              <Code size="1">keepHighlight={'{true}'}</Code> — Highlight preserved on pointer leave
            </Text>
            <Autocomplete.Root items={browsers} keepHighlight>
              <TextField.Root>
                <Autocomplete.Input render={<TextField.Input placeholder="Hover then move away..." />} />
              </TextField.Root>
              <Autocomplete.Content>
                <ScrollArea type="auto">
                  <Autocomplete.Empty>No browsers found.</Autocomplete.Empty>
                  <Autocomplete.List>
                    {(browser) => (
                      <Autocomplete.Item key={browser as string} value={browser}>
                        {browser as string}
                      </Autocomplete.Item>
                    )}
                  </Autocomplete.List>
                </ScrollArea>
              </Autocomplete.Content>
            </Autocomplete.Root>
          </div>
        </div>
      </div>

      {/* highlightItemOnHover */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <div>
          <Text size="2" weight="medium" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            highlightItemOnHover
          </Text>
          <Text size="1" color="gray" style={{ display: 'block' }}>
            Whether moving the pointer over items should highlight them. Disabling this allows CSS{' '}
            <Code size="1">:hover</Code> to be differentiated from the <Code size="1">[data-highlighted]</Code> state.
          </Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              <Code size="1">highlightItemOnHover={'{true}'}</Code> (default) — Pointer highlights items
            </Text>
            <Autocomplete.Root items={browsers} highlightItemOnHover>
              <TextField.Root>
                <Autocomplete.Input render={<TextField.Input placeholder="Hover over items..." />} />
              </TextField.Root>
              <Autocomplete.Content>
                <ScrollArea type="auto">
                  <Autocomplete.Empty>No browsers found.</Autocomplete.Empty>
                  <Autocomplete.List>
                    {(browser) => (
                      <Autocomplete.Item key={browser as string} value={browser}>
                        {browser as string}
                      </Autocomplete.Item>
                    )}
                  </Autocomplete.List>
                </ScrollArea>
              </Autocomplete.Content>
            </Autocomplete.Root>
          </div>
          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              <Code size="1">highlightItemOnHover={'{false}'}</Code> — Keyboard only highlight
            </Text>
            <Autocomplete.Root items={browsers} highlightItemOnHover={false}>
              <TextField.Root>
                <Autocomplete.Input render={<TextField.Input placeholder="Use arrow keys to navigate..." />} />
              </TextField.Root>
              <Autocomplete.Content>
                <ScrollArea type="auto">
                  <Autocomplete.Empty>No browsers found.</Autocomplete.Empty>
                  <Autocomplete.List>
                    {(browser) => (
                      <Autocomplete.Item key={browser as string} value={browser}>
                        {browser as string}
                      </Autocomplete.Item>
                    )}
                  </Autocomplete.List>
                </ScrollArea>
              </Autocomplete.Content>
            </Autocomplete.Root>
          </div>
        </div>
      </div>
    </div>
  ),
};

// ============================================================================
// Custom Filter
// ============================================================================

const fruits = [
  'Apple',
  'Apricot',
  'Banana',
  'Blackberry',
  'Blueberry',
  'Cherry',
  'Coconut',
  'Cranberry',
  'Date',
  'Dragonfruit',
  'Fig',
  'Grape',
  'Guava',
  'Kiwi',
  'Lemon',
  'Lime',
  'Mango',
  'Melon',
  'Nectarine',
  'Orange',
  'Papaya',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Pomegranate',
  'Raspberry',
  'Strawberry',
  'Tangerine',
  'Watermelon',
];

export const CustomFilter: Story = {
  name: 'Custom Filter',
  render: () => {
    // Example 1: Using filter prop
    const startsWithFilter = (itemValue: unknown, query: string) => {
      const item = itemValue as string;
      return item.toLowerCase().startsWith(query.toLowerCase());
    };

    // Example 2: Using filteredItems prop with useFilter
    const [query, setQuery] = React.useState('');
    const { contains } = Autocomplete.useFilter();

    const filteredFruits = React.useMemo(() => {
      if (!query) return fruits;
      return fruits.filter((fruit) => contains(fruit, query));
    }, [query, contains]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 350 }}>
        <div>
          <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            Custom Filter
          </Text>
          <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
            Control filtering behavior using the <Code size="2">filter</Code> prop for custom matching logic, or the{' '}
            <Code size="2">filteredItems</Code> prop for full external control.
          </Text>
        </div>

        {/* filter prop */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div>
            <Text size="2" weight="medium" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              filter
            </Text>
            <Text size="1" color="gray" style={{ display: 'block' }}>
              Custom filter function used to match items against the input query. Receives the item value, query string,
              and optional <Code size="1">itemToString</Code> function.
            </Text>
          </div>
          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              Starts-with filter (only matches items starting with the query)
            </Text>
            <Autocomplete.Root items={fruits} filter={startsWithFilter}>
              <TextField.Root>
                <Autocomplete.Input render={<TextField.Input placeholder="Try typing 'ap' or 'ba'..." />} />
              </TextField.Root>
              <Autocomplete.Content>
                <ScrollArea type="auto">
                  <Autocomplete.Empty>No fruits found.</Autocomplete.Empty>
                  <Autocomplete.List>
                    {(fruit) => (
                      <Autocomplete.Item key={fruit as string} value={fruit}>
                        {fruit as string}
                      </Autocomplete.Item>
                    )}
                  </Autocomplete.List>
                </ScrollArea>
              </Autocomplete.Content>
            </Autocomplete.Root>
          </div>
        </div>

        {/* filteredItems prop */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div>
            <Text size="2" weight="medium" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              filteredItems
            </Text>
            <Text size="1" color="gray" style={{ display: 'block' }}>
              Pre-filtered items to display in the list. When provided, the list uses these items instead of filtering
              internally. Use with <Code size="1">useFilter()</Code> hook for full control over filtering logic.
            </Text>
          </div>
          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              External filtering with <Code size="1">filteredItems</Code> and <Code size="1">useFilter()</Code>
            </Text>
            <Autocomplete.Root
              items={fruits}
              filteredItems={filteredFruits}
              value={query}
              onValueChange={(value) => setQuery(value as string)}
            >
              <TextField.Root>
                <Autocomplete.Input render={<TextField.Input placeholder="Search fruits..." />} />
              </TextField.Root>
              <Autocomplete.Content>
                <ScrollArea type="auto">
                  <Autocomplete.Empty>No fruits found.</Autocomplete.Empty>
                  <Autocomplete.List>
                    {(fruit) => (
                      <Autocomplete.Item key={fruit as string} value={fruit}>
                        {fruit as string}
                      </Autocomplete.Item>
                    )}
                  </Autocomplete.List>
                </ScrollArea>
              </Autocomplete.Content>
            </Autocomplete.Root>
            <Text size="1" color="gray" style={{ marginTop: 'var(--space-2)', display: 'block', fontStyle: 'italic' }}>
              Showing {filteredFruits.length} of {fruits.length} fruits
            </Text>
          </div>
        </div>
      </div>
    );
  },
};

// ============================================================================
// Modal
// ============================================================================

export const Modal: Story = {
  name: 'Modal',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 350 }}>
      <div>
        <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          Modal
        </Text>
        <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          The <Code size="2">modal</Code> prop determines if the popup enters a modal state when open.
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            <Code size="1">modal={'{false}'}</Code> (default) — Allows interaction with the rest of the document
          </Text>
          <Autocomplete.Root items={countries} modal={false}>
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="Non-modal autocomplete..." />} />
            </TextField.Root>
            <Autocomplete.Content>
              <ScrollArea type="auto">
                <Autocomplete.Empty>No countries found.</Autocomplete.Empty>
                <Autocomplete.List>
                  {(country) => (
                    <Autocomplete.Item key={country as string} value={country}>
                      {country as string}
                    </Autocomplete.Item>
                  )}
                </Autocomplete.List>
              </ScrollArea>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </div>

        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            <Code size="1">modal={'{true}'}</Code> — Locks page scroll and disables outside interactions
          </Text>
          <Autocomplete.Root items={countries} modal>
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="Modal autocomplete..." />} />
            </TextField.Root>
            <Autocomplete.Content>
              <ScrollArea type="auto">
                <Autocomplete.Empty>No countries found.</Autocomplete.Empty>
                <Autocomplete.List>
                  {(country) => (
                    <Autocomplete.Item key={country as string} value={country}>
                      {country as string}
                    </Autocomplete.Item>
                  )}
                </Autocomplete.List>
              </ScrollArea>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </div>

        <Text size="1" color="gray" style={{ fontStyle: 'italic' }}>
          Try scrolling the page or clicking outside while each popup is open to see the difference.
        </Text>
      </div>
    </div>
  ),
};
