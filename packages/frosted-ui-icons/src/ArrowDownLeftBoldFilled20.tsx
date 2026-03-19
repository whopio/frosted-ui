import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.24999 16.75L3.24999 5.75001M3.24999 16.75L14.25 16.75M3.24999 16.75L16.75 3.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeftBoldFilled20.category = 'Arrows';

export default ArrowDownLeftBoldFilled20;
