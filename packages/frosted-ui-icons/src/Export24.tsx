import * as React from 'react';
import { IconProps } from './types';

export const Export24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.25 13.5V18.68C19.25 20.0994 18.0994 21.25 16.68 21.25H5.32C3.90063 21.25 2.75 20.0994 2.75 18.68V7.32C2.75 5.90063 3.90063 4.75 5.32 4.75H10.5M21.2499 2.75H14.9999M21.2499 2.75V9M21.2499 2.75L11.75 12.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Export24;
