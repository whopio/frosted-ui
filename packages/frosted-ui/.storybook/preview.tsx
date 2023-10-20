import type { Decorator, Preview } from '@storybook/react';
import React from 'react';
import { Theme } from '../src/theme';
import '../styles.css';

export const withTheme: Decorator = (Story, context) => {
  // Get values from story parameter first, else fallback to globals
  const theme = context.parameters.theme || context.globals.theme;

  const isDarkTheme = theme === 'dark';
  React.useEffect(() => {
    document.body.classList.toggle('dark', isDarkTheme);
    document.body.style.backgroundColor = 'var(--color-page-background)';
  }, [isDarkTheme]);

  return (
    <Theme
      accentColor="orange"
      panelBackground="translucent"
      grayColor="slate"
      radius="medium"
      scaling="100%"
    >
      <Story />
      {/* <ThemePanel /> */}
    </Theme>
  );
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

const decorators = [withTheme];

const preview: Preview = {
  decorators: decorators,
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
