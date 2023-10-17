import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Code, Flex, Portal, Text } from '../../../src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Utilities/Portal',
  component: Portal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Portal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    const portalContainerRef = React.useRef<HTMLDivElement>(null);
    const portalContainerElement = portalContainerRef.current;
    return (
      <>
        <Flex direction={'column'} gap="4">
          <Text>
            Anything you put inside this component will be rendered in a
            separate <Code>{`<div>`}</Code> element.
            <br />
            By default, this element will be appended to{' '}
            <Code>document.body</Code> but you can choose a different container
            by using the container prop.
          </Text>
          <div>
            <Button onClick={() => setOpen(true)}>Open Portal</Button>
          </div>
        </Flex>
        <div id="portal-container" ref={portalContainerRef} />
        {portalContainerElement && open ? (
          <Portal container={portalContainerElement}>
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
          </Portal>
        ) : null}
      </>
    );
  },
};
