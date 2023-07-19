import { faStar } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectGroup } from '../SelectGroup';
import { SelectItem } from '../SelectItem';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  args: {
    size: 'md',
    items: [
      { textValue: 'Option 1', value: '1' },
      { textValue: 'Option 2', value: '2' },
      { textValue: 'Option 3', value: '3', isDisabled: true },
      { textValue: 'Option 4', value: '4' },
      { textValue: 'Option 5', value: '5' },
    ],
    placeholder: 'Select an item',
    isDisabled: false,
    isRequired: false,
  },
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: {
      children: 'Label',
      tooltip: { description: 'There is more info in the tooltip.' },
    },
  },
};

export const LeftIcon: Story = {
  args: {
    leftIcon: faStar,
  },
};

export const WithTruncation: Story = {
  args: {
    wrapperClassName: 'max-w-[300px]',
    errorMessage:
      'Ooops there has been an error, and this error is super long and needs to be handled so that the user can figure out how to complete their task.',
    placeholder:
      'This is a really long placeholder that should extend the width of the Select',
    items: [
      {
        textValue:
          'Option 1 is really very long — longer than most options will ever be',
        value: '1',
      },
      { textValue: 'Option 2', value: '2' },
    ],
  },
};

export const Messages: Story = {
  render: (args) => {
    return (
      <div className="space-y-6">
        <div className="flex space-x-6">
          <Select {...args} helpMessage="Just so you know..." />
          <Select {...args} errorMessage="Ooops there has been an error" />
        </div>
        <div className="flex space-x-6">
          <Select
            {...args}
            helpMessage="Just so you know..."
            messageIcon={false}
          />
          <Select
            {...args}
            errorMessage="Ooops there has been an error"
            messageIcon={false}
          />
        </div>
      </div>
    );
  },
};

export const Composed: Story = {
  args: {
    items: undefined,
    children: (
      <>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
        <SelectItem value="3" isDisabled>
          Option 3
        </SelectItem>
        <SelectItem value="4">Option 4</SelectItem>

        <SelectGroup label="Group of Two">
          <SelectItem value="5">Option 5</SelectItem>
          <SelectItem value="6">Option 6</SelectItem>
        </SelectGroup>

        <SelectGroup separatorBottom>
          <SelectItem value="7">Option 7</SelectItem>
          <SelectItem value="8">Option 8</SelectItem>
        </SelectGroup>

        <SelectItem value="9">Option 9</SelectItem>
        <SelectItem value="10">Option 10</SelectItem>
      </>
    ),
  },
};
