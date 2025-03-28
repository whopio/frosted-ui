import * as React from 'react';
import { IconProps } from './types';

export const Copy12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.74995 6.22555V1.77437C4.74995 1.20862 5.20858.749992 5.77433.749992H10.2256C10.7913.749992 11.25 1.20862 11.25 1.77437V6.22555C11.25 6.7913 10.7913 7.24993 10.2256 7.24993H5.77433C5.20858 7.24993 4.74995 6.7913 4.74995 6.22555zM2.25002 4.74995H1.77437C1.20862 4.74995.749992 5.20858.749992 5.77433V10.2255C.749992 10.7913 1.20862 11.2499 1.77437 11.2499H6.22564C6.79139 11.2499 7.25002 10.7913 7.25002 10.2255V9.7499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Copy12;
