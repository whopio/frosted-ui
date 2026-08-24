import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpFilled20"
      {...props}
    >
      <path
        d="M3.25 12.75l6.453-6.453c.164-.164.43-.164.594 0l6.453 6.453"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpFilled20.category = 'Arrows';

export default ChevronUpFilled20;
