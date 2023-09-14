import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AccordionContent } from '../AccordionContent';
import { AccordionItem } from '../AccordionItem';
import { AccordionTrigger } from '../AccordionTrigger';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'General/Accordion',
  component: Accordion,
  args: {
    type: 'single',
    collapsible: true,
    items: [
      {
        value: 'item-1',
        trigger: { children: 'Question #1' },
        content: { children: 'Answer #1' },
      },
      {
        value: 'item-2',
        trigger: { children: 'Question #2' },
        content: { children: 'Answer #2' },
      },
      {
        value: 'item-3',
        trigger: { children: 'Question #3' },
        content: { children: 'Answer #3' },
      },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};

export const Composed: Story = {
  args: {
    type: 'single',
    collapsible: true,
    items: undefined,
  },
  render: (args) => {
    const [accordion, setAccordion] = React.useState<string>('item-1');
    return (
      // TODO: Redo the accordion with absolute types
      // @ts-expect-error This works but it's not the best
      <Accordion
        {...args}
        onValueChange={(value: string) => setAccordion(value)}
        className="min-h-[280px] w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger open={accordion === 'item-1'}>
            Question #1
          </AccordionTrigger>
          <AccordionContent open={accordion === 'item-1'}>
            Answer #1
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger open={accordion === 'item-2'}>
            Question #2
          </AccordionTrigger>
          <AccordionContent open={accordion === 'item-2'}>
            Answer #2
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger open={accordion === 'item-3'}>
            Question #3
          </AccordionTrigger>
          <AccordionContent open={accordion === 'item-3'}>
            Answer #3
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};
