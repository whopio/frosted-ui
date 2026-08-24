import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpFilled12"
      {...props}
    >
      <path
        d="M2.25 7.5l3.573-3.573c.098-.098.256-.098.354 0L9.75 7.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpFilled12.category = 'Arrows';

export default ChevronUpFilled12;
