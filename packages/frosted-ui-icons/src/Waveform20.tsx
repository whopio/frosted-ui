import * as React from 'react';
import { IconProps } from './types';

export const Waveform20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.5 8.75L2.5 12.75M5.5 16.25L5.5 5.25M8.5 8.25L8.5 13.25M11.5 13.75L11.5 7.75M14.5 12.75L14.5 8.75M17.5 10.25L17.5 11.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Waveform20;
