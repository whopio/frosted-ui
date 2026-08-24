import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownBoldFilled24"
      {...props}
    >
      <path
        d="M3.5 8.25l8.146 8.146c.196.196.512.196.708 0L20.5 8.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBoldFilled24.category = 'Arrows';

export default ChevronDownBoldFilled24;
