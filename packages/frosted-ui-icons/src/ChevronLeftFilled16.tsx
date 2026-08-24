import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftFilled16"
      {...props}
    >
      <path
        d="M9.5 3.25L4.983 7.767c-.129.129-.129.337 0 .466L9.5 12.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftFilled16.category = 'Arrows';

export default ChevronLeftFilled16;
