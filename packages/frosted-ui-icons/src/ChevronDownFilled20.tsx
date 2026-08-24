import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownFilled20"
      {...props}
    >
      <path
        d="M3.25 7.25l6.453 6.453c.164.164.43.164.594 0L16.75 7.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownFilled20.category = 'Arrows';

export default ChevronDownFilled20;
