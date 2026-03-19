import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.5201 10.5199L16.0002 16M21.4803 21.4801L16.0002 16M16.0002 16L10.5201 21.4801M16.0002 16L21.4803 10.5199"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallFilled32.category = 'Product Icons';

export default XMarkSmallFilled32;
