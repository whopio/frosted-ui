import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { fn } from 'storybook/test';
import { GluestackUIProvider } from '../gluestack-ui-provider';
import { Button, ButtonText } from './button';

const meta = {
  title: 'MyButton',
  component: Button,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: fn(),
  },
  render: (args) => (
    <GluestackUIProvider mode="light">
      <Button variant="solid" color="blue">
        <ButtonText>Swag</ButtonText>
      </Button>
    </GluestackUIProvider>
  ),
};
