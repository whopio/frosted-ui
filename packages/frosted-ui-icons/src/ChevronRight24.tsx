import * as React from 'react';
import { IconProps } from './types';

export const ChevronRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 2.75L16.8964 11.6464C17.0917 11.8417 17.0917 12.1583 16.8964 12.3536L8 21.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRight24.category = 'Arrows';

export default ChevronRight24;
