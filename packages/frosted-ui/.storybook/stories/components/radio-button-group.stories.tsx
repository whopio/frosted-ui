import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import {
  Avatar,
  Box,
  Card,
  Flex,
  RadioButtonGroup,
  Text,
} from '../../../src/components';
import { radioGroupPropDefs } from '../../../src/components/radio-group.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Lab/RadioButtonGroup',
  component: RadioButtonGroup.Root,
  args: {
    disabled: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButtonGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    color: radioGroupPropDefs.color.default,
    highContrast: radioGroupPropDefs.highContrast.default,
  },
  render: (args) => (
    <RadioButtonGroup.Root defaultValue="1" {...args}>
      <Flex gap="2" direction="row">
        <RadioButtonGroup.Item value="1">
          <Flex
            style={{
              padding: '8px 40px 8px 24px',
              borderRadius: 8,
              border: '1px solid var(--gray-a7)',
            }}
            gap="2"
            align="center"
          >
            <RadioButtonGroup.Icon ml="-3" />
            <Text>One</Text>
          </Flex>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="2">
          <Flex
            style={{
              padding: '8px 40px 8px 24px',
              borderRadius: 8,
              border: '1px solid var(--gray-a7)',
            }}
            gap="2"
            align="center"
          >
            <RadioButtonGroup.Icon ml="-3" />
            <Text>Two</Text>
          </Flex>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="3">
          <Flex
            style={{
              padding: '8px 40px 8px 24px',
              borderRadius: 8,
              border: '1px solid var(--gray-a7)',
            }}
            gap="2"
            align="center"
          >
            <RadioButtonGroup.Icon ml="-3" />
            <Text>Three</Text>
          </Flex>
        </RadioButtonGroup.Item>
      </Flex>
    </RadioButtonGroup.Root>
  ),
};

export const HighContrast: Story = {
  args: {
    color: radioGroupPropDefs.color.default,
    highContrast: true,
  },
  render: (args) => (
    <RadioButtonGroup.Root defaultValue="1" {...args}>
      <Flex gap="2" direction="row">
        <RadioButtonGroup.Item value="1">
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 16,
              background: 'var(--lime-9)',
            }}
          ></div>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="2">
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 16,
              background: 'var(--teal-9)',
            }}
          ></div>
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="3">
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 16,
              background: 'var(--gold-9)',
            }}
          ></div>
        </RadioButtonGroup.Item>
      </Flex>
    </RadioButtonGroup.Root>
  ),
};
export const WithCard: Story = {
  args: {
    color: radioGroupPropDefs.color.default,
    highContrast: radioGroupPropDefs.highContrast.default,
  },
  render: (args) => (
    <RadioButtonGroup.Root defaultValue="1" {...args}>
      <Flex gap="2" direction="row">
        <RadioButtonGroup.Item value="1">
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
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="2">
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
        </RadioButtonGroup.Item>
        <RadioButtonGroup.Item value="3">
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
        </RadioButtonGroup.Item>
      </Flex>
    </RadioButtonGroup.Root>
  ),
};

export const Color: Story = {
  render: (args) => (
    <Flex gap="2" direction="column">
      {(['indigo', 'cyan', 'orange', 'lime'] as const).map((color) => (
        <RadioButtonGroup.Root
          {...args}
          color={color}
          key={color}
          defaultValue="1"
        >
          <Flex gap="2">
            {['1', '2', '3'].map((value) => (
              <RadioButtonGroup.Item value={value} key={value}>
                <Card
                  size="3"
                  variant="classic"
                  style={
                    {
                      width: 100,
                      height: 100,
                      '--card-border-radius': '20px',
                    } as React.CSSProperties
                  }
                >
                  <Flex
                    align="center"
                    justify="center"
                    height="100%"
                    width="100%"
                  >
                    {value}
                  </Flex>

                  <RadioButtonGroup.Icon
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                    }}
                  />
                </Card>
              </RadioButtonGroup.Item>
            ))}
          </Flex>
        </RadioButtonGroup.Root>
      ))}
    </Flex>
  ),
};
