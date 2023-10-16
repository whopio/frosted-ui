import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Inset,
  Popover,
  Text,
  TextArea,
  popoverContentPropDefs,
} from '../../../src/components/';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Popover',
  component: Popover.Content,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Popover.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: popoverContentPropDefs.size.default,
  },
  render: ({ children, ...args }) => (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft">Comment</Button>
      </Popover.Trigger>
      <Popover.Content {...args} style={{ width: 360 }}>
        <Flex gap="3">
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            fallback="A"
            radius="full"
          />
          <Box grow="1">
            <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
            <Flex gap="3" mt="3" justify="between">
              <Flex align="center" gap="2" asChild>
                <Text as="label" size="2">
                  <Checkbox />
                  <Text>Send to group</Text>
                </Text>
              </Flex>

              <Popover.Close>
                <Button size="1">Comment</Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  args: {
    size: popoverContentPropDefs.size.default,
  },
  render: ({ children, ...args }) => (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft">Share image</Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }} {...args}>
        <Grid columns="120px 1fr">
          <Inset side="left" pr="current">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?&auto=format&fit=crop&w=400&q=80"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Inset>

          <div>
            <Heading size="2" mb="1">
              Share this image
            </Heading>
            <Text as="p" size="2" mb="4" color="gray">
              Minimalistic 3D rendering wallpaper.
            </Text>

            <Flex direction="column" align="stretch">
              <Popover.Close>
                <Button size="1" variant="soft">
                  Copy link
                </Button>
              </Popover.Close>
            </Flex>
          </div>
        </Grid>
      </Popover.Content>
    </Popover.Root>
  ),
};
