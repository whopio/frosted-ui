import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Code, Heading, ScrollArea, Text, scrollAreaPropDefs } from '..';

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
    <ScrollArea style={{ height: 180 }} {...args}>
      <div style={{ padding: '8px 8px 54px 8px' }}>
        <Heading size="4" style={{ marginBottom: 8 }} trim="start">
          Principles of the typographic craft
        </Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Text as="p">
            Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a
            non-technical sense "legible" and "readable" are often used synonymously, typographically they are separate
            but related concepts.
          </Text>

          <Text as="p">
            Legibility describes how easily individual characters can be distinguished from one another. It is described
            by Walter Tracy as "the quality of being decipherable and recognisable". For instance, if a "b" and an "h",
            or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
          </Text>

          <Text as="p">
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
      <Text as="div" style={{ maxWidth: 500, textAlign: 'center' }}>
        The <Code>type</Code> prop controls scrollbar visibility, similar to macOS scrollbar preferences.
      </Text>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
        <div>
          <Text size="2" weight="bold" as="div" style={{ marginBottom: 'var(--space-2)' }}>
            type="hover" (default)
          </Text>
          <Text size="1" color="gray" as="div" style={{ marginBottom: 'var(--space-2)' }}>
            Visible on hover or scroll
          </Text>
          <ScrollArea {...args} type="hover" scrollbars="vertical" style={{ height: 80, width: 200, background: 'var(--gray-a3)' }}>
            <div style={{ padding: 'var(--space-2)' }}>
              <Text size="2">
                Hover over this area or scroll to see the scrollbar appear. It fades out when you stop interacting.
              </Text>
            </div>
          </ScrollArea>
        </div>

        <div>
          <Text size="2" weight="bold" as="div" style={{ marginBottom: 'var(--space-2)' }}>
            type="scroll"
          </Text>
          <Text size="1" color="gray" as="div" style={{ marginBottom: 'var(--space-2)' }}>
            Visible only while scrolling
          </Text>
          <ScrollArea {...args} type="scroll" scrollbars="vertical" style={{ height: 80, width: 200, background: 'var(--gray-a3)' }}>
            <div style={{ padding: 'var(--space-2)' }}>
              <Text size="2">
                The scrollbar only appears while you are actively scrolling. Try scrolling with your mouse wheel or
                trackpad.
              </Text>
            </div>
          </ScrollArea>
        </div>

        <div>
          <Text size="2" weight="bold" as="div" style={{ marginBottom: 'var(--space-2)' }}>
            type="auto"
          </Text>
          <Text size="1" color="gray" as="div" style={{ marginBottom: 'var(--space-2)' }}>
            Visible when content overflows
          </Text>
          <ScrollArea {...args} type="auto" scrollbars="vertical" style={{ height: 80, width: 200, background: 'var(--gray-a3)' }}>
            <div style={{ padding: 'var(--space-2)' }}>
              <Text size="2">
                The scrollbar is always visible as long as the content overflows the container. No interaction needed.
              </Text>
            </div>
          </ScrollArea>
        </div>

        <div>
          <Text size="2" weight="bold" as="div" style={{ marginBottom: 'var(--space-2)' }}>
            type="always"
          </Text>
          <Text size="1" color="gray" as="div" style={{ marginBottom: 'var(--space-2)' }}>
            Always visible
          </Text>
          <ScrollArea {...args} type="always" scrollbars="vertical" style={{ height: 80, width: 200, background: 'var(--gray-a3)' }}>
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)' }}>
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
        <Text as="div" size="2">
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
