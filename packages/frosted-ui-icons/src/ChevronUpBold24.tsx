import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpBold24"
      {...props}
    >
      <path
        d="M3 16l8.646-8.646c.196-.196.512-.196.708 0L21 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBold24.category = 'Arrows';

export default ChevronUpBold24;
