import * as React from 'react';
import { IconProps } from './types';

export const Waveform12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1 4.75L1 7.25M3.5 3L3.5 9M6 4.75L6 7.25M8.5 3L8.5 9M11 4.5L11 7.5001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Waveform12;
