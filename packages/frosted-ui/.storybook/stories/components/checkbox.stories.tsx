import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Checkbox } from '../../../src/components/checkbox';
import { checkboxPropDefs } from '../../../src/components/checkbox.props';
import { Flex } from '../../../src/components/flex';
import { Text } from '../../../src/components/text';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Checkbox',
  component: Checkbox,
  args: {
    size: checkboxPropDefs.size.default,
    color: checkboxPropDefs.color.default,
    highContrast: true,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  render: (args) => (
    <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox defaultChecked {...args} /> Agree to Terms and Conditions
      </Flex>
    </Text>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
