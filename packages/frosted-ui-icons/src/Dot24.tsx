import * as React from 'react';
import { IconProps } from './types';

export const Dot24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.75 12C6.75 9.10051 9.1005 6.75 12 6.75C14.8995 6.75 17.25 9.10051 17.25 12C17.25 14.8995 14.8995 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot24.category = 'Product Icons';

export default Dot24;
