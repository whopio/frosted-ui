import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3 3L3.00001 15.5M3 3L15.5 3.00001M3 3L21 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeftBold24.category = 'Arrows';

export default ArrowUpLeftBold24;
