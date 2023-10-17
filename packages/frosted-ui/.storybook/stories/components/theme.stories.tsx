import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import {
  Button,
  Card,
  Code,
  Flex,
  Grid,
  Switch,
  Text,
  TextArea,
} from '../../../src/components';
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
        <Flex direction="column" gap="3">
          <Text>
            Wrap a component tree in the <Code>Theme</Code> component to provide
            or modify configuration for all children.
          </Text>
          <Card size="2" style={{ maxWidth: 400 }} variant="classic">
            <Flex direction="column" gap="3">
              <Grid gap="1">
                <Text as="div" weight="bold" size="2" mb="1">
                  Feedback
                </Text>
                <TextArea placeholder="Write your feedback…" />
              </Grid>
              <Flex asChild justify="between">
                <label>
                  <Text color="gray" size="2">
                    Attach screenshot?
                  </Text>
                  <Switch size="1" defaultChecked />
                </label>
              </Flex>
              <Grid columns="2" gap="2">
                <Button variant="surface">Back</Button>
                <Button>Send</Button>
              </Grid>
            </Flex>
          </Card>
        </Flex>
      </div>
    </Theme>
  ),
};
