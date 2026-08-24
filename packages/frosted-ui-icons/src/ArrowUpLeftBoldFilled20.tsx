import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpLeftBoldFilled20"
      {...props}
    >
      <path
        d="M14.25 3.25h-11v11m0-11l13.5 13.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeftBoldFilled20.category = 'Arrows';

export default ArrowUpLeftBoldFilled20;
