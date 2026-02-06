import {
  Bell16,
  Copy16,
  Document16,
  Download16,
  Gear16,
  Home16,
  MagnifyingGlass16,
  Moon16,
  Plus16,
  QuestionCircle16,
  Sad32,
  Trash16,
  User16,
  XCircleFilled16,
} from '@frosted-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Code, IconButton, Kbd, ScrollArea, Spinner, Text, TextField } from '../index';
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 500 }}>
      <div style={{ maxWidth: 300 }}>
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
      </div>

      <div
        style={{
          padding: 'var(--space-4)',
          backgroundColor: 'var(--gray-a2)',
          borderRadius: 'var(--radius-3)',
          borderLeft: '3px solid var(--accent-9)',
        }}
      >
        <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          Usage Guidelines
        </Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div>
            <Text size="2" weight="medium" style={{ display: 'block', marginBottom: 'var(--space-1)' }}>
              Avoid when selection state is needed
            </Text>
            <Text size="2" color="gray">
              Use Combobox instead of Autocomplete if the selection should be remembered and the input value cannot be
              custom. Unlike Combobox, Autocomplete&apos;s input can contain free-form text, as its suggestions only
              optionally autocomplete the text.
            </Text>
          </div>
          <div>
            <Text size="2" weight="medium" style={{ display: 'block', marginBottom: 'var(--space-1)' }}>
              Can be used for filterable command pickers
            </Text>
            <Text size="2" color="gray">
              The input can be used as a filter for command items that perform an action when clicked when rendered
              inside the popup.
            </Text>
          </div>
        </div>
      </div>
    </div>
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
// With Slot
// ============================================================================

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
              <MagnifyingGlass16 />
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
              <MagnifyingGlass16 />
            </TextField.Slot>
            <Autocomplete.Input render={<TextField.Input placeholder="Search countries..." />} />
            <TextField.Slot>
              <Autocomplete.Clear>
                <IconButton variant="ghost" color="gray" size="1">
                  <XCircleFilled16 />
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
            onOpenChange={(nextOpen, eventDetails) => {
              // Clear search on ESC instead of closing popup if there's a search value
              if (!nextOpen && eventDetails.reason === 'escape-key' && searchValue) {
                eventDetails.cancel();
                setSearchValue('');
                return;
              }
              setPickerOpen(nextOpen);
            }}
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
                width: 208,
                padding: 0,
              }}
            >
              <div style={{ padding: 8, borderBottom: '1px solid var(--color-stroke)' }}>
                <TextField.Root size="3" variant="soft" color="gray">
                  <TextField.Slot>
                    <MagnifyingGlass16 />
                  </TextField.Slot>
                  <Autocomplete.Input render={<TextField.Input placeholder="Search emojis…" />} />

                  <TextField.Slot style={{ padding: 4 }}>
                    <Autocomplete.Clear>
                      <IconButton variant="ghost" color="gray" style={{ borderRadius: '50%' }}>
                        <XCircleFilled16 />
                      </IconButton>
                    </Autocomplete.Clear>
                  </TextField.Slot>
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
                  height: 272,
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
// Command Picker
// ============================================================================

interface Command {
  id: string;
  label: string;
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

interface CommandGroup {
  label: string;
  items: Command[];
}

export const CommandPicker: Story = {
  name: 'Command Picker',
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [toast, setToast] = React.useState<{ message: string; visible: boolean }>({ message: '', visible: false });

    const showToast = (message: string) => {
      setToast({ message, visible: true });
      setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 2000);
    };

    const handleAction = (action: () => void) => {
      action();
      setOpen(false);
      setSearchValue('');
    };

    const commandGroups: CommandGroup[] = React.useMemo(
      () => [
        {
          label: 'Navigation',
          items: [
            {
              id: 'home',
              label: 'Go to Home',
              icon: <Home16 />,
              shortcut: '⌘H',
              action: () => showToast('Navigating to Home...'),
            },
            {
              id: 'files',
              label: 'Go to Files',
              icon: <Document16 />,
              shortcut: '⌘F',
              action: () => showToast('Navigating to Files...'),
            },
            {
              id: 'settings',
              label: 'Go to Settings',
              icon: <Gear16 />,
              shortcut: '⌘,',
              action: () => showToast('Opening Settings...'),
            },
            {
              id: 'profile',
              label: 'Go to Profile',
              icon: <User16 />,
              shortcut: '⌘P',
              action: () => showToast('Opening Profile...'),
            },
          ],
        },
        {
          label: 'Actions',
          items: [
            {
              id: 'new',
              label: 'Create New Document',
              icon: <Plus16 />,
              shortcut: '⌘N',
              action: () => showToast('Creating new document...'),
            },
            {
              id: 'copy',
              label: 'Copy to Clipboard',
              icon: <Copy16 />,
              shortcut: '⌘C',
              action: () => showToast('Copied to clipboard!'),
            },
            {
              id: 'download',
              label: 'Download File',
              icon: <Download16 />,
              shortcut: '⌘D',
              action: () => showToast('Downloading file...'),
            },
            {
              id: 'delete',
              label: 'Delete Item',
              icon: <Trash16 />,
              shortcut: '⌘⌫',
              action: () => showToast('Item deleted'),
            },
          ],
        },
        {
          label: 'Preferences',
          items: [
            {
              id: 'theme',
              label: 'Toggle Dark Mode',
              icon: <Moon16 />,
              shortcut: '⌘T',
              action: () => showToast('Theme toggled!'),
            },
            {
              id: 'notifications',
              label: 'Notification Settings',
              icon: <Bell16 />,
              action: () => showToast('Opening notifications...'),
            },
            {
              id: 'help',
              label: 'Help & Documentation',
              icon: <QuestionCircle16 />,
              shortcut: '⌘?',
              action: () => showToast('Opening help center...'),
            },
          ],
        },
      ],
      [],
    );

    // Handle keyboard shortcut to open
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          setOpen(true);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const textFieldRootRef = React.useRef<HTMLDivElement>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 500 }}>
        <div>
          <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            Command Picker
          </Text>
          <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
            A filterable command palette that performs actions when items are clicked. The input inside the popup
            filters the available commands. Press <Code size="2">⌘K</Code> or click the button to open.
          </Text>
        </div>

        <Autocomplete.Root
          openOnInputClick
          items={commandGroups}
          itemToStringValue={(item) => (item as Command).label}
          open={open}
          onOpenChange={(nextOpen, eventDetails) => {
            if (!nextOpen && eventDetails.reason === 'escape-key' && searchValue) {
              eventDetails.cancel(); // Prevent the popup from closing
              setSearchValue(''); // Clear the search input instead
              return; // Exit early, don't update open state
            }
            setOpen(nextOpen);
            if (!nextOpen) {
              setSearchValue('');
            }
          }}
          value={searchValue}
          onValueChange={(value, details) => {
            if (details.reason !== 'item-press') {
              setSearchValue(value as string);
            }
          }}
        >
          <TextField.Root
            style={{
              width: 400,
            }}
            size="3"
            variant="soft"
            color="gray"
            ref={textFieldRootRef}
          >
            <TextField.Slot>
              <MagnifyingGlass16 />
            </TextField.Slot>
            <Autocomplete.Input render={<TextField.Input placeholder="Type a command or search..." />} />
            {searchValue && (
              <TextField.Slot style={{ paddingRight: 4 }}>
                <Autocomplete.Clear>
                  <IconButton variant="ghost" color="gray" size="2" style={{ borderRadius: '50%' }}>
                    <XCircleFilled16 />
                  </IconButton>
                </Autocomplete.Clear>
              </TextField.Slot>
            )}
          </TextField.Root>
          <Autocomplete.Content
            sideOffset={4}
            size="3"
            style={{
              maxHeight: 360,
              padding: 0,
              overflow: 'hidden',
            }}
            anchor={textFieldRootRef}
          >
            <ScrollArea type="auto" style={{ maxHeight: 300 }}>
              <Autocomplete.Empty
                style={{
                  padding: 32,
                  textAlign: 'center',
                  color: 'var(--gray-a10)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                  }}
                >
                  <Sad32
                    style={{
                      color: 'var(--gray-a10)',
                    }}
                  />

                  <Text size="2" color="gray">
                    Try searching for something else.
                  </Text>
                </div>
              </Autocomplete.Empty>
              <Autocomplete.List style={{ padding: 8 }}>
                {(group) => {
                  const g = group as CommandGroup;
                  return (
                    <Autocomplete.Group key={g.label} items={g.items}>
                      <Autocomplete.GroupLabel
                        style={{
                          padding: 'var(--space-2) var(--space-3)',
                          fontSize: 'var(--font-size-1)',
                          fontWeight: 500,
                          color: 'var(--gray-a10)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {g.label}
                      </Autocomplete.GroupLabel>
                      {g.items.map((command) => (
                        <Autocomplete.Item
                          key={command.id}
                          value={command}
                          onClick={() => handleAction(command.action)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '6px 12px 6px 6px',
                            borderRadius: 'var(--radius-3)',
                            cursor: 'pointer',
                          }}
                        >
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'var(--space-3)',
                            }}
                          >
                            <span
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 28,
                                height: 28,
                                borderRadius: 'var(--radius-2)',
                                background: 'var(--gray-a3)',
                                color: 'var(--gray-a11)',
                              }}
                            >
                              {command.icon}
                            </span>
                            {command.label}
                          </span>
                          {command.shortcut && <Kbd size="1">{command.shortcut}</Kbd>}
                        </Autocomplete.Item>
                      ))}
                    </Autocomplete.Group>
                  );
                }}
              </Autocomplete.List>
            </ScrollArea>
            <Text
              render={<footer />}
              size="1"
              style={{
                padding: 'var(--space-2) var(--space-3)',
                borderTop: '1px solid var(--gray-a4)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',

                color: 'var(--gray-a10)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Kbd size="1">↑</Kbd>
                  <Kbd size="1">↓</Kbd>
                  <span>to navigate</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Kbd size="1">↵</Kbd>
                  <span>to select</span>
                </span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Kbd size="1">esc</Kbd>
                <span>to close</span>
              </span>
            </Text>
          </Autocomplete.Content>
        </Autocomplete.Root>

        {/* Toast notification */}
        <div
          style={{
            position: 'fixed',
            bottom: 24,
            left: '50%',
            transform: `translateX(-50%) translateY(${toast.visible ? 0 : 100}px)`,
            padding: 'var(--space-3) var(--space-4)',
            background: 'var(--gray-12)',
            color: 'var(--gray-1)',
            borderRadius: 'var(--radius-3)',
            fontSize: 'var(--font-size-2)',
            fontWeight: 500,
            boxShadow: 'var(--shadow-4)',
            opacity: toast.visible ? 1 : 0,
            transition: 'transform 200ms ease, opacity 200ms ease',
            pointerEvents: 'none',
            zIndex: 1000,
          }}
        >
          {toast.message}
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
// onItemHighlighted Callback
// ============================================================================

export const OnItemHighlighted: Story = {
  name: 'onItemHighlighted',
  render: () => {
    const [highlightLog, setHighlightLog] = React.useState<
      { value: string | undefined; reason: string; timestamp: string }[]
    >([]);

    const handleItemHighlighted = (highlightedValue: unknown, eventDetails: Autocomplete.RootHighlightEventDetails) => {
      const timestamp = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3,
      });

      setHighlightLog((prev) =>
        [
          {
            value: highlightedValue as string | undefined,
            reason: eventDetails.reason,
            timestamp,
          },
          ...prev,
        ].slice(0, 10),
      );
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
        <div>
          <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            onItemHighlighted
          </Text>
          <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
            Callback fired when an item is highlighted or unhighlighted. Receives the highlighted item value (or{' '}
            <Code size="2">undefined</Code> if no item is highlighted) and event details with a{' '}
            <Code size="2">reason</Code> property describing why the highlight changed. Use{' '}
            <Code size="2">Autocomplete.RootHighlightEventDetails</Code> to type the event details.
          </Text>
        </div>

        <div
          style={{
            padding: 'var(--space-3)',
            backgroundColor: 'var(--gray-a3)',
            borderRadius: 'var(--radius-2)',
          }}
        >
          <Text size="1" weight="medium" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            Highlight Reasons:
          </Text>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" color="gray">
              <Code size="1">&apos;keyboard&apos;</Code> — The highlight changed due to keyboard navigation (arrow
              keys).
            </Text>
            <Text size="1" color="gray">
              <Code size="1">&apos;pointer&apos;</Code> — The highlight changed due to pointer hovering.
            </Text>
            <Text size="1" color="gray">
              <Code size="1">&apos;none&apos;</Code> — The highlight changed programmatically.
            </Text>
          </div>
        </div>

        <Autocomplete.Root items={browsers} onItemHighlighted={handleItemHighlighted}>
          <TextField.Root>
            <Autocomplete.Input render={<TextField.Input placeholder="Try keyboard and mouse navigation..." />} />
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

        <div>
          <Text size="1" weight="medium" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            Event Log (last 10):
          </Text>
          <div
            style={{
              fontFamily: 'var(--code-font-family)',
              fontSize: 'var(--font-size-1)',
              backgroundColor: 'var(--gray-a2)',
              borderRadius: 'var(--radius-2)',
              padding: 'var(--space-2)',
              maxHeight: 200,
              overflow: 'auto',
            }}
          >
            {highlightLog.length === 0 ? (
              <Text size="1" color="gray">
                Interact with the autocomplete to see events...
              </Text>
            ) : (
              highlightLog.map((log, i) => (
                <div key={i} style={{ padding: 'var(--space-1) 0', borderBottom: '1px solid var(--gray-a4)' }}>
                  <Text size="1" color="gray">
                    {log.timestamp}
                  </Text>{' '}
                  <Code
                    size="1"
                    color={log.reason === 'keyboard' ? 'blue' : log.reason === 'pointer' ? 'green' : 'gray'}
                  >
                    {log.reason}
                  </Code>{' '}
                  <Text size="1">{log.value ?? '(none)'}</Text>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  },
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

// ============================================================================
// Open on Input Click
// ============================================================================

export const OpenOnInputClick: Story = {
  name: 'openOnInputClick',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 350 }}>
      <div>
        <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          openOnInputClick
        </Text>
        <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          Whether the popup opens when clicking the input.
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            <Code size="1">openOnInputClick={'{true}'}</Code> (default) — Popup opens on input click
          </Text>
          <Autocomplete.Root items={countries} openOnInputClick>
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="Click to open..." />} />
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
            <Code size="1">openOnInputClick={'{false}'}</Code> — Popup only opens when typing
          </Text>
          <Autocomplete.Root items={countries} openOnInputClick={false}>
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="Type to open..." />} />
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
          Click on each input to see the difference. When disabled, the popup only opens when you start typing.
        </Text>
      </div>
    </div>
  ),
};

// ============================================================================
// Submit on Item Click
// ============================================================================

export const SubmitOnItemClick: Story = {
  name: 'submitOnItemClick',
  render: () => {
    const [submittedValue, setSubmittedValue] = React.useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const search = formData.get('search') as string;
      setSubmittedValue(search);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 350 }}>
        <div>
          <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            submitOnItemClick
          </Text>
          <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
            Whether clicking an item should submit the autocomplete&apos;s owning form. By default, clicking an item via
            a pointer or Enter key does not submit the owning form. Useful when the autocomplete is used as a
            single-field form search input.
          </Text>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              <Code size="1">submitOnItemClick={'{false}'}</Code> (default) — Selecting an item does not submit the form
            </Text>
            <form onSubmit={handleSubmit}>
              <Autocomplete.Root items={countries} submitOnItemClick={false}>
                <TextField.Root>
                  <Autocomplete.Input
                    name="search"
                    render={<TextField.Input placeholder="Select an item (won't submit)..." />}
                  />
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
            </form>
          </div>

          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              <Code size="1">submitOnItemClick={'{true}'}</Code> — Selecting an item submits the form
            </Text>
            <form onSubmit={handleSubmit}>
              <Autocomplete.Root items={countries} submitOnItemClick>
                <TextField.Root>
                  <Autocomplete.Input
                    name="search"
                    render={<TextField.Input placeholder="Select an item (will submit)..." />}
                  />
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
            </form>
          </div>

          {submittedValue !== null && (
            <div
              style={{
                padding: 'var(--space-3)',
                backgroundColor: 'var(--green-a3)',
                borderRadius: 'var(--radius-2)',
              }}
            >
              <Text size="2" color="green">
                Form submitted with value: <Code size="2">{submittedValue || '(empty)'}</Code>
              </Text>
            </div>
          )}

          <Text size="1" color="gray" style={{ fontStyle: 'italic' }}>
            Select an item from each autocomplete. The second one will trigger the form submission indicator above.
          </Text>
        </div>
      </div>
    );
  },
};

// ============================================================================
// Disabled
// ============================================================================

export const Disabled: Story = {
  name: 'disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 350 }}>
      <div>
        <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
          disabled
        </Text>
        <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
          Whether the component should ignore user interaction.
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div>
          <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
            <Code size="1">disabled={'{false}'}</Code> (default) — Component is interactive
          </Text>
          <Autocomplete.Root items={countries} disabled={false}>
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="Interactive autocomplete..." />} />
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
            <Code size="1">disabled={'{true}'}</Code> — Component ignores user interaction
          </Text>
          <Autocomplete.Root items={countries} disabled>
            <TextField.Root>
              <Autocomplete.Input render={<TextField.Input placeholder="Disabled autocomplete..." />} />
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
          Try clicking or typing in each input. The disabled autocomplete will not respond to any interaction.
        </Text>
      </div>
    </div>
  ),
};

// ============================================================================
// Input Ref
// ============================================================================

export const InputRef: Story = {
  name: 'inputRef',
  render: () => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [inputInfo, setInputInfo] = React.useState<string | null>(null);

    const handleShowInputInfo = () => {
      if (inputRef.current) {
        setInputInfo(
          JSON.stringify(
            {
              tagName: inputRef.current.tagName,
              type: inputRef.current.type,
              value: inputRef.current.value,
              name: inputRef.current.name || '(none)',
              id: inputRef.current.id || '(none)',
            },
            null,
            2,
          ),
        );
      }
    };

    const handleFocusInput = () => {
      inputRef.current?.focus();
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 350 }}>
        <div>
          <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            inputRef
          </Text>
          <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
            A ref to the hidden input element. Useful for programmatic access to the input, such as focusing or reading
            form data.
          </Text>
        </div>

        <Autocomplete.Root items={countries} inputRef={inputRef}>
          <TextField.Root>
            <Autocomplete.Input name="country" render={<TextField.Input placeholder="Search countries..." />} />
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

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <button
            type="button"
            onClick={handleFocusInput}
            style={{
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-2)',
              border: '1px solid var(--gray-a6)',
              background: 'var(--gray-a3)',
              cursor: 'pointer',
              fontSize: 'var(--font-size-1)',
            }}
          >
            Focus Input
          </button>
          <button
            type="button"
            onClick={handleShowInputInfo}
            style={{
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-2)',
              border: '1px solid var(--gray-a6)',
              background: 'var(--gray-a3)',
              cursor: 'pointer',
              fontSize: 'var(--font-size-1)',
            }}
          >
            Show Input Info
          </button>
        </div>

        {inputInfo && (
          <div
            style={{
              padding: 'var(--space-3)',
              backgroundColor: 'var(--gray-a3)',
              borderRadius: 'var(--radius-2)',
              fontFamily: 'var(--code-font-family)',
              fontSize: 'var(--font-size-1)',
              whiteSpace: 'pre',
            }}
          >
            {inputInfo}
          </div>
        )}

        <Text size="1" color="gray" style={{ fontStyle: 'italic' }}>
          Use the buttons above to interact with the input via the ref. Type something first, then click &quot;Show
          Input Info&quot; to see the current input state.
        </Text>
      </div>
    );
  },
};

// ============================================================================
// Actions Ref
// ============================================================================

export const ActionsRef: Story = {
  name: 'actionsRef',
  render: () => {
    const actionsRef = React.useRef<Autocomplete.Actions>(null!);
    const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSelect = (value: unknown) => {
      setSelectedCountry(value as string);
      // Programmatically close after selection with a delay
      setTimeout(() => {
        actionsRef.current?.unmount();
      }, 1000);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
        <div>
          <Text size="2" weight="bold" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            actionsRef
          </Text>
          <Text size="2" color="gray" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
            A ref to imperative actions. Use <Code size="2">Autocomplete.Actions</Code> to type the ref.
          </Text>
        </div>

        <div
          style={{
            padding: 'var(--space-3)',
            backgroundColor: 'var(--gray-a3)',
            borderRadius: 'var(--radius-2)',
          }}
        >
          <Text size="1" weight="medium" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>
            Available Actions:
          </Text>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" color="gray">
              <Code size="1">unmount()</Code> — Manually unmount the autocomplete popup. Useful when the autocomplete's
              animation is controlled by an external library, allowing you to wait for the exit animation to complete
              before unmounting.
            </Text>
          </div>
        </div>

        <Autocomplete.Root
          items={countries}
          actionsRef={actionsRef}
          open={isOpen}
          onOpenChange={setIsOpen}
          onValueChange={handleSelect}
        >
          <TextField.Root>
            <Autocomplete.Input render={<TextField.Input placeholder="Select a country..." />} />
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

        {selectedCountry && (
          <div
            style={{
              padding: 'var(--space-3)',
              backgroundColor: 'var(--green-a3)',
              borderRadius: 'var(--radius-2)',
            }}
          >
            <Text size="2" color="green">
              Selected: <Code size="2">{selectedCountry}</Code>
            </Text>
            <Text size="1" color="gray" style={{ display: 'block', marginTop: 'var(--space-1)' }}>
              The popup will unmount after 1 second via actionsRef.unmount()
            </Text>
          </div>
        )}

        <Text size="1" color="gray" style={{ fontStyle: 'italic' }}>
          Select a country to see the actionsRef in action. The popup will be programmatically unmounted after a 1
          second delay.
        </Text>
      </div>
    );
  },
};
