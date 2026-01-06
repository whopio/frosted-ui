import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Accordion } from '..';
import { RootProps as AccordionRootProps } from '../../../src/components/accordion/accordion';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Layout/Accordion',
  component: Accordion.Root,
  args: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Single: Story = {
  args: {
    defaultValue: ['item-1'],
    type: 'single',
  },
  render: (args: AccordionRootProps) => (
    <div>
      <Accordion.Root
        // collapsible
        style={{ width: 600 }}
        {...args}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It's unstyled by default, giving you freedom over the look and feel.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
            <Accordion.Content>Yes! You can animate the Accordion with CSS or JavaScript.</Accordion.Content>
          </Accordion.Item>
        </div>
      </Accordion.Root>
    </div>
  ),
};

export const Multiple: Story = {
  args: {
    defaultValue: ['item-1', 'item-2'],
    type: 'multiple',
  },
  render: (args: AccordionRootProps) => (
    <div>
      <Accordion.Root style={{ width: 600 }} {...args}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It's unstyled by default, giving you freedom over the look and feel.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
            <Accordion.Content>Yes! You can animate the Accordion with CSS or JavaScript.</Accordion.Content>
          </Accordion.Item>
        </div>
      </Accordion.Root>
    </div>
  ),
};

export const HiddenUntilFound: Story = {
  name: 'Hidden Until Found',
  args: {
    hiddenUntilFound: true,
  },
  render: (args: AccordionRootProps) => (
    <div>
      <p style={{ marginBottom: 'var(--space-4)', maxWidth: 600, color: 'var(--gray-11)' }}>
        Use your browser's find feature (Ctrl/Cmd + F) to search for "secret keyword" - the panel will automatically
        expand when found.
      </p>
      <Accordion.Root style={{ width: 600, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }} {...args}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>First section</Accordion.Trigger>
          <Accordion.Content>This is some visible content in the first section.</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger>Second section (contains hidden text)</Accordion.Trigger>
          <Accordion.Content>
            This section contains a secret keyword that you can find using browser search.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Trigger>Third section</Accordion.Trigger>
          <Accordion.Content>More content in the third section.</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  ),
};
