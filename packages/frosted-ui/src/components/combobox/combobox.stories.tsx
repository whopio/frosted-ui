import { ChevronDown16, MagnifyingGlass16 } from '@frosted-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Avatar, Button, Dialog, Field, ScrollArea, Spinner, Text, TextField } from '../index';
import * as Combobox from './combobox';

const meta: Meta<typeof Combobox.Root> = {
  title: 'Controls/Combobox',
  component: Combobox.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Combobox.Root>;

const fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Pineapple',
  'Grape',
  'Mango',
  'Strawberry',
  'Blueberry',
  'Raspberry',
  'Watermelon',
];

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

// ============================================================================
// Default (single)
// ============================================================================

const DefaultDemo = ({ size, variant }: { size: '1' | '2' | '3' | '4'; variant: 'surface' | 'soft' }) => (
  <Combobox.Root items={fruits} defaultValue="Apple" size={size}>
    <Combobox.InputRoot showClear variant={variant}>
      <Combobox.Input placeholder="Choose a fruit..." />
    </Combobox.InputRoot>
    <Combobox.Content>
      <ScrollArea type="auto" style={{ maxHeight: 300 }}>
        <Combobox.Empty>No fruits found.</Combobox.Empty>
        <Combobox.List>
          {(item) => (
            <Combobox.Item key={item} value={item}>
              {item}
            </Combobox.Item>
          )}
        </Combobox.List>
      </ScrollArea>
    </Combobox.Content>
  </Combobox.Root>
);

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 64 }}>
      <div style={{ maxWidth: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {(['1', '2', '3', '4'] as const).map((size) => (
          <div key={size}>
            <Text size="1" color="gray" style={{ marginBottom: 4, display: 'block' }}>
              Size {size}
            </Text>
            <DefaultDemo size={size} variant="surface" />
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {(['1', '2', '3', '4'] as const).map((size) => (
          <div key={size}>
            <Text size="1" color="gray" style={{ marginBottom: 4, display: 'block' }}>
              Size {size}
            </Text>
            <DefaultDemo size={size} variant="soft" />
          </div>
        ))}
      </div>
    </div>
  ),
};

// ============================================================================
// Multiple (chips)
// ============================================================================

const MultipleDemo = ({ size, variant }: { size: '1' | '2' | '3' | '4'; variant: 'surface' | 'soft' }) => (
  <Combobox.Root items={fruits} multiple defaultValue={['Apple', 'Orange']} size={size}>
    <Combobox.Chips variant={variant}>
      <Combobox.Value>
        {(values: string[]) => (
          <React.Fragment>
            {values.map((value) => (
              <Combobox.Chip key={value}>{value}</Combobox.Chip>
            ))}
            <Combobox.ChipsInput placeholder={values.length > 0 ? '' : 'Add fruit...'} />
          </React.Fragment>
        )}
      </Combobox.Value>
    </Combobox.Chips>
    <Combobox.Content>
      <ScrollArea type="auto" style={{ maxHeight: 300 }}>
        <Combobox.Empty>No fruits found.</Combobox.Empty>
        <Combobox.List>
          {(item) => (
            <Combobox.Item key={item} value={item}>
              {item}
            </Combobox.Item>
          )}
        </Combobox.List>
      </ScrollArea>
    </Combobox.Content>
  </Combobox.Root>
);

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 64 }}>
      <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {(['1', '2', '3', '4'] as const).map((size) => (
          <div key={size}>
            <Text size="1" color="gray" style={{ marginBottom: 4, display: 'block' }}>
              Size {size}
            </Text>
            <MultipleDemo size={size} variant="surface" />
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {(['1', '2', '3', '4'] as const).map((size) => (
          <div key={size}>
            <Text size="1" color="gray" style={{ marginBottom: 4, display: 'block' }}>
              Size {size}
            </Text>
            <MultipleDemo size={size} variant="soft" />
          </div>
        ))}
      </div>
    </div>
  ),
};

// ============================================================================
// Grouped
// ============================================================================

interface ProduceGroup {
  label: string;
  items: string[];
}

const produceGroups: ProduceGroup[] = [
  { label: 'Fruits', items: ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'] },
  { label: 'Vegetables', items: ['Carrot', 'Lettuce', 'Potato', 'Tomato', 'Broccoli'] },
];

export const Grouped: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={produceGroups} size="2">
        <Combobox.InputRoot>
          <Combobox.Input placeholder="Select produce" />
        </Combobox.InputRoot>
        <Combobox.Content>
          <ScrollArea type="auto" style={{ maxHeight: 300 }}>
            <Combobox.Empty>No results.</Combobox.Empty>
            <Combobox.List>
              {(group: ProduceGroup, index) => {
                return (
                  <React.Fragment key={group.label}>
                    {index > 0 && <Combobox.Separator />}
                    <Combobox.Group items={group.items}>
                      <Combobox.GroupLabel>{group.label}</Combobox.GroupLabel>
                      <Combobox.Collection>
                        {(item) => (
                          <Combobox.Item key={item as string} value={item}>
                            {item as string}
                          </Combobox.Item>
                        )}
                      </Combobox.Collection>
                    </Combobox.Group>
                  </React.Fragment>
                );
              }}
            </Combobox.List>
          </ScrollArea>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Custom items (objects)
// ============================================================================

interface Framework {
  label: string;
  value: string;
}

const frameworks: Framework[] = [
  { label: 'Next.js', value: 'next' },
  { label: 'SvelteKit', value: 'sveltekit' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Remix', value: 'remix' },
  { label: 'Astro', value: 'astro' },
];

export const CustomItems: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root
        items={frameworks}
        itemToStringLabel={(f) => (f as Framework).label}
        itemToStringValue={(f) => (f as Framework).value}
        size="2"
      >
        <Combobox.InputRoot>
          <Combobox.Input placeholder="Select framework" />
        </Combobox.InputRoot>
        <Combobox.Content>
          <ScrollArea type="auto" style={{ maxHeight: 300 }}>
            <Combobox.Empty>No frameworks found.</Combobox.Empty>
            <Combobox.List>
              {(item) => {
                const f = item as Framework;
                return (
                  <Combobox.Item key={f.value} value={f}>
                    {f.label}
                  </Combobox.Item>
                );
              }}
            </Combobox.List>
          </ScrollArea>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Clear button
// ============================================================================

export const ClearButton: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={fruits} defaultValue="Mango" size="2">
        <Combobox.InputRoot showClear>
          <Combobox.Input placeholder="Choose a fruit..." />
        </Combobox.InputRoot>
        <Combobox.Content>
          <ScrollArea type="auto" style={{ maxHeight: 300 }}>
            <Combobox.Empty>No fruits found.</Combobox.Empty>
            <Combobox.List>
              {(item) => (
                <Combobox.Item key={item} value={item}>
                  {item}
                </Combobox.Item>
              )}
            </Combobox.List>
          </ScrollArea>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Input inside popup (trigger opens, then search inside)
// ============================================================================

export const InputInsidePopup: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={fruits} size="2">
        <Combobox.Trigger
          render={
            <Button variant="soft" color="gray">
              <Combobox.Value>{(value) => (value != null ? String(value) : 'Select country')}</Combobox.Value>
              <ChevronDown16 />
            </Button>
          }
        />
        <Combobox.Content>
          <div style={{ padding: 8, borderBottom: '1px solid var(--gray-a5)' }}>
            <Combobox.InputRoot>
              <Combobox.InputSlot>
                <MagnifyingGlass16 />
              </Combobox.InputSlot>
              <Combobox.Input placeholder="Search..." />
            </Combobox.InputRoot>
          </div>
          <ScrollArea type="auto" style={{ maxHeight: 300 }}>
            <Combobox.Empty>No results.</Combobox.Empty>
            <Combobox.List>
              {(item) => (
                <Combobox.Item key={item} value={item}>
                  {item}
                </Combobox.Item>
              )}
            </Combobox.List>
          </ScrollArea>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Disabled
// ============================================================================

export const Disabled: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={fruits} defaultValue="Apple" disabled size="2">
        <Combobox.InputRoot showClear showTrigger>
          <Combobox.Input placeholder="Choose a fruit..." disabled />
        </Combobox.InputRoot>
        <Combobox.Content>
          <ScrollArea type="auto" style={{ maxHeight: 300 }}>
            <Combobox.Empty>No fruits found.</Combobox.Empty>
            <Combobox.List>
              {(item) => (
                <Combobox.Item key={item} value={item}>
                  {item}
                </Combobox.Item>
              )}
            </Combobox.List>
          </ScrollArea>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Many items (with scroll)
// ============================================================================

export const ManyItems: Story = {
  name: 'Many Items',
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
        {manyCountries.length} countries with scroll
      </Text>
      <Combobox.Root items={manyCountries} size="2">
        <Combobox.InputRoot>
          <Combobox.Input placeholder="Search countries..." />
        </Combobox.InputRoot>
        <Combobox.Content>
          <ScrollArea type="auto" style={{ maxHeight: 300 }}>
            <Combobox.Empty>No countries found.</Combobox.Empty>
            <Combobox.List>
              {(country) => (
                <Combobox.Item key={country} value={country}>
                  {country}
                </Combobox.Item>
              )}
            </Combobox.List>
          </ScrollArea>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Empty state
// ============================================================================

export const EmptyState: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={fruits} size="2">
        <Combobox.InputRoot>
          <Combobox.Input placeholder="Type to filter (e.g. xyz)" />
        </Combobox.InputRoot>
        <Combobox.Content>
          <ScrollArea type="auto" style={{ maxHeight: 300 }}>
            <Combobox.Empty>No fruits found. Try a different search.</Combobox.Empty>
            <Combobox.List>
              {(item) => (
                <Combobox.Item key={item} value={item}>
                  {item}
                </Combobox.Item>
              )}
            </Combobox.List>
          </ScrollArea>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};

// ============================================================================
// Trigger only (dropdown style, like Select)
// Clear input value when opening so the list shows all items instead of
// filtering to the selected value.
// ============================================================================

export const TriggerOnly: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    return (
      <div style={{ maxWidth: 300 }}>
        <Combobox.Root
          items={fruits}
          defaultValue="Orange"
          size="2"
          open={open}
          onOpenChange={(nextOpen) => {
            setOpen(nextOpen);
            if (nextOpen) setInputValue('');
          }}
          inputValue={inputValue}
          onInputValueChange={(value) => setInputValue(value)}
        >
          <Combobox.Trigger
            render={
              <Button variant="surface">
                <Combobox.Value>{(value) => (value != null ? String(value) : 'Choose a fruit')}</Combobox.Value>
                <ChevronDown16 />
              </Button>
            }
          />
          <Combobox.Content>
            <ScrollArea type="auto" style={{ maxHeight: 300 }}>
              <Combobox.Empty>No fruits found.</Combobox.Empty>
              <Combobox.List>
                {(item) => (
                  <Combobox.Item key={item} value={item}>
                    {item}
                  </Combobox.Item>
                )}
              </Combobox.List>
            </ScrollArea>
          </Combobox.Content>
        </Combobox.Root>
      </div>
    );
  },
};

// ============================================================================
// Async Search (single)
// ============================================================================

interface User {
  login: string;
  name: string;
}

const allUsers: User[] = [
  { login: 'alice', name: 'Alice Johnson' },
  { login: 'bob', name: 'Bob Smith' },
  { login: 'carol', name: 'Carol Williams' },
  { login: 'dan', name: 'Dan Brown' },
  { login: 'eve', name: 'Eve Davis' },
  { login: 'frank', name: 'Frank Miller' },
  { login: 'grace', name: 'Grace Wilson' },
  { login: 'heidi', name: 'Heidi Moore' },
  { login: 'ivan', name: 'Ivan Taylor' },
  { login: 'judy', name: 'Judy Anderson' },
  { login: 'karl', name: 'Karl Thomas' },
  { login: 'linda', name: 'Linda Jackson' },
  { login: 'mallory', name: 'Mallory White' },
  { login: 'nancy', name: 'Nancy Harris' },
  { login: 'oscar', name: 'Oscar Martin' },
];

function fakeSearchUsers(query: string): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) {
        resolve([]);
        return;
      }
      const q = query.toLowerCase();
      resolve(allUsers.filter((u) => u.login.includes(q) || u.name.toLowerCase().includes(q)));
    }, 300);
  });
}

export const AsyncSearchSingle: Story = {
  name: 'Async Search (Single)',
  render: function AsyncSearchSingleStory() {
    const [results, setResults] = React.useState<User[]>([]);
    const [selected, setSelected] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    const items = React.useMemo(() => {
      if (selected && !results.some((r) => r.login === selected.login)) {
        return [selected, ...results];
      }
      return results;
    }, [results, selected]);

    const handleInputValueChange = React.useCallback((query: string) => {
      setInputValue(query);
      setLoading(true);
      fakeSearchUsers(query).then((res) => {
        setResults(res);
        setLoading(false);
      });
    }, []);

    return (
      <div style={{ maxWidth: 300 }}>
        <Field.Root>
          <Field.Label>Assign reviewer</Field.Label>
          <Combobox.Root
            items={items}
            filter={null}
            size="3"
            value={selected}
            onValueChange={setSelected}
            onInputValueChange={handleInputValueChange}
            itemToStringLabel={(u) => (u as User).name}
            isItemEqualToValue={(a, b) => (a as User).login === (b as User).login}
          >
            <Combobox.InputRoot showClear>
              <Combobox.InputSlot>{loading ? <Spinner size="2" /> : <MagnifyingGlass16 />}</Combobox.InputSlot>
              <Combobox.Input placeholder="Search users..." />
            </Combobox.InputRoot>
            <Combobox.Content>
              <ScrollArea type="auto" style={{ maxHeight: 300 }}>
                <Combobox.Empty>
                  {loading ? 'Searching...' : inputValue ? 'No users found.' : 'Start typing to search users...'}
                </Combobox.Empty>
                <Combobox.List>
                  {(item) => {
                    const user = item as User;
                    return (
                      <Combobox.Item
                        key={user.login}
                        value={user}
                        style={{ height: 'auto', paddingTop: 8, paddingBottom: 8 }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Avatar fallback={user.name} size="2" />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Text size="2">{user.name}</Text>
                            <Text size="1" color="gray">
                              @{user.login}
                            </Text>
                          </div>
                        </div>
                      </Combobox.Item>
                    );
                  }}
                </Combobox.List>
              </ScrollArea>
            </Combobox.Content>
          </Combobox.Root>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// Async search (multiple)
// ============================================================================

export const AsyncSearchMultiple: Story = {
  name: 'Async Search (Multiple)',
  render: function AsyncSearchMultipleStory() {
    const [results, setResults] = React.useState<User[]>([]);
    const [selected, setSelected] = React.useState<User[]>([]);
    const [inputValue, setInputValue] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const items = React.useMemo(() => {
      const resultLogins = new Set(results.map((r) => r.login));
      const missingSelected = selected.filter((s) => !resultLogins.has(s.login));
      return [...missingSelected, ...results];
    }, [results, selected]);

    const handleInputValueChange = React.useCallback((query: string) => {
      setInputValue(query);
      setLoading(true);
      fakeSearchUsers(query).then((res) => {
        setResults(res);
        setLoading(false);
      });
    }, []);

    return (
      <div style={{ maxWidth: 400 }}>
        <Field.Root>
          <Field.Label>Assign reviewers</Field.Label>
          <Combobox.Root
            items={items}
            filter={null}
            multiple
            size="3"
            value={selected}
            onValueChange={setSelected}
            onInputValueChange={handleInputValueChange}
            itemToStringLabel={(u) => (u as User).name}
            isItemEqualToValue={(a, b) => (a as User).login === (b as User).login}
          >
            <Combobox.Chips>
              <Combobox.Value>
                {(values: User[]) => (
                  <React.Fragment>
                    {values.map((user) => (
                      <Combobox.Chip key={user.login}>{user.name}</Combobox.Chip>
                    ))}
                    <Combobox.ChipsInput placeholder={values.length > 0 ? '' : 'Search users...'} />
                  </React.Fragment>
                )}
              </Combobox.Value>
            </Combobox.Chips>
            <Combobox.Content>
              <ScrollArea type="auto" style={{ maxHeight: 300 }}>
                <Combobox.Empty>
                  {loading ? 'Searching...' : inputValue ? 'No users found.' : 'Start typing to search users...'}
                </Combobox.Empty>
                <Combobox.List>
                  {(item) => {
                    const user = item as User;
                    return (
                      <Combobox.Item
                        key={user.login}
                        value={user}
                        style={{ height: 'auto', paddingTop: 8, paddingBottom: 8 }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Avatar fallback={user.name} size="2" />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Text size="2">{user.name}</Text>
                            <Text size="1" color="gray">
                              @{user.login}
                            </Text>
                          </div>
                        </div>
                      </Combobox.Item>
                    );
                  }}
                </Combobox.List>
              </ScrollArea>
            </Combobox.Content>
          </Combobox.Root>
        </Field.Root>
      </div>
    );
  },
};

// ============================================================================
// Creatable
// Injects a "Create" item into the list when no exact match exists.
// Selecting it opens a Dialog to confirm creation.
// ============================================================================

interface LabelItem {
  id: string;
  value: string;
  creatable?: string;
}

const initialLabels: LabelItem[] = [
  { id: 'bug', value: 'bug' },
  { id: 'docs', value: 'documentation' },
  { id: 'enhancement', value: 'enhancement' },
  { id: 'help-wanted', value: 'help wanted' },
  { id: 'good-first-issue', value: 'good first issue' },
];

export const CreatableDemo: Story = {
  name: 'Creatable',
  render: function CreatableStory() {
    const [labels, setLabels] = React.useState<LabelItem[]>(initialLabels);
    const [selected, setSelected] = React.useState<LabelItem[]>([]);
    const [query, setQuery] = React.useState('');
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const pendingQueryRef = React.useRef('');
    const createInputRef = React.useRef<HTMLInputElement | null>(null);
    const comboboxInputRef = React.useRef<HTMLInputElement | null>(null);
    const highlightedItemRef = React.useRef<LabelItem | undefined>(undefined);

    const trimmed = query.trim();
    const lowered = trimmed.toLocaleLowerCase();
    const exactExists = labels.some((l) => l.value.trim().toLocaleLowerCase() === lowered);
    const items: LabelItem[] =
      trimmed && !exactExists
        ? [...labels, { creatable: trimmed, id: `create:${lowered}`, value: `Create "${trimmed}"` }]
        : labels;

    function handleCreate() {
      const input = createInputRef.current || comboboxInputRef.current;
      const value = input ? input.value.trim() : '';
      if (!value) return;

      const normalized = value.toLocaleLowerCase();
      const existing = labels.find((l) => l.value.trim().toLocaleLowerCase() === normalized);

      if (existing) {
        setSelected((prev) => (prev.some((i) => i.id === existing.id) ? prev : [...prev, existing]));
      } else {
        const baseId = normalized.replace(/\s+/g, '-');
        const existingIds = new Set(labels.map((l) => l.id));
        let uniqueId = baseId;
        let counter = 2;
        while (existingIds.has(uniqueId)) {
          uniqueId = `${baseId}-${counter++}`;
        }
        const newItem: LabelItem = { id: uniqueId, value };
        setLabels((prev) => [...prev, newItem]);
        setSelected((prev) => [...prev, newItem]);
      }

      setDialogOpen(false);
      setQuery('');
    }

    return (
      <div style={{ width: 300 }}>
        <Field.Root>
          <Field.Label>Labels</Field.Label>
          <Combobox.Root
            items={items}
            multiple
            size="3"
            value={selected}
            inputValue={query}
            onInputValueChange={setQuery}
            onItemHighlighted={(item) => {
              highlightedItemRef.current = item as LabelItem | undefined;
            }}
            onValueChange={(next) => {
              const nextTyped = next as LabelItem[];
              const creatableItem = nextTyped.find((item) => item.creatable && !selected.some((s) => s.id === item.id));
              if (creatableItem?.creatable) {
                pendingQueryRef.current = creatableItem.creatable;
                setDialogOpen(true);
                return;
              }
              setSelected(nextTyped.filter((i) => !i.creatable));
              setQuery('');
            }}
            itemToStringLabel={(item) => (item as LabelItem).value}
            isItemEqualToValue={(a, b) => (a as LabelItem).id === (b as LabelItem).id}
          >
            <Combobox.Chips>
              <Combobox.Value>
                {(values: LabelItem[]) => (
                  <React.Fragment>
                    {values.map((label) => (
                      <Combobox.Chip key={label.id} variant="solid" color="orange">
                        {label.value}
                      </Combobox.Chip>
                    ))}
                    <Combobox.ChipsInput
                      ref={comboboxInputRef}
                      placeholder={values.length > 0 ? '' : 'e.g. bug'}
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key !== 'Enter' || highlightedItemRef.current) return;
                        const currentTrimmed = query.trim();
                        if (!currentTrimmed) return;
                        const norm = currentTrimmed.toLocaleLowerCase();
                        const existing = labels.find((l) => l.value.trim().toLocaleLowerCase() === norm);
                        if (existing) {
                          setSelected((prev) => (prev.some((i) => i.id === existing.id) ? prev : [...prev, existing]));
                          setQuery('');
                          return;
                        }
                        pendingQueryRef.current = currentTrimmed;
                        setDialogOpen(true);
                      }}
                    />
                  </React.Fragment>
                )}
              </Combobox.Value>
            </Combobox.Chips>
            <Combobox.Content>
              <ScrollArea type="auto" style={{ maxHeight: 300 }}>
                <Combobox.Empty>No labels found.</Combobox.Empty>
                <Combobox.List>
                  {(item) => {
                    const label = item as LabelItem;
                    return label.creatable ? (
                      <Combobox.Item key={label.id} value={label}>
                        <Text weight="medium">Create &ldquo;{label.creatable}&rdquo;</Text>
                      </Combobox.Item>
                    ) : (
                      <Combobox.Item key={label.id} value={label}>
                        {label.value}
                      </Combobox.Item>
                    );
                  }}
                </Combobox.List>
              </ScrollArea>
            </Combobox.Content>
          </Combobox.Root>
        </Field.Root>

        <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
          <Dialog.Content size="2" style={{ maxWidth: 360 }} finalFocus={comboboxInputRef}>
            <Dialog.Title>Create new label</Dialog.Title>
            <Dialog.Description>Add a new label to select.</Dialog.Description>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreate();
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
                <TextField.Root>
                  <TextField.Input
                    ref={createInputRef}
                    placeholder="Label name"
                    defaultValue={pendingQueryRef.current}
                    autoFocus
                  />
                </TextField.Root>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Dialog.Close>
                  <Button type="submit" variant="solid">
                    Create
                  </Button>
                </div>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    );
  },
};
