import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Flex, Heading, ScrollArea, Text } from '../../../src/components';
import { scrollAreaPropDefs } from '../../../src/components/scroll-area.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  args: {
    type: 'always' as 'auto' | 'always' | 'scroll' | 'hover' | undefined,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: scrollAreaPropDefs.size.default,
    scrollbars: 'vertical',
  },
  render: (args) => (
    <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }} {...args}>
      <div style={{ padding: '8px 8px 54px 8px' }}>
        <Heading size="4" style={{ marginBottom: 8 }} trim="start">
          Principles of the typographic craft
        </Heading>
        <Flex direction="column" gap="4">
          <Text as="p">
            Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a
            non-technical sense “legible” and “readable” are often used synonymously, typographically they are separate
            but related concepts.
          </Text>

          <Text as="p">
            Legibility describes how easily individual characters can be distinguished from one another. It is described
            by Walter Tracy as “the quality of being decipherable and recognisable”. For instance, if a “b” and an “h”,
            or a “3” and an “8”, are difficult to distinguish at small sizes, this is a problem of legibility.
          </Text>

          <Text as="p">
            Typographers are concerned with legibility insofar as it is their job to select the correct font to use.
            Brush Script is an example of a font containing many characters that might be difficult to distinguish. The
            selection of cases influences the legibility of typography because using only uppercase letters (all-caps)
            reduces legibility.
          </Text>
        </Flex>
      </div>
    </ScrollArea>
  ),
};

export const Size: Story = {
  args: {
    size: scrollAreaPropDefs.size.default,
    scrollbars: 'vertical',
  },
  render: (args) => (
    <Flex direction="column" gap="2">
      <ScrollArea {...args} size="1" type="always" scrollbars="horizontal" style={{ width: 300, height: 12 }}>
        <div style={{ width: 800, height: 1 }} />
      </ScrollArea>

      <ScrollArea {...args} size="2" type="always" scrollbars="horizontal" style={{ width: 350, height: 16 }}>
        <div style={{ width: 900, height: 1 }} />
      </ScrollArea>

      <ScrollArea {...args} size="3" type="always" scrollbars="horizontal" style={{ width: 400, height: 20 }}>
        <div style={{ width: 1000, height: 1 }} />
      </ScrollArea>
    </Flex>
  ),
};

export const Scrollbars: Story = {
  args: {
    size: scrollAreaPropDefs.size.default,
    type: 'always',
    scrollbars: 'vertical',
  },
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)' }}>
      <ScrollArea {...args} type="always" scrollbars="vertical" style={{ height: 150 }}>
        <Flex p="2" pr="8" direction="column" gap="4">
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
        </Flex>
      </ScrollArea>

      <ScrollArea {...args} type="always" scrollbars="horizontal" style={{ height: 150 }}>
        <Flex gap="4" p="2" style={{ width: 700 }}>
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
        </Flex>
      </ScrollArea>
    </div>
  ),
};
