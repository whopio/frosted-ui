import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.75049 12.0001L10.0005 3.75M1.75049 12.0001L10.0005 20.25M1.75049 12.0001L22.2505 12.0001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeft24.category = 'Arrows';

export default ArrowLeft24;
