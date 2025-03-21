import * as React from 'react';
import { IconProps } from './types';

export const Mail12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M0.750107 3.49993L4.09722 5.68398C4.66313 6.05325 5.32427 6.24987 6 6.24987C6.67574 6.24987 7.33687 6.05325 7.90278 5.68398L11.2499 3.49993M2.26008 10.2498H9.73992C10.5739 10.2498 11.2499 9.57375 11.2499 8.73982V3.25993C11.2499 2.426 10.5739 1.74996 9.73992 1.74996H2.26008C1.42614 1.74996 0.750107 2.426 0.750107 3.25993V8.73982C0.750107 9.57376 1.42614 10.2498 2.26008 10.2498Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Mail12;
