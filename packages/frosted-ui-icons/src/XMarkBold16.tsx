import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2 2L7.99991 7.99996M14 14L7.99991 7.99996M7.99991 7.99996L2 14M7.99991 7.99996L14 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBold16.category = 'Interface General';

export default XMarkBold16;
