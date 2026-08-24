import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpBoldFilled12"
      {...props}
    >
      <path
        d="M2.5 7.25l3.323-3.323c.098-.098.256-.098.354 0L9.5 7.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBoldFilled12.category = 'Arrows';

export default ChevronUpBoldFilled12;
