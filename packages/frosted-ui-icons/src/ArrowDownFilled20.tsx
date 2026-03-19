import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.0001 17.75L3.5 11.2498M10.0001 17.75L16.5004 11.2498M10.0001 17.75V2.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownFilled20.category = 'Arrows';

export default ArrowDownFilled20;
