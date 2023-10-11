import { withThemeByClassName } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import * as React from 'react';
import { Toaster } from '../src/components/Toaster';
import { TooltipProvider } from '../src/components/TooltipProvider';
import '../src/index.css';

const globalDecorator = (Story) => (
  <TooltipProvider>
    <div className="bg-whop-background" style={{ padding: 20 }}>
      <Story />
      <Toaster />
    </div>
  </TooltipProvider>
);
export const decorators = [
  globalDecorator,
  withThemeByClassName({
    themes: {
      light: 'light',
      darkOne: 'biz-dark-1',
      darkTwo: 'biz-dark-2',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Design System', 'General', 'Forms'],
      },
    },
  },
};

export default preview;
