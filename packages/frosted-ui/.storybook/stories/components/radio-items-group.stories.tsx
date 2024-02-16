import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import {
  Avatar,
  Box,
  Card,
  Flex,
  RadioItemsGroup,
  Text,
} from '../../../src/components';
import { radioGroupPropDefs } from '../../../src/components/radio-group.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/RadioItemsGroup',
  component: RadioItemsGroup.Root,
  args: {
    disabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RadioItemsGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: radioGroupPropDefs.size.default,
    color: radioGroupPropDefs.color.default,
    highContrast: radioGroupPropDefs.highContrast.default,
  },
  render: (args) => (
    <RadioItemsGroup.Root defaultValue="1" {...args}>
      <Flex gap="2" direction="row">
        <RadioItemsGroup.Item value="1">
          <Flex
            style={{
              padding: '8px 24px',
              borderRadius: 8,
              border: '1px solid var(--gray-a7)',
            }}
          >
            <Text>One</Text>
          </Flex>
        </RadioItemsGroup.Item>
        <RadioItemsGroup.Item value="2">
          <Flex
            style={{
              padding: '8px 24px',
              borderRadius: 8,
              border: '1px solid var(--gray-a7)',
            }}
          >
            <Text>Two</Text>
          </Flex>
        </RadioItemsGroup.Item>
        <RadioItemsGroup.Item value="3">
          <Flex
            style={{
              padding: '8px 24px',
              borderRadius: 8,
              border: '1px solid var(--gray-a7)',
            }}
          >
            <Text>Three</Text>
          </Flex>
        </RadioItemsGroup.Item>
      </Flex>
    </RadioItemsGroup.Root>
  ),
};

export const HighContrast: Story = {
  args: {
    size: radioGroupPropDefs.size.default,
    color: radioGroupPropDefs.color.default,
    highContrast: true,
  },
  render: (args) => (
    <RadioItemsGroup.Root defaultValue="1" {...args}>
      <Flex gap="2" direction="row">
        <RadioItemsGroup.Item value="1">
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 16,
              background: 'var(--lime-9)',
            }}
          />
        </RadioItemsGroup.Item>
        <RadioItemsGroup.Item value="2">
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 16,
              background: 'var(--teal-9)',
            }}
          />
        </RadioItemsGroup.Item>
        <RadioItemsGroup.Item value="3">
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 16,
              background: 'var(--gold-9)',
            }}
          />
        </RadioItemsGroup.Item>
      </Flex>
    </RadioItemsGroup.Root>
  ),
};
export const WithCard: Story = {
  args: {
    size: radioGroupPropDefs.size.default,
    color: radioGroupPropDefs.color.default,
    highContrast: radioGroupPropDefs.highContrast.default,
  },
  render: (args) => (
    <RadioItemsGroup.Root defaultValue="1" {...args}>
      <Flex gap="2" direction="row">
        <RadioItemsGroup.Item value="1">
          <Card size="2" variant="classic">
            <Flex gap="3" align="center">
              <Avatar size="3" fallback="AB" color="lime" />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Artur Bień
                </Text>
                <Text as="div" size="2" color="gray">
                  UI engineer
                </Text>
              </Box>
            </Flex>
          </Card>
        </RadioItemsGroup.Item>
        <RadioItemsGroup.Item value="2">
          <Card size="2" variant="classic">
            <Flex gap="3" align="center">
              <Avatar size="3" fallback="IM" color="sky" />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Ilya Miskov
                </Text>
                <Text as="div" size="2" color="gray">
                  Designer
                </Text>
              </Box>
            </Flex>
          </Card>
        </RadioItemsGroup.Item>
        <RadioItemsGroup.Item value="3">
          <Card size="2" variant="classic">
            <Flex gap="3" align="center">
              <Avatar size="3" fallback="SS" color="orange" />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Steven Schwartz
                </Text>
                <Text as="div" size="2" color="gray">
                  CEO
                </Text>
              </Box>
            </Flex>
          </Card>
        </RadioItemsGroup.Item>
      </Flex>
    </RadioItemsGroup.Root>
  ),
};

export const Color: Story = {
  render: (args) => (
    <Flex gap="2">
      <RadioItemsGroup.Root {...args} color="indigo" defaultValue="1">
        <Flex gap="2" direction="column">
          <RadioItemsGroup.Item value="1">
            <Card size="3" variant="classic">
              1
            </Card>
          </RadioItemsGroup.Item>
          <RadioItemsGroup.Item value="2">
            <Card size="3" variant="classic">
              2
            </Card>
          </RadioItemsGroup.Item>
          <RadioItemsGroup.Item value="3">
            <Card size="3" variant="classic">
              3
            </Card>
          </RadioItemsGroup.Item>
        </Flex>
      </RadioItemsGroup.Root>

      <RadioItemsGroup.Root {...args} color="cyan" defaultValue="1">
        <Flex gap="2" direction="column">
          <RadioItemsGroup.Item value="1">
            <Card size="3" variant="classic">
              1
            </Card>
          </RadioItemsGroup.Item>
          <RadioItemsGroup.Item value="2">
            <Card size="3" variant="classic">
              2
            </Card>
          </RadioItemsGroup.Item>
          <RadioItemsGroup.Item value="3">
            <Card size="3" variant="classic">
              3
            </Card>
          </RadioItemsGroup.Item>
        </Flex>
      </RadioItemsGroup.Root>

      <RadioItemsGroup.Root {...args} color="orange" defaultValue="1">
        <Flex gap="2" direction="column">
          <RadioItemsGroup.Item value="1">
            <Card size="3" variant="classic">
              1
            </Card>
          </RadioItemsGroup.Item>
          <RadioItemsGroup.Item value="2">
            <Card size="3" variant="classic">
              2
            </Card>
          </RadioItemsGroup.Item>
          <RadioItemsGroup.Item value="3">
            <Card size="3" variant="classic">
              3
            </Card>
          </RadioItemsGroup.Item>
        </Flex>
      </RadioItemsGroup.Root>

      <RadioItemsGroup.Root {...args} color="lime" defaultValue="1">
        <Flex gap="2" direction="column">
          <RadioItemsGroup.Item value="1">
            <Card size="3" variant="classic">
              1
            </Card>
          </RadioItemsGroup.Item>
          <RadioItemsGroup.Item value="2">
            <Card size="3" variant="classic">
              2
            </Card>
          </RadioItemsGroup.Item>
          <RadioItemsGroup.Item value="3">
            <Card size="3" variant="classic">
              3
            </Card>
          </RadioItemsGroup.Item>
        </Flex>
      </RadioItemsGroup.Root>
    </Flex>
  ),
};
