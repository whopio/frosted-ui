import * as React from 'react';
import { IconProps } from './types';

export const Play24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.155 10.3209L8.8365 2.99712C7.50578 2.13606 5.75 3.09125 5.75 4.67626V19.3237C5.75 20.9087 7.50577 21.8639 8.8365 21.0029L20.155 13.6791C21.373 12.891 21.373 11.109 20.155 10.3209Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Play24;
