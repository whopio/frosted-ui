import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Code, IconButton, Text, Tooltip } from '..';

const ExampleIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const BoldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
    <path d="M3.73353 2.13333C3.4386 2.13333 3.2002 2.37226 3.2002 2.66666C3.2002 2.96106 3.4386 3.2 3.73353 3.2H4.26686V12.8H3.73353C3.4386 12.8 3.2002 13.0389 3.2002 13.3333C3.2002 13.6277 3.4386 13.8667 3.73353 13.8667H9.86686C11.7783 13.8667 13.3335 12.3115 13.3335 10.4C13.3335 8.9968 12.4945 7.78881 11.2929 7.24375C11.8897 6.70615 12.2669 5.93066 12.2669 5.06666C12.2669 3.44906 10.9506 2.13333 9.33353 2.13333H3.73353ZM6.93353 3.2H8.26686C9.29619 3.2 10.1335 4.03733 10.1335 5.06666C10.1335 6.096 9.29619 6.93333 8.26686 6.93333H6.93353V3.2ZM6.93353 8H7.73353H8.26686C9.59006 8 10.6669 9.0768 10.6669 10.4C10.6669 11.7232 9.59006 12.8 8.26686 12.8H6.93353V8Z" />
  </svg>
);

const ItalicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
    <path d="M8.52599 2.12186C8.48583 2.12267 8.44578 2.1265 8.4062 2.13332H6.93328C6.63835 2.13332 6.39995 2.37226 6.39995 2.66665C6.39995 2.96106 6.63835 3.19999 6.93328 3.19999H7.70099L6.69057 12.8H5.86661C5.57168 12.8 5.33328 13.0389 5.33328 13.3333C5.33328 13.6277 5.57168 13.8667 5.86661 13.8667H9.06661C9.36155 13.8667 9.59995 13.6277 9.59995 13.3333C9.59995 13.0389 9.36155 12.8 9.06661 12.8H8.29891L9.30932 3.19999H10.1333C10.4282 3.19999 10.6666 2.96106 10.6666 2.66665C10.6666 2.37226 10.4282 2.13332 10.1333 2.13332H8.59995C8.57519 2.12584 8.55061 2.12189 8.52599 2.12186Z" />
  </svg>
);

const UnderlineIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
    <path d="M4.00005 2.66667C4.00005 2.29848 3.7016 2 3.33341 2C2.96522 2 2.66677 2.29848 2.66677 2.66667V7.33333C2.66677 10.2789 5.05453 12.6667 8.00013 12.6667C10.9457 12.6667 13.3335 10.2789 13.3335 7.33333V2.66667C13.3335 2.29848 13.035 2 12.6668 2C12.2986 2 12.0002 2.29848 12.0002 2.66667V7.33333C12.0002 9.54248 10.2092 11.3333 8.00013 11.3333C5.79099 11.3333 4.00005 9.54248 4.00005 7.33333V2.66667ZM2.66671 14C2.29852 14 2.00005 14.2985 2.00005 14.6667C2.00005 15.0349 2.29853 15.3333 2.66672 15.3333H13.3334C13.7016 15.3333 14 15.0349 14 14.6667C14 14.2985 13.7016 14 13.3334 14H2.66671Z" />
  </svg>
);

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    content: 'Tooltip content',
    children: <button>Trigger</button>,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Add to library',
  },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton>
        <ExampleIcon size={16} />
      </IconButton>
    </Tooltip>
  ),
};

export const WithProvider: Story = {
  name: 'With Provider (Group Delay)',
  args: {
    content: 'Tooltip',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 400, textAlign: 'center' }}>
        Wrap tooltips in <Code>Tooltip.Provider</Code> for shared delay behavior. After hovering one tooltip, subsequent
        tooltips in the group open instantly.
      </Text>

      <Tooltip.Provider>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Tooltip content="Bold">
            <IconButton aria-label="Bold">
              <BoldIcon />
            </IconButton>
          </Tooltip>

          <Tooltip content="Italic">
            <IconButton aria-label="Italic">
              <ItalicIcon />
            </IconButton>
          </Tooltip>

          <Tooltip content="Underline">
            <IconButton aria-label="Underline">
              <UnderlineIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Tooltip.Provider>
    </div>
  ),
};

export const Positioning: Story = {
  name: 'Positioning',
  args: {
    content: 'Tooltip',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 400, textAlign: 'center' }}>
        Use <Code>side</Code> and <Code>align</Code> props to control tooltip positioning.
      </Text>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2)' }}>
        <Tooltip content="Top Start" side="top" align="start">
          <Button variant="soft" size="1">
            Top Start
          </Button>
        </Tooltip>
        <Tooltip content="Top Center" side="top" align="center">
          <Button variant="soft" size="1">
            Top Center
          </Button>
        </Tooltip>
        <Tooltip content="Top End" side="top" align="end">
          <Button variant="soft" size="1">
            Top End
          </Button>
        </Tooltip>

        <Tooltip content="Left" side="left">
          <Button variant="soft" size="1">
            Left
          </Button>
        </Tooltip>
        <div />
        <Tooltip content="Right" side="right">
          <Button variant="soft" size="1">
            Right
          </Button>
        </Tooltip>

        <Tooltip content="Bottom Start" side="bottom" align="start">
          <Button variant="soft" size="1">
            Bottom Start
          </Button>
        </Tooltip>
        <Tooltip content="Bottom Center" side="bottom" align="center">
          <Button variant="soft" size="1">
            Bottom Center
          </Button>
        </Tooltip>
        <Tooltip content="Bottom End" side="bottom" align="end">
          <Button variant="soft" size="1">
            Bottom End
          </Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const CustomDelay: Story = {
  name: 'Custom Delay',
  args: {
    content: 'Tooltip',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 400, textAlign: 'center' }}>
        Customize open and close delays with <Code>delay</Code> and <Code>closeDelay</Code> props.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Tooltip content="Instant open" delay={0}>
          <Button variant="soft">delay: 0</Button>
        </Tooltip>
        <Tooltip content="Default delay (400ms)" delay={400}>
          <Button variant="soft">delay: 400</Button>
        </Tooltip>
        <Tooltip content="Slow open" delay={1000}>
          <Button variant="soft">delay: 1000</Button>
        </Tooltip>
        <Tooltip content="Stays visible for 500ms" delay={0} closeDelay={500}>
          <Button variant="soft">closeDelay: 500</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const DisableHoverablePopup: Story = {
  name: 'Disable Hoverable Popup',
  args: {
    content: 'Tooltip',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 400, textAlign: 'center' }}>
        By default, tooltips stay open when the cursor moves to the tooltip content. Set{' '}
        <Code>disableHoverablePopup=true</Code> to disable this behavior.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Tooltip content="You can hover over me!" disableHoverablePopup={false} delay={0}>
          <Button variant="soft">disableHoverablePopup: false (default)</Button>
        </Tooltip>
        <Tooltip content="I close immediately when you leave the trigger" disableHoverablePopup={true} delay={0}>
          <Button variant="soft">disableHoverablePopup: true</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const ControlledMode: Story = {
  name: 'Controlled Mode',
  args: {
    content: 'Tooltip',
  },
  render: function Render() {
    const [open, setOpen] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text as="div" style={{ maxWidth: 400, textAlign: 'center' }}>
          Control tooltip visibility programmatically with <Code>open</Code> and <Code>onOpenChange</Code> props.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
          <Button variant="soft" onClick={() => setOpen((prev) => !prev)}>
            Toggle Tooltip ({open ? 'Open' : 'Closed'})
          </Button>

          <Tooltip content="Controlled tooltip" open={open} onOpenChange={setOpen}>
            <IconButton>
              <ExampleIcon size={16} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  },
};

export const SideOffset: Story = {
  name: 'Side Offset',
  args: {
    content: 'Tooltip',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text as="div" style={{ maxWidth: 400, textAlign: 'center' }}>
        Adjust the distance from the trigger with <Code>sideOffset</Code>.
      </Text>

      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Tooltip content="Close to trigger" sideOffset={0}>
          <Button variant="soft">sideOffset: 0</Button>
        </Tooltip>
        <Tooltip content="Default distance" sideOffset={4}>
          <Button variant="soft">sideOffset: 4 (default)</Button>
        </Tooltip>
        <Tooltip content="Far from trigger" sideOffset={16}>
          <Button variant="soft">sideOffset: 16</Button>
        </Tooltip>
      </div>
    </div>
  ),
};
