import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AlertDialog } from '../../../src/components/alert-dialog';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog.Root,
  args: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  render: ({ children, ...args }) => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button color="red">Revoke access</button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Revoke access</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This application will no longer be accessible and any
          existing sessions will be expired.
        </AlertDialog.Description>

        <div style={{ display: 'flex', gap: 32 }}>
          <AlertDialog.Cancel>
            <button>Cancel</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <button>Revoke access</button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
} satisfies Meta<typeof AlertDialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
