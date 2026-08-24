import * as React from 'react';
import { PictogramProps, PictogramVariant } from './types';

export type BarChartPictogramProps = PictogramProps;

const FILLS: Record<PictogramVariant, Record<number, string>> = {
  light: { '3': '#222', '6': '#222', '7': '#FA4616', '8': '#E7552F', '9': '#222', '11': '#3C3C3C' },
  dark: { '3': '#212121', '6': '#212121', '7': '#FA4616', '8': '#E7552F', '9': '#212121', '11': '#4D4D4D' },
  orange: { '3': '#222', '6': '#222', '7': '#6196C1', '8': '#639DCC', '9': '#222', '11': '#3C3C3C' },
  auto: {
    '3': 'light-dark(#222, #212121)',
    '6': 'light-dark(#222, #212121)',
    '7': 'light-dark(#FA4616, #FA4616)',
    '8': 'light-dark(#E7552F, #E7552F)',
    '9': 'light-dark(#222, #212121)',
    '11': 'light-dark(#3C3C3C, #4D4D4D)',
  },
};

export const BarChartPictogram = ({ variant = 'auto', ...props }: BarChartPictogramProps) => {
  const f = FILLS[variant];
  return (
    <svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-pictogram="BarChartPictogram"
      {...props}
    >
      <path d="M52.191 173.335l52.958 29.31 87.15-48.159-54.125-26.586-85.983 45.435z" fill="#1E1E1E" />
      <path d="M137.518 47.185v101.551l25.761 15.107-.225-102.793-25.536-13.864z" fill="#C1FA81" />
      <path d="M155.447 38.53l-17.929 8.654 25.536 13.864 17.346-9.391-24.953-13.127z" fill="#BDED88" />
      <path d="M163.279 163.843l17.121-8.069V51.658l-17.345 9.39.224 102.795z" style={{ fill: f[3] }} />
      <path d="M101.428 92.665v70.615l24.699 14.489-.207-71.814-24.492-13.29z" fill="#354B98" />
      <path d="M118.622 84.365l-17.194 8.3 24.492 13.289 16.627-9.002-23.925-12.587z" fill="#405AB4" />
      <path d="M126.128 177.767l16.419-7.737V96.95l-16.627 9.003.208 71.814z" style={{ fill: f[6] }} />
      <path d="M65.222 127.127v45.858l24.7 14.488-.209-47.056-24.491-13.29z" style={{ fill: f[7] }} />
      <path d="M82.416 118.827l-17.194 8.299 24.492 13.29 16.627-9.002-23.925-12.587z" style={{ fill: f[8] }} />
      <path d="M89.92 187.473l16.42-7.736v-48.322l-16.627 9.002.208 47.056z" style={{ fill: f[9] }} />
      <path d="M52.191 173.333v18.664l53.239 29.214-.281-18.567-52.958-29.311z" fill="#B6B5B0" />
      <path d="M192.3 154.485l-87.15 48.159.281 18.569 86.869-48.581v-18.147z" style={{ fill: f[11] }} />
    </svg>
  );
};

BarChartPictogram.category = 'Pictograms';

export default BarChartPictogram;
