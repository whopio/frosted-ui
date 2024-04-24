import { Copy12 } from '@frosted-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Badge,
  Code,
  DataList,
  Flex,
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
  render: ({ children, ...args }) => (
    <div>
      <Text mb="6" as="p">
        <Code>{'<DataList />'}</Code> component displays metadata as a list of
        key-value pairs.
      </Text>
      <DataList.Root {...args}>
        <DataList.Item align="center">
          <DataList.Label

          //   minWidth="88px"
          >
            Status
          </DataList.Label>
          <DataList.Value>
            <Badge color="jade" variant="soft" size="1">
              Active
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label

          //   minWidth="88px"
          >
            ID
          </DataList.Label>
          <DataList.Value>
            <Flex align="center" gap="2">
              <Code variant="ghost">biz_AB23XH123A</Code>
              <Tooltip content="Copy">
                <IconButton
                  size="1"
                  aria-label="Copy value"
                  color="gray"
                  variant="ghost"
                >
                  {/* @ts-expect-error -- TODO: fix frosted icons types */}
                  <Copy12 />
                </IconButton>
              </Tooltip>
            </Flex>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label

          //   minWidth="88px"
          >
            Name
          </DataList.Label>
          <DataList.Value>Artur Bień</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label

          //   minWidth="88px"
          >
            Email
          </DataList.Label>
          <DataList.Value>
            <Link href="mailto:artur@whop.com">artur@whop.com</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label

          //   minWidth="88px"
          >
            Company
          </DataList.Label>
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
  render: ({ children, size, ...args }) => (
    <Flex direction="column" gap="8">
      <DataList.Root {...args} size="1">
        <DataList.Item>
          <DataList.Label
          // minWidth="88px"
          >
            Name
          </DataList.Label>
          <DataList.Value>Artur Bień</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label
          // minWidth="88px"
          >
            Email
          </DataList.Label>
          <DataList.Value>
            <Link href="mailto:artur@whop.com">artur@whop.com</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label
          // minWidth="88px"
          >
            Company
          </DataList.Label>
          <DataList.Value>
            <Link target="_blank" href="https://whop.com">
              Whop
            </Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
      <DataList.Root {...args} size="2">
        <DataList.Item>
          <DataList.Label
          // minWidth="88px"
          >
            Name
          </DataList.Label>
          <DataList.Value>Artur Bień</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label
          // minWidth="88px"
          >
            Email
          </DataList.Label>
          <DataList.Value>
            <Link href="mailto:artur@whop.com">artur@whop.com</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label
          // minWidth="88px"
          >
            Company
          </DataList.Label>
          <DataList.Value>
            <Link target="_blank" href="https://whop.com">
              Whop
            </Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
      <DataList.Root {...args} size="3">
        <DataList.Item>
          <DataList.Label
          // minWidth="88px"
          >
            Name
          </DataList.Label>
          <DataList.Value>Artur Bień</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label
          // minWidth="88px"
          >
            Email
          </DataList.Label>
          <DataList.Value>
            <Link href="mailto:artur@whop.com">artur@whop.com</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label
          // minWidth="88px"
          >
            Company
          </DataList.Label>
          <DataList.Value>
            <Link target="_blank" href="https://whop.com">
              Whop
            </Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Flex>
  ),
};

export const Orientation: Story = {
  render: ({ children, orientation, ...args }) => (
    <Flex direction="column" gap="8">
      <div>
        <Heading size="3" mb="3">
          Horizontal
        </Heading>
        <Separator orientation="horizontal" size="4" mb="3" />
        <DataList.Root orientation={'horizontal'} {...args}>
          <DataList.Item>
            <DataList.Label
            // minWidth="88px"
            >
              Name
            </DataList.Label>
            <DataList.Value>Artur Bień</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label
            // minWidth="88px"
            >
              Email
            </DataList.Label>
            <DataList.Value>
              <Link href="mailto:artur@whop.com">artur@whop.com</Link>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label
            // minWidth="88px"
            >
              Company
            </DataList.Label>
            <DataList.Value>
              <Link target="_blank" href="https://whop.com">
                Whop
              </Link>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
      <div>
        <Heading size="3" mb="3">
          Vertical
        </Heading>
        <Separator orientation="horizontal" size="4" mb="3" />
        <DataList.Root orientation={'vertical'} {...args}>
          <DataList.Item>
            <DataList.Label
            // minWidth="88px"
            >
              Name
            </DataList.Label>
            <DataList.Value>Artur Bień</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label
            // minWidth="88px"
            >
              Email
            </DataList.Label>
            <DataList.Value>
              <Link href="mailto:artur@whop.com">artur@whop.com</Link>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label
            // minWidth="88px"
            >
              Company
            </DataList.Label>
            <DataList.Value>
              <Link target="_blank" href="https://whop.com">
                Whop
              </Link>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
    </Flex>
  ),
};

export const Color: Story = {
  render: ({ children, ...args }) => (
    <Flex direction="column" gap="4">
      <Text>
        Use the <Code>color</Code> prop on the{' '}
        <Code>{'<DataList.Label />'}</Code> component to assign a specific
        color.
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
    </Flex>
  ),
};
export const HighContrast: Story = {
  name: 'High Contrast',
  render: ({ children, ...args }) => (
    <Flex direction="column" gap="4">
      <Text>
        Use the <Code>highContrast</Code> prop on the{' '}
        <Code>{'<DataList.Label />'}</Code> component <br /> to increase color
        contrast with the background.
      </Text>
      <Flex gap="9">
        <DataList.Root orientation="vertical">
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

        <DataList.Root orientation="vertical">
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
      </Flex>
    </Flex>
  ),
};
