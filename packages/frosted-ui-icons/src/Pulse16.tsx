import * as React from 'react';
import { IconProps } from './types';

export const Pulse16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pulse16"
      {...props}
    >
      <path
        d="M14.248 5.321l-4.849 4.85c-.116.116-.305.116-.42 0L5.827 7.02c-.117-.116-.305-.116-.421 0l-3.659 3.659"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Pulse16.category = 'Stats & Charts';

export default Pulse16;
