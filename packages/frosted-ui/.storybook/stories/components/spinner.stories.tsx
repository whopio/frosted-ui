import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Code, Spinner, Switch, Text } from '../../../src/components';
import { spinnerPropDefs } from '../../../src/components/spinner.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  args: {
    size: spinnerPropDefs.size.default,
    loading: spinnerPropDefs.loading.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  name: 'Default',
  render: ({ children, ...args }) => <Spinner {...args} />,
};

export const Sizes: Story = {
  name: 'Size',
  render: ({ children, ...args }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      <Spinner {...args} size="1" />
      <Spinner {...args} size="2" />
      <Spinner {...args} size="3" />
      <Spinner {...args} size="4" />
      <Spinner {...args} size="5" />
      <Spinner {...args} size="6" />
    </div>
  ),
};

export const WithChildren: Story = {
  name: 'With children',
  render: ({ children, ...args }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 640 }}>
      <Text>
        Use the <Code>loading</Code> prop to control whether the spinner or its children are displayed. Spinner
        preserves the dimensions of children when they are hidden and disables interactive elements.
      </Text>
      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        <Spinner loading={true}>
          <Switch defaultChecked />
        </Spinner>

        <Spinner loading={false}>
          <Switch defaultChecked />
        </Spinner>
      </div>
    </div>
  ),
};
