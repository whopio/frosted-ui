import * as React from 'react';
import { IconProps } from './types';

export const Apps12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.99988 0.749985V2.74994M5.99988 2.74994C5.30954 2.74994 4.7499 3.30958 4.7499 3.99992C4.7499 4.69026 5.30954 5.24989 5.99988 5.24989C6.69022 5.24989 7.24985 4.69026 7.24985 3.99992C7.24985 3.30958 6.69022 2.74994 5.99988 2.74994ZM5.36764 5.07845L1.74996 11.2498M10.2498 11.2498L6.63211 5.07845M10.2498 5.99988C10.2498 5.99988 9.36202 9.24981 5.99988 9.24981C2.63773 9.24981 1.74996 5.99988 1.74996 5.99988"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Apps12;
