import * as React from 'react';
import { IconProps } from './types';

export const Play16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.75 13.6966V2.35407C2.75 1.06834 4.18977 0.307749 5.25182 1.03244L13.5631 6.70367C14.494 7.33888 14.494 8.71173 13.5631 9.34694L5.25182 15.0182C4.18978 15.7429 2.75 14.9823 2.75 13.6966Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Play16;
