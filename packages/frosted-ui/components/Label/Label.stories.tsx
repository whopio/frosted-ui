import type { Meta, StoryObj } from '@storybook/react';
import { Label, LabelVariants } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Forms/Label',
  component: Label,
  args: {
    variant: 'default',
    children: 'Your first name',
  },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithTooltip: Story = {
  args: {
    tooltip: { description: 'There is more info in the tooltip.' },
  },
};

export const Variants: Story = {
  args: {
    tooltip: { description: 'There is more info in the tooltip.' },
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => {
    const variants = Object.values(LabelVariants);
    return (
      <div className="space-y-6">
        {variants.map((variant, i) => (
          <Label key={i} {...args} variant={variant} />
        ))}
      </div>
    );
  },
};
