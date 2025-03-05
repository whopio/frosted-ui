import * as React from 'react';
import { IconProps } from './types';

export const Sad24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.25 17.625C15.25 17.625 14.2941 15.75 12 15.75C9.70588 15.75 8.75 17.625 8.75 17.625"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sad24;
