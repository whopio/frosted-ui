import type { Preview } from '@storybook/react';
import React from 'react';
import { Theme } from '../src/theme';
import '../styles.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Theme
        accentColor="orange"
        grayColor="gray"
        radius="large"
        scaling="100%"
      >
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
