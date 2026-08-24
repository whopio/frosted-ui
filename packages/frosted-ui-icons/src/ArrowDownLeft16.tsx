import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownLeft16"
      {...props}
    >
      <path
        d="M11.25 13.25h-8.5v-8.5m0 8.5l10.5-10.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeft16.category = 'Arrows';

export default ArrowDownLeft16;
