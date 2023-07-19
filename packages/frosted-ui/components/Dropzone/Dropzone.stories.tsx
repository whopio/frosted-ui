import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from './Dropzone';

const meta: Meta<typeof Dropzone> = {
  title: 'Forms/Dropzone',
  component: Dropzone,
  args: {
    fileTypesAccepted: {
      'video/mp4': ['.mp4'],
      'video/mpeg': ['.mpeg'],
      'video/ogg': ['.ogv'],
      'video/webm': ['.webm'],
    },
    fileSizeLimit: '10MB',
  },
};
export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {};

export const IndeterminateLoading: Story = {
  args: {
    loading: true,
    title: 'Uploading...',
    inputIcon: faFileArrowUp,
  },
};

export const PercentLoading: Story = {
  args: {
    loading: 35,
    title: 'Uploading 35%...',
    inputIcon: faFileArrowUp,
  },
};
