import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangleBoldFilled16"
      {...props}
    >
      <path
        d="M5.742 2.134c.998-1.746 3.517-1.746 4.516 0L15.5 11.31c.99 1.733-.261 3.89-2.257 3.89H2.757C.76 15.2-.491 13.043.5 11.31l5.242-9.176zM8 10.5c-.553 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM8 5c-.414 0-.75.336-.75.75V9c0 .414.336.75.75.75s.75-.336.75-.75V5.75C8.75 5.336 8.415 5 8 5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled16.category = 'Interface General';

export default ExclamationTriangleBoldFilled16;
