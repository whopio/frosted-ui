# Frosted UI FilterChip Component

A selectable chip component for filtering and tagging interfaces. Built on Radix UI Checkbox for robust state management and accessibility while providing a chip-like visual appearance.

## Overview

The FilterChip component provides an interactive chip that can be toggled on and off, perfect for filter interfaces, tag selection, and multi-select scenarios. It combines the functionality of a checkbox with the visual design of a chip:

- **Filter interfaces** for search and browsing
- **Tag selection** in content management
- **Multi-select options** in forms
- **Category filtering** in e-commerce
- **Skill or interest selection** in profiles

## Basic Usage

```jsx
import { FilterChip } from '@frosted-ui/core';

function BasicFilter() {
  const [selectedTags, setSelectedTags] = React.useState(['design', 'frontend']);

  const toggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const tags = ['design', 'frontend', 'backend', 'mobile', 'ai'];

  return (
    <div className="space-y-3">
      <Text weight="medium">Select your interests:</Text>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <FilterChip
            key={tag}
            checked={selectedTags.includes(tag)}
            onCheckedChange={() => toggleTag(tag)}
            color="blue"
          >
            {tag}
          </FilterChip>
        ))}
      </div>
    </div>
  );
}
```

## Props

| Prop              | Type                         | Default     | Description                                       |
| ----------------- | ---------------------------- | ----------- | ------------------------------------------------- |
| `checked`         | `boolean`                    | `false`     | Whether the chip is selected                      |
| `defaultChecked`  | `boolean`                    | `false`     | Default checked state when uncontrolled           |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Handler called when checked state changes         |
| `size`            | `'1' \| '2' \| '3'`          | `'2'`       | The size of the filter chip                       |
| `color`           | `string`                     | `undefined` | The accent color - supports all Frosted UI colors |
| `disabled`        | `boolean`                    | `false`     | Whether the chip is disabled                      |
| `required`        | `boolean`                    | `false`     | Whether the chip is required in a group           |

## Examples

### Product Filtering

```jsx
import { FilterChip } from '@frosted-ui/core';

function ProductFilters() {
  const [filters, setFilters] = React.useState({
    categories: [],
    sizes: [],
    colors: [],
    priceRange: [],
  });

  const updateFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const filterConfig = {
    categories: ['Electronics', 'Clothing', 'Home', 'Sports', 'Books'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Red', 'Blue', 'Green', 'Black', 'White'],
    priceRange: ['Under $25', '$25-$50', '$50-$100', 'Over $100'],
  };

  const getActiveFilterCount = () => {
    return Object.values(filters).flat().length;
  };

  return (
    <Card className="p-6 max-w-[800px] space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading size="4" className="mb-2">
            Product Filters
          </Heading>
          <Text color="gray" size="2">
            {getActiveFilterCount()} filters applied
          </Text>
        </div>

        {getActiveFilterCount() > 0 && (
          <Button variant="soft" onClick={() => setFilters({ categories: [], sizes: [], colors: [], priceRange: [] })}>
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <Text weight="medium" className="mb-3">
            Categories
          </Text>
          <div className="flex flex-wrap gap-2">
            {filterConfig.categories.map((category) => (
              <FilterChip
                key={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => updateFilter('categories', category)}
                color="blue"
                size="2"
              >
                {category}
              </FilterChip>
            ))}
          </div>
        </div>

        <div>
          <Text weight="medium" className="mb-3">
            Sizes
          </Text>
          <div className="flex flex-wrap gap-2">
            {filterConfig.sizes.map((size) => (
              <FilterChip
                key={size}
                checked={filters.sizes.includes(size)}
                onCheckedChange={() => updateFilter('sizes', size)}
                color="green"
                size="1"
              >
                {size}
              </FilterChip>
            ))}
          </div>
        </div>

        <div>
          <Text weight="medium" className="mb-3">
            Colors
          </Text>
          <div className="flex flex-wrap gap-2">
            {filterConfig.colors.map((color) => (
              <FilterChip
                key={color}
                checked={filters.colors.includes(color)}
                onCheckedChange={() => updateFilter('colors', color)}
                color="purple"
                size="2"
              >
                {color}
              </FilterChip>
            ))}
          </div>
        </div>

        <div>
          <Text weight="medium" className="mb-3">
            Price Range
          </Text>
          <div className="flex flex-wrap gap-2">
            {filterConfig.priceRange.map((range) => (
              <FilterChip
                key={range}
                checked={filters.priceRange.includes(range)}
                onCheckedChange={() => updateFilter('priceRange', range)}
                color="orange"
                size="2"
              >
                {range}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-6">
        <Text size="2" color="gray">
          Showing products matching your filters
        </Text>
        <Button>Apply Filters</Button>
      </div>
    </Card>
  );
}
```

### Skill Selection Profile

```jsx
import { FilterChip } from '@frosted-ui/core';

function SkillSelector() {
  const [selectedSkills, setSelectedSkills] = React.useState(['React', 'TypeScript', 'Design']);
  const [customSkill, setCustomSkill] = React.useState('');

  const skillCategories = {
    Frontend: ['React', 'Vue', 'Angular', 'TypeScript', 'JavaScript', 'CSS', 'HTML'],
    Backend: ['Node.js', 'Python', 'Java', 'Go', 'PHP', 'Ruby', 'C#'],
    Design: ['Figma', 'Sketch', 'Photoshop', 'Illustrator', 'Prototyping', 'UI/UX'],
    Tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Webpack', 'Jest', 'Cypress'],
  };

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]));
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !selectedSkills.includes(customSkill.trim())) {
      setSelectedSkills((prev) => [...prev, customSkill.trim()]);
      setCustomSkill('');
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skill));
  };

  return (
    <div className="max-w-[700px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Your Skills
        </Heading>
        <Text color="gray" size="2">
          Select your skills and expertise areas ({selectedSkills.length} selected)
        </Text>
      </div>

      {/* Selected Skills */}
      {selectedSkills.length > 0 && (
        <div>
          <Text weight="medium" className="mb-3">
            Selected Skills
          </Text>
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-1">
                <FilterChip checked={true} onCheckedChange={() => removeSkill(skill)} color="blue" size="2">
                  {skill}
                </FilterChip>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skill Categories */}
      <div className="space-y-6">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <Text weight="medium" className="mb-3">
              {category}
            </Text>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <FilterChip
                  key={skill}
                  checked={selectedSkills.includes(skill)}
                  onCheckedChange={() => toggleSkill(skill)}
                  color="gray"
                  size="2"
                >
                  {skill}
                </FilterChip>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Custom Skill */}
      <div>
        <Text weight="medium" className="mb-3">
          Add Custom Skill
        </Text>
        <div className="flex gap-2">
          <TextField
            placeholder="Enter a skill..."
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addCustomSkill()}
            className="flex-1"
          />
          <Button onClick={addCustomSkill} disabled={!customSkill.trim()}>
            Add
          </Button>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="soft">Cancel</Button>
        <Button>Save Skills</Button>
      </div>
    </div>
  );
}
```

### Search Filters

```jsx
import { FilterChip } from '@frosted-ui/core';

function SearchFilters() {
  const [query, setQuery] = React.useState('');
  const [activeFilters, setActiveFilters] = React.useState({
    type: [],
    date: [],
    author: [],
    status: [],
  });

  const filterOptions = {
    type: ['Article', 'Video', 'Podcast', 'Tutorial', 'News'],
    date: ['Today', 'This Week', 'This Month', 'This Year'],
    author: ['John Doe', 'Jane Smith', 'Tech Team', 'Design Team'],
    status: ['Published', 'Draft', 'Archived', 'Featured'],
  };

  const filterColors = {
    type: 'blue',
    date: 'green',
    author: 'purple',
    status: 'orange',
  };

  const toggleFilter = (category, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const getTotalActiveFilters = () => {
    return Object.values(activeFilters).flat().length;
  };

  const clearAllFilters = () => {
    setActiveFilters({ type: [], date: [], author: [], status: [] });
  };

  return (
    <div className="max-w-[800px] space-y-6">
      <div>
        <Heading size="4" className="mb-4">
          Content Search
        </Heading>

        <div className="flex gap-3">
          <TextField
            placeholder="Search content..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          <Button>Search</Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Text weight="medium">Filters {getTotalActiveFilters() > 0 && `(${getTotalActiveFilters()} active)`}</Text>
        {getTotalActiveFilters() > 0 && (
          <Button variant="soft" size="1" onClick={clearAllFilters}>
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {Object.entries(filterOptions).map(([category, options]) => (
          <div key={category} className="space-y-2">
            <Text size="2" weight="medium" color="gray" className="capitalize">
              {category}
            </Text>
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <FilterChip
                  key={option}
                  checked={activeFilters[category].includes(option)}
                  onCheckedChange={() => toggleFilter(category, option)}
                  color={filterColors[category]}
                  size="2"
                >
                  {option}
                </FilterChip>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Active Filters Summary */}
      {getTotalActiveFilters() > 0 && (
        <Card className="p-4">
          <div className="space-y-2">
            <Text weight="medium" size="2">
              Active Filters:
            </Text>
            <div className="flex flex-wrap gap-2">
              {Object.entries(activeFilters).map(([category, values]) =>
                values.map((value) => (
                  <Badge key={`${category}-${value}`} variant="soft" color={filterColors[category]}>
                    {value}
                  </Badge>
                )),
              )}
            </div>
          </div>
        </Card>
      )}

      <div className="text-center py-8">
        <Text color="gray">
          {query || getTotalActiveFilters() > 0
            ? `Showing results for "${query}" with ${getTotalActiveFilters()} filters`
            : 'Enter a search query or select filters to see results'}
        </Text>
      </div>
    </div>
  );
}
```

### Tag Management

```jsx
import { FilterChip } from '@frosted-ui/core';

function TagManager() {
  const [availableTags, setAvailableTags] = React.useState([
    'javascript',
    'react',
    'typescript',
    'css',
    'html',
    'node.js',
    'python',
    'design',
    'ui',
    'ux',
    'frontend',
    'backend',
  ]);
  const [selectedTags, setSelectedTags] = React.useState(['react', 'typescript']);
  const [newTag, setNewTag] = React.useState('');

  const toggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const addNewTag = () => {
    const tag = newTag.trim().toLowerCase();
    if (tag && !availableTags.includes(tag)) {
      setAvailableTags((prev) => [...prev, tag]);
      setSelectedTags((prev) => [...prev, tag]);
      setNewTag('');
    }
  };

  const deleteTag = (tagToDelete) => {
    setAvailableTags((prev) => prev.filter((tag) => tag !== tagToDelete));
    setSelectedTags((prev) => prev.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Card className="p-6 max-w-[600px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Manage Tags
        </Heading>
        <Text color="gray" size="2">
          Select tags for your content ({selectedTags.length} selected)
        </Text>
      </div>

      {/* Selected Tags */}
      {selectedTags.length > 0 && (
        <div>
          <Text weight="medium" className="mb-3">
            Selected Tags
          </Text>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <Badge key={tag} color="blue" variant="soft">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Available Tags */}
      <div>
        <Text weight="medium" className="mb-3">
          Available Tags
        </Text>
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <div key={tag} className="relative group">
              <FilterChip
                checked={selectedTags.includes(tag)}
                onCheckedChange={() => toggleTag(tag)}
                color="gray"
                size="2"
              >
                {tag}
              </FilterChip>

              {/* Delete button on hover */}
              <button
                onClick={() => deleteTag(tag)}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-9 text-red-9-contrast rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                title={`Delete ${tag} tag`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Tag */}
      <div>
        <Text weight="medium" className="mb-3">
          Add New Tag
        </Text>
        <div className="flex gap-2">
          <TextField
            placeholder="Enter tag name..."
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addNewTag()}
            className="flex-1"
          />
          <Button onClick={addNewTag} disabled={!newTag.trim()}>
            Add Tag
          </Button>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="soft">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </Card>
  );
}
```

### Different Sizes

```jsx
import { FilterChip } from '@frosted-ui/core';

function SizeExample() {
  const [size1, setSize1] = React.useState(false);
  const [size2, setSize2] = React.useState(true);
  const [size3, setSize3] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Size 1 (Small)</Heading>
        <FilterChip size="1" checked={size1} onCheckedChange={setSize1} color="blue">
          Small Chip
        </FilterChip>
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 2 (Default)</Heading>
        <FilterChip size="2" checked={size2} onCheckedChange={setSize2} color="green">
          Default Chip
        </FilterChip>
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 3 (Large)</Heading>
        <FilterChip size="3" checked={size3} onCheckedChange={setSize3} color="purple">
          Large Chip
        </FilterChip>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
<div className="flex flex-wrap gap-2">
  {items.map((item) => (
    <FilterChip key={item} checked={selected.includes(item)} color="blue">
      {item}
    </FilterChip>
  ))}
</div>
```

### Typography Integration

```jsx
<div className="space-y-3">
  <Text weight="medium">Filter Options</Text>
  <div className="flex gap-2">
    <FilterChip checked={false} color="blue">
      Option 1
    </FilterChip>
    <FilterChip checked={true} color="blue">
      Option 2
    </FilterChip>
  </div>
</div>
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The FilterChip component includes comprehensive accessibility features:

### Keyboard Navigation

- **Tab** - Navigate to the chip
- **Space** - Toggle the chip selection
- **Enter** - Toggle the chip selection

### Screen Reader Support

- Proper checkbox semantics
- Clear labeling of selection state
- Group labeling when used in sets
- Disabled state announcements

### Focus Management

- Clear focus indicators
- Logical tab order through chip groups
- Focus retention after state changes

## Advanced Usage

### Controlled vs Uncontrolled

```jsx
// Controlled
function ControlledChip() {
  const [checked, setChecked] = React.useState(false);

  return (
    <FilterChip checked={checked} onCheckedChange={setChecked}>
      Controlled
    </FilterChip>
  );
}

// Uncontrolled
function UncontrolledChip() {
  return <FilterChip defaultChecked={false}>Uncontrolled</FilterChip>;
}
```

### State Management Patterns

```jsx
// Multiple selection with state management
function MultiSelectFilter({ options, onChange }) {
  const [selected, setSelected] = React.useState([]);

  React.useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  const toggle = (value) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <FilterChip
          key={option.value}
          checked={selected.includes(option.value)}
          onCheckedChange={() => toggle(option.value)}
          color={option.color}
        >
          {option.label}
        </FilterChip>
      ))}
    </div>
  );
}
```

## Best Practices

### Chip Organization

- **Group related chips** logically
- **Use consistent sizing** within groups
- **Provide clear section labels** for chip categories
- **Limit the number of chips** to avoid overwhelming users

### Visual Design

- **Use meaningful colors** to categorize or indicate importance
- **Maintain adequate spacing** between chips
- **Consider responsive layouts** for mobile devices
- **Provide visual feedback** for selection states

### User Experience

- **Allow easy selection/deselection** with single clicks
- **Provide clear visual indicators** for selected states
- **Show filter counts** or summaries when helpful
- **Include clear all functionality** for multiple selections

## Related Components

- **[Badge](../badge/badge.ai.md)** - For non-interactive tags and labels
- **[Checkbox](../checkbox/checkbox.ai.md)** - Traditional checkbox component
- **[Button](../button/button.ai.md)** - For action-oriented interactions
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For chip text content
