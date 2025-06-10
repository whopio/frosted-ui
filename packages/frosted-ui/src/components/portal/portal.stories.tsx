import type { Meta, StoryObj } from '@storybook/react';

import React, { useRef, useState } from 'react';
import { Button, Code, Portal, Text } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Utilities/Portal',
  component: Portal.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Portal.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => {
    const [open, setOpen] = useState(false);
    const portalContainerRef = useRef<HTMLDivElement>(null);
    const portalContainerElement = portalContainerRef.current;
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Text>
            Anything you put inside this component will be rendered in a separate <Code>{`<div>`}</Code> element.
            <br />
            By default, this element will be appended to <Code>document.body</Code> but you can choose a different
            container by using the container prop.
          </Text>
          <div>
            <Button onClick={() => setOpen(true)}>Open Portal</Button>
          </div>
        </div>
        <div id="portal-container" ref={portalContainerRef} />
        {portalContainerElement && open ? (
          <Portal.Root {...args} container={portalContainerElement}>
            <div
              style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.65)',
              }}
            >
              <Button onClick={() => setOpen(false)}>Close Portal</Button>
            </div>
          </Portal.Root>
        ) : null}
      </>
    );
  },
};
