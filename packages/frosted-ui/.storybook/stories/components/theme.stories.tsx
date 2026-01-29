import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Card, Code, Switch, Text, TextArea } from '../../../src/components';
import { Theme } from '../../../src/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Utilities/Theme',
  component: Theme,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Theme>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Theme {...args}>
      <div style={{ padding: '30px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Text>
            Wrap a component tree in the <Code>Theme</Code> component to provide or modify configuration for all
            children.
          </Text>
          <Card size="2" style={{ maxWidth: 400 }} variant="classic">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div style={{ display: 'grid', gap: 4 }}>
                <Text render={<div />} weight="bold" size="2" style={{ marginBottom: 4 }}>
                  Feedback
                </Text>
                <TextArea placeholder="Write your feedback…" />
              </div>
              <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text color="gray" size="2">
                  Attach screenshot?
                </Text>
                <Switch size="1" checked />
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)' }}>
                <Button variant="surface">Back</Button>
                <Button>Send</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Theme>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
      <Theme
        grayColor="gray"
        accentColor="blue"
        infoColor="sky"
        successColor="green"
        warningColor="yellow"
        dangerColor="red"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            padding: 'var(--space-4)',
            background: 'var(--gray-6)',
            borderRadius: 'var(--radius-5)',
          }}
        >
          <Button variant="classic">Default</Button>
          <Button variant="classic" color="info">
            Info
          </Button>
          <Button variant="classic" color="success">
            Success
          </Button>
          <Button variant="classic" color="warning">
            Warning
          </Button>
          <Button variant="classic" color="danger">
            Danger
          </Button>
        </div>
      </Theme>
      <Theme
        grayColor="gray"
        accentColor="plum"
        infoColor="blue"
        successColor="grass"
        warningColor="amber"
        dangerColor="ruby"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            padding: 'var(--space-4)',
            background: 'var(--gray-6)',
            borderRadius: 'var(--radius-5)',
          }}
        >
          <Button variant="classic">Default</Button>
          <Button variant="classic" color="info">
            Info
          </Button>
          <Button variant="classic" color="success">
            Success
          </Button>
          <Button variant="classic" color="warning">
            Warning
          </Button>
          <Button variant="classic" color="danger">
            Danger
          </Button>
        </div>
      </Theme>
    </div>
  ),
};

export const Appearance: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
      <Theme
        appearance="light"
        grayColor="slate"
        infoColor="sky"
        successColor="green"
        warningColor="yellow"
        dangerColor="red"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            padding: 'var(--space-4)',
            background: 'var(--color-background)',
            borderRadius: 'var(--radius-5)',
          }}
        >
          <Button variant="classic" color="info">
            Info
          </Button>
          <Button variant="classic" color="success">
            Success
          </Button>
          <Button variant="classic" color="warning">
            Warning
          </Button>
          <Button variant="classic" color="danger">
            Danger
          </Button>
        </div>
      </Theme>
      <Theme
        appearance="dark"
        grayColor="slate"
        infoColor="sky"
        successColor="green"
        warningColor="yellow"
        dangerColor="red"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            padding: 'var(--space-4)',
            background: 'var(--color-background)',
            borderRadius: 'var(--radius-5)',
          }}
        >
          <Button variant="classic" color="info">
            Info
          </Button>
          <Button variant="classic" color="success">
            Success
          </Button>
          <Button variant="classic" color="warning">
            Warning
          </Button>
          <Button variant="classic" color="danger">
            Danger
          </Button>
        </div>
      </Theme>
    </div>
  ),
};
