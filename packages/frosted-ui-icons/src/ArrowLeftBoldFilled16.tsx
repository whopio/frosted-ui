import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeftBoldFilled16"
      {...props}
    >
      <path
        d="M7.75 13.5L2.25 8l5.5-5.5M2.25 8h11.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftBoldFilled16.category = 'Arrows';

export default ArrowLeftBoldFilled16;
