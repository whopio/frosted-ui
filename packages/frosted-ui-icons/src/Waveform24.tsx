import * as React from 'react';
import { IconProps } from './types';

export const Waveform24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.5 8.25L4.5 15.25M7.5 18.25L7.5 5.25M10.5 9.25L10.5 14.25M13.5 16.25L13.5 7.25M16.5 13.75L16.5 9.75M19.5 11.25L19.5 12.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Waveform24;
