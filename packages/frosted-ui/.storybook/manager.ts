import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const customWhopTheme = create({
  base: 'light',
  brandTitle: 'Whop Storybook',
  brandUrl: 'https://whop.com',
  brandImage: 'https://i.imgur.com/5xPi7Gj.png',

  barBg: '#ffffff',
  barTextColor: '#0e0e0f',
  barSelectedColor: '#ff6243',

  appContentBg: '#ffffff',
  appBg: '#ffffff',
  appBorderColor: '#e8e8e8',
  appBorderRadius: 8,
  textColor: '#0e0e0f',
  textInverseColor: '#ffffff',

  // Base colors
  colorPrimary: '#ff6243',
  colorSecondary: '#625bf6',
});

addons.setConfig({
  theme: customWhopTheme,
});
