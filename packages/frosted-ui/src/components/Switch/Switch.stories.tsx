import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Switch, SwitchColorSchemes, SwitchSizes } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Forms/Switch',
  component: Switch,
  args: {
    size: 'md',
    colorScheme: 'black',
    defaultChecked: true,
  },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(args.defaultChecked || false);

    return <Switch {...args} checked={checked} setChecked={setChecked} />;
  },
};

export const ColorScheme: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(args.defaultChecked || false);
    const colorSchemes = Object.values(SwitchColorSchemes);

    return (
      <div className="space-x-6">
        {colorSchemes.map((colorScheme) => (
          <Switch
            key={colorScheme}
            {...args}
            colorScheme={colorScheme}
            checked={checked}
            setChecked={setChecked}
          />
        ))}{' '}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(args.defaultChecked || false);
    const sizes = Object.values(SwitchSizes);

    return (
      <div className="space-x-6">
        {sizes.map((size) => (
          <Switch
            key={size}
            {...args}
            size={size}
            checked={checked}
            setChecked={setChecked}
          />
        ))}
      </div>
    );
  },
};
