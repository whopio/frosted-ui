import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3 3L3 13.5M3 3L13.5 3M3 3L17 16.9999"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeftBold20.category = 'Arrows';

export default ArrowUpLeftBold20;
