import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Code, Heading, IconButton, ScrollArea, Text, TextField, scrollAreaPropDefs } from '..';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  args: {
    type: scrollAreaPropDefs.type.default,
    size: scrollAreaPropDefs.size.default,
    scrollbars: scrollAreaPropDefs.scrollbars.default,
  },
  argTypes: {
    type: {
      control: 'select',
      options: scrollAreaPropDefs.type.values,
      description: 'Controls scrollbar visibility behavior',
    },
    size: {
      control: 'select',
      options: scrollAreaPropDefs.size.values,
    },
    scrollbars: {
      control: 'select',
      options: scrollAreaPropDefs.scrollbars.values,
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    scrollbars: 'vertical',
  },
  render: (args) => (
    <ScrollArea style={{ height: 180, maxWidth: 500 }} {...args}>
      <div style={{ padding: '8px 8px 54px 8px' }}>
        <Heading size="4" style={{ marginBottom: 8 }} trim="start">
          Principles of the typographic craft
        </Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Text render={<p />}>
            Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a
            non-technical sense "legible" and "readable" are often used synonymously, typographically they are separate
            but related concepts.
          </Text>

          <Text render={<p />}>
            Legibility describes how easily individual characters can be distinguished from one another. It is described
            by Walter Tracy as "the quality of being decipherable and recognisable". For instance, if a "b" and an "h",
            or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
          </Text>

          <Text render={<p />}>
            Typographers are concerned with legibility insofar as it is their job to select the correct font to use.
            Brush Script is an example of a font containing many characters that might be difficult to distinguish. The
            selection of cases influences the legibility of typography because using only uppercase letters (all-caps)
            reduces legibility.
          </Text>
        </div>
      </div>
    </ScrollArea>
  ),
};

export const Type: Story = {
  name: 'Type (Visibility Behavior)',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center' }}>
      <Text render={<div />} style={{ maxWidth: 500, textAlign: 'center' }}>
        The <Code>type</Code> prop controls scrollbar visibility, similar to macOS scrollbar preferences.
      </Text>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
        <div>
          <Text size="2" weight="bold" render={<div />} style={{ marginBottom: 'var(--space-2)' }}>
            type="hover" (default)
          </Text>
          <Text size="1" color="gray" render={<div />} style={{ marginBottom: 'var(--space-2)' }}>
            Visible on hover or scroll
          </Text>
          <ScrollArea
            {...args}
            type="hover"
            scrollbars="vertical"
            style={{ height: 80, width: 200, background: 'var(--gray-a3)' }}
          >
            <div style={{ padding: 'var(--space-2)' }}>
              <Text size="2">
                Hover over this area or scroll to see the scrollbar appear. It fades out when you stop interacting.
              </Text>
            </div>
          </ScrollArea>
        </div>

        <div>
          <Text size="2" weight="bold" render={<div />} style={{ marginBottom: 'var(--space-2)' }}>
            type="scroll"
          </Text>
          <Text size="1" color="gray" render={<div />} style={{ marginBottom: 'var(--space-2)' }}>
            Visible only while scrolling
          </Text>
          <ScrollArea
            {...args}
            type="scroll"
            scrollbars="vertical"
            style={{ height: 80, width: 200, background: 'var(--gray-a3)' }}
          >
            <div style={{ padding: 'var(--space-2)' }}>
              <Text size="2">
                The scrollbar only appears while you are actively scrolling. Try scrolling with your mouse wheel or
                trackpad.
              </Text>
            </div>
          </ScrollArea>
        </div>

        <div>
          <Text size="2" weight="bold" render={<div />} style={{ marginBottom: 'var(--space-2)' }}>
            type="auto"
          </Text>
          <Text size="1" color="gray" render={<div />} style={{ marginBottom: 'var(--space-2)' }}>
            Visible when content overflows
          </Text>
          <ScrollArea
            {...args}
            type="auto"
            scrollbars="vertical"
            style={{ height: 80, width: 200, background: 'var(--gray-a3)' }}
          >
            <div style={{ padding: 'var(--space-2)' }}>
              <Text size="2">
                The scrollbar is always visible as long as the content overflows the container. No interaction needed.
              </Text>
            </div>
          </ScrollArea>
        </div>

        <div>
          <Text size="2" weight="bold" render={<div />} style={{ marginBottom: 'var(--space-2)' }}>
            type="always"
          </Text>
          <Text size="1" color="gray" render={<div />} style={{ marginBottom: 'var(--space-2)' }}>
            Always visible
          </Text>
          <ScrollArea
            {...args}
            type="always"
            scrollbars="vertical"
            style={{ height: 280, width: 200, background: 'var(--gray-a3)' }}
          >
            <div style={{ padding: 'var(--space-2)' }}>
              <Text size="2">The scrollbar is always visible, even if the content doesn't overflow.</Text>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <ScrollArea {...args} size="1" type="always" scrollbars="horizontal" style={{ width: 300, height: 12 }}>
        <div style={{ width: 800, height: 1 }} />
      </ScrollArea>

      <ScrollArea {...args} size="2" type="always" scrollbars="horizontal" style={{ width: 350, height: 16 }}>
        <div style={{ width: 900, height: 1 }} />
      </ScrollArea>

      <ScrollArea {...args} size="3" type="always" scrollbars="horizontal" style={{ width: 400, height: 20 }}>
        <div style={{ width: 1000, height: 1 }} />
      </ScrollArea>
    </div>
  ),
};

export const Scrollbars: Story = {
  render: (args) => (
    <div style={{ display: 'grid', maxWidth: 500, gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)' }}>
      <ScrollArea {...args} type="always" scrollbars="vertical" style={{ height: 150 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            padding: 'var(--space-2)',
            paddingRight: 'var(--space-8)',
          }}
        >
          <Text size="2" trim="both">
            Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a
            non-technical sense "legible" and "readable" are often used synonymously, typographically they are separate
            but related concepts.
          </Text>

          <Text size="2" trim="both">
            Legibility describes how easily individual characters can be distinguished from one another. It is described
            by Walter Tracy as "the quality of being decipherable and recognisable". For instance, if a "b" and an "h",
            or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
          </Text>
        </div>
      </ScrollArea>

      <ScrollArea {...args} type="always" scrollbars="horizontal" style={{ height: 150 }}>
        <div style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-2)', width: 700 }}>
          <Text size="2" trim="both">
            Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a
            non-technical sense "legible" and "readable" are often used synonymously, typographically they are separate
            but related concepts.
          </Text>

          <Text size="2" trim="both">
            Legibility describes how easily individual characters can be distinguished from one another. It is described
            by Walter Tracy as "the quality of being decipherable and recognisable". For instance, if a "b" and an "h",
            or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
          </Text>
        </div>
      </ScrollArea>
    </div>
  ),
};

export const BothScrollbars: Story = {
  name: 'Both Scrollbars',
  render: (args) => (
    <ScrollArea {...args} type="always" scrollbars="both" style={{ width: 300, height: 200 }}>
      <div style={{ width: 600, padding: 'var(--space-3)' }}>
        <Text render={<div />} size="2">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <p>
              This scroll area has both horizontal and vertical scrollbars. The content is wider than the container
              width, so you can scroll horizontally.
            </p>
            <p>
              Vernacular architecture is building done outside any academic tradition, and without professional
              guidance. It is not a particular architectural movement or style, but rather a broad category.
            </p>
            <p>
              This type of architecture usually serves immediate, local needs, is constrained by the materials available
              in its particular region and reflects local traditions and cultural practices.
            </p>
          </div>
        </Text>
      </div>
    </ScrollArea>
  ),
};

// Icons for the chat demo
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.5 1.5L14.5 8L1.5 14.5V9.5L10.5 8L1.5 6.5V1.5Z" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 12L3 7L4 6L8 10L12 6L13 7L8 12Z" />
  </svg>
);

export const ScrollableElementRef: Story = {
  name: 'Scrollable Element Ref',
  render: function Render() {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [messages, setMessages] = React.useState([
      { id: 1, text: 'Hey! How are you doing?', sender: 'other', time: '10:30 AM' },
      { id: 2, text: "I'm doing great, thanks for asking! How about you?", sender: 'me', time: '10:31 AM' },
      { id: 3, text: 'Pretty good! Just working on some new features.', sender: 'other', time: '10:32 AM' },
      { id: 4, text: 'That sounds exciting! What kind of features?', sender: 'me', time: '10:33 AM' },
      {
        id: 5,
        text: "We're adding a new scroll area component with better ref support.",
        sender: 'other',
        time: '10:34 AM',
      },
    ]);
    const [inputValue, setInputValue] = React.useState('');
    const [showScrollButton, setShowScrollButton] = React.useState(false);

    const scrollToBottom = React.useCallback((behavior: ScrollBehavior = 'smooth') => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior,
        });
      }
    }, []);

    const handleScroll = React.useCallback(() => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
        setShowScrollButton(!isNearBottom);
      }
    }, []);

    const sendMessage = () => {
      if (!inputValue.trim()) return;

      const newMessage = {
        id: Date.now(),
        text: inputValue,
        sender: 'me' as const,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, newMessage]);
      setInputValue('');

      // Scroll to bottom after sending
      setTimeout(() => scrollToBottom(), 50);

      // Simulate a reply
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: 'Thanks for the message! This is an auto-reply.',
            sender: 'other',
            time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
          },
        ]);
        setTimeout(() => scrollToBottom(), 50);
      }, 1000);
    };

    // Scroll to bottom on mount
    React.useEffect(() => {
      scrollToBottom('instant');
    }, [scrollToBottom]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'center' }}>
        <Text render={<div />} style={{ maxWidth: 400, textAlign: 'center' }}>
          Use <Code>ref</Code> to programmatically control scroll position. This chat demo shows scroll-to-bottom
          functionality.
        </Text>

        <div
          style={{
            width: 360,
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid var(--color-stroke)',
            borderRadius: 'var(--radius-3)',
            overflow: 'hidden',
            background: 'var(--color-panel)',
          }}
        >
          {/* Chat header */}
          <div
            style={{
              padding: 'var(--space-3)',
              borderBottom: '1px solid var(--color-stroke)',
              background: 'var(--gray-2)',
            }}
          >
            <Text weight="medium">Chat Demo</Text>
          </div>

          {/* Messages area */}
          <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
            <ScrollArea
              ref={scrollRef}
              onScroll={handleScroll}
              style={{ height: '100%' }}
              scrollbars="vertical"
              type="auto"
            >
              <div
                style={{ padding: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    style={{
                      display: 'flex',
                      justifyContent: message.sender === 'me' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '75%',
                        padding: 'var(--space-2) var(--space-3)',
                        borderRadius: 'var(--radius-3)',
                        background: message.sender === 'me' ? 'var(--accent-9)' : 'var(--gray-4)',
                        color: message.sender === 'me' ? 'var(--accent-9-contrast)' : 'inherit',
                      }}
                    >
                      <Text size="2">{message.text}</Text>
                      <Text
                        size="1"
                        style={{
                          display: 'block',
                          marginTop: 'var(--space-1)',
                          opacity: 0.7,
                        }}
                      >
                        {message.time}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Scroll to bottom button */}
            {showScrollButton && (
              <IconButton
                size="1"
                variant="solid"
                onClick={() => scrollToBottom()}
                style={{
                  position: 'absolute',
                  bottom: 'var(--space-2)',
                  right: 'var(--space-4)',
                  borderRadius: '50%',
                }}
              >
                <ArrowDownIcon />
              </IconButton>
            )}
          </div>

          {/* Input area */}
          <div
            style={{
              padding: 'var(--space-2)',
              borderTop: '1px solid var(--color-stroke)',
              display: 'flex',
              gap: 'var(--space-2)',
              flexShrink: 0,
            }}
          >
            <TextField.Root variant="soft" color="gray" style={{ flex: 1 }} size="3">
              <TextField.Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
              />
            </TextField.Root>
            <IconButton size="3" variant="solid" onClick={sendMessage}>
              <SendIcon />
            </IconButton>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button variant="soft" size="1" onClick={() => scrollToBottom()}>
            Scroll to Bottom
          </Button>
          <Button variant="soft" size="1" onClick={() => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}>
            Scroll to Top
          </Button>
        </div>
      </div>
    );
  },
};
