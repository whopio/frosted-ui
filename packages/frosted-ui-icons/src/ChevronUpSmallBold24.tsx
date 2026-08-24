import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpSmallBold24"
      {...props}
    >
      <path
        d="M6.75 14.5l4.896-4.896c.196-.196.512-.196.708 0L17.25 14.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmallBold24.category = 'Arrows';

export default ChevronUpSmallBold24;
