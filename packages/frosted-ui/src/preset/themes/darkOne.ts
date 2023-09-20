import { Theme } from './types';

export const darkOne: Theme = {
  name: 'biz-dark-1',
  transparent: 'transparent',
  extend: {
    colors: {
      whop: {
        // Neutral colors
        black: '#EAEAEA',
        'off-black': '#D3D1CE',
        'dark-gray': '#BCB9B4',
        gray: '#8A8682',
        'stroke-dark': '#363636',
        stroke: '#333333',
        'hover-press': '#3C3C3C',
        hover: '#282828',
        'hover-50': '#1E1E1E',
        background: '#191919',

        // Primary colors
        primary: '#FF6243',
        'primary-hover': '#9A2A14',

        // Secondary colors
        'field-highlight': '#625BF6',
        'field-highlight-hover': '#4842C4',

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
          green: '#55B036',
          'green-background': '#25342A',
          blue: '#3677FF',
          'blue-background': '#1D2656',
          gray: '#838587',
          'gray-background': '#2D2939',
          purple: '#A347D7',
          'purple-background': '#362341',
          warning: '#C7AF59',
          'warning-background': '#342B28',
          error: '#CF1616',
          'error-background': '#471927',
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
        'avatar-stroke': '#1B1B1B',
        'primary-button-text': '#FFFFFF',
      },
    },
  },
};
