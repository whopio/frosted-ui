import * as React from 'react';
import { IconProps } from './types';

export const Document12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.12053 0C1.94939 0 1 0.949392 1 2.12053V9.87947C1 11.0506 1.94939 12 3.12053 12H8.87947C10.0506 12 11 11.0506 11 9.87947V4.26685C11 3.70281 10.7753 3.16201 10.3756 2.76407L8.21962 0.617742C7.82222 0.222113 7.28429 0 6.72354 0H3.12053ZM2.5 2.12053C2.5 1.77782 2.77782 1.5 3.12053 1.5H6.72354C6.7263 1.5 6.72906 1.50002 6.73182 1.50006C6.73789 1.50014 6.74395 1.50031 6.75 1.50056V2.88C6.75 3.63663 7.36337 4.25 8.12 4.25H9.49977L9.5 4.26685V9.87947C9.5 10.2222 9.22218 10.5 8.87947 10.5H3.12053C2.77782 10.5 2.5 10.2222 2.5 9.87947V2.12053Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Document12;
