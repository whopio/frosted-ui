import * as React from 'react';
import { IconProps } from './types';

export const ArrowRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.2505 12.0001L14.0005 3.75M22.2505 12.0001L14.0005 20.25M22.2505 12.0001L1.75049 12.0001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRight24.category = 'Arrows';

export default ArrowRight24;
