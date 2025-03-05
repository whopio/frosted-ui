import * as React from 'react';
import { IconProps } from './types';

export const Waveform16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3 6.75L3 9.25M5.5 3.5L5.5 12.5M8 5.5L8 10.5M10.5 5L10.5 11M13 6.5L13 9.5001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Waveform16;
