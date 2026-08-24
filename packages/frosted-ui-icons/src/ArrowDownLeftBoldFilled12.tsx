import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownLeftBoldFilled12"
      {...props}
    >
      <path
        d="M8.75 9.75h-6.5v-6.5m0 6.5l7.5-7.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeftBoldFilled12.category = 'Arrows';

export default ArrowDownLeftBoldFilled12;
