import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.001 26.75L29.751 16.0001L19.001 5.25M29.751 16.0001H2.25098"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightBoldFilled32.category = 'Arrows';

export default ArrowRightBoldFilled32;
