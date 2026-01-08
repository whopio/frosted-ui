import type { Meta, StoryObj } from '@storybook/react';

import { Bell16 } from '@frosted-ui/icons';
import React from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  Code,
  Heading,
  IconButton,
  Inset,
  Popover,
  SegmentedControl,
  Separator,
  Switch,
  Text,
  TextArea,
  popoverContentPropDefs,
} from '../../../src/components/';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Popover',
  component: Popover.Content,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Popover.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: (args) => (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft">Comment</Button>
      </Popover.Trigger>
      <Popover.Content {...args} style={{ width: 360 }}>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            fallback="A"
          />
          <div style={{ flexGrow: 1 }}>
            <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
                marginTop: 12,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Checkbox size="2">Send to group</Checkbox>

              <Popover.Close>
                <Button size="1">Comment</Button>
              </Popover.Close>
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  ),
};

export const Variant: Story = {
  args: {
    size: popoverContentPropDefs.size.default,
  },
  render: (args) => {
    type Appearance = 'light' | 'dark';
    const [appearance, setAppearance] = React.useState<Appearance>('light');

    return (
      <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'center' }}>
        <Popover.Root>
          <Popover.Trigger>
            <IconButton variant="ghost" color="gray" size="3">
              <AppearanceIcon />
            </IconButton>
          </Popover.Trigger>
          <Popover.Content {...args} variant="translucent" alignment="center" style={{ width: 292 }}>
            <Heading size="3" style={{ marginBottom: 12 }}>
              Theme
            </Heading>
            <SegmentedControl.Root
              value={appearance}
              onValueChange={(appearance) => setAppearance(appearance as Appearance)}
            >
              <SegmentedControl.List>
                <SegmentedControl.Trigger value="light">
                  <LightModeIcon />
                  Light
                </SegmentedControl.Trigger>
                <SegmentedControl.Trigger value="dark">
                  <DarkModeIcon />
                  Dark
                </SegmentedControl.Trigger>
              </SegmentedControl.List>
            </SegmentedControl.Root>
            <Separator orientation="horizontal" size="4" style={{ marginTop: 12, marginBottom: 12 }} />
            <Text as="label" size="2">
              <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
                <Switch />
                Auto switching
              </div>
            </Text>
          </Popover.Content>
        </Popover.Root>
        <Popover.Root>
          <Popover.Trigger>
            <IconButton variant="surface" color="gray" size="3">
              <AppearanceIcon />
            </IconButton>
          </Popover.Trigger>
          <Popover.Content {...args} variant="solid" alignment="center" style={{ width: 292 }}>
            <Heading size="3" style={{ marginBottom: 8 }}>
              Theme
            </Heading>
            <SegmentedControl.Root
              value={appearance}
              onValueChange={(appearance) => setAppearance(appearance as Appearance)}
            >
              <SegmentedControl.List>
                <SegmentedControl.Trigger value="light">
                  <LightModeIcon />
                  Light
                </SegmentedControl.Trigger>
                <SegmentedControl.Trigger value="dark">
                  <DarkModeIcon />
                  Dark
                </SegmentedControl.Trigger>
              </SegmentedControl.List>
            </SegmentedControl.Root>
            <Separator orientation="horizontal" size="4" style={{ marginTop: 16, marginBottom: 16 }} />
            <Text as="label" size="2">
              <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
                <Switch />
                Auto switching
              </div>
            </Text>
          </Popover.Content>
        </Popover.Root>
      </div>
    );
  },
};

export const InsetContent: Story = {
  name: 'With inset content',
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: (args) => (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft">Share image</Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }} {...args}>
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
          <Inset side="left" pr="current">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?&auto=format&fit=crop&w=400&q=80"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Inset>

          <div>
            <Heading size="2" style={{ marginBottom: 4 }}>
              Share this image
            </Heading>
            <Text as="p" size="2" style={{ marginBottom: 16 }} color="gray">
              Minimalistic 3D rendering wallpaper.
            </Text>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
              <Popover.Close>
                <Button size="1" variant="soft">
                  Copy link
                </Button>
              </Popover.Close>
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  ),
};

const LightModeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1411_65802)">
      <mask id="path-1-inside-1_1411_65802" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.06396 2.23585C8.83285 2.04475 9.35808 2.9153 9.16128 3.68274C8.65248 5.66684 9.17475 7.86078 10.7281 9.4141C12.2377 10.9238 14.3525 11.4595 16.2916 11.0214C17.0641 10.8468 17.9185 11.3966 17.7052 12.1594C16.7629 15.5287 13.67 18 9.99999 18C5.58171 18 1.99999 14.4183 1.99999 10C1.99999 6.24932 4.58109 3.10149 8.06396 2.23585Z"
        />
      </mask>
      <path
        d="M9.99999 18L9.99999 16.5L9.99999 18ZM1.99999 10H0.499988H1.99999ZM16.2916 11.0214L16.6222 12.4845L16.2916 11.0214ZM17.7052 12.1594L16.2606 11.7554L17.7052 12.1594ZM11.7887 8.35344C10.6255 7.19025 10.2317 5.54719 10.6143 4.05534L7.70829 3.31014C7.07327 5.7865 7.72396 8.53132 9.66741 10.4748L11.7887 8.35344ZM15.961 9.55824C14.5028 9.88772 12.9193 9.48404 11.7887 8.35344L9.66741 10.4748C11.5561 12.3635 14.2021 13.0313 16.6222 12.4845L15.961 9.55824ZM16.2606 11.7554C15.4948 14.4937 12.9798 16.5 9.99999 16.5L9.99999 19.5C14.3603 19.5 18.031 16.5637 19.1497 12.5634L16.2606 11.7554ZM9.99999 16.5C6.41014 16.5 3.49999 13.5899 3.49999 10L0.499988 10C0.499988 15.2467 4.75328 19.5 9.99999 19.5L9.99999 16.5ZM3.49999 10C3.49999 6.95459 5.59578 4.39493 8.42577 3.69156L7.70216 0.78014C3.56641 1.80804 0.499988 5.54405 0.499988 10L3.49999 10ZM16.6222 12.4845C16.5854 12.4928 16.5435 12.4951 16.4725 12.4422C16.4273 12.4086 16.3454 12.3308 16.2894 12.1903C16.228 12.0362 16.2267 11.8764 16.2606 11.7554L19.1497 12.5634C19.455 11.4719 18.9444 10.5422 18.2636 10.0356C17.6256 9.56074 16.7703 9.37539 15.961 9.55824L16.6222 12.4845ZM10.6143 4.05534C10.8204 3.25147 10.6597 2.39102 10.2035 1.73952C9.71686 1.04445 8.80237 0.506692 7.70216 0.78014L8.42577 3.69156C8.30375 3.72189 8.14411 3.71592 7.99201 3.65013C7.85336 3.59017 7.7782 3.50616 7.74599 3.46016C7.69548 3.38802 7.69895 3.34657 7.70829 3.31014L10.6143 4.05534Z"
        fill="currentColor"
        mask="url(#path-1-inside-1_1411_65802)"
      />
    </g>
    <defs>
      <clipPath id="clip0_1411_65802">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const DarkModeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1411_65816)">
      <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 3V1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 10H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1 10L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 19V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.9498 5.0502L16.364 3.63599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.9497 14.9497L16.3639 16.3639" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.63599 3.63599L5.0502 5.0502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.63608 16.3639L5.05029 14.9497" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_1411_65816">
        <rect width="20" height="20" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

const AppearanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1402_143841)">
      <path
        d="M10 1.25C5 1.25 1.25 5 1.25 10C1.25 14.6939 4.28561 17.0376 6.55714 18.1344C7.89989 18.7827 9.34365 17.9439 9.85683 16.5439C10.9906 13.451 11.4382 13.7412 15.8146 13.7498C15.9355 13.7501 16.0605 13.7564 16.1813 13.7511C16.794 13.724 18.75 13.3734 18.75 10C18.75 5 15 1.25 10 1.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="5" cy="12" r="1" fill="currentColor" />
      <circle cx="6" cy="7" r="1" fill="currentColor" />
      <circle cx="11" cy="5" r="1" fill="currentColor" />
      <circle cx="15" cy="8" r="1" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_1402_143841">
        <rect width="20" height="20" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export const OpenOnHover: Story = {
  name: 'Opening on Hover',
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text size="2" color="gray">
        Use <code>openOnHover</code> to open the popover on hover. Use <code>delay</code> to specify how long to wait
        before opening.
      </Text>
      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        <Popover.Root>
          <Popover.Trigger openOnHover>
            <Button variant="soft">Hover me (default delay)</Button>
          </Popover.Trigger>
          <Popover.Content {...args} style={{ width: 280 }}>
            <Heading size="3" style={{ marginBottom: 8 }}>
              Quick Preview
            </Heading>
            <Text size="2" color="gray">
              This popover opens on hover with the default 300ms delay.
            </Text>
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger openOnHover delay={0}>
            <Button variant="soft">Hover me (no delay)</Button>
          </Popover.Trigger>
          <Popover.Content {...args} style={{ width: 280 }}>
            <Heading size="3" style={{ marginBottom: 8 }}>
              Instant Preview
            </Heading>
            <Text size="2" color="gray">
              This popover opens immediately on hover with no delay.
            </Text>
          </Popover.Content>
        </Popover.Root>
      </div>
    </div>
  ),
};

const detachedHandle = Popover.createHandle();

export const DetachedTriggers: Story = {
  name: 'Detached Triggers',
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Text size="2" color="gray">
        Use <code>Popover.createHandle()</code> to control a popover from a trigger located outside the{' '}
        <code>Popover.Root</code>.
      </Text>

      <Popover.Trigger handle={detachedHandle}>
        <Button>Detached Trigger</Button>
      </Popover.Trigger>

      <Popover.Root handle={detachedHandle}>
        <Popover.Content {...args} style={{ width: 280 }}>
          <Heading size="3" style={{ marginBottom: 8 }}>
            Detached Popover
          </Heading>
          <Text size="2" color="gray">
            This popover is controlled by a trigger outside of its Root component.
          </Text>
          <Popover.Close>
            <Button size="1" variant="soft" style={{ marginTop: 12 }}>
              Close
            </Button>
          </Popover.Close>
        </Popover.Content>
      </Popover.Root>
    </div>
  ),
};

export const MultipleTriggers: Story = {
  name: 'Multiple Triggers',
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: function Render(args) {
    const handle = React.useMemo(() => Popover.createHandle<string>(), []);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text size="2" color="gray">
          Multiple triggers can control the same popover using a shared handle. Each trigger can pass a different{' '}
          <code>payload</code>.
        </Text>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Popover.Trigger handle={handle} payload="Button A">
            <Button variant="soft">Button A</Button>
          </Popover.Trigger>
          <Popover.Trigger handle={handle} payload="Button B">
            <Button variant="soft">Button B</Button>
          </Popover.Trigger>
          <Popover.Trigger handle={handle} payload="Button C">
            <Button variant="soft">Button C</Button>
          </Popover.Trigger>
        </div>

        <Popover.Root handle={handle}>
          {(payload) => (
            <Popover.Content {...args} style={{ width: 280 }}>
              <Heading size="3" style={{ marginBottom: 8 }}>
                Triggered by: {String(payload)}
              </Heading>
              <Text size="2" color="gray">
                The popover content can access the payload from the trigger that opened it.
              </Text>
            </Popover.Content>
          )}
        </Popover.Root>
      </div>
    );
  },
};

export const ControlledWithMultipleTriggers: Story = {
  name: 'Controlled Mode with Multiple Triggers',
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: function Render(args) {
    const handle = React.useMemo(() => Popover.createHandle(), []);
    const [open, setOpen] = React.useState(false);
    const [triggerId, setTriggerId] = React.useState<string | null>(null);

    const handleOpenChange = (isOpen: boolean, eventDetails: { trigger?: { id?: string } }) => {
      setOpen(isOpen);
      setTriggerId(eventDetails.trigger?.id ?? null);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text size="2" color="gray">
          Use <Code>open</Code>, <Code>onOpenChange</Code>, and <Code>triggerId</Code> for fully controlled mode with
          multiple detached triggers.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Popover.Trigger handle={handle} id="trigger-1">
            <IconButton variant="surface" color="gray">
              <Bell16 />
            </IconButton>
          </Popover.Trigger>
          <Popover.Trigger handle={handle} id="trigger-2">
            <IconButton variant="surface" color="gray">
              <Bell16 />
            </IconButton>
          </Popover.Trigger>
          <Popover.Trigger handle={handle} id="trigger-3">
            <IconButton variant="surface" color="gray">
              <Bell16 />
            </IconButton>
          </Popover.Trigger>
          <Button
            variant="surface"
            onClick={() => {
              setTriggerId('trigger-2');
              setOpen(true);
            }}
          >
            Open programmatically
          </Button>
        </div>

        <Popover.Root handle={handle} open={open} onOpenChange={handleOpenChange} triggerId={triggerId}>
          <Popover.Content {...args} style={{ width: 280 }}>
            <Heading size="3" style={{ marginBottom: 8 }}>
              Notifications
            </Heading>
            <Text size="2" color="gray">
              You are all caught up. Good job!
            </Text>
          </Popover.Content>
        </Popover.Root>
      </div>
    );
  },
};

export const AnchorProp: Story = {
  name: 'Custom Anchor',
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: function Render(args) {
    const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text size="2" color="gray">
          Use the <Code>anchor</Code> prop to position the popover relative to a different element than the trigger.
          This is useful for tooltips on specific parts of a component, or when you want visual separation between the
          trigger and the anchored content.
        </Text>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)',
            padding: 'var(--space-4)',
            background: 'var(--gray-a3)',
            borderRadius: 'var(--radius-3)',
          }}
        >
          <Popover.Root>
            <Popover.Trigger>
              <Button>Edit Profile</Button>
            </Popover.Trigger>
            <Popover.Content {...args} anchor={anchor} side="top" alignment="start">
              <Heading size="3" style={{ marginBottom: 8 }}>
                Profile Picture
              </Heading>
              <Text size="2" color="gray">
                Click to upload a new profile picture. Recommended size: 400×400px.
              </Text>
            </Popover.Content>
          </Popover.Root>

          <div
            ref={setAnchor}
            style={{
              display: 'flex',
            }}
          >
            <Avatar size="5" color="magenta" fallback="JD" />
          </div>
        </div>

        <Text size="1" color="gray">
          The button triggers the popover, but it anchors to the avatar element instead.
        </Text>
      </div>
    );
  },
};

export const DisableAnchorTracking: Story = {
  name: 'Disable Anchor Tracking',
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: function Render(args) {
    const [position, setPosition] = React.useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text size="2" color="gray">
          The <Code>disableAnchorTracking</Code> prop controls whether the popover repositions when the anchor element
          moves due to layout changes (not scrolling). Open both popovers and click the button to move the anchors.
        </Text>

        <Button size="1" onClick={() => setPosition((p) => (p === 0 ? 50 : 0))}>
          Move anchors
        </Button>

        <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" weight="medium">
              Default (tracking enabled)
            </Text>
            <Text size="1" color="gray" style={{ maxWidth: 180 }}>
              Popover follows when anchor moves
            </Text>
            <div
              style={{
                width: 200,
                height: 100,
                border: '1px solid var(--gray-6)',
                borderRadius: 'var(--radius-2)',
                padding: 'var(--space-3)',
                position: 'relative',
              }}
            >
              <Popover.Root open>
                <Popover.Trigger>
                  <Button
                    size="1"
                    style={{
                      transform: `translateX(${position}px)`,
                      transition: 'transform 300ms ease',
                    }}
                  >
                    Trigger
                  </Button>
                </Popover.Trigger>
                <Popover.Content {...args} side="bottom">
                  <Text size="2">Follows anchor movement</Text>
                </Popover.Content>
              </Popover.Root>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" weight="medium">
              disableAnchorTracking=true
            </Text>
            <Text size="1" color="gray" style={{ maxWidth: 180 }}>
              Popover stays in original position
            </Text>
            <div
              style={{
                width: 200,
                height: 100,
                border: '1px solid var(--gray-6)',
                borderRadius: 'var(--radius-2)',
                padding: 'var(--space-3)',
                position: 'relative',
              }}
            >
              <Popover.Root open>
                <Popover.Trigger>
                  <Button
                    size="1"
                    style={{
                      transform: `translateX(${position}px)`,
                      transition: 'transform 300ms ease',
                    }}
                  >
                    Trigger
                  </Button>
                </Popover.Trigger>
                <Popover.Content {...args} disableAnchorTracking side="bottom">
                  <Text size="2">Stays in place</Text>
                </Popover.Content>
              </Popover.Root>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const Sticky: Story = {
  name: 'Sticky',
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: function Render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text size="2" color="gray">
          The <Code>sticky</Code> prop controls whether the popover stays visible in the viewport when the anchor is
          scrolled out of view. Open the popover then scroll this page to see the effect.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" weight="medium">
              sticky=false (default)
            </Text>
            <Text size="1" color="gray" style={{ maxWidth: 200 }}>
              Popover hides when anchor leaves viewport
            </Text>
            <Popover.Root>
              <Popover.Trigger>
                <Button size="1">Open Popover</Button>
              </Popover.Trigger>
              <Popover.Content {...args} sticky={false} side="right">
                <Text size="2">I hide when anchor leaves viewport</Text>
              </Popover.Content>
            </Popover.Root>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" weight="medium">
              sticky=true
            </Text>
            <Text size="1" color="gray" style={{ maxWidth: 200 }}>
              Popover stays visible at viewport edge
            </Text>
            <Popover.Root>
              <Popover.Trigger>
                <Button size="1">Open Popover</Button>
              </Popover.Trigger>
              <Popover.Content {...args} sticky={true} side="right">
                <Text size="2">I stay visible at the viewport edge</Text>
              </Popover.Content>
            </Popover.Root>
          </div>
        </div>

        <div style={{ height: '150vh' }} />
        <Text size="1" color="gray">
          ↑ Scroll back up to see the buttons
        </Text>
      </div>
    );
  },
};

export const CollisionBoundary: Story = {
  name: 'Collision Boundary',
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: function Render(args) {
    const [boundary, setBoundary] = React.useState<HTMLElement | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text size="2" color="gray">
          The <Code>collisionBoundary</Code> prop defines the area within which the popover should stay. By default,
          it&apos;s the viewport. You can set it to a specific element to constrain the popover within that container.
        </Text>

        <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" weight="medium">
              Default (viewport boundary)
            </Text>
            <div
              style={{
                width: 250,
                height: 200,
                border: '2px dashed var(--gray-6)',
                borderRadius: 'var(--radius-2)',
                padding: 'var(--space-3)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Popover.Root>
                <Popover.Trigger>
                  <Button size="1">Open (prefers bottom)</Button>
                </Popover.Trigger>
                <Popover.Content {...args} side="bottom">
                  <Text size="2">May extend outside the dashed box</Text>
                </Popover.Content>
              </Popover.Root>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" weight="medium">
              Custom boundary (dashed box)
            </Text>
            <div
              ref={setBoundary}
              style={{
                width: 250,
                height: 200,
                border: '2px dashed var(--accent-9)',
                borderRadius: 'var(--radius-2)',
                padding: 'var(--space-3)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Popover.Root>
                <Popover.Trigger>
                  <Button size="1">Open (prefers bottom)</Button>
                </Popover.Trigger>
                <Popover.Content {...args} side="bottom" collisionBoundary={boundary ?? undefined}>
                  <Text size="2">Stays within the dashed box</Text>
                </Popover.Content>
              </Popover.Root>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const CollisionAvoidanceDemo: Story = {
  name: 'Collision Avoidance',
  args: {
    size: popoverContentPropDefs.size.default,
    variant: popoverContentPropDefs.variant.default,
  },
  render: function Render(args) {
    const [boundary, setBoundary] = React.useState<HTMLElement | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Text size="2" color="gray">
          The <Code>collisionAvoidance</Code> prop controls how the popover avoids collisions with the boundary. You can
          configure behavior for both the <Code>side</Code> axis (flip or shift) and the <Code>align</Code> axis.
        </Text>

        <div
          ref={setBoundary}
          style={{
            display: 'flex',
            gap: 'var(--space-4)',
            flexWrap: 'wrap',
            border: '2px dashed var(--gray-6)',
            borderRadius: 'var(--radius-2)',
            padding: 'var(--space-4)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" weight="medium">
              side: "flip" (default)
            </Text>
            <Text size="1" color="gray" style={{ maxWidth: 150 }}>
              Flips to opposite side when there&apos;s not enough space
            </Text>
            <Popover.Root>
              <Popover.Trigger>
                <Button size="1">Open</Button>
              </Popover.Trigger>
              <Popover.Content
                {...args}
                side="bottom"
                collisionBoundary={boundary ?? undefined}
                collisionAvoidance={{ side: 'flip', align: 'shift' }}
              >
                <Text size="2">Flips to top if no space below</Text>
              </Popover.Content>
            </Popover.Root>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" weight="medium">
              side: "shift"
            </Text>
            <Text size="1" color="gray" style={{ maxWidth: 150 }}>
              Shifts along the side instead of flipping
            </Text>
            <Popover.Root>
              <Popover.Trigger>
                <Button size="1">Open</Button>
              </Popover.Trigger>
              <Popover.Content
                {...args}
                side="bottom"
                collisionBoundary={boundary ?? undefined}
                collisionAvoidance={{ side: 'shift', align: 'shift' }}
              >
                <Text size="2">Shifts position, stays on same side</Text>
              </Popover.Content>
            </Popover.Root>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Text size="1" weight="medium">
              side: "none"
            </Text>
            <Text size="1" color="gray" style={{ maxWidth: 150 }}>
              No collision avoidance on side axis
            </Text>
            <Popover.Root>
              <Popover.Trigger>
                <Button size="1">Open</Button>
              </Popover.Trigger>
              <Popover.Content
                {...args}
                side="bottom"
                collisionBoundary={boundary ?? undefined}
                collisionAvoidance={{ side: 'none', align: 'shift' }}
              >
                <Text size="2">Stays on preferred side regardless</Text>
              </Popover.Content>
            </Popover.Root>
          </div>
        </div>

        <Text size="1" color="gray">
          The dashed box is set as the collision boundary. Try positioning your browser so the triggers are near the
          edge of the boundary.
        </Text>
      </div>
    );
  },
};
