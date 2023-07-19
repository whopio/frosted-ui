import type { Meta, StoryObj } from '@storybook/react';
import { CodeInput } from './CodeInput';

const meta: Meta<typeof CodeInput> = {
  title: 'Forms/CodeInput',
  component: CodeInput,
  args: {
    allowedCharacters: 'alphanumeric',
    autoFocus: true,
    isPassword: true,
    length: 6,
  },
};
export default meta;
type Story = StoryObj<typeof CodeInput>;

export const Default: Story = {};
