import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.1712 5.17157L7.99963 8M10.8281 10.8284L7.99963 8M7.99963 8L5.1712 10.8284M7.99963 8L10.8281 5.17157"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallBold16.category = 'Product Icons';

export default XMarkSmallBold16;
