import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.24998 4.24997L4.24999 22.75M4.24998 4.24997L22.75 4.24997M4.24998 4.24997L27.75 27.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeftBoldFilled32.category = 'Arrows';

export default ArrowUpLeftBoldFilled32;
