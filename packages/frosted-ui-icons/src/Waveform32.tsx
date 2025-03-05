import * as React from 'react';
import { IconProps } from './types';

export const Waveform32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4 14.75L4 16.75M7 19.75L7 11.75M10 24.5L10 7M13 22.75L13 8.75M16 13.75L16 17.75M19 18.75L19 12.75M22 19.75L22 11.75M25 17.75L25 13.75M28 15.25L28 16.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Waveform32;
