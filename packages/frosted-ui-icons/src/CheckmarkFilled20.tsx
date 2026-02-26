import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.2002 10.7855L6.92639 16.5117L19.7002 3.73791"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CheckmarkFilled20.category = 'Checkmarks';

export default CheckmarkFilled20;
