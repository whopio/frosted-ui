import * as React from 'react';
import { IconProps } from './types';

export const LilstNumber32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M15.7917 19.4583H22.875M15.7917 11.5416H22.875M11.2083 13.625V9.45831L9.125 10.9166M9.33333 17.9431C9.33333 17.9431 9.93644 17.375 10.674 17.375C11.4117 17.375 12.0096 17.8932 12.0096 18.5325C12.0096 20.0321 9.125 20.2916 9.125 21.5416H12.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.3333 27H7.66667C6.19391 27 5 25.8061 5 24.3333V7.66667C5 6.19391 6.19391 5 7.66667 5H24.3333C25.8061 5 27 6.19391 27 7.66667V24.3333C27 25.8061 25.8061 27 24.3333 27Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LilstNumber32;
