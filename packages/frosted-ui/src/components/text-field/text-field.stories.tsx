import type { Meta, StoryObj } from '@storybook/react';

import {
  Copy16,
  Eye16,
  EyeSlashed16,
  Link16,
  Lock16,
  MagnifyingGlass12,
  MagnifyingGlass16,
  MagnifyingGlass20,
  MagnifyingGlass24,
  Mail16,
  ThreeDotsHorizontal16,
  ThreeDotsHorizontal20,
  XMark16,
} from '@frosted-ui/icons';
import React from 'react';
import { Button, Code, IconButton, Text, TextField, textFieldPropDefs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/TextField',
  component: TextField.Root,
  args: {
    size: textFieldPropDefs.size.default,
    variant: textFieldPropDefs.variant.default,
    color: textFieldPropDefs.color.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TextField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <TextField.Root {...args}>
        <TextField.Slot>
          <MagnifyingGlass16 />
        </TextField.Slot>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 400 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        <TextField.Root {...args} size="1">
          <TextField.Slot>
            <MagnifyingGlass12 />
          </TextField.Slot>
          <TextField.Input placeholder="Search the docs…" />
        </TextField.Root>
        <Button size="1" variant={args.variant}>
          Search
        </Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        <TextField.Root {...args} size="2">
          <TextField.Slot>
            <MagnifyingGlass16 />
          </TextField.Slot>
          <TextField.Input placeholder="Search the docs…" />
          <TextField.Slot>
            <IconButton color="gray" size="1" variant="ghost">
              <ThreeDotsHorizontal16 />
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
        <Button size="2" variant={args.variant}>
          Search
        </Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        <TextField.Root {...args} size="3">
          <TextField.Slot>
            <MagnifyingGlass20 />
          </TextField.Slot>
          <TextField.Input placeholder="Search the docs…" />
          <TextField.Slot style={{ paddingRight: 'var(--space-3)' }}>
            <IconButton color="gray" size="2" variant="ghost">
              <ThreeDotsHorizontal20 />
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
        <Button size="3" variant={args.variant}>
          Search
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        <TextField.Root {...args} size="4">
          <TextField.Slot>
            <MagnifyingGlass24 />
          </TextField.Slot>
          <TextField.Input placeholder="Search the docs…" />
          <TextField.Slot style={{ paddingRight: 'var(--space-3)' }}>
            <IconButton color="gray" size="2" variant="ghost">
              <ThreeDotsHorizontal20 />
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
        <Button size="4" variant={args.variant}>
          Search
        </Button>
      </div>
    </div>
  ),
};

export const Variant: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ ref, ...args }) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--space-5)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 400 }}>
        <TextField.Input placeholder="Search the docs…" {...args} variant="surface" />
        <TextField.Input placeholder="Search the docs…" {...args} variant="soft" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 400 }}>
        <TextField.Input disabled placeholder="Search the docs…" {...args} variant="surface" />
        <TextField.Input disabled placeholder="Search the docs…" {...args} variant="soft" />
      </div>
    </div>
  ),
};

export const Color: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ ref, ...args }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 400 }}>
      <TextField.Input {...args} placeholder="Search the docs…" color="indigo" />
      <TextField.Input {...args} placeholder="Search the docs…" color="green" />
      <TextField.Input {...args} placeholder="Search the docs…" color="red" />
    </div>
  ),
};

export const WithSlot: Story = {
  name: 'With Slot',
  render: (args) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 320 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <Text size="2" weight="bold">
            Slot
          </Text>
          <Text size="1" color="gray">
            Use <Code size="1">TextField.Slot</Code> to add icons, buttons, or text inside the input area.
          </Text>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              Leading icon
            </Text>
            <TextField.Root {...args}>
              <TextField.Slot>
                <MagnifyingGlass16 />
              </TextField.Slot>
              <TextField.Input placeholder="Search…" />
            </TextField.Root>
          </div>

          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              Trailing icon
            </Text>
            <TextField.Root {...args}>
              <TextField.Input placeholder="Enter URL…" />
              <TextField.Slot>
                <Link16 />
              </TextField.Slot>
            </TextField.Root>
          </div>

          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              Both slots
            </Text>
            <TextField.Root {...args}>
              <TextField.Slot>
                <Mail16 />
              </TextField.Slot>
              <TextField.Input placeholder="Email address" />
              <TextField.Slot>@company.com</TextField.Slot>
            </TextField.Root>
          </div>

          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              With icon button (password toggle)
            </Text>
            <TextField.Root {...args}>
              <TextField.Slot>
                <Lock16 />
              </TextField.Slot>
              <TextField.Input type={showPassword ? 'text' : 'password'} placeholder="Password" defaultValue="secret" />
              <TextField.Slot>
                <IconButton
                  size="1"
                  variant="ghost"
                  color="gray"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeSlashed16 /> : <Eye16 />}
                </IconButton>
              </TextField.Slot>
            </TextField.Root>
          </div>

          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              Clearable search
            </Text>
            <TextField.Root {...args}>
              <TextField.Slot>
                <MagnifyingGlass16 />
              </TextField.Slot>
              <TextField.Input
                placeholder="Search…"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <TextField.Slot>
                  <IconButton
                    size="1"
                    variant="ghost"
                    color="gray"
                    onClick={() => setSearchValue('')}
                    aria-label="Clear search"
                  >
                    <XMark16 />
                  </IconButton>
                </TextField.Slot>
              )}
            </TextField.Root>
          </div>

          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              With copy button
            </Text>
            <TextField.Root {...args}>
              <TextField.Input readOnly defaultValue="https://example.com/share/abc123" />
              <TextField.Slot>
                <IconButton
                  size="1"
                  variant="ghost"
                  color="gray"
                  onClick={() => navigator.clipboard.writeText('https://example.com/share/abc123')}
                  aria-label="Copy to clipboard"
                >
                  <Copy16 />
                </IconButton>
              </TextField.Slot>
            </TextField.Root>
          </div>

          <div>
            <Text size="1" color="gray" style={{ marginBottom: 'var(--space-1)', display: 'block' }}>
              Colored slot
            </Text>
            <TextField.Root {...args} color="green">
              <TextField.Slot color="green">$</TextField.Slot>
              <TextField.Input placeholder="Amount" />
              <TextField.Slot>USD</TextField.Slot>
            </TextField.Root>
          </div>
        </div>
      </div>
    );
  },
};
