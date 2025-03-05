import * as React from 'react';
import { IconProps } from './types';

export const Book20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 3.50008L10 18.0001M0.75 4.01128V18.2501C3 16.0001 8 16.0001 10 18.2501C12 16.0001 17 16.0001 19.25 18.2501V4.01422C19.25 3.73506 19.1364 3.46522 18.9167 3.29293C16.5796 1.45972 12.382 1.12174 10 3.57648C7.61802 1.12174 3.42043 1.45976 1.08326 3.29293C0.863608 3.46522 0.75 3.73212 0.75 4.01128Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Book20;
