import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.125 1.75L7.22855 11.6464C7.03329 11.8417 7.03329 12.1583 7.22856 12.3536L17.125 22.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeft24.category = 'Arrows';

export default ChevronLeft24;
