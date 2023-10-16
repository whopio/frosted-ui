import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Avatar, Box, Flex, Grid } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'soft',
    fallback: 'AB',
    color: 'blue',
    // label: 'Button',
  },
  render: (args) => (
    <Flex gap="2">
      <Avatar
        {...args}
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="A"
      />
      <Avatar {...args} />
    </Flex>
  ),
};

export const Size: Story = {
  args: {
    variant: 'soft',
    fallback: 'AB',
    src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    color: 'blue',
  },
  render: (args) => (
    <Flex align="center" gap="4">
      <Avatar {...args} size="1" />
      <Avatar {...args} size="2" />
      <Avatar {...args} size="3" />
      <Avatar {...args} size="4" />
      <Avatar {...args} size="5" />
      <Avatar {...args} size="6" />
      <Avatar {...args} size="7" />
      <Avatar {...args} size="8" />
    </Flex>
  ),
};

export const Variant: Story = {
  args: {
    fallback: 'AB',
    color: 'blue',
  },
  render: (args) => (
    <Flex gap="2">
      <Avatar {...args} variant="solid" />
      <Avatar {...args} variant="soft" />
    </Flex>
  ),
};

export const Color: Story = {
  args: {
    fallback: 'AB',
  },
  render: (args) => (
    <Flex gap="2">
      <Avatar {...args} color="indigo" />
      <Avatar {...args} color="cyan" />
      <Avatar {...args} color="orange" />
      <Avatar {...args} color="crimson" />
    </Flex>
  ),
};

export const HighContrast: Story = {
  args: {
    fallback: 'AB',
  },
  render: (args) => (
    <Grid rows="2" gap="2" display="inline-grid" flow="column">
      <Avatar {...args} color="indigo" />
      <Avatar {...args} color="indigo" highContrast />
      <Avatar {...args} color="cyan" />
      <Avatar {...args} color="cyan" highContrast />
      <Avatar {...args} color="orange" />
      <Avatar {...args} color="orange" highContrast />
      <Avatar {...args} color="crimson" />
      <Avatar {...args} color="crimson" highContrast />
    </Grid>
  ),
};

export const Radius: Story = {
  args: {
    fallback: 'AB',
  },
  render: (args) => (
    <Flex gap="2">
      <Avatar {...args} radius="none" />
      <Avatar {...args} radius="large" />
      <Avatar {...args} radius="full" />
    </Flex>
  ),
};

export const Fallback: Story = {
  args: {
    fallback: 'AB',
  },
  render: (args) => (
    <Flex gap="2">
      <Avatar {...args} />
      <Avatar
        {...args}
        fallback={
          <Box width="5" height="5">
            <svg viewBox="0 0 64 64" fill="currentColor">
              <path d="M41.5 14c4.687 0 8.5 4.038 8.5 9s-3.813 9-8.5 9S33 27.962 33 23 36.813 14 41.5 14zM56.289 43.609C57.254 46.21 55.3 49 52.506 49c-2.759 0-11.035 0-11.035 0 .689-5.371-4.525-10.747-8.541-13.03 2.388-1.171 5.149-1.834 8.07-1.834C48.044 34.136 54.187 37.944 56.289 43.609zM37.289 46.609C38.254 49.21 36.3 52 33.506 52c-5.753 0-17.259 0-23.012 0-2.782 0-4.753-2.779-3.783-5.392 2.102-5.665 8.245-9.472 15.289-9.472S35.187 40.944 37.289 46.609zM21.5 17c4.687 0 8.5 4.038 8.5 9s-3.813 9-8.5 9S13 30.962 13 26 16.813 17 21.5 17z" />
            </svg>
          </Box>
        }
      />
    </Flex>
  ),
};
