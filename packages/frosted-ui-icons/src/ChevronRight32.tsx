import * as React from 'react';
import { IconProps } from './types';

export const ChevronRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRight32"
      {...props}
    >
      <path
        d="M10 2.75l12.776 12.776c.262.262.262.686 0 .948L10 29.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRight32.category = 'Arrows';

export default ChevronRight32;
