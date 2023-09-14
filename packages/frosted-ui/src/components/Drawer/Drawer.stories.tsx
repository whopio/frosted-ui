import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'General/Drawer',
  component: Drawer,
  args: {
    title: 'New drawer',
    description:
      'This is a description that could span multiple lines. If it does, it will wrap nicely to the next line.',
    body: (
      <form id="t-shirt-form" className="space-y-6">
        <Input
          label={{
            children: 'Name',
          }}
        />
        <Select
          label={{
            children: 'T-shirt size',
            tooltip: {
              description: 'We carry unisex sizes',
              variant: 'compact',
            },
          }}
          size="md"
          placeholder="Choose a size"
          items={[
            {
              textValue: 'Small',
              value: 'sm',
            },
            {
              textValue: 'Large',
              value: 'lg',
            },
          ]}
        />
      </form>
    ),
    footer: {
      type: 'submit',
      form: 't-shirt-form',
      children: 'Claim T-shirt',
      onClick: () => alert('Primary button clicked'),
    },
  },
};
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    const handleOpen = React.useCallback(() => setOpen(true), [setOpen]);
    const handleClose = React.useCallback(() => setOpen(false), [setOpen]);

    return (
      <>
        <Button onClick={handleOpen}>Open drawer</Button>

        <Drawer {...args} open={open} onClose={handleClose} />
      </>
    );
  },
};
