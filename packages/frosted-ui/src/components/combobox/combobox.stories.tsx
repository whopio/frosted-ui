import { XCircleFilled16 } from '@frosted-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { IconButton, ScrollArea, Text, TextField } from '../index';
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

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Combobox.Root items={fruits} defaultValue="Apple" size="2">
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Choose a fruit..." />} />
          <TextField.Slot>
            <Combobox.Clear aria-label="Clear selection">
              <IconButton variant="ghost" color="gray" size="1">
                <XCircleFilled16 />
              </IconButton>
            </Combobox.Clear>
          </TextField.Slot>
        </TextField.Root>
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
// Multiple (chips)
// ============================================================================

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>(['Apple', 'Orange']);
    return (
      <div style={{ maxWidth: 400 }}>
        <Combobox.Root items={fruits} multiple value={value} onValueChange={(v) => setValue(v as string[])} size="2">
          <TextField.Root>
            <Combobox.Chips className="fui-ComboboxChips">
              <Combobox.Value>
                {value.map((item) => (
                  <Combobox.Chip key={item}>
                    {item}
                    <Combobox.ChipRemove aria-label={`Remove ${item}`} />
                  </Combobox.Chip>
                ))}
              </Combobox.Value>
              <Combobox.Input render={<TextField.Input placeholder="Add fruit..." />} />
            </Combobox.Chips>
          </TextField.Root>
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
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Select produce" />} />
        </TextField.Root>
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
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Select framework" />} />
        </TextField.Root>
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
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Choose a fruit..." />} />
          <TextField.Slot>
            <Combobox.Clear aria-label="Clear">
              <IconButton variant="ghost" color="gray" size="1">
                <XCircleFilled16 />
              </IconButton>
            </Combobox.Clear>
          </TextField.Slot>
        </TextField.Root>
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
        <Combobox.Trigger placeholder="Select country" />
        <Combobox.Content>
          <div style={{ padding: 8, borderBottom: '1px solid var(--gray-a5)' }}>
            <TextField.Root>
              <Combobox.Input render={<TextField.Input placeholder="Search..." />} />
            </TextField.Root>
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
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Choose a fruit..." disabled />} />
        </TextField.Root>
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
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Search countries..." />} />
        </TextField.Root>
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
        <TextField.Root>
          <Combobox.Input render={<TextField.Input placeholder="Type to filter (e.g. xyz)" />} />
        </TextField.Root>
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
          <Combobox.Trigger placeholder="Choose a fruit" />
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
