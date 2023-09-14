import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Forms/Slider',
  component: Slider,
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    minStepsBetweenThumbs: 1,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [sliderValue, setSliderValue] = React.useState([0]);
    const handleSliderValueChange = React.useCallback(
      (value: number[]) => setSliderValue(value),
      [],
    );
    return (
      <Slider
        {...args}
        value={sliderValue}
        onValueChange={handleSliderValueChange}
      />
    );
  },
};
