import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/styles/index.css';
import { Theme } from '../src/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Theme accentColor="orange" grayColor="gray" radius="full" scaling="100%">
        <Story />
        {/* <ThemePanel /> */}
      </Theme>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
