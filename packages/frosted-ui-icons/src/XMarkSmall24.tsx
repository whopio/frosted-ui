import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.58055 7.58058L12 12M16.4194 16.4194L12 12M12 12L7.58055 16.4194M12 12L16.4194 7.58058"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmall24.category = 'Product Icons';

export default XMarkSmall24;
