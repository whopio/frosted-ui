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
        d="M7.00002 6.99998L12 12M17 17L12 12M12 12L7.00002 17M12 12L17 6.99998"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmall24.category = 'Interface General';

export default XMarkSmall24;
