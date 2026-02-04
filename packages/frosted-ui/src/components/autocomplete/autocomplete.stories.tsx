import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Code, ScrollArea, Text, TextField } from '../index';
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
          <ScrollArea type="auto">
            <Autocomplete.Empty>No produce found.</Autocomplete.Empty>
            <Autocomplete.List>
              {(item) => (
                <Autocomplete.Item key={item as string} value={item}>
                  {item as string}
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
            <Autocomplete.Trigger
              aria-label="Choose emoji"
              style={{
                width: 32,
                height: 32,
                fontSize: 18,
              }}
            >
              😀
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
                  padding: '8px 16px 16px',
                  fontSize: 'var(--font-size-2)',
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
