import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeft16"
      {...props}
    >
      <path
        d="M10 2.75L4.983 7.767c-.129.129-.129.337 0 .466L10 13.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeft16.category = 'Arrows';

export default ChevronLeft16;
