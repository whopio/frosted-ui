import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeftBold20"
      {...props}
    >
      <path
        d="M8.5 16.5L2 10l6.5-6.5M2 10h16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftBold20.category = 'Arrows';

export default ArrowLeftBold20;
