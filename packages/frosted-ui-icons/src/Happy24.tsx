import * as React from 'react';
import { IconProps } from './types';

export const Happy24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle
        cx="12"
        cy="12"
        r="10.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.25" cy="13.25" r="1.25" fill={color} />
      <circle
        cx="1.25"
        cy="1.25"
        r="1.25"
        transform="matrix(-1 0 0 1 18 12)"
        fill={color}
      />
      <path
        d="M15.25 16.375C15.25 16.375 14.2941 18.25 12 18.25C9.70588 18.25 8.75 16.375 8.75 16.375"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Happy24;
