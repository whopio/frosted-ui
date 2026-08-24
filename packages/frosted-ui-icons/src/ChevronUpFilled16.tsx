import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpFilled16"
      {...props}
    >
      <path
        d="M3.25 9.75l4.517-4.517c.129-.129.337-.129.466 0L12.75 9.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpFilled16.category = 'Arrows';

export default ChevronUpFilled16;
