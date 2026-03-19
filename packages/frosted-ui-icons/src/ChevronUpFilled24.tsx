import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.75 14.5L11.6465 9.60355C11.8418 9.40829 12.1584 9.40829 12.3536 9.60356L17.25 14.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpFilled24.category = 'Arrows';

export default ChevronUpFilled24;
