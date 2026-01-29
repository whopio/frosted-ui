import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { XMark16 } from '@frosted-ui/icons';
import {
  AlertDialog,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Code,
  ContextMenu,
  Dialog,
  Drawer,
  DropdownMenu,
  Heading,
  HoverCard,
  IconButton,
  Inset,
  Link,
  Popover,
  ScrollArea,
  Select,
  Table,
  Text,
  TextArea,
  TextField,
  Tooltip,
} from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Drawer',
  component: Drawer.Content,
  args: {},

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>Edit profile</Button>
      </Drawer.Trigger>

      <Drawer.Content {...args}>
        <Drawer.Header>
          <Drawer.Title>Edit profile</Drawer.Title>
          <Drawer.Close>
            <IconButton size="1" color="gray" variant="ghost">
              <XMark16 />
            </IconButton>
          </Drawer.Close>
        </Drawer.Header>
        <Drawer.Body>
          <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
            Make changes to your profile here. Click save when you&apos;re done.
          </Text>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <label>
              <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                Name
              </Text>
              <TextField.Input defaultValue="Freja Johnsen" placeholder="Enter your full name" />
            </label>
            <label>
              <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                Email
              </Text>
              <TextField.Input defaultValue="freja@example.com" placeholder="Enter your email" />
            </label>
          </div>

          <div
            style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', justifyContent: 'flex-end' }}
          >
            <Drawer.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Drawer.Close>
            <Drawer.Close>
              <Button>Save</Button>
            </Drawer.Close>
          </div>
        </Drawer.Body>
        <Drawer.StickyFooter>
          <Drawer.Close>
            <Button variant="classic" color="lime" size="4" style={{ width: '100%' }}>
              Subscribe
            </Button>
          </Drawer.Close>
        </Drawer.StickyFooter>
      </Drawer.Content>
    </Drawer.Root>
  ),
};

export const InsetContent: Story = {
  name: 'With inset content',
  render: (args) => (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>View users</Button>
      </Drawer.Trigger>
      <Drawer.Content style={{ maxWidth: 540 }} {...args}>
        <Drawer.Header>
          <Drawer.Title>Users</Drawer.Title>
          <Drawer.Close>
            <IconButton size="1" color="gray" variant="ghost">
              <XMark16 />
            </IconButton>
          </Drawer.Close>
        </Drawer.Header>
        <Drawer.Body>
          <Text render={<p />}>The following users have access to this project.</Text>

          <Inset side="x" style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-5)' }}>
            <Table.Root variant="ghost">
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
            <Drawer.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Drawer.Close>
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  ),
};

const detachedHandle = Drawer.createHandle();

export const DetachedTriggers: Story = {
  name: 'Detached Triggers',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text>
        Use <Code>Drawer.createHandle()</Code> to control a drawer from a trigger located outside the{' '}
        <Code>Drawer.Root</Code>.
      </Text>

      <Drawer.Trigger handle={detachedHandle}>
        <Button>Detached Trigger</Button>
      </Drawer.Trigger>

      <Drawer.Root handle={detachedHandle}>
        <Drawer.Content {...args}>
          <Drawer.Header>
            <Drawer.Title>Detached Drawer</Drawer.Title>
            <Drawer.Close>
              <IconButton size="1" color="gray" variant="ghost">
                <XMark16 />
              </IconButton>
            </Drawer.Close>
          </Drawer.Header>
          <Drawer.Body>
            <Text render={<p />} size="2">
              This drawer is controlled by a trigger outside of its Root component. This is useful when you need to open
              a drawer from a completely different part of your app.
            </Text>
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-4)',
                justifyContent: 'flex-end',
              }}
            >
              <Drawer.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button variant="classic">Done</Button>
              </Drawer.Close>
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  ),
};

export const MultipleTriggers: Story = {
  name: 'Multiple Triggers with Payload',
  render: function Render(args) {
    const handle = React.useMemo(
      () => Drawer.createHandle<{ userId: string; userName: string; mode: 'view' | 'edit' }>(),
      [],
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text>
          Multiple triggers can control the same drawer. Each trigger can pass a different <Code>payload</Code>. The
          payload type is inferred from the handle.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Drawer.Trigger handle={handle} payload={{ userId: '1', userName: 'Alice', mode: 'view' }}>
            <Button variant="surface">View Alice</Button>
          </Drawer.Trigger>
          <Drawer.Trigger handle={handle} payload={{ userId: '2', userName: 'Bob', mode: 'edit' }}>
            <Button variant="soft">Edit Bob</Button>
          </Drawer.Trigger>
          <Drawer.Trigger handle={handle} payload={{ userId: '3', userName: 'Carol', mode: 'edit' }}>
            <Button variant="classic">Edit Carol</Button>
          </Drawer.Trigger>
        </div>

        <Drawer.Root handle={handle}>
          {({ payload }) => (
            <Drawer.Content {...args}>
              <Drawer.Header>
                <Drawer.Title>
                  {payload?.mode === 'edit' ? 'Edit' : 'View'} User: {payload?.userName}
                </Drawer.Title>
                <Drawer.Close>
                  <IconButton size="1" color="gray" variant="ghost">
                    <XMark16 />
                  </IconButton>
                </Drawer.Close>
              </Drawer.Header>
              <Drawer.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <label>
                    <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                      User ID
                    </Text>
                    <TextField.Input value={payload?.userId || ''} readOnly />
                  </label>
                  <label>
                    <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                      Name
                    </Text>
                    <TextField.Input defaultValue={payload?.userName || ''} readOnly={payload?.mode === 'view'} />
                  </label>
                  <label>
                    <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                      Email
                    </Text>
                    <TextField.Input
                      defaultValue={`${payload?.userName?.toLowerCase() || 'user'}@example.com`}
                      readOnly={payload?.mode === 'view'}
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
                  <Drawer.Close>
                    <Button variant="soft" color="gray">
                      {payload?.mode === 'view' ? 'Close' : 'Cancel'}
                    </Button>
                  </Drawer.Close>
                  {payload?.mode === 'edit' && (
                    <Drawer.Close>
                      <Button variant="classic">Save Changes</Button>
                    </Drawer.Close>
                  )}
                </div>
              </Drawer.Body>
            </Drawer.Content>
          )}
        </Drawer.Root>
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
          <Button onClick={() => setOpen(true)}>Open Drawer Programmatically</Button>
        </div>

        <Drawer.Root open={open} onOpenChange={setOpen}>
          <Drawer.Trigger>
            <Button variant="soft">Open with Trigger</Button>
          </Drawer.Trigger>
          <Drawer.Content {...args}>
            <Drawer.Header>
              <Drawer.Title>Controlled Drawer</Drawer.Title>
              <Drawer.Close>
                <IconButton size="1" color="gray" variant="ghost">
                  <XMark16 />
                </IconButton>
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Body>
              <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                This drawer can be opened by both a trigger and a programmatic button.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <label>
                  <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Name
                  </Text>
                  <TextField.Input
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter name"
                  />
                </label>
                <label>
                  <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
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
                <Drawer.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Drawer.Close>
                <Button variant="classic" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      </div>
    );
  },
};

export const ActionsRef: Story = {
  name: 'Actions Ref',
  render: function Render(args) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const actionsRef = React.useRef<Drawer.Actions>(null!);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async () => {
      setIsSubmitting(true);
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      // Close drawer programmatically after operation completes
      actionsRef.current?.close();
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text>
          Use <Code>actionsRef</Code> to close the drawer programmatically after an async operation.
        </Text>

        <Drawer.Root actionsRef={actionsRef}>
          <Drawer.Trigger>
            <Button variant="classic">Submit Feedback</Button>
          </Drawer.Trigger>
          <Drawer.Content {...args}>
            <Drawer.Header>
              <Drawer.Title>Submit Feedback</Drawer.Title>
              <Drawer.Close>
                <IconButton size="1" color="gray" variant="ghost" disabled={isSubmitting}>
                  <XMark16 />
                </IconButton>
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Body>
              <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                The drawer will close automatically when the form submission completes.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <label>
                  <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Feedback
                  </Text>
                  <TextArea placeholder="Enter your feedback..." style={{ minHeight: 120 }} />
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
                <Drawer.Close>
                  <Button variant="soft" color="gray" disabled={isSubmitting}>
                    Cancel
                  </Button>
                </Drawer.Close>
                <Button variant="classic" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
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
          Use <Code>initialFocus</Code> to control which element receives focus when the drawer opens.
        </Text>

        <Drawer.Root>
          <Drawer.Trigger>
            <Button variant="classic">Add New Item</Button>
          </Drawer.Trigger>
          <Drawer.Content {...args} initialFocus={nameInputRef}>
            <Drawer.Header>
              <Drawer.Title>Add New Item</Drawer.Title>
              <Drawer.Close>
                <IconButton size="1" color="gray" variant="ghost">
                  <XMark16 />
                </IconButton>
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Body>
              <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                Focus is automatically set to the Name input when the drawer opens.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <label>
                  <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Name
                  </Text>
                  <TextField.Input ref={nameInputRef} placeholder="Enter item name" />
                </label>
                <label>
                  <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Description
                  </Text>
                  <TextField.Input placeholder="Enter description" />
                </label>
                <label>
                  <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Price
                  </Text>
                  <TextField.Input placeholder="Enter price" type="number" />
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
                <Drawer.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Drawer.Close>
                <Drawer.Close>
                  <Button variant="classic">Add Item</Button>
                </Drawer.Close>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
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
          Use <Code>finalFocus</Code> to control where focus returns when the drawer closes.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Drawer.Root>
            <Drawer.Trigger>
              <Button variant="soft">Open Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content {...args} finalFocus={buttonRef}>
              <Drawer.Header>
                <Drawer.Title>Focus Demo</Drawer.Title>
                <Drawer.Close>
                  <IconButton size="1" color="gray" variant="ghost">
                    <XMark16 />
                  </IconButton>
                </Drawer.Close>
              </Drawer.Header>
              <Drawer.Body>
                <Text render={<p />} size="2">
                  When this drawer closes, focus will return to the "Focus Here" button instead of the trigger.
                </Text>
                <div
                  style={{
                    display: 'flex',
                    gap: 'var(--space-3)',
                    marginTop: 'var(--space-4)',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Drawer.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Drawer.Close>
                  <Drawer.Close>
                    <Button variant="classic">Done</Button>
                  </Drawer.Close>
                </div>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Root>
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

        <Drawer.Root
          onOpenChange={(open) => addLog(`onOpenChange: ${open ? 'opening' : 'closing'}`)}
          onOpenChangeComplete={(open) => addLog(`onOpenChangeComplete: ${open ? 'opened' : 'closed'}`)}
        >
          <Drawer.Trigger>
            <Button variant="classic">Open Drawer</Button>
          </Drawer.Trigger>
          <Drawer.Content {...args}>
            <Drawer.Header>
              <Drawer.Title>Callback Demo</Drawer.Title>
              <Drawer.Close>
                <IconButton size="1" color="gray" variant="ghost">
                  <XMark16 />
                </IconButton>
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Body>
              <Text render={<p />} size="2">
                Watch the event log below to see callback timing. Notice how <Code>onOpenChangeComplete</Code> fires
                after the slide animation completes.
              </Text>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-4)',
                  justifyContent: 'flex-end',
                }}
              >
                <Drawer.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Drawer.Close>
                <Drawer.Close>
                  <Button variant="classic">Done</Button>
                </Drawer.Close>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>

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
              Open/close the drawer to see events...
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

export const KeepMounted: Story = {
  name: 'Keep Mounted',
  render: function Render(args) {
    const [value, setValue] = React.useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text>
          Use <Code>keepMounted</Code> to preserve the drawer&apos;s DOM when closed. The input value persists across
          open/close cycles.
        </Text>

        <Drawer.Root>
          <Drawer.Trigger>
            <Button variant="classic">Open Drawer</Button>
          </Drawer.Trigger>
          <Drawer.Content {...args} keepMounted>
            <Drawer.Header>
              <Drawer.Title>Keep Mounted Demo</Drawer.Title>
              <Drawer.Close>
                <IconButton size="1" color="gray" variant="ghost">
                  <XMark16 />
                </IconButton>
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Body>
              <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                Type something below, close the drawer, then reopen it. The value will persist because the drawer stays
                mounted in the DOM.
              </Text>

              <label>
                <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                  Persistent Input
                </Text>
                <TextField.Input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Type something..."
                />
              </label>

              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-4)',
                  justifyContent: 'flex-end',
                }}
              >
                <Drawer.Close>
                  <Button variant="soft" color="gray">
                    Close
                  </Button>
                </Drawer.Close>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>

        {value && (
          <Text size="2" color="gray">
            Current value: "{value}"
          </Text>
        )}
      </div>
    );
  },
};

export const NestedDrawers: Story = {
  name: 'Nested Drawers',
  render: function Render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text style={{ maxWidth: 500, textAlign: 'center' }}>
          Drawers can be nested within one another. The parent drawer scales down and moves left when a child drawer
          opens.
        </Text>

        <Drawer.Root>
          <Drawer.Trigger>
            <Button variant="classic">Open Parent Drawer</Button>
          </Drawer.Trigger>
          <Drawer.Content {...args}>
            <Drawer.Header>
              <Drawer.Title>Parent Drawer</Drawer.Title>
              <Drawer.Close>
                <IconButton size="1" color="gray" variant="ghost">
                  <XMark16 />
                </IconButton>
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Body>
              <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                This is the parent drawer. Click the button below to open a nested drawer. Notice how this drawer scales
                down and moves to the left when the child opens.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <label>
                  <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Project Name
                  </Text>
                  <TextField.Input defaultValue="My Project" />
                </label>
                <label>
                  <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Description
                  </Text>
                  <TextArea defaultValue="A description of the project..." style={{ minHeight: 80 }} />
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
                <Drawer.Root>
                  <Drawer.Trigger>
                    <Button variant="soft">Open Settings</Button>
                  </Drawer.Trigger>
                  <Drawer.Content {...args} style={{ maxWidth: 340 }}>
                    <Drawer.Header>
                      <Drawer.Title>Settings</Drawer.Title>
                      <Drawer.Close>
                        <IconButton size="1" color="gray" variant="ghost">
                          <XMark16 />
                        </IconButton>
                      </Drawer.Close>
                    </Drawer.Header>
                    <Drawer.Body>
                      <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                        This is a nested drawer. You can continue nesting more drawers if needed.
                      </Text>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                          <Checkbox defaultChecked />
                          <Text size="2">Enable notifications</Text>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                          <Checkbox />
                          <Text size="2">Auto-save drafts</Text>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                          <Checkbox defaultChecked />
                          <Text size="2">Show tooltips</Text>
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
                        <Drawer.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Drawer.Close>
                        <Drawer.Close>
                          <Button variant="classic">Save Settings</Button>
                        </Drawer.Close>
                      </div>
                    </Drawer.Body>
                  </Drawer.Content>
                </Drawer.Root>
                <Drawer.Close>
                  <Button variant="classic">Done</Button>
                </Drawer.Close>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      </div>
    );
  },
};

export const DeeplyNestedDrawers: Story = {
  name: 'Deeply Nested Drawers',
  render: function Render(args) {
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const level1Ref = React.useRef<Drawer.Actions>(null!);
    const level2Ref = React.useRef<Drawer.Actions>(null!);
    const level3Ref = React.useRef<Drawer.Actions>(null!);
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    const closeAll = () => {
      // Close from innermost to outermost for smooth animation
      level3Ref.current?.close();
      level2Ref.current?.close();
      level1Ref.current?.close();
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text style={{ maxWidth: 500, textAlign: 'center' }}>
          Drawers can be nested multiple levels deep. Each level scales and shifts the parent drawers. Use{' '}
          <Code>actionsRef</Code> to close all drawers at once.
        </Text>

        <Drawer.Root actionsRef={level1Ref}>
          <Drawer.Trigger>
            <Button variant="classic">Open Level 1</Button>
          </Drawer.Trigger>
          <Drawer.Content {...args}>
            <Drawer.Header>
              <Drawer.Title>Level 1</Drawer.Title>
              <Drawer.Close>
                <IconButton size="1" color="gray" variant="ghost">
                  <XMark16 />
                </IconButton>
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Body>
              <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                First level drawer. Open another to see the stacking effect.
              </Text>

              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  justifyContent: 'flex-end',
                }}
              >
                <Drawer.Root actionsRef={level2Ref}>
                  <Drawer.Trigger>
                    <Button variant="soft">Open Level 2</Button>
                  </Drawer.Trigger>
                  <Drawer.Content {...args} style={{ maxWidth: 350 }}>
                    <Drawer.Header>
                      <Drawer.Title>Level 2</Drawer.Title>
                      <Drawer.Close>
                        <IconButton size="1" color="gray" variant="ghost">
                          <XMark16 />
                        </IconButton>
                      </Drawer.Close>
                    </Drawer.Header>
                    <Drawer.Body>
                      <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                        Second level drawer. One more to go!
                      </Text>

                      <div
                        style={{
                          display: 'flex',
                          gap: 'var(--space-3)',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <Drawer.Root actionsRef={level3Ref}>
                          <Drawer.Trigger>
                            <Button variant="soft">Open Level 3</Button>
                          </Drawer.Trigger>
                          <Drawer.Content {...args} style={{ maxWidth: 320 }}>
                            <Drawer.Header>
                              <Drawer.Title>Level 3</Drawer.Title>
                              <Drawer.Close>
                                <IconButton size="1" color="gray" variant="ghost">
                                  <XMark16 />
                                </IconButton>
                              </Drawer.Close>
                            </Drawer.Header>
                            <Drawer.Body>
                              <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                                Third level - the deepest drawer. Notice how all parent drawers have scaled and shifted.
                              </Text>

                              <div
                                style={{
                                  display: 'flex',
                                  gap: 'var(--space-3)',
                                  justifyContent: 'flex-end',
                                }}
                              >
                                <Button variant="classic" onClick={closeAll}>
                                  Close All
                                </Button>
                              </div>
                            </Drawer.Body>
                          </Drawer.Content>
                        </Drawer.Root>
                        <Drawer.Close>
                          <Button variant="soft" color="gray">
                            Close
                          </Button>
                        </Drawer.Close>
                      </div>
                    </Drawer.Body>
                  </Drawer.Content>
                </Drawer.Root>
                <Drawer.Close>
                  <Button variant="soft" color="gray">
                    Close
                  </Button>
                </Drawer.Close>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      </div>
    );
  },
};

export const WithPopoverAndHoverCard: Story = {
  name: 'With Popover, Select, Dropdown, and HoverCard',
  render: function Render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text style={{ maxWidth: 500, textAlign: 'center' }}>
          Drawers can contain other floating elements like Popovers, Selects, DropdownMenus, and HoverCards. Focus
          management and layering work correctly.
        </Text>

        <Drawer.Root>
          <Drawer.Trigger>
            <Button variant="classic">Open Drawer</Button>
          </Drawer.Trigger>
          <Drawer.Content {...args}>
            <Drawer.Header>
              <Drawer.Title>User Settings</Drawer.Title>
              <Drawer.Close>
                <IconButton size="1" color="gray" variant="ghost">
                  <XMark16 />
                </IconButton>
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Body>
              <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                Configure your account settings and preferences.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Section with Popover */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-3)',
                    background: 'var(--gray-a3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  <div>
                    <Text render={<div />} weight="medium">
                      Notification Preferences
                    </Text>
                    <Text render={<div />} size="2" color="gray">
                      Choose how you want to be notified
                    </Text>
                  </div>
                  <Popover.Root>
                    <Popover.Trigger>
                      <Button variant="soft" size="2">
                        Configure
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content style={{ width: 280 }}>
                      <Heading size="3" style={{ marginBottom: 'var(--space-3)' }}>
                        Notifications
                      </Heading>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                          <Checkbox defaultChecked />
                          <Text size="2">Email notifications</Text>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                          <Checkbox defaultChecked />
                          <Text size="2">Push notifications</Text>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                          <Checkbox />
                          <Text size="2">SMS notifications</Text>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                          <Checkbox defaultChecked />
                          <Text size="2">Weekly digest</Text>
                        </label>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: 'var(--space-2)',
                          justifyContent: 'flex-end',
                          marginTop: 'var(--space-4)',
                        }}
                      >
                        <Popover.Close>
                          <Button variant="soft" color="gray" size="1">
                            Cancel
                          </Button>
                        </Popover.Close>
                        <Popover.Close>
                          <Button variant="solid" size="1">
                            Save
                          </Button>
                        </Popover.Close>
                      </div>
                    </Popover.Content>
                  </Popover.Root>
                </div>

                {/* Section with HoverCard */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-3)',
                    background: 'var(--gray-a3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <Avatar fallback="A" size="2" />
                    <div>
                      <Text render={<div />} weight="medium">
                        Account Owner
                      </Text>
                      <HoverCard.Root>
                        <HoverCard.Trigger>
                          <Link size="2" href="#">
                            @alexjohnson
                          </Link>
                        </HoverCard.Trigger>
                        <HoverCard.Content>
                          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                            <Avatar size="3" fallback="A" />
                            <div>
                              <Heading size="3" render={<h3 />}>
                                Alex Johnson
                              </Heading>
                              <Text render={<p />} size="2" color="gray">
                                @alexjohnson
                              </Text>
                              <Text render={<p />} size="2" style={{ marginTop: 'var(--space-2)', maxWidth: 280 }}>
                                Senior Developer at Acme Corp. Loves building great user experiences.
                              </Text>
                              <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                                <Text size="2">
                                  <Text weight="bold">142</Text> <Text color="gray">following</Text>
                                </Text>
                                <Text size="2">
                                  <Text weight="bold">2,891</Text> <Text color="gray">followers</Text>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </HoverCard.Content>
                      </HoverCard.Root>
                    </div>
                  </div>
                  <Badge color="green">Active</Badge>
                </div>

                {/* Section with Select */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-3)',
                    background: 'var(--gray-a3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  <div>
                    <Text render={<div />} weight="medium">
                      Language
                    </Text>
                    <Text render={<div />} size="2" color="gray">
                      Choose your preferred language
                    </Text>
                  </div>
                  <Select.Root defaultValue="en">
                    <Select.Trigger style={{ minWidth: 150 }} />
                    <Select.Content>
                      <Select.Group>
                        <Select.GroupLabel>Languages</Select.GroupLabel>
                        <Select.Item value="en">English</Select.Item>
                        <Select.Item value="es">Español</Select.Item>
                        <Select.Item value="fr">Français</Select.Item>
                        <Select.Item value="de">Deutsch</Select.Item>
                        <Select.Item value="ja">日本語</Select.Item>
                        <Select.Item value="zh">中文</Select.Item>
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                </div>

                {/* Section with DropdownMenu */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-3)',
                    background: 'var(--gray-a3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  <div>
                    <Text render={<div />} weight="medium">
                      Quick Actions
                    </Text>
                    <Text render={<div />} size="2" color="gray">
                      Common account operations
                    </Text>
                  </div>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="soft" size="2">
                        Actions ▾
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>Export Data</DropdownMenu.Item>
                      <DropdownMenu.Item>Download Backup</DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Privacy Settings</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent>
                          <DropdownMenu.CheckboxItem checked>Profile visible</DropdownMenu.CheckboxItem>
                          <DropdownMenu.CheckboxItem>Show email</DropdownMenu.CheckboxItem>
                          <DropdownMenu.CheckboxItem checked>Allow messages</DropdownMenu.CheckboxItem>
                        </DropdownMenu.SubContent>
                      </DropdownMenu.Sub>
                      <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Theme</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent>
                          <DropdownMenu.RadioGroup value="system">
                            <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
                            <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
                            <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
                          </DropdownMenu.RadioGroup>
                        </DropdownMenu.SubContent>
                      </DropdownMenu.Sub>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item color="red">Sign Out</DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </div>

                {/* Section with ContextMenu */}
                <ContextMenu.Root>
                  <Tooltip content="Right-click here to open context menu">
                    <ContextMenu.Trigger>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: 'var(--space-3)',
                          background: 'var(--gray-a3)',
                          borderRadius: 'var(--radius-2)',
                          cursor: 'context-menu',
                        }}
                      >
                        <div>
                          <Text render={<div />} weight="medium">
                            Context Menu Area
                          </Text>
                          <Text render={<div />} size="2" color="gray">
                            Right-click here to open context menu
                          </Text>
                        </div>
                        <Badge color="gray">Right-click</Badge>
                      </div>
                    </ContextMenu.Trigger>
                  </Tooltip>
                  <ContextMenu.Content>
                    <ContextMenu.Item>Copy</ContextMenu.Item>
                    <ContextMenu.Item>Cut</ContextMenu.Item>
                    <ContextMenu.Item>Paste</ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Sub>
                      <ContextMenu.SubTrigger>Share</ContextMenu.SubTrigger>
                      <ContextMenu.SubContent>
                        <ContextMenu.Item>Email</ContextMenu.Item>
                        <ContextMenu.Item>Messages</ContextMenu.Item>
                        <ContextMenu.Item>Slack</ContextMenu.Item>
                      </ContextMenu.SubContent>
                    </ContextMenu.Sub>
                    <ContextMenu.Separator />
                    <ContextMenu.Item color="red">Delete</ContextMenu.Item>
                  </ContextMenu.Content>
                </ContextMenu.Root>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-5)',
                  justifyContent: 'flex-end',
                }}
              >
                <Drawer.Close>
                  <Button variant="soft" color="gray">
                    Close
                  </Button>
                </Drawer.Close>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      </div>
    );
  },
};

export const WithDialog: Story = {
  name: 'With Dialog Inside',
  render: function Render(args) {
    const [confirmDialogOpen, setConfirmDialogOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({ name: 'My Project', description: '' });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text style={{ maxWidth: 500, textAlign: 'center' }}>
          Drawers can contain Dialogs for confirmations or additional forms. The Dialog appears above the Drawer with
          proper focus management and layering.
        </Text>

        <Drawer.Root>
          <Drawer.Trigger>
            <Button variant="classic">Edit Project</Button>
          </Drawer.Trigger>
          <Drawer.Content {...args}>
            <Drawer.Header>
              <Drawer.Title>Edit Project</Drawer.Title>
              <Drawer.Close>
                <IconButton size="1" color="gray" variant="ghost">
                  <XMark16 />
                </IconButton>
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Body>
              <Text render={<p />} size="2" style={{ marginBottom: 'var(--space-4)' }}>
                Make changes to your project settings. Click "Delete Project" to see a confirmation dialog.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <label>
                  <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Project Name
                  </Text>
                  <TextField.Input
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter project name"
                  />
                </label>
                <label>
                  <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                    Description
                  </Text>
                  <TextArea
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Enter project description..."
                    style={{ minHeight: 100 }}
                  />
                </label>
              </div>

              {/* Section with nested Dialog trigger */}
              <div
                style={{
                  marginTop: 'var(--space-4)',
                  padding: 'var(--space-3)',
                  background: 'var(--red-a3)',
                  borderRadius: 'var(--radius-2)',
                }}
              >
                <Text render={<div />} weight="medium" color="red">
                  Danger Zone
                </Text>
                <Text render={<div />} size="2" color="gray" style={{ marginBottom: 'var(--space-3)' }}>
                  Irreversible actions for this project
                </Text>

                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button variant="soft" color="red" size="2">
                      Delete Project
                    </Button>
                  </Dialog.Trigger>
                  <Dialog.Content style={{ maxWidth: 400 }}>
                    <Dialog.Title>Delete Project</Dialog.Title>
                    <Dialog.Description>
                      Are you sure you want to delete "{formData.name}"? This action cannot be undone and all project
                      data will be permanently removed.
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
                        <Button variant="classic" color="red">
                          Delete Project
                        </Button>
                      </Dialog.Close>
                    </div>
                  </Dialog.Content>
                </Dialog.Root>
              </div>

              {/* Form dialog example */}
              <div
                style={{
                  marginTop: 'var(--space-4)',
                  padding: 'var(--space-3)',
                  background: 'var(--gray-a3)',
                  borderRadius: 'var(--radius-2)',
                }}
              >
                <Text render={<div />} weight="medium">
                  Team Members
                </Text>
                <Text render={<div />} size="2" color="gray" style={{ marginBottom: 'var(--space-3)' }}>
                  Manage who has access to this project
                </Text>

                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button variant="soft" size="2">
                      Invite Member
                    </Button>
                  </Dialog.Trigger>
                  <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Invite Team Member</Dialog.Title>
                    <Dialog.Description>Send an invitation to collaborate on this project.</Dialog.Description>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-3)',
                        marginTop: 'var(--space-3)',
                      }}
                    >
                      <label>
                        <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                          Email Address
                        </Text>
                        <TextField.Input placeholder="colleague@example.com" type="email" />
                      </label>
                      <label>
                        <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                          Role
                        </Text>
                        <Select.Root defaultValue="member">
                          <Select.Trigger style={{ width: '100%' }} />
                          <Select.Content>
                            <Select.Item value="admin">Admin</Select.Item>
                            <Select.Item value="member">Member</Select.Item>
                            <Select.Item value="viewer">Viewer</Select.Item>
                          </Select.Content>
                        </Select.Root>
                      </label>
                      <label>
                        <Text render={<div />} size="2" style={{ marginBottom: 'var(--space-1)' }} weight="bold">
                          Message (optional)
                        </Text>
                        <TextArea placeholder="Add a personal message..." />
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
                        <Button variant="classic">Send Invitation</Button>
                      </Dialog.Close>
                    </div>
                  </Dialog.Content>
                </Dialog.Root>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-5)',
                  justifyContent: 'flex-end',
                }}
              >
                <Drawer.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Drawer.Close>
                <Drawer.Close>
                  <Button variant="classic">Save Changes</Button>
                </Drawer.Close>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>

        {/* AlertDialog example - controlled from drawer */}
        <AlertDialog.Root open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
          <AlertDialog.Content style={{ maxWidth: 400 }}>
            <AlertDialog.Title>Confirm Changes</AlertDialog.Title>
            <AlertDialog.Description>
              You have unsaved changes. Are you sure you want to close without saving?
            </AlertDialog.Description>
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
                  Go Back
                </Button>
              </AlertDialog.Close>
              <AlertDialog.Close>
                <Button variant="classic" color="red">
                  Discard Changes
                </Button>
              </AlertDialog.Close>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    );
  },
};
