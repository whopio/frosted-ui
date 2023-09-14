import { faTShirt, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { ModalBody } from '../ModalBody';
import { ModalFooter } from '../ModalFooter';
import { ModalHeader } from '../ModalHeader';
import { Select } from '../Select';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'General/Modal',
  component: Modal,
  args: {
    header: {
      closeButton: true,
      title: 'New modal',
      description:
        'This is a description that could span multiple lines. If it does, it will wrap nicely to the next line.',
    },
    footer: {
      primaryButton: {
        onClick: () => alert('Primary button clicked'),
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    const handleOpen = React.useCallback(() => setOpen(true), [setOpen]);

    return (
      <>
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal {...args} open={open} onClose={setOpen} />
      </>
    );
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    const handleOpen = React.useCallback(() => setOpen(true), [setOpen]);

    return (
      <>
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal {...args} open={open} onClose={setOpen} />
      </>
    );
  },
};

export const MobileFullscreen: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
  args: {
    fullscreen: true,
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    const handleOpen = React.useCallback(() => setOpen(true), [setOpen]);

    return (
      <>
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal {...args} open={open} onClose={setOpen} />
      </>
    );
  },
};

export const NoCloseButton: Story = {
  args: {
    header: {
      closeButton: false,
      title: 'New modal',
      description: 'This is a description.',
    },
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    const handleOpen = React.useCallback(() => setOpen(true), [setOpen]);

    return (
      <>
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal {...args} open={open} onClose={setOpen} />
      </>
    );
  },
};

export const CenteredHeader: Story = {
  args: {
    header: {
      centered: true,
      closeButton: true,
      title: 'New modal',
      description: 'This is a description.',
    },
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    const handleOpen = React.useCallback(() => setOpen(true), [setOpen]);

    return (
      <>
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal {...args} open={open} onClose={setOpen} />
      </>
    );
  },
};

export const CustomizedProps: Story = {
  args: {
    header: {
      title: 'Would you like a t-shirt?',
      description: "Let's get you started with important things",
      closeButton: true,
    },
    body: {
      children: (
        <form className="space-y-4">
          <Select
            leftIcon={faTShirt}
            label={{
              children: 'What is your size?',
              tooltip: { description: 'We carry unisex sizes.' },
            }}
            items={[
              { value: 'small', textValue: 'Small' },
              { value: 'medium', textValue: 'Medium' },
              { value: 'large', textValue: 'Large' },
            ]}
            size="md"
          />
          <Checkbox label="Send it to me, pronto!" />
        </form>
      ),
    },
    footer: {
      cancelButton: {
        children: 'No way!!',
        variant: 'blank',
      },
      primaryButton: {
        leftIcon: faTruckFast,
        children: 'Yes, please!',
        colorScheme: 'purple',
        variant: 'elevated',
      },
    },
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    const handleOpen = React.useCallback(() => setOpen(true), [setOpen]);

    return (
      <>
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal {...args} open={open} onClose={setOpen} />
      </>
    );
  },
};

export const CustomizedFooter: Story = {
  args: {
    header: undefined,
    body: undefined,
    footer: undefined,
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    const handleOpen = React.useCallback(() => setOpen(true), [setOpen]);
    const handleClose = React.useCallback(() => setOpen(false), [setOpen]);

    return (
      <>
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal {...args} open={open} onClose={setOpen}>
          <ModalHeader
            title="New modal"
            description="Welcome to the new modal"
            closeButton
          />
          <ModalBody>Some content will go here!</ModalBody>
          <ModalFooter className="flex justify-end space-x-2.5 p-6">
            <Button variant="outline" colorScheme="black" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              colorScheme="purple"
              onClick={() => {
                alert('Confirmed!');
                handleClose();
              }}
            >
              Confirm!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};
