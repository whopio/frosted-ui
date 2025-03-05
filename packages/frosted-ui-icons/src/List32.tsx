import * as React from 'react';
import { IconProps } from './types';

export const List32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.25 25.68V6.32C3.25 4.34834 4.84834 2.75 6.82 2.75H26.18C28.1517 2.75 29.75 4.34834 29.75 6.32V25.68C29.75 27.6517 28.1517 29.25 26.18 29.25H6.82C4.84834 29.25 3.25 27.6517 3.25 25.68zM13.75 10.0593H25.25M13.75 16.0593H22.25M13.75 22.0593H19.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="9.059"
        cy="10.059"
        r="1.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="9.059"
        cy="16.059"
        r="1.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="9.059"
        cy="22.059"
        r="1.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default List32;
