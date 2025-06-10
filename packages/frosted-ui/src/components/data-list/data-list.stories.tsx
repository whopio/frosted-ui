import { Copy12 } from '@frosted-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Badge,
  Code,
  DataList,
  Heading,
  IconButton,
  Link,
  Separator,
  Text,
  Tooltip,
  dataListRootPropDefs,
} from '../../../src/components/';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Data presentation/DataList',
  component: DataList.Root,
  args: {
    size: dataListRootPropDefs.size.default,
    orientation: dataListRootPropDefs.orientation.default,
    trim: dataListRootPropDefs.trim.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof DataList.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <div>
      <Text as="p" style={{ marginBottom: 32 }}>
        <Code>{'<DataList />'}</Code> component displays metadata as a list of key-value pairs.
      </Text>
      <DataList.Root {...args}>
        <DataList.Item align="center">
          <DataList.Label>Status</DataList.Label>
          <DataList.Value>
            <Badge color="jade" variant="soft" size="1">
              Active
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>ID</DataList.Label>
          <DataList.Value>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Code variant="ghost">biz_AB23XH123A</Code>
              <Tooltip content="Copy">
                <IconButton size="1" aria-label="Copy value" color="gray" variant="ghost">
                  {/* @ts-expect-error -- TODO: fix frosted icons types */}
                  <Copy12 />
                </IconButton>
              </Tooltip>
            </div>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Name</DataList.Label>
          <DataList.Value>Artur Bień</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Email</DataList.Label>
          <DataList.Value>
            <Link href="mailto:artur@whop.com">artur@whop.com</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Company</DataList.Label>
          <DataList.Value>
            <Link target="_blank" href="https://whop.com">
              Whop
            </Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </div>
  ),
};
export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <DataList.Root {...args} size="1">
        <DataList.Item>
          <DataList.Label>Name</DataList.Label>
          <DataList.Value>Artur Bień</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Email</DataList.Label>
          <DataList.Value>
            <Link href="mailto:artur@whop.com">artur@whop.com</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Company</DataList.Label>
          <DataList.Value>
            <Link target="_blank" href="https://whop.com">
              Whop
            </Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
      <DataList.Root {...args} size="2">
        <DataList.Item>
          <DataList.Label>Name</DataList.Label>
          <DataList.Value>Artur Bień</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Email</DataList.Label>
          <DataList.Value>
            <Link href="mailto:artur@whop.com">artur@whop.com</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Company</DataList.Label>
          <DataList.Value>
            <Link target="_blank" href="https://whop.com">
              Whop
            </Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
      <DataList.Root {...args} size="3">
        <DataList.Item>
          <DataList.Label>Name</DataList.Label>
          <DataList.Value>Artur Bień</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Email</DataList.Label>
          <DataList.Value>
            <Link href="mailto:artur@whop.com">artur@whop.com</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Company</DataList.Label>
          <DataList.Value>
            <Link target="_blank" href="https://whop.com">
              Whop
            </Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </div>
  ),
};

export const Orientation: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <div>
        <Heading size="3">Horizontal</Heading>
        <Separator orientation="horizontal" size="4" style={{ marginBottom: 16, marginTop: 16 }} />
        <DataList.Root {...args} orientation={'horizontal'}>
          <DataList.Item>
            <DataList.Label>Name</DataList.Label>
            <DataList.Value>Artur Bień</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Email</DataList.Label>
            <DataList.Value>
              <Link href="mailto:artur@whop.com">artur@whop.com</Link>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Company</DataList.Label>
            <DataList.Value>
              <Link target="_blank" href="https://whop.com">
                Whop
              </Link>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
      <div>
        <Heading size="3">Vertical</Heading>
        <Separator orientation="horizontal" size="4" style={{ marginBottom: 16, marginTop: 16 }} />
        <DataList.Root {...args} orientation={'vertical'}>
          <DataList.Item>
            <DataList.Label>Name</DataList.Label>
            <DataList.Value>Artur Bień</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Email</DataList.Label>
            <DataList.Value>
              <Link href="mailto:artur@whop.com">artur@whop.com</Link>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Company</DataList.Label>
            <DataList.Value>
              <Link target="_blank" href="https://whop.com">
                Whop
              </Link>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <Text>
        Use the <Code>color</Code> prop on the <Code>{'<DataList.Label />'}</Code> component to assign a specific color.
      </Text>
      <DataList.Root orientation="vertical" {...args}>
        <DataList.Item>
          <DataList.Label color="iris" style={{ minWidth: 40 }}>
            Color:
          </DataList.Label>
          <DataList.Value>Iris</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label color="cyan" style={{ minWidth: 40 }}>
            Color:
          </DataList.Label>
          <DataList.Value>Cyan</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label color="lime" style={{ minWidth: 40 }}>
            Color:
          </DataList.Label>
          <DataList.Value>Lime</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label color="crimson" style={{ minWidth: 40 }}>
            Color:
          </DataList.Label>
          <DataList.Value>Crimson</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </div>
  ),
};
export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <Text>
        Use the <Code>highContrast</Code> prop on the <Code>{'<DataList.Label />'}</Code> component <br /> to increase
        color contrast with the background.
      </Text>
      <div style={{ display: 'flex', gap: 'var(--space-9)' }}>
        <DataList.Root orientation="vertical" {...args}>
          <DataList.Item>
            <DataList.Label color="iris">Name</DataList.Label>
            <DataList.Value>Iris</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label color="cyan">Name</DataList.Label>
            <DataList.Value>Cyan</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label color="lime">Name</DataList.Label>
            <DataList.Value>Lime</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label color="crimson">Name</DataList.Label>
            <DataList.Value>Crimson</DataList.Value>
          </DataList.Item>
        </DataList.Root>

        <DataList.Root orientation="vertical" {...args}>
          <DataList.Item>
            <DataList.Label color="iris" highContrast>
              Name
            </DataList.Label>
            <DataList.Value>Iris</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label color="cyan" highContrast>
              Name
            </DataList.Label>
            <DataList.Value>Cyan</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label color="lime" highContrast>
              Name
            </DataList.Label>
            <DataList.Value>Lime</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label color="crimson" highContrast>
              Name
            </DataList.Label>
            <DataList.Value>Crimson</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
    </div>
  ),
};
