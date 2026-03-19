import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.24988 2.25001L7.99999 8M13.75 13.75L7.99999 8M7.99999 8L2.2501 13.75M7.99999 8L13.75 2.25002"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkFilled16.category = 'Product Icons';

export default XMarkFilled16;
