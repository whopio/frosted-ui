import type { Meta, StoryObj } from '@storybook/react';

import { Download16 } from '@frosted-ui/icons';
import React from 'react';
import { Button, Code, Spinner, Text, buttonPropDefs } from '..';

const ExampleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Button',
  component: Button,
  args: {
    disabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
    size: buttonPropDefs.size.default,
    variant: buttonPropDefs.variant.default,
    color: buttonPropDefs.color.default,
  },
};

export const Size: Story = {
  args: {
    children: 'Button',
    size: buttonPropDefs.size.default,
    variant: buttonPropDefs.variant.default,
    color: buttonPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Button {...args} size="4" />
      <Button {...args} size="3" />
      <Button {...args} size="2" />
      <Button {...args} size="1" />
    </div>
  ),
};

export const Variant: Story = {
  args: {
    children: 'Button',
    size: buttonPropDefs.size.default,
    color: buttonPropDefs.color.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      <Button {...args} variant="classic" />
      <Button {...args} variant="solid" />
      <Button {...args} variant="soft" />
      <Button {...args} variant="surface" />
      <Button {...args} variant="ghost" />
    </div>
  ),
};

export const Color: Story = {
  args: {
    children: 'Button',
    size: buttonPropDefs.size.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Button {...args} color="indigo" />
      <Button {...args} color="cyan" />
      <Button {...args} color="orange" />
      <Button {...args} color="crimson" />
    </div>
  ),
};

export const SemanticColor: Story = {
  name: 'Semantic color',
  args: {
    size: buttonPropDefs.size.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="danger">
        Danger
      </Button>
    </div>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Button {...args} highContrast={false} variant="classic" />
        <Button {...args} highContrast={false} variant="solid" />
        <Button {...args} highContrast={false} variant="soft" />
        <Button {...args} highContrast={false} variant="surface" />
        <Button {...args} highContrast={false} variant="ghost" />
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Button {...args} variant="classic" highContrast />
        <Button {...args} variant="solid" highContrast />
        <Button {...args} variant="soft" highContrast />
        <Button {...args} variant="surface" highContrast />
        <Button {...args} variant="ghost" highContrast />
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  name: 'With Icons',
  args: {
    size: buttonPropDefs.size.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Button {...args}>
        <ExampleIcon /> With icon
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: 'Button',
    size: buttonPropDefs.size.default,
    color: buttonPropDefs.color.default,
    disabled: undefined,
    loading: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 650 }}>
      <Text>
        Buttons have their own <Code>loading</Code> prop that automatically composes a spinner.
      </Text>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Button {...args} variant="classic" />
        <Button {...args} variant="solid" />
        <Button {...args} variant="soft" />
        <Button {...args} variant="surface" />
        <Button {...args} variant="ghost" />
      </div>
      <Text>
        If you have an icon inside the button, you can use the button`s <Code>disabled</Code> state and wrap the icon in
        a standalone <Code>{`<Spinner>`}</Code> to achieve a more sophisticated design.
      </Text>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Button {...args} loading={false} variant="classic">
          <Spinner loading={false}>
            {/* @ts-expect-error -- fix frosted icon types */}
            <Download16 />
          </Spinner>
          Download
        </Button>
        <Button {...args} loading={false} variant="classic" disabled>
          <Spinner loading>
            {/* @ts-expect-error -- fix frosted icon types */}
            <Download16 />
          </Spinner>
          Download
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Button {...args} loading={false} variant="soft">
          <Spinner loading={false}>
            {/* @ts-expect-error -- fix frosted icon types */}
            <Download16 />
          </Spinner>
          Download
        </Button>
        <Button {...args} loading={false} variant="soft" disabled>
          <Spinner loading>
            {/* @ts-expect-error -- fix frosted icon types */}
            <Download16 />
          </Spinner>
          Download
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Button {...args} loading={false} variant="solid">
          <Spinner loading={false}>
            {/* @ts-expect-error -- fix frosted icon types */}
            <Download16 />
          </Spinner>
          Download
        </Button>
        <Button {...args} loading={false} variant="solid" disabled>
          <Spinner loading>
            {/* @ts-expect-error -- fix frosted icon types */}
            <Download16 />
          </Spinner>
          Download
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Button {...args} loading={false} variant="surface">
          <Spinner loading={false}>
            {/* @ts-expect-error -- fix frosted icon types */}
            <Download16 />
          </Spinner>
          Download
        </Button>
        <Button {...args} loading={false} variant="surface" disabled>
          <Spinner loading>
            {/* @ts-expect-error -- fix frosted icon types */}
            <Download16 />
          </Spinner>
          Download
        </Button>
      </div>
    </div>
  ),
};
