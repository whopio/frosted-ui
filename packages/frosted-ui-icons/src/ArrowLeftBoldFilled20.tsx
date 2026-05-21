import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.75024 16.5001L2.25 9.9999L8.75024 3.49976M2.25 9.9999H17.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftBoldFilled20.category = 'Arrows';

export default ArrowLeftBoldFilled20;
