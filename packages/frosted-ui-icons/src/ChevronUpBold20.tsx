import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpBold20"
      {...props}
    >
      <path
        d="M3 13l6.703-6.703c.164-.164.43-.164.594 0L17 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBold20.category = 'Arrows';

export default ChevronUpBold20;
