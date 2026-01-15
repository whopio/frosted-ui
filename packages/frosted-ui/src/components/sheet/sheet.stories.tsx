import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  AlertDialog,
  Badge,
  Button,
  Checkbox,
  Code,
  DropdownMenu,
  Inset,
  ScrollArea,
  Sheet,
  Table,
  Text,
  TextArea,
  TextField,
} from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Sheet',
  component: Sheet.Content,
  args: {
    // size: dialogContentPropDefs.size.default,
  },

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>Edit profile</Button>
      </Sheet.Trigger>

      <Sheet.Content {...args}>
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>Make changes to your profile.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <label>
              <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                Name
              </Text>
              <TextField.Input size="3" defaultValue="Freja Johnsen" placeholder="Enter your full name" />
            </label>
            <label>
              <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                Email
              </Text>
              <TextField.Input size="3" defaultValue="freja@example.com" placeholder="Enter your email" />
            </label>
          </div>

          <div
            style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', justifyContent: 'flex-end' }}
          >
            <Sheet.Close>
              <Button variant="soft" color="gray" onClick={() => alert('Cancel')}>
                Cancel
              </Button>
            </Sheet.Close>
            <Sheet.Close>
              <Button onClick={() => alert('Save')}>Save</Button>
            </Sheet.Close>
          </div>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const Nested: Story = {
  render: (args) => (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>Edit profile</Button>
      </Sheet.Trigger>

      <Sheet.Content {...args}>
        <Sheet.Header>
          <Sheet.Title>Message request</Sheet.Title>
          <Sheet.Description>Artur wants to message you</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <div
            style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', justifyContent: 'flex-end' }}
          >
            <Sheet.NestedRoot>
              <Sheet.Trigger>
                <Button variant="soft" color="danger">
                  Block
                </Button>
              </Sheet.Trigger>
              <Sheet.Content>
                <Sheet.Header>
                  <Sheet.Title>Are you sure you want to block Artur?</Sheet.Title>
                  <Sheet.Description>Artur won't be able to message you unless you unblock him.</Sheet.Description>
                </Sheet.Header>
                <Sheet.Body>
                  <div
                    style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      marginTop: 'var(--space-4)',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Sheet.Close>
                      <Button size="3">Cancel</Button>
                    </Sheet.Close>
                    <Sheet.Close>
                      <Button variant="classic" color="danger" size="3">
                        Block
                      </Button>
                    </Sheet.Close>
                  </div>
                </Sheet.Body>
              </Sheet.Content>
            </Sheet.NestedRoot>
            <Sheet.Close>
              <Button onClick={() => alert('Save')}>Save</Button>
            </Sheet.Close>
          </div>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  render: (args) => (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>View users</Button>
      </Sheet.Trigger>
      <Sheet.Content {...args}>
        <Sheet.Header>
          <Sheet.Title>Users</Sheet.Title>
          <Sheet.Description>The following users have access to this project.</Sheet.Description>
        </Sheet.Header>

        <Sheet.Body>
          <Inset side="x" style={{ marginBottom: 'var(--space-4)' }}>
            <Table.Root variant="ghost" size="1">
              <ScrollArea scrollbars="horizontal">
                <Table.Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                          <Checkbox />
                          Full name
                        </div>
                      </Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.RowHeaderCell>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                          <Checkbox />
                          Danilo Sousa
                        </div>
                      </Table.RowHeaderCell>
                      <Table.Cell>danilo@example.com</Table.Cell>
                      <Table.Cell>
                        <Badge color="green">Developer</Badge>
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.RowHeaderCell>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                          <Checkbox />
                          Zahra Ambessa
                        </div>
                      </Table.RowHeaderCell>
                      <Table.Cell>zahra@example.com</Table.Cell>
                      <Table.Cell>
                        <Badge color="amber">Admin</Badge>
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.RowHeaderCell>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                          <Checkbox />
                          Jasper Eriksson
                        </div>
                      </Table.RowHeaderCell>
                      <Table.Cell>jasper@example.com</Table.Cell>
                      <Table.Cell>
                        <Badge color="green">Developer</Badge>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Table>
              </ScrollArea>
            </Table.Root>
          </Inset>

          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
            <Sheet.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Sheet.Close>
          </div>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const ScrollableContent: Story = {
  name: 'Scrollable content',
  render: (args) => (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>View users</Button>
      </Sheet.Trigger>
      <Sheet.Content {...args}>
        <Sheet.Header>
          <Sheet.Title>Users</Sheet.Title>
          <Sheet.Description>The following users have access to this project.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Inset
            side="all"
            px="current"
            pt="current"
            style={{
              flex: 1,
              overflowY: 'auto',
              borderTop: '1px solid var(--gray-a4)',
              borderBottom: '1px solid var(--gray-a4)',
            }}
          >
            <Text as="p" size="2" style={{ marginBottom: 'var(--space-4)' }}>
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes
            </Text>
            <Text as="p" size="2" style={{ marginBottom: 'var(--space-4)' }}>
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes
            </Text>
            <Text as="p" size="2" style={{ marginBottom: 'var(--space-4)' }}>
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes to your profile. Make changes to your profile. Make changes to your profile.
              Make changes to your profile. Make changes to your profile. Make changes to your profile. Make changes to
              your profile. Make changes
            </Text>
          </Inset>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const Controlled: Story = {
  name: 'Controlled (non dismissable)',
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <Sheet.Root dismissible={false} open={open}>
        <Sheet.Trigger onClick={() => setOpen(true)}>
          <Button>Delete account</Button>
        </Sheet.Trigger>
        <Sheet.Content {...args}>
          <Sheet.Header>
            <Sheet.Title>Delete account</Sheet.Title>
            <Sheet.Description color="gray">Are you sure you want to delete your account?</Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: '100%' }}>
              <Sheet.Close onClick={() => setOpen(false)}>
                <Button variant="surface" style={{ width: '100%' }} size="3">
                  Cancel
                </Button>
              </Sheet.Close>
              <Sheet.Close onClick={() => setOpen(false)}>
                <Button variant="classic" color="danger" style={{ width: '100%' }} size="3">
                  Delete account
                </Button>
              </Sheet.Close>
            </div>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet.Root>
    );
  },
};

export const InitialFocus: Story = {
  name: 'Initial Focus',
  render: function Render(args) {
    const descriptionInputRef = React.useRef<HTMLInputElement>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text>
          Use <Code>initialFocus</Code> to control which element receives focus when the sheet opens. Note: requires{' '}
          <Code>autoFocus=&#123;true&#125;</Code> on the Root.
        </Text>

        <Sheet.Root autoFocus>
          <Sheet.Trigger>
            <Button variant="classic">Add New Item</Button>
          </Sheet.Trigger>
          <Sheet.Content {...args} initialFocus={descriptionInputRef}>
            <Sheet.Header>
              <Sheet.Title>Add New Item</Sheet.Title>
              <Sheet.Description>Focus is automatically set to the Name input when the sheet opens.</Sheet.Description>
            </Sheet.Header>
            <Sheet.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <label>
                  <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Name
                  </Text>
                  <TextField.Input size="3" placeholder="Enter item name" />
                </label>
                <label>
                  <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Description
                  </Text>
                  <TextField.Input ref={descriptionInputRef} size="3" placeholder="Enter description" />
                </label>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-4)',
                  justifyContent: 'flex-end',
                }}
              >
                <Sheet.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Sheet.Close>
                <Sheet.Close>
                  <Button variant="classic">Add Item</Button>
                </Sheet.Close>
              </div>
            </Sheet.Body>
          </Sheet.Content>
        </Sheet.Root>
      </div>
    );
  },
};

export const FinalFocus: Story = {
  name: 'Final Focus',
  render: function Render(args) {
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text>
          Use <Code>finalFocus</Code> to control where focus returns when the sheet closes. Note: requires{' '}
          <Code>autoFocus=&#123;true&#125;</Code> on the Root.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Sheet.Root autoFocus>
            <Sheet.Trigger>
              <Button variant="soft">Open Sheet</Button>
            </Sheet.Trigger>
            <Sheet.Content {...args} finalFocus={buttonRef}>
              <Sheet.Header>
                <Sheet.Title>Focus Demo</Sheet.Title>
                <Sheet.Description>
                  When this sheet closes, focus will return to the "Focus Here" button instead of the trigger.
                </Sheet.Description>
              </Sheet.Header>
              <Sheet.Body>
                <div
                  style={{
                    display: 'flex',
                    gap: 'var(--space-3)',
                    marginTop: 'var(--space-4)',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Sheet.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Sheet.Close>
                  <Sheet.Close>
                    <Button variant="classic">Done</Button>
                  </Sheet.Close>
                </div>
              </Sheet.Body>
            </Sheet.Content>
          </Sheet.Root>
          <Button ref={buttonRef} variant="surface" color="green">
            Focus Here After Close
          </Button>
        </div>
      </div>
    );
  },
};

export const ControlledWithForm: Story = {
  name: 'Controlled with Form',
  render: function Render(args) {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({ name: '', email: '' });

    const handleSubmit = () => {
      console.log('Submitted:', formData);
      setOpen(false);
      setFormData({ name: '', email: '' });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text>
          Use <Code>open</Code> and <Code>onOpenChange</Code> for fully controlled mode with form state.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button onClick={() => setOpen(true)}>Open Sheet Programmatically</Button>
        </div>

        <Sheet.Root open={open} onOpenChange={setOpen}>
          <Sheet.Trigger>
            <Button variant="soft">Open with Trigger</Button>
          </Sheet.Trigger>
          <Sheet.Content {...args}>
            <Sheet.Header>
              <Sheet.Title>Controlled Sheet</Sheet.Title>
              <Sheet.Description>
                This sheet can be opened by both a trigger and a programmatic button.
              </Sheet.Description>
            </Sheet.Header>
            <Sheet.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <label>
                  <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Name
                  </Text>
                  <TextField.Input
                    size="3"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter name"
                  />
                </label>
                <label>
                  <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Email
                  </Text>
                  <TextField.Input
                    size="3"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter email"
                  />
                </label>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-4)',
                  justifyContent: 'flex-end',
                }}
              >
                <Sheet.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Sheet.Close>
                <Button variant="classic" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Sheet.Body>
          </Sheet.Content>
        </Sheet.Root>
      </div>
    );
  },
};

export const OpenChangeCallbacks: Story = {
  name: 'Open Change Callbacks',
  render: function Render(args) {
    const [logs, setLogs] = React.useState<string[]>([]);

    const addLog = (message: string) => {
      const time = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3,
      });
      setLogs((prev) => [`[${time}] ${message}`, ...prev].slice(0, 10));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text>
          Use <Code>onOpenChange</Code> (fires when state changes) and <Code>onAnimationEnd</Code> (fires after
          animations complete).
        </Text>

        <Sheet.Root
          onOpenChange={(open) => addLog(`onOpenChange: ${open ? 'opening' : 'closing'}`)}
          onAnimationEnd={(open) => addLog(`onAnimationEnd: ${open ? 'opened' : 'closed'}`)}
        >
          <Sheet.Trigger>
            <Button variant="classic">Open Sheet</Button>
          </Sheet.Trigger>
          <Sheet.Content {...args}>
            <Sheet.Header>
              <Sheet.Title>Callback Demo</Sheet.Title>
              <Sheet.Description>Watch the event log to see callback timing.</Sheet.Description>
            </Sheet.Header>
            <Sheet.Body>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-4)',
                  justifyContent: 'flex-end',
                }}
              >
                <Sheet.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Sheet.Close>
                <Sheet.Close>
                  <Button variant="classic">Done</Button>
                </Sheet.Close>
              </div>
            </Sheet.Body>
          </Sheet.Content>
        </Sheet.Root>

        <div
          style={{
            padding: 'var(--space-3)',
            background: 'var(--gray-a3)',
            borderRadius: 'var(--radius-2)',
            fontFamily: 'monospace',
            fontSize: 'var(--font-size-1)',
            minHeight: 150,
            width: 400,
          }}
        >
          <Text size="1" weight="medium" style={{ marginBottom: 8, display: 'block' }}>
            Event Log:
          </Text>
          {logs.length === 0 ? (
            <Text size="1" color="gray">
              Open/close the sheet to see events...
            </Text>
          ) : (
            logs.map((log, i) => (
              <div key={i} style={{ color: log.includes('AnimationEnd') ? 'var(--accent-11)' : 'var(--gray-11)' }}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    );
  },
};

export const CloseConfirmation: Story = {
  name: 'Close Confirmation',
  render: function Render(args) {
    const [sheetOpen, setSheetOpen] = React.useState(false);
    const [confirmationOpen, setConfirmationOpen] = React.useState(false);
    const [textareaValue, setTextareaValue] = React.useState('');

    const handleClose = () => {
      if (textareaValue) {
        setConfirmationOpen(true);
      } else {
        setSheetOpen(false);
      }
    };

    const handleDiscard = () => {
      setConfirmationOpen(false);
      setTextareaValue('');
      setSheetOpen(false);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text style={{ maxWidth: 500, textAlign: 'center' }}>
          This demo shows how to use a nested <Code>AlertDialog</Code> inside a <Code>Sheet</Code> to confirm discarding
          unsaved changes. Uses <Code>dismissible=&#123;false&#125;</Code> to prevent swipe/overlay close. Type
          something in the textarea, then try to cancel.
        </Text>

        <Sheet.Root dismissible={false} open={sheetOpen} onOpenChange={setSheetOpen}>
          <Sheet.Trigger>
            <Button variant="classic">New Post</Button>
          </Sheet.Trigger>
          <Sheet.Content {...args}>
            <Sheet.Header>
              <Sheet.Title>New post</Sheet.Title>
              <Sheet.Description>Share what's on your mind.</Sheet.Description>
            </Sheet.Header>
            <Sheet.Body>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  // Close the sheet when submitting
                  setTextareaValue('');
                  setSheetOpen(false);
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
              >
                <TextArea
                  placeholder="What's on your mind?"
                  value={textareaValue}
                  onChange={(event) => setTextareaValue(event.target.value)}
                  style={{ minHeight: 150 }}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)' }}>
                  <Button variant="soft" color="gray" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="classic">
                    Post
                  </Button>
                </div>
              </form>

              {/* Confirmation AlertDialog (nested) */}
              <AlertDialog.Root open={confirmationOpen} onOpenChange={setConfirmationOpen}>
                <AlertDialog.Content style={{ maxWidth: 350 }}>
                  <AlertDialog.Title>Discard post?</AlertDialog.Title>
                  <AlertDialog.Description>Your post will be lost.</AlertDialog.Description>
                  <div
                    style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      marginTop: 'var(--space-4)',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <AlertDialog.Close>
                      <Button variant="soft" color="gray">
                        Go back
                      </Button>
                    </AlertDialog.Close>
                    <Button variant="classic" color="red" onClick={handleDiscard}>
                      Discard
                    </Button>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Root>
            </Sheet.Body>
          </Sheet.Content>
        </Sheet.Root>
      </div>
    );
  },
};

export const SheetFromDropdownMenu: Story = {
  name: 'Sheet from Dropdown Menu',
  render: function Render(args) {
    const [editSheetOpen, setEditSheetOpen] = React.useState(false);
    const [deleteSheetOpen, setDeleteSheetOpen] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text style={{ maxWidth: 500, textAlign: 'center' }}>
          Open a sheet from a dropdown menu using controlled state. The sheet is controlled via <Code>open</Code> and{' '}
          <Code>onOpenChange</Code> props, and opened imperatively via <Code>onClick</Code> on the menu item.
        </Text>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Options ▾</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>View Details</DropdownMenu.Item>
            <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item onClick={() => setEditSheetOpen(true)}>Edit Settings...</DropdownMenu.Item>
            <DropdownMenu.Item color="red" onClick={() => setDeleteSheetOpen(true)}>
              Delete...
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        {/* Edit Sheet - rendered outside the menu */}
        <Sheet.Root open={editSheetOpen} onOpenChange={setEditSheetOpen}>
          <Sheet.Content {...args}>
            <Sheet.Header>
              <Sheet.Title>Edit Settings</Sheet.Title>
              <Sheet.Description>Make changes to your settings here.</Sheet.Description>
            </Sheet.Header>
            <Sheet.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <label>
                  <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Name
                  </Text>
                  <TextField.Input size="3" defaultValue="My Project" placeholder="Enter name" />
                </label>
                <label>
                  <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Description
                  </Text>
                  <TextArea defaultValue="A sample project description" placeholder="Enter description" />
                </label>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-4)',
                  justifyContent: 'flex-end',
                }}
              >
                <Sheet.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Sheet.Close>
                <Sheet.Close>
                  <Button variant="classic">Save Changes</Button>
                </Sheet.Close>
              </div>
            </Sheet.Body>
          </Sheet.Content>
        </Sheet.Root>

        {/* Delete Sheet - rendered outside the menu */}
        <Sheet.Root open={deleteSheetOpen} onOpenChange={setDeleteSheetOpen}>
          <Sheet.Content {...args}>
            <Sheet.Header>
              <Sheet.Title>Delete Item</Sheet.Title>
              <Sheet.Description>
                Are you sure you want to delete this item? This action cannot be undone.
              </Sheet.Description>
            </Sheet.Header>
            <Sheet.Body>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-4)',
                  justifyContent: 'flex-end',
                }}
              >
                <Sheet.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Sheet.Close>
                <Sheet.Close>
                  <Button variant="classic" color="red">
                    Delete
                  </Button>
                </Sheet.Close>
              </div>
            </Sheet.Body>
          </Sheet.Content>
        </Sheet.Root>
      </div>
    );
  },
};

// TODO: add support for snapPoints
// export const SnapPoints: Story = {
//   name: 'Snap points',
//   render: ({ children, ...args }) => {
//     const snapPoints = ['120px', '240px', 1];
//     const [snap, setSnap] = React.useState<string | number | null>('420px');

//     return (
//       <Sheet.Root
//       snapPoints={snapPoints}
//       activeSnapPoint={snap}
//       setActiveSnapPoint={(a) => console.log({ a })}
//       >
//         <Sheet.Trigger>
//           <Button>Open Sheet</Button>
//         </Sheet.Trigger>
//         <Sheet.Content {...args}>
//           <Sheet.Header>
//             <Sheet.Title>Delete account</Sheet.Title>
//             <Sheet.Description>
//               Are you sure you want to delete your account?
//             </Sheet.Description>
//           </Sheet.Header>
//           <Sheet.Body>
//             <div style={{ height: 120, width: '100%', background: 'red' }} />
//             <div style={{ height: 120, width: '100%', background: 'blue' }} />
//             <div style={{ height: 260, width: '100%', background: 'green' }} />
//           </Sheet.Body>
//         </Sheet.Content>
//       </Sheet.Root>
//     );
//   },
// };

export const SheetTriggerInDropdownMenu: Story = {
  name: 'Sheet Trigger in Dropdown Menu',
  render: function Render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text as="div" style={{ maxWidth: 540, textAlign: 'center' }}>
          When wrapping a menu item with <Code>Sheet.Trigger</Code>, use <Code>closeOnClick=&#123;false&#125;</Code> to
          prevent the menu from closing before the sheet opens.
        </Text>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Options ▾</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>View Details</DropdownMenu.Item>
            <DropdownMenu.Item disabled>Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />

            <Sheet.Root>
              <Sheet.Trigger nativeButton={false} tabIndex={-1}>
                <DropdownMenu.Item closeOnClick={false}>Edit Settings...</DropdownMenu.Item>
              </Sheet.Trigger>
              <Sheet.Content {...args}>
                <Sheet.Header>
                  <Sheet.Title>Edit Settings</Sheet.Title>
                  <Sheet.Description>Make changes to your settings here.</Sheet.Description>
                </Sheet.Header>
                <Sheet.Body>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    <label>
                      <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                        Name
                      </Text>
                      <TextField.Input size="3" defaultValue="My Project" placeholder="Enter name" />
                    </label>
                    <label>
                      <Text as="div" size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                        Description
                      </Text>
                      <TextField.Input size="3" defaultValue="A sample project" placeholder="Enter description" />
                    </label>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      marginTop: 'var(--space-4)',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Sheet.Close>
                      <Button variant="soft" color="gray">
                        Cancel
                      </Button>
                    </Sheet.Close>
                    <Sheet.Close>
                      <Button>Save Changes</Button>
                    </Sheet.Close>
                  </div>
                </Sheet.Body>
              </Sheet.Content>
            </Sheet.Root>

            <Sheet.Root>
              <Sheet.Trigger nativeButton={false}>
                <DropdownMenu.Item tabIndex={-1} color="red" closeOnClick={false}>
                  Delete...
                </DropdownMenu.Item>
              </Sheet.Trigger>
              <Sheet.Content {...args}>
                <Sheet.Header>
                  <Sheet.Title>Delete Item</Sheet.Title>
                  <Sheet.Description>
                    Are you sure you want to delete this item? This action cannot be undone.
                  </Sheet.Description>
                </Sheet.Header>
                <Sheet.Body>
                  <div
                    style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      marginTop: 'var(--space-4)',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Sheet.Close>
                      <Button variant="soft" color="gray">
                        Cancel
                      </Button>
                    </Sheet.Close>
                    <Sheet.Close>
                      <Button variant="classic" color="red">
                        Delete
                      </Button>
                    </Sheet.Close>
                  </div>
                </Sheet.Body>
              </Sheet.Content>
            </Sheet.Root>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    );
  },
};
