import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.99446 4.9948L7.99967 8M11.0049 11.0052L7.99967 8M7.99967 8L4.99446 11.0052M7.99967 8L11.0049 4.9948"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmall16.category = 'Product Icons';

export default XMarkSmall16;
