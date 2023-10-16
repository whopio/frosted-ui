import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Box } from '../../../src/components/box';
import { Container } from '../../../src/components/container';
import { containerPropDefs } from '../../../src/components/container.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Layout/Container',
  component: Container,
  args: {
    children: 'Container',
    size: containerPropDefs.size.default,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  render: (args) => (
    <Box
      style={{
        background: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
        width: 600,
      }}
    >
      {/* TODO: container size classes not working. Probably something wrong with Radix postCSS plugin */}
      <Container size="1">
        <div
          style={{
            background:
              'repeating-linear-gradient( 45deg, var(--orange-8), var(--orange-8) 5px, var(--orange-6) 5px, var(--orange-6) 25px )',
          }}
        >
          <Box py="9" />
        </div>
      </Container>
    </Box>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
