import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracket24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracket24"
      {...props}
    >
      <path
        d="M22.25 12.5c.414 0 .75.336.75.75v3c0 3.728-3.022 6.75-6.75 6.75h-8.5C4.022 23 1 19.978 1 16.25v-3c0-.414.336-.75.75-.75s.75.336.75.75v3c0 2.9 2.35 5.25 5.25 5.25h8.5c2.9 0 5.25-2.35 5.25-5.25v-3c0-.414.336-.75.75-.75zM11.116 1.366c.488-.488 1.28-.488 1.768 0l6.146 6.147c.293.292.293.767 0 1.06-.293.293-.767.293-1.06 0l-5.22-5.22V15.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.353l-5.22 5.22c-.293.293-.767.293-1.06 0-.293-.293-.293-.768 0-1.06l6.146-6.147z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracket24.category = 'Arrows';

export default ArrowUpFromBracket24;
