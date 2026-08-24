import * as React from 'react';
import { IconProps } from './types';

export const Reply32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Reply32"
      {...props}
    >
      <path
        d="M30.25 26.75c0-8.143-1.929-16-15.5-16V5.23c0-.657-.784-.996-1.263-.548L2.18 15.27c-.422.395-.422 1.065 0 1.46l11.308 10.588c.48.448 1.263.109 1.263-.548v-5.52c5.428 0 10.75.071 15.5 5.5z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Reply32.category = 'Arrows';

export default Reply32;
