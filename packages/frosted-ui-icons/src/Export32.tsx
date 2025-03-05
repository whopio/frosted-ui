import * as React from 'react';
import { IconProps } from './types';

export const Export32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M26.25 18.5V24.68C26.25 26.6517 24.6517 28.25 22.68 28.25H7.32C5.34834 28.25 3.75 26.6517 3.75 24.68V9.32C3.75 7.34834 5.34834 5.75 7.32 5.75H13.5M28.2499 3.75H19.9999M28.2499 3.75V12M28.2499 3.75L16.75 15.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Export32;
