import { ChevronDown16 } from '@frosted-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button, ScrollArea, Text } from '../index';
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
    <Combobox.Input placeholder="Choose a fruit..." showClear variant={variant} />
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
            <Combobox.ChipsInput placeholder="Add fruit..." />
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
        <Combobox.Input placeholder="Select produce" />
        <Combobox.Content>
          <ScrollArea type="auto" style={{ maxHeight: 300 }}>
            <Combobox.Empty>No results.</Combobox.Empty>
            <Combobox.List>
              {(group, index) => {
                const g = group as ProduceGroup;
                return (
                  <React.Fragment key={g.label}>
                    {index > 0 && <Combobox.Separator />}
                    <Combobox.Group items={g.items}>
                      <Combobox.GroupLabel>{g.label}</Combobox.GroupLabel>
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
        <Combobox.Input placeholder="Select framework" />
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
        <Combobox.Input placeholder="Choose a fruit..." showClear />
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
            <Combobox.Input placeholder="Search..." showTrigger={false} />
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
        <Combobox.Input placeholder="Choose a fruit..." disabled />
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
        <Combobox.Input placeholder="Search countries..." />
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
        <Combobox.Input placeholder="Type to filter (e.g. xyz)" />
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

    const items = React.useMemo(() => {
      if (selected && !results.some((r) => r.login === selected.login)) {
        return [selected, ...results];
      }
      return results;
    }, [results, selected]);

    const handleInputValueChange = React.useCallback((query: string) => {
      setLoading(true);
      fakeSearchUsers(query).then((res) => {
        setResults(res);
        setLoading(false);
      });
    }, []);

    return (
      <div style={{ maxWidth: 300 }}>
        <Text size="2" weight="medium" style={{ marginBottom: 4, display: 'block' }}>
          Assign reviewer
        </Text>
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
          <Combobox.Input placeholder="Search users..." showClear />
          <Combobox.Content>
            <ScrollArea type="auto" style={{ maxHeight: 300 }}>
              {loading ? (
                <Text size="2" color="gray" style={{ padding: '8px 12px', display: 'block' }}>
                  Searching…
                </Text>
              ) : (
                <Combobox.Empty>No users found.</Combobox.Empty>
              )}
              <Combobox.List>
                {(item) => {
                  const user = item as User;
                  return (
                    <Combobox.Item key={user.login} value={user}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text size="2">{user.name}</Text>
                        <Text size="1" color="gray">
                          @{user.login}
                        </Text>
                      </div>
                    </Combobox.Item>
                  );
                }}
              </Combobox.List>
            </ScrollArea>
          </Combobox.Content>
        </Combobox.Root>
      </div>
    );
  },
};

// ============================================================================
// Async Search (multiple)
// ============================================================================

export const AsyncSearchMultiple: Story = {
  name: 'Async Search (Multiple)',
  render: function AsyncSearchMultipleStory() {
    const [results, setResults] = React.useState<User[]>([]);
    const [selected, setSelected] = React.useState<User[]>([]);
    const [loading, setLoading] = React.useState(false);

    const items = React.useMemo(() => {
      const resultLogins = new Set(results.map((r) => r.login));
      const missingSelected = selected.filter((s) => !resultLogins.has(s.login));
      return [...missingSelected, ...results];
    }, [results, selected]);

    const handleInputValueChange = React.useCallback((query: string) => {
      setLoading(true);
      fakeSearchUsers(query).then((res) => {
        setResults(res);
        setLoading(false);
      });
    }, []);

    return (
      <div style={{ maxWidth: 400 }}>
        <Text size="2" weight="medium" style={{ marginBottom: 4, display: 'block' }}>
          Assign reviewers
        </Text>
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
                  <Combobox.ChipsInput placeholder="Search users..." />
                </React.Fragment>
              )}
            </Combobox.Value>
          </Combobox.Chips>
          <Combobox.Content>
            <ScrollArea type="auto" style={{ maxHeight: 300 }}>
              {loading ? (
                <Text size="2" color="gray" style={{ padding: '8px 12px', display: 'block' }}>
                  Searching…
                </Text>
              ) : (
                <Combobox.Empty>No users found.</Combobox.Empty>
              )}
              <Combobox.List>
                {(item) => {
                  const user = item as User;
                  return (
                    <Combobox.Item key={user.login} value={user}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text size="2">{user.name}</Text>
                        <Text size="1" color="gray">
                          @{user.login}
                        </Text>
                      </div>
                    </Combobox.Item>
                  );
                }}
              </Combobox.List>
            </ScrollArea>
          </Combobox.Content>
        </Combobox.Root>
      </div>
    );
  },
};
