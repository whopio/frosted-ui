import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2 2L9.9999 9.99996M18 18L9.9999 9.99996M9.9999 9.99996L2 18M9.9999 9.99996L18 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBold20.category = 'Interface General';

export default XMarkBold20;
