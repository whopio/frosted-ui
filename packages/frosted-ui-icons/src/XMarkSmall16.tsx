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
        d="M4.99919 4.99983L7.99936 8M10.9995 11.0002L7.99936 8M7.99936 8L4.99919 11.0002M7.99936 8L10.9995 4.99983"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmall16.category = 'Interface General';

export default XMarkSmall16;
