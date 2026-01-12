import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  AlertDialog,
  Badge,
  Button,
  Checkbox,
  Code,
  Dialog,
  Inset,
  ScrollArea,
  Table,
  Text,
  TextArea,
  TextField,
  dialogContentPropDefs,
} from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Dialog',
  component: Dialog.Content,
  args: {
    size: dialogContentPropDefs.size.default,
  },

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit profile</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }} {...args}>
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description>Make changes to your profile.</Dialog.Description>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <label>
            <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
              Name
            </Text>
            <TextField.Input defaultValue="Freja Johnsen" placeholder="Enter your full name" />
          </label>
          <label>
            <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
              Email
            </Text>
            <TextField.Input defaultValue="freja@example.com" placeholder="Enter your email" />
          </label>
        </div>

        <div
          style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', justifyContent: 'flex-end' }}
        >
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={() => alert('Cancel')}>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={() => alert('Save')}>Save</Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 1</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} {...args} size="1">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
            <Dialog.Close>
              <Button size="1" variant="soft" color="gray" onClick={() => alert('Cancel')}>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="1" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 2</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} {...args} size="2">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
            <Dialog.Close>
              <Button size="2" variant="soft" color="gray" onClick={() => alert('Cancel')}>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="2" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 3</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} {...args} size="3">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
            <Dialog.Close>
              <Button size="2" variant="soft" color="gray" onClick={() => alert('Cancel')}>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="2" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Size 4</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 350 }} {...args} size="4">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>

          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Dialog.Close>
              <Button size="3" variant="soft" color="gray" onClick={() => alert('Cancel')}>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="3" onClick={() => alert('Save')} variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  render: (args) => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>View users</Button>
      </Dialog.Trigger>
      <Dialog.Content {...args}>
        <Dialog.Title>Users</Dialog.Title>
        <Dialog.Description>The following users have access to this project.</Dialog.Description>

        <Inset side="x" style={{ marginTop: 20 }}>
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
      </Dialog.Content>
    </Dialog.Root>
  ),
};

const detachedHandle = Dialog.createHandle();

export const DetachedTriggers: Story = {
  name: 'Detached Triggers',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text>
        Use <Code>Dialog.createHandle()</Code> to control a dialog from a trigger located outside the{' '}
        <Code>Dialog.Root</Code>.
      </Text>

      <Dialog.Trigger handle={detachedHandle}>
        <Button>Detached Trigger</Button>
      </Dialog.Trigger>

      <Dialog.Root handle={detachedHandle}>
        <Dialog.Content {...args} style={{ maxWidth: 400 }}>
          <Dialog.Title>Detached Dialog</Dialog.Title>
          <Dialog.Description>This dialog is controlled by a trigger outside of its Root component.</Dialog.Description>
          <div
            style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', justifyContent: 'flex-end' }}
          >
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button variant="classic">Done</Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  ),
};

export const MultipleTriggers: Story = {
  name: 'Multiple Triggers with Payload',
  render: function Render(args) {
    type PayloadType = { title: string; mode: 'create' | 'edit' | 'view' };
    const handle = React.useMemo(() => Dialog.createHandle<PayloadType>(), []);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text>
          Multiple triggers can control the same dialog. Each trigger can pass a different <Code>payload</Code>.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Dialog.Trigger handle={handle} payload={{ title: 'New Project', mode: 'create' }}>
            <Button variant="classic">Create Project</Button>
          </Dialog.Trigger>
          <Dialog.Trigger handle={handle} payload={{ title: 'Edit Project', mode: 'edit' }}>
            <Button variant="soft">Edit Project</Button>
          </Dialog.Trigger>
          <Dialog.Trigger handle={handle} payload={{ title: 'View Project', mode: 'view' }}>
            <Button variant="surface">View Project</Button>
          </Dialog.Trigger>
        </div>

        <Dialog.Root handle={handle}>
          {({ payload }) => {
            const typedPayload = payload as PayloadType | undefined;
            return (
              <Dialog.Content {...args} style={{ maxWidth: 450 }}>
                <Dialog.Title>{typedPayload?.title || 'Project'}</Dialog.Title>
                <Dialog.Description>
                  {typedPayload?.mode === 'create' && 'Fill in the details to create a new project.'}
                  {typedPayload?.mode === 'edit' && 'Modify the project details below.'}
                  {typedPayload?.mode === 'view' && 'View the project details below.'}
                </Dialog.Description>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                    marginTop: 'var(--space-3)',
                  }}
                >
                  <label>
                    <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
                      Project Name
                    </Text>
                    <TextField.Input
                      defaultValue={typedPayload?.mode !== 'create' ? 'My Awesome Project' : ''}
                      placeholder="Enter project name"
                      readOnly={typedPayload?.mode === 'view'}
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
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      {typedPayload?.mode === 'view' ? 'Close' : 'Cancel'}
                    </Button>
                  </Dialog.Close>
                  {typedPayload?.mode !== 'view' && (
                    <Dialog.Close>
                      <Button variant="classic">{typedPayload?.mode === 'create' ? 'Create' : 'Save'}</Button>
                    </Dialog.Close>
                  )}
                </div>
              </Dialog.Content>
            );
          }}
        </Dialog.Root>
      </div>
    );
  },
};

export const ControlledMode: Story = {
  name: 'Controlled Mode',
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
          Use <Code>open</Code> and <Code>onOpenChange</Code> for fully controlled mode.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button onClick={() => setOpen(true)}>Open Dialog Programmatically</Button>
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger>
            <Button variant="soft">Open with Trigger</Button>
          </Dialog.Trigger>
          <Dialog.Content {...args} style={{ maxWidth: 400 }}>
            <Dialog.Title>Controlled Dialog</Dialog.Title>
            <Dialog.Description>
              This dialog can be opened by both a trigger and a programmatic button.
            </Dialog.Description>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}
            >
              <label>
                <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
                  Name
                </Text>
                <TextField.Input
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter name"
                />
              </label>
              <label>
                <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
                  Email
                </Text>
                <TextField.Input
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
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Button variant="classic" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    );
  },
};

export const ActionsRef: Story = {
  name: 'Actions Ref',
  render: function Render(args) {
    const actionsRef = React.useRef<{ close: () => void; unmount: () => void }>(null!);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async () => {
      setIsSubmitting(true);
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      // Close dialog programmatically after operation completes
      actionsRef.current?.close();
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text>
          Use <Code>actionsRef</Code> to close the dialog programmatically after an async operation.
        </Text>

        <Dialog.Root actionsRef={actionsRef}>
          <Dialog.Trigger>
            <Button variant="classic">Submit Form</Button>
          </Dialog.Trigger>
          <Dialog.Content {...args} style={{ maxWidth: 400 }}>
            <Dialog.Title>Submit Form</Dialog.Title>
            <Dialog.Description>
              The dialog will close automatically when the form submission completes.
            </Dialog.Description>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}
            >
              <label>
                <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
                  Feedback
                </Text>
                <TextArea placeholder="Enter your feedback..." style={{ minHeight: 100 }} />
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
              <Dialog.Close>
                <Button variant="soft" color="gray" disabled={isSubmitting}>
                  Cancel
                </Button>
              </Dialog.Close>
              <Button variant="classic" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    );
  },
};

export const InitialFocus: Story = {
  name: 'Initial Focus',
  render: function Render(args) {
    const nameInputRef = React.useRef<HTMLInputElement>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text>
          Use <Code>initialFocus</Code> to control which element receives focus when the dialog opens.
        </Text>

        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="classic">Add New Item</Button>
          </Dialog.Trigger>
          <Dialog.Content {...args} style={{ maxWidth: 400 }} initialFocus={nameInputRef}>
            <Dialog.Title>Add New Item</Dialog.Title>
            <Dialog.Description>Focus is automatically set to the Name input when the dialog opens.</Dialog.Description>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}
            >
              <label>
                <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
                  Name
                </Text>
                <TextField.Input ref={nameInputRef} placeholder="Enter item name" />
              </label>
              <label>
                <Text as="div" size="2" style={{ marginBottom: 4 }} weight="bold">
                  Description
                </Text>
                <TextField.Input placeholder="Enter description" />
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
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button variant="classic">Add Item</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
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
          Use <Code>finalFocus</Code> to control where focus returns when the dialog closes.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Dialog.Root>
            <Dialog.Trigger>
              <Button variant="soft">Open Dialog</Button>
            </Dialog.Trigger>
            <Dialog.Content {...args} style={{ maxWidth: 400 }} finalFocus={buttonRef}>
              <Dialog.Title>Focus Demo</Dialog.Title>
              <Dialog.Description>
                When this dialog closes, focus will return to the "Focus Here" button instead of the trigger.
              </Dialog.Description>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-4)',
                  justifyContent: 'flex-end',
                }}
              >
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button variant="classic">Done</Button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Root>
          <Button ref={buttonRef} variant="surface" color="green">
            Focus Here After Close
          </Button>
        </div>
      </div>
    );
  },
};

export const OpenChangeComplete: Story = {
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
          Compare <Code>onOpenChange</Code> (fires immediately) vs <Code>onOpenChangeComplete</Code> (fires after
          animations).
        </Text>

        <Dialog.Root
          onOpenChange={(open) => addLog(`onOpenChange: ${open ? 'opening' : 'closing'}`)}
          onOpenChangeComplete={(open) => addLog(`onOpenChangeComplete: ${open ? 'opened' : 'closed'}`)}
        >
          <Dialog.Trigger>
            <Button variant="classic">Open Dialog</Button>
          </Dialog.Trigger>
          <Dialog.Content {...args} style={{ maxWidth: 400 }}>
            <Dialog.Title>Callback Demo</Dialog.Title>
            <Dialog.Description>Watch the event log to see callback timing.</Dialog.Description>
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-4)',
                justifyContent: 'flex-end',
              }}
            >
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button variant="classic">Done</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>

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
              Open/close the dialog to see events...
            </Text>
          ) : (
            logs.map((log, i) => (
              <div key={i} style={{ color: log.includes('Complete') ? 'var(--accent-11)' : 'var(--gray-11)' }}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    );
  },
};

export const NestedDialogs: Story = {
  name: 'Nested Dialogs',
  render: function Render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text style={{ maxWidth: 500, textAlign: 'center' }}>
          Dialogs can be nested within one another. The parent dialog dims when a child dialog opens.
        </Text>

        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="classic">Open Parent Dialog</Button>
          </Dialog.Trigger>
          <Dialog.Content {...args} style={{ maxWidth: 450 }}>
            <Dialog.Title>Parent Dialog</Dialog.Title>
            <Dialog.Description>
              This is the parent dialog. Click the button below to open a nested dialog.
            </Dialog.Description>

            <div
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-4)',
                justifyContent: 'flex-end',
              }}
            >
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button variant="soft">Open Child Dialog</Button>
                </Dialog.Trigger>
                <Dialog.Content {...args} style={{ maxWidth: 350 }}>
                  <Dialog.Title>Child Dialog</Dialog.Title>
                  <Dialog.Description>
                    This is a nested dialog. You can nest dialogs multiple levels deep.
                  </Dialog.Description>
                  <div
                    style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      marginTop: 'var(--space-4)',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        Close
                      </Button>
                    </Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Root>
              <Dialog.Close>
                <Button variant="classic">Done</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    );
  },
};

export const CloseConfirmation: Story = {
  name: 'Close Confirmation',
  render: function Render(args) {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [confirmationOpen, setConfirmationOpen] = React.useState(false);
    const [textareaValue, setTextareaValue] = React.useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text style={{ maxWidth: 500, textAlign: 'center' }}>
          This demo shows how to use a nested <Code>AlertDialog</Code> inside a <Code>Dialog</Code> to confirm
          discarding unsaved changes. Type something in the textarea, then try to close the dialog.
        </Text>

        <Dialog.Root
          open={dialogOpen}
          onOpenChange={(open) => {
            // Show the close confirmation if there's text in the textarea
            if (!open && textareaValue) {
              setConfirmationOpen(true);
            } else {
              // Reset the textarea value
              setTextareaValue('');
              // Open or close the dialog normally
              setDialogOpen(open);
            }
          }}
        >
          <Dialog.Trigger>
            <Button variant="classic">New Post</Button>
          </Dialog.Trigger>
          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>New post</Dialog.Title>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                // Close the dialog when submitting
                setTextareaValue('');
                setDialogOpen(false);
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-3)' }}
            >
              <TextArea
                required
                placeholder="What's on your mind?"
                value={textareaValue}
                onChange={(event) => setTextareaValue(event.target.value)}
                style={{ minHeight: 150 }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)' }}>
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Button type="submit" variant="classic">
                  Post
                </Button>
              </div>
            </form>

            {/* Confirmation AlertDialog (nested) */}
            <AlertDialog.Root open={confirmationOpen} onOpenChange={setConfirmationOpen}>
              <AlertDialog.Content {...args} style={{ maxWidth: 350 }}>
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
                  <Button
                    variant="classic"
                    color="red"
                    onClick={() => {
                      setConfirmationOpen(false);
                      setTextareaValue('');
                      setDialogOpen(false);
                    }}
                  >
                    Discard
                  </Button>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    );
  },
};
