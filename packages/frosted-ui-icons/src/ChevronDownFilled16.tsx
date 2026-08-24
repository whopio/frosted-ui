import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownFilled16"
      {...props}
    >
      <path
        d="M2.25 6l5.517 5.517c.129.129.337.129.466 0L13.75 6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownFilled16.category = 'Arrows';

export default ChevronDownFilled16;
