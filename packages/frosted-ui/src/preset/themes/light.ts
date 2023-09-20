import { Theme } from './types';

export const light: Theme = {
  name: 'default',
  transparent: 'transparent',
  extend: {
    colors: {
      whop: {
        // Neutral colors
        black: '#0e0e0f',
        'off-black': '#28292e',
        'dark-gray': '#535961',
        gray: '#888e96',
        'stroke-dark': '#d2d1d1',
        stroke: '#e8e8e8',
        'hover-press': '#ebebeb',
        hover: '#f6f6f6',
        'hover-50': '#fbfbfc',
        background: '#ffffff',

        // Primary colors
        primary: '#ff6243',
        'primary-hover': '#9A2A14',

        // Secondary colors
        'field-highlight': '#625bf6',
        'field-highlight-hover': '#4842c4',

        // Accent colors
        'success-green': '#4AB325',
        'warning-yellow': '#e2b100',
        'error-red': '#ff3333',
        'blue-accent': '#16A0FB',
        'purple-accent': '#A33AD5',
        'lavender-accent': '#7D69F7',
        'indigo-accent': '#271F6A',

        // Brand colors
        brands: {
          discord: '#5865F2',
          twitter: '#1DA1F2',
          coinbase: '#1152F0',
          instagram: '#DD2A7B',
          opensea: '#2081E2',
          paypal: '#00457C',
          tradingview: '#2962ff',
          telegram: '#2481cc',
          stripe: '#635bff',
        },

        // Tag colors
        tag: {
          green: '#38863E',
          'green-background': '#E6F7CF',
          blue: '#2857B9',
          'blue-background': '#D8F4F6',
          gray: '#555A68',
          'gray-background': '#EBEEF1',
          purple: '#9C39D4',
          'purple-background': '#F0E1F9',
          warning: '#815016',
          'warning-background': '#FBECB8',
          error: '#CF1616',
          'error-background': '#FCE5DD',
        },

        // Perk colors
        perk: {
          'software-start': '#FF6243',
          'software-end': '#FFA843',
          'discord-start': '#3E48C2',
          'discord-end': '#5865F2',
          'content-start': '#005EEB',
          'content-end': '#649BEE',
          'file-start': '#F00046',
          'file-end': '#FD57A5',
          'link-start': '#DA942C',
          'link-end': '#F2C935',
          'custom-start': '#00B400',
          'custom-end': '#87E293',
        },

        // Gradient colors
        gradient: {
          'purple-start': '#8033C9',
          'purple-middle': '#5F37B6',
          'purple-end': '#412A8B',
          'fire-start': '#9A0606',
          'fire-middle': '#EF4508',
          'fire-end': '#FEDF01',
        },

        // Misc colors
        'fixed-black': '#000000',
        'fixed-white': '#FFFFFF',
        'avatar-stroke': '#F8F8FA',
        'primary-button-text': '#FFFFFF',
      },
    },
  },
};
