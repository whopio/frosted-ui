import * as React from 'react';
import { IconProps } from './types';

export const YoutubeFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.4695 2.67176C14.0723 2.85834 14.5459 3.40609 14.7073 4.10309C14.9988 5.36516 15 7.99992 15 7.99992C15 7.99992 15 10.6347 14.7073 11.8968C14.5459 12.5938 14.0723 13.1415 13.4695 13.3281C12.3782 13.6666 8 13.6666 8 13.6666C8 13.6666 3.62183 13.6666 2.53045 13.3281C1.92773 13.1415 1.45407 12.5938 1.29272 11.8968C1 10.6347 1 7.99992 1 7.99992C1 7.99992 1 5.36516 1.29272 4.10309C1.45407 3.40609 1.92773 2.85834 2.53045 2.67176C3.62183 2.33325 8 2.33325 8 2.33325C8 2.33325 12.3782 2.33325 13.4695 2.67176ZM10.3423 8.00012L6.5319 10.1999V5.80035L10.3423 8.00012Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default YoutubeFilled16;
